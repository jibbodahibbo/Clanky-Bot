// http://www.convertcsv.com/csv-to-json.htm

const s1103teams = {
  "Yankees": "<@&668468071861583891>",
  "Orioles": "<@&603606321492787210>",
  "Giants": "<@&1071145998656737360>",
  "Padres": "<@&1071145701725184070>",
  "Indians": "<@&448576195190063110>",
  "Phillies": "<@&847666595748249640>",
  "Blue Jays": "<@&603589804868763648>",
  "Rangers": "<@&1067528806765699162>",
  "Brewers": "<@&496530637596000287>",
  "Royals": "<@&1067544069221392414>",
  "Hornets": "<@&1069707239478272131>",
  "Diamondbacks": "<@&783577309000368189>",
  "Wombats": "<@&900907535983329291>",
  "Mariners": "<@&496815444116635658>",
  "Cardinals": "<@&1067528046451642418>",
  "Expos": "<@496713526778265624>",
  "Astros": "<@&1067544975325265960>",
  "Angels": "<@&1067540852769050744>",
  "Monsters": "<@&496817066201055232>",
  "Devil Rays": "<@&1142985787114266624>",
  "Melonheads": "<@&603589134744944670>",
  "Fishes": "<@&603589333676589066>",
  "Twins": "<@&1071145277362274434>",
  "Bombers": "<@&603291831744200737>",
};

//"game": "1",
//"away_team": "As",
//"away_code": "NF",
//"home_team": "Red Sox",
//"home_code": "XD"

const s1103schedule =[
  {
    "game": 1,
    "away_team": "Phillies",
    "away_code": "VS",
    "home_team": "Astros",
    "home_code": "BO"
  },
  {
    "game": 1,
    "away_team": "Hornets",
    "away_code": "PS",
    "home_team": "Royals",
    "home_code": "AX"
  },
  {
    "game": 1,
    "away_team": "Monsters",
    "away_code": "YY",
    "home_team": "Fishes",
    "home_code": "CW"
  },
  {
    "game": 1,
    "away_team": "Padres",
    "away_code": "MM",
    "home_team": "Bombers",
    "home_code": "TC"
  },
  {
    "game": 1,
    "away_team": "Twins",
    "away_code": "TO",
    "home_team": "Melonheads",
    "home_code": "SB"
  },
  {
    "game": 1,
    "away_team": "Expos",
    "away_code": "LW",
    "home_team": "Cardinals",
    "home_code": "SE"
  },
  {
    "game": 1,
    "away_team": "Giants",
    "away_code": "IT",
    "home_team": "Angels",
    "home_code": "AP"
  },
  {
    "game": 1,
    "away_team": "Brewers",
    "away_code": "N8",
    "home_team": "Wombats",
    "home_code": "YT"
  },
  {
    "game": 1,
    "away_team": "Rangers",
    "away_code": "WZ",
    "home_team": "Orioles",
    "home_code": "BB"
  },
  {
    "game": 1,
    "away_team": "Diamondbacks",
    "away_code": "TV",
    "home_team": "Blue Jays",
    "home_code": "MK"
  },
  {
    "game": 1,
    "away_team": "Indians",
    "away_code": "C8",
    "home_team": "Yankees",
    "home_code": "ZB"
  },
  {
    "game": 1,
    "away_team": "Mariners",
    "away_code": "JY",
    "home_team": "Devil Rays",
    "home_code": "MC"
  },
  {
    "game": 2,
    "away_team": "Melonheads",
    "away_code": "SB",
    "home_team": "Padres",
    "home_code": "MM"
  },
  {
    "game": 2,
    "away_team": "Fishes",
    "away_code": "CW",
    "home_team": "Hornets",
    "home_code": "PS"
  },
  {
    "game": 2,
    "away_team": "Cardinals",
    "away_code": "SE",
    "home_team": "Twins",
    "home_code": "TO"
  },
  {
    "game": 2,
    "away_team": "Astros",
    "away_code": "BO",
    "home_team": "Monsters",
    "home_code": "YY"
  },
  {
    "game": 2,
    "away_team": "Bombers",
    "away_code": "TC",
    "home_team": "Expos",
    "home_code": "LW"
  },
  {
    "game": 2,
    "away_team": "Royals",
    "away_code": "AX",
    "home_team": "Phillies",
    "home_code": "VS"
  },
  {
    "game": 2,
    "away_team": "Yankees",
    "away_code": "ZB",
    "home_team": "Diamondbacks",
    "home_code": "TV"
  },
  {
    "game": 2,
    "away_team": "Orioles",
    "away_code": "BB",
    "home_team": "Brewers",
    "home_code": "N8"
  },
  {
    "game": 2,
    "away_team": "Devil Rays",
    "away_code": "MC",
    "home_team": "Indians",
    "home_code": "C8"
  },
  {
    "game": 2,
    "away_team": "Angels",
    "away_code": "AP",
    "home_team": "Rangers",
    "home_code": "WZ"
  },
  {
    "game": 2,
    "away_team": "Blue Jays",
    "away_code": "MK",
    "home_team": "Mariners",
    "home_code": "JY"
  },
  {
    "game": 2,
    "away_team": "Wombats",
    "away_code": "YT",
    "home_team": "Giants",
    "home_code": "IT"
  },
  {
    "game": 3,
    "away_team": "Expos",
    "away_code": "LW",
    "home_team": "Twins",
    "home_code": "TO"
  },
  {
    "game": 3,
    "away_team": "Astros",
    "away_code": "BO",
    "home_team": "Fishes",
    "home_code": "CW"
  },
  {
    "game": 3,
    "away_team": "Royals",
    "away_code": "AX",
    "home_team": "Cardinals",
    "home_code": "SE"
  },
  {
    "game": 3,
    "away_team": "Melonheads",
    "away_code": "SB",
    "home_team": "Bombers",
    "home_code": "TC"
  },
  {
    "game": 3,
    "away_team": "Hornets",
    "away_code": "PS",
    "home_team": "Phillies",
    "home_code": "VS"
  },
  {
    "game": 3,
    "away_team": "Monsters",
    "away_code": "YY",
    "home_team": "Padres",
    "home_code": "MM"
  },
  {
    "game": 3,
    "away_team": "Mariners",
    "away_code": "JY",
    "home_team": "Indians",
    "home_code": "C8"
  },
  {
    "game": 3,
    "away_team": "Angels",
    "away_code": "AP",
    "home_team": "Orioles",
    "home_code": "BB"
  },
  {
    "game": 3,
    "away_team": "Wombats",
    "away_code": "YT",
    "home_team": "Devil Rays",
    "home_code": "MC"
  },
  {
    "game": 3,
    "away_team": "Yankees",
    "away_code": "ZB",
    "home_team": "Blue Jays",
    "home_code": "MK"
  },
  {
    "game": 3,
    "away_team": "Brewers",
    "away_code": "N8",
    "home_team": "Giants",
    "home_code": "IT"
  },
  {
    "game": 3,
    "away_team": "Rangers",
    "away_code": "WZ",
    "home_team": "Diamondbacks",
    "home_code": "TV"
  },
  {
    "game": 4,
    "away_team": "Monsters",
    "away_code": "YY",
    "home_team": "Melonheads",
    "home_code": "SB"
  },
  {
    "game": 4,
    "away_team": "Expos",
    "away_code": "LW",
    "home_team": "Royals",
    "home_code": "AX"
  },
  {
    "game": 4,
    "away_team": "Hornets",
    "away_code": "PS",
    "home_team": "Bombers",
    "home_code": "TC"
  },
  {
    "game": 4,
    "away_team": "Twins",
    "away_code": "TO",
    "home_team": "Astros",
    "home_code": "BO"
  },
  {
    "game": 4,
    "away_team": "Phillies",
    "away_code": "VS",
    "home_team": "Cardinals",
    "home_code": "SE"
  },
  {
    "game": 4,
    "away_team": "Padres",
    "away_code": "MM",
    "home_team": "Fishes",
    "home_code": "CW"
  },
  {
    "game": 4,
    "away_team": "Rangers",
    "away_code": "WZ",
    "home_team": "Yankees",
    "home_code": "ZB"
  },
  {
    "game": 4,
    "away_team": "Mariners",
    "away_code": "JY",
    "home_team": "Wombats",
    "home_code": "YT"
  },
  {
    "game": 4,
    "away_team": "Brewers",
    "away_code": "N8",
    "home_team": "Blue Jays",
    "home_code": "MK"
  },
  {
    "game": 4,
    "away_team": "Indians",
    "away_code": "C8",
    "home_team": "Angels",
    "home_code": "AP"
  },
  {
    "game": 4,
    "away_team": "Giants",
    "away_code": "IT",
    "home_team": "Devil Rays",
    "home_code": "MC"
  },
  {
    "game": 4,
    "away_team": "Diamondbacks",
    "away_code": "TV",
    "home_team": "Orioles",
    "home_code": "BB"
  },
  {
    "game": 5,
    "away_team": "Fishes",
    "away_code": "CW",
    "home_team": "Phillies",
    "home_code": "VS"
  },
  {
    "game": 5,
    "away_team": "Cardinals",
    "away_code": "SE",
    "home_team": "Padres",
    "home_code": "MM"
  },
  {
    "game": 5,
    "away_team": "Astros",
    "away_code": "BO",
    "home_team": "Hornets",
    "home_code": "PS"
  },
  {
    "game": 5,
    "away_team": "Bombers",
    "away_code": "TC",
    "home_team": "Twins",
    "home_code": "TO"
  },
  {
    "game": 5,
    "away_team": "Royals",
    "away_code": "AX",
    "home_team": "Monsters",
    "home_code": "YY"
  },
  {
    "game": 5,
    "away_team": "Melonheads",
    "away_code": "SB",
    "home_team": "Expos",
    "home_code": "LW"
  },
  {
    "game": 5,
    "away_team": "Orioles",
    "away_code": "BB",
    "home_team": "Giants",
    "home_code": "IT"
  },
  {
    "game": 5,
    "away_team": "Devil Rays",
    "away_code": "MC",
    "home_team": "Diamondbacks",
    "home_code": "TV"
  },
  {
    "game": 5,
    "away_team": "Angels",
    "away_code": "AP",
    "home_team": "Brewers",
    "home_code": "N8"
  },
  {
    "game": 5,
    "away_team": "Blue Jays",
    "away_code": "MK",
    "home_team": "Indians",
    "home_code": "C8"
  },
  {
    "game": 5,
    "away_team": "Wombats",
    "away_code": "YT",
    "home_team": "Rangers",
    "home_code": "WZ"
  },
  {
    "game": 5,
    "away_team": "Yankees",
    "away_code": "ZB",
    "home_team": "Mariners",
    "home_code": "JY"
  },
  {
    "game": 6,
    "away_team": "Phillies",
    "away_code": "VS",
    "home_team": "Expos",
    "home_code": "LW"
  },
  {
    "game": 6,
    "away_team": "Padres",
    "away_code": "MM",
    "home_team": "Hornets",
    "home_code": "PS"
  },
  {
    "game": 6,
    "away_team": "Twins",
    "away_code": "TO",
    "home_team": "Monsters",
    "home_code": "YY"
  },
  {
    "game": 6,
    "away_team": "Fishes",
    "away_code": "CW",
    "home_team": "Melonheads",
    "home_code": "SB"
  },
  {
    "game": 6,
    "away_team": "Cardinals",
    "away_code": "SE",
    "home_team": "Astros",
    "home_code": "BO"
  },
  {
    "game": 6,
    "away_team": "Bombers",
    "away_code": "TC",
    "home_team": "Royals",
    "home_code": "AX"
  },
  {
    "game": 6,
    "away_team": "Giants",
    "away_code": "IT",
    "home_team": "Mariners",
    "home_code": "JY"
  },
  {
    "game": 6,
    "away_team": "Diamondbacks",
    "away_code": "TV",
    "home_team": "Brewers",
    "home_code": "N8"
  },
  {
    "game": 6,
    "away_team": "Indians",
    "away_code": "C8",
    "home_team": "Rangers",
    "home_code": "WZ"
  },
  {
    "game": 6,
    "away_team": "Orioles",
    "away_code": "BB",
    "home_team": "Yankees",
    "home_code": "ZB"
  },
  {
    "game": 6,
    "away_team": "Devil Rays",
    "away_code": "MC",
    "home_team": "Angels",
    "home_code": "AP"
  },
  {
    "game": 6,
    "away_team": "Blue Jays",
    "away_code": "MK",
    "home_team": "Wombats",
    "home_code": "YT"
  },
  {
    "game": 7,
    "away_team": "Royals",
    "away_code": "AX",
    "home_team": "Melonheads",
    "home_code": "SB"
  },
  {
    "game": 7,
    "away_team": "Expos",
    "away_code": "LW",
    "home_team": "Monsters",
    "home_code": "YY"
  },
  {
    "game": 7,
    "away_team": "Astros",
    "away_code": "BO",
    "home_team": "Bombers",
    "home_code": "TC"
  },
  {
    "game": 7,
    "away_team": "Hornets",
    "away_code": "PS",
    "home_team": "Twins",
    "home_code": "TO"
  },
  {
    "game": 7,
    "away_team": "Cardinals",
    "away_code": "SE",
    "home_team": "Fishes",
    "home_code": "CW"
  },
  {
    "game": 7,
    "away_team": "Phillies",
    "away_code": "VS",
    "home_team": "Padres",
    "home_code": "MM"
  },
  {
    "game": 7,
    "away_team": "Wombats",
    "away_code": "YT",
    "home_team": "Yankees",
    "home_code": "ZB"
  },
  {
    "game": 7,
    "away_team": "Mariners",
    "away_code": "JY",
    "home_team": "Rangers",
    "home_code": "WZ"
  },
  {
    "game": 7,
    "away_team": "Angels",
    "away_code": "AP",
    "home_team": "Blue Jays",
    "home_code": "MK"
  },
  {
    "game": 7,
    "away_team": "Brewers",
    "away_code": "N8",
    "home_team": "Indians",
    "home_code": "C8"
  },
  {
    "game": 7,
    "away_team": "Devil Rays",
    "away_code": "MC",
    "home_team": "Orioles",
    "home_code": "BB"
  },
  {
    "game": 7,
    "away_team": "Giants",
    "away_code": "IT",
    "home_team": "Diamondbacks",
    "home_code": "TV"
  },
  {
    "game": 8,
    "away_team": "Padres",
    "away_code": "MM",
    "home_team": "Astros",
    "home_code": "BO"
  },
  {
    "game": 8,
    "away_team": "Fishes",
    "away_code": "CW",
    "home_team": "Expos",
    "home_code": "LW"
  },
  {
    "game": 8,
    "away_team": "Monsters",
    "away_code": "YY",
    "home_team": "Cardinals",
    "home_code": "SE"
  },
  {
    "game": 8,
    "away_team": "Royals",
    "away_code": "AX",
    "home_team": "Twins",
    "home_code": "TO"
  },
  {
    "game": 8,
    "away_team": "Bombers",
    "away_code": "TC",
    "home_team": "Phillies",
    "home_code": "VS"
  },
  {
    "game": 8,
    "away_team": "Melonheads",
    "away_code": "SB",
    "home_team": "Hornets",
    "home_code": "PS"
  },
  {
    "game": 8,
    "away_team": "Diamondbacks",
    "away_code": "TV",
    "home_team": "Angels",
    "home_code": "AP"
  },
  {
    "game": 8,
    "away_team": "Orioles",
    "away_code": "BB",
    "home_team": "Mariners",
    "home_code": "JY"
  },
  {
    "game": 8,
    "away_team": "Rangers",
    "away_code": "WZ",
    "home_team": "Devil Rays",
    "home_code": "MC"
  },
  {
    "game": 8,
    "away_team": "Wombats",
    "away_code": "YT",
    "home_team": "Indians",
    "home_code": "C8"
  },
  {
    "game": 8,
    "away_team": "Blue Jays",
    "away_code": "MK",
    "home_team": "Giants",
    "home_code": "IT"
  },
  {
    "game": 8,
    "away_team": "Yankees",
    "away_code": "ZB",
    "home_team": "Brewers",
    "home_code": "N8"
  },
  {
    "game": 9,
    "away_team": "Phillies",
    "away_code": "VS",
    "home_team": "Monsters",
    "home_code": "YY"
  },
  {
    "game": 9,
    "away_team": "Twins",
    "away_code": "TO",
    "home_team": "Padres",
    "home_code": "MM"
  },
  {
    "game": 9,
    "away_team": "Expos",
    "away_code": "LW",
    "home_team": "Hornets",
    "home_code": "PS"
  },
  {
    "game": 9,
    "away_team": "Fishes",
    "away_code": "CW",
    "home_team": "Royals",
    "home_code": "AX"
  },
  {
    "game": 9,
    "away_team": "Cardinals",
    "away_code": "SE",
    "home_team": "Bombers",
    "home_code": "TC"
  },
  {
    "game": 9,
    "away_team": "Astros",
    "away_code": "BO",
    "home_team": "Melonheads",
    "home_code": "SB"
  },
  {
    "game": 9,
    "away_team": "Giants",
    "away_code": "IT",
    "home_team": "Rangers",
    "home_code": "WZ"
  },
  {
    "game": 9,
    "away_team": "Indians",
    "away_code": "C8",
    "home_team": "Diamondbacks",
    "home_code": "TV"
  },
  {
    "game": 9,
    "away_team": "Mariners",
    "away_code": "JY",
    "home_team": "Brewers",
    "home_code": "N8"
  },
  {
    "game": 9,
    "away_team": "Orioles",
    "away_code": "BB",
    "home_team": "Wombats",
    "home_code": "YT"
  },
  {
    "game": 9,
    "away_team": "Devil Rays",
    "away_code": "MC",
    "home_team": "Blue Jays",
    "home_code": "MK"
  },
  {
    "game": 9,
    "away_team": "Angels",
    "away_code": "AP",
    "home_team": "Yankees",
    "home_code": "ZB"
  },
  {
    "game": 10,
    "away_team": "Twins",
    "away_code": "TO",
    "home_team": "Fishes",
    "home_code": "CW"
  },
  {
    "game": 10,
    "away_team": "Monsters",
    "away_code": "YY",
    "home_team": "Bombers",
    "home_code": "TC"
  },
  {
    "game": 10,
    "away_team": "Expos",
    "away_code": "LW",
    "home_team": "Astros",
    "home_code": "BO"
  },
  {
    "game": 10,
    "away_team": "Melonheads",
    "away_code": "SB",
    "home_team": "Phillies",
    "home_code": "VS"
  },
  {
    "game": 10,
    "away_team": "Royals",
    "away_code": "AX",
    "home_team": "Padres",
    "home_code": "MM"
  },
  {
    "game": 10,
    "away_team": "Hornets",
    "away_code": "PS",
    "home_team": "Cardinals",
    "home_code": "SE"
  },
  {
    "game": 10,
    "away_team": "Indians",
    "away_code": "C8",
    "home_team": "Orioles",
    "home_code": "BB"
  },
  {
    "game": 10,
    "away_team": "Rangers",
    "away_code": "WZ",
    "home_team": "Blue Jays",
    "home_code": "MK"
  },
  {
    "game": 10,
    "away_team": "Mariners",
    "away_code": "JY",
    "home_team": "Angels",
    "home_code": "AP"
  },
  {
    "game": 10,
    "away_team": "Yankees",
    "away_code": "ZB",
    "home_team": "Giants",
    "home_code": "IT"
  },
  {
    "game": 10,
    "away_team": "Wombats",
    "away_code": "YT",
    "home_team": "Diamondbacks",
    "home_code": "TV"
  },
  {
    "game": 10,
    "away_team": "Brewers",
    "away_code": "N8",
    "home_team": "Devil Rays",
    "home_code": "MC"
  },
  {
    "game": 11,
    "away_team": "Bombers",
    "away_code": "TC",
    "home_team": "Hornets",
    "home_code": "PS"
  },
  {
    "game": 11,
    "away_team": "Astros",
    "away_code": "BO",
    "home_team": "Twins",
    "home_code": "TO"
  },
  {
    "game": 11,
    "away_team": "Cardinals",
    "away_code": "SE",
    "home_team": "Phillies",
    "home_code": "VS"
  },
  {
    "game": 11,
    "away_team": "Fishes",
    "away_code": "CW",
    "home_team": "Padres",
    "home_code": "MM"
  },
  {
    "game": 11,
    "away_team": "Melonheads",
    "away_code": "SB",
    "home_team": "Monsters",
    "home_code": "YY"
  },
  {
    "game": 11,
    "away_team": "Royals",
    "away_code": "AX",
    "home_team": "Expos",
    "home_code": "LW"
  },
  {
    "game": 11,
    "away_team": "Blue Jays",
    "away_code": "MK",
    "home_team": "Brewers",
    "home_code": "N8"
  },
  {
    "game": 11,
    "away_team": "Angels",
    "away_code": "AP",
    "home_team": "Indians",
    "home_code": "C8"
  },
  {
    "game": 11,
    "away_team": "Devil Rays",
    "away_code": "MC",
    "home_team": "Giants",
    "home_code": "IT"
  },
  {
    "game": 11,
    "away_team": "Orioles",
    "away_code": "BB",
    "home_team": "Diamondbacks",
    "home_code": "TV"
  },
  {
    "game": 11,
    "away_team": "Yankees",
    "away_code": "ZB",
    "home_team": "Rangers",
    "home_code": "WZ"
  },
  {
    "game": 11,
    "away_team": "Wombats",
    "away_code": "YT",
    "home_team": "Mariners",
    "home_code": "JY"
  },
  {
    "game": 12,
    "away_team": "Phillies",
    "away_code": "VS",
    "home_team": "Fishes",
    "home_code": "CW"
  },
  {
    "game": 12,
    "away_team": "Padres",
    "away_code": "MM",
    "home_team": "Cardinals",
    "home_code": "SE"
  },
  {
    "game": 12,
    "away_team": "Hornets",
    "away_code": "PS",
    "home_team": "Astros",
    "home_code": "BO"
  },
  {
    "game": 12,
    "away_team": "Twins",
    "away_code": "TO",
    "home_team": "Bombers",
    "home_code": "TC"
  },
  {
    "game": 12,
    "away_team": "Monsters",
    "away_code": "YY",
    "home_team": "Royals",
    "home_code": "AX"
  },
  {
    "game": 12,
    "away_team": "Expos",
    "away_code": "LW",
    "home_team": "Melonheads",
    "home_code": "SB"
  },
  {
    "game": 12,
    "away_team": "Giants",
    "away_code": "IT",
    "home_team": "Orioles",
    "home_code": "BB"
  },
  {
    "game": 12,
    "away_team": "Diamondbacks",
    "away_code": "TV",
    "home_team": "Devil Rays",
    "home_code": "MC"
  },
  {
    "game": 12,
    "away_team": "Brewers",
    "away_code": "N8",
    "home_team": "Angels",
    "home_code": "AP"
  },
  {
    "game": 12,
    "away_team": "Indians",
    "away_code": "C8",
    "home_team": "Blue Jays",
    "home_code": "MK"
  },
  {
    "game": 12,
    "away_team": "Rangers",
    "away_code": "WZ",
    "home_team": "Wombats",
    "home_code": "YT"
  },
  {
    "game": 12,
    "away_team": "Mariners",
    "away_code": "JY",
    "home_team": "Yankees",
    "home_code": "ZB"
  },
  {
    "game": 13,
    "away_team": "Phillies",
    "away_code": "VS",
    "home_team": "Twins",
    "home_code": "TO"
  },
  {
    "game": 13,
    "away_team": "Padres",
    "away_code": "MM",
    "home_team": "Expos",
    "home_code": "LW"
  },
  {
    "game": 13,
    "away_team": "Hornets",
    "away_code": "PS",
    "home_team": "Monsters",
    "home_code": "YY"
  },
  {
    "game": 13,
    "away_team": "Bombers",
    "away_code": "TC",
    "home_team": "Fishes",
    "home_code": "CW"
  },
  {
    "game": 13,
    "away_team": "Astros",
    "away_code": "BO",
    "home_team": "Royals",
    "home_code": "AX"
  },
  {
    "game": 13,
    "away_team": "Cardinals",
    "away_code": "SE",
    "home_team": "Melonheads",
    "home_code": "SB"
  },
  {
    "game": 13,
    "away_team": "Giants",
    "away_code": "IT",
    "home_team": "Indians",
    "home_code": "C8"
  },
  {
    "game": 13,
    "away_team": "Diamondbacks",
    "away_code": "TV",
    "home_team": "Mariners",
    "home_code": "JY"
  },
  {
    "game": 13,
    "away_team": "Brewers",
    "away_code": "N8",
    "home_team": "Rangers",
    "home_code": "WZ"
  },
  {
    "game": 13,
    "away_team": "Blue Jays",
    "away_code": "MK",
    "home_team": "Orioles",
    "home_code": "BB"
  },
  {
    "game": 13,
    "away_team": "Angels",
    "away_code": "AP",
    "home_team": "Wombats",
    "home_code": "YT"
  },
  {
    "game": 13,
    "away_team": "Devil Rays",
    "away_code": "MC",
    "home_team": "Yankees",
    "home_code": "ZB"
  },
  {
    "game": 14,
    "away_team": "Padres",
    "away_code": "MM",
    "home_team": "Phillies",
    "home_code": "VS"
  },
  {
    "game": 14,
    "away_team": "Fishes",
    "away_code": "CW",
    "home_team": "Cardinals",
    "home_code": "SE"
  },
  {
    "game": 14,
    "away_team": "Monsters",
    "away_code": "YY",
    "home_team": "Expos",
    "home_code": "LW"
  },
  {
    "game": 14,
    "away_team": "Melonheads",
    "away_code": "SB",
    "home_team": "Royals",
    "home_code": "AX"
  },
  {
    "game": 14,
    "away_team": "Twins",
    "away_code": "TO",
    "home_team": "Hornets",
    "home_code": "PS"
  },
  {
    "game": 14,
    "away_team": "Bombers",
    "away_code": "TC",
    "home_team": "Astros",
    "home_code": "BO"
  },
  {
    "game": 14,
    "away_team": "Diamondbacks",
    "away_code": "TV",
    "home_team": "Giants",
    "home_code": "IT"
  },
  {
    "game": 14,
    "away_team": "Orioles",
    "away_code": "BB",
    "home_team": "Devil Rays",
    "home_code": "MC"
  },
  {
    "game": 14,
    "away_team": "Rangers",
    "away_code": "WZ",
    "home_team": "Mariners",
    "home_code": "JY"
  },
  {
    "game": 14,
    "away_team": "Yankees",
    "away_code": "ZB",
    "home_team": "Wombats",
    "home_code": "YT"
  },
  {
    "game": 14,
    "away_team": "Indians",
    "away_code": "C8",
    "home_team": "Brewers",
    "home_code": "N8"
  },
  {
    "game": 14,
    "away_team": "Blue Jays",
    "away_code": "MK",
    "home_team": "Angels",
    "home_code": "AP"
  }
 ]
module.exports = { s1103teams, s1103schedule};
