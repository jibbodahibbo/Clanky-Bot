// http://www.convertcsv.com/csv-to-json.htm

const s1203teams = {
  "Astros": "<@&1067544975325265960>",
  "Dodgers": "<@&1224476744770261022>",
  "Expos": "<@&1224799651677605969>",
  "Melonheads": "<@&603589134744944670>",
  "Wombats": "<@&603589502891458574>",
  "Tigers": "<@&1224762411853287475>",
  "Indians": "<@&448576195190063110>",
  "Rockies": "<@&1224471696820670616>",
  "Pirates": "<@&603286831823585280>",
  "Red Sox": "<@&1067536861570023424>",
  "Bombers": "<@&603291831744200737>",
  "Angels": "<@&1067540852769050744>",
  "Diamondbacks": "<@&783577309000368189>",
  "White Sox": "<@&703669468768895206>",
  "Hornets": "<@&1067672079060713512>",
  "Braves": "<@&1224260726642835456>",
  "Fishes": "<@&603589333676589066>",
  "Marlins": "<@&1224278068495908874>",
  "Royals": "<@&1067544069221392414>",
  "Twins": "<@&1071145277362274434>",
  "Devil Rays": "<@&1142985787114266624>",
  "Monsters": "<@&496817066201055232>",
  "Brewers": "<@&496530637596000287>",
  "Blue Jays": "<@&603589804868763648>",
  };

//"game": "1",
//"away_team": "As",
//"away_code": "NF",
//"home_team": "Red Sox",
//"home_code": "XD"

const s1203schedule =[
  {
    "game": 1,
    "away_team": "Royals",
    "away_code": "AX",
    "home_team": "Red Sox",
    "home_code": "MD"
  },
  {
    "game": 1,
    "away_team": "Tigers",
    "away_code": "JY",
    "home_team": "Diamondbacks",
    "home_code": "TV"
  },
  {
    "game": 1,
    "away_team": "Blue Jays",
    "away_code": "MK",
    "home_team": "Indians",
    "home_code": "X5"
  },
  {
    "game": 1,
    "away_team": "Twins",
    "away_code": "TO",
    "home_team": "White Sox",
    "home_code": "MT"
  },
  {
    "game": 1,
    "away_team": "Devil Rays",
    "away_code": "MC",
    "home_team": "Braves",
    "home_code": "MM"
  },
  {
    "game": 1,
    "away_team": "Dodgers",
    "away_code": "PZ",
    "home_team": "Pirates",
    "home_code": "QM"
  },
  {
    "game": 1,
    "away_team": "Brewers",
    "away_code": "N8",
    "home_team": "Wombats",
    "home_code": "BB"
  },
  {
    "game": 1,
    "away_team": "Hornets",
    "away_code": "SB",
    "home_team": "Expos",
    "home_code": "WZ"
  },
  {
    "game": 1,
    "away_team": "Bombers",
    "away_code": "TC",
    "home_team": "Astros",
    "home_code": "PS"
  },
  {
    "game": 1,
    "away_team": "Melonheads",
    "away_code": "M@",
    "home_team": "Angels",
    "home_code": "AP"
  },
  {
    "game": 1,
    "away_team": "Marlins",
    "away_code": "ST",
    "home_team": "Fishes",
    "home_code": "CW"
  },
  {
    "game": 1,
    "away_team": "Monsters",
    "away_code": "YY",
    "home_team": "Rockies",
    "home_code": "JR"
  },
  {
    "game": 2,
    "away_team": "Indians",
    "away_code": "X5",
    "home_team": "Red Sox",
    "home_code": "MD"
  },
  {
    "game": 2,
    "away_team": "Tigers",
    "away_code": "JY",
    "home_team": "Twins",
    "home_code": "TO"
  },
  {
    "game": 2,
    "away_team": "Dodgers",
    "away_code": "PZ",
    "home_team": "Royals",
    "home_code": "AX"
  },
  {
    "game": 2,
    "away_team": "Diamondbacks",
    "away_code": "TV",
    "home_team": "Braves",
    "home_code": "MM"
  },
  {
    "game": 2,
    "away_team": "Blue Jays",
    "away_code": "MK",
    "home_team": "White Sox",
    "home_code": "MT"
  },
  {
    "game": 2,
    "away_team": "Pirates",
    "away_code": "QM",
    "home_team": "Devil Rays",
    "home_code": "MC"
  },
  {
    "game": 2,
    "away_team": "Wombats",
    "away_code": "BB",
    "home_team": "Melonheads",
    "home_code": "M@"
  },
  {
    "game": 2,
    "away_team": "Astros",
    "away_code": "PS",
    "home_team": "Brewers",
    "home_code": "N8"
  },
  {
    "game": 2,
    "away_team": "Angels",
    "away_code": "AP",
    "home_team": "Monsters",
    "home_code": "YY"
  },
  {
    "game": 2,
    "away_team": "Bombers",
    "away_code": "TC",
    "home_team": "Marlins",
    "home_code": "ST"
  },
  {
    "game": 2,
    "away_team": "Fishes",
    "away_code": "CW",
    "home_team": "Hornets",
    "home_code": "SB"
  },
  {
    "game": 2,
    "away_team": "Expos",
    "away_code": "WZ",
    "home_team": "Rockies",
    "home_code": "JR"
  },
  {
    "game": 3,
    "away_team": "Red Sox",
    "away_code": "MD",
    "home_team": "Diamondbacks",
    "home_code": "TV"
  },
  {
    "game": 3,
    "away_team": "Royals",
    "away_code": "AX",
    "home_team": "Tigers",
    "home_code": "JY"
  },
  {
    "game": 3,
    "away_team": "Pirates",
    "away_code": "QM",
    "home_team": "Indians",
    "home_code": "X5"
  },
  {
    "game": 3,
    "away_team": "Braves",
    "away_code": "MM",
    "home_team": "Blue Jays",
    "home_code": "MK"
  },
  {
    "game": 3,
    "away_team": "White Sox",
    "away_code": "MT",
    "home_team": "Dodgers",
    "home_code": "PZ"
  },
  {
    "game": 3,
    "away_team": "Twins",
    "away_code": "TO",
    "home_team": "Devil Rays",
    "home_code": "MC"
  },
  {
    "game": 3,
    "away_team": "Wombats",
    "away_code": "BB",
    "home_team": "Hornets",
    "home_code": "SB"
  },
  {
    "game": 3,
    "away_team": "Brewers",
    "away_code": "N8",
    "home_team": "Expos",
    "home_code": "WZ"
  },
  {
    "game": 3,
    "away_team": "Melonheads",
    "away_code": "M@",
    "home_team": "Bombers",
    "home_code": "TC"
  },
  {
    "game": 3,
    "away_team": "Rockies",
    "away_code": "JR",
    "home_team": "Angels",
    "home_code": "AP"
  },
  {
    "game": 3,
    "away_team": "Marlins",
    "away_code": "ST",
    "home_team": "Astros",
    "home_code": "PS"
  },
  {
    "game": 3,
    "away_team": "Monsters",
    "away_code": "YY",
    "home_team": "Fishes",
    "home_code": "CW"
  },
  {
    "game": 4,
    "away_team": "Devil Rays",
    "away_code": "MC",
    "home_team": "Red Sox",
    "home_code": "MD"
  },
  {
    "game": 4,
    "away_team": "Diamondbacks",
    "away_code": "TV",
    "home_team": "Pirates",
    "home_code": "QM"
  },
  {
    "game": 4,
    "away_team": "Twins",
    "away_code": "TO",
    "home_team": "Braves",
    "home_code": "MM"
  },
  {
    "game": 4,
    "away_team": "Dodgers",
    "away_code": "PZ",
    "home_team": "Indians",
    "home_code": "X5"
  },
  {
    "game": 4,
    "away_team": "Tigers",
    "away_code": "JY",
    "home_team": "White Sox",
    "home_code": "MT"
  },
  {
    "game": 4,
    "away_team": "Blue Jays",
    "away_code": "MK",
    "home_team": "Royals",
    "home_code": "AX"
  },
  {
    "game": 4,
    "away_team": "Angels",
    "away_code": "AP",
    "home_team": "Wombats",
    "home_code": "BB"
  },
  {
    "game": 4,
    "away_team": "Hornets",
    "away_code": "SB",
    "home_team": "Marlins",
    "home_code": "ST"
  },
  {
    "game": 4,
    "away_team": "Bombers",
    "away_code": "TC",
    "home_team": "Brewers",
    "home_code": "N8"
  },
  {
    "game": 4,
    "away_team": "Expos",
    "away_code": "WZ",
    "home_team": "Monsters",
    "home_code": "YY"
  },
  {
    "game": 4,
    "away_team": "Astros",
    "away_code": "PS",
    "home_team": "Melonheads",
    "home_code": "M@"
  },
  {
    "game": 4,
    "away_team": "Fishes",
    "away_code": "CW",
    "home_team": "Rockies",
    "home_code": "JR"
  },
  {
    "game": 5,
    "away_team": "Red Sox",
    "away_code": "MD",
    "home_team": "Dodgers",
    "home_code": "PZ"
  },
  {
    "game": 5,
    "away_team": "Braves",
    "away_code": "MM",
    "home_team": "Tigers",
    "home_code": "JY"
  },
  {
    "game": 5,
    "away_team": "Royals",
    "away_code": "AX",
    "home_team": "Indians",
    "home_code": "X5"
  },
  {
    "game": 5,
    "away_team": "Diamondbacks",
    "away_code": "TV",
    "home_team": "Twins",
    "home_code": "TO"
  },
  {
    "game": 5,
    "away_team": "White Sox",
    "away_code": "MT",
    "home_team": "Devil Rays",
    "home_code": "MC"
  },
  {
    "game": 5,
    "away_team": "Pirates",
    "away_code": "QM",
    "home_team": "Blue Jays",
    "home_code": "MK"
  },
  {
    "game": 5,
    "away_team": "Rockies",
    "away_code": "JR",
    "home_team": "Wombats",
    "home_code": "BB"
  },
  {
    "game": 5,
    "away_team": "Expos",
    "away_code": "WZ",
    "home_team": "Melonheads",
    "home_code": "M@"
  },
  {
    "game": 5,
    "away_team": "Marlins",
    "away_code": "ST",
    "home_team": "Angels",
    "home_code": "AP"
  },
  {
    "game": 5,
    "away_team": "Monsters",
    "away_code": "YY",
    "home_team": "Bombers",
    "home_code": "TC"
  },
  {
    "game": 5,
    "away_team": "Hornets",
    "away_code": "SB",
    "home_team": "Astros",
    "home_code": "PS"
  },
  {
    "game": 5,
    "away_team": "Fishes",
    "away_code": "CW",
    "home_team": "Brewers",
    "home_code": "N8"
  },
  {
    "game": 6,
    "away_team": "Diamondbacks",
    "away_code": "TV",
    "home_team": "Red Sox",
    "home_code": "MD"
  },
  {
    "game": 6,
    "away_team": "Tigers",
    "away_code": "JY",
    "home_team": "Royals",
    "home_code": "AX"
  },
  {
    "game": 6,
    "away_team": "Indians",
    "away_code": "X5",
    "home_team": "Devil Rays",
    "home_code": "MC"
  },
  {
    "game": 6,
    "away_team": "White Sox",
    "away_code": "MT",
    "home_team": "Braves",
    "home_code": "MM"
  },
  {
    "game": 6,
    "away_team": "Dodgers",
    "away_code": "PZ",
    "home_team": "Blue Jays",
    "home_code": "MK"
  },
  {
    "game": 6,
    "away_team": "Twins",
    "away_code": "TO",
    "home_team": "Pirates",
    "home_code": "QM"
  },
  {
    "game": 6,
    "away_team": "Wombats",
    "away_code": "BB",
    "home_team": "Monsters",
    "home_code": "YY"
  },
  {
    "game": 6,
    "away_team": "Angels",
    "away_code": "AP",
    "home_team": "Expos",
    "home_code": "WZ"
  },
  {
    "game": 6,
    "away_team": "Bombers",
    "away_code": "TC",
    "home_team": "Hornets",
    "home_code": "SB"
  },
  {
    "game": 6,
    "away_team": "Brewers",
    "away_code": "N8",
    "home_team": "Marlins",
    "home_code": "ST"
  },
  {
    "game": 6,
    "away_team": "Melonheads",
    "away_code": "M@",
    "home_team": "Rockies",
    "home_code": "JR"
  },
  {
    "game": 6,
    "away_team": "Astros",
    "away_code": "PS",
    "home_team": "Fishes",
    "home_code": "CW"
  },
  {
    "game": 7,
    "away_team": "Red Sox",
    "away_code": "MD",
    "home_team": "White Sox",
    "home_code": "MT"
  },
  {
    "game": 7,
    "away_team": "Devil Rays",
    "away_code": "MC",
    "home_team": "Diamondbacks",
    "home_code": "TV"
  },
  {
    "game": 7,
    "away_team": "Braves",
    "away_code": "MM",
    "home_team": "Twins",
    "home_code": "TO"
  },
  {
    "game": 7,
    "away_team": "Indians",
    "away_code": "X5",
    "home_team": "Dodgers",
    "home_code": "PZ"
  },
  {
    "game": 7,
    "away_team": "Blue Jays",
    "away_code": "MK",
    "home_team": "Tigers",
    "home_code": "JY"
  },
  {
    "game": 7,
    "away_team": "Royals",
    "away_code": "AX",
    "home_team": "Pirates",
    "home_code": "QM"
  },
  {
    "game": 7,
    "away_team": "Wombats",
    "away_code": "BB",
    "home_team": "Fishes",
    "home_code": "CW"
  },
  {
    "game": 7,
    "away_team": "Astros",
    "away_code": "PS",
    "home_team": "Expos",
    "home_code": "WZ"
  },
  {
    "game": 7,
    "away_team": "Angels",
    "away_code": "AP",
    "home_team": "Bombers",
    "home_code": "TC"
  },
  {
    "game": 7,
    "away_team": "Monsters",
    "away_code": "YY",
    "home_team": "Marlins",
    "home_code": "ST"
  },
  {
    "game": 7,
    "away_team": "Melonheads",
    "away_code": "M@",
    "home_team": "Brewers",
    "home_code": "N8"
  },
  {
    "game": 7,
    "away_team": "Rockies",
    "away_code": "JR",
    "home_team": "Hornets",
    "home_code": "SB"
  },
  {
    "game": 8,
    "away_team": "Red Sox",
    "away_code": "MD",
    "home_team": "Tigers",
    "home_code": "JY"
  },
  {
    "game": 8,
    "away_team": "Diamondbacks",
    "away_code": "TV",
    "home_team": "Royals",
    "home_code": "AX"
  },
  {
    "game": 8,
    "away_team": "White Sox",
    "away_code": "MT",
    "home_team": "Indians",
    "home_code": "X5"
  },
  {
    "game": 8,
    "away_team": "Pirates",
    "away_code": "QM",
    "home_team": "Braves",
    "home_code": "MM"
  },
  {
    "game": 8,
    "away_team": "Dodgers",
    "away_code": "PZ",
    "home_team": "Devil Rays",
    "home_code": "MC"
  },
  {
    "game": 8,
    "away_team": "Twins",
    "away_code": "TO",
    "home_team": "Blue Jays",
    "home_code": "MK"
  },
  {
    "game": 8,
    "away_team": "Expos",
    "away_code": "WZ",
    "home_team": "Wombats",
    "home_code": "BB"
  },
  {
    "game": 8,
    "away_team": "Hornets",
    "away_code": "SB",
    "home_team": "Brewers",
    "home_code": "N8"
  },
  {
    "game": 8,
    "away_team": "Fishes",
    "away_code": "CW",
    "home_team": "Bombers",
    "home_code": "TC"
  },
  {
    "game": 8,
    "away_team": "Monsters",
    "away_code": "YY",
    "home_team": "Melonheads",
    "home_code": "M@"
  },
  {
    "game": 8,
    "away_team": "Astros",
    "away_code": "PS",
    "home_team": "Angels",
    "home_code": "AP"
  },
  {
    "game": 8,
    "away_team": "Marlins",
    "away_code": "ST",
    "home_team": "Rockies",
    "home_code": "JR"
  },
  {
    "game": 9,
    "away_team": "Braves",
    "away_code": "MM",
    "home_team": "Red Sox",
    "home_code": "MD"
  },
  {
    "game": 9,
    "away_team": "Tigers",
    "away_code": "JY",
    "home_team": "Dodgers",
    "home_code": "PZ"
  },
  {
    "game": 9,
    "away_team": "Indians",
    "away_code": "X5",
    "home_team": "Diamondbacks",
    "home_code": "TV"
  },
  {
    "game": 9,
    "away_team": "Royals",
    "away_code": "AX",
    "home_team": "Twins",
    "home_code": "TO"
  },
  {
    "game": 9,
    "away_team": "Devil Rays",
    "away_code": "MC",
    "home_team": "White Sox",
    "home_code": "MT"
  },
  {
    "game": 9,
    "away_team": "Blue Jays",
    "away_code": "MK",
    "home_team": "Pirates",
    "home_code": "QM"
  },
  {
    "game": 9,
    "away_team": "Bombers",
    "away_code": "TC",
    "home_team": "Wombats",
    "home_code": "BB"
  },
  {
    "game": 9,
    "away_team": "Hornets",
    "away_code": "SB",
    "home_team": "Monsters",
    "home_code": "YY"
  },
  {
    "game": 9,
    "away_team": "Marlins",
    "away_code": "ST",
    "home_team": "Expos",
    "home_code": "WZ"
  },
  {
    "game": 9,
    "away_team": "Brewers",
    "away_code": "N8",
    "home_team": "Angels",
    "home_code": "AP"
  },
  {
    "game": 9,
    "away_team": "Fishes",
    "away_code": "CW",
    "home_team": "Melonheads",
    "home_code": "M@"
  },
  {
    "game": 9,
    "away_team": "Rockies",
    "away_code": "JR",
    "home_team": "Astros",
    "home_code": "PS"
  },
  {
    "game": 10,
    "away_team": "Pirates",
    "away_code": "QM",
    "home_team": "Red Sox",
    "home_code": "MD"
  },
  {
    "game": 10,
    "away_team": "Royals",
    "away_code": "AX",
    "home_team": "White Sox",
    "home_code": "MT"
  },
  {
    "game": 10,
    "away_team": "Dodgers",
    "away_code": "PZ",
    "home_team": "Braves",
    "home_code": "MM"
  },
  {
    "game": 10,
    "away_team": "Twins",
    "away_code": "TO",
    "home_team": "Indians",
    "home_code": "X5"
  },
  {
    "game": 10,
    "away_team": "Tigers",
    "away_code": "JY",
    "home_team": "Devil Rays",
    "home_code": "MC"
  },
  {
    "game": 10,
    "away_team": "Blue Jays",
    "away_code": "MK",
    "home_team": "Diamondbacks",
    "home_code": "TV"
  },
  {
    "game": 10,
    "away_team": "Wombats",
    "away_code": "BB",
    "home_team": "Brewers",
    "home_code": "N8"
  },
  {
    "game": 10,
    "away_team": "Expos",
    "away_code": "WZ",
    "home_team": "Hornets",
    "home_code": "SB"
  },
  {
    "game": 10,
    "away_team": "Rockies",
    "away_code": "JR",
    "home_team": "Bombers",
    "home_code": "TC"
  },
  {
    "game": 10,
    "away_team": "Angels",
    "away_code": "AP",
    "home_team": "Fishes",
    "home_code": "CW"
  },
  {
    "game": 10,
    "away_team": "Melonheads",
    "away_code": "M@",
    "home_team": "Marlins",
    "home_code": "ST"
  },
  {
    "game": 10,
    "away_team": "Monsters",
    "away_code": "YY",
    "home_team": "Astros",
    "home_code": "PS"
  },
  {
    "game": 11,
    "away_team": "Red Sox",
    "away_code": "MD",
    "home_team": "Twins",
    "home_code": "TO"
  },
  {
    "game": 11,
    "away_team": "Braves",
    "away_code": "MM",
    "home_team": "Royals",
    "home_code": "AX"
  },
  {
    "game": 11,
    "away_team": "Indians",
    "away_code": "X5",
    "home_team": "Tigers",
    "home_code": "JY"
  },
  {
    "game": 11,
    "away_team": "Diamondbacks",
    "away_code": "TV",
    "home_team": "Dodgers",
    "home_code": "PZ"
  },
  {
    "game": 11,
    "away_team": "White Sox",
    "away_code": "MT",
    "home_team": "Pirates",
    "home_code": "QM"
  },
  {
    "game": 11,
    "away_team": "Devil Rays",
    "away_code": "MC",
    "home_team": "Blue Jays",
    "home_code": "MK"
  },
  {
    "game": 11,
    "away_team": "Astros",
    "away_code": "PS",
    "home_team": "Wombats",
    "home_code": "BB"
  },
  {
    "game": 11,
    "away_team": "Brewers",
    "away_code": "N8",
    "home_team": "Rockies",
    "home_code": "JR"
  },
  {
    "game": 11,
    "away_team": "Monsters",
    "away_code": "YY",
    "home_team": "Angels",
    "home_code": "AP"
  },
  {
    "game": 11,
    "away_team": "Marlins",
    "away_code": "ST",
    "home_team": "Bombers",
    "home_code": "TC"
  },
  {
    "game": 11,
    "away_team": "Hornets",
    "away_code": "SB",
    "home_team": "Melonheads",
    "home_code": "M@"
  },
  {
    "game": 11,
    "away_team": "Fishes",
    "away_code": "CW",
    "home_team": "Expos",
    "home_code": "WZ"
  },
  {
    "game": 12,
    "away_team": "Red Sox",
    "away_code": "MD",
    "home_team": "Blue Jays",
    "home_code": "MK"
  },
  {
    "game": 12,
    "away_team": "Devil Rays",
    "away_code": "MC",
    "home_team": "Royals",
    "home_code": "AX"
  },
  {
    "game": 12,
    "away_team": "Braves",
    "away_code": "MM",
    "home_team": "Indians",
    "home_code": "X5"
  },
  {
    "game": 12,
    "away_team": "Twins",
    "away_code": "TO",
    "home_team": "Dodgers",
    "home_code": "PZ"
  },
  {
    "game": 12,
    "away_team": "White Sox",
    "away_code": "MT",
    "home_team": "Diamondbacks",
    "home_code": "TV"
  },
  {
    "game": 12,
    "away_team": "Pirates",
    "away_code": "QM",
    "home_team": "Tigers",
    "home_code": "JY"
  },
  {
    "game": 12,
    "away_team": "Wombats",
    "away_code": "BB",
    "home_team": "Marlins",
    "home_code": "ST"
  },
  {
    "game": 12,
    "away_team": "Angels",
    "away_code": "AP",
    "home_team": "Hornets",
    "home_code": "SB"
  },
  {
    "game": 12,
    "away_team": "Expos",
    "away_code": "WZ",
    "home_team": "Bombers",
    "home_code": "TC"
  },
  {
    "game": 12,
    "away_team": "Brewers",
    "away_code": "N8",
    "home_team": "Monsters",
    "home_code": "YY"
  },
  {
    "game": 12,
    "away_team": "Melonheads",
    "away_code": "M@",
    "home_team": "Astros",
    "home_code": "PS"
  },
  {
    "game": 12,
    "away_team": "Rockies",
    "away_code": "JR",
    "home_team": "Fishes",
    "home_code": "CW"
  },
  {
    "game": 13,
    "away_team": "Tigers",
    "away_code": "JY",
    "home_team": "Red Sox",
    "home_code": "MD"
  },
  {
    "game": 13,
    "away_team": "Royals",
    "away_code": "AX",
    "home_team": "Diamondbacks",
    "home_code": "TV"
  },
  {
    "game": 13,
    "away_team": "Braves",
    "away_code": "MM",
    "home_team": "Dodgers",
    "home_code": "PZ"
  },
  {
    "game": 13,
    "away_team": "Indians",
    "away_code": "X5",
    "home_team": "Twins",
    "home_code": "TO"
  },
  {
    "game": 13,
    "away_team": "Pirates",
    "away_code": "QM",
    "home_team": "White Sox",
    "home_code": "MT"
  },
  {
    "game": 13,
    "away_team": "Blue Jays",
    "away_code": "MK",
    "home_team": "Devil Rays",
    "home_code": "MC"
  },
  {
    "game": 13,
    "away_team": "Hornets",
    "away_code": "SB",
    "home_team": "Wombats",
    "home_code": "BB"
  },
  {
    "game": 13,
    "away_team": "Expos",
    "away_code": "WZ",
    "home_team": "Brewers",
    "home_code": "N8"
  },
  {
    "game": 13,
    "away_team": "Angels",
    "away_code": "AP",
    "home_team": "Marlins",
    "home_code": "ST"
  },
  {
    "game": 13,
    "away_team": "Bombers",
    "away_code": "TC",
    "home_team": "Monsters",
    "home_code": "YY"
  },
  {
    "game": 13,
    "away_team": "Rockies",
    "away_code": "JR",
    "home_team": "Melonheads",
    "home_code": "M@"
  },
  {
    "game": 13,
    "away_team": "Fishes",
    "away_code": "CW",
    "home_team": "Astros",
    "home_code": "PS"
  },
  {
    "game": 14,
    "away_team": "Red Sox",
    "away_code": "MD",
    "home_team": "Royals",
    "home_code": "AX"
  },
  {
    "game": 14,
    "away_team": "Diamondbacks",
    "away_code": "TV",
    "home_team": "Tigers",
    "home_code": "JY"
  },
  {
    "game": 14,
    "away_team": "Indians",
    "away_code": "X5",
    "home_team": "Braves",
    "home_code": "MM"
  },
  {
    "game": 14,
    "away_team": "Dodgers",
    "away_code": "PZ",
    "home_team": "Twins",
    "home_code": "TO"
  },
  {
    "game": 14,
    "away_team": "White Sox",
    "away_code": "MT",
    "home_team": "Blue Jays",
    "home_code": "MK"
  },
  {
    "game": 14,
    "away_team": "Devil Rays",
    "away_code": "MC",
    "home_team": "Pirates",
    "home_code": "QM"
  },
  {
    "game": 14,
    "away_team": "Wombats",
    "away_code": "BB",
    "home_team": "Expos",
    "home_code": "WZ"
  },
  {
    "game": 14,
    "away_team": "Brewers",
    "away_code": "N8",
    "home_team": "Hornets",
    "home_code": "SB"
  },
  {
    "game": 14,
    "away_team": "Bombers",
    "away_code": "TC",
    "home_team": "Angels",
    "home_code": "AP"
  },
  {
    "game": 14,
    "away_team": "Marlins",
    "away_code": "ST",
    "home_team": "Monsters",
    "home_code": "YY"
  },
  {
    "game": 14,
    "away_team": "Melonheads",
    "away_code": "M@",
    "home_team": "Fishes",
    "home_code": "CW"
  },
  {
    "game": 14,
    "away_team": "Astros",
    "away_code": "PS",
    "home_team": "Rockies",
    "home_code": "JR"
  }

 ]
module.exports = { s1203teams, s1203schedule};
