const nbaTeams = [
    {
      name: "Atlanta Hawks",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/24/Atlanta_Hawks_logo.svg",
      lat: 33.7573,
      lng: -84.3963 // State Farm Arena
    },
    {
      name: "Boston Celtics",
      logo: "https://upload.wikimedia.org/wikipedia/en/8/8f/Boston_Celtics.svg",
      lat: 42.3662,
      lng: -71.0621, // TD Garden
      championships: 18,
      mvps: [
        { player: "Bob Cousy", seasons: ["1956–57"] },
        { player: "Bill Russell", seasons: ["1957–58", "1960–61", "1961–62", "1962–63", "1964–65"] },
        { player: "Dave Cowens", seasons: ["1972–73"] },
        { player: "Larry Bird", seasons: ["1983–84", "1984–85", "1985–86"] }
      ]
    },
    {
      name: "Brooklyn Nets",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Brooklyn_Nets_newlogo.svg",
      lat: 40.6826,
      lng: -73.9754 // Barclays Center
    },
    {
      name: "Charlotte Hornets",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/c4/Charlotte_Hornets_%282014%29.svg",
      lat: 35.2251,
      lng: -80.8392 // Spectrum Center
    },
    {
      name: "Chicago Bulls",
      logo: "https://upload.wikimedia.org/wikipedia/en/6/67/Chicago_Bulls_logo.svg",
      lat: 41.8807,
      lng: -87.6742 // United Center
    },
    {
      name: "Cleveland Cavaliers",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Cleveland_Cavaliers_logo.svg",
      lat: 41.4966,
      lng: -81.6882 // Rocket Mortgage FieldHouse
    },
    {
      name: "Dallas Mavericks",
      logo: "https://upload.wikimedia.org/wikipedia/en/9/97/Dallas_Mavericks_logo.svg",
      lat: 32.7905,
      lng: -96.8104 // American Airlines Center
    },
    {
      name: "Denver Nuggets",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/76/Denver_Nuggets.svg",
      lat: 39.7487,
      lng: -105.0077 // Ball Arena
    },
    {
      name: "Detroit Pistons",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Logo_of_the_Detroit_Pistons.svg",
      lat: 42.3410,
      lng: -83.0551 // Little Caesars Arena
    },
    {
      name: "Golden State Warriors",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg",
      lat: 37.7680,
      lng: -122.3877 // Chase Center
    },
    {
      name: "Houston Rockets",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/28/Houston_Rockets.svg",
      lat: 29.7508,
      lng: -95.3621 // Toyota Center
    },
    {
      name: "Indiana Pacers",
      logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Indiana_Pacers.svg",
      lat: 39.7639,
      lng: -86.1555 // Gainbridge Fieldhouse
    },
    {
      name: "Los Angeles Clippers",
      logo: "https://upload.wikimedia.org/wikipedia/en/e/ed/Los_Angeles_Clippers_%282024%29.svg",
      lat: 33.9451,
      lng: -118.3431 // Intuit Dome
    },
    {
      name: "Los Angeles Lakers",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg",
      lat: 34.0430,
      lng: -118.2673 // Crypto.com Arena
    },
    {
      name: "Memphis Grizzlies",
      logo: "https://upload.wikimedia.org/wikipedia/en/f/f1/Memphis_Grizzlies.svg",
      lat: 35.1382,
      lng: -90.0506 // FedExForum
    },
    {
      name: "Miami Heat",
      logo: "https://upload.wikimedia.org/wikipedia/en/f/fb/Miami_Heat_logo.svg",
      lat: 25.7814,
      lng: -80.1870 // Kaseya Center
    },
    {
      name: "Milwaukee Bucks",
      logo: "https://upload.wikimedia.org/wikipedia/en/4/4a/Milwaukee_Bucks_logo.svg",
      lat: 43.0451,
      lng: -87.9172 // Fiserv Forum
    },
    {
      name: "Minnesota Timberwolves",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/c2/Minnesota_Timberwolves_logo.svg",
      lat: 44.9795,
      lng: -93.2760 // Target Center
    },
    {
      name: "New Orleans Pelicans",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/0d/New_Orleans_Pelicans_logo.svg",
      lat: 29.9490,
      lng: -90.0821 // Smoothie King Center
    },
    {
      name: "New York Knicks",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/25/New_York_Knicks_logo.svg",
      lat: 40.7505,
      lng: -73.9934 // Madison Square Garden
    },
    {
      name: "Oklahoma City Thunder",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/5d/Oklahoma_City_Thunder.svg",
      lat: 35.4634,
      lng: -97.5151 // Paycom Center
    },
    {
      name: "Orlando Magic",
      logo: "https://upload.wikimedia.org/wikipedia/en/1/10/Orlando_Magic_logo.svg",
      lat: 28.5392,
      lng: -81.3839 // Amway Center
    },
    {
      name: "Philadelphia 76ers",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/0e/Philadelphia_76ers_logo.svg",
      lat: 39.9012,
      lng: -75.1720 // Wells Fargo Center
    },
    {
      name: "Phoenix Suns",
      logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Phoenix_Suns_logo.svg",
      lat: 33.4457,
      lng: -112.0712 // Footprint Center
    },
    {
      name: "Portland Trail Blazers",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/21/Portland_Trail_Blazers_logo.svg",
      lat: 45.5316,
      lng: -122.6668 // Moda Center
    },
    {
      name: "Sacramento Kings",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/c7/SacramentoKings.svg",
      lat: 38.5802,
      lng: -121.4997 // Golden 1 Center
    },
    {
      name: "San Antonio Spurs",
      logo: "https://upload.wikimedia.org/wikipedia/en/a/a2/San_Antonio_Spurs.svg",
      lat: 29.4270,
      lng: -98.4375 // Frost Bank Center
    },
    {
      name: "Toronto Raptors",
      logo: "https://upload.wikimedia.org/wikipedia/en/3/36/Toronto_Raptors_logo.svg",
      lat: 43.6435,
      lng: -79.3791 // Scotiabank Arena
    },
    {
      name: "Utah Jazz",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/52/Utah_Jazz_logo_2022.svg",
      lat: 40.7683,
      lng: -111.9011 // Delta Center
    },
    {
      name: "Washington Wizards",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/02/Washington_Wizards_logo.svg",
      lat: 38.8981,
      lng: -77.0209 // Capital One Arena
    }
  ];
  