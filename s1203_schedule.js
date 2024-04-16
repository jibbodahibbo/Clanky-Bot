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
    "away_coach": "AX",
    "home_team": "Red Sox",
    "home_coach": "MD"
  },
  {
    "game": 1,
    "away_team": "Tigers",
    "away_coach": "JY",
    "home_team": "Diamondbacks",
    "home_coach": "TV"
  },
  {
    "game": 1,
    "away_team": "Blue Jays",
    "away_coach": "MK",
    "home_team": "Indians",
    "home_coach": "X5"
  },
  {
    "game": 1,
    "away_team": "Twins",
    "away_coach": "TO",
    "home_team": "White Sox",
    "home_coach": "MT"
  },
  {
    "game": 1,
    "away_team": "Devil Rays",
    "away_coach": "MC",
    "home_team": "Braves",
    "home_coach": "MM"
  },
  {
    "game": 1,
    "away_team": "Dodgers",
    "away_coach": "PZ",
    "home_team": "Pirates",
    "home_coach": "QM"
  },
  {
    "game": 1,
    "away_team": "Brewers",
    "away_coach": "N8",
    "home_team": "Wombats",
    "home_coach": "BB"
  },
  {
    "game": 1,
    "away_team": "Hornets",
    "away_coach": "SB",
    "home_team": "Expos",
    "home_coach": "WZ"
  },
  {
    "game": 1,
    "away_team": "Bombers",
    "away_coach": "TC",
    "home_team": "Astros",
    "home_coach": "PS"
  },
  {
    "game": 1,
    "away_team": "Melonheads",
    "away_coach": "M@",
    "home_team": "Angels",
    "home_coach": "AP"
  },
  {
    "game": 1,
    "away_team": "Marlins",
    "away_coach": "ST",
    "home_team": "Fishes",
    "home_coach": "CW"
  },
  {
    "game": 1,
    "away_team": "Monsters",
    "away_coach": "YY",
    "home_team": "Rockies",
    "home_coach": "JR"
  },
  {
    "game": 2,
    "away_team": "Indians",
    "away_coach": "X5",
    "home_team": "Red Sox",
    "home_coach": "MD"
  },
  {
    "game": 2,
    "away_team": "Tigers",
    "away_coach": "JY",
    "home_team": "Twins",
    "home_coach": "TO"
  },
  {
    "game": 2,
    "away_team": "Dodgers",
    "away_coach": "PZ",
    "home_team": "Royals",
    "home_coach": "AX"
  },
  {
    "game": 2,
    "away_team": "Diamondbacks",
    "away_coach": "TV",
    "home_team": "Braves",
    "home_coach": "MM"
  },
  {
    "game": 2,
    "away_team": "Blue Jays",
    "away_coach": "MK",
    "home_team": "White Sox",
    "home_coach": "MT"
  },
  {
    "game": 2,
    "away_team": "Pirates",
    "away_coach": "QM",
    "home_team": "Devil Rays",
    "home_coach": "MC"
  },
  {
    "game": 2,
    "away_team": "Wombats",
    "away_coach": "BB",
    "home_team": "Melonheads",
    "home_coach": "M@"
  },
  {
    "game": 2,
    "away_team": "Astros",
    "away_coach": "PS",
    "home_team": "Brewers",
    "home_coach": "N8"
  },
  {
    "game": 2,
    "away_team": "Angels",
    "away_coach": "AP",
    "home_team": "Monsters",
    "home_coach": "YY"
  },
  {
    "game": 2,
    "away_team": "Bombers",
    "away_coach": "TC",
    "home_team": "Marlins",
    "home_coach": "ST"
  },
  {
    "game": 2,
    "away_team": "Fishes",
    "away_coach": "CW",
    "home_team": "Hornets",
    "home_coach": "SB"
  },
  {
    "game": 2,
    "away_team": "Expos",
    "away_coach": "WZ",
    "home_team": "Rockies",
    "home_coach": "JR"
  },
  {
    "game": 3,
    "away_team": "Red Sox",
    "away_coach": "MD",
    "home_team": "Diamondbacks",
    "home_coach": "TV"
  },
  {
    "game": 3,
    "away_team": "Royals",
    "away_coach": "AX",
    "home_team": "Tigers",
    "home_coach": "JY"
  },
  {
    "game": 3,
    "away_team": "Pirates",
    "away_coach": "QM",
    "home_team": "Indians",
    "home_coach": "X5"
  },
  {
    "game": 3,
    "away_team": "Braves",
    "away_coach": "MM",
    "home_team": "Blue Jays",
    "home_coach": "MK"
  },
  {
    "game": 3,
    "away_team": "White Sox",
    "away_coach": "MT",
    "home_team": "Dodgers",
    "home_coach": "PZ"
  },
  {
    "game": 3,
    "away_team": "Twins",
    "away_coach": "TO",
    "home_team": "Devil Rays",
    "home_coach": "MC"
  },
  {
    "game": 3,
    "away_team": "Wombats",
    "away_coach": "BB",
    "home_team": "Hornets",
    "home_coach": "SB"
  },
  {
    "game": 3,
    "away_team": "Brewers",
    "away_coach": "N8",
    "home_team": "Expos",
    "home_coach": "WZ"
  },
  {
    "game": 3,
    "away_team": "Melonheads",
    "away_coach": "M@",
    "home_team": "Bombers",
    "home_coach": "TC"
  },
  {
    "game": 3,
    "away_team": "Rockies",
    "away_coach": "JR",
    "home_team": "Angels",
    "home_coach": "AP"
  },
  {
    "game": 3,
    "away_team": "Marlins",
    "away_coach": "ST",
    "home_team": "Astros",
    "home_coach": "PS"
  },
  {
    "game": 3,
    "away_team": "Monsters",
    "away_coach": "YY",
    "home_team": "Fishes",
    "home_coach": "CW"
  },
  {
    "game": 4,
    "away_team": "Devil Rays",
    "away_coach": "MC",
    "home_team": "Red Sox",
    "home_coach": "MD"
  },
  {
    "game": 4,
    "away_team": "Diamondbacks",
    "away_coach": "TV",
    "home_team": "Pirates",
    "home_coach": "QM"
  },
  {
    "game": 4,
    "away_team": "Twins",
    "away_coach": "TO",
    "home_team": "Braves",
    "home_coach": "MM"
  },
  {
    "game": 4,
    "away_team": "Dodgers",
    "away_coach": "PZ",
    "home_team": "Indians",
    "home_coach": "X5"
  },
  {
    "game": 4,
    "away_team": "Tigers",
    "away_coach": "JY",
    "home_team": "White Sox",
    "home_coach": "MT"
  },
  {
    "game": 4,
    "away_team": "Blue Jays",
    "away_coach": "MK",
    "home_team": "Royals",
    "home_coach": "AX"
  },
  {
    "game": 4,
    "away_team": "Angels",
    "away_coach": "AP",
    "home_team": "Wombats",
    "home_coach": "BB"
  },
  {
    "game": 4,
    "away_team": "Hornets",
    "away_coach": "SB",
    "home_team": "Marlins",
    "home_coach": "ST"
  },
  {
    "game": 4,
    "away_team": "Bombers",
    "away_coach": "TC",
    "home_team": "Brewers",
    "home_coach": "N8"
  },
  {
    "game": 4,
    "away_team": "Expos",
    "away_coach": "WZ",
    "home_team": "Monsters",
    "home_coach": "YY"
  },
  {
    "game": 4,
    "away_team": "Astros",
    "away_coach": "PS",
    "home_team": "Melonheads",
    "home_coach": "M@"
  },
  {
    "game": 4,
    "away_team": "Fishes",
    "away_coach": "CW",
    "home_team": "Rockies",
    "home_coach": "JR"
  },
  {
    "game": 5,
    "away_team": "Red Sox",
    "away_coach": "MD",
    "home_team": "Dodgers",
    "home_coach": "PZ"
  },
  {
    "game": 5,
    "away_team": "Braves",
    "away_coach": "MM",
    "home_team": "Tigers",
    "home_coach": "JY"
  },
  {
    "game": 5,
    "away_team": "Royals",
    "away_coach": "AX",
    "home_team": "Indians",
    "home_coach": "X5"
  },
  {
    "game": 5,
    "away_team": "Diamondbacks",
    "away_coach": "TV",
    "home_team": "Twins",
    "home_coach": "TO"
  },
  {
    "game": 5,
    "away_team": "White Sox",
    "away_coach": "MT",
    "home_team": "Devil Rays",
    "home_coach": "MC"
  },
  {
    "game": 5,
    "away_team": "Pirates",
    "away_coach": "QM",
    "home_team": "Blue Jays",
    "home_coach": "MK"
  },
  {
    "game": 5,
    "away_team": "Rockies",
    "away_coach": "JR",
    "home_team": "Wombats",
    "home_coach": "BB"
  },
  {
    "game": 5,
    "away_team": "Expos",
    "away_coach": "WZ",
    "home_team": "Melonheads",
    "home_coach": "M@"
  },
  {
    "game": 5,
    "away_team": "Marlins",
    "away_coach": "ST",
    "home_team": "Angels",
    "home_coach": "AP"
  },
  {
    "game": 5,
    "away_team": "Monsters",
    "away_coach": "YY",
    "home_team": "Bombers",
    "home_coach": "TC"
  },
  {
    "game": 5,
    "away_team": "Hornets",
    "away_coach": "SB",
    "home_team": "Astros",
    "home_coach": "PS"
  },
  {
    "game": 5,
    "away_team": "Fishes",
    "away_coach": "CW",
    "home_team": "Brewers",
    "home_coach": "N8"
  },
  {
    "game": 6,
    "away_team": "Diamondbacks",
    "away_coach": "TV",
    "home_team": "Red Sox",
    "home_coach": "MD"
  },
  {
    "game": 6,
    "away_team": "Tigers",
    "away_coach": "JY",
    "home_team": "Royals",
    "home_coach": "AX"
  },
  {
    "game": 6,
    "away_team": "Indians",
    "away_coach": "X5",
    "home_team": "Devil Rays",
    "home_coach": "MC"
  },
  {
    "game": 6,
    "away_team": "White Sox",
    "away_coach": "MT",
    "home_team": "Braves",
    "home_coach": "MM"
  },
  {
    "game": 6,
    "away_team": "Dodgers",
    "away_coach": "PZ",
    "home_team": "Blue Jays",
    "home_coach": "MK"
  },
  {
    "game": 6,
    "away_team": "Twins",
    "away_coach": "TO",
    "home_team": "Pirates",
    "home_coach": "QM"
  },
  {
    "game": 6,
    "away_team": "Wombats",
    "away_coach": "BB",
    "home_team": "Monsters",
    "home_coach": "YY"
  },
  {
    "game": 6,
    "away_team": "Angels",
    "away_coach": "AP",
    "home_team": "Expos",
    "home_coach": "WZ"
  },
  {
    "game": 6,
    "away_team": "Bombers",
    "away_coach": "TC",
    "home_team": "Hornets",
    "home_coach": "SB"
  },
  {
    "game": 6,
    "away_team": "Brewers",
    "away_coach": "N8",
    "home_team": "Marlins",
    "home_coach": "ST"
  },
  {
    "game": 6,
    "away_team": "Melonheads",
    "away_coach": "M@",
    "home_team": "Rockies",
    "home_coach": "JR"
  },
  {
    "game": 6,
    "away_team": "Astros",
    "away_coach": "PS",
    "home_team": "Fishes",
    "home_coach": "CW"
  },
  {
    "game": 7,
    "away_team": "Red Sox",
    "away_coach": "MD",
    "home_team": "White Sox",
    "home_coach": "MT"
  },
  {
    "game": 7,
    "away_team": "Devil Rays",
    "away_coach": "MC",
    "home_team": "Diamondbacks",
    "home_coach": "TV"
  },
  {
    "game": 7,
    "away_team": "Braves",
    "away_coach": "MM",
    "home_team": "Twins",
    "home_coach": "TO"
  },
  {
    "game": 7,
    "away_team": "Indians",
    "away_coach": "X5",
    "home_team": "Dodgers",
    "home_coach": "PZ"
  },
  {
    "game": 7,
    "away_team": "Blue Jays",
    "away_coach": "MK",
    "home_team": "Tigers",
    "home_coach": "JY"
  },
  {
    "game": 7,
    "away_team": "Royals",
    "away_coach": "AX",
    "home_team": "Pirates",
    "home_coach": "QM"
  },
  {
    "game": 7,
    "away_team": "Wombats",
    "away_coach": "BB",
    "home_team": "Fishes",
    "home_coach": "CW"
  },
  {
    "game": 7,
    "away_team": "Astros",
    "away_coach": "PS",
    "home_team": "Expos",
    "home_coach": "WZ"
  },
  {
    "game": 7,
    "away_team": "Angels",
    "away_coach": "AP",
    "home_team": "Bombers",
    "home_coach": "TC"
  },
  {
    "game": 7,
    "away_team": "Monsters",
    "away_coach": "YY",
    "home_team": "Marlins",
    "home_coach": "ST"
  },
  {
    "game": 7,
    "away_team": "Melonheads",
    "away_coach": "M@",
    "home_team": "Brewers",
    "home_coach": "N8"
  },
  {
    "game": 7,
    "away_team": "Rockies",
    "away_coach": "JR",
    "home_team": "Hornets",
    "home_coach": "SB"
  },
  {
    "game": 8,
    "away_team": "Red Sox",
    "away_coach": "MD",
    "home_team": "Tigers",
    "home_coach": "JY"
  },
  {
    "game": 8,
    "away_team": "Diamondbacks",
    "away_coach": "TV",
    "home_team": "Royals",
    "home_coach": "AX"
  },
  {
    "game": 8,
    "away_team": "White Sox",
    "away_coach": "MT",
    "home_team": "Indians",
    "home_coach": "X5"
  },
  {
    "game": 8,
    "away_team": "Pirates",
    "away_coach": "QM",
    "home_team": "Braves",
    "home_coach": "MM"
  },
  {
    "game": 8,
    "away_team": "Dodgers",
    "away_coach": "PZ",
    "home_team": "Devil Rays",
    "home_coach": "MC"
  },
  {
    "game": 8,
    "away_team": "Twins",
    "away_coach": "TO",
    "home_team": "Blue Jays",
    "home_coach": "MK"
  },
  {
    "game": 8,
    "away_team": "Expos",
    "away_coach": "WZ",
    "home_team": "Wombats",
    "home_coach": "BB"
  },
  {
    "game": 8,
    "away_team": "Hornets",
    "away_coach": "SB",
    "home_team": "Brewers",
    "home_coach": "N8"
  },
  {
    "game": 8,
    "away_team": "Fishes",
    "away_coach": "CW",
    "home_team": "Bombers",
    "home_coach": "TC"
  },
  {
    "game": 8,
    "away_team": "Monsters",
    "away_coach": "YY",
    "home_team": "Melonheads",
    "home_coach": "M@"
  },
  {
    "game": 8,
    "away_team": "Astros",
    "away_coach": "PS",
    "home_team": "Angels",
    "home_coach": "AP"
  },
  {
    "game": 8,
    "away_team": "Marlins",
    "away_coach": "ST",
    "home_team": "Rockies",
    "home_coach": "JR"
  },
  {
    "game": 9,
    "away_team": "Braves",
    "away_coach": "MM",
    "home_team": "Red Sox",
    "home_coach": "MD"
  },
  {
    "game": 9,
    "away_team": "Tigers",
    "away_coach": "JY",
    "home_team": "Dodgers",
    "home_coach": "PZ"
  },
  {
    "game": 9,
    "away_team": "Indians",
    "away_coach": "X5",
    "home_team": "Diamondbacks",
    "home_coach": "TV"
  },
  {
    "game": 9,
    "away_team": "Royals",
    "away_coach": "AX",
    "home_team": "Twins",
    "home_coach": "TO"
  },
  {
    "game": 9,
    "away_team": "Devil Rays",
    "away_coach": "MC",
    "home_team": "White Sox",
    "home_coach": "MT"
  },
  {
    "game": 9,
    "away_team": "Blue Jays",
    "away_coach": "MK",
    "home_team": "Pirates",
    "home_coach": "QM"
  },
  {
    "game": 9,
    "away_team": "Bombers",
    "away_coach": "TC",
    "home_team": "Wombats",
    "home_coach": "BB"
  },
  {
    "game": 9,
    "away_team": "Hornets",
    "away_coach": "SB",
    "home_team": "Monsters",
    "home_coach": "YY"
  },
  {
    "game": 9,
    "away_team": "Marlins",
    "away_coach": "ST",
    "home_team": "Expos",
    "home_coach": "WZ"
  },
  {
    "game": 9,
    "away_team": "Brewers",
    "away_coach": "N8",
    "home_team": "Angels",
    "home_coach": "AP"
  },
  {
    "game": 9,
    "away_team": "Fishes",
    "away_coach": "CW",
    "home_team": "Melonheads",
    "home_coach": "M@"
  },
  {
    "game": 9,
    "away_team": "Rockies",
    "away_coach": "JR",
    "home_team": "Astros",
    "home_coach": "PS"
  },
  {
    "game": 10,
    "away_team": "Pirates",
    "away_coach": "QM",
    "home_team": "Red Sox",
    "home_coach": "MD"
  },
  {
    "game": 10,
    "away_team": "Royals",
    "away_coach": "AX",
    "home_team": "White Sox",
    "home_coach": "MT"
  },
  {
    "game": 10,
    "away_team": "Dodgers",
    "away_coach": "PZ",
    "home_team": "Braves",
    "home_coach": "MM"
  },
  {
    "game": 10,
    "away_team": "Twins",
    "away_coach": "TO",
    "home_team": "Indians",
    "home_coach": "X5"
  },
  {
    "game": 10,
    "away_team": "Tigers",
    "away_coach": "JY",
    "home_team": "Devil Rays",
    "home_coach": "MC"
  },
  {
    "game": 10,
    "away_team": "Blue Jays",
    "away_coach": "MK",
    "home_team": "Diamondbacks",
    "home_coach": "TV"
  },
  {
    "game": 10,
    "away_team": "Wombats",
    "away_coach": "BB",
    "home_team": "Brewers",
    "home_coach": "N8"
  },
  {
    "game": 10,
    "away_team": "Expos",
    "away_coach": "WZ",
    "home_team": "Hornets",
    "home_coach": "SB"
  },
  {
    "game": 10,
    "away_team": "Rockies",
    "away_coach": "JR",
    "home_team": "Bombers",
    "home_coach": "TC"
  },
  {
    "game": 10,
    "away_team": "Angels",
    "away_coach": "AP",
    "home_team": "Fishes",
    "home_coach": "CW"
  },
  {
    "game": 10,
    "away_team": "Melonheads",
    "away_coach": "M@",
    "home_team": "Marlins",
    "home_coach": "ST"
  },
  {
    "game": 10,
    "away_team": "Monsters",
    "away_coach": "YY",
    "home_team": "Astros",
    "home_coach": "PS"
  },
  {
    "game": 11,
    "away_team": "Red Sox",
    "away_coach": "MD",
    "home_team": "Twins",
    "home_coach": "TO"
  },
  {
    "game": 11,
    "away_team": "Braves",
    "away_coach": "MM",
    "home_team": "Royals",
    "home_coach": "AX"
  },
  {
    "game": 11,
    "away_team": "Indians",
    "away_coach": "X5",
    "home_team": "Tigers",
    "home_coach": "JY"
  },
  {
    "game": 11,
    "away_team": "Diamondbacks",
    "away_coach": "TV",
    "home_team": "Dodgers",
    "home_coach": "PZ"
  },
  {
    "game": 11,
    "away_team": "White Sox",
    "away_coach": "MT",
    "home_team": "Pirates",
    "home_coach": "QM"
  },
  {
    "game": 11,
    "away_team": "Devil Rays",
    "away_coach": "MC",
    "home_team": "Blue Jays",
    "home_coach": "MK"
  },
  {
    "game": 11,
    "away_team": "Astros",
    "away_coach": "PS",
    "home_team": "Wombats",
    "home_coach": "BB"
  },
  {
    "game": 11,
    "away_team": "Brewers",
    "away_coach": "N8",
    "home_team": "Rockies",
    "home_coach": "JR"
  },
  {
    "game": 11,
    "away_team": "Monsters",
    "away_coach": "YY",
    "home_team": "Angels",
    "home_coach": "AP"
  },
  {
    "game": 11,
    "away_team": "Marlins",
    "away_coach": "ST",
    "home_team": "Bombers",
    "home_coach": "TC"
  },
  {
    "game": 11,
    "away_team": "Hornets",
    "away_coach": "SB",
    "home_team": "Melonheads",
    "home_coach": "M@"
  },
  {
    "game": 11,
    "away_team": "Fishes",
    "away_coach": "CW",
    "home_team": "Expos",
    "home_coach": "WZ"
  },
  {
    "game": 12,
    "away_team": "Red Sox",
    "away_coach": "MD",
    "home_team": "Blue Jays",
    "home_coach": "MK"
  },
  {
    "game": 12,
    "away_team": "Devil Rays",
    "away_coach": "MC",
    "home_team": "Royals",
    "home_coach": "AX"
  },
  {
    "game": 12,
    "away_team": "Braves",
    "away_coach": "MM",
    "home_team": "Indians",
    "home_coach": "X5"
  },
  {
    "game": 12,
    "away_team": "Twins",
    "away_coach": "TO",
    "home_team": "Dodgers",
    "home_coach": "PZ"
  },
  {
    "game": 12,
    "away_team": "White Sox",
    "away_coach": "MT",
    "home_team": "Diamondbacks",
    "home_coach": "TV"
  },
  {
    "game": 12,
    "away_team": "Pirates",
    "away_coach": "QM",
    "home_team": "Tigers",
    "home_coach": "JY"
  },
  {
    "game": 12,
    "away_team": "Wombats",
    "away_coach": "BB",
    "home_team": "Marlins",
    "home_coach": "ST"
  },
  {
    "game": 12,
    "away_team": "Angels",
    "away_coach": "AP",
    "home_team": "Hornets",
    "home_coach": "SB"
  },
  {
    "game": 12,
    "away_team": "Expos",
    "away_coach": "WZ",
    "home_team": "Bombers",
    "home_coach": "TC"
  },
  {
    "game": 12,
    "away_team": "Brewers",
    "away_coach": "N8",
    "home_team": "Monsters",
    "home_coach": "YY"
  },
  {
    "game": 12,
    "away_team": "Melonheads",
    "away_coach": "M@",
    "home_team": "Astros",
    "home_coach": "PS"
  },
  {
    "game": 12,
    "away_team": "Rockies",
    "away_coach": "JR",
    "home_team": "Fishes",
    "home_coach": "CW"
  },
  {
    "game": 13,
    "away_team": "Tigers",
    "away_coach": "JY",
    "home_team": "Red Sox",
    "home_coach": "MD"
  },
  {
    "game": 13,
    "away_team": "Royals",
    "away_coach": "AX",
    "home_team": "Diamondbacks",
    "home_coach": "TV"
  },
  {
    "game": 13,
    "away_team": "Braves",
    "away_coach": "MM",
    "home_team": "Dodgers",
    "home_coach": "PZ"
  },
  {
    "game": 13,
    "away_team": "Indians",
    "away_coach": "X5",
    "home_team": "Twins",
    "home_coach": "TO"
  },
  {
    "game": 13,
    "away_team": "Pirates",
    "away_coach": "QM",
    "home_team": "White Sox",
    "home_coach": "MT"
  },
  {
    "game": 13,
    "away_team": "Blue Jays",
    "away_coach": "MK",
    "home_team": "Devil Rays",
    "home_coach": "MC"
  },
  {
    "game": 13,
    "away_team": "Hornets",
    "away_coach": "SB",
    "home_team": "Wombats",
    "home_coach": "BB"
  },
  {
    "game": 13,
    "away_team": "Expos",
    "away_coach": "WZ",
    "home_team": "Brewers",
    "home_coach": "N8"
  },
  {
    "game": 13,
    "away_team": "Angels",
    "away_coach": "AP",
    "home_team": "Marlins",
    "home_coach": "ST"
  },
  {
    "game": 13,
    "away_team": "Bombers",
    "away_coach": "TC",
    "home_team": "Monsters",
    "home_coach": "YY"
  },
  {
    "game": 13,
    "away_team": "Rockies",
    "away_coach": "JR",
    "home_team": "Melonheads",
    "home_coach": "M@"
  },
  {
    "game": 13,
    "away_team": "Fishes",
    "away_coach": "CW",
    "home_team": "Astros",
    "home_coach": "PS"
  },
  {
    "game": 14,
    "away_team": "Red Sox",
    "away_coach": "MD",
    "home_team": "Royals",
    "home_coach": "AX"
  },
  {
    "game": 14,
    "away_team": "Diamondbacks",
    "away_coach": "TV",
    "home_team": "Tigers",
    "home_coach": "JY"
  },
  {
    "game": 14,
    "away_team": "Indians",
    "away_coach": "X5",
    "home_team": "Braves",
    "home_coach": "MM"
  },
  {
    "game": 14,
    "away_team": "Dodgers",
    "away_coach": "PZ",
    "home_team": "Twins",
    "home_coach": "TO"
  },
  {
    "game": 14,
    "away_team": "White Sox",
    "away_coach": "MT",
    "home_team": "Blue Jays",
    "home_coach": "MK"
  },
  {
    "game": 14,
    "away_team": "Devil Rays",
    "away_coach": "MC",
    "home_team": "Pirates",
    "home_coach": "QM"
  },
  {
    "game": 14,
    "away_team": "Wombats",
    "away_coach": "BB",
    "home_team": "Expos",
    "home_coach": "WZ"
  },
  {
    "game": 14,
    "away_team": "Brewers",
    "away_coach": "N8",
    "home_team": "Hornets",
    "home_coach": "SB"
  },
  {
    "game": 14,
    "away_team": "Bombers",
    "away_coach": "TC",
    "home_team": "Angels",
    "home_coach": "AP"
  },
  {
    "game": 14,
    "away_team": "Marlins",
    "away_coach": "ST",
    "home_team": "Monsters",
    "home_coach": "YY"
  },
  {
    "game": 14,
    "away_team": "Melonheads",
    "away_coach": "M@",
    "home_team": "Fishes",
    "home_coach": "CW"
  },
  {
    "game": 14,
    "away_team": "Astros",
    "away_coach": "PS",
    "home_team": "Rockies",
    "home_coach": "JR"
  }
 ]
module.exports = { s1203teams, s1203schedule};
