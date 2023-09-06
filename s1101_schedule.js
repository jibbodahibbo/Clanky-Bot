// http://www.convertcsv.com/csv-to-json.htm

const s1101teams = {
  "Super-Duper Wombats": "<@&603589502891458574>",
  "Florida Marlins": "<@&496815324553936898>",
  "Red White Sox": "<@&703669468768895206>",
  "White Red Sox": "<@&670773176984403982>",
  "Anaheim Pirates": "<@&603286831823585280>",
  "Kansas City Royals": "<@&847665786708688936>",
  "Philadelphia Athletics": "<@&703992227160129667>",
  "Colorado Rockies": "<@&496817127668580362>",
  "Oakland Expos": "<@&496713526778265624>",
  "Junior Orioles": "<@&496817420753960961>",
  "Little Bombers": "<@&484763804236906497>",
  "St. Louis Cardinals": "<@&603768487676215316>",
  "Blue Brewers": "<@&448576748767150091>",
  "Mighty Melonheads": "<@&604520363673518119>",
  "Humongous Astros": "<@&493888943754838036>",
  "Super-Duper Devil Rays": "<@&496788937705259009>",
  "Humongous Giants": "<@&702678421423128637>",
  "Crazy Hornets": "<@&1067672079060713512>",
  "Blue Monsters": "<@&1067545232243183737>",
  "Atlanta Braves": "<@&603768704295108628>",
  "Blue Angels": "<@&702678271749390457>",
  "Green Reds": "<@&995878927753019412>",
  "St. Louis Blue Jays": "<@&1071144968435028049>",
  "San Diego Fishes": "<@&603591280471048213>"
};

//"game": "1",
//"away_team": "As",
//"away_code": "NF",
//"home_team": "Red Sox",
//"home_code": "XD"

const s1101schedule =[
  {
    "game": 1,
    "away_team": "Braves",
    "away_code": "N8",
    "home_team": "Pirates",
    "home_code": "QM"
  },
  {
    "game": 1,
    "away_team": "Astros",
    "away_code": "55",
    "home_team": "Monsters",
    "home_code": "CH"
  },
  {
    "game": 1,
    "away_team": "Wombats",
    "away_code": "WZ",
    "home_team": "Blue Jays",
    "home_code": "GS"
  },
  {
    "game": 1,
    "away_team": "Rockies",
    "away_code": "TO",
    "home_team": "Bombers",
    "home_code": "SB"
  },
  {
    "game": 1,
    "away_team": "Cardinals",
    "away_code": "SW",
    "home_team": "Devil Rays",
    "home_code": "AP"
  },
  {
    "game": 1,
    "away_team": "Marlins",
    "away_code": "LO",
    "home_team": "Fishes",
    "home_code": "M@"
  },
  {
    "game": 1,
    "away_team": "Royals",
    "away_code": "PS",
    "home_team": "Angels",
    "home_code": "BO"
  },
  {
    "game": 1,
    "away_team": "Red Sox",
    "away_code": "VS",
    "home_team": "Giants",
    "home_code": "HZ"
  },
  {
    "game": 1,
    "away_team": "Reds",
    "away_code": "PZ",
    "home_team": "Hornets",
    "home_code": "HC"
  },
  {
    "game": 1,
    "away_team": "Expos",
    "away_code": "LW",
    "home_team": "Athletics",
    "home_code": "MA"
  },
  {
    "game": 1,
    "away_team": "White Sox",
    "away_code": "WG",
    "home_team": "Orioles",
    "home_code": "MV"
  },
  {
    "game": 1,
    "away_team": "Brewers",
    "away_code": "C8",
    "home_team": "Melonheads",
    "home_code": "TW"
  },
  {
    "game": 2,
    "away_team": "Devil Rays",
    "away_code": "AP",
    "home_team": "Rockies",
    "home_code": "TO"
  },
  {
    "game": 2,
    "away_team": "Blue Jays",
    "away_code": "GS",
    "home_team": "Astros",
    "home_code": "55"
  },
  {
    "game": 2,
    "away_team": "Fishes",
    "away_code": "M@",
    "home_team": "Cardinals",
    "home_code": "SW"
  },
  {
    "game": 2,
    "away_team": "Pirates",
    "away_code": "QM",
    "home_team": "Wombats",
    "home_code": "WZ"
  },
  {
    "game": 2,
    "away_team": "Bombers",
    "away_code": "SB",
    "home_team": "Marlins",
    "home_code": "LO"
  },
  {
    "game": 2,
    "away_team": "Monsters",
    "away_code": "CH",
    "home_team": "Braves",
    "home_code": "N8"
  },
  {
    "game": 2,
    "away_team": "Orioles",
    "away_code": "MV",
    "home_team": "Expos",
    "home_code": "LW"
  },
  {
    "game": 2,
    "away_team": "Hornets",
    "away_code": "HC",
    "home_team": "Red Sox",
    "home_code": "VS"
  },
  {
    "game": 2,
    "away_team": "Melonheads",
    "away_code": "TW",
    "home_team": "White Sox",
    "home_code": "WG"
  },
  {
    "game": 2,
    "away_team": "Angels",
    "away_code": "BO",
    "home_team": "Reds",
    "home_code": "PZ"
  },
  {
    "game": 2,
    "away_team": "Athletics",
    "away_code": "MA",
    "home_team": "Brewers",
    "home_code": "C8"
  },
  {
    "game": 2,
    "away_team": "Giants",
    "away_code": "HZ",
    "home_team": "Royals",
    "home_code": "PS"
  },
  {
    "game": 3,
    "away_team": "Marlins",
    "away_code": "LO",
    "home_team": "Cardinals",
    "home_code": "SW"
  },
  {
    "game": 3,
    "away_team": "Pirates",
    "away_code": "QM",
    "home_team": "Blue Jays",
    "home_code": "GS"
  },
  {
    "game": 3,
    "away_team": "Monsters",
    "away_code": "CH",
    "home_team": "Fishes",
    "home_code": "M@"
  },
  {
    "game": 3,
    "away_team": "Devil Rays",
    "away_code": "AP",
    "home_team": "Bombers",
    "home_code": "SB"
  },
  {
    "game": 3,
    "away_team": "Astros",
    "away_code": "55",
    "home_team": "Braves",
    "home_code": "N8"
  },
  {
    "game": 3,
    "away_team": "Wombats",
    "away_code": "WZ",
    "home_team": "Rockies",
    "home_code": "TO"
  },
  {
    "game": 3,
    "away_team": "Brewers",
    "away_code": "C8",
    "home_team": "White Sox",
    "home_code": "WG"
  },
  {
    "game": 3,
    "away_team": "Angels",
    "away_code": "BO",
    "home_team": "Hornets",
    "home_code": "HC"
  },
  {
    "game": 3,
    "away_team": "Giants",
    "away_code": "HZ",
    "home_team": "Melonheads",
    "home_code": "TW"
  },
  {
    "game": 3,
    "away_team": "Orioles",
    "away_code": "MV",
    "home_team": "Athletics",
    "home_code": "MA"
  },
  {
    "game": 3,
    "away_team": "Red Sox",
    "away_code": "VS",
    "home_team": "Royals",
    "home_code": "PS"
  },
  {
    "game": 3,
    "away_team": "Reds",
    "away_code": "PZ",
    "home_team": "Expos",
    "home_code": "LW"
  },
  {
    "game": 4,
    "away_team": "Wombats",
    "away_code": "WZ",
    "home_team": "Devil Rays",
    "home_code": "AP"
  },
  {
    "game": 4,
    "away_team": "Marlins",
    "away_code": "LO",
    "home_team": "Monsters",
    "home_code": "CH"
  },
  {
    "game": 4,
    "away_team": "Astros",
    "away_code": "55",
    "home_team": "Bombers",
    "home_code": "SB"
  },
  {
    "game": 4,
    "away_team": "Cardinals",
    "away_code": "SW",
    "home_team": "Pirates",
    "home_code": "QM"
  },
  {
    "game": 4,
    "away_team": "Braves",
    "away_code": "N8",
    "home_team": "Fishes",
    "home_code": "M@"
  },
  {
    "game": 4,
    "away_team": "Rockies",
    "away_code": "TO",
    "home_team": "Blue Jays",
    "home_code": "GS"
  },
  {
    "game": 4,
    "away_team": "Reds",
    "away_code": "PZ",
    "home_team": "Orioles",
    "home_code": "MV"
  },
  {
    "game": 4,
    "away_team": "Brewers",
    "away_code": "C8",
    "home_team": "Giants",
    "home_code": "HZ"
  },
  {
    "game": 4,
    "away_team": "Red Sox",
    "away_code": "VS",
    "home_team": "Athletics",
    "home_code": "MA"
  },
  {
    "game": 4,
    "away_team": "White Sox",
    "away_code": "WG",
    "home_team": "Angels",
    "home_code": "BO"
  },
  {
    "game": 4,
    "away_team": "Royals",
    "away_code": "PS",
    "home_team": "Melonheads",
    "home_code": "TW"
  },
  {
    "game": 4,
    "away_team": "Expos",
    "away_code": "LW",
    "home_team": "Hornets",
    "home_code": "HC"
  },
  {
    "game": 5,
    "away_team": "Blue Jays",
    "away_code": "GS",
    "home_team": "Braves",
    "home_code": "N8"
  },
  {
    "game": 5,
    "away_team": "Fishes",
    "away_code": "M@",
    "home_team": "Rockies",
    "home_code": "TO"
  },
  {
    "game": 5,
    "away_team": "Pirates",
    "away_code": "QM",
    "home_team": "Astros",
    "home_code": "55"
  },
  {
    "game": 5,
    "away_team": "Bombers",
    "away_code": "SB",
    "home_team": "Cardinals",
    "home_code": "SW"
  },
  {
    "game": 5,
    "away_team": "Monsters",
    "away_code": "CH",
    "home_team": "Wombats",
    "home_code": "WZ"
  },
  {
    "game": 5,
    "away_team": "Devil Rays",
    "away_code": "AP",
    "home_team": "Marlins",
    "home_code": "LO"
  },
  {
    "game": 5,
    "away_team": "Hornets",
    "away_code": "HC",
    "home_team": "Royals",
    "home_code": "PS"
  },
  {
    "game": 5,
    "away_team": "Melonheads",
    "away_code": "TW",
    "home_team": "Expos",
    "home_code": "LW"
  },
  {
    "game": 5,
    "away_team": "Angels",
    "away_code": "BO",
    "home_team": "Red Sox",
    "home_code": "VS"
  },
  {
    "game": 5,
    "away_team": "Athletics",
    "away_code": "MA",
    "home_team": "White Sox",
    "home_code": "WG"
  },
  {
    "game": 5,
    "away_team": "Giants",
    "away_code": "HZ",
    "home_team": "Reds",
    "home_code": "PZ"
  },
  {
    "game": 5,
    "away_team": "Orioles",
    "away_code": "MV",
    "home_team": "Brewers",
    "home_code": "C8"
  },
  {
    "game": 6,
    "away_team": "Braves",
    "away_code": "N8",
    "home_team": "Marlins",
    "home_code": "LO"
  },
  {
    "game": 6,
    "away_team": "Rockies",
    "away_code": "TO",
    "home_team": "Astros",
    "home_code": "55"
  },
  {
    "game": 6,
    "away_team": "Cardinals",
    "away_code": "SW",
    "home_team": "Wombats",
    "home_code": "WZ"
  },
  {
    "game": 6,
    "away_team": "Blue Jays",
    "away_code": "GS",
    "home_team": "Devil Rays",
    "home_code": "AP"
  },
  {
    "game": 6,
    "away_team": "Fishes",
    "away_code": "M@",
    "home_team": "Pirates",
    "home_code": "QM"
  },
  {
    "game": 6,
    "away_team": "Bombers",
    "away_code": "SB",
    "home_team": "Monsters",
    "home_code": "CH"
  },
  {
    "game": 6,
    "away_team": "Royals",
    "away_code": "PS",
    "home_team": "Brewers",
    "home_code": "C8"
  },
  {
    "game": 6,
    "away_team": "Expos",
    "away_code": "LW",
    "home_team": "Red Sox",
    "home_code": "VS"
  },
  {
    "game": 6,
    "away_team": "White Sox",
    "away_code": "WG",
    "home_team": "Reds",
    "home_code": "PZ"
  },
  {
    "game": 6,
    "away_team": "Hornets",
    "away_code": "HC",
    "home_team": "Orioles",
    "home_code": "MV"
  },
  {
    "game": 6,
    "away_team": "Melonheads",
    "away_code": "TW",
    "home_team": "Angels",
    "home_code": "BO"
  },
  {
    "game": 6,
    "away_team": "Athletics",
    "away_code": "MA",
    "home_team": "Giants",
    "home_code": "HZ"
  },
  {
    "game": 7,
    "away_team": "Monsters",
    "away_code": "CH",
    "home_team": "Devil Rays",
    "home_code": "AP"
  },
  {
    "game": 7,
    "away_team": "Marlins",
    "away_code": "LO",
    "home_team": "Wombats",
    "home_code": "WZ"
  },
  {
    "game": 7,
    "away_team": "Pirates",
    "away_code": "QM",
    "home_team": "Bombers",
    "home_code": "SB"
  },
  {
    "game": 7,
    "away_team": "Astros",
    "away_code": "55",
    "home_team": "Cardinals",
    "home_code": "SW"
  },
  {
    "game": 7,
    "away_team": "Fishes",
    "away_code": "M@",
    "home_team": "Blue Jays",
    "home_code": "GS"
  },
  {
    "game": 7,
    "away_team": "Braves",
    "away_code": "N8",
    "home_team": "Rockies",
    "home_code": "TO"
  },
  {
    "game": 7,
    "away_team": "Giants",
    "away_code": "HZ",
    "home_team": "Orioles",
    "home_code": "MV"
  },
  {
    "game": 7,
    "away_team": "Brewers",
    "away_code": "C8",
    "home_team": "Reds",
    "home_code": "PZ"
  },
  {
    "game": 7,
    "away_team": "Angels",
    "away_code": "BO",
    "home_team": "Athletics",
    "home_code": "MA"
  },
  {
    "game": 7,
    "away_team": "Red Sox",
    "away_code": "VS",
    "home_team": "White Sox",
    "home_code": "WG"
  },
  {
    "game": 7,
    "away_team": "Melonheads",
    "away_code": "TW",
    "home_team": "Hornets",
    "home_code": "HC"
  },
  {
    "game": 7,
    "away_team": "Royals",
    "away_code": "PS",
    "home_team": "Expos",
    "home_code": "LW"
  },
  {
    "game": 8,
    "away_team": "Rockies",
    "away_code": "TO",
    "home_team": "Pirates",
    "home_code": "QM"
  },
  {
    "game": 8,
    "away_team": "Blue Jays",
    "away_code": "GS",
    "home_team": "Marlins",
    "home_code": "LO"
  },
  {
    "game": 8,
    "away_team": "Wombats",
    "away_code": "WZ",
    "home_team": "Fishes",
    "home_code": "M@"
  },
  {
    "game": 8,
    "away_team": "Monsters",
    "away_code": "CH",
    "home_team": "Cardinals",
    "home_code": "SW"
  },
  {
    "game": 8,
    "away_team": "Bombers",
    "away_code": "SB",
    "home_team": "Braves",
    "home_code": "N8"
  },
  {
    "game": 8,
    "away_team": "Devil Rays",
    "away_code": "AP",
    "home_team": "Astros",
    "home_code": "55"
  },
  {
    "game": 8,
    "away_team": "Expos",
    "away_code": "LW",
    "home_team": "Angels",
    "home_code": "BO"
  },
  {
    "game": 8,
    "away_team": "Hornets",
    "away_code": "HC",
    "home_team": "Brewers",
    "home_code": "C8"
  },
  {
    "game": 8,
    "away_team": "Reds",
    "away_code": "PZ",
    "home_team": "Melonheads",
    "home_code": "TW"
  },
  {
    "game": 8,
    "away_team": "Giants",
    "away_code": "HZ",
    "home_team": "White Sox",
    "home_code": "WG"
  },
  {
    "game": 8,
    "away_team": "Athletics",
    "away_code": "MA",
    "home_team": "Royals",
    "home_code": "PS"
  },
  {
    "game": 8,
    "away_team": "Orioles",
    "away_code": "MV",
    "home_team": "Red Sox",
    "home_code": "VS"
  },
  {
    "game": 9,
    "away_team": "Braves",
    "away_code": "N8",
    "home_team": "Wombats",
    "home_code": "WZ"
  },
  {
    "game": 9,
    "away_team": "Cardinals",
    "away_code": "SW",
    "home_team": "Rockies",
    "home_code": "TO"
  },
  {
    "game": 9,
    "away_team": "Marlins",
    "away_code": "LO",
    "home_team": "Astros",
    "home_code": "55"
  },
  {
    "game": 9,
    "away_team": "Blue Jays",
    "away_code": "GS",
    "home_team": "Monsters",
    "home_code": "CH"
  },
  {
    "game": 9,
    "away_team": "Fishes",
    "away_code": "M@",
    "home_team": "Bombers",
    "home_code": "SB"
  },
  {
    "game": 9,
    "away_team": "Pirates",
    "away_code": "QM",
    "home_team": "Devil Rays",
    "home_code": "AP"
  },
  {
    "game": 9,
    "away_team": "Royals",
    "away_code": "PS",
    "home_team": "Reds",
    "home_code": "PZ"
  },
  {
    "game": 9,
    "away_team": "White Sox",
    "away_code": "WG",
    "home_team": "Expos",
    "home_code": "LW"
  },
  {
    "game": 9,
    "away_team": "Brewers",
    "away_code": "C8",
    "home_team": "Red Sox",
    "home_code": "VS"
  },
  {
    "game": 9,
    "away_team": "Hornets",
    "away_code": "HC",
    "home_team": "Giants",
    "home_code": "HZ"
  },
  {
    "game": 9,
    "away_team": "Melonheads",
    "away_code": "TW",
    "home_team": "Athletics",
    "home_code": "MA"
  },
  {
    "game": 9,
    "away_team": "Angels",
    "away_code": "BO",
    "home_team": "Orioles",
    "home_code": "MV"
  },
  {
    "game": 10,
    "away_team": "Cardinals",
    "away_code": "SW",
    "home_team": "Blue Jays",
    "home_code": "GS"
  },
  {
    "game": 10,
    "away_team": "Wombats",
    "away_code": "WZ",
    "home_team": "Bombers",
    "home_code": "SB"
  },
  {
    "game": 10,
    "away_team": "Marlins",
    "away_code": "LO",
    "home_team": "Pirates",
    "home_code": "QM"
  },
  {
    "game": 10,
    "away_team": "Devil Rays",
    "away_code": "AP",
    "home_team": "Braves",
    "home_code": "N8"
  },
  {
    "game": 10,
    "away_team": "Monsters",
    "away_code": "CH",
    "home_team": "Rockies",
    "home_code": "TO"
  },
  {
    "game": 10,
    "away_team": "Astros",
    "away_code": "55",
    "home_team": "Fishes",
    "home_code": "M@"
  },
  {
    "game": 10,
    "away_team": "White Sox",
    "away_code": "WG",
    "home_team": "Hornets",
    "home_code": "HC"
  },
  {
    "game": 10,
    "away_team": "Reds",
    "away_code": "PZ",
    "home_team": "Athletics",
    "home_code": "MA"
  },
  {
    "game": 10,
    "away_team": "Brewers",
    "away_code": "C8",
    "home_team": "Angels",
    "home_code": "BO"
  },
  {
    "game": 10,
    "away_team": "Orioles",
    "away_code": "MV",
    "home_team": "Royals",
    "home_code": "PS"
  },
  {
    "game": 10,
    "away_team": "Giants",
    "away_code": "HZ",
    "home_team": "Expos",
    "home_code": "LW"
  },
  {
    "game": 10,
    "away_team": "Red Sox",
    "away_code": "VS",
    "home_team": "Melonheads",
    "home_code": "TW"
  },
  {
    "game": 11,
    "away_team": "Bombers",
    "away_code": "SB",
    "home_team": "Astros",
    "home_code": "55"
  },
  {
    "game": 11,
    "away_team": "Pirates",
    "away_code": "QM",
    "home_team": "Cardinals",
    "home_code": "SW"
  },
  {
    "game": 11,
    "away_team": "Fishes",
    "away_code": "M@",
    "home_team": "Braves",
    "home_code": "N8"
  },
  {
    "game": 11,
    "away_team": "Blue Jays",
    "away_code": "GS",
    "home_team": "Rockies",
    "home_code": "TO"
  },
  {
    "game": 11,
    "away_team": "Devil Rays",
    "away_code": "AP",
    "home_team": "Wombats",
    "home_code": "WZ"
  },
  {
    "game": 11,
    "away_team": "Monsters",
    "away_code": "CH",
    "home_team": "Marlins",
    "home_code": "LO"
  },
  {
    "game": 11,
    "away_team": "Athletics",
    "away_code": "MA",
    "home_team": "Red Sox",
    "home_code": "VS"
  },
  {
    "game": 11,
    "away_team": "Angels",
    "away_code": "BO",
    "home_team": "White Sox",
    "home_code": "WG"
  },
  {
    "game": 11,
    "away_team": "Melonheads",
    "away_code": "TW",
    "home_team": "Royals",
    "home_code": "PS"
  },
  {
    "game": 11,
    "away_team": "Hornets",
    "away_code": "HC",
    "home_team": "Expos",
    "home_code": "LW"
  },
  {
    "game": 11,
    "away_team": "Orioles",
    "away_code": "MV",
    "home_team": "Reds",
    "home_code": "PZ"
  },
  {
    "game": 11,
    "away_team": "Giants",
    "away_code": "HZ",
    "home_team": "Brewers",
    "home_code": "C8"
  },
  {
    "game": 12,
    "away_team": "Braves",
    "away_code": "N8",
    "home_team": "Blue Jays",
    "home_code": "GS"
  },
  {
    "game": 12,
    "away_team": "Rockies",
    "away_code": "TO",
    "home_team": "Fishes",
    "home_code": "M@"
  },
  {
    "game": 12,
    "away_team": "Astros",
    "away_code": "55",
    "home_team": "Pirates",
    "home_code": "QM"
  },
  {
    "game": 12,
    "away_team": "Cardinals",
    "away_code": "SW",
    "home_team": "Bombers",
    "home_code": "SB"
  },
  {
    "game": 12,
    "away_team": "Wombats",
    "away_code": "WZ",
    "home_team": "Monsters",
    "home_code": "CH"
  },
  {
    "game": 12,
    "away_team": "Marlins",
    "away_code": "LO",
    "home_team": "Devil Rays",
    "home_code": "AP"
  },
  {
    "game": 12,
    "away_team": "Royals",
    "away_code": "PS",
    "home_team": "Hornets",
    "home_code": "HC"
  },
  {
    "game": 12,
    "away_team": "Expos",
    "away_code": "LW",
    "home_team": "Melonheads",
    "home_code": "TW"
  },
  {
    "game": 12,
    "away_team": "Red Sox",
    "away_code": "VS",
    "home_team": "Angels",
    "home_code": "BO"
  },
  {
    "game": 12,
    "away_team": "White Sox",
    "away_code": "WG",
    "home_team": "Athletics",
    "home_code": "MA"
  },
  {
    "game": 12,
    "away_team": "Reds",
    "away_code": "PZ",
    "home_team": "Giants",
    "home_code": "HZ"
  },
  {
    "game": 12,
    "away_team": "Brewers",
    "away_code": "C8",
    "home_team": "Orioles",
    "home_code": "MV"
  },
  {
    "game": 13,
    "away_team": "Braves",
    "away_code": "N8",
    "home_team": "Cardinals",
    "home_code": "SW"
  },
  {
    "game": 13,
    "away_team": "Rockies",
    "away_code": "TO",
    "home_team": "Marlins",
    "home_code": "LO"
  },
  {
    "game": 13,
    "away_team": "Astros",
    "away_code": "55",
    "home_team": "Wombats",
    "home_code": "WZ"
  },
  {
    "game": 13,
    "away_team": "Bombers",
    "away_code": "SB",
    "home_team": "Blue Jays",
    "home_code": "GS"
  },
  {
    "game": 13,
    "away_team": "Pirates",
    "away_code": "QM",
    "home_team": "Monsters",
    "home_code": "CH"
  },
  {
    "game": 13,
    "away_team": "Fishes",
    "away_code": "M@",
    "home_team": "Devil Rays",
    "home_code": "AP"
  },
  {
    "game": 13,
    "away_team": "Royals",
    "away_code": "PS",
    "home_team": "White Sox",
    "home_code": "WG"
  },
  {
    "game": 13,
    "away_team": "Expos",
    "away_code": "LW",
    "home_team": "Brewers",
    "home_code": "C8"
  },
  {
    "game": 13,
    "away_team": "Red Sox",
    "away_code": "VS",
    "home_team": "Reds",
    "home_code": "PZ"
  },
  {
    "game": 13,
    "away_team": "Athletics",
    "away_code": "MA",
    "home_team": "Hornets",
    "home_code": "HC"
  },
  {
    "game": 13,
    "away_team": "Angels",
    "away_code": "BO",
    "home_team": "Giants",
    "home_code": "HZ"
  },
  {
    "game": 13,
    "away_team": "Melonheads",
    "away_code": "TW",
    "home_team": "Orioles",
    "home_code": "MV"
  },
  {
    "game": 14,
    "away_team": "Rockies",
    "away_code": "TO",
    "home_team": "Braves",
    "home_code": "N8"
  },
  {
    "game": 14,
    "away_team": "Blue Jays",
    "away_code": "GS",
    "home_team": "Fishes",
    "home_code": "M@"
  },
  {
    "game": 14,
    "away_team": "Wombats",
    "away_code": "WZ",
    "home_team": "Marlins",
    "home_code": "LO"
  },
  {
    "game": 14,
    "away_team": "Devil Rays",
    "away_code": "AP",
    "home_team": "Monsters",
    "home_code": "CH"
  },
  {
    "game": 14,
    "away_team": "Cardinals",
    "away_code": "SW",
    "home_team": "Astros",
    "home_code": "55"
  },
  {
    "game": 14,
    "away_team": "Bombers",
    "away_code": "SB",
    "home_team": "Pirates",
    "home_code": "QM"
  },
  {
    "game": 14,
    "away_team": "Expos",
    "away_code": "LW",
    "home_team": "Royals",
    "home_code": "PS"
  },
  {
    "game": 14,
    "away_team": "Hornets",
    "away_code": "HC",
    "home_team": "Melonheads",
    "home_code": "TW"
  },
  {
    "game": 14,
    "away_team": "Reds",
    "away_code": "PZ",
    "home_team": "Brewers",
    "home_code": "C8"
  },
  {
    "game": 14,
    "away_team": "Orioles",
    "away_code": "MV",
    "home_team": "Giants",
    "home_code": "HZ"
  },
  {
    "game": 14,
    "away_team": "White Sox",
    "away_code": "WG",
    "home_team": "Red Sox",
    "home_code": "VS"
  },
  {
    "game": 14,
    "away_team": "Athletics",
    "away_code": "MA",
    "home_team": "Angels",
    "home_code": "BO"
  }
 ]
module.exports = { s1001teams, s1001schedule};
