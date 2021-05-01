const markers = [
 {
   "name": "Toronto",
   "latitude": 43.7417,
   "longitude": -79.3733
 },
 {
   "name": "Montreal",
   "latitude": 45.5089,
   "longitude": -73.5617
 },
 {
   "name": "Vancouver",
   "latitude": 49.25,
   "longitude": -123.1
 },
 {
   "name": "Calgary",
   "latitude": 51.05,
   "longitude": -114.0667
 },
 {
   "name": "Edmonton",
   "latitude": 53.5344,
   "longitude": -113.4903
 },
 {
   "name": "Ottawa",
   "latitude": 45.4247,
   "longitude": -75.695
 },
 {
   "name": "Mississauga",
   "latitude": 43.6,
   "longitude": -79.65
 },
 {
   "name": "Winnipeg",
   "latitude": 49.8844,
   "longitude": -97.1464
 },
 {
   "name": "Quebec City",
   "latitude": 46.8139,
   "longitude": -71.2081
 },
 {
   "name": "Hamilton",
   "latitude": 43.2567,
   "longitude": -79.8692
 },
 {
   "name": "Brampton",
   "latitude": 43.6833,
   "longitude": -79.7667
 },
 {
   "name": "Surrey",
   "latitude": 49.19,
   "longitude": -122.8489
 },
 {
   "name": "Kitchener",
   "latitude": 43.4186,
   "longitude": -80.4728
 },
 {
   "name": "Laval",
   "latitude": 45.5833,
   "longitude": -73.75
 },
 {
   "name": "Halifax",
   "latitude": 44.6475,
   "longitude": -63.5906
 },
 {
   "name": "London",
   "latitude": 42.9836,
   "longitude": -81.2497
 },
 {
   "name": "Victoria",
   "latitude": 48.4283,
   "longitude": -123.3647
 },
 {
   "name": "Markham",
   "latitude": 43.8767,
   "longitude": -79.2633
 },
 {
   "name": "St. Catharines",
   "latitude": 43.1833,
   "longitude": -79.2333
 },
 {
   "name": "Niagara Falls",
   "latitude": 43.06,
   "longitude": -79.1067
 },
 {
   "name": "Vaughan",
   "latitude": 43.8333,
   "longitude": -79.5
 },
 {
   "name": "Gatineau",
   "latitude": 45.4833,
   "longitude": -75.65
 },
 {
   "name": "Windsor",
   "latitude": 42.2833,
   "longitude": -83
 },
 {
   "name": "Saskatoon",
   "latitude": 52.1333,
   "longitude": -106.6833
 },
 {
   "name": "Longueuil",
   "latitude": 45.5333,
   "longitude": -73.5167
 },
 {
   "name": "Burnaby",
   "latitude": 49.2667,
   "longitude": -122.9667
 },
 {
   "name": "Regina",
   "latitude": 50.4547,
   "longitude": -104.6067
 },
 {
   "name": "Richmond",
   "latitude": 49.1667,
   "longitude": -123.1333
 },
 {
   "name": "Richmond Hill",
   "latitude": 43.8667,
   "longitude": -79.4333
 },
 {
   "name": "Oakville",
   "latitude": 43.45,
   "longitude": -79.6833
 },
 {
   "name": "Burlington",
   "latitude": 43.3167,
   "longitude": -79.8
 },
 {
   "name": "Barrie",
   "latitude": 44.3711,
   "longitude": -79.6769
 },
 {
   "name": "Oshawa",
   "latitude": 43.9,
   "longitude": -78.85
 },
 {
   "name": "Sherbrooke",
   "latitude": 45.4,
   "longitude": -71.9
 },
 {
   "name": "Saguenay",
   "latitude": 48.4167,
   "longitude": -71.0667
 },
 {
   "name": "Levis",
   "latitude": 46.8,
   "longitude": -71.1833
 },
 {
   "name": "Kelowna",
   "latitude": 49.8881,
   "longitude": -119.4956
 },
 {
   "name": "Abbotsford",
   "latitude": 49.05,
   "longitude": -122.3167
 },
 {
   "name": "Coquitlam",
   "latitude": 49.2839,
   "longitude": -122.7919
 },
 {
   "name": "Trois-Rivieres",
   "latitude": 46.35,
   "longitude": -72.55
 },
 {
   "name": "Guelph",
   "latitude": 43.55,
   "longitude": -80.25
 },
 {
   "name": "Cambridge",
   "latitude": 43.3972,
   "longitude": -80.3114
 },
 {
   "name": "Whitby",
   "latitude": 43.8833,
   "longitude": -78.9417
 },
 {
   "name": "Ajax",
   "latitude": 43.8583,
   "longitude": -79.0364
 },
 {
   "name": "Langley",
   "latitude": 49.1044,
   "longitude": -122.5827
 },
 {
   "name": "Saanich",
   "latitude": 48.484,
   "longitude": -123.381
 },
 {
   "name": "Terrebonne",
   "latitude": 45.7,
   "longitude": -73.6333
 },
 {
   "name": "Milton",
   "latitude": 43.5083,
   "longitude": -79.8833
 },
 {
   "name": "St. John's",
   "latitude": 47.4817,
   "longitude": -52.7971
 },
 {
   "name": "Moncton",
   "latitude": 46.1328,
   "longitude": -64.7714
 },
 {
   "name": "Thunder Bay",
   "latitude": 48.3822,
   "longitude": -89.2461
 },
 {
   "name": "Dieppe",
   "latitude": 46.0989,
   "longitude": -64.7242
 },
 {
   "name": "Waterloo",
   "latitude": 43.4667,
   "longitude": -80.5167
 },
 {
   "name": "Delta",
   "latitude": 49.0847,
   "longitude": -123.0586
 },
 {
   "name": "Chatham",
   "latitude": 42.4229,
   "longitude": -82.1324
 },
 {
   "name": "Red Deer",
   "latitude": 52.2681,
   "longitude": -113.8111
 },
 {
   "name": "Kamloops",
   "latitude": 50.6761,
   "longitude": -120.3408
 },
 {
   "name": "Brantford",
   "latitude": 43.1667,
   "longitude": -80.25
 },
 {
   "name": "Cape Breton",
   "latitude": 46.1389,
   "longitude": -60.1931
 },
 {
   "name": "Lethbridge",
   "latitude": 49.6942,
   "longitude": -112.8328
 },
 {
   "name": "Saint-Jean-sur-Richelieu",
   "latitude": 45.3167,
   "longitude": -73.2667
 },
 {
   "name": "Clarington",
   "latitude": 43.935,
   "longitude": -78.6083
 },
 {
   "name": "Pickering",
   "latitude": 43.8354,
   "longitude": -79.089
 },
 {
   "name": "Nanaimo",
   "latitude": 49.1642,
   "longitude": -123.9364
 },
 {
   "name": "Sudbury",
   "latitude": 46.49,
   "longitude": -81.01
 },
 {
   "name": "North Vancouver",
   "latitude": 49.3641,
   "longitude": -123.0066
 },
 {
   "name": "Brossard",
   "latitude": 45.4667,
   "longitude": -73.45
 },
 {
   "name": "Repentigny",
   "latitude": 45.7333,
   "longitude": -73.4667
 },
 {
   "name": "Newmarket",
   "latitude": 44.05,
   "longitude": -79.4667
 },
 {
   "name": "Chilliwack",
   "latitude": 49.1577,
   "longitude": -121.9509
 },
 {
   "name": "White Rock",
   "latitude": 49.025,
   "longitude": -122.8028
 },
 {
   "name": "Maple Ridge",
   "latitude": 49.2167,
   "longitude": -122.6
 },
 {
   "name": "Peterborough",
   "latitude": 44.3,
   "longitude": -78.3167
 },
 {
   "name": "Kawartha Lakes",
   "latitude": 44.35,
   "longitude": -78.75
 },
 {
   "name": "Prince George",
   "latitude": 53.9169,
   "longitude": -122.7494
 },
 {
   "name": "Sault Ste. Marie",
   "latitude": 46.5333,
   "longitude": -84.35
 },
 {
   "name": "Sarnia",
   "latitude": 42.9994,
   "longitude": -82.3089
 },
 {
   "name": "Wood Buffalo",
   "latitude": 57.6042,
   "longitude": -111.3284
 },
 {
   "name": "New Westminster",
   "latitude": 49.2069,
   "longitude": -122.9111
 },
 {
   "name": "Chateauguay",
   "latitude": 45.38,
   "longitude": -73.75
 },
 {
   "name": "Saint-Jerome",
   "latitude": 45.7833,
   "longitude": -74
 },
 {
   "name": "Drummondville",
   "latitude": 45.8833,
   "longitude": -72.4833
 },
 {
   "name": "Saint John",
   "latitude": 45.2806,
   "longitude": -66.0761
 },
 {
   "name": "Caledon",
   "latitude": 43.8667,
   "longitude": -79.8667
 },
 {
   "name": "St. Albert",
   "latitude": 53.6303,
   "longitude": -113.6258
 },
 {
   "name": "Granby",
   "latitude": 45.4,
   "longitude": -72.7333
 },
 {
   "name": "Medicine Hat",
   "latitude": 50.0417,
   "longitude": -110.6775
 },
 {
   "name": "Grande Prairie",
   "latitude": 55.1708,
   "longitude": -118.7947
 },
 {
   "name": "St. Thomas",
   "latitude": 42.775,
   "longitude": -81.1833
 },
 {
   "name": "Airdrie",
   "latitude": 51.2917,
   "longitude": -114.0144
 },
 {
   "name": "Halton Hills",
   "latitude": 43.63,
   "longitude": -79.95
 },
 {
   "name": "Saint-Hyacinthe",
   "latitude": 45.6167,
   "longitude": -72.95
 },
 {
   "name": "Lac-Brome",
   "latitude": 45.2167,
   "longitude": -72.5167
 },
 {
   "name": "Port Coquitlam",
   "latitude": 49.2625,
   "longitude": -122.7811
 },
 {
   "name": "Fredericton",
   "latitude": 45.9636,
   "longitude": -66.6431
 },
 {
   "name": "Blainville",
   "latitude": 45.67,
   "longitude": -73.88
 },
 {
   "name": "Aurora",
   "latitude": 44,
   "longitude": -79.4667
 },
 {
   "name": "Welland",
   "latitude": 42.9833,
   "longitude": -79.2333
 },
 {
   "name": "North Bay",
   "latitude": 46.3,
   "longitude": -79.45
 },
 {
   "name": "Beloeil",
   "latitude": 45.5667,
   "longitude": -73.2
 },
 {
   "name": "Belleville",
   "latitude": 44.1667,
   "longitude": -77.3833
 },
 {
   "name": "Mirabel",
   "latitude": 45.65,
   "longitude": -74.0833
 },
 {
   "name": "Shawinigan",
   "latitude": 46.5667,
   "longitude": -72.75
 },
 {
   "name": "Dollard-des-Ormeaux",
   "latitude": 45.4833,
   "longitude": -73.8167
 },
 {
   "name": "Brandon",
   "latitude": 49.8483,
   "longitude": -99.95
 },
 {
   "name": "Rimouski",
   "latitude": 48.45,
   "longitude": -68.53
 },
 {
   "name": "Cornwall",
   "latitude": 45.0275,
   "longitude": -74.74
 },
 {
   "name": "Stouffville",
   "latitude": 43.9667,
   "longitude": -79.25
 },
 {
   "name": "Georgina",
   "latitude": 44.3,
   "longitude": -79.4333
 },
 {
   "name": "Victoriaville",
   "latitude": 46.05,
   "longitude": -71.9667
 },
 {
   "name": "Vernon",
   "latitude": 50.267,
   "longitude": -119.272
 },
 {
   "name": "Duncan",
   "latitude": 48.7787,
   "longitude": -123.7079
 },
 {
   "name": "Saint-Eustache",
   "latitude": 45.57,
   "longitude": -73.9
 },
 {
   "name": "Quinte West",
   "latitude": 44.1833,
   "longitude": -77.5667
 },
 {
   "name": "Charlottetown",
   "latitude": 46.2403,
   "longitude": -63.1347
 },
 {
   "name": "Mascouche",
   "latitude": 45.75,
   "longitude": -73.6
 },
 {
   "name": "West Vancouver",
   "latitude": 49.3667,
   "longitude": -123.1667
 },
 {
   "name": "Salaberry-de-Valleyfield",
   "latitude": 45.25,
   "longitude": -74.13
 },
 {
   "name": "Rouyn-Noranda",
   "latitude": 48.2333,
   "longitude": -79.0167
 },
 {
   "name": "Timmins",
   "latitude": 48.4667,
   "longitude": -81.3333
 },
 {
   "name": "Sorel-Tracy",
   "latitude": 46.0333,
   "longitude": -73.1167
 },
 {
   "name": "New Tecumseth",
   "latitude": 44.0833,
   "longitude": -79.75
 },
 {
   "name": "Woodstock",
   "latitude": 43.1306,
   "longitude": -80.7467
 },
 {
   "name": "Boucherville",
   "latitude": 45.6,
   "longitude": -73.45
 },
 {
   "name": "Mission",
   "latitude": 49.1337,
   "longitude": -122.3112
 },
 {
   "name": "Vaudreuil-Dorion",
   "latitude": 45.4,
   "longitude": -74.0333
 },
 {
   "name": "Brant",
   "latitude": 43.1167,
   "longitude": -80.3667
 },
 {
   "name": "Lakeshore",
   "latitude": 42.2399,
   "longitude": -82.6511
 },
 {
   "name": "Innisfil",
   "latitude": 44.3,
   "longitude": -79.5833
 },
 {
   "name": "Prince Albert",
   "latitude": 53.2,
   "longitude": -105.75
 },
 {
   "name": "Langford Station",
   "latitude": 48.4506,
   "longitude": -123.5058
 },
 {
   "name": "Bradford West Gwillimbury",
   "latitude": 44.1333,
   "longitude": -79.6333
 },
 {
   "name": "Campbell River",
   "latitude": 50.0244,
   "longitude": -125.2475
 },
 {
   "name": "Spruce Grove",
   "latitude": 53.545,
   "longitude": -113.9008
 },
 {
   "name": "Moose Jaw",
   "latitude": 50.3933,
   "longitude": -105.5519
 },
 {
   "name": "Penticton",
   "latitude": 49.4911,
   "longitude": -119.5886
 },
 {
   "name": "Port Moody",
   "latitude": 49.2831,
   "longitude": -122.8317
 },
 {
   "name": "Leamington",
   "latitude": 42.0667,
   "longitude": -82.5833
 },
 {
   "name": "East Kelowna",
   "latitude": 49.8625,
   "longitude": -119.5833
 },
 {
   "name": "Cote-Saint-Luc",
   "latitude": 45.4687,
   "longitude": -73.6673
 },
 {
   "name": "Val-d'Or",
   "latitude": 48.1,
   "longitude": -77.7833
 },
 {
   "name": "Owen Sound",
   "latitude": 44.5667,
   "longitude": -80.9333
 },
 {
   "name": "Pointe-Claire",
   "latitude": 45.45,
   "longitude": -73.8167
 },
 {
   "name": "Orillia",
   "latitude": 44.6,
   "longitude": -79.4167
 },
 {
   "name": "Alma",
   "latitude": 48.55,
   "longitude": -71.65
 },
 {
   "name": "Orangeville",
   "latitude": 43.9167,
   "longitude": -80.1167
 },
 {
   "name": "Fort Erie",
   "latitude": 42.9167,
   "longitude": -79.0167
 },
 {
   "name": "LaSalle",
   "latitude": 42.2167,
   "longitude": -83.0667
 },
 {
   "name": "Sainte-Julie",
   "latitude": 45.5833,
   "longitude": -73.3333
 },
 {
   "name": "Leduc",
   "latitude": 53.2594,
   "longitude": -113.5492
 },
 {
   "name": "North Cowichan",
   "latitude": 48.8236,
   "longitude": -123.7192
 },
 {
   "name": "Chambly",
   "latitude": 45.4311,
   "longitude": -73.2873
 },
 {
   "name": "Okotoks",
   "latitude": 50.725,
   "longitude": -113.975
 },
 {
   "name": "Sept-Iles",
   "latitude": 50.2167,
   "longitude": -66.3833
 },
 {
   "name": "Centre Wellington",
   "latitude": 43.7,
   "longitude": -80.3667
 },
 {
   "name": "Saint-Constant",
   "latitude": 45.37,
   "longitude": -73.57
 },
 {
   "name": "Grimsby",
   "latitude": 43.2,
   "longitude": -79.55
 },
 {
   "name": "Boisbriand",
   "latitude": 45.62,
   "longitude": -73.83
 },
 {
   "name": "Conception Bay South",
   "latitude": 47.5167,
   "longitude": -52.9833
 },
 {
   "name": "Saint-Bruno-de-Montarville",
   "latitude": 45.5333,
   "longitude": -73.35
 },
 {
   "name": "Sainte-Therese",
   "latitude": 45.6333,
   "longitude": -73.85
 },
 {
   "name": "Cochrane",
   "latitude": 51.189,
   "longitude": -114.467
 },
 {
   "name": "Thetford Mines",
   "latitude": 46.1,
   "longitude": -71.3
 },
 {
   "name": "Courtenay",
   "latitude": 49.6878,
   "longitude": -124.9944
 },
 {
   "name": "Magog",
   "latitude": 45.2667,
   "longitude": -72.15
 },
 {
   "name": "Whitehorse",
   "latitude": 60.7029,
   "longitude": -135.0691
 },
 {
   "name": "Woolwich",
   "latitude": 43.5667,
   "longitude": -80.4833
 },
 {
   "name": "Clarence-Rockland",
   "latitude": 45.4833,
   "longitude": -75.2
 },
 {
   "name": "Fort Saskatchewan",
   "latitude": 53.7128,
   "longitude": -113.2133
 },
 {
   "name": "East Gwillimbury",
   "latitude": 44.1333,
   "longitude": -79.4167
 },
 {
   "name": "Lincoln",
   "latitude": 43.13,
   "longitude": -79.43
 },
 {
   "name": "La Prairie",
   "latitude": 45.42,
   "longitude": -73.5
 },
 {
   "name": "Tecumseh",
   "latitude": 42.2431,
   "longitude": -82.9256
 },
 {
   "name": "Mount Pearl Park",
   "latitude": 47.5189,
   "longitude": -52.8058
 },
 {
   "name": "Amherstburg",
   "latitude": 42.1,
   "longitude": -83.0833
 },
 {
   "name": "Saint-Lambert",
   "latitude": 45.5,
   "longitude": -73.5167
 },
 {
   "name": "Brockville",
   "latitude": 44.5833,
   "longitude": -75.6833
 },
 {
   "name": "Collingwood",
   "latitude": 44.5,
   "longitude": -80.2167
 },
 {
   "name": "Scugog",
   "latitude": 44.09,
   "longitude": -78.936
 },
 {
   "name": "Kingsville",
   "latitude": 42.1,
   "longitude": -82.7167
 },
 {
   "name": "Baie-Comeau",
   "latitude": 49.2167,
   "longitude": -68.15
 },
 {
   "name": "Paradise",
   "latitude": 47.5333,
   "longitude": -52.8667
 },
 {
   "name": "Uxbridge",
   "latitude": 44.1167,
   "longitude": -79.1333
 },
 {
   "name": "Essa",
   "latitude": 44.25,
   "longitude": -79.7833
 },
 {
   "name": "Candiac",
   "latitude": 45.38,
   "longitude": -73.52
 },
 {
   "name": "Oro-Medonte",
   "latitude": 44.5667,
   "longitude": -79.5833
 },
 {
   "name": "Varennes",
   "latitude": 45.6833,
   "longitude": -73.4333
 },
 {
   "name": "Strathroy-Caradoc",
   "latitude": 42.9575,
   "longitude": -81.6167
 },
 {
   "name": "Wasaga Beach",
   "latitude": 44.5206,
   "longitude": -80.0167
 },
 {
   "name": "New Glasgow",
   "latitude": 45.5926,
   "longitude": -62.6455
 },
 {
   "name": "Wilmot",
   "latitude": 43.4,
   "longitude": -80.65
 },
 {
   "name": "Essex",
   "latitude": 42.0833,
   "longitude": -82.9
 },
 {
   "name": "Fort St. John",
   "latitude": 56.2465,
   "longitude": -120.8476
 },
 {
   "name": "Kirkland",
   "latitude": 45.45,
   "longitude": -73.8667
 },
 {
   "name": "L'Assomption",
   "latitude": 45.8333,
   "longitude": -73.4167
 },
 {
   "name": "Westmount",
   "latitude": 45.4833,
   "longitude": -73.6
 },
 {
   "name": "Saint-Lazare",
   "latitude": 45.4,
   "longitude": -74.1333
 },
 {
   "name": "Chestermere",
   "latitude": 51.05,
   "longitude": -113.8225
 },
 {
   "name": "Huntsville",
   "latitude": 45.3333,
   "longitude": -79.2167
 },
 {
   "name": "Corner Brook",
   "latitude": 48.9287,
   "longitude": -57.926
 },
 {
   "name": "Riverview",
   "latitude": 46.0613,
   "longitude": -64.8052
 },
 {
   "name": "Lloydminster",
   "latitude": 53.2807,
   "longitude": -110.035
 },
 {
   "name": "Joliette",
   "latitude": 46.0167,
   "longitude": -73.45
 },
 {
   "name": "Yellowknife",
   "latitude": 62.4709,
   "longitude": -114.4053
 },
 {
   "name": "Squamish",
   "latitude": 49.7017,
   "longitude": -123.1589
 },
 {
   "name": "Mont-Royal",
   "latitude": 45.5161,
   "longitude": -73.6431
 },
 {
   "name": "Riviere-du-Loup",
   "latitude": 47.8333,
   "longitude": -69.5333
 },
 {
   "name": "Cobourg",
   "latitude": 43.9667,
   "longitude": -78.1667
 },
 {
   "name": "Cranbrook",
   "latitude": 49.5097,
   "longitude": -115.7667
 },
 {
   "name": "Beaconsfield",
   "latitude": 45.4333,
   "longitude": -73.8667
 },
 {
   "name": "Springwater",
   "latitude": 44.4333,
   "longitude": -79.7333
 },
 {
   "name": "Dorval",
   "latitude": 45.45,
   "longitude": -73.75
 },
 {
   "name": "Thorold",
   "latitude": 43.1167,
   "longitude": -79.2
 },
 {
   "name": "Camrose",
   "latitude": 53.0167,
   "longitude": -112.8333
 },
 {
   "name": "South Frontenac",
   "latitude": 44.5081,
   "longitude": -76.4939
 },
 {
   "name": "Pitt Meadows",
   "latitude": 49.2333,
   "longitude": -122.6833
 },
 {
   "name": "Port Colborne",
   "latitude": 42.8833,
   "longitude": -79.25
 },
 {
   "name": "Quispamsis",
   "latitude": 45.4322,
   "longitude": -65.9462
 },
 {
   "name": "Mont-Saint-Hilaire",
   "latitude": 45.5622,
   "longitude": -73.1917
 },
 {
   "name": "Bathurst",
   "latitude": 47.62,
   "longitude": -65.65
 },
 {
   "name": "Saint-Augustin-de-Desmaures",
   "latitude": 46.7333,
   "longitude": -71.4667
 },
 {
   "name": "Oak Bay",
   "latitude": 48.4264,
   "longitude": -123.3228
 },
 {
   "name": "Sainte-Marthe-sur-le-Lac",
   "latitude": 45.53,
   "longitude": -73.93
 },
 {
   "name": "Salmon Arm",
   "latitude": 50.7022,
   "longitude": -119.2722
 },
 {
   "name": "Port Alberni",
   "latitude": 49.2339,
   "longitude": -124.805
 },
 {
   "name": "Esquimalt",
   "latitude": 48.4306,
   "longitude": -123.4147
 },
 {
   "name": "Deux-Montagnes",
   "latitude": 45.5333,
   "longitude": -73.8833
 },
 {
   "name": "Miramichi",
   "latitude": 47.0196,
   "longitude": -65.5072
 },
 {
   "name": "Niagara-on-the-Lake",
   "latitude": 43.2553,
   "longitude": -79.0717
 },
 {
   "name": "Saint-Lin--Laurentides",
   "latitude": 45.85,
   "longitude": -73.7667
 },
 {
   "name": "Beaumont",
   "latitude": 53.3572,
   "longitude": -113.4147
 },
 {
   "name": "Middlesex Centre",
   "latitude": 43.05,
   "longitude": -81.45
 },
 {
   "name": "Inverness",
   "latitude": 46.2,
   "longitude": -61.1
 },
 {
   "name": "Stony Plain",
   "latitude": 53.5264,
   "longitude": -114.0069
 },
 {
   "name": "Petawawa",
   "latitude": 45.9,
   "longitude": -77.2833
 },
 {
   "name": "Pelham",
   "latitude": 43.0333,
   "longitude": -79.3333
 },
 {
   "name": "Selwyn",
   "latitude": 44.4167,
   "longitude": -78.3333
 },
 {
   "name": "Loyalist",
   "latitude": 44.25,
   "longitude": -76.75
 },
 {
   "name": "Midland",
   "latitude": 44.75,
   "longitude": -79.8833
 },
 {
   "name": "Colwood",
   "latitude": 48.4236,
   "longitude": -123.4958
 },
 {
   "name": "Central Saanich",
   "latitude": 48.5142,
   "longitude": -123.3839
 },
 {
   "name": "Sainte-Catherine",
   "latitude": 45.4,
   "longitude": -73.58
 },
 {
   "name": "Port Hope",
   "latitude": 43.95,
   "longitude": -78.3
 },
 {
   "name": "L'Ancienne-Lorette",
   "latitude": 46.8,
   "longitude": -71.35
 },
 {
   "name": "Saint-Basile-le-Grand",
   "latitude": 45.5333,
   "longitude": -73.2833
 },
 {
   "name": "Swift Current",
   "latitude": 50.2881,
   "longitude": -107.7939
 },
 {
   "name": "Edmundston",
   "latitude": 47.3765,
   "longitude": -68.3253
 },
 {
   "name": "Russell",
   "latitude": 45.2569,
   "longitude": -75.3583
 },
 {
   "name": "North Grenville",
   "latitude": 44.9667,
   "longitude": -75.65
 },
 {
   "name": "Yorkton",
   "latitude": 51.2139,
   "longitude": -102.4628
 },
 {
   "name": "Tracadie",
   "latitude": 47.5124,
   "longitude": -64.9101
 },
 {
   "name": "Bracebridge",
   "latitude": 45.0333,
   "longitude": -79.3
 },
 {
   "name": "Greater Napanee",
   "latitude": 44.25,
   "longitude": -76.95
 },
 {
   "name": "Tillsonburg",
   "latitude": 42.8667,
   "longitude": -80.7333
 },
 {
   "name": "Steinbach",
   "latitude": 49.5258,
   "longitude": -96.6839
 },
 {
   "name": "Terrace",
   "latitude": 54.5164,
   "longitude": -128.5997
 },
 {
   "name": "Springfield",
   "latitude": 49.9292,
   "longitude": -96.6939
 },
 {
   "name": "Gaspe",
   "latitude": 48.8333,
   "longitude": -64.4833
 },
 {
   "name": "Kenora",
   "latitude": 49.7667,
   "longitude": -94.4833
 },
 {
   "name": "Cold Lake",
   "latitude": 54.4642,
   "longitude": -110.1825
 },
 {
   "name": "Summerside",
   "latitude": 46.4,
   "longitude": -63.7833
 },
 {
   "name": "Comox",
   "latitude": 49.6733,
   "longitude": -124.9022
 },
 {
   "name": "Sylvan Lake",
   "latitude": 52.3083,
   "longitude": -114.0964
 },
 {
   "name": "Pincourt",
   "latitude": 45.3833,
   "longitude": -73.9833
 },
 {
   "name": "West Lincoln",
   "latitude": 43.0667,
   "longitude": -79.5667
 },
 {
   "name": "Matane",
   "latitude": 48.85,
   "longitude": -67.5333
 },
 {
   "name": "Brooks",
   "latitude": 50.5642,
   "longitude": -111.8989
 },
 {
   "name": "Sainte-Anne-des-Plaines",
   "latitude": 45.7617,
   "longitude": -73.8204
 },
 {
   "name": "West Nipissing / Nipissing Ouest",
   "latitude": 46.3667,
   "longitude": -79.9167
 },
 {
   "name": "Rosemere",
   "latitude": 45.6369,
   "longitude": -73.8
 },
 {
   "name": "Mistassini",
   "latitude": 48.8229,
   "longitude": -72.2154
 },
 {
   "name": "Grand Falls",
   "latitude": 48.9578,
   "longitude": -55.6633
 },
 {
   "name": "Clearview",
   "latitude": 44.3981,
   "longitude": -80.0742
 },
 {
   "name": "St. Clair",
   "latitude": 42.7833,
   "longitude": -82.35
 },
 {
   "name": "Canmore",
   "latitude": 51.089,
   "longitude": -115.359
 },
 {
   "name": "North Battleford",
   "latitude": 52.7575,
   "longitude": -108.2861
 },
 {
   "name": "Pembroke",
   "latitude": 45.8167,
   "longitude": -77.1
 },
 {
   "name": "Mont-Laurier",
   "latitude": 46.55,
   "longitude": -75.5
 },
 {
   "name": "Strathmore",
   "latitude": 51.0378,
   "longitude": -113.4003
 },
 {
   "name": "Saugeen Shores",
   "latitude": 44.4333,
   "longitude": -81.3667
 },
 {
   "name": "Thompson",
   "latitude": 55.7433,
   "longitude": -97.8553
 },
 {
   "name": "Lavaltrie",
   "latitude": 45.8833,
   "longitude": -73.2833
 },
 {
   "name": "High River",
   "latitude": 50.5808,
   "longitude": -113.8744
 },
 {
   "name": "Severn",
   "latitude": 44.75,
   "longitude": -79.5167
 },
 {
   "name": "Sainte-Sophie",
   "latitude": 45.82,
   "longitude": -73.9
 },
 {
   "name": "Saint-Charles-Borromee",
   "latitude": 46.05,
   "longitude": -73.4667
 },
 {
   "name": "Portage La Prairie",
   "latitude": 49.9728,
   "longitude": -98.2919
 },
 {
   "name": "Thames Centre",
   "latitude": 43.03,
   "longitude": -81.08
 },
 {
   "name": "Mississippi Mills",
   "latitude": 45.2167,
   "longitude": -76.2
 },
 {
   "name": "Powell River",
   "latitude": 49.8353,
   "longitude": -124.5247
 },
 {
   "name": "South Glengarry",
   "latitude": 45.2,
   "longitude": -74.5833
 },
 {
   "name": "North Perth",
   "latitude": 43.73,
   "longitude": -80.95
 },
 {
   "name": "Mercier",
   "latitude": 45.32,
   "longitude": -73.75
 },
 {
   "name": "South Stormont",
   "latitude": 45.0833,
   "longitude": -74.9667
 },
 {
   "name": "Saint-Colomban",
   "latitude": 45.73,
   "longitude": -74.13
 },
 {
   "name": "Lacombe",
   "latitude": 52.4683,
   "longitude": -113.7369
 },
 {
   "name": "Sooke",
   "latitude": 48.3761,
   "longitude": -123.7378
 },
 {
   "name": "Dawson Creek",
   "latitude": 55.7606,
   "longitude": -120.2356
 },
 {
   "name": "Lake Country",
   "latitude": 50.0833,
   "longitude": -119.4142
 },
 {
   "name": "Trent Hills",
   "latitude": 44.3142,
   "longitude": -77.8514
 },
 {
   "name": "Sainte-Marie",
   "latitude": 46.45,
   "longitude": -71.0333
 },
 {
   "name": "Guelph/Eramosa",
   "latitude": 43.63,
   "longitude": -80.22
 },
 {
   "name": "Truro",
   "latitude": 45.3647,
   "longitude": -63.28
 },
 {
   "name": "Amos",
   "latitude": 48.5667,
   "longitude": -78.1167
 },
 {
   "name": "The Nation / La Nation",
   "latitude": 45.35,
   "longitude": -75.0333
 },
 {
   "name": "Ingersoll",
   "latitude": 43.0392,
   "longitude": -80.8836
 },
 {
   "name": "Winkler",
   "latitude": 49.1817,
   "longitude": -97.9397
 },
 {
   "name": "Wetaskiwin",
   "latitude": 52.9694,
   "longitude": -113.3769
 },
 {
   "name": "Central Elgin",
   "latitude": 42.7667,
   "longitude": -81.1
 },
 {
   "name": "Lachute",
   "latitude": 45.65,
   "longitude": -74.3333
 },
 {
   "name": "West Grey",
   "latitude": 44.1833,
   "longitude": -80.8167
 },
 {
   "name": "Parksville",
   "latitude": 49.315,
   "longitude": -124.312
 },
 {
   "name": "Cowansville",
   "latitude": 45.2,
   "longitude": -72.75
 },
 {
   "name": "Becancour",
   "latitude": 46.3333,
   "longitude": -72.4333
 },
 {
   "name": "Gravenhurst",
   "latitude": 44.9167,
   "longitude": -79.3667
 },
 {
   "name": "Perth East",
   "latitude": 43.47,
   "longitude": -80.95
 },
 {
   "name": "Prince Rupert",
   "latitude": 54.3122,
   "longitude": -130.3271
 },
 {
   "name": "Prevost",
   "latitude": 45.87,
   "longitude": -74.08
 },
 {
   "name": "Sainte-Adele",
   "latitude": 45.95,
   "longitude": -74.13
 },
 {
   "name": "Kentville",
   "latitude": 45.0775,
   "longitude": -64.4958
 },
 {
   "name": "Beauharnois",
   "latitude": 45.32,
   "longitude": -73.87
 },
 {
   "name": "Les Iles-de-la-Madeleine",
   "latitude": 47.3833,
   "longitude": -61.8667
 },
 {
   "name": "Wellington North",
   "latitude": 43.9,
   "longitude": -80.57
 },
 {
   "name": "St. Andrews",
   "latitude": 50.27,
   "longitude": -96.9747
 },
 {
   "name": "Carleton Place",
   "latitude": 45.1333,
   "longitude": -76.1333
 },
 {
   "name": "Whistler",
   "latitude": 50.1208,
   "longitude": -122.9544
 },
 {
   "name": "Brighton",
   "latitude": 44.1222,
   "longitude": -77.7642
 },
 {
   "name": "Tiny",
   "latitude": 44.6833,
   "longitude": -79.95
 },
 {
   "name": "Gander",
   "latitude": 48.9569,
   "longitude": -54.6089
 },
 {
   "name": "Sidney",
   "latitude": 48.6506,
   "longitude": -123.3986
 },
 {
   "name": "Rothesay",
   "latitude": 45.3831,
   "longitude": -65.9969
 },
 {
   "name": "Brock",
   "latitude": 44.3167,
   "longitude": -79.0833
 },
 {
   "name": "Summerland",
   "latitude": 49.6006,
   "longitude": -119.6778
 },
 {
   "name": "Val-des-Monts",
   "latitude": 45.65,
   "longitude": -75.6667
 },
 {
   "name": "Tache",
   "latitude": 49.7081,
   "longitude": -96.6736
 },
 {
   "name": "Montmagny",
   "latitude": 46.9833,
   "longitude": -70.55
 },
 {
   "name": "Erin",
   "latitude": 43.7667,
   "longitude": -80.0667
 },
 {
   "name": "Kincardine",
   "latitude": 44.1667,
   "longitude": -81.6333
 },
 {
   "name": "North Dundas",
   "latitude": 45.0833,
   "longitude": -75.35
 },
 {
   "name": "Wellesley",
   "latitude": 43.55,
   "longitude": -80.7167
 },
 {
   "name": "Estevan",
   "latitude": 49.1392,
   "longitude": -102.9861
 },
 {
   "name": "North Saanich",
   "latitude": 48.6142,
   "longitude": -123.42
 },
 {
   "name": "Warman",
   "latitude": 52.3219,
   "longitude": -106.5842
 },
 {
   "name": "La Tuque",
   "latitude": 48.0652,
   "longitude": -74.0528
 },
 {
   "name": "Norwich",
   "latitude": 42.9833,
   "longitude": -80.6
 },
 {
   "name": "Meaford",
   "latitude": 44.58,
   "longitude": -80.73
 },
 {
   "name": "Adjala-Tosorontio",
   "latitude": 44.1333,
   "longitude": -79.9333
 },
 {
   "name": "Hamilton Township",
   "latitude": 44.054,
   "longitude": -78.2164
 },
 {
   "name": "St. Clements",
   "latitude": 50.2689,
   "longitude": -96.6742
 },
 {
   "name": "Saint-Amable",
   "latitude": 45.65,
   "longitude": -73.3
 },
 {
   "name": "Weyburn",
   "latitude": 49.6611,
   "longitude": -103.8525
 },
 {
   "name": "South Dundas",
   "latitude": 44.9167,
   "longitude": -75.2667
 },
 {
   "name": "L'Ile-Perrot",
   "latitude": 45.3833,
   "longitude": -73.95
 },
 {
   "name": "Notre-Dame-de-l'Ile-Perrot",
   "latitude": 45.3667,
   "longitude": -73.9333
 },
 {
   "name": "Williams Lake",
   "latitude": 52.1294,
   "longitude": -122.1383
 },
 {
   "name": "Elliot Lake",
   "latitude": 46.3833,
   "longitude": -82.65
 },
 {
   "name": "Cantley",
   "latitude": 45.5667,
   "longitude": -75.7833
 },
 {
   "name": "Nelson",
   "latitude": 49.5,
   "longitude": -117.2833
 },
 {
   "name": "Lambton Shores",
   "latitude": 43.1833,
   "longitude": -81.9
 },
 {
   "name": "Mapleton",
   "latitude": 43.7358,
   "longitude": -80.6681
 },
 {
   "name": "Georgian Bluffs",
   "latitude": 44.65,
   "longitude": -81.0333
 },
 {
   "name": "Rawdon",
   "latitude": 46.05,
   "longitude": -73.7167
 },
 {
   "name": "Campbellton",
   "latitude": 48.005,
   "longitude": -66.6731
 },
 {
   "name": "View Royal",
   "latitude": 48.4517,
   "longitude": -123.4339
 },
 {
   "name": "Coldstream",
   "latitude": 50.22,
   "longitude": -119.2481
 },
 {
   "name": "Chester",
   "latitude": 44.65,
   "longitude": -64.3
 },
 {
   "name": "Queens",
   "latitude": 44.0333,
   "longitude": -64.7167
 },
 {
   "name": "Selkirk",
   "latitude": 50.1436,
   "longitude": -96.8839
 },
 {
   "name": "Saint-Felicien",
   "latitude": 48.65,
   "longitude": -72.45
 },
 {
   "name": "Hawkesbury",
   "latitude": 45.6,
   "longitude": -74.6
 },
 {
   "name": "Roberval",
   "latitude": 48.52,
   "longitude": -72.23
 },
 {
   "name": "Sainte-Agathe-des-Monts",
   "latitude": 46.05,
   "longitude": -74.28
 },
 {
   "name": "North Dumfries",
   "latitude": 43.32,
   "longitude": -80.38
 },
 {
   "name": "Rideau Lakes",
   "latitude": 44.6667,
   "longitude": -76.2167
 },
 {
   "name": "Sechelt",
   "latitude": 49.4742,
   "longitude": -123.7542
 },
 {
   "name": "North Glengarry",
   "latitude": 45.3333,
   "longitude": -74.7333
 },
 {
   "name": "South Huron",
   "latitude": 43.32,
   "longitude": -81.5
 },
 {
   "name": "Marieville",
   "latitude": 45.4333,
   "longitude": -73.1667
 },
 {
   "name": "Tay",
   "latitude": 44.7167,
   "longitude": -79.7667
 },
 {
   "name": "Temiskaming Shores",
   "latitude": 47.5167,
   "longitude": -79.6833
 },
 {
   "name": "Hinton",
   "latitude": 53.4114,
   "longitude": -117.5639
 },
 {
   "name": "Saint-Sauveur",
   "latitude": 45.9,
   "longitude": -74.17
 },
 {
   "name": "Quesnel",
   "latitude": 52.9784,
   "longitude": -122.4927
 },
 {
   "name": "Elizabethtown-Kitley",
   "latitude": 44.7,
   "longitude": -75.8833
 },
 {
   "name": "Morinville",
   "latitude": 53.8022,
   "longitude": -113.6497
 },
 {
   "name": "Grey Highlands",
   "latitude": 44.3333,
   "longitude": -80.5
 },
 {
   "name": "Stratford",
   "latitude": 46.2167,
   "longitude": -63.0893
 },
 {
   "name": "Alfred and Plantagenet",
   "latitude": 45.5667,
   "longitude": -74.9167
 },
 {
   "name": "Mont-Tremblant",
   "latitude": 46.1167,
   "longitude": -74.6
 },
 {
   "name": "Martensville",
   "latitude": 52.2897,
   "longitude": -106.6667
 },
 {
   "name": "Saint-Raymond",
   "latitude": 46.9,
   "longitude": -71.8333
 },
 {
   "name": "Amherst",
   "latitude": 45.8167,
   "longitude": -64.2167
 },
 {
   "name": "Ramara",
   "latitude": 44.6333,
   "longitude": -79.2167
 },
 {
   "name": "Bois-des-Filion",
   "latitude": 45.6667,
   "longitude": -73.75
 },
 {
   "name": "Leeds and the Thousand Islands",
   "latitude": 44.45,
   "longitude": -76.08
 },
 {
   "name": "Carignan",
   "latitude": 45.45,
   "longitude": -73.3
 },
 {
   "name": "Brockton",
   "latitude": 44.1667,
   "longitude": -81.2167
 },
 {
   "name": "Laurentian Valley",
   "latitude": 45.7681,
   "longitude": -77.2239
 },
 {
   "name": "East St. Paul",
   "latitude": 49.9772,
   "longitude": -97.0103
 },
 {
   "name": "Lorraine",
   "latitude": 45.6833,
   "longitude": -73.7833
 },
 {
   "name": "Sainte-Julienne",
   "latitude": 45.97,
   "longitude": -73.72
 },
 {
   "name": "Blackfalds",
   "latitude": 52.3833,
   "longitude": -113.8
 },
 {
   "name": "Malahide",
   "latitude": 42.7928,
   "longitude": -80.9361
 },
 {
   "name": "Oromocto",
   "latitude": 45.8488,
   "longitude": -66.4788
 },
 {
   "name": "Olds",
   "latitude": 51.7928,
   "longitude": -114.1067
 },
 {
   "name": "Huron East",
   "latitude": 43.63,
   "longitude": -81.28
 },
 {
   "name": "Stanley",
   "latitude": 49.1331,
   "longitude": -98.0656
 },
 {
   "name": "Penetanguishene",
   "latitude": 44.7667,
   "longitude": -79.9333
 },
 {
   "name": "Qualicum Beach",
   "latitude": 49.35,
   "longitude": -124.4333
 },
 {
   "name": "Notre-Dame-des-Prairies",
   "latitude": 46.05,
   "longitude": -73.4333
 },
 {
   "name": "West Perth",
   "latitude": 43.47,
   "longitude": -81.2
 },
 {
   "name": "Cavan Monaghan",
   "latitude": 44.2,
   "longitude": -78.4667
 },
 {
   "name": "Arnprior",
   "latitude": 45.4333,
   "longitude": -76.35
 },
 {
   "name": "Smiths Falls",
   "latitude": 44.9,
   "longitude": -76.0167
 },
 {
   "name": "Pont-Rouge",
   "latitude": 46.75,
   "longitude": -71.7
 },
 {
   "name": "Champlain",
   "latitude": 45.5333,
   "longitude": -74.65
 },
 {
   "name": "Coaticook",
   "latitude": 45.1333,
   "longitude": -71.8
 },
 {
   "name": "Minto",
   "latitude": 43.9167,
   "longitude": -80.8667
 },
 {
   "name": "Morden",
   "latitude": 49.1919,
   "longitude": -98.1006
 },
 {
   "name": "Mono",
   "latitude": 44.0167,
   "longitude": -80.0667
 },
 {
   "name": "Corman Park No. 344",
   "latitude": 52.2291,
   "longitude": -106.8002
 },
 {
   "name": "Ladysmith",
   "latitude": 48.9975,
   "longitude": -123.8203
 },
 {
   "name": "Bridgewater",
   "latitude": 44.37,
   "longitude": -64.52
 },
 {
   "name": "Dauphin",
   "latitude": 51.1992,
   "longitude": -100.0633
 },
 {
   "name": "Otterburn Park",
   "latitude": 45.5333,
   "longitude": -73.2167
 },
 {
   "name": "Taber",
   "latitude": 49.7847,
   "longitude": -112.1508
 },
 {
   "name": "South Bruce Peninsula",
   "latitude": 44.7333,
   "longitude": -81.2
 },
 {
   "name": "Edson",
   "latitude": 53.5817,
   "longitude": -116.4344
 },
 {
   "name": "Farnham",
   "latitude": 45.2833,
   "longitude": -72.9833
 },
 {
   "name": "Kapuskasing",
   "latitude": 49.4167,
   "longitude": -82.4333
 },
 {
   "name": "La Malbaie",
   "latitude": 47.65,
   "longitude": -70.15
 },
 {
   "name": "Renfrew",
   "latitude": 45.4717,
   "longitude": -76.6831
 },
 {
   "name": "Coaldale",
   "latitude": 49.7333,
   "longitude": -112.6167
 },
 {
   "name": "Portugal Cove-St. Philip's",
   "latitude": 47.6272,
   "longitude": -52.8506
 },
 {
   "name": "Zorra",
   "latitude": 43.15,
   "longitude": -80.95
 },
 {
   "name": "Kitimat",
   "latitude": 54,
   "longitude": -128.7
 },
 {
   "name": "Shelburne",
   "latitude": 44.0833,
   "longitude": -80.2
 },
 {
   "name": "Happy Valley",
   "latitude": 53.3396,
   "longitude": -60.4467
 },
 {
   "name": "Saint-Hippolyte",
   "latitude": 45.93,
   "longitude": -74.02
 },
 {
   "name": "Castlegar",
   "latitude": 49.3256,
   "longitude": -117.6661
 },
 {
   "name": "Church Point",
   "latitude": 44.3333,
   "longitude": -66.1167
 },
 {
   "name": "Drumheller",
   "latitude": 51.4636,
   "longitude": -112.7194
 },
 {
   "name": "Kirkland Lake",
   "latitude": 48.15,
   "longitude": -80.0333
 },
 {
   "name": "Argyle",
   "latitude": 43.8,
   "longitude": -65.85
 },
 {
   "name": "Torbay",
   "latitude": 47.65,
   "longitude": -52.7333
 },
 {
   "name": "La Peche",
   "latitude": 45.6833,
   "longitude": -75.9833
 },
 {
   "name": "Banff",
   "latitude": 51.1781,
   "longitude": -115.5719
 },
 {
   "name": "Innisfail",
   "latitude": 52.0333,
   "longitude": -113.95
 },
 {
   "name": "Nicolet",
   "latitude": 46.2167,
   "longitude": -72.6167
 },
 {
   "name": "Rockwood",
   "latitude": 50.2856,
   "longitude": -97.2869
 },
 {
   "name": "Drummond/North Elmsley",
   "latitude": 44.9667,
   "longitude": -76.2
 },
 {
   "name": "Dryden",
   "latitude": 49.7833,
   "longitude": -92.8333
 },
 {
   "name": "Iqaluit",
   "latitude": 63.7598,
   "longitude": -68.5107
 },
 {
   "name": "Fort Frances",
   "latitude": 48.6167,
   "longitude": -93.4
 },
 {
   "name": "La Sarre",
   "latitude": 48.8,
   "longitude": -79.2
 },
 {
   "name": "Trail",
   "latitude": 49.095,
   "longitude": -117.71
 },
 {
   "name": "Chandler",
   "latitude": 48.35,
   "longitude": -64.6833
 },
 {
   "name": "Stone Mills",
   "latitude": 44.45,
   "longitude": -76.9167
 },
 {
   "name": "Hanover",
   "latitude": 44.15,
   "longitude": -81.0333
 },
 {
   "name": "South-West Oxford",
   "latitude": 42.95,
   "longitude": -80.8
 },
 {
   "name": "Acton Vale",
   "latitude": 45.65,
   "longitude": -72.5667
 },
 {
   "name": "Bromont",
   "latitude": 45.3167,
   "longitude": -72.65
 },
 {
   "name": "Beckwith",
   "latitude": 45.0833,
   "longitude": -76.0667
 },
 {
   "name": "Goderich",
   "latitude": 43.7333,
   "longitude": -81.7
 },
 {
   "name": "Plympton-Wyoming",
   "latitude": 43.0167,
   "longitude": -82.0833
 },
 {
   "name": "Central Huron",
   "latitude": 43.63,
   "longitude": -81.57
 },
 {
   "name": "Rigaud",
   "latitude": 45.4833,
   "longitude": -74.3
 },
 {
   "name": "Louiseville",
   "latitude": 46.25,
   "longitude": -72.95
 },
 {
   "name": "Chibougamau",
   "latitude": 49.9167,
   "longitude": -74.3667
 },
 {
   "name": "Aylmer",
   "latitude": 42.7667,
   "longitude": -80.9833
 },
 {
   "name": "Delson",
   "latitude": 45.37,
   "longitude": -73.55
 },
 {
   "name": "Kimberley",
   "latitude": 49.6697,
   "longitude": -115.9775
 },
 {
   "name": "Blandford-Blenheim",
   "latitude": 43.2333,
   "longitude": -80.6
 },
 {
   "name": "Bayham",
   "latitude": 42.7333,
   "longitude": -80.7833
 },
 {
   "name": "Augusta",
   "latitude": 44.7511,
   "longitude": -75.6003
 },
 {
   "name": "Puslinch",
   "latitude": 43.45,
   "longitude": -80.1667
 },
 {
   "name": "Beauport",
   "latitude": 46.9667,
   "longitude": -71.3
 },
 {
   "name": "Saint-Remi",
   "latitude": 45.2667,
   "longitude": -73.6167
 },
 {
   "name": "St. Marys",
   "latitude": 43.2583,
   "longitude": -81.1333
 },
 {
   "name": "Drayton Valley",
   "latitude": 53.2222,
   "longitude": -114.9769
 },
 {
   "name": "Ponoka",
   "latitude": 52.6833,
   "longitude": -113.5667
 },
 {
   "name": "Labrador City",
   "latitude": 52.95,
   "longitude": -66.9167
 },
 {
   "name": "Donnacona",
   "latitude": 46.6747,
   "longitude": -71.7294
 },
 {
   "name": "Southgate",
   "latitude": 44.1,
   "longitude": -80.5833
 },
 {
   "name": "McNab/Braeside",
   "latitude": 45.45,
   "longitude": -76.5
 },
 {
   "name": "Macdonald",
   "latitude": 49.6725,
   "longitude": -97.4472
 },
 {
   "name": "Hampstead",
   "latitude": 45.4833,
   "longitude": -73.6333
 },
 {
   "name": "Baie-Saint-Paul",
   "latitude": 47.45,
   "longitude": -70.5
 },
 {
   "name": "Merritt",
   "latitude": 50.1128,
   "longitude": -120.7897
 },
 {
   "name": "Bluewater",
   "latitude": 43.45,
   "longitude": -81.6
 },
 {
   "name": "East Zorra-Tavistock",
   "latitude": 43.2333,
   "longitude": -80.7833
 },
 {
   "name": "Brownsburg",
   "latitude": 45.6703,
   "longitude": -74.4467
 },
 {
   "name": "Stoneham-et-Tewkesbury",
   "latitude": 47.1667,
   "longitude": -71.4333
 },
 {
   "name": "Asbestos",
   "latitude": 45.7667,
   "longitude": -71.9333
 },
 {
   "name": "Huron-Kinloss",
   "latitude": 44.05,
   "longitude": -81.5333
 },
 {
   "name": "Coteau-du-Lac",
   "latitude": 45.3,
   "longitude": -74.18
 },
 {
   "name": "The Blue Mountains",
   "latitude": 44.4833,
   "longitude": -80.3833
 },
 {
   "name": "Whitewater Region",
   "latitude": 45.7167,
   "longitude": -76.8333
 },
 {
   "name": "Edwardsburgh/Cardinal",
   "latitude": 44.8333,
   "longitude": -75.5
 },
 {
   "name": "Sainte-Anne-des-Monts",
   "latitude": 49.1333,
   "longitude": -66.5
 }
];

export default markers;
