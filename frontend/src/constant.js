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
   "name": "Stratford",
   "latitude": 43.3708,
   "longitude": -80.9819
 },
 {
   "name": "Lloydminster",
   "latitude": 53.2783,
   "longitude": -110.005
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
   "name": "Hanover",
   "latitude": 49.4433,
   "longitude": -96.8492
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
 },
 {
   "name": "Old Chelsea",
   "latitude": 45.5,
   "longitude": -75.7833
 },
 {
   "name": "North Stormont",
   "latitude": 45.2167,
   "longitude": -75
 },
 {
   "name": "Alnwick/Haldimand",
   "latitude": 44.0833,
   "longitude": -78.0333
 },
 {
   "name": "Peace River",
   "latitude": 56.2339,
   "longitude": -117.2897
 },
 {
   "name": "Arran-Elderslie",
   "latitude": 44.4,
   "longitude": -81.2
 },
 {
   "name": "Saint-Zotique",
   "latitude": 45.25,
   "longitude": -74.25
 },
 {
   "name": "Val-Shefford",
   "latitude": 45.35,
   "longitude": -72.5667
 },
 {
   "name": "Douro-Dummer",
   "latitude": 44.45,
   "longitude": -78.1
 },
 {
   "name": "Plessisville",
   "latitude": 46.2167,
   "longitude": -71.7833
 },
 {
   "name": "Ritchot",
   "latitude": 49.6647,
   "longitude": -97.1167
 },
 {
   "name": "Otonabee-South Monaghan",
   "latitude": 44.2333,
   "longitude": -78.2333
 },
 {
   "name": "Shediac",
   "latitude": 46.2167,
   "longitude": -64.5333
 },
 {
   "name": "Slave Lake",
   "latitude": 55.2853,
   "longitude": -114.7706
 },
 {
   "name": "Port-Cartier",
   "latitude": 50.0333,
   "longitude": -66.8667
 },
 {
   "name": "Saint-Lambert-de-Lauzon",
   "latitude": 46.5865,
   "longitude": -71.2271
 },
 {
   "name": "Barrington",
   "latitude": 43.5646,
   "longitude": -65.5639
 },
 {
   "name": "Rocky Mountain House",
   "latitude": 52.3753,
   "longitude": -114.9217
 },
 {
   "name": "Chatsworth",
   "latitude": 44.38,
   "longitude": -80.87
 },
 {
   "name": "Stephenville",
   "latitude": 48.55,
   "longitude": -58.5667
 },
 {
   "name": "Muskoka Falls",
   "latitude": 45.1264,
   "longitude": -79.558
 },
 {
   "name": "Devon",
   "latitude": 53.3633,
   "longitude": -113.7322
 },
 {
   "name": "Yarmouth",
   "latitude": 43.8361,
   "longitude": -66.1175
 },
 {
   "name": "Boischatel",
   "latitude": 46.9,
   "longitude": -71.15
 },
 {
   "name": "Parry Sound",
   "latitude": 45.3333,
   "longitude": -80.0333
 },
 {
   "name": "Pointe-Calumet",
   "latitude": 45.5,
   "longitude": -73.97
 },
 {
   "name": "Beaubassin East / Beaubassin-est",
   "latitude": 46.1726,
   "longitude": -64.3122
 },
 {
   "name": "Wainfleet",
   "latitude": 42.925,
   "longitude": -79.375
 },
 {
   "name": "Cramahe",
   "latitude": 44.0833,
   "longitude": -77.8833
 },
 {
   "name": "Beauceville",
   "latitude": 46.2,
   "longitude": -70.7833
 },
 {
   "name": "North Middlesex",
   "latitude": 43.15,
   "longitude": -81.6333
 },
 {
   "name": "Amqui",
   "latitude": 48.4667,
   "longitude": -67.4333
 },
 {
   "name": "Sainte-Catherine-de-la-Jacques-Cartier",
   "latitude": 46.85,
   "longitude": -71.6167
 },
 {
   "name": "Clarenville",
   "latitude": 48.1566,
   "longitude": -53.965
 },
 {
   "name": "Mont-Joli",
   "latitude": 48.58,
   "longitude": -68.18
 },
 {
   "name": "Dysart et al",
   "latitude": 45.2042,
   "longitude": -78.4047
 },
 {
   "name": "Wainwright",
   "latitude": 52.8333,
   "longitude": -110.8667
 },
 {
   "name": "Contrecoeur",
   "latitude": 45.85,
   "longitude": -73.2333
 },
 {
   "name": "Beresford",
   "latitude": 47.7181,
   "longitude": -65.8794
 },
 {
   "name": "Saint-Joseph-du-Lac",
   "latitude": 45.5333,
   "longitude": -74
 },
 {
   "name": "Hope",
   "latitude": 49.3858,
   "longitude": -121.4419
 },
 {
   "name": "Gimli",
   "latitude": 50.6619,
   "longitude": -97.0297
 },
 {
   "name": "Douglas",
   "latitude": 46.2819,
   "longitude": -66.942
 },
 {
   "name": "Saint-Apollinaire",
   "latitude": 46.6167,
   "longitude": -71.5167
 },
 {
   "name": "Hindon Hill",
   "latitude": 44.9333,
   "longitude": -78.7333
 },
 {
   "name": "Les Cedres",
   "latitude": 45.3,
   "longitude": -74.05
 },
 {
   "name": "La Broquerie",
   "latitude": 49.3994,
   "longitude": -96.5103
 },
 {
   "name": "Kent",
   "latitude": 49.2833,
   "longitude": -121.75
 },
 {
   "name": "Tweed",
   "latitude": 44.6,
   "longitude": -77.3333
 },
 {
   "name": "Saint-Felix-de-Valois",
   "latitude": 46.17,
   "longitude": -73.43
 },
 {
   "name": "Bay Roberts",
   "latitude": 47.5847,
   "longitude": -53.2783
 },
 {
   "name": "Melfort",
   "latitude": 52.8564,
   "longitude": -104.61
 },
 {
   "name": "Bonnyville",
   "latitude": 54.2667,
   "longitude": -110.75
 },
 {
   "name": "Stettler",
   "latitude": 52.3236,
   "longitude": -112.7192
 },
 {
   "name": "Saint-Calixte",
   "latitude": 45.95,
   "longitude": -73.85
 },
 {
   "name": "Lac-Megantic",
   "latitude": 45.5833,
   "longitude": -70.8833
 },
 {
   "name": "Perth",
   "latitude": 44.9,
   "longitude": -76.25
 },
 {
   "name": "Oliver Paipoonge",
   "latitude": 48.39,
   "longitude": -89.52
 },
 {
   "name": "Humboldt",
   "latitude": 52.2019,
   "longitude": -105.1231
 },
 {
   "name": "Charlemagne",
   "latitude": 45.7167,
   "longitude": -73.4833
 },
 {
   "name": "Pontiac",
   "latitude": 45.5833,
   "longitude": -76.1333
 },
 {
   "name": "St. Paul",
   "latitude": 53.9928,
   "longitude": -111.2972
 },
 {
   "name": "Petrolia",
   "latitude": 42.8833,
   "longitude": -82.1417
 },
 {
   "name": "Southwest Middlesex",
   "latitude": 42.75,
   "longitude": -81.7
 },
 {
   "name": "Front of Yonge",
   "latitude": 44.5333,
   "longitude": -75.8667
 },
 {
   "name": "Vegreville",
   "latitude": 53.4928,
   "longitude": -112.0522
 },
 {
   "name": "Sainte-Brigitte-de-Laval",
   "latitude": 47,
   "longitude": -71.2
 },
 {
   "name": "Princeville",
   "latitude": 46.1667,
   "longitude": -71.8833
 },
 {
   "name": "Vercheres",
   "latitude": 45.7833,
   "longitude": -73.35
 },
 {
   "name": "The Pas",
   "latitude": 53.825,
   "longitude": -101.2533
 },
 {
   "name": "Saint-Cesaire",
   "latitude": 45.4167,
   "longitude": -73
 },
 {
   "name": "La Ronge",
   "latitude": 55.1,
   "longitude": -105.3
 },
 {
   "name": "Tay Valley",
   "latitude": 44.8667,
   "longitude": -76.3833
 },
 {
   "name": "South Bruce",
   "latitude": 44.0333,
   "longitude": -81.2
 },
 {
   "name": "McMasterville",
   "latitude": 45.55,
   "longitude": -73.2333
 },
 {
   "name": "Redcliff",
   "latitude": 50.0792,
   "longitude": -110.7783
 },
 {
   "name": "Crowsnest Pass",
   "latitude": 49.5955,
   "longitude": -114.5136
 },
 {
   "name": "Saint-Philippe",
   "latitude": 45.35,
   "longitude": -73.47
 },
 {
   "name": "Richelieu",
   "latitude": 45.45,
   "longitude": -73.25
 },
 {
   "name": "Notre-Dame-du-Mont-Carmel",
   "latitude": 46.4833,
   "longitude": -72.65
 },
 {
   "name": "L'Ange-Gardien",
   "latitude": 45.5833,
   "longitude": -75.45
 },
 {
   "name": "Sainte-Martine",
   "latitude": 45.25,
   "longitude": -73.8
 },
 {
   "name": "Saint-Pie",
   "latitude": 45.5,
   "longitude": -72.9
 },
 {
   "name": "Peachland",
   "latitude": 49.7736,
   "longitude": -119.7369
 },
 {
   "name": "Ashfield-Colborne-Wawanosh",
   "latitude": 43.8667,
   "longitude": -81.6
 },
 {
   "name": "Trent Lakes",
   "latitude": 44.6667,
   "longitude": -78.4333
 },
 {
   "name": "Northern Rockies",
   "latitude": 59,
   "longitude": -123.75
 },
 {
   "name": "Cookshire",
   "latitude": 45.3729,
   "longitude": -71.672
 },
 {
   "name": "West St. Paul",
   "latitude": 50.0119,
   "longitude": -97.115
 },
 {
   "name": "Windsor",
   "latitude": 45.5667,
   "longitude": -72
 },
 {
   "name": "L'Epiphanie",
   "latitude": 45.85,
   "longitude": -73.4833
 },
 {
   "name": "Creston",
   "latitude": 49.09,
   "longitude": -116.51
 },
 {
   "name": "Smithers",
   "latitude": 54.7819,
   "longitude": -127.1681
 },
 {
   "name": "Cornwall",
   "latitude": 46.2407,
   "longitude": -63.2009
 },
 {
   "name": "Meadow Lake",
   "latitude": 54.1242,
   "longitude": -108.4358
 },
 {
   "name": "Lanark Highlands",
   "latitude": 45.088,
   "longitude": -76.517
 },
 {
   "name": "Sackville",
   "latitude": 45.9,
   "longitude": -64.3667
 },
 {
   "name": "Grand Falls",
   "latitude": 47.0344,
   "longitude": -67.7394
 },
 {
   "name": "Cochrane",
   "latitude": 49.0667,
   "longitude": -81.0167
 },
 {
   "name": "Marystown",
   "latitude": 47.1667,
   "longitude": -55.1667
 },
 {
   "name": "Sioux Lookout",
   "latitude": 50.1,
   "longitude": -91.9167
 },
 {
   "name": "Didsbury",
   "latitude": 51.6658,
   "longitude": -114.1311
 },
 {
   "name": "Saint-Honore",
   "latitude": 48.5333,
   "longitude": -71.0833
 },
 {
   "name": "Fernie",
   "latitude": 49.5042,
   "longitude": -115.0628
 },
 {
   "name": "Deer Lake",
   "latitude": 49.1744,
   "longitude": -57.4269
 },
 {
   "name": "Woodstock",
   "latitude": 46.1522,
   "longitude": -67.5983
 },
 {
   "name": "Val-David",
   "latitude": 46.03,
   "longitude": -74.22
 },
 {
   "name": "Flin Flon",
   "latitude": 54.7667,
   "longitude": -101.8778
 },
 {
   "name": "Hudson",
   "latitude": 45.45,
   "longitude": -74.15
 },
 {
   "name": "Gananoque",
   "latitude": 44.33,
   "longitude": -76.17
 },
 {
   "name": "Brokenhead",
   "latitude": 50.1428,
   "longitude": -96.5319
 },
 {
   "name": "Saint-Paul",
   "latitude": 45.9833,
   "longitude": -73.45
 },
 {
   "name": "Burton",
   "latitude": 45.8009,
   "longitude": -66.4066
 },
 {
   "name": "Spallumcheen",
   "latitude": 50.4462,
   "longitude": -119.2121
 },
 {
   "name": "Westlock",
   "latitude": 54.1522,
   "longitude": -113.8511
 },
 {
   "name": "Temiscouata-sur-le-Lac",
   "latitude": 47.68,
   "longitude": -68.88
 },
 {
   "name": "Shannon",
   "latitude": 46.8833,
   "longitude": -71.5167
 },
 {
   "name": "Osoyoos",
   "latitude": 49.0325,
   "longitude": -119.4661
 },
 {
   "name": "Montreal-Ouest",
   "latitude": 45.4536,
   "longitude": -73.6472
 },
 {
   "name": "Hearst",
   "latitude": 49.6869,
   "longitude": -83.6544
 },
 {
   "name": "Saint-Henri",
   "latitude": 46.7,
   "longitude": -71.0667
 },
 {
   "name": "Ste. Anne",
   "latitude": 49.6186,
   "longitude": -96.5708
 },
 {
   "name": "Antigonish",
   "latitude": 45.6167,
   "longitude": -61.9833
 },
 {
   "name": "Espanola",
   "latitude": 46.25,
   "longitude": -81.7667
 },
 {
   "name": "West Elgin",
   "latitude": 42.5833,
   "longitude": -81.6667
 },
 {
   "name": "Flin Flon (Part)",
   "latitude": 54.7712,
   "longitude": -101.8419
 },
 {
   "name": "Grand Bay-Westfield",
   "latitude": 45.3608,
   "longitude": -66.2415
 },
 {
   "name": "Sainte-Anne-de-Bellevue",
   "latitude": 45.4039,
   "longitude": -73.9525
 },
 {
   "name": "North Huron",
   "latitude": 43.83,
   "longitude": -81.42
 },
 {
   "name": "Oliver",
   "latitude": 49.1844,
   "longitude": -119.55
 },
 {
   "name": "Saint-Roch-de-l'Achigan",
   "latitude": 45.85,
   "longitude": -73.6
 },
 {
   "name": "Stirling-Rawdon",
   "latitude": 44.3667,
   "longitude": -77.5917
 },
 {
   "name": "Chisasibi",
   "latitude": 53.6645,
   "longitude": -78.7938
 },
 {
   "name": "Carbonear",
   "latitude": 47.7375,
   "longitude": -53.2294
 },
 {
   "name": "Saint Marys",
   "latitude": 46.1748,
   "longitude": -66.4897
 },
 {
   "name": "Chertsey",
   "latitude": 46.17,
   "longitude": -73.92
 },
 {
   "name": "Armstrong",
   "latitude": 50.4483,
   "longitude": -119.1961
 },
 {
   "name": "Stonewall",
   "latitude": 50.1344,
   "longitude": -97.3261
 },
 {
   "name": "Shippagan",
   "latitude": 47.8557,
   "longitude": -64.6012
 },
 {
   "name": "Lanoraie",
   "latitude": 45.9667,
   "longitude": -73.2167
 },
 {
   "name": "Memramcook",
   "latitude": 46,
   "longitude": -64.55
 },
 {
   "name": "Centre Hastings",
   "latitude": 44.4167,
   "longitude": -77.4417
 },
 {
   "name": "Warwick",
   "latitude": 45.95,
   "longitude": -71.9833
 },
 {
   "name": "East Ferris",
   "latitude": 46.2667,
   "longitude": -79.3
 },
 {
   "name": "Hanwell",
   "latitude": 45.8681,
   "longitude": -66.7947
 },
 {
   "name": "Saint-Joseph-de-Beauce",
   "latitude": 46.3,
   "longitude": -70.8833
 },
 {
   "name": "Metchosin",
   "latitude": 48.3819,
   "longitude": -123.5378
 },
 {
   "name": "Lucan Biddulph",
   "latitude": 43.2,
   "longitude": -81.3833
 },
 {
   "name": "Riviere-Rouge",
   "latitude": 46.4167,
   "longitude": -74.8667
 },
 {
   "name": "Greenstone",
   "latitude": 50,
   "longitude": -86.7333
 },
 {
   "name": "Saint-Mathias-sur-Richelieu",
   "latitude": 45.4667,
   "longitude": -73.2667
 },
 {
   "name": "Neepawa",
   "latitude": 50.2289,
   "longitude": -99.4656
 },
 {
   "name": "Gibsons",
   "latitude": 49.4028,
   "longitude": -123.5036
 },
 {
   "name": "Kindersley",
   "latitude": 51.4678,
   "longitude": -109.1567
 },
 {
   "name": "Jasper",
   "latitude": 52.9013,
   "longitude": -118.1312
 },
 {
   "name": "Barrhead",
   "latitude": 54.1167,
   "longitude": -114.4
 },
 {
   "name": "Les Coteaux",
   "latitude": 45.28,
   "longitude": -74.23
 },
 {
   "name": "Melville",
   "latitude": 50.9306,
   "longitude": -102.8078
 },
 {
   "name": "Saint-Germain-de-Grantham",
   "latitude": 45.8333,
   "longitude": -72.5667
 },
 {
   "name": "Iroquois Falls",
   "latitude": 48.7667,
   "longitude": -80.6667
 },
 {
   "name": "Havelock-Belmont-Methuen",
   "latitude": 44.5667,
   "longitude": -77.9
 },
 {
   "name": "Cornwallis",
   "latitude": 49.7981,
   "longitude": -99.8481
 },
 {
   "name": "Saint-Boniface",
   "latitude": 46.5,
   "longitude": -72.8167
 },
 {
   "name": "Edenwold No. 158",
   "latitude": 50.5166,
   "longitude": -104.3451
 },
 {
   "name": "Coverdale",
   "latitude": 46.0003,
   "longitude": -64.8859
 },
 {
   "name": "Vanderhoof",
   "latitude": 54.0143,
   "longitude": -124.0089
 },
 {
   "name": "Southwold",
   "latitude": 42.75,
   "longitude": -81.3167
 },
 {
   "name": "Goulds",
   "latitude": 47.4517,
   "longitude": -52.7647
 },
 {
   "name": "Saint Stephen",
   "latitude": 45.2,
   "longitude": -67.2833
 },
 {
   "name": "Waterloo",
   "latitude": 45.35,
   "longitude": -72.5167
 },
 {
   "name": "Nipawin",
   "latitude": 53.3572,
   "longitude": -104.0192
 },
 {
   "name": "Neuville",
   "latitude": 46.7,
   "longitude": -71.5833
 },
 {
   "name": "Saint-Cyrille-de-Wendover",
   "latitude": 45.9333,
   "longitude": -72.4333
 },
 {
   "name": "Central Frontenac",
   "latitude": 44.7167,
   "longitude": -76.8
 },
 {
   "name": "Mont-Orford",
   "latitude": 45.3661,
   "longitude": -72.1838
 },
 {
   "name": "Saint-Jean-de-Matha",
   "latitude": 46.23,
   "longitude": -73.53
 },
 {
   "name": "Seguin",
   "latitude": 45.2882,
   "longitude": -79.8116
 },
 {
   "name": "Tyendinaga",
   "latitude": 44.3,
   "longitude": -77.2
 },
 {
   "name": "Hampton",
   "latitude": 45.533,
   "longitude": -65.833
 },
 {
   "name": "Sussex",
   "latitude": 45.7167,
   "longitude": -65.5167
 },
 {
   "name": "Grand Forks",
   "latitude": 49.0333,
   "longitude": -118.44
 },
 {
   "name": "La Pocatiere",
   "latitude": 47.3667,
   "longitude": -70.0333
 },
 {
   "name": "Caraquet",
   "latitude": 47.7853,
   "longitude": -64.9592
 },
 {
   "name": "Saint-Etienne-des-Gres",
   "latitude": 46.4333,
   "longitude": -72.7667
 },
 {
   "name": "Altona",
   "latitude": 49.1044,
   "longitude": -97.5625
 },
 {
   "name": "Stellarton",
   "latitude": 45.5567,
   "longitude": -62.66
 },
 {
   "name": "Wolfville",
   "latitude": 45.0833,
   "longitude": -64.3667
 },
 {
   "name": "New Maryland",
   "latitude": 45.8911,
   "longitude": -66.6847
 },
 {
   "name": "Port Hardy",
   "latitude": 50.7225,
   "longitude": -127.4928
 },
 {
   "name": "Saint-Donat",
   "latitude": 46.3167,
   "longitude": -74.2167
 },
 {
   "name": "Chateau-Richer",
   "latitude": 46.9667,
   "longitude": -71.0167
 },
 {
   "name": "Madawaska Valley",
   "latitude": 45.5,
   "longitude": -77.6667
 },
 {
   "name": "Deep River",
   "latitude": 46.1,
   "longitude": -77.4917
 },
 {
   "name": "Asphodel-Norwood",
   "latitude": 44.3531,
   "longitude": -78.0183
 },
 {
   "name": "Red Lake",
   "latitude": 51.0333,
   "longitude": -93.8333
 },
 {
   "name": "Metabetchouan-Lac-a-la-Croix",
   "latitude": 48.4333,
   "longitude": -71.8667
 },
 {
   "name": "Berthierville",
   "latitude": 46.0833,
   "longitude": -73.1833
 },
 {
   "name": "Vermilion",
   "latitude": 53.3542,
   "longitude": -110.8528
 },
 {
   "name": "Niverville",
   "latitude": 49.6056,
   "longitude": -97.0417
 },
 {
   "name": "Hastings Highlands",
   "latitude": 45.2333,
   "longitude": -77.9333
 },
 {
   "name": "Carstairs",
   "latitude": 51.5619,
   "longitude": -114.0953
 },
 {
   "name": "Danville",
   "latitude": 45.7833,
   "longitude": -72.0167
 },
 {
   "name": "Channel-Port aux Basques",
   "latitude": 47.5694,
   "longitude": -59.1361
 },
 {
   "name": "Battleford",
   "latitude": 52.7383,
   "longitude": -108.3153
 },
 {
   "name": "Lac-Etchemin",
   "latitude": 46.4,
   "longitude": -70.5
 },
 {
   "name": "Saint-Antonin",
   "latitude": 47.7667,
   "longitude": -69.4833
 },
 {
   "name": "Saint-Jacques",
   "latitude": 45.95,
   "longitude": -73.5667
 },
 {
   "name": "Swan River",
   "latitude": 52.1058,
   "longitude": -101.2667
 },
 {
   "name": "Sutton",
   "latitude": 45.091,
   "longitude": -72.5792
 },
 {
   "name": "Northern Bruce Peninsula",
   "latitude": 45.08,
   "longitude": -81.38
 },
 {
   "name": "L'Islet-sur-Mer",
   "latitude": 47.1,
   "longitude": -70.35
 },
 {
   "name": "Carleton-sur-Mer",
   "latitude": 48.1,
   "longitude": -66.1333
 },
 {
   "name": "Oka",
   "latitude": 45.47,
   "longitude": -74.08
 },
 {
   "name": "Prescott",
   "latitude": 44.7167,
   "longitude": -75.5167
 },
 {
   "name": "Amaranth",
   "latitude": 43.9833,
   "longitude": -80.2333
 },
 {
   "name": "Marmora and Lake",
   "latitude": 44.6425,
   "longitude": -77.7372
 },
 {
   "name": "Maniwaki",
   "latitude": 46.375,
   "longitude": -75.9667
 },
 {
   "name": "Morin-Heights",
   "latitude": 45.9,
   "longitude": -74.25
 },
 {
   "name": "Dundas",
   "latitude": 46.3155,
   "longitude": -64.6947
 },
 {
   "name": "Napierville",
   "latitude": 45.1833,
   "longitude": -73.4
 },
 {
   "name": "Crabtree",
   "latitude": 45.9667,
   "longitude": -73.4667
 },
 {
   "name": "Bancroft",
   "latitude": 45.05,
   "longitude": -77.85
 },
 {
   "name": "Saint-Tite",
   "latitude": 46.7333,
   "longitude": -72.5667
 },
 {
   "name": "Howick",
   "latitude": 43.9,
   "longitude": -81.07
 },
 {
   "name": "Dutton/Dunwich",
   "latitude": 42.6667,
   "longitude": -81.5
 },
 {
   "name": "Callander",
   "latitude": 46.1781,
   "longitude": -79.4125
 },
 {
   "name": "Simonds",
   "latitude": 45.3145,
   "longitude": -65.803
 },
 {
   "name": "Baie-d'Urfe",
   "latitude": 45.4167,
   "longitude": -73.9167
 },
 {
   "name": "New Richmond",
   "latitude": 48.1667,
   "longitude": -65.8667
 },
 {
   "name": "Perth South",
   "latitude": 43.3,
   "longitude": -81.15
 },
 {
   "name": "Roxton Pond",
   "latitude": 45.4833,
   "longitude": -72.6667
 },
 {
   "name": "Sparwood",
   "latitude": 49.7331,
   "longitude": -114.8853
 },
 {
   "name": "Claresholm",
   "latitude": 50.0194,
   "longitude": -113.5783
 },
 {
   "name": "Breslau",
   "latitude": 43.4816,
   "longitude": -80.408
 },
 {
   "name": "Montague",
   "latitude": 44.9667,
   "longitude": -75.9667
 },
 {
   "name": "Cumberland",
   "latitude": 49.6206,
   "longitude": -125.0261
 },
 {
   "name": "Beaupre",
   "latitude": 47.05,
   "longitude": -70.9
 },
 {
   "name": "Saint-Andre-Avellin",
   "latitude": 45.7167,
   "longitude": -75.0667
 },
 {
   "name": "Saint-Ambroise-de-Kildare",
   "latitude": 46.0833,
   "longitude": -73.55
 },
 {
   "name": "East Angus",
   "latitude": 45.4833,
   "longitude": -71.6667
 },
 {
   "name": "Rossland",
   "latitude": 49.0786,
   "longitude": -117.7992
 },
 {
   "name": "Mackenzie",
   "latitude": 55.3381,
   "longitude": -123.0944
 },
 {
   "name": "Golden",
   "latitude": 51.3019,
   "longitude": -116.9667
 },
 {
   "name": "Raymond",
   "latitude": 49.4658,
   "longitude": -112.6508
 },
 {
   "name": "Saint-Adolphe-d'Howard",
   "latitude": 45.97,
   "longitude": -74.33
 },
 {
   "name": "Warwick",
   "latitude": 43,
   "longitude": -81.8917
 },
 {
   "name": "Bowen Island",
   "latitude": 49.3833,
   "longitude": -123.3833
 },
 {
   "name": "Bonnechere Valley",
   "latitude": 45.5333,
   "longitude": -77.1
 },
 {
   "name": "Windsor",
   "latitude": 44.9803,
   "longitude": -64.1292
 },
 {
   "name": "Pincher Creek",
   "latitude": 49.4861,
   "longitude": -113.95
 },
 {
   "name": "Alnwick",
   "latitude": 47.2656,
   "longitude": -65.2292
 },
 {
   "name": "Westville",
   "latitude": 45.55,
   "longitude": -62.7
 },
 {
   "name": "Fruitvale",
   "latitude": 49.1161,
   "longitude": -117.5414
 },
 {
   "name": "Pasadena",
   "latitude": 49.0161,
   "longitude": -57.605
 },
 {
   "name": "Saint-Prosper",
   "latitude": 46.2167,
   "longitude": -70.4833
 },
 {
   "name": "Ormstown",
   "latitude": 45.13,
   "longitude": -74
 },
 {
   "name": "Cardston",
   "latitude": 49.2025,
   "longitude": -113.3019
 },
 {
   "name": "Westbank",
   "latitude": 49.8423,
   "longitude": -119.6743
 },
 {
   "name": "De Salaberry",
   "latitude": 49.4403,
   "longitude": -96.9844
 },
 {
   "name": "Headingley",
   "latitude": 49.8681,
   "longitude": -97.3908
 },
 {
   "name": "Grande Cache",
   "latitude": 53.8773,
   "longitude": -119.1199
 },
 {
   "name": "Atholville",
   "latitude": 47.9894,
   "longitude": -66.7125
 },
 {
   "name": "Saint-Agapit",
   "latitude": 46.5667,
   "longitude": -71.4333
 },
 {
   "name": "Prince Albert No. 461",
   "latitude": 53.1089,
   "longitude": -105.6574
 },
 {
   "name": "Casselman",
   "latitude": 45.3,
   "longitude": -75.0833
 },
 {
   "name": "Saint-Ambroise",
   "latitude": 48.55,
   "longitude": -71.3333
 },
 {
   "name": "Hay River",
   "latitude": 60.7531,
   "longitude": -115.9004
 },
 {
   "name": "Mistissini",
   "latitude": 50.5707,
   "longitude": -73.6829
 },
 {
   "name": "Studholm",
   "latitude": 45.8133,
   "longitude": -65.5747
 },
 {
   "name": "Lumby",
   "latitude": 50.2494,
   "longitude": -118.9656
 },
 {
   "name": "Saint-Faustin--Lac-Carre",
   "latitude": 46.0813,
   "longitude": -74.4668
 },
 {
   "name": "Morris-Turnberry",
   "latitude": 43.85,
   "longitude": -81.25
 },
 {
   "name": "Placentia",
   "latitude": 47.2458,
   "longitude": -53.9611
 },
 {
   "name": "Saint-Pascal",
   "latitude": 47.5333,
   "longitude": -69.8
 },
 {
   "name": "Mulmur",
   "latitude": 44.1917,
   "longitude": -80.1083
 },
 {
   "name": "Blind River",
   "latitude": 46.1833,
   "longitude": -82.95
 },
 {
   "name": "Dunham",
   "latitude": 45.1333,
   "longitude": -72.8
 },
 {
   "name": "Havre-Saint-Pierre",
   "latitude": 50.2333,
   "longitude": -63.6
 },
 {
   "name": "Saint-Anselme",
   "latitude": 46.6333,
   "longitude": -70.9667
 },
 {
   "name": "Trois-Pistoles",
   "latitude": 48.12,
   "longitude": -69.18
 },
 {
   "name": "Grande-Riviere",
   "latitude": 48.4,
   "longitude": -64.5
 },
 {
   "name": "Powassan",
   "latitude": 46.0825,
   "longitude": -79.3619
 },
 {
   "name": "Malartic",
   "latitude": 48.1333,
   "longitude": -78.1333
 },
 {
   "name": "Bonavista",
   "latitude": 48.6597,
   "longitude": -53.1208
 },
 {
   "name": "Killarney - Turtle Mountain",
   "latitude": 49.1775,
   "longitude": -99.6906
 },
 {
   "name": "Woodlands",
   "latitude": 50.2408,
   "longitude": -97.7358
 },
 {
   "name": "Lewisporte",
   "latitude": 49.23,
   "longitude": -55.07
 },
 {
   "name": "Saint-Denis-de-Brompton",
   "latitude": 45.45,
   "longitude": -72.0833
 },
 {
   "name": "Invermere",
   "latitude": 50.5083,
   "longitude": -116.0303
 },
 {
   "name": "Salisbury",
   "latitude": 46.0776,
   "longitude": -65.1996
 },
 {
   "name": "Bifrost-Riverton",
   "latitude": 51.0603,
   "longitude": -97.1436
 },
 {
   "name": "Buckland No. 491",
   "latitude": 53.3276,
   "longitude": -105.7804
 },
 {
   "name": "Cartier",
   "latitude": 49.9161,
   "longitude": -97.7
 },
 {
   "name": "Sainte-Anne-des-Lacs",
   "latitude": 45.85,
   "longitude": -74.1333
 },
 {
   "name": "Highlands East",
   "latitude": 44.9667,
   "longitude": -78.25
 },
 {
   "name": "Alexander",
   "latitude": 50.4222,
   "longitude": -96.075
 },
 {
   "name": "Sainte-Claire",
   "latitude": 46.6,
   "longitude": -70.8667
 },
 {
   "name": "Perce",
   "latitude": 48.5333,
   "longitude": -64.2167
 },
 {
   "name": "Saint-Jean-Port-Joli",
   "latitude": 47.2167,
   "longitude": -70.2667
 },
 {
   "name": "East Hawkesbury",
   "latitude": 45.5167,
   "longitude": -74.4667
 },
 {
   "name": "Bright",
   "latitude": 46.1205,
   "longitude": -67.0545
 },
 {
   "name": "Penhold",
   "latitude": 52.1333,
   "longitude": -113.8667
 },
 {
   "name": "Saint-Andre-d'Argenteuil",
   "latitude": 45.5667,
   "longitude": -74.3333
 },
 {
   "name": "Saint-Come--Liniere",
   "latitude": 46.0667,
   "longitude": -70.5167
 },
 {
   "name": "Saint-Sulpice",
   "latitude": 45.8333,
   "longitude": -73.35
 },
 {
   "name": "Marathon",
   "latitude": 48.75,
   "longitude": -86.3667
 },
 {
   "name": "Forestville",
   "latitude": 48.7333,
   "longitude": -69.0833
 },
 {
   "name": "Inuvik",
   "latitude": 68.3407,
   "longitude": -133.6096
 },
 {
   "name": "Richmond",
   "latitude": 45.6667,
   "longitude": -72.15
 },
 {
   "name": "Lake Cowichan",
   "latitude": 48.8258,
   "longitude": -124.0542
 },
 {
   "name": "Sables-Spanish Rivers",
   "latitude": 46.2333,
   "longitude": -82
 },
 {
   "name": "Hillsburg-Roblin-Shell River",
   "latitude": 51.3343,
   "longitude": -101.2929
 },
 {
   "name": "Port Hawkesbury",
   "latitude": 45.6153,
   "longitude": -61.3642
 },
 {
   "name": "Three Hills",
   "latitude": 51.7072,
   "longitude": -113.2647
 },
 {
   "name": "Lorette",
   "latitude": 49.7414,
   "longitude": -96.8761
 },
 {
   "name": "Paspebiac",
   "latitude": 48.0333,
   "longitude": -65.25
 },
 {
   "name": "Saint-Thomas",
   "latitude": 46.0167,
   "longitude": -73.35
 },
 {
   "name": "Saint-Jean-Baptiste",
   "latitude": 45.5167,
   "longitude": -73.1167
 },
 {
   "name": "Portneuf",
   "latitude": 46.7,
   "longitude": -71.8833
 },
 {
   "name": "Pictou",
   "latitude": 45.6814,
   "longitude": -62.7119
 },
 {
   "name": "Tisdale",
   "latitude": 52.85,
   "longitude": -104.05
 },
 {
   "name": "Lake of Bays",
   "latitude": 45.3043,
   "longitude": -79.018
 },
 {
   "name": "High Level",
   "latitude": 58.5169,
   "longitude": -117.1361
 },
 {
   "name": "Gibbons",
   "latitude": 53.8278,
   "longitude": -113.3228
 },
 {
   "name": "Bishops Falls",
   "latitude": 49.0167,
   "longitude": -55.5167
 },
 {
   "name": "WestLake-Gladstone",
   "latitude": 50.2862,
   "longitude": -98.8415
 },
 {
   "name": "Normandin",
   "latitude": 48.8333,
   "longitude": -72.5333
 },
 {
   "name": "Saint-Alphonse-Rodriguez",
   "latitude": 46.1833,
   "longitude": -73.7
 },
 {
   "name": "Beausejour",
   "latitude": 50.0622,
   "longitude": -96.5161
 },
 {
   "name": "Dalhousie",
   "latitude": 48.1,
   "longitude": -66.6167
 },
 {
   "name": "Saint-Alphonse-de-Granby",
   "latitude": 45.3333,
   "longitude": -72.8167
 },
 {
   "name": "Lac du Bonnet",
   "latitude": 50.2577,
   "longitude": -96.1209
 },
 {
   "name": "Clermont",
   "latitude": 47.6833,
   "longitude": -70.2333
 },
 {
   "name": "Virden",
   "latitude": 49.8508,
   "longitude": -100.9317
 },
 {
   "name": "Compton",
   "latitude": 45.2333,
   "longitude": -71.8167
 },
 {
   "name": "White City",
   "latitude": 50.4353,
   "longitude": -104.3572
 },
 {
   "name": "Ellison",
   "latitude": 49.9646,
   "longitude": -119.3178
 },
 {
   "name": "Mont-Saint-Gregoire",
   "latitude": 45.3333,
   "longitude": -73.1667
 },
 {
   "name": "Wellington",
   "latitude": 46.4768,
   "longitude": -64.7478
 },
 {
   "name": "Merrickville",
   "latitude": 44.8539,
   "longitude": -75.8269
 },
 {
   "name": "Saint-Liboire",
   "latitude": 45.65,
   "longitude": -72.7667
 },
 {
   "name": "Degelis",
   "latitude": 47.55,
   "longitude": -68.65
 },
 {
   "name": "Morris",
   "latitude": 49.3986,
   "longitude": -97.4592
 },
 {
   "name": "Saint-Alexis-des-Monts",
   "latitude": 46.4667,
   "longitude": -73.1333
 },
 {
   "name": "Cap-Saint-Ignace",
   "latitude": 47.0333,
   "longitude": -70.4667
 },
 {
   "name": "Saint-Anaclet-de-Lessard",
   "latitude": 48.48,
   "longitude": -68.42
 },
 {
   "name": "Carman",
   "latitude": 49.4992,
   "longitude": -98.0008
 },
 {
   "name": "Athens",
   "latitude": 44.625,
   "longitude": -75.95
 },
 {
   "name": "Melancthon",
   "latitude": 44.15,
   "longitude": -80.2667
 },
 {
   "name": "Cap Sante",
   "latitude": 46.6667,
   "longitude": -71.7833
 },
 {
   "name": "Harbour Grace",
   "latitude": 47.6917,
   "longitude": -53.2167
 },
 {
   "name": "Houston",
   "latitude": 54.3975,
   "longitude": -126.6419
 },
 {
   "name": "Adelaide-Metcalfe",
   "latitude": 42.95,
   "longitude": -81.7
 },
 {
   "name": "Crossfield",
   "latitude": 51.4333,
   "longitude": -114.0333
 },
 {
   "name": "Springdale",
   "latitude": 49.4974,
   "longitude": -56.0727
 },
 {
   "name": "Fort Macleod",
   "latitude": 49.7256,
   "longitude": -113.3975
 },
 {
   "name": "Athabasca",
   "latitude": 54.7197,
   "longitude": -113.2856
 },
 {
   "name": "Enderby",
   "latitude": 50.5508,
   "longitude": -119.1397
 },
 {
   "name": "Saint-Ferreol-les-Neiges",
   "latitude": 47.1167,
   "longitude": -70.85
 },
 {
   "name": "Laurentian Hills",
   "latitude": 46.1333,
   "longitude": -77.55
 },
 {
   "name": "Grand Valley",
   "latitude": 43.95,
   "longitude": -80.3667
 },
 {
   "name": "Senneterre",
   "latitude": 48.3833,
   "longitude": -77.2333
 },
 {
   "name": "Sainte-Marie-Madeleine",
   "latitude": 45.6,
   "longitude": -73.1
 },
 {
   "name": "Admaston/Bromley",
   "latitude": 45.5292,
   "longitude": -76.8969
 },
 {
   "name": "Saint-Gabriel-de-Valcartier",
   "latitude": 46.9333,
   "longitude": -71.4667
 },
 {
   "name": "North Algona Wilberforce",
   "latitude": 45.6167,
   "longitude": -77.2
 },
 {
   "name": "Kingston",
   "latitude": 45.4663,
   "longitude": -66.0217
 },
 {
   "name": "Wawa",
   "latitude": 47.9931,
   "longitude": -84.7736
 },
 {
   "name": "Saint-Christophe-d'Arthabaska",
   "latitude": 46.0333,
   "longitude": -71.8833
 },
 {
   "name": "Sainte-Melanie",
   "latitude": 46.1333,
   "longitude": -73.5167
 },
 {
   "name": "Ascot Corner",
   "latitude": 45.45,
   "longitude": -71.7667
 },
 {
   "name": "Horton",
   "latitude": 45.5,
   "longitude": -76.6667
 },
 {
   "name": "Saint-Michel",
   "latitude": 45.2333,
   "longitude": -73.5667
 },
 {
   "name": "Botwood",
   "latitude": 49.15,
   "longitude": -55.3667
 },
 {
   "name": "Saint-Paul-d'Abbotsford",
   "latitude": 45.4333,
   "longitude": -72.8833
 },
 {
   "name": "Saint-Marc-des-Carrieres",
   "latitude": 46.6833,
   "longitude": -72.05
 },
 {
   "name": "Stanstead",
   "latitude": 45.0167,
   "longitude": -72.1
 },
 {
   "name": "Sainte-Anne-de-Beaupre",
   "latitude": 47.0167,
   "longitude": -70.9333
 },
 {
   "name": "Sainte-Luce",
   "latitude": 48.55,
   "longitude": -68.38
 },
 {
   "name": "Saint-Gabriel",
   "latitude": 46.3,
   "longitude": -73.3833
 },
 {
   "name": "Rankin Inlet",
   "latitude": 62.83,
   "longitude": -92.1321
 },
 {
   "name": "Vanscoy No. 345",
   "latitude": 52.0073,
   "longitude": -107.0552
 },
 {
   "name": "Cedar",
   "latitude": 49.0853,
   "longitude": -123.8259
 },
 {
   "name": "Princeton",
   "latitude": 49.4589,
   "longitude": -120.506
 },
 {
   "name": "La Loche",
   "latitude": 56.4833,
   "longitude": -109.4333
 },
 {
   "name": "Kingsclear",
   "latitude": 45.8796,
   "longitude": -66.8695
 },
 {
   "name": "Ferme-Neuve",
   "latitude": 46.7,
   "longitude": -75.45
 },
 {
   "name": "Thurso",
   "latitude": 45.5969,
   "longitude": -75.2433
 },
 {
   "name": "Adstock",
   "latitude": 46.05,
   "longitude": -71.08
 },
 {
   "name": "Shuniah",
   "latitude": 48.5833,
   "longitude": -88.8333
 },
 {
   "name": "Enniskillen",
   "latitude": 42.8167,
   "longitude": -82.125
 },
 {
   "name": "Yamachiche",
   "latitude": 46.2667,
   "longitude": -72.8333
 },
 {
   "name": "Saint-Maurice",
   "latitude": 46.4667,
   "longitude": -72.5333
 },
 {
   "name": "Bonaventure",
   "latitude": 48.05,
   "longitude": -65.4833
 },
 {
   "name": "Val-Morin",
   "latitude": 46,
   "longitude": -74.18
 },
 {
   "name": "Pohenegamook",
   "latitude": 47.4667,
   "longitude": -69.2167
 },
 {
   "name": "Wakefield",
   "latitude": 46.2406,
   "longitude": -67.6248
 },
 {
   "name": "Stoke",
   "latitude": 45.5333,
   "longitude": -71.8
 },
 {
   "name": "Sainte-Marguerite-du-Lac-Masson",
   "latitude": 46.056,
   "longitude": -74.0723
 },
 {
   "name": "Saint-Prime",
   "latitude": 48.58,
   "longitude": -72.33
 },
 {
   "name": "Kuujjuaq",
   "latitude": 58.1429,
   "longitude": -68.3742
 },
 {
   "name": "Atikokan",
   "latitude": 48.75,
   "longitude": -91.6167
 },
 {
   "name": "Grenville-sur-la-Rouge",
   "latitude": 45.65,
   "longitude": -74.6333
 },
 {
   "name": "North Cypress-Langford",
   "latitude": 49.9969,
   "longitude": -99.3982
 },
 {
   "name": "Sainte-Anne-de-Sorel",
   "latitude": 46.05,
   "longitude": -73.0667
 },
 {
   "name": "Macamic",
   "latitude": 48.75,
   "longitude": -79
 },
 {
   "name": "Sundre",
   "latitude": 51.7972,
   "longitude": -114.6406
 },
 {
   "name": "Rougemont",
   "latitude": 45.4333,
   "longitude": -73.05
 },
 {
   "name": "Piedmont",
   "latitude": 45.9,
   "longitude": -74.13
 },
 {
   "name": "Grimshaw",
   "latitude": 56.1908,
   "longitude": -117.6117
 },
 {
   "name": "Lac-des-Ecorces",
   "latitude": 46.55,
   "longitude": -75.35
 },
 {
   "name": "Northeastern Manitoulin and the Islands",
   "latitude": 45.9667,
   "longitude": -81.9333
 },
 {
   "name": "Pelican Narrows",
   "latitude": 55.1883,
   "longitude": -102.9342
 },
 {
   "name": "McDougall",
   "latitude": 45.45,
   "longitude": -80.0167
 },
 {
   "name": "Black Diamond",
   "latitude": 50.6881,
   "longitude": -114.2333
 },
 {
   "name": "Saint-Pamphile",
   "latitude": 46.9667,
   "longitude": -69.7833
 },
 {
   "name": "Bedford",
   "latitude": 45.1167,
   "longitude": -72.9833
 },
 {
   "name": "Weedon-Centre",
   "latitude": 45.7,
   "longitude": -71.4667
 },
 {
   "name": "Lacolle",
   "latitude": 45.0833,
   "longitude": -73.3667
 },
 {
   "name": "Saint-Gabriel-de-Brandon",
   "latitude": 46.2667,
   "longitude": -73.3833
 },
 {
   "name": "Errington",
   "latitude": 49.2874,
   "longitude": -124.3433
 },
 {
   "name": "Coalhurst",
   "latitude": 49.7457,
   "longitude": -112.9319
 },
 {
   "name": "French River / Riviere des Francais",
   "latitude": 46.1667,
   "longitude": -80.5
 },
 {
   "name": "Arviat",
   "latitude": 61.0996,
   "longitude": -94.1688
 },
 {
   "name": "Saint-David-de-Falardeau",
   "latitude": 48.6167,
   "longitude": -71.1167
 },
 {
   "name": "Markstay",
   "latitude": 46.4912,
   "longitude": -80.4717
 },
 {
   "name": "Spaniards Bay",
   "latitude": 47.6181,
   "longitude": -53.3369
 },
 {
   "name": "Cocagne",
   "latitude": 46.3406,
   "longitude": -64.62
 },
 {
   "name": "Saint-Bruno",
   "latitude": 48.4667,
   "longitude": -71.65
 },
 {
   "name": "Chetwynd",
   "latitude": 55.6972,
   "longitude": -121.6333
 },
 {
   "name": "Laurier-Station",
   "latitude": 46.5333,
   "longitude": -71.6333
 },
 {
   "name": "Saint-Anicet",
   "latitude": 45.12,
   "longitude": -74.35
 },
 {
   "name": "Saint-Mathieu-de-Beloeil",
   "latitude": 45.5667,
   "longitude": -73.2
 },
 {
   "name": "Cap-Chat",
   "latitude": 49.1,
   "longitude": -66.6833
 },
 {
   "name": "Sexsmith",
   "latitude": 55.3508,
   "longitude": -118.7825
 },
 {
   "name": "Notre-Dame-de-Lourdes",
   "latitude": 46.1,
   "longitude": -73.4333
 },
 {
   "name": "Ville-Marie",
   "latitude": 47.3333,
   "longitude": -79.4333
 },
 {
   "name": "Saint-Isidore",
   "latitude": 45.3,
   "longitude": -73.68
 },
 {
   "name": "Shippegan",
   "latitude": 47.7439,
   "longitude": -64.7178
 },
 {
   "name": "East Garafraxa",
   "latitude": 43.85,
   "longitude": -80.25
 },
 {
   "name": "Pemberton",
   "latitude": 50.3203,
   "longitude": -122.8053
 },
 {
   "name": "Unity",
   "latitude": 52.4333,
   "longitude": -109.1667
 },
 {
   "name": "Rimbey",
   "latitude": 52.6333,
   "longitude": -114.2167
 },
 {
   "name": "High Prairie",
   "latitude": 55.4325,
   "longitude": -116.4861
 },
 {
   "name": "Turner Valley",
   "latitude": 50.6739,
   "longitude": -114.2786
 },
 {
   "name": "Hanna",
   "latitude": 51.6383,
   "longitude": -111.9419
 },
 {
   "name": "Fort Smith",
   "latitude": 60.026,
   "longitude": -112.0821
 },
 {
   "name": "Maria",
   "latitude": 48.1667,
   "longitude": -65.9833
 },
 {
   "name": "Saint-Chrysostome",
   "latitude": 45.1,
   "longitude": -73.7667
 },
 {
   "name": "Greater Madawaska",
   "latitude": 45.2722,
   "longitude": -76.8589
 },
 {
   "name": "Berwick",
   "latitude": 45.0475,
   "longitude": -64.736
 },
 {
   "name": "Saint-Damase",
   "latitude": 45.5333,
   "longitude": -73
 },
 {
   "name": "Lincoln",
   "latitude": 45.8716,
   "longitude": -66.5437
 },
 {
   "name": "Disraeli",
   "latitude": 45.9,
   "longitude": -71.35
 },
 {
   "name": "Sainte-Victoire-de-Sorel",
   "latitude": 45.95,
   "longitude": -73.0833
 },
 {
   "name": "Meadow Lake No. 588",
   "latitude": 54.1213,
   "longitude": -108.2837
 },
 {
   "name": "Elkford",
   "latitude": 50.0214,
   "longitude": -114.9158
 },
 {
   "name": "Georgian Bay",
   "latitude": 44.9833,
   "longitude": -79.8167
 },
 {
   "name": "Saint-Alexandre",
   "latitude": 45.2333,
   "longitude": -73.1167
 },
 {
   "name": "Herbertville",
   "latitude": 48.3473,
   "longitude": -71.6784
 },
 {
   "name": "Moosomin",
   "latitude": 50.142,
   "longitude": -101.67
 },
 {
   "name": "North Kawartha",
   "latitude": 44.75,
   "longitude": -78.1
 },
 {
   "name": "Sainte-Thecle",
   "latitude": 46.8167,
   "longitude": -72.5
 },
 {
   "name": "Trenton",
   "latitude": 45.6193,
   "longitude": -62.6332
 },
 {
   "name": "Fermont",
   "latitude": 52.7833,
   "longitude": -67.0833
 },
 {
   "name": "Esterhazy",
   "latitude": 50.65,
   "longitude": -102.0667
 },
 {
   "name": "Wickham",
   "latitude": 45.75,
   "longitude": -72.5
 },
 {
   "name": "La Presentation",
   "latitude": 45.6667,
   "longitude": -73.05
 },
 {
   "name": "Beaverlodge",
   "latitude": 55.2094,
   "longitude": -119.4292
 },
 {
   "name": "Sainte-Catherine-de-Hatley",
   "latitude": 45.25,
   "longitude": -72.05
 },
 {
   "name": "Saint-Basile",
   "latitude": 46.75,
   "longitude": -71.8167
 },
 {
   "name": "Saint-Raphael",
   "latitude": 46.8,
   "longitude": -70.75
 },
 {
   "name": "Holyrood",
   "latitude": 47.3833,
   "longitude": -53.1333
 },
 {
   "name": "Gracefield",
   "latitude": 46.0926,
   "longitude": -75.9574
 },
 {
   "name": "Saint-Martin",
   "latitude": 45.9667,
   "longitude": -70.65
 },
 {
   "name": "Causapscal",
   "latitude": 48.3667,
   "longitude": -67.2333
 },
 {
   "name": "Brigham",
   "latitude": 45.25,
   "longitude": -72.85
 },
 {
   "name": "Perry",
   "latitude": 45.5,
   "longitude": -79.2833
 },
 {
   "name": "Port-Daniel--Gascons",
   "latitude": 48.1833,
   "longitude": -64.9667
 },
 {
   "name": "Rosetown",
   "latitude": 51.55,
   "longitude": -107.9833
 },
 {
   "name": "Minnedosa",
   "latitude": 50.2453,
   "longitude": -99.8428
 },
 {
   "name": "Labelle",
   "latitude": 46.2833,
   "longitude": -74.7333
 },
 {
   "name": "Huntingdon",
   "latitude": 45.08,
   "longitude": -74.17
 },
 {
   "name": "Hebertville",
   "latitude": 48.4,
   "longitude": -71.6833
 },
 {
   "name": "Black River-Matheson",
   "latitude": 48.5333,
   "longitude": -80.4667
 },
 {
   "name": "Saint-Michel-des-Saints",
   "latitude": 46.6833,
   "longitude": -73.9167
 },
 {
   "name": "Dufferin",
   "latitude": 49.5319,
   "longitude": -98.07
 },
 {
   "name": "Saint-Victor",
   "latitude": 46.15,
   "longitude": -70.9
 },
 {
   "name": "Sicamous",
   "latitude": 50.8378,
   "longitude": -118.9703
 },
 {
   "name": "Cap Pele",
   "latitude": 46.2172,
   "longitude": -64.2822
 },
 {
   "name": "Kelsey",
   "latitude": 53.7356,
   "longitude": -101.395
 },
 {
   "name": "Killaloe, Hagarty and Richards",
   "latitude": 45.6,
   "longitude": -77.5
 },
 {
   "name": "Alvinston",
   "latitude": 42.8489,
   "longitude": -81.9049
 },
 {
   "name": "Dundurn No. 314",
   "latitude": 51.8261,
   "longitude": -106.5416
 },
 {
   "name": "Saint-Ephrem-de-Beauce",
   "latitude": 46.0516,
   "longitude": -70.9374
 },
 {
   "name": "Assiniboia",
   "latitude": 49.6167,
   "longitude": -105.9833
 },
 {
   "name": "Temiscaming",
   "latitude": 46.7167,
   "longitude": -79.1
 },
 {
   "name": "Magrath",
   "latitude": 49.4239,
   "longitude": -112.8683
 },
 {
   "name": "Sainte-Genevieve-de-Berthier",
   "latitude": 46.0833,
   "longitude": -73.2167
 },
 {
   "name": "Buctouche",
   "latitude": 46.4719,
   "longitude": -64.7249
 },
 {
   "name": "Grand Manan",
   "latitude": 44.69,
   "longitude": -66.82
 },
 {
   "name": "Sainte-Madeleine",
   "latitude": 45.6,
   "longitude": -73.1
 },
 {
   "name": "Boissevain",
   "latitude": 49.1779,
   "longitude": -100.0955
 },
 {
   "name": "Scott",
   "latitude": 46.512,
   "longitude": -71.077
 },
 {
   "name": "Sainte-Croix",
   "latitude": 46.62,
   "longitude": -71.73
 },
 {
   "name": "Algonquin Highlands",
   "latitude": 45.4,
   "longitude": -78.75
 },
 {
   "name": "Valcourt",
   "latitude": 45.5,
   "longitude": -72.3167
 },
 {
   "name": "Saint George",
   "latitude": 45.2916,
   "longitude": -66.8501
 },
 {
   "name": "Paquetville",
   "latitude": 47.6334,
   "longitude": -65.1803
 },
 {
   "name": "Saint-Dominique",
   "latitude": 45.5667,
   "longitude": -72.85
 },
 {
   "name": "Clearwater",
   "latitude": 51.65,
   "longitude": -120.0333
 },
 {
   "name": "Addington Highlands",
   "latitude": 45,
   "longitude": -77.25
 },
 {
   "name": "Lillooet",
   "latitude": 50.6864,
   "longitude": -121.9364
 },
 {
   "name": "Burin",
   "latitude": 47.05,
   "longitude": -55.18
 },
 {
   "name": "Grand Bank",
   "latitude": 47.1,
   "longitude": -55.7833
 },
 {
   "name": "Lery",
   "latitude": 45.35,
   "longitude": -73.8
 },
 {
   "name": "Minto",
   "latitude": 46.1497,
   "longitude": -66.1067
 },
 {
   "name": "Rosthern No. 403",
   "latitude": 52.6206,
   "longitude": -106.3967
 },
 {
   "name": "Chase",
   "latitude": 50.8189,
   "longitude": -119.6844
 },
 {
   "name": "Mansfield-et-Pontefract",
   "latitude": 45.8611,
   "longitude": -76.7392
 },
 {
   "name": "Saint-Denis",
   "latitude": 45.7833,
   "longitude": -73.15
 },
 {
   "name": "Outlook",
   "latitude": 51.5,
   "longitude": -107.05
 },
 {
   "name": "Mitchell",
   "latitude": 49.5363,
   "longitude": -96.7634
 },
 {
   "name": "Saint-Gedeon-de-Beauce",
   "latitude": 45.85,
   "longitude": -70.6333
 },
 {
   "name": "Saint-Leonard-d'Aston",
   "latitude": 46.1,
   "longitude": -72.3667
 },
 {
   "name": "Lunenburg",
   "latitude": 44.3833,
   "longitude": -64.3167
 },
 {
   "name": "Northesk",
   "latitude": 47.2569,
   "longitude": -66.2613
 },
 {
   "name": "Albanel",
   "latitude": 48.8833,
   "longitude": -72.45
 },
 {
   "name": "St. Anthony",
   "latitude": 51.3725,
   "longitude": -55.5947
 },
 {
   "name": "Pessamit",
   "latitude": 49.0485,
   "longitude": -68.6814
 },
 {
   "name": "Maskinonge",
   "latitude": 46.2333,
   "longitude": -73.0167
 },
 {
   "name": "Saint-Charles-de-Bellechasse",
   "latitude": 46.7667,
   "longitude": -70.95
 },
 {
   "name": "Fogo Island",
   "latitude": 49.6667,
   "longitude": -54.1833
 },
 {
   "name": "East Broughton",
   "latitude": 46.2167,
   "longitude": -71.0667
 },
 {
   "name": "Lantz",
   "latitude": 44.9894,
   "longitude": -63.4736
 },
 {
   "name": "Calmar",
   "latitude": 53.25,
   "longitude": -113.7833
 },
 {
   "name": "Highlands",
   "latitude": 48.52,
   "longitude": -123.5
 },
 {
   "name": "Saint-Polycarpe",
   "latitude": 45.3,
   "longitude": -74.3
 },
 {
   "name": "Logy Bay-Middle Cove-Outer Cove",
   "latitude": 47.63,
   "longitude": -52.68
 },
 {
   "name": "Deschambault",
   "latitude": 46.6436,
   "longitude": -72.0236
 },
 {
   "name": "Canora",
   "latitude": 51.6339,
   "longitude": -102.4369
 },
 {
   "name": "Upper Miramichi",
   "latitude": 46.5254,
   "longitude": -66.2085
 },
 {
   "name": "Anmore",
   "latitude": 49.3144,
   "longitude": -122.8564
 },
 {
   "name": "Hardwicke",
   "latitude": 47.0208,
   "longitude": -65.0302
 },
 {
   "name": "Saint-Come",
   "latitude": 46.27,
   "longitude": -73.78
 },
 {
   "name": "Waskaganish",
   "latitude": 51.3674,
   "longitude": -78.7069
 },
 {
   "name": "Twillingate",
   "latitude": 49.6444,
   "longitude": -54.7436
 },
 {
   "name": "Saint-Quentin",
   "latitude": 47.5135,
   "longitude": -67.3921
 },
 {
   "name": "Lebel-sur-Quevillon",
   "latitude": 49.05,
   "longitude": -76.9833
 },
 {
   "name": "Pilot Butte",
   "latitude": 50.4667,
   "longitude": -104.4167
 },
 {
   "name": "Nanton",
   "latitude": 50.3494,
   "longitude": -113.7717
 },
 {
   "name": "Pierreville",
   "latitude": 46.0667,
   "longitude": -72.8167
 },
 {
   "name": "New-Wes-Valley",
   "latitude": 49.15,
   "longitude": -53.5833
 },
 {
   "name": "Pennfield Ridge",
   "latitude": 45.1924,
   "longitude": -66.6858
 },
 {
   "name": "West Interlake",
   "latitude": 50.9837,
   "longitude": -98.3572
 },
 {
   "name": "Biggar",
   "latitude": 52.059,
   "longitude": -107.979
 },
 {
   "name": "Britannia No. 502",
   "latitude": 53.4236,
   "longitude": -109.7772
 },
 {
   "name": "Kent",
   "latitude": 46.6221,
   "longitude": -67.2953
 },
 {
   "name": "Wabana",
   "latitude": 47.65,
   "longitude": -52.9333
 },
 {
   "name": "Saint-Gilles",
   "latitude": 46.5167,
   "longitude": -71.3667
 },
 {
   "name": "Wendake",
   "latitude": 46.8693,
   "longitude": -71.3628
 },
 {
   "name": "Saint-Bernard",
   "latitude": 46.5,
   "longitude": -71.1333
 },
 {
   "name": "Sainte-Cecile-de-Milton",
   "latitude": 45.4833,
   "longitude": -72.75
 },
 {
   "name": "Saint-Roch-de-Richelieu",
   "latitude": 45.8833,
   "longitude": -73.1667
 },
 {
   "name": "Saint-Nazaire",
   "latitude": 48.5833,
   "longitude": -71.5333
 },
 {
   "name": "Saint-Elzear",
   "latitude": 46.4,
   "longitude": -71.0667
 },
 {
   "name": "Hinchinbrooke",
   "latitude": 45.05,
   "longitude": -74.1
 },
 {
   "name": "Saint-Francois-Xavier-de-Brompton",
   "latitude": 45.5333,
   "longitude": -72.05
 },
 {
   "name": "Papineauville",
   "latitude": 45.6167,
   "longitude": -75.0167
 },
 {
   "name": "Prairie View",
   "latitude": 50.3304,
   "longitude": -100.9803
 },
 {
   "name": "Cowichan Bay",
   "latitude": 48.7666,
   "longitude": -123.6743
 },
 {
   "name": "Saint-Ignace-de-Loyola",
   "latitude": 46.0667,
   "longitude": -73.1333
 },
 {
   "name": "Central Manitoulin",
   "latitude": 45.7167,
   "longitude": -82.2
 },
 {
   "name": "Maple Creek",
   "latitude": 49.9167,
   "longitude": -109.4667
 },
 {
   "name": "Glovertown",
   "latitude": 48.6667,
   "longitude": -54.05
 },
 {
   "name": "Tofield",
   "latitude": 53.3703,
   "longitude": -112.6667
 },
 {
   "name": "Madoc",
   "latitude": 44.5833,
   "longitude": -77.5167
 },
 {
   "name": "Upton",
   "latitude": 45.65,
   "longitude": -72.6833
 },
 {
   "name": "Sainte-Anne-de-Sabrevois",
   "latitude": 45.2,
   "longitude": -73.2167
 },
 {
   "name": "Logan Lake",
   "latitude": 50.4911,
   "longitude": -120.8153
 },
 {
   "name": "Sainte-Anne-de-la-Perade",
   "latitude": 46.5833,
   "longitude": -72.2
 },
 {
   "name": "Saint-Damien-de-Buckland",
   "latitude": 46.6333,
   "longitude": -70.6667
 },
 {
   "name": "Baker Lake",
   "latitude": 64.3287,
   "longitude": -96.0308
 },
 {
   "name": "Saltair",
   "latitude": 48.9504,
   "longitude": -123.7637
 },
 {
   "name": "Pouch Cove",
   "latitude": 47.767,
   "longitude": -52.767
 },
 {
   "name": "Saint-Ferdinand",
   "latitude": 46.1,
   "longitude": -71.5667
 },
 {
   "name": "Port McNeill",
   "latitude": 50.5903,
   "longitude": -127.0847
 },
 {
   "name": "Digby",
   "latitude": 44.6222,
   "longitude": -65.7606
 },
 {
   "name": "Manouane",
   "latitude": 47.2091,
   "longitude": -74.3833
 },
 {
   "name": "Saint-Gervais",
   "latitude": 46.7167,
   "longitude": -70.8833
 },
 {
   "name": "Neebing",
   "latitude": 48.1833,
   "longitude": -89.4667
 },
 {
   "name": "Redwater",
   "latitude": 53.9489,
   "longitude": -113.1067
 },
 {
   "name": "Saint-Alexandre-de-Kamouraska",
   "latitude": 47.6817,
   "longitude": -69.625
 },
 {
   "name": "Saint-Marc-sur-Richelieu",
   "latitude": 45.6833,
   "longitude": -73.2
 },
 {
   "name": "Mandeville",
   "latitude": 46.3667,
   "longitude": -73.35
 },
 {
   "name": "Caplan",
   "latitude": 48.1,
   "longitude": -65.6833
 },
 {
   "name": "Point Edward",
   "latitude": 42.9931,
   "longitude": -82.4083
 },
 {
   "name": "Allardville",
   "latitude": 47.4321,
   "longitude": -65.4383
 },
 {
   "name": "Waterville",
   "latitude": 45.2667,
   "longitude": -71.9
 },
 {
   "name": "Saint-Damien",
   "latitude": 46.33,
   "longitude": -73.48
 },
 {
   "name": "Lac-Nominingue",
   "latitude": 46.4,
   "longitude": -75.0333
 },
 {
   "name": "Obedjiwan",
   "latitude": 48.6686,
   "longitude": -74.9289
 },
 {
   "name": "Rama",
   "latitude": 51.7578,
   "longitude": -103.0008
 },
 {
   "name": "McCreary",
   "latitude": 50.7494,
   "longitude": -99.485
 },
 {
   "name": "Deloraine-Winchester",
   "latitude": 49.1775,
   "longitude": -100.4322
 },
 {
   "name": "Oakland-Wawanesa",
   "latitude": 49.6208,
   "longitude": -99.8481
 },
 {
   "name": "Brenda-Waskada",
   "latitude": 49.1775,
   "longitude": -100.7019
 },
 {
   "name": "Russell-Binscarth",
   "latitude": 50.7272,
   "longitude": -101.3689
 },
 {
   "name": "Ellice-Archie",
   "latitude": 50.3239,
   "longitude": -101.2729
 },
 {
   "name": "Souris-Glenwood",
   "latitude": 49.6208,
   "longitude": -100.2581
 },
 {
   "name": "Riverdale",
   "latitude": 49.975,
   "longitude": -100.2789
 },
 {
   "name": "Pembina",
   "latitude": 49.1775,
   "longitude": -98.5408
 },
 {
   "name": "Wallace-Woodworth",
   "latitude": 49.9156,
   "longitude": -100.9389
 },
 {
   "name": "Lorne",
   "latitude": 49.4436,
   "longitude": -98.7494
 },
 {
   "name": "Ethelbert",
   "latitude": 51.5364,
   "longitude": -100.4981
 },
 {
   "name": "Yellowhead",
   "latitude": 50.4847,
   "longitude": -100.4828
 },
 {
   "name": "Swan Valley West",
   "latitude": 51.9978,
   "longitude": -101.3944
 },
 {
   "name": "Grey",
   "latitude": 49.7094,
   "longitude": -98.0736
 },
 {
   "name": "Gilbert Plains",
   "latitude": 51.1547,
   "longitude": -100.4381
 },
 {
   "name": "Norfolk-Treherne",
   "latitude": 49.6653,
   "longitude": -98.5967
 },
 {
   "name": "Hamiota",
   "latitude": 50.1964,
   "longitude": -100.6342
 },
 {
   "name": "Emerson-Franklin",
   "latitude": 49.1333,
   "longitude": -97.0331
 },
 {
   "name": "Sifton",
   "latitude": 49.6653,
   "longitude": -100.6678
 },
 {
   "name": "Rossburn",
   "latitude": 50.7272,
   "longitude": -100.7408
 },
 {
   "name": "Grand View",
   "latitude": 51.155,
   "longitude": -100.7892
 },
 {
   "name": "Grassland",
   "latitude": 49.4306,
   "longitude": -100.3103
 },
 {
   "name": "Louise",
   "latitude": 49.1772,
   "longitude": -98.8794
 },
 {
   "name": "Ste. Rose",
   "latitude": 51.0222,
   "longitude": -99.4306
 },
 {
   "name": "Cartwright-Roblin",
   "latitude": 49.1331,
   "longitude": -99.2797
 },
 {
   "name": "Mossey River",
   "latitude": 51.755,
   "longitude": -99.9664
 },
 {
   "name": "Lakeshore",
   "latitude": 51.244,
   "longitude": -99.6562
 },
 {
   "name": "Riding Mountain West",
   "latitude": 50.8347,
   "longitude": -101.0961
 },
 {
   "name": "Clanwilliam-Erickson",
   "latitude": 50.5061,
   "longitude": -99.8156
 },
 {
   "name": "Glenboro-South Cypress",
   "latitude": 49.665,
   "longitude": -99.3708
 },
 {
   "name": "North Norfolk",
   "latitude": 49.9308,
   "longitude": -98.8356
 },
 {
   "name": "Reinland",
   "latitude": 49.1331,
   "longitude": -97.5942
 },
 {
   "name": "Minitonas-Bowsman",
   "latitude": 52.1433,
   "longitude": -100.9772
 },
 {
   "name": "Kippens",
   "latitude": 48.5492,
   "longitude": -58.6236
 },
 {
   "name": "Blucher",
   "latitude": 52.0134,
   "longitude": -106.2176
 },
 {
   "name": "Hatley",
   "latitude": 45.27,
   "longitude": -71.95
 },
 {
   "name": "Saint-Gedeon",
   "latitude": 48.5,
   "longitude": -71.7667
 },
 {
   "name": "Kingsey Falls",
   "latitude": 45.85,
   "longitude": -72.0667
 },
 {
   "name": "Provost",
   "latitude": 52.3539,
   "longitude": -110.2686
 },
 {
   "name": "Saint-Charles",
   "latitude": 46.6692,
   "longitude": -65.0184
 },
 {
   "name": "Mattawa",
   "latitude": 46.3167,
   "longitude": -78.7
 },
 {
   "name": "Tumbler Ridge",
   "latitude": 55.1333,
   "longitude": -121
 },
 {
   "name": "Terrasse-Vaudreuil",
   "latitude": 45.4,
   "longitude": -73.9833
 },
 {
   "name": "L'Ascension-de-Notre-Seigneur",
   "latitude": 48.7,
   "longitude": -71.6833
 },
 {
   "name": "Bow Island",
   "latitude": 49.8667,
   "longitude": -111.3667
 },
 {
   "name": "Barraute",
   "latitude": 48.4333,
   "longitude": -77.6333
 },
 {
   "name": "One Hundred Mile House",
   "latitude": 51.6413,
   "longitude": -121.3127
 },
 {
   "name": "Kedgwick",
   "latitude": 47.6456,
   "longitude": -67.3431
 },
 {
   "name": "Gambo",
   "latitude": 48.7833,
   "longitude": -54.2167
 },
 {
   "name": "Saint-Liguori",
   "latitude": 46.0167,
   "longitude": -73.5667
 },
 {
   "name": "Bonfield",
   "latitude": 46.2167,
   "longitude": -79.1333
 },
 {
   "name": "Pointe-Lebel",
   "latitude": 49.1667,
   "longitude": -68.2
 },
 {
   "name": "Saint Mary",
   "latitude": 46.3987,
   "longitude": -64.8681
 },
 {
   "name": "Saint-Patrice-de-Sherrington",
   "latitude": 45.1667,
   "longitude": -73.5167
 },
 {
   "name": "Fox Creek",
   "latitude": 54.395,
   "longitude": -116.8092
 },
 {
   "name": "Dawn-Euphemia",
   "latitude": 42.7,
   "longitude": -82.0167
 },
 {
   "name": "Chapleau",
   "latitude": 47.8333,
   "longitude": -83.4
 },
 {
   "name": "Saint-Esprit",
   "latitude": 45.9,
   "longitude": -73.6667
 },
 {
   "name": "Westfield Beach",
   "latitude": 45.3432,
   "longitude": -66.2868
 },
 {
   "name": "Montague",
   "latitude": 46.1652,
   "longitude": -62.65
 },
 {
   "name": "Mashteuiatsh",
   "latitude": 48.569,
   "longitude": -72.2495
 },
 {
   "name": "Saint-Francois-du-Lac",
   "latitude": 46.0667,
   "longitude": -72.8333
 },
 {
   "name": "Eel River Crossing",
   "latitude": 48.0125,
   "longitude": -66.4208
 },
 {
   "name": "Saint-Fulgence",
   "latitude": 48.45,
   "longitude": -70.9
 },
 {
   "name": "Millet",
   "latitude": 53.0978,
   "longitude": -113.4728
 },
 {
   "name": "Vallee-Jonction",
   "latitude": 46.3667,
   "longitude": -70.9167
 },
 {
   "name": "Saint-Georges-de-Cacouna",
   "latitude": 47.9167,
   "longitude": -69.5
 },
 {
   "name": "Lumsden No. 189",
   "latitude": 50.6734,
   "longitude": -104.7686
 },
 {
   "name": "Manitouwadge",
   "latitude": 49.1333,
   "longitude": -85.8333
 },
 {
   "name": "Wellington",
   "latitude": 43.9579,
   "longitude": -77.3534
 },
 {
   "name": "Swift Current No. 137",
   "latitude": 50.2211,
   "longitude": -107.8559
 },
 {
   "name": "Tofino",
   "latitude": 49.1275,
   "longitude": -125.8852
 },
 {
   "name": "Fort Qu'Appelle",
   "latitude": 50.7667,
   "longitude": -103.7833
 },
 {
   "name": "Vulcan",
   "latitude": 50.4,
   "longitude": -113.25
 },
 {
   "name": "Indian Head",
   "latitude": 50.5333,
   "longitude": -103.6667
 },
 {
   "name": "Petit Rocher",
   "latitude": 47.7839,
   "longitude": -65.7159
 },
 {
   "name": "Wabush",
   "latitude": 52.9081,
   "longitude": -66.869
 },
 {
   "name": "Saint-Fabien",
   "latitude": 48.3,
   "longitude": -68.87
 },
 {
   "name": "Watrous",
   "latitude": 51.6841,
   "longitude": -105.4661
 },
 {
   "name": "North Frontenac",
   "latitude": 44.95,
   "longitude": -76.9
 },
 {
   "name": "Lac-Superieur",
   "latitude": 46.2,
   "longitude": -74.4667
 },
 {
   "name": "Les Escoumins",
   "latitude": 48.35,
   "longitude": -69.4
 },
 {
   "name": "Richibucto",
   "latitude": 46.6189,
   "longitude": -64.8385
 },
 {
   "name": "Riviere-Beaudette",
   "latitude": 45.2333,
   "longitude": -74.3333
 },
 {
   "name": "Saint-Barthelemy",
   "latitude": 46.1833,
   "longitude": -73.1333
 },
 {
   "name": "Nisga'a",
   "latitude": 55.1078,
   "longitude": -129.4293
 },
 {
   "name": "Austin",
   "latitude": 45.1833,
   "longitude": -72.2833
 },
 {
   "name": "Saint-Mathieu",
   "latitude": 45.3167,
   "longitude": -73.5164
 },
 {
   "name": "Saint-Paul-de-l'Ile-aux-Noix",
   "latitude": 45.1333,
   "longitude": -73.2833
 },
 {
   "name": "Orkney No. 244",
   "latitude": 51.2557,
   "longitude": -102.6469
 },
 {
   "name": "Behchoko",
   "latitude": 62.8184,
   "longitude": -115.9933
 },
 {
   "name": "Saint-Joseph-de-Coleraine",
   "latitude": 45.97,
   "longitude": -71.37
 },
 {
   "name": "Saint-Cyprien-de-Napierville",
   "latitude": 45.1833,
   "longitude": -73.4167
 },
 {
   "name": "Sayabec",
   "latitude": 48.5667,
   "longitude": -67.6833
 },
 {
   "name": "Valleyview",
   "latitude": 55.0686,
   "longitude": -117.2683
 },
 {
   "name": "Deleage",
   "latitude": 46.3833,
   "longitude": -75.9167
 },
 {
   "name": "Potton",
   "latitude": 45.0833,
   "longitude": -72.3667
 },
 {
   "name": "Sainte-Beatrix",
   "latitude": 46.2,
   "longitude": -73.6167
 },
 {
   "name": "Sainte-Justine",
   "latitude": 46.4,
   "longitude": -70.35
 },
 {
   "name": "Eastman",
   "latitude": 45.3341,
   "longitude": -72.3041
 },
 {
   "name": "Saint-Valerien-de-Milton",
   "latitude": 45.5667,
   "longitude": -72.7167
 },
 {
   "name": "Saint-Cuthbert",
   "latitude": 46.15,
   "longitude": -73.2333
 },
 {
   "name": "Saint-Blaise-sur-Richelieu",
   "latitude": 45.2167,
   "longitude": -73.2833
 },
 {
   "name": "Middleton",
   "latitude": 44.9418,
   "longitude": -65.0686
 },
 {
   "name": "Maugerville",
   "latitude": 46.1301,
   "longitude": -66.2859
 },
 {
   "name": "Dalmeny",
   "latitude": 52.3411,
   "longitude": -106.7733
 },
 {
   "name": "Kamsack",
   "latitude": 51.565,
   "longitude": -101.8947
 },
 {
   "name": "Lumsden",
   "latitude": 50.6463,
   "longitude": -104.8676
 },
 {
   "name": "Trinity Bay North",
   "latitude": 48.4978,
   "longitude": -53.086
 },
 {
   "name": "Saint-Michel-de-Bellechasse",
   "latitude": 46.8667,
   "longitude": -70.9167
 },
 {
   "name": "Sainte-Angele-de-Monnoir",
   "latitude": 45.3833,
   "longitude": -73.1
 },
 {
   "name": "Picture Butte",
   "latitude": 49.8731,
   "longitude": -112.78
 },
 {
   "name": "Sacre-Coeur-Saguenay",
   "latitude": 48.2479,
   "longitude": -69.854
 },
 {
   "name": "Saint-Louis",
   "latitude": 46.7048,
   "longitude": -65.1046
 },
 {
   "name": "Victoria",
   "latitude": 47.7675,
   "longitude": -53.2411
 },
 {
   "name": "Saint-Robert",
   "latitude": 45.9667,
   "longitude": -73
 },
 {
   "name": "Armstrong",
   "latitude": 50.64,
   "longitude": -97.495
 },
 {
   "name": "Saint-Pierre-de-l'Ile-d'Orleans",
   "latitude": 46.8833,
   "longitude": -71.0667
 },
 {
   "name": "La Guadeloupe",
   "latitude": 45.95,
   "longitude": -70.93
 },
 {
   "name": "Saint Andrews",
   "latitude": 45.074,
   "longitude": -67.0521
 },
 {
   "name": "Burns Lake",
   "latitude": 54.2292,
   "longitude": -125.7625
 },
 {
   "name": "Povungnituk",
   "latitude": 60.0477,
   "longitude": -77.2751
 },
 {
   "name": "Manners Sutton",
   "latitude": 45.6417,
   "longitude": -67.0609
 },
 {
   "name": "Gore",
   "latitude": 45.77,
   "longitude": -74.25
 },
 {
   "name": "Deseronto",
   "latitude": 44.2,
   "longitude": -77.05
 },
 {
   "name": "Lamont",
   "latitude": 53.7603,
   "longitude": -112.7778
 },
 {
   "name": "Chambord",
   "latitude": 48.4333,
   "longitude": -72.0667
 },
 {
   "name": "Dudswell",
   "latitude": 45.5833,
   "longitude": -71.5833
 },
 {
   "name": "Wynyard",
   "latitude": 51.7667,
   "longitude": -104.1833
 },
 {
   "name": "Cambridge Bay",
   "latitude": 69.1528,
   "longitude": -105.1707
 },
 {
   "name": "Saint-Narcisse",
   "latitude": 46.5667,
   "longitude": -72.4667
 },
 {
   "name": "Frontenac Islands",
   "latitude": 44.2,
   "longitude": -76.3833
 },
 {
   "name": "Waswanipi",
   "latitude": 49.7883,
   "longitude": -75.9544
 },
 {
   "name": "Inukjuak",
   "latitude": 58.4824,
   "longitude": -78.1309
 },
 {
   "name": "Piney",
   "latitude": 49.2069,
   "longitude": -95.8333
 },
 {
   "name": "Komoka",
   "latitude": 42.958,
   "longitude": -81.4001
 },
 {
   "name": "Saint-Zacharie",
   "latitude": 46.1333,
   "longitude": -70.3667
 },
 {
   "name": "Hemmingford",
   "latitude": 45.0833,
   "longitude": -73.5833
 },
 {
   "name": "Shelburne",
   "latitude": 43.7633,
   "longitude": -65.3236
 },
 {
   "name": "Saint-Clet",
   "latitude": 45.35,
   "longitude": -74.22
 },
 {
   "name": "Carberry",
   "latitude": 49.8689,
   "longitude": -99.3594
 },
 {
   "name": "Brighton",
   "latitude": 46.3316,
   "longitude": -67.3585
 },
 {
   "name": "Saint-Antoine",
   "latitude": 46.3629,
   "longitude": -64.753
 },
 {
   "name": "Warfield",
   "latitude": 49.0953,
   "longitude": -117.7344
 },
 {
   "name": "Northampton",
   "latitude": 46.1313,
   "longitude": -67.4713
 },
 {
   "name": "Saint-Ours",
   "latitude": 45.8833,
   "longitude": -73.15
 },
 {
   "name": "Stephenville Crossing",
   "latitude": 48.5167,
   "longitude": -58.4167
 },
 {
   "name": "Sainte-Anne-de-la-Pocatiere",
   "latitude": 47.35,
   "longitude": -70
 },
 {
   "name": "Ucluelet",
   "latitude": 48.9358,
   "longitude": -125.5433
 },
 {
   "name": "Saint-Placide",
   "latitude": 45.5333,
   "longitude": -74.2
 },
 {
   "name": "Barriere",
   "latitude": 51.1803,
   "longitude": -120.1261
 },
 {
   "name": "Fisher",
   "latitude": 51.0825,
   "longitude": -97.6611
 },
 {
   "name": "Nipissing",
   "latitude": 46.05,
   "longitude": -79.55
 },
 {
   "name": "Sainte-Clotilde",
   "latitude": 45.15,
   "longitude": -73.6833
 },
 {
   "name": "Shaunavon",
   "latitude": 49.651,
   "longitude": -108.412
 },
 {
   "name": "Wicklow",
   "latitude": 46.5017,
   "longitude": -67.7067
 },
 {
   "name": "Southesk",
   "latitude": 46.9901,
   "longitude": -66.4336
 },
 {
   "name": "Nouvelle",
   "latitude": 48.1333,
   "longitude": -66.3167
 },
 {
   "name": "Rosthern",
   "latitude": 52.65,
   "longitude": -106.3333
 },
 {
   "name": "Yamaska",
   "latitude": 46.0236,
   "longitude": -72.9391
 },
 {
   "name": "Neguac",
   "latitude": 47.2333,
   "longitude": -65.05
 },
 {
   "name": "Flat Rock",
   "latitude": 47.7086,
   "longitude": -52.7144
 },
 {
   "name": "Igloolik",
   "latitude": 69.3817,
   "longitude": -81.6811
 },
 {
   "name": "Grunthal",
   "latitude": 49.4065,
   "longitude": -96.8603
 },
 {
   "name": "Naramata",
   "latitude": 49.5886,
   "longitude": -119.5838
 },
 {
   "name": "Saint-Elie-de-Caxton",
   "latitude": 46.4833,
   "longitude": -72.9667
 },
 {
   "name": "Blumenort",
   "latitude": 49.6033,
   "longitude": -96.7006
 },
 {
   "name": "Balmoral",
   "latitude": 47.9667,
   "longitude": -66.45
 },
 {
   "name": "Price",
   "latitude": 48.6017,
   "longitude": -68.1227
 },
 {
   "name": "Rosedale",
   "latitude": 50.4397,
   "longitude": -99.5389
 },
 {
   "name": "Saint-Jacques-le-Mineur",
   "latitude": 45.2833,
   "longitude": -73.4167
 },
 {
   "name": "Huron Shores",
   "latitude": 46.2833,
   "longitude": -83.2
 },
 {
   "name": "Champlain",
   "latitude": 46.45,
   "longitude": -72.35
 },
 {
   "name": "Whitehead",
   "latitude": 49.7981,
   "longitude": -100.2575
 },
 {
   "name": "Saint-Antoine-sur-Richelieu",
   "latitude": 45.7833,
   "longitude": -73.1833
 },
 {
   "name": "Saint-Pacome",
   "latitude": 47.4,
   "longitude": -69.95
 },
 {
   "name": "Saint-Stanislas-de-Kostka",
   "latitude": 45.18,
   "longitude": -74.13
 },
 {
   "name": "Frontenac",
   "latitude": 45.58,
   "longitude": -70.83
 },
 {
   "name": "Stuartburn",
   "latitude": 49.1331,
   "longitude": -96.5158
 },
 {
   "name": "Yamaska-Est",
   "latitude": 46,
   "longitude": -72.92
 },
 {
   "name": "Sainte-Emelie-de-l'Energie",
   "latitude": 46.3167,
   "longitude": -73.65
 },
 {
   "name": "Saint-Charles-sur-Richelieu",
   "latitude": 45.6833,
   "longitude": -73.1833
 },
 {
   "name": "Saint-Joseph-de-Sorel",
   "latitude": 46.0446,
   "longitude": -73.1308
 },
 {
   "name": "Nipigon",
   "latitude": 49.0153,
   "longitude": -88.2683
 },
 {
   "name": "Riviere-Blanche",
   "latitude": 48.7833,
   "longitude": -67.7
 },
 {
   "name": "Sainte-Helene-de-Bagot",
   "latitude": 45.7333,
   "longitude": -72.7333
 },
 {
   "name": "Franklin Centre",
   "latitude": 45.0467,
   "longitude": -73.9005
 },
 {
   "name": "Harbour Breton",
   "latitude": 47.4833,
   "longitude": -55.8333
 },
 {
   "name": "Massey Drive",
   "latitude": 48.9372,
   "longitude": -57.9
 },
 {
   "name": "Mille-Isles",
   "latitude": 45.82,
   "longitude": -74.22
 },
 {
   "name": "Wilton No. 472",
   "latitude": 53.124,
   "longitude": -109.7885
 },
 {
   "name": "Lyster",
   "latitude": 46.3667,
   "longitude": -71.6167
 },
 {
   "name": "Oakview",
   "latitude": 50.1964,
   "longitude": -100.2167
 },
 {
   "name": "Balgonie",
   "latitude": 50.488,
   "longitude": -104.269
 },
 {
   "name": "Harrison Park",
   "latitude": 50.5563,
   "longitude": -100.1674
 },
 {
   "name": "Kensington",
   "latitude": 46.4333,
   "longitude": -63.65
 },
 {
   "name": "Witless Bay",
   "latitude": 47.28,
   "longitude": -52.83
 },
 {
   "name": "Pond Inlet",
   "latitude": 72.6808,
   "longitude": -77.7503
 },
 {
   "name": "Royston",
   "latitude": 49.6405,
   "longitude": -124.9406
 },
 {
   "name": "Sainte-Clotilde-de-Horton",
   "latitude": 45.9833,
   "longitude": -72.2333
 },
 {
   "name": "Burford",
   "latitude": 43.1036,
   "longitude": -80.424
 },
 {
   "name": "Fossambault-sur-le-Lac",
   "latitude": 46.8667,
   "longitude": -71.6167
 },
 {
   "name": "Saint-Benoit-Labre",
   "latitude": 46.0667,
   "longitude": -70.8
 },
 {
   "name": "Coombs",
   "latitude": 49.3008,
   "longitude": -124.4049
 },
 {
   "name": "Terrace Bay",
   "latitude": 48.8,
   "longitude": -87.1
 },
 {
   "name": "Chapais",
   "latitude": 49.7819,
   "longitude": -74.8544
 },
 {
   "name": "Saint-Honore-de-Shenley",
   "latitude": 45.9667,
   "longitude": -70.8333
 },
 {
   "name": "Cleveland",
   "latitude": 45.67,
   "longitude": -72.08
 },
 {
   "name": "Macdonald, Meredith and Aberdeen Additional",
   "latitude": 46.4833,
   "longitude": -84.0667
 },
 {
   "name": "Messines",
   "latitude": 46.2333,
   "longitude": -76.0167
 },
 {
   "name": "Saint-Jean-de-Dieu",
   "latitude": 48,
   "longitude": -69.05
 },
 {
   "name": "Nakusp",
   "latitude": 50.2434,
   "longitude": -117.8002
 },
 {
   "name": "Florenceville",
   "latitude": 46.4435,
   "longitude": -67.6152
 },
 {
   "name": "Saint-Antoine-de-Tilly",
   "latitude": 46.6667,
   "longitude": -71.5833
 },
 {
   "name": "Lakeview",
   "latitude": 49.9026,
   "longitude": -119.5699
 },
 {
   "name": "Humbermouth",
   "latitude": 49.0156,
   "longitude": -58.1678
 },
 {
   "name": "Fort St. James",
   "latitude": 54.4431,
   "longitude": -124.2542
 },
 {
   "name": "Saint-Francois-de-la-Riviere-du-Sud",
   "latitude": 46.8833,
   "longitude": -70.7167
 },
 {
   "name": "Saint-Jacques",
   "latitude": 47.5634,
   "longitude": -68.3693
 },
 {
   "name": "Uashat",
   "latitude": 50.233,
   "longitude": -66.3947
 },
 {
   "name": "Perth",
   "latitude": 46.7393,
   "longitude": -67.6984
 },
 {
   "name": "Eeyou Istchee Baie-James",
   "latitude": 52.3382,
   "longitude": -75.1977
 },
 {
   "name": "Shellbrook No. 493",
   "latitude": 53.3545,
   "longitude": -106.2553
 },
 {
   "name": "Shawville",
   "latitude": 45.6,
   "longitude": -76.4833
 },
 {
   "name": "Saint-Lucien",
   "latitude": 45.8667,
   "longitude": -72.2667
 },
 {
   "name": "Lambton",
   "latitude": 45.83,
   "longitude": -71.08
 },
 {
   "name": "Saint-Laurent-de-l'Ile-d'Orleans",
   "latitude": 46.8667,
   "longitude": -71.0167
 },
 {
   "name": "Saint-Flavien",
   "latitude": 46.5167,
   "longitude": -71.6
 },
 {
   "name": "Grenville",
   "latitude": 45.6333,
   "longitude": -74.6
 },
 {
   "name": "Chute-aux-Outardes",
   "latitude": 49.1167,
   "longitude": -68.4
 },
 {
   "name": "Sainte-Marcelline-de-Kildare",
   "latitude": 46.1167,
   "longitude": -73.6
 },
 {
   "name": "Saint-Felix-de-Kingsey",
   "latitude": 45.8,
   "longitude": -72.1833
 },
 {
   "name": "Upper Island Cove",
   "latitude": 47.6472,
   "longitude": -53.2233
 },
 {
   "name": "Glenelg",
   "latitude": 46.9455,
   "longitude": -65.2893
 },
 {
   "name": "Sainte-Elisabeth",
   "latitude": 46.0833,
   "longitude": -73.35
 },
 {
   "name": "Ashcroft",
   "latitude": 50.7256,
   "longitude": -121.2806
 },
 {
   "name": "Clarkes Beach",
   "latitude": 47.5447,
   "longitude": -53.2824
 },
 {
   "name": "Saint-Bernard-de-Lacolle",
   "latitude": 45.0833,
   "longitude": -73.4167
 },
 {
   "name": "Belledune",
   "latitude": 47.9,
   "longitude": -65.8167
 },
 {
   "name": "Saint-Guillaume",
   "latitude": 45.8833,
   "longitude": -72.7667
 },
 {
   "name": "Venise-en-Quebec",
   "latitude": 45.0833,
   "longitude": -73.1333
 },
 {
   "name": "Maliotenam",
   "latitude": 50.2114,
   "longitude": -66.1911
 },
 {
   "name": "Ripon",
   "latitude": 45.7833,
   "longitude": -75.1
 },
 {
   "name": "Hilliers",
   "latitude": 49.3022,
   "longitude": -124.4727
 },
 {
   "name": "Saint-Joseph",
   "latitude": 47.558,
   "longitude": -68.3082
 },
 {
   "name": "Saint-Paulin",
   "latitude": 46.4167,
   "longitude": -73.0333
 },
 {
   "name": "Bon Accord",
   "latitude": 53.8328,
   "longitude": -113.4189
 },
 {
   "name": "Saint David",
   "latitude": 45.2918,
   "longitude": -67.1983
 },
 {
   "name": "Saint-Albert",
   "latitude": 46,
   "longitude": -72.0833
 },
 {
   "name": "Matagami",
   "latitude": 49.75,
   "longitude": -77.6333
 },
 {
   "name": "Springfield",
   "latitude": 45.7005,
   "longitude": -65.8079
 },
 {
   "name": "Amherst",
   "latitude": 46.05,
   "longitude": -74.7667
 },
 {
   "name": "Notre-Dame-du-Laus",
   "latitude": 46.0833,
   "longitude": -75.6167
 },
 {
   "name": "St. George",
   "latitude": 45.1333,
   "longitude": -66.8167
 },
 {
   "name": "Wembley",
   "latitude": 55.1572,
   "longitude": -119.1392
 },
 {
   "name": "Victoria",
   "latitude": 49.6644,
   "longitude": -98.9153
 },
 {
   "name": "Springbrook",
   "latitude": 52.1796,
   "longitude": -113.885
 },
 {
   "name": "Saint-Tite-des-Caps",
   "latitude": 47.1333,
   "longitude": -70.7667
 },
 {
   "name": "Hudson Bay",
   "latitude": 52.851,
   "longitude": -102.392
 },
 {
   "name": "Pinawa",
   "latitude": 50.1707,
   "longitude": -95.9547
 },
 {
   "name": "Brudenell, Lyndoch and Raglan",
   "latitude": 45.3167,
   "longitude": -77.4
 },
 {
   "name": "Carlyle",
   "latitude": 49.6333,
   "longitude": -102.2667
 },
 {
   "name": "Keremeos",
   "latitude": 49.2025,
   "longitude": -119.8294
 },
 {
   "name": "Val-Joli",
   "latitude": 45.6,
   "longitude": -71.97
 },
 {
   "name": "Gold River",
   "latitude": 49.7769,
   "longitude": -126.0514
 },
 {
   "name": "Saint-Casimir",
   "latitude": 46.65,
   "longitude": -72.1333
 },
 {
   "name": "Bay Bulls",
   "latitude": 47.3158,
   "longitude": -52.8103
 },
 {
   "name": "Langham",
   "latitude": 52.3667,
   "longitude": -106.9667
 },
 {
   "name": "Frenchman Butte",
   "latitude": 53.6052,
   "longitude": -109.4298
 },
 {
   "name": "Gordon",
   "latitude": 46.8363,
   "longitude": -67.1913
 },
 {
   "name": "Kugluktuk",
   "latitude": 67.8055,
   "longitude": -115.3223
 },
 {
   "name": "Saint-Malachie",
   "latitude": 46.5333,
   "longitude": -70.7667
 },
 {
   "name": "Southampton",
   "latitude": 46.0789,
   "longitude": -67.3124
 },
 {
   "name": "Salluit",
   "latitude": 62.2013,
   "longitude": -75.6337
 },
 {
   "name": "Pangnirtung",
   "latitude": 66.1436,
   "longitude": -65.6829
 },
 {
   "name": "Saint-Louis-de-Gonzague",
   "latitude": 45.2,
   "longitude": -73.98
 },
 {
   "name": "Moosonee",
   "latitude": 51.2722,
   "longitude": -80.6431
 },
 {
   "name": "Englehart",
   "latitude": 47.8167,
   "longitude": -79.8667
 },
 {
   "name": "Saint-Urbain",
   "latitude": 47.55,
   "longitude": -70.5333
 },
 {
   "name": "Tring-Jonction",
   "latitude": 46.2667,
   "longitude": -70.9833
 },
 {
   "name": "Nauwigewauk",
   "latitude": 45.4812,
   "longitude": -65.8738
 },
 {
   "name": "Pointe-a-la-Croix",
   "latitude": 48.0167,
   "longitude": -66.6833
 },
 {
   "name": "Denmark",
   "latitude": 47.1155,
   "longitude": -67.4771
 },
 {
   "name": "Saint-Joachim",
   "latitude": 47.05,
   "longitude": -70.85
 },
 {
   "name": "Torch River No. 488",
   "latitude": 53.5445,
   "longitude": -104.4619
 },
 {
   "name": "Saint-Theodore-d'Acton",
   "latitude": 45.6833,
   "longitude": -72.5833
 },
 {
   "name": "Grindrod",
   "latitude": 50.63,
   "longitude": -119.1314
 },
 {
   "name": "L' Isle-Verte",
   "latitude": 48.0167,
   "longitude": -69.3333
 },
 {
   "name": "Harrison Hot Springs",
   "latitude": 49.3,
   "longitude": -121.7819
 },
 {
   "name": "Palmarolle",
   "latitude": 48.6667,
   "longitude": -79.2
 },
 {
   "name": "Henryville",
   "latitude": 45.1333,
   "longitude": -73.1833
 },
 {
   "name": "Sussex Corner",
   "latitude": 45.7122,
   "longitude": -65.4719
 },
 {
   "name": "Saint-Odilon-de-Cranbourne",
   "latitude": 46.3667,
   "longitude": -70.6833
 },
 {
   "name": "Pipestone",
   "latitude": 49.6653,
   "longitude": -101.1444
 },
 {
   "name": "Laurierville",
   "latitude": 46.3,
   "longitude": -71.65
 },
 {
   "name": "La Dore",
   "latitude": 48.72,
   "longitude": -72.65
 },
 {
   "name": "Lac-au-Saumon",
   "latitude": 48.4167,
   "longitude": -67.35
 },
 {
   "name": "Wotton",
   "latitude": 45.7333,
   "longitude": -71.8
 },
 {
   "name": "Prairie Lakes",
   "latitude": 49.4034,
   "longitude": -99.6298
 },
 {
   "name": "Elk Point",
   "latitude": 53.8967,
   "longitude": -110.8972
 },
 {
   "name": "Shellbrook",
   "latitude": 53.2167,
   "longitude": -106.4
 },
 {
   "name": "Wemindji",
   "latitude": 53.044,
   "longitude": -78.7384
 },
 {
   "name": "Cape Dorset",
   "latitude": 64.2237,
   "longitude": -76.5405
 },
 {
   "name": "Strong",
   "latitude": 45.75,
   "longitude": -79.4
 },
 {
   "name": "Lappe",
   "latitude": 48.5693,
   "longitude": -89.3573
 },
 {
   "name": "Riviere-Heva",
   "latitude": 48.2333,
   "longitude": -78.2167
 },
 {
   "name": "Fort-Coulonge",
   "latitude": 45.85,
   "longitude": -76.7333
 },
 {
   "name": "Irishtown-Summerside",
   "latitude": 48.9833,
   "longitude": -57.95
 },
 {
   "name": "Godmanchester",
   "latitude": 45.08,
   "longitude": -74.25
 },
 {
   "name": "Macklin",
   "latitude": 52.33,
   "longitude": -109.94
 },
 {
   "name": "Armour",
   "latitude": 45.6289,
   "longitude": -79.3436
 },
 {
   "name": "Saint-Simon",
   "latitude": 45.719,
   "longitude": -72.8463
 },
 {
   "name": "St. Francois Xavier",
   "latitude": 49.9903,
   "longitude": -97.6722
 },
 {
   "name": "Tingwick",
   "latitude": 45.8873,
   "longitude": -71.9244
 },
 {
   "name": "Saint-Aubert",
   "latitude": 47.1833,
   "longitude": -70.2167
 },
 {
   "name": "Saint-Mathieu-du-Parc",
   "latitude": 46.5667,
   "longitude": -72.9167
 },
 {
   "name": "Wabasca",
   "latitude": 55.9855,
   "longitude": -113.8566
 },
 {
   "name": "Ragueneau",
   "latitude": 49.0667,
   "longitude": -68.5333
 },
 {
   "name": "Notre-Dame-du-Bon-Conseil",
   "latitude": 46,
   "longitude": -72.35
 },
 {
   "name": "Wasagamack",
   "latitude": 53.9056,
   "longitude": -94.9412
 },
 {
   "name": "Saint-Ubalde",
   "latitude": 46.75,
   "longitude": -72.2667
 },
 {
   "name": "Creighton",
   "latitude": 54.7561,
   "longitude": -101.8973
 },
 {
   "name": "Fortune",
   "latitude": 47.0733,
   "longitude": -55.8217
 },
 {
   "name": "Faraday",
   "latitude": 45,
   "longitude": -77.9167
 },
 {
   "name": "Berthier-sur-Mer",
   "latitude": 46.9167,
   "longitude": -70.7333
 },
 {
   "name": "Frampton",
   "latitude": 46.4667,
   "longitude": -70.8
 },
 {
   "name": "Magnetawan",
   "latitude": 45.6667,
   "longitude": -79.6333
 },
 {
   "name": "New Carlisle",
   "latitude": 48.0167,
   "longitude": -65.3333
 },
 {
   "name": "Laird No. 404",
   "latitude": 52.5696,
   "longitude": -106.7312
 },
 {
   "name": "Petitcodiac",
   "latitude": 45.9333,
   "longitude": -65.1667
 },
 {
   "name": "Popkum",
   "latitude": 49.1911,
   "longitude": -121.7553
 },
 {
   "name": "Norton",
   "latitude": 45.6387,
   "longitude": -65.6955
 },
 {
   "name": "Canwood No. 494",
   "latitude": 53.4574,
   "longitude": -106.7768
 },
 {
   "name": "Wentworth-Nord",
   "latitude": 45.85,
   "longitude": -74.45
 },
 {
   "name": "Bas Caraquet",
   "latitude": 47.8,
   "longitude": -64.8333
 },
 {
   "name": "Sainte-Ursule",
   "latitude": 46.2833,
   "longitude": -73.0333
 },
 {
   "name": "Dawson",
   "latitude": 64.0464,
   "longitude": -139.3893
 },
 {
   "name": "Nantes",
   "latitude": 45.6333,
   "longitude": -71.0333
 },
 {
   "name": "Lac-aux-Sables",
   "latitude": 46.8667,
   "longitude": -72.4
 },
 {
   "name": "Stewiacke",
   "latitude": 45.1422,
   "longitude": -63.3483
 },
 {
   "name": "Taylor",
   "latitude": 56.159,
   "longitude": -120.6878
 },
 {
   "name": "Rosser",
   "latitude": 49.99,
   "longitude": -97.4592
 },
 {
   "name": "Estevan No. 5",
   "latitude": 49.1308,
   "longitude": -103.0126
 },
 {
   "name": "Falmouth",
   "latitude": 44.9967,
   "longitude": -64.1634
 },
 {
   "name": "Vaudreuil-sur-le-Lac",
   "latitude": 45.4,
   "longitude": -74.0333
 },
 {
   "name": "Grahamdale",
   "latitude": 51.42,
   "longitude": -98.3733
 },
 {
   "name": "Cardwell",
   "latitude": 45.7848,
   "longitude": -65.3037
 },
 {
   "name": "Two Hills",
   "latitude": 53.715,
   "longitude": -111.7461
 },
 {
   "name": "Spiritwood No. 496",
   "latitude": 53.4435,
   "longitude": -107.4495
 },
 {
   "name": "Legal",
   "latitude": 53.9492,
   "longitude": -113.595
 },
 {
   "name": "Amulet",
   "latitude": 48.2938,
   "longitude": -79.0274
 },
 {
   "name": "Herouxville",
   "latitude": 46.6667,
   "longitude": -72.6167
 },
 {
   "name": "Pointe-des-Cascades",
   "latitude": 45.3333,
   "longitude": -73.9667
 },
 {
   "name": "Weldford",
   "latitude": 46.5221,
   "longitude": -65.1114
 },
 {
   "name": "Reynolds",
   "latitude": 49.7678,
   "longitude": -95.8842
 },
 {
   "name": "St. Laurent",
   "latitude": 50.43,
   "longitude": -97.7933
 },
 {
   "name": "Lions Bay",
   "latitude": 49.4581,
   "longitude": -123.2369
 },
 {
   "name": "L'Isle-aux-Allumettes",
   "latitude": 45.8667,
   "longitude": -77.0667
 },
 {
   "name": "Emo",
   "latitude": 48.6333,
   "longitude": -93.8333
 },
 {
   "name": "Sainte-Brigide-d'Iberville",
   "latitude": 45.3167,
   "longitude": -73.0667
 },
 {
   "name": "Les Eboulements",
   "latitude": 47.4833,
   "longitude": -70.3167
 },
 {
   "name": "Dunsmuir",
   "latitude": 49.3696,
   "longitude": -124.5772
 },
 {
   "name": "Pointe-aux-Outardes",
   "latitude": 49.05,
   "longitude": -68.4333
 },
 {
   "name": "Smooth Rock Falls",
   "latitude": 49.2833,
   "longitude": -81.6333
 },
 {
   "name": "Oxbow",
   "latitude": 49.2333,
   "longitude": -102.1667
 },
 {
   "name": "Telkwa",
   "latitude": 54.6972,
   "longitude": -127.05
 },
 {
   "name": "Gjoa Haven",
   "latitude": 68.6448,
   "longitude": -95.8912
 },
 {
   "name": "Sainte-Barbe",
   "latitude": 45.1667,
   "longitude": -74.2
 },
 {
   "name": "Mayerthorpe",
   "latitude": 53.9503,
   "longitude": -115.1336
 },
 {
   "name": "Saint-Louis-du-Ha! Ha!",
   "latitude": 47.67,
   "longitude": -68.98
 },
 {
   "name": "Powerview-Pine Falls",
   "latitude": 50.5661,
   "longitude": -96.1981
 },
 {
   "name": "Baie Verte",
   "latitude": 49.9167,
   "longitude": -56.1833
 },
 {
   "name": "Saint-Edouard",
   "latitude": 45.2333,
   "longitude": -73.5167
 },
 {
   "name": "Charlo",
   "latitude": 48,
   "longitude": -66.32
 },
 {
   "name": "Hillsborough",
   "latitude": 45.9052,
   "longitude": -64.7652
 },
 {
   "name": "Bruederheim",
   "latitude": 53.8042,
   "longitude": -112.9278
 },
 {
   "name": "Burgeo",
   "latitude": 47.6,
   "longitude": -57.6333
 },
 {
   "name": "Wadena",
   "latitude": 51.9458,
   "longitude": -103.8014
 },
 {
   "name": "Richmond",
   "latitude": 46.0776,
   "longitude": -67.7248
 },
 {
   "name": "Swan Hills",
   "latitude": 54.7106,
   "longitude": -115.4133
 },
 {
   "name": "Wilkie",
   "latitude": 52.4167,
   "longitude": -108.7
 },
 {
   "name": "Saint-Leonard",
   "latitude": 47.1625,
   "longitude": -67.925
 },
 {
   "name": "Riviere-Bleue",
   "latitude": 47.4333,
   "longitude": -69.05
 },
 {
   "name": "Noyan",
   "latitude": 45.0667,
   "longitude": -73.3
 },
 {
   "name": "Ile-a-la-Crosse",
   "latitude": 55.45,
   "longitude": -107.8833
 },
 {
   "name": "Landmark",
   "latitude": 49.6711,
   "longitude": -96.8179
 },
 {
   "name": "Saint-Hugues",
   "latitude": 45.8,
   "longitude": -72.8667
 },
 {
   "name": "Chisholm",
   "latitude": 46.1,
   "longitude": -79.2333
 },
 {
   "name": "Sainte-Anne-du-Sault",
   "latitude": 46.1733,
   "longitude": -72.1415
 },
 {
   "name": "La Conception",
   "latitude": 46.15,
   "longitude": -74.7
 },
 {
   "name": "Saint-Valere",
   "latitude": 46.0667,
   "longitude": -72.1
 },
 {
   "name": "Sorrento",
   "latitude": 50.8832,
   "longitude": -119.4782
 },
 {
   "name": "Lameque",
   "latitude": 47.7925,
   "longitude": -64.6532
 },
 {
   "name": "Thessalon",
   "latitude": 46.25,
   "longitude": -83.55
 },
 {
   "name": "L'Isle-aux-Coudres",
   "latitude": 47.4,
   "longitude": -70.3833
 },
 {
   "name": "Nobleford",
   "latitude": 49.8822,
   "longitude": -113.0531
 },
 {
   "name": "Larouche",
   "latitude": 48.45,
   "longitude": -71.5167
 },
 {
   "name": "South Qu'Appelle No. 157",
   "latitude": 50.5389,
   "longitude": -104.0141
 },
 {
   "name": "Elton",
   "latitude": 49.975,
   "longitude": -99.8658
 },
 {
   "name": "Lorrainville",
   "latitude": 47.3613,
   "longitude": -79.3382
 },
 {
   "name": "Conestogo",
   "latitude": 43.5441,
   "longitude": -80.4997
 },
 {
   "name": "Upham",
   "latitude": 45.5083,
   "longitude": -65.6618
 },
 {
   "name": "St.-Charles",
   "latitude": 46.3422,
   "longitude": -80.4497
 },
 {
   "name": "Sainte-Lucie-des-Laurentides",
   "latitude": 46.13,
   "longitude": -74.18
 },
 {
   "name": "Saint-Alexis",
   "latitude": 45.9333,
   "longitude": -73.6167
 },
 {
   "name": "Gillam",
   "latitude": 56.3472,
   "longitude": -94.7078
 },
 {
   "name": "Roxton Falls",
   "latitude": 45.5667,
   "longitude": -72.5167
 },
 {
   "name": "Montcalm",
   "latitude": 49.1775,
   "longitude": -97.3247
 },
 {
   "name": "Clarendon",
   "latitude": 45.65,
   "longitude": -76.5167
 },
 {
   "name": "Mervin No. 499",
   "latitude": 53.5455,
   "longitude": -108.8762
 },
 {
   "name": "Saint-Ludger",
   "latitude": 45.75,
   "longitude": -70.7
 },
 {
   "name": "Coldwell",
   "latitude": 50.6389,
   "longitude": -98.0417
 },
 {
   "name": "Saint-Arsene",
   "latitude": 47.9167,
   "longitude": -69.4333
 },
 {
   "name": "Racine",
   "latitude": 45.5,
   "longitude": -72.25
 },
 {
   "name": "Saint-Majorique-de-Grantham",
   "latitude": 45.9333,
   "longitude": -72.5833
 },
 {
   "name": "Saint-Zenon",
   "latitude": 46.55,
   "longitude": -73.8167
 },
 {
   "name": "Saint-Armand",
   "latitude": 45.0333,
   "longitude": -73.05
 },
 {
   "name": "Saint-Edouard-de-Lotbiniere",
   "latitude": 46.5667,
   "longitude": -71.8333
 },
 {
   "name": "Alonsa",
   "latitude": 50.9794,
   "longitude": -99.0796
 },
 {
   "name": "Listuguj",
   "latitude": 48.0609,
   "longitude": -66.7491
 },
 {
   "name": "Bowden",
   "latitude": 51.9306,
   "longitude": -114.0256
 },
 {
   "name": "St. Joseph",
   "latitude": 46.2667,
   "longitude": -84
 },
 {
   "name": "Osler",
   "latitude": 52.37,
   "longitude": -106.54
 },
 {
   "name": "Saint-Hubert-de-Riviere-du-Loup",
   "latitude": 47.8167,
   "longitude": -69.15
 },
 {
   "name": "Saint-Jude",
   "latitude": 45.7667,
   "longitude": -72.9833
 },
 {
   "name": "Dildo",
   "latitude": 47.5685,
   "longitude": -53.5471
 },
 {
   "name": "La Minerve",
   "latitude": 46.25,
   "longitude": -74.9333
 },
 {
   "name": "Lanigan",
   "latitude": 51.85,
   "longitude": -105.0333
 },
 {
   "name": "Lajord No. 128",
   "latitude": 50.1965,
   "longitude": -104.2507
 },
 {
   "name": "Moonbeam",
   "latitude": 49.35,
   "longitude": -82.15
 },
 {
   "name": "Notre-Dame-des-Pins",
   "latitude": 46.1833,
   "longitude": -70.7167
 },
 {
   "name": "Saint-Alban",
   "latitude": 46.7167,
   "longitude": -72.0833
 },
 {
   "name": "Saint-Pierre-les-Becquets",
   "latitude": 46.5,
   "longitude": -72.2
 },
 {
   "name": "Arborg",
   "latitude": 50.9075,
   "longitude": -97.2182
 },
 {
   "name": "Vauxhall",
   "latitude": 50.0689,
   "longitude": -112.0975
 },
 {
   "name": "Bayfield",
   "latitude": 43.5615,
   "longitude": -81.6983
 },
 {
   "name": "Beaver River",
   "latitude": 54.3531,
   "longitude": -109.5575
 },
 {
   "name": "Irricana",
   "latitude": 51.3189,
   "longitude": -113.6106
 },
 {
   "name": "Labrecque",
   "latitude": 48.6667,
   "longitude": -71.5333
 },
 {
   "name": "New Bandon",
   "latitude": 47.6912,
   "longitude": -65.29
 },
 {
   "name": "Wemotaci",
   "latitude": 47.9219,
   "longitude": -73.7872
 },
 {
   "name": "Sainte-Henedine",
   "latitude": 46.55,
   "longitude": -70.9833
 },
 {
   "name": "L'Anse-Saint-Jean",
   "latitude": 48.2333,
   "longitude": -70.2
 },
 {
   "name": "Bassano",
   "latitude": 50.7833,
   "longitude": -112.4667
 },
 {
   "name": "Parrsboro",
   "latitude": 45.3998,
   "longitude": -64.3312
 },
 {
   "name": "Kaleden",
   "latitude": 49.3926,
   "longitude": -119.5955
 },
 {
   "name": "St. George's",
   "latitude": 48.4275,
   "longitude": -58.4778
 },
 {
   "name": "Fort Simpson",
   "latitude": 61.8082,
   "longitude": -121.3199
 },
 {
   "name": "Akwesasne",
   "latitude": 45.0155,
   "longitude": -74.5769
 },
 {
   "name": "L'Avenir",
   "latitude": 45.7667,
   "longitude": -72.3
 },
 {
   "name": "Ignace",
   "latitude": 49.4167,
   "longitude": -91.6667
 },
 {
   "name": "Claremont",
   "latitude": 43.9741,
   "longitude": -79.1316
 },
 {
   "name": "Teulon",
   "latitude": 50.3858,
   "longitude": -97.2611
 },
 {
   "name": "Peel",
   "latitude": 46.4058,
   "longitude": -67.5278
 },
 {
   "name": "Musquash",
   "latitude": 45.1836,
   "longitude": -66.3514
 },
 {
   "name": "Notre-Dame-du-Portage",
   "latitude": 47.7667,
   "longitude": -69.6167
 },
 {
   "name": "St. Lawrence",
   "latitude": 46.9244,
   "longitude": -55.3928
 },
 {
   "name": "Oxford",
   "latitude": 45.7306,
   "longitude": -63.8733
 },
 {
   "name": "Minto-Odanah",
   "latitude": 50.2406,
   "longitude": -99.8056
 },
 {
   "name": "St. Alban's",
   "latitude": 47.8753,
   "longitude": -55.8414
 },
 {
   "name": "Saint James",
   "latitude": 45.3822,
   "longitude": -67.3427
 },
 {
   "name": "Saint-Norbert-d'Arthabaska",
   "latitude": 46.1,
   "longitude": -71.8167
 },
 {
   "name": "Manning",
   "latitude": 56.9142,
   "longitude": -117.6272
 },
 {
   "name": "Glenella-Lansdowne",
   "latitude": 50.4163,
   "longitude": -99.2097
 },
 {
   "name": "Saint-Hilarion",
   "latitude": 47.5667,
   "longitude": -70.4
 },
 {
   "name": "Saint-Simeon",
   "latitude": 48.0667,
   "longitude": -65.5667
 },
 {
   "name": "Saint-Barnabe",
   "latitude": 46.4,
   "longitude": -72.8833
 },
 {
   "name": "Sainte-Felicite",
   "latitude": 48.9,
   "longitude": -67.3333
 },
 {
   "name": "Two Borders",
   "latitude": 49.2668,
   "longitude": -101.1124
 },
 {
   "name": "Queensbury",
   "latitude": 45.9918,
   "longitude": -67.0632
 },
 {
   "name": "Bury",
   "latitude": 45.4667,
   "longitude": -71.5
 },
 {
   "name": "Lac-Bouchette",
   "latitude": 48.25,
   "longitude": -72.18
 },
 {
   "name": "Saint-Lazare-de-Bellechasse",
   "latitude": 46.65,
   "longitude": -70.8
 },
 {
   "name": "Saint-Michel-du-Squatec",
   "latitude": 47.88,
   "longitude": -68.72
 },
 {
   "name": "Saint-Joachim-de-Shefford",
   "latitude": 45.45,
   "longitude": -72.5333
 },
 {
   "name": "St-Pierre-Jolys",
   "latitude": 49.4403,
   "longitude": -96.9844
 },
 {
   "name": "Grand-Remous",
   "latitude": 46.6167,
   "longitude": -75.9
 },
 {
   "name": "Saint-Gabriel-de-Rimouski",
   "latitude": 48.4209,
   "longitude": -68.1791
 },
 {
   "name": "Armstrong",
   "latitude": 47.7083,
   "longitude": -79.825
 },
 {
   "name": "Rogersville",
   "latitude": 46.7167,
   "longitude": -65.4167
 },
 {
   "name": "Langenburg",
   "latitude": 50.8333,
   "longitude": -101.7
 },
 {
   "name": "Sainte-Marie-Salome",
   "latitude": 45.9333,
   "longitude": -73.5
 },
 {
   "name": "Moose Jaw No. 161",
   "latitude": 50.4433,
   "longitude": -105.5091
 },
 {
   "name": "Saint-Cyprien",
   "latitude": 47.9,
   "longitude": -69.0167
 },
 {
   "name": "Maidstone",
   "latitude": 53.092,
   "longitude": -109.294
 },
 {
   "name": "Tres-Saint-Sacrement",
   "latitude": 45.1833,
   "longitude": -73.85
 },
 {
   "name": "Battle River No. 438",
   "latitude": 52.7343,
   "longitude": -108.4452
 },
 {
   "name": "Miltonvale Park",
   "latitude": 46.318,
   "longitude": -63.237
 },
 {
   "name": "McAdam",
   "latitude": 45.5944,
   "longitude": -67.3258
 },
 {
   "name": "Saints-Anges",
   "latitude": 46.4167,
   "longitude": -70.8833
 },
 {
   "name": "Saint-Urbain-Premier",
   "latitude": 45.22,
   "longitude": -73.73
 },
 {
   "name": "Centreville-Wareham-Trinity",
   "latitude": 48.9879,
   "longitude": -53.9069
 },
 {
   "name": "Alberton",
   "latitude": 46.8167,
   "longitude": -64.0667
 },
 {
   "name": "Winnipeg Beach",
   "latitude": 50.5058,
   "longitude": -96.9742
 },
 {
   "name": "Sainte-Agathe-de-Lotbiniere",
   "latitude": 46.3833,
   "longitude": -71.4167
 },
 {
   "name": "Salmo",
   "latitude": 49.1942,
   "longitude": -117.2778
 },
 {
   "name": "Kipling",
   "latitude": 50.1015,
   "longitude": -102.6324
 },
 {
   "name": "Sagamok",
   "latitude": 46.1529,
   "longitude": -82.2072
 },
 {
   "name": "Trecesson",
   "latitude": 48.65,
   "longitude": -78.3167
 },
 {
   "name": "Tara",
   "latitude": 44.4793,
   "longitude": -81.1445
 },
 {
   "name": "Grande-Vallee",
   "latitude": 49.2167,
   "longitude": -65.1333
 },
 {
   "name": "Bertrand",
   "latitude": 47.7622,
   "longitude": -65.0686
 },
 {
   "name": "Newcastle",
   "latitude": 47.1725,
   "longitude": -65.5551
 },
 {
   "name": "Mont-Carmel",
   "latitude": 47.4397,
   "longitude": -69.8586
 },
 {
   "name": "Saint Martins",
   "latitude": 45.4563,
   "longitude": -65.4395
 },
 {
   "name": "Saint-Eugene",
   "latitude": 45.8,
   "longitude": -72.7
 },
 {
   "name": "Notre-Dame-des-Neiges",
   "latitude": 48.1167,
   "longitude": -69.1667
 },
 {
   "name": "Saint-Andre",
   "latitude": 47.1392,
   "longitude": -67.7444
 },
 {
   "name": "Centreville",
   "latitude": 45.13,
   "longitude": -64.5224
 },
 {
   "name": "Roland",
   "latitude": 49.3547,
   "longitude": -97.8997
 },
 {
   "name": "Saint-Leon-de-Standon",
   "latitude": 46.4833,
   "longitude": -70.6167
 },
 {
   "name": "Saint-Modeste",
   "latitude": 47.8333,
   "longitude": -69.4
 },
 {
   "name": "Carnduff",
   "latitude": 49.167,
   "longitude": -101.783
 },
 {
   "name": "Carling",
   "latitude": 45.4333,
   "longitude": -80.2167
 },
 {
   "name": "Eckville",
   "latitude": 52.3622,
   "longitude": -114.3614
 },
 {
   "name": "Nain",
   "latitude": 56.5422,
   "longitude": -61.6928
 },
 {
   "name": "Hillsburgh",
   "latitude": 43.7914,
   "longitude": -80.1354
 },
 {
   "name": "Foam Lake",
   "latitude": 51.65,
   "longitude": -103.5333
 },
 {
   "name": "Sainte-Sabine",
   "latitude": 45.2333,
   "longitude": -73.0167
 },
 {
   "name": "Saint-Maxime-du-Mont-Louis",
   "latitude": 49.2333,
   "longitude": -65.7333
 },
 {
   "name": "Blanc-Sablon",
   "latitude": 51.4167,
   "longitude": -57.1333
 },
 {
   "name": "Cobalt",
   "latitude": 47.4,
   "longitude": -79.6833
 },
 {
   "name": "Gravelbourg",
   "latitude": 49.874,
   "longitude": -106.555
 },
 {
   "name": "South River",
   "latitude": 45.8417,
   "longitude": -79.375
 },
 {
   "name": "Hudson Bay No. 394",
   "latitude": 53.0295,
   "longitude": -102.3122
 },
 {
   "name": "McKellar",
   "latitude": 45.4833,
   "longitude": -79.85
 },
 {
   "name": "Frelighsburg",
   "latitude": 45.0461,
   "longitude": -72.8106
 },
 {
   "name": "Buffalo Narrows",
   "latitude": 55.8769,
   "longitude": -108.5244
 },
 {
   "name": "Ayer's Cliff",
   "latitude": 45.1667,
   "longitude": -72.05
 },
 {
   "name": "Les Mechins",
   "latitude": 49,
   "longitude": -66.9833
 },
 {
   "name": "Sainte-Marguerite",
   "latitude": 46.5167,
   "longitude": -70.9333
 },
 {
   "name": "Saint-Claude",
   "latitude": 45.6667,
   "longitude": -71.9833
 },
 {
   "name": "Air Ronge",
   "latitude": 55.0872,
   "longitude": -105.3318
 },
 {
   "name": "Chipman",
   "latitude": 46.171,
   "longitude": -65.884
 },
 {
   "name": "Girardville",
   "latitude": 49,
   "longitude": -72.55
 },
 {
   "name": "Saint-Bruno-de-Guigues",
   "latitude": 47.4667,
   "longitude": -79.4333
 },
 {
   "name": "Grenfell",
   "latitude": 50.4167,
   "longitude": -102.9167
 },
 {
   "name": "Dorchester",
   "latitude": 45.9016,
   "longitude": -64.5161
 },
 {
   "name": "South Algonquin",
   "latitude": 45.4967,
   "longitude": -78.0239
 },
 {
   "name": "Windermere",
   "latitude": 50.4856,
   "longitude": -115.9948
 },
 {
   "name": "Saint-Narcisse-de-Beaurivage",
   "latitude": 46.4833,
   "longitude": -71.2333
 },
 {
   "name": "Saint-Rene-de-Matane",
   "latitude": 48.7,
   "longitude": -67.3833
 },
 {
   "name": "Sainte-Jeanne-d'Arc",
   "latitude": 48.8575,
   "longitude": -72.0939
 },
 {
   "name": "Plaisance",
   "latitude": 45.6167,
   "longitude": -75.1167
 },
 {
   "name": "Roxton-Sud",
   "latitude": 45.5521,
   "longitude": -72.5265
 },
 {
   "name": "St. Louis No. 431",
   "latitude": 52.8277,
   "longitude": -105.7873
 },
 {
   "name": "Youbou",
   "latitude": 48.8562,
   "longitude": -124.1731
 },
 {
   "name": "Duchess",
   "latitude": 50.7333,
   "longitude": -111.9
 },
 {
   "name": "Saint-Frederic",
   "latitude": 46.3,
   "longitude": -70.9667
 },
 {
   "name": "Viking",
   "latitude": 53.0953,
   "longitude": -111.7769
 },
 {
   "name": "Sioux Narrows-Nestor Falls",
   "latitude": 49.4,
   "longitude": -94.08
 },
 {
   "name": "Whitecourt",
   "latitude": 54.1417,
   "longitude": -115.6833
 },
 {
   "name": "Repulse Bay",
   "latitude": 66.5628,
   "longitude": -86.3186
 },
 {
   "name": "Montreal-Est",
   "latitude": 45.63,
   "longitude": -73.52
 },
 {
   "name": "King",
   "latitude": 44.0463,
   "longitude": -79.6044
 },
 {
   "name": "Regina Beach",
   "latitude": 50.79,
   "longitude": -104.99
 },
 {
   "name": "Saint-Patrice-de-Beaurivage",
   "latitude": 46.4167,
   "longitude": -71.2333
 },
 {
   "name": "Ootischenia",
   "latitude": 49.2916,
   "longitude": -117.6323
 },
 {
   "name": "Hensall",
   "latitude": 43.4345,
   "longitude": -81.504
 },
 {
   "name": "Bentley",
   "latitude": 52.4667,
   "longitude": -114.05
 },
 {
   "name": "Durham",
   "latitude": 47.7631,
   "longitude": -66.0849
 },
 {
   "name": "Sainte-Marthe",
   "latitude": 45.4,
   "longitude": -74.3
 },
 {
   "name": "Notre-Dame-du-Nord",
   "latitude": 47.6,
   "longitude": -79.4833
 },
 {
   "name": "Pinehouse",
   "latitude": 55.5136,
   "longitude": -106.5986
 },
 {
   "name": "Saint-Aime-des-Lacs",
   "latitude": 47.6833,
   "longitude": -70.3
 },
 {
   "name": "Lac-Drolet",
   "latitude": 45.72,
   "longitude": -70.85
 },
 {
   "name": "Preeceville",
   "latitude": 51.958,
   "longitude": -102.6673
 },
 {
   "name": "Maple Creek No. 111",
   "latitude": 49.8044,
   "longitude": -109.6508
 },
 {
   "name": "Harbour Main-Chapel's Cove-Lakeview",
   "latitude": 47.4337,
   "longitude": -53.1458
 },
 {
   "name": "Saint-Wenceslas",
   "latitude": 46.1667,
   "longitude": -72.3333
 },
 {
   "name": "Weyburn No. 67",
   "latitude": 49.6535,
   "longitude": -103.8348
 },
 {
   "name": "Birch Hills",
   "latitude": 52.9833,
   "longitude": -105.4333
 },
 {
   "name": "Wedgeport",
   "latitude": 43.7323,
   "longitude": -65.9797
 },
 {
   "name": "Kerrobert",
   "latitude": 51.92,
   "longitude": -109.1272
 },
 {
   "name": "Havelock",
   "latitude": 45.9523,
   "longitude": -65.3885
 },
 {
   "name": "Eston",
   "latitude": 51.15,
   "longitude": -108.75
 },
 {
   "name": "Sainte-Genevieve-de-Batiscan",
   "latitude": 46.5333,
   "longitude": -72.3333
 },
 {
   "name": "Saint-Justin",
   "latitude": 46.25,
   "longitude": -73.0833
 },
 {
   "name": "Saint-Norbert",
   "latitude": 46.1667,
   "longitude": -73.3167
 },
 {
   "name": "Schreiber",
   "latitude": 48.8167,
   "longitude": -87.2667
 },
 {
   "name": "Trochu",
   "latitude": 51.8236,
   "longitude": -113.2328
 },
 {
   "name": "Botsford",
   "latitude": 46.1145,
   "longitude": -63.9804
 },
 {
   "name": "Riviere-Ouelle",
   "latitude": 47.4333,
   "longitude": -70.0167
 },
 {
   "name": "Greenwich",
   "latitude": 45.5112,
   "longitude": -66.1229
 },
 {
   "name": "Stukely-Sud",
   "latitude": 45.3167,
   "longitude": -72.4167
 },
 {
   "name": "Saint-Georges-de-Clarenceville",
   "latitude": 45.0667,
   "longitude": -73.25
 },
 {
   "name": "Sainte-Therese-de-Gaspe",
   "latitude": 48.4167,
   "longitude": -64.4167
 },
 {
   "name": "Beachburg",
   "latitude": 45.7303,
   "longitude": -76.8559
 },
 {
   "name": "Desbiens",
   "latitude": 48.4167,
   "longitude": -71.95
 },
 {
   "name": "Clyde River",
   "latitude": 70.4632,
   "longitude": -68.4822
 },
 {
   "name": "La Macaza",
   "latitude": 46.3667,
   "longitude": -74.7667
 },
 {
   "name": "Souris",
   "latitude": 46.3554,
   "longitude": -62.2542
 },
 {
   "name": "Kindersley No. 290",
   "latitude": 51.4894,
   "longitude": -109.0979
 },
 {
   "name": "Laird",
   "latitude": 46.3833,
   "longitude": -84.0667
 },
 {
   "name": "Falher",
   "latitude": 55.7372,
   "longitude": -117.2014
 },
 {
   "name": "Saint-Vallier",
   "latitude": 46.8833,
   "longitude": -70.8167
 },
 {
   "name": "Coleraine",
   "latitude": 45.9649,
   "longitude": -71.3734
 },
 {
   "name": "Melita",
   "latitude": 49.2681,
   "longitude": -100.9958
 },
 {
   "name": "Noonan",
   "latitude": 45.9544,
   "longitude": -66.4868
 },
 {
   "name": "Sainte-Petronille",
   "latitude": 46.85,
   "longitude": -71.1333
 },
 {
   "name": "Delisle",
   "latitude": 51.9254,
   "longitude": -107.1333
 },
 {
   "name": "Bristol",
   "latitude": 45.5333,
   "longitude": -76.4667
 },
 {
   "name": "Mahone Bay",
   "latitude": 44.4489,
   "longitude": -64.3819
 },
 {
   "name": "Waldheim",
   "latitude": 52.65,
   "longitude": -106.6167
 },
 {
   "name": "Saint-Sylvestre",
   "latitude": 46.3667,
   "longitude": -71.2333
 },
 {
   "name": "Taloyoak",
   "latitude": 69.5554,
   "longitude": -93.4972
 },
 {
   "name": "Onoway",
   "latitude": 53.7011,
   "longitude": -114.1981
 },
 {
   "name": "Saint-Stanislas",
   "latitude": 46.6167,
   "longitude": -72.4
 },
 {
   "name": "Malpeque",
   "latitude": 46.5,
   "longitude": -63.6667
 },
 {
   "name": "Plantagenet",
   "latitude": 45.5321,
   "longitude": -74.9956
 },
 {
   "name": "Longue-Rive",
   "latitude": 48.55,
   "longitude": -69.25
 },
 {
   "name": "Argyle",
   "latitude": 49.3697,
   "longitude": -99.1506
 },
 {
   "name": "Davidson",
   "latitude": 51.2667,
   "longitude": -105.9667
 },
 {
   "name": "Plaster Rock",
   "latitude": 46.8833,
   "longitude": -67.3833
 },
 {
   "name": "Wilmot",
   "latitude": 46.3463,
   "longitude": -67.7099
 },
 {
   "name": "Valemount",
   "latitude": 52.8284,
   "longitude": -119.2659
 },
 {
   "name": "Saint-Leonard-de-Portneuf",
   "latitude": 46.8833,
   "longitude": -71.9167
 },
 {
   "name": "Alberta Beach",
   "latitude": 53.6767,
   "longitude": -114.35
 },
 {
   "name": "Saint-Narcisse-de-Rimouski",
   "latitude": 48.28,
   "longitude": -68.43
 },
 {
   "name": "Saint-Bonaventure",
   "latitude": 45.9667,
   "longitude": -72.6833
 },
 {
   "name": "Longlaketon No. 219",
   "latitude": 50.9386,
   "longitude": -104.6913
 },
 {
   "name": "Papineau-Cameron",
   "latitude": 46.3,
   "longitude": -78.7333
 },
 {
   "name": "Assiginack",
   "latitude": 45.7333,
   "longitude": -81.8
 },
 {
   "name": "Brebeuf",
   "latitude": 46.0667,
   "longitude": -74.6667
 },
 {
   "name": "Hudson Hope",
   "latitude": 56.0316,
   "longitude": -121.9057
 },
 {
   "name": "Prince",
   "latitude": 46.5333,
   "longitude": -84.5
 },
 {
   "name": "Baie-du-Febvre",
   "latitude": 46.13,
   "longitude": -72.72
 },
 {
   "name": "Durham-Sud",
   "latitude": 45.6667,
   "longitude": -72.3333
 },
 {
   "name": "Melbourne",
   "latitude": 45.58,
   "longitude": -72.17
 },
 {
   "name": "Nipawin No. 487",
   "latitude": 53.2881,
   "longitude": -104.0544
 },
 {
   "name": "Duck Lake No. 463",
   "latitude": 52.9596,
   "longitude": -106.2089
 },
 {
   "name": "Oyen",
   "latitude": 51.3522,
   "longitude": -110.4739
 }
];

export default markers;
