// http://www.convertcsv.com/csv-to-json.htm

const s1201teams = {
    "Devil Rays": "<@&496788937705259009>",
    "Wombats": "<@&900907535983329291>",
    "Marlins": "<@&496815324553936898>",
    "Melonheads": "<@&604520363673518119>",
    "Yankees": "<@&668468071861583891>",
    "Royals": "<@&847665786708688936>",
    "Expos": "<@&496713526778265624>",
    "Rockies": "<@&496817127668580362>",
    "Giants": "<@&1071145998656737360>",
    "Diamondbacks": "<@&1224267311993716770>",
    "Twins": "<@&1224263062996123678>",
    "Blue Jays": "<@&1071144968435028049>",
    "Astros": "<@&493888943754838036>",
    "Monsters": "<@&1067545232243183737>",
    "Mariners": "<@&1067670617094094878>",
    "Hornets": "<@&1224784681166438540>",
    "Angels": "<@&702678271749390457>",
    "Rangers": "<@&1067528806765699162>",
    "Tigers": "<@&1224790518819717312>",
    "Reds": "<@&995878927753019412>",
    "Pirates": "<@&448576748767150091>",
    "Mets": "<@&847666608852041778>",
    "Cardinals": "<@&603768487676215316>",
    "Braves": "<@&603768704295108628>",
    
};

//"game": "1",
//"away_team": "As",
//"away_code": "NF",
//"home_team": "Red Sox",
//"home_code": "XD"

const s1201schedule =[
  {
    "game": 1,
    "away_team": "Royals",
    "away_coach": "TC",
    "home_team": "Wombats",
    "home_coach": "NP"
  },
  {
    "game": 1,
    "away_team": "Tigers",
    "away_coach": "AX",
    "home_team": "Giants",
    "home_coach": "IT"
  },
  {
    "game": 1,
    "away_team": "Cardinals",
    "away_coach": "ZB",
    "home_team": "Astros",
    "home_coach": "MC"
  },
  {
    "game": 1,
    "away_team": "Rangers",
    "away_coach": "VS",
    "home_team": "Monsters",
    "home_coach": "M@"
  },
  {
    "game": 1,
    "away_team": "Reds",
    "away_coach": "PZ",
    "home_team": "Devil Rays",
    "home_coach": "AP"
  },
  {
    "game": 1,
    "away_team": "Mariners",
    "away_coach": "CH",
    "home_team": "Yankees",
    "home_coach": "WF"
  },
  {
    "game": 1,
    "away_team": "Twins",
    "away_coach": "EV",
    "home_team": "Rockies",
    "home_coach": "GS"
  },
  {
    "game": 1,
    "away_team": "Blue Jays",
    "away_coach": "MD",
    "home_team": "Pirates",
    "home_coach": "C8"
  },
  {
    "game": 1,
    "away_team": "Melonheads",
    "away_coach": "TW",
    "home_team": "Expos",
    "home_coach": "LW"
  },
  {
    "game": 1,
    "away_team": "Hornets",
    "away_coach": "FF",
    "home_team": "Diamondbacks",
    "home_coach": "OB"
  },
  {
    "game": 1,
    "away_team": "Angels",
    "away_coach": "BO",
    "home_team": "Braves",
    "home_coach": "HZ"
  },
  {
    "game": 1,
    "away_team": "Mets",
    "away_coach": "MK",
    "home_team": "Marlins",
    "home_coach": "LO"
  },
  {
    "game": 2,
    "away_team": "Wombats",
    "away_coach": "NP",
    "home_team": "Rangers",
    "home_coach": "VS"
  },
  {
    "game": 2,
    "away_team": "Astros",
    "away_coach": "MC",
    "home_team": "Royals",
    "home_coach": "TC"
  },
  {
    "game": 2,
    "away_team": "Monsters",
    "away_coach": "M@",
    "home_team": "Mariners",
    "home_coach": "CH"
  },
  {
    "game": 2,
    "away_team": "Cardinals",
    "away_coach": "ZB",
    "home_team": "Reds",
    "home_coach": "PZ"
  },
  {
    "game": 2,
    "away_team": "Devil Rays",
    "away_coach": "AP",
    "home_team": "Tigers",
    "home_coach": "AX"
  },
  {
    "game": 2,
    "away_team": "Giants",
    "away_coach": "IT",
    "home_team": "Yankees",
    "home_coach": "WF"
  },
  {
    "game": 2,
    "away_team": "Expos",
    "away_coach": "LW",
    "home_team": "Rockies",
    "home_coach": "GS"
  },
  {
    "game": 2,
    "away_team": "Blue Jays",
    "away_coach": "MD",
    "home_team": "Hornets",
    "home_coach": "FF"
  },
  {
    "game": 2,
    "away_team": "Mets",
    "away_coach": "MK",
    "home_team": "Twins",
    "home_coach": "EV"
  },
  {
    "game": 2,
    "away_team": "Pirates",
    "away_coach": "C8",
    "home_team": "Braves",
    "home_coach": "HZ"
  },
  {
    "game": 2,
    "away_team": "Melonheads",
    "away_coach": "TW",
    "home_team": "Diamondbacks",
    "home_coach": "OB"
  },
  {
    "game": 2,
    "away_team": "Marlins",
    "away_coach": "LO",
    "home_team": "Angels",
    "home_coach": "BO"
  },
  {
    "game": 3,
    "away_team": "Wombats",
    "away_coach": "NP",
    "home_team": "Tigers",
    "home_coach": "AX"
  },
  {
    "game": 3,
    "away_team": "Royals",
    "away_coach": "TC",
    "home_team": "Giants",
    "home_coach": "IT"
  },
  {
    "game": 3,
    "away_team": "Rangers",
    "away_coach": "VS",
    "home_team": "Cardinals",
    "home_coach": "ZB"
  },
  {
    "game": 3,
    "away_team": "Yankees",
    "away_coach": "WF",
    "home_team": "Monsters",
    "home_coach": "M@"
  },
  {
    "game": 3,
    "away_team": "Reds",
    "away_coach": "PZ",
    "home_team": "Astros",
    "home_coach": "MC"
  },
  {
    "game": 3,
    "away_team": "Mariners",
    "away_coach": "CH",
    "home_team": "Devil Rays",
    "home_coach": "AP"
  },
  {
    "game": 3,
    "away_team": "Rockies",
    "away_coach": "GS",
    "home_team": "Pirates",
    "home_coach": "C8"
  },
  {
    "game": 3,
    "away_team": "Twins",
    "away_coach": "EV",
    "home_team": "Blue Jays",
    "home_coach": "MD"
  },
  {
    "game": 3,
    "away_team": "Marlins",
    "away_coach": "LO",
    "home_team": "Expos",
    "home_coach": "LW"
  },
  {
    "game": 3,
    "away_team": "Braves",
    "away_coach": "HZ",
    "home_team": "Melonheads",
    "home_coach": "TW"
  },
  {
    "game": 3,
    "away_team": "Diamondbacks",
    "away_coach": "OB",
    "home_team": "Mets",
    "home_coach": "MK"
  },
  {
    "game": 3,
    "away_team": "Hornets",
    "away_coach": "FF",
    "home_team": "Angels",
    "home_coach": "BO"
  },
  {
    "game": 4,
    "away_team": "Monsters",
    "away_coach": "M@",
    "home_team": "Wombats",
    "home_coach": "NP"
  },
  {
    "game": 4,
    "away_team": "Tigers",
    "away_coach": "AX",
    "home_team": "Reds",
    "home_coach": "PZ"
  },
  {
    "game": 4,
    "away_team": "Cardinals",
    "away_coach": "ZB",
    "home_team": "Royals",
    "home_coach": "TC"
  },
  {
    "game": 4,
    "away_team": "Giants",
    "away_coach": "IT",
    "home_team": "Mariners",
    "home_coach": "CH"
  },
  {
    "game": 4,
    "away_team": "Astros",
    "away_coach": "MC",
    "home_team": "Rangers",
    "home_coach": "VS"
  },
  {
    "game": 4,
    "away_team": "Devil Rays",
    "away_coach": "AP",
    "home_team": "Yankees",
    "home_coach": "WF"
  },
  {
    "game": 4,
    "away_team": "Angels",
    "away_coach": "BO",
    "home_team": "Rockies",
    "home_coach": "GS"
  },
  {
    "game": 4,
    "away_team": "Pirates",
    "away_coach": "C8",
    "home_team": "Marlins",
    "home_coach": "LO"
  },
  {
    "game": 4,
    "away_team": "Hornets",
    "away_coach": "FF",
    "home_team": "Braves",
    "home_coach": "HZ"
  },
  {
    "game": 4,
    "away_team": "Mets",
    "away_coach": "MK",
    "home_team": "Expos",
    "home_coach": "LW"
  },
  {
    "game": 4,
    "away_team": "Blue Jays",
    "away_coach": "MD",
    "home_team": "Diamondbacks",
    "home_coach": "OB"
  },
  {
    "game": 4,
    "away_team": "Melonheads",
    "away_coach": "TW",
    "home_team": "Twins",
    "home_coach": "EV"
  },
  {
    "game": 5,
    "away_team": "Yankees",
    "away_coach": "WF",
    "home_team": "Wombats",
    "home_coach": "NP"
  },
  {
    "game": 5,
    "away_team": "Giants",
    "away_coach": "IT",
    "home_team": "Rangers",
    "home_coach": "VS"
  },
  {
    "game": 5,
    "away_team": "Reds",
    "away_coach": "PZ",
    "home_team": "Monsters",
    "home_coach": "M@"
  },
  {
    "game": 5,
    "away_team": "Mariners",
    "away_coach": "CH",
    "home_team": "Cardinals",
    "home_coach": "ZB"
  },
  {
    "game": 5,
    "away_team": "Tigers",
    "away_coach": "AX",
    "home_team": "Astros",
    "home_coach": "MC"
  },
  {
    "game": 5,
    "away_team": "Devil Rays",
    "away_coach": "AP",
    "home_team": "Royals",
    "home_coach": "TC"
  },
  {
    "game": 5,
    "away_team": "Rockies",
    "away_coach": "GS",
    "home_team": "Mets",
    "home_coach": "MK"
  },
  {
    "game": 5,
    "away_team": "Braves",
    "away_coach": "HZ",
    "home_team": "Blue Jays",
    "home_coach": "MD"
  },
  {
    "game": 5,
    "away_team": "Twins",
    "away_coach": "EV",
    "home_team": "Expos",
    "home_coach": "LW"
  },
  {
    "game": 5,
    "away_team": "Pirates",
    "away_coach": "C8",
    "home_team": "Hornets",
    "home_coach": "FF"
  },
  {
    "game": 5,
    "away_team": "Diamondbacks",
    "away_coach": "OB",
    "home_team": "Angels",
    "home_coach": "BO"
  },
  {
    "game": 5,
    "away_team": "Marlins",
    "away_coach": "LO",
    "home_team": "Melonheads",
    "home_coach": "TW"
  },
  {
    "game": 6,
    "away_team": "Wombats",
    "away_coach": "NP",
    "home_team": "Mariners",
    "home_coach": "CH"
  },
  {
    "game": 6,
    "away_team": "Monsters",
    "away_coach": "M@",
    "home_team": "Giants",
    "home_coach": "IT"
  },
  {
    "game": 6,
    "away_team": "Cardinals",
    "away_coach": "ZB",
    "home_team": "Tigers",
    "home_coach": "AX"
  },
  {
    "game": 6,
    "away_team": "Royals",
    "away_coach": "TC",
    "home_team": "Reds",
    "home_coach": "PZ"
  },
  {
    "game": 6,
    "away_team": "Rangers",
    "away_coach": "VS",
    "home_team": "Yankees",
    "home_coach": "WF"
  },
  {
    "game": 6,
    "away_team": "Astros",
    "away_coach": "MC",
    "home_team": "Devil Rays",
    "home_coach": "AP"
  },
  {
    "game": 6,
    "away_team": "Pirates",
    "away_coach": "C8",
    "home_team": "Rockies",
    "home_coach": "GS"
  },
  {
    "game": 6,
    "away_team": "Blue Jays",
    "away_coach": "MD",
    "home_team": "Twins",
    "home_coach": "EV"
  },
  {
    "game": 6,
    "away_team": "Expos",
    "away_coach": "LW",
    "home_team": "Angels",
    "home_coach": "BO"
  },
  {
    "game": 6,
    "away_team": "Diamondbacks",
    "away_coach": "OB",
    "home_team": "Braves",
    "home_coach": "HZ"
  },
  {
    "game": 6,
    "away_team": "Mets",
    "away_coach": "MK",
    "home_team": "Melonheads",
    "home_coach": "TW"
  },
  {
    "game": 6,
    "away_team": "Hornets",
    "away_coach": "FF",
    "home_team": "Marlins",
    "home_coach": "LO"
  },
  {
    "game": 7,
    "away_team": "Wombats",
    "away_coach": "NP",
    "home_team": "Devil Rays",
    "home_coach": "AP"
  },
  {
    "game": 7,
    "away_team": "Astros",
    "away_coach": "MC",
    "home_team": "Giants",
    "home_coach": "IT"
  },
  {
    "game": 7,
    "away_team": "Monsters",
    "away_coach": "M@",
    "home_team": "Cardinals",
    "home_coach": "ZB"
  },
  {
    "game": 7,
    "away_team": "Mariners",
    "away_coach": "CH",
    "home_team": "Reds",
    "home_coach": "PZ"
  },
  {
    "game": 7,
    "away_team": "Rangers",
    "away_coach": "VS",
    "home_team": "Royals",
    "home_coach": "TC"
  },
  {
    "game": 7,
    "away_team": "Yankees",
    "away_coach": "WF",
    "home_team": "Tigers",
    "home_coach": "AX"
  },
  {
    "game": 7,
    "away_team": "Rockies",
    "away_coach": "GS",
    "home_team": "Diamondbacks",
    "home_coach": "OB"
  },
  {
    "game": 7,
    "away_team": "Angels",
    "away_coach": "BO",
    "home_team": "Pirates",
    "home_coach": "C8"
  },
  {
    "game": 7,
    "away_team": "Braves",
    "away_coach": "HZ",
    "home_team": "Hornets",
    "home_coach": "FF"
  },
  {
    "game": 7,
    "away_team": "Expos",
    "away_coach": "LW",
    "home_team": "Mets",
    "home_coach": "MK"
  },
  {
    "game": 7,
    "away_team": "Melonheads",
    "away_coach": "TW",
    "home_team": "Blue Jays",
    "home_coach": "MD"
  },
  {
    "game": 7,
    "away_team": "Twins",
    "away_coach": "EV",
    "home_team": "Marlins",
    "home_coach": "LO"
  },
  {
    "game": 8,
    "away_team": "Giants",
    "away_coach": "IT",
    "home_team": "Wombats",
    "home_coach": "NP"
  },
  {
    "game": 8,
    "away_team": "Tigers",
    "away_coach": "AX",
    "home_team": "Royals",
    "home_coach": "TC"
  },
  {
    "game": 8,
    "away_team": "Devil Rays",
    "away_coach": "AP",
    "home_team": "Cardinals",
    "home_coach": "ZB"
  },
  {
    "game": 8,
    "away_team": "Mariners",
    "away_coach": "CH",
    "home_team": "Rangers",
    "home_coach": "VS"
  },
  {
    "game": 8,
    "away_team": "Astros",
    "away_coach": "MC",
    "home_team": "Monsters",
    "home_coach": "M@"
  },
  {
    "game": 8,
    "away_team": "Reds",
    "away_coach": "PZ",
    "home_team": "Yankees",
    "home_coach": "WF"
  },
  {
    "game": 8,
    "away_team": "Rockies",
    "away_coach": "GS",
    "home_team": "Blue Jays",
    "home_coach": "MD"
  },
  {
    "game": 8,
    "away_team": "Pirates",
    "away_coach": "C8",
    "home_team": "Twins",
    "home_coach": "EV"
  },
  {
    "game": 8,
    "away_team": "Diamondbacks",
    "away_coach": "OB",
    "home_team": "Expos",
    "home_coach": "LW"
  },
  {
    "game": 8,
    "away_team": "Marlins",
    "away_coach": "LO",
    "home_team": "Braves",
    "home_coach": "HZ"
  },
  {
    "game": 8,
    "away_team": "Mets",
    "away_coach": "MK",
    "home_team": "Angels",
    "home_coach": "BO"
  },
  {
    "game": 8,
    "away_team": "Hornets",
    "away_coach": "FF",
    "home_team": "Melonheads",
    "home_coach": "TW"
  },
  {
    "game": 9,
    "away_team": "Cardinals",
    "away_coach": "ZB",
    "home_team": "Wombats",
    "home_coach": "NP"
  },
  {
    "game": 9,
    "away_team": "Tigers",
    "away_coach": "AX",
    "home_team": "Mariners",
    "home_coach": "CH"
  },
  {
    "game": 9,
    "away_team": "Reds",
    "away_coach": "PZ",
    "home_team": "Giants",
    "home_coach": "IT"
  },
  {
    "game": 9,
    "away_team": "Royals",
    "away_coach": "TC",
    "home_team": "Monsters",
    "home_coach": "M@"
  },
  {
    "game": 9,
    "away_team": "Devil Rays",
    "away_coach": "AP",
    "home_team": "Rangers",
    "home_coach": "VS"
  },
  {
    "game": 9,
    "away_team": "Yankees",
    "away_coach": "WF",
    "home_team": "Astros",
    "home_coach": "MC"
  },
  {
    "game": 9,
    "away_team": "Braves",
    "away_coach": "HZ",
    "home_team": "Rockies",
    "home_coach": "GS"
  },
  {
    "game": 9,
    "away_team": "Blue Jays",
    "away_coach": "MD",
    "home_team": "Mets",
    "home_coach": "MK"
  },
  {
    "game": 9,
    "away_team": "Expos",
    "away_coach": "LW",
    "home_team": "Pirates",
    "home_coach": "C8"
  },
  {
    "game": 9,
    "away_team": "Twins",
    "away_coach": "EV",
    "home_team": "Hornets",
    "home_coach": "FF"
  },
  {
    "game": 9,
    "away_team": "Angels",
    "away_coach": "BO",
    "home_team": "Diamondbacks",
    "home_coach": "OB"
  },
  {
    "game": 9,
    "away_team": "Melonheads",
    "away_coach": "TW",
    "home_team": "Marlins",
    "home_coach": "LO"
  },
  {
    "game": 10,
    "away_team": "Wombats",
    "away_coach": "NP",
    "home_team": "Royals",
    "home_coach": "TC"
  },
  {
    "game": 10,
    "away_team": "Giants",
    "away_coach": "IT",
    "home_team": "Tigers",
    "home_coach": "AX"
  },
  {
    "game": 10,
    "away_team": "Yankees",
    "away_coach": "WF",
    "home_team": "Cardinals",
    "home_coach": "ZB"
  },
  {
    "game": 10,
    "away_team": "Monsters",
    "away_coach": "M@",
    "home_team": "Devil Rays",
    "home_coach": "AP"
  },
  {
    "game": 10,
    "away_team": "Rangers",
    "away_coach": "VS",
    "home_team": "Reds",
    "home_coach": "PZ"
  },
  {
    "game": 10,
    "away_team": "Mariners",
    "away_coach": "CH",
    "home_team": "Astros",
    "home_coach": "MC"
  },
  {
    "game": 10,
    "away_team": "Marlins",
    "away_coach": "LO",
    "home_team": "Rockies",
    "home_coach": "GS"
  },
  {
    "game": 10,
    "away_team": "Twins",
    "away_coach": "EV",
    "home_team": "Diamondbacks",
    "home_coach": "OB"
  },
  {
    "game": 10,
    "away_team": "Mets",
    "away_coach": "MK",
    "home_team": "Braves",
    "home_coach": "HZ"
  },
  {
    "game": 10,
    "away_team": "Hornets",
    "away_coach": "FF",
    "home_team": "Expos",
    "home_coach": "LW"
  },
  {
    "game": 10,
    "away_team": "Blue Jays",
    "away_coach": "MD",
    "home_team": "Angels",
    "home_coach": "BO"
  },
  {
    "game": 10,
    "away_team": "Melonheads",
    "away_coach": "TW",
    "home_team": "Pirates",
    "home_coach": "C8"
  },
  {
    "game": 11,
    "away_team": "Astros",
    "away_coach": "MC",
    "home_team": "Wombats",
    "home_coach": "NP"
  },
  {
    "game": 11,
    "away_team": "Royals",
    "away_coach": "TC",
    "home_team": "Yankees",
    "home_coach": "WF"
  },
  {
    "game": 11,
    "away_team": "Mariners",
    "away_coach": "CH",
    "home_team": "Monsters",
    "home_coach": "M@"
  },
  {
    "game": 11,
    "away_team": "Reds",
    "away_coach": "PZ",
    "home_team": "Cardinals",
    "home_coach": "ZB"
  },
  {
    "game": 11,
    "away_team": "Tigers",
    "away_coach": "AX",
    "home_team": "Rangers",
    "home_coach": "VS"
  },
  {
    "game": 11,
    "away_team": "Devil Rays",
    "away_coach": "AP",
    "home_team": "Giants",
    "home_coach": "IT"
  },
  {
    "game": 11,
    "away_team": "Rockies",
    "away_coach": "GS",
    "home_team": "Hornets",
    "home_coach": "FF"
  },
  {
    "game": 11,
    "away_team": "Braves",
    "away_coach": "HZ",
    "home_team": "Twins",
    "home_coach": "EV"
  },
  {
    "game": 11,
    "away_team": "Expos",
    "away_coach": "LW",
    "home_team": "Blue Jays",
    "home_coach": "MD"
  },
  {
    "game": 11,
    "away_team": "Pirates",
    "away_coach": "C8",
    "home_team": "Mets",
    "home_coach": "MK"
  },
  {
    "game": 11,
    "away_team": "Diamondbacks",
    "away_coach": "OB",
    "home_team": "Marlins",
    "home_coach": "LO"
  },
  {
    "game": 11,
    "away_team": "Angels",
    "away_coach": "BO",
    "home_team": "Melonheads",
    "home_coach": "TW"
  },
  {
    "game": 12,
    "away_team": "Wombats",
    "away_coach": "NP",
    "home_team": "Reds",
    "home_coach": "PZ"
  },
  {
    "game": 12,
    "away_team": "Monsters",
    "away_coach": "M@",
    "home_team": "Tigers",
    "home_coach": "AX"
  },
  {
    "game": 12,
    "away_team": "Giants",
    "away_coach": "IT",
    "home_team": "Cardinals",
    "home_coach": "ZB"
  },
  {
    "game": 12,
    "away_team": "Royals",
    "away_coach": "TC",
    "home_team": "Mariners",
    "home_coach": "CH"
  },
  {
    "game": 12,
    "away_team": "Rangers",
    "away_coach": "VS",
    "home_team": "Astros",
    "home_coach": "MC"
  },
  {
    "game": 12,
    "away_team": "Yankees",
    "away_coach": "WF",
    "home_team": "Devil Rays",
    "home_coach": "AP"
  },
  {
    "game": 12,
    "away_team": "Rockies",
    "away_coach": "GS",
    "home_team": "Melonheads",
    "home_coach": "TW"
  },
  {
    "game": 12,
    "away_team": "Angels",
    "away_coach": "BO",
    "home_team": "Twins",
    "home_coach": "EV"
  },
  {
    "game": 12,
    "away_team": "Braves",
    "away_coach": "HZ",
    "home_team": "Expos",
    "home_coach": "LW"
  },
  {
    "game": 12,
    "away_team": "Hornets",
    "away_coach": "FF",
    "home_team": "Mets",
    "home_coach": "MK"
  },
  {
    "game": 12,
    "away_team": "Diamondbacks",
    "away_coach": "OB",
    "home_team": "Pirates",
    "home_coach": "C8"
  },
  {
    "game": 12,
    "away_team": "Marlins",
    "away_coach": "LO",
    "home_team": "Blue Jays",
    "home_coach": "MD"
  },
  {
    "game": 13,
    "away_team": "Tigers",
    "away_coach": "AX",
    "home_team": "Wombats",
    "home_coach": "NP"
  },
  {
    "game": 13,
    "away_team": "Giants",
    "away_coach": "IT",
    "home_team": "Royals",
    "home_coach": "TC"
  },
  {
    "game": 13,
    "away_team": "Monsters",
    "away_coach": "M@",
    "home_team": "Reds",
    "home_coach": "PZ"
  },
  {
    "game": 13,
    "away_team": "Cardinals",
    "away_coach": "ZB",
    "home_team": "Mariners",
    "home_coach": "CH"
  },
  {
    "game": 13,
    "away_team": "Yankees",
    "away_coach": "WF",
    "home_team": "Rangers",
    "home_coach": "VS"
  },
  {
    "game": 13,
    "away_team": "Devil Rays",
    "away_coach": "AP",
    "home_team": "Astros",
    "home_coach": "MC"
  },
  {
    "game": 13,
    "away_team": "Blue Jays",
    "away_coach": "MD",
    "home_team": "Rockies",
    "home_coach": "GS"
  },
  {
    "game": 13,
    "away_team": "Twins",
    "away_coach": "EV",
    "home_team": "Pirates",
    "home_coach": "C8"
  },
  {
    "game": 13,
    "away_team": "Braves",
    "away_coach": "HZ",
    "home_team": "Mets",
    "home_coach": "MK"
  },
  {
    "game": 13,
    "away_team": "Expos",
    "away_coach": "LW",
    "home_team": "Hornets",
    "home_coach": "FF"
  },
  {
    "game": 13,
    "away_team": "Marlins",
    "away_coach": "LO",
    "home_team": "Diamondbacks",
    "home_coach": "OB"
  },
  {
    "game": 13,
    "away_team": "Melonheads",
    "away_coach": "TW",
    "home_team": "Angels",
    "home_coach": "BO"
  },
  {
    "game": 14,
    "away_team": "Wombats",
    "away_coach": "NP",
    "home_team": "Giants",
    "home_coach": "IT"
  },
  {
    "game": 14,
    "away_team": "Royals",
    "away_coach": "TC",
    "home_team": "Tigers",
    "home_coach": "AX"
  },
  {
    "game": 14,
    "away_team": "Cardinals",
    "away_coach": "ZB",
    "home_team": "Monsters",
    "home_coach": "M@"
  },
  {
    "game": 14,
    "away_team": "Reds",
    "away_coach": "PZ",
    "home_team": "Mariners",
    "home_coach": "CH"
  },
  {
    "game": 14,
    "away_team": "Rangers",
    "away_coach": "VS",
    "home_team": "Devil Rays",
    "home_coach": "AP"
  },
  {
    "game": 14,
    "away_team": "Astros",
    "away_coach": "MC",
    "home_team": "Yankees",
    "home_coach": "WF"
  },
  {
    "game": 14,
    "away_team": "Rockies",
    "away_coach": "GS",
    "home_team": "Twins",
    "home_coach": "EV"
  },
  {
    "game": 14,
    "away_team": "Pirates",
    "away_coach": "C8",
    "home_team": "Blue Jays",
    "home_coach": "MD"
  },
  {
    "game": 14,
    "away_team": "Expos",
    "away_coach": "LW",
    "home_team": "Braves",
    "home_coach": "HZ"
  },
  {
    "game": 14,
    "away_team": "Mets",
    "away_coach": "MK",
    "home_team": "Hornets",
    "home_coach": "FF"
  },
  {
    "game": 14,
    "away_team": "Diamondbacks",
    "away_coach": "OB",
    "home_team": "Melonheads",
    "home_coach": "TW"
  },
  {
    "game": 14,
    "away_team": "Angels",
    "away_coach": "BO",
    "home_team": "Marlins",
    "home_coach": "LO"
  }
 ]
module.exports = { s1201teams, s1201schedule};
