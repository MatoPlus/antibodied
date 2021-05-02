import TextField from '@material-ui/core/TextField';
import ExploreIcon from "@material-ui/icons/Explore";
import SearchIcon from "@material-ui/icons/Search";
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
import React, { useState } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import antibodyLogo from "./Antibody.png";
import { getPosts } from "./api";
import "./App.css";
import markers from "./constant";
import mapStyles from "./mapStyles";

const libraries = ["places"];

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
  margin: 0,
};
{
  /*100vw, 100vh*/
}
const center = {
  lat: 43.653908,
  lng: -79.384293,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const queryFilterFunc = queryInput => post => post.content.toLowerCase().includes(queryInput.toLowerCase());

function App() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [goodPosts, setGoodPosts] = useState([]);
  const [badPosts, setBadPosts] = useState([]);
  const [vaccine, setVaccine] = useState("az"); // az, pfizer, moderna,
  const [numGoodPosts, setNumGoodPosts] = useState(0);
  const [numBadPosts, setNumBadPosts] = useState(0);
  const [queryInput, setQueryInput] = useState("");

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyChf5WkmIVMEVYF1QlnAKhWAqnFzCxzPnQ",
    libraries,
  });

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(10);
  }, []);

  if (loadError) return "Error Loading Maps";
  if (!isLoaded) return "Loading Maps";

  const goodPostsSearched = queryInput ? goodPosts.filter(queryFilterFunc(queryInput)) : goodPosts;
  const badPostsSearched = queryInput ? badPosts.filter(queryFilterFunc(queryInput)) : badPosts;
  const numGoodPostsSearched = goodPostsSearched.length;
  const numBadPostsSearched = badPostsSearched.length;

  return (
    <div className="App">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Raleway:wght@400&display=swap');
      </style>
      <div className="app_title">
        <img src={antibodyLogo} className="app_logo" />
        <h1>Antibodied</h1>
      </div>

      <Locate panTo={panTo} />
      <Search panTo={panTo} />

      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        {markers.map((place) => (
          <Marker
            key={place.name}
            position={{ lat: place.latitude, lng: place.longitude }}
            onClick={() => {
              setSelectedPlace(place);
              getPosts(`${place.name}+${vaccine}`)
                .then((res) => {
                  console.log(res);
                  setGoodPosts(res.data.goodPosts || []);
                  setBadPosts(res.data.badPosts || []);
                  setNumGoodPosts(
                    res.data.goodPosts ? res.data.goodPosts.length : 0
                  );
                  setNumBadPosts(
                    res.data.badPosts ? res.data.badPosts.length : 0
                  );
                })
                .catch((err) => console.log(err));
            }}
          />
        ))}
        {/*Grab all backend data and place within these div tags within the IndoWindow!*/}
        {selectedPlace && (
          <InfoWindow
            position={{
              lat: selectedPlace.latitude,
              lng: selectedPlace.longitude,
            }}
            onCloseClick={() => {
              setSelectedPlace(null);
            }}
          >
            <div className="app_popup">
              <h2>{selectedPlace.name}</h2>
              {numGoodPosts && numBadPosts ? (
                <div className="tweets_search_wrapper">
                  <TextField
                    id="tweets_search_bar"
                    placeholder="Search tweets"
                    variant="outlined"
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                    onChange={(evt) => setQueryInput(evt.target.value.trim())}
                  />
                </div>
                ) : null}
              <div className="vaccine_change_wrapper">
                <form
                  onChange={(event) => {
                    const newVaccine = event.target.value;
                    setVaccine(newVaccine);
                    getPosts(`${selectedPlace.name}+${newVaccine}`)
                      .then((res) => {
                        console.log(res);
                        setGoodPosts(res.data.goodPosts || []);
                        setBadPosts(res.data.badPosts || []);
                        setNumGoodPosts(
                          res.data.goodPosts ? res.data.goodPosts.length : 0
                        );
                        setNumBadPosts(
                          res.data.badPosts ? res.data.badPosts.length : 0
                        );
                      })
                      .catch((err) => console.log(err));
                  }}
                >
                  <select value={vaccine} className="app_popupSelect" style={{ left: `${(numBadPosts || numGoodPosts) ? 10 : 0}px`, bottom: `${(numBadPosts || numGoodPosts) ? 10 : 0}px` }}>
                    <option value="az">AstraZeneca</option>
                    <option value="pfizer">Pfizer</option>
                    <option value="moderna">Moderna</option>
                  </select>
                </form>
                {numBadPostsSearched && numGoodPostsSearched ? (
                  <h1>
                    <b>
                      {(
                        (numGoodPostsSearched / (numBadPostsSearched + numGoodPostsSearched)) *
                        100
                      ).toFixed(1)}
                      % Good Vibes
                    </b>
                  </h1>
                ) : null}
                {numBadPostsSearched && !numGoodPostsSearched ? <h1><b>0% Good Vibes</b></h1> : null}
                {!numBadPostsSearched && numGoodPostsSearched ? <h1><b>100% Good Vibes!</b></h1> : null}
              </div>
              {numBadPostsSearched && numGoodPostsSearched ? (
                <progress
                  value={(numGoodPostsSearched / (numBadPostsSearched + numGoodPostsSearched)) * 100}
                  max="100"
                />
              ) : null}
              {numBadPostsSearched && !numGoodPostsSearched ? (
                <progress value={0} max="100" />
              ) : null}
              {!numBadPostsSearched && numGoodPostsSearched ? (
                <progress value={100} max="100" />
              ) : null}
              {!numBadPostsSearched && !numGoodPostsSearched ? (
                <div className="no-post">It's quiet around here...</div>
              ) : (
                <table className="vaccine_tweets_table">
                  <tr>
                    <td className="tweet-tableGood">
                      {goodPostsSearched.map((post) => (
                        <div>
                          <div className="tweet-header">
                            <img
                              alt=""
                              draggable="true"
                              src={post.profileImg}
                            />
                            <table>
                              <tr>
                                <b>{post.user}</b>
                              </tr>
                              <tr>@{post.handle}</tr>
                            </table>
                          </div>
                          <div className="tweet-content">{post.content}</div>
                        </div>
                      ))}
                    </td>
                    <td className="tweet-tableBad">
                      {badPostsSearched.map((post) => (
                        <div>
                          <div className="tweet-header">
                            <img
                              alt=""
                              draggable="true"
                              src={post.profileImg}
                            />
                            <table>
                              <tr>
                                <b>{post.user}</b>
                              </tr>
                              <tr>@{post.handle}</tr>
                            </table>
                          </div>
                          <div className="tweet-content">{post.content}</div>
                        </div>
                      ))}
                    </td>
                  </tr>
                </table>
              )}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}

function Locate({ panTo }) {
  return (
    <button
      className="app_locateButton"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <ExploreIcon className="app_locateIcon" />
    </button>
  );
}

function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 43.653225, lng: () => -79.383186 },
      radius: 200 * 1000,
    },
  });

  const searchHelper = async () => {
    try {
      const results = await getGeocode({ address: value });
      console.log(results);
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("error!");
    }
  };

  return (
    <div className="app_search">
      <Combobox
        onSelect={async (address) => {
          setValue(address, false);
          clearSuggestions();
          try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            panTo({ lat, lng });
          } catch (error) {
            console.log("error!");
          }
          console.log(address);
        }}
      >
        <ComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyDown={async (e) => {
            if (e.key === "Enter") {
              searchHelper(data);
            }
          }}
          disabled={!ready}
          placeholder="Enter an Address "
        />
        <SearchIcon
          className="app_searchLogo"
          onClick={async () => {
            searchHelper(data);
          }}
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id + description} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}

export default App;
