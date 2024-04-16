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
      "away_code": "TC",
      "home_team": "Wombats",
      "home_code": "NP"
    },
    {
      "game": 1,
      "away_team": "Tigers",
      "away_code": "AX",
      "home_team": "Giants",
      "home_code": "IT"
    },
    {
      "game": 1,
      "away_team": "Cardinals",
      "away_code": "ZB",
      "home_team": "Astros",
      "home_code": "MC"
    },
    {
      "game": 1,
      "away_team": "Rangers",
      "away_code": "VS",
      "home_team": "Monsters",
      "home_code": "M@"
    },
    {
      "game": 1,
      "away_team": "Reds",
      "away_code": "PZ",
      "home_team": "Devil Rays",
      "home_code": "AP"
    },
    {
      "game": 1,
      "away_team": "Mariners",
      "away_code": "CH",
      "home_team": "Yankees",
      "home_code": "WF"
    },
    {
      "game": 1,
      "away_team": "Twins",
      "away_code": "EV",
      "home_team": "Rockies",
      "home_code": "GS"
    },
    {
      "game": 1,
      "away_team": "Blue Jays",
      "away_code": "MD",
      "home_team": "Pirates",
      "home_code": "C8"
    },
    {
      "game": 1,
      "away_team": "Melonheads",
      "away_code": "TW",
      "home_team": "Expos",
      "home_code": "LW"
    },
    {
      "game": 1,
      "away_team": "Hornets",
      "away_code": "FF",
      "home_team": "Diamondbacks",
      "home_code": "OB"
    },
    {
      "game": 1,
      "away_team": "Angels",
      "away_code": "BO",
      "home_team": "Braves",
      "home_code": "HZ"
    },
    {
      "game": 1,
      "away_team": "Mets",
      "away_code": "MK",
      "home_team": "Marlins",
      "home_code": "LO"
    },
    {
      "game": 2,
      "away_team": "Wombats",
      "away_code": "NP",
      "home_team": "Rangers",
      "home_code": "VS"
    },
    {
      "game": 2,
      "away_team": "Astros",
      "away_code": "MC",
      "home_team": "Royals",
      "home_code": "TC"
    },
    {
      "game": 2,
      "away_team": "Monsters",
      "away_code": "M@",
      "home_team": "Mariners",
      "home_code": "CH"
    },
    {
      "game": 2,
      "away_team": "Cardinals",
      "away_code": "ZB",
      "home_team": "Reds",
      "home_code": "PZ"
    },
    {
      "game": 2,
      "away_team": "Devil Rays",
      "away_code": "AP",
      "home_team": "Tigers",
      "home_code": "AX"
    },
    {
      "game": 2,
      "away_team": "Giants",
      "away_code": "IT",
      "home_team": "Yankees",
      "home_code": "WF"
    },
    {
      "game": 2,
      "away_team": "Expos",
      "away_code": "LW",
      "home_team": "Rockies",
      "home_code": "GS"
    },
    {
      "game": 2,
      "away_team": "Blue Jays",
      "away_code": "MD",
      "home_team": "Hornets",
      "home_code": "FF"
    },
    {
      "game": 2,
      "away_team": "Mets",
      "away_code": "MK",
      "home_team": "Twins",
      "home_code": "EV"
    },
    {
      "game": 2,
      "away_team": "Pirates",
      "away_code": "C8",
      "home_team": "Braves",
      "home_code": "HZ"
    },
    {
      "game": 2,
      "away_team": "Melonheads",
      "away_code": "TW",
      "home_team": "Diamondbacks",
      "home_code": "OB"
    },
    {
      "game": 2,
      "away_team": "Marlins",
      "away_code": "LO",
      "home_team": "Angels",
      "home_code": "BO"
    },
    {
      "game": 3,
      "away_team": "Wombats",
      "away_code": "NP",
      "home_team": "Tigers",
      "home_code": "AX"
    },
    {
      "game": 3,
      "away_team": "Royals",
      "away_code": "TC",
      "home_team": "Giants",
      "home_code": "IT"
    },
    {
      "game": 3,
      "away_team": "Rangers",
      "away_code": "VS",
      "home_team": "Cardinals",
      "home_code": "ZB"
    },
    {
      "game": 3,
      "away_team": "Yankees",
      "away_code": "WF",
      "home_team": "Monsters",
      "home_code": "M@"
    },
    {
      "game": 3,
      "away_team": "Reds",
      "away_code": "PZ",
      "home_team": "Astros",
      "home_code": "MC"
    },
    {
      "game": 3,
      "away_team": "Mariners",
      "away_code": "CH",
      "home_team": "Devil Rays",
      "home_code": "AP"
    },
    {
      "game": 3,
      "away_team": "Rockies",
      "away_code": "GS",
      "home_team": "Pirates",
      "home_code": "C8"
    },
    {
      "game": 3,
      "away_team": "Twins",
      "away_code": "EV",
      "home_team": "Blue Jays",
      "home_code": "MD"
    },
    {
      "game": 3,
      "away_team": "Marlins",
      "away_code": "LO",
      "home_team": "Expos",
      "home_code": "LW"
    },
    {
      "game": 3,
      "away_team": "Braves",
      "away_code": "HZ",
      "home_team": "Melonheads",
      "home_code": "TW"
    },
    {
      "game": 3,
      "away_team": "Diamondbacks",
      "away_code": "OB",
      "home_team": "Mets",
      "home_code": "MK"
    },
    {
      "game": 3,
      "away_team": "Hornets",
      "away_code": "FF",
      "home_team": "Angels",
      "home_code": "BO"
    },
    {
      "game": 4,
      "away_team": "Monsters",
      "away_code": "M@",
      "home_team": "Wombats",
      "home_code": "NP"
    },
    {
      "game": 4,
      "away_team": "Tigers",
      "away_code": "AX",
      "home_team": "Reds",
      "home_code": "PZ"
    },
    {
      "game": 4,
      "away_team": "Cardinals",
      "away_code": "ZB",
      "home_team": "Royals",
      "home_code": "TC"
    },
    {
      "game": 4,
      "away_team": "Giants",
      "away_code": "IT",
      "home_team": "Mariners",
      "home_code": "CH"
    },
    {
      "game": 4,
      "away_team": "Astros",
      "away_code": "MC",
      "home_team": "Rangers",
      "home_code": "VS"
    },
    {
      "game": 4,
      "away_team": "Devil Rays",
      "away_code": "AP",
      "home_team": "Yankees",
      "home_code": "WF"
    },
    {
      "game": 4,
      "away_team": "Angels",
      "away_code": "BO",
      "home_team": "Rockies",
      "home_code": "GS"
    },
    {
      "game": 4,
      "away_team": "Pirates",
      "away_code": "C8",
      "home_team": "Marlins",
      "home_code": "LO"
    },
    {
      "game": 4,
      "away_team": "Hornets",
      "away_code": "FF",
      "home_team": "Braves",
      "home_code": "HZ"
    },
    {
      "game": 4,
      "away_team": "Mets",
      "away_code": "MK",
      "home_team": "Expos",
      "home_code": "LW"
    },
    {
      "game": 4,
      "away_team": "Blue Jays",
      "away_code": "MD",
      "home_team": "Diamondbacks",
      "home_code": "OB"
    },
    {
      "game": 4,
      "away_team": "Melonheads",
      "away_code": "TW",
      "home_team": "Twins",
      "home_code": "EV"
    },
    {
      "game": 5,
      "away_team": "Yankees",
      "away_code": "WF",
      "home_team": "Wombats",
      "home_code": "NP"
    },
    {
      "game": 5,
      "away_team": "Giants",
      "away_code": "IT",
      "home_team": "Rangers",
      "home_code": "VS"
    },
    {
      "game": 5,
      "away_team": "Reds",
      "away_code": "PZ",
      "home_team": "Monsters",
      "home_code": "M@"
    },
    {
      "game": 5,
      "away_team": "Mariners",
      "away_code": "CH",
      "home_team": "Cardinals",
      "home_code": "ZB"
    },
    {
      "game": 5,
      "away_team": "Tigers",
      "away_code": "AX",
      "home_team": "Astros",
      "home_code": "MC"
    },
    {
      "game": 5,
      "away_team": "Devil Rays",
      "away_code": "AP",
      "home_team": "Royals",
      "home_code": "TC"
    },
    {
      "game": 5,
      "away_team": "Rockies",
      "away_code": "GS",
      "home_team": "Mets",
      "home_code": "MK"
    },
    {
      "game": 5,
      "away_team": "Braves",
      "away_code": "HZ",
      "home_team": "Blue Jays",
      "home_code": "MD"
    },
    {
      "game": 5,
      "away_team": "Twins",
      "away_code": "EV",
      "home_team": "Expos",
      "home_code": "LW"
    },
    {
      "game": 5,
      "away_team": "Pirates",
      "away_code": "C8",
      "home_team": "Hornets",
      "home_code": "FF"
    },
    {
      "game": 5,
      "away_team": "Diamondbacks",
      "away_code": "OB",
      "home_team": "Angels",
      "home_code": "BO"
    },
    {
      "game": 5,
      "away_team": "Marlins",
      "away_code": "LO",
      "home_team": "Melonheads",
      "home_code": "TW"
    },
    {
      "game": 6,
      "away_team": "Wombats",
      "away_code": "NP",
      "home_team": "Mariners",
      "home_code": "CH"
    },
    {
      "game": 6,
      "away_team": "Monsters",
      "away_code": "M@",
      "home_team": "Giants",
      "home_code": "IT"
    },
    {
      "game": 6,
      "away_team": "Cardinals",
      "away_code": "ZB",
      "home_team": "Tigers",
      "home_code": "AX"
    },
    {
      "game": 6,
      "away_team": "Royals",
      "away_code": "TC",
      "home_team": "Reds",
      "home_code": "PZ"
    },
    {
      "game": 6,
      "away_team": "Rangers",
      "away_code": "VS",
      "home_team": "Yankees",
      "home_code": "WF"
    },
    {
      "game": 6,
      "away_team": "Astros",
      "away_code": "MC",
      "home_team": "Devil Rays",
      "home_code": "AP"
    },
    {
      "game": 6,
      "away_team": "Pirates",
      "away_code": "C8",
      "home_team": "Rockies",
      "home_code": "GS"
    },
    {
      "game": 6,
      "away_team": "Blue Jays",
      "away_code": "MD",
      "home_team": "Twins",
      "home_code": "EV"
    },
    {
      "game": 6,
      "away_team": "Expos",
      "away_code": "LW",
      "home_team": "Angels",
      "home_code": "BO"
    },
    {
      "game": 6,
      "away_team": "Diamondbacks",
      "away_code": "OB",
      "home_team": "Braves",
      "home_code": "HZ"
    },
    {
      "game": 6,
      "away_team": "Mets",
      "away_code": "MK",
      "home_team": "Melonheads",
      "home_code": "TW"
    },
    {
      "game": 6,
      "away_team": "Hornets",
      "away_code": "FF",
      "home_team": "Marlins",
      "home_code": "LO"
    },
    {
      "game": 7,
      "away_team": "Wombats",
      "away_code": "NP",
      "home_team": "Devil Rays",
      "home_code": "AP"
    },
    {
      "game": 7,
      "away_team": "Astros",
      "away_code": "MC",
      "home_team": "Giants",
      "home_code": "IT"
    },
    {
      "game": 7,
      "away_team": "Monsters",
      "away_code": "M@",
      "home_team": "Cardinals",
      "home_code": "ZB"
    },
    {
      "game": 7,
      "away_team": "Mariners",
      "away_code": "CH",
      "home_team": "Reds",
      "home_code": "PZ"
    },
    {
      "game": 7,
      "away_team": "Rangers",
      "away_code": "VS",
      "home_team": "Royals",
      "home_code": "TC"
    },
    {
      "game": 7,
      "away_team": "Yankees",
      "away_code": "WF",
      "home_team": "Tigers",
      "home_code": "AX"
    },
    {
      "game": 7,
      "away_team": "Rockies",
      "away_code": "GS",
      "home_team": "Diamondbacks",
      "home_code": "OB"
    },
    {
      "game": 7,
      "away_team": "Angels",
      "away_code": "BO",
      "home_team": "Pirates",
      "home_code": "C8"
    },
    {
      "game": 7,
      "away_team": "Braves",
      "away_code": "HZ",
      "home_team": "Hornets",
      "home_code": "FF"
    },
    {
      "game": 7,
      "away_team": "Expos",
      "away_code": "LW",
      "home_team": "Mets",
      "home_code": "MK"
    },
    {
      "game": 7,
      "away_team": "Melonheads",
      "away_code": "TW",
      "home_team": "Blue Jays",
      "home_code": "MD"
    },
    {
      "game": 7,
      "away_team": "Twins",
      "away_code": "EV",
      "home_team": "Marlins",
      "home_code": "LO"
    },
    {
      "game": 8,
      "away_team": "Giants",
      "away_code": "IT",
      "home_team": "Wombats",
      "home_code": "NP"
    },
    {
      "game": 8,
      "away_team": "Tigers",
      "away_code": "AX",
      "home_team": "Royals",
      "home_code": "TC"
    },
    {
      "game": 8,
      "away_team": "Devil Rays",
      "away_code": "AP",
      "home_team": "Cardinals",
      "home_code": "ZB"
    },
    {
      "game": 8,
      "away_team": "Mariners",
      "away_code": "CH",
      "home_team": "Rangers",
      "home_code": "VS"
    },
    {
      "game": 8,
      "away_team": "Astros",
      "away_code": "MC",
      "home_team": "Monsters",
      "home_code": "M@"
    },
    {
      "game": 8,
      "away_team": "Reds",
      "away_code": "PZ",
      "home_team": "Yankees",
      "home_code": "WF"
    },
    {
      "game": 8,
      "away_team": "Rockies",
      "away_code": "GS",
      "home_team": "Blue Jays",
      "home_code": "MD"
    },
    {
      "game": 8,
      "away_team": "Pirates",
      "away_code": "C8",
      "home_team": "Twins",
      "home_code": "EV"
    },
    {
      "game": 8,
      "away_team": "Diamondbacks",
      "away_code": "OB",
      "home_team": "Expos",
      "home_code": "LW"
    },
    {
      "game": 8,
      "away_team": "Marlins",
      "away_code": "LO",
      "home_team": "Braves",
      "home_code": "HZ"
    },
    {
      "game": 8,
      "away_team": "Mets",
      "away_code": "MK",
      "home_team": "Angels",
      "home_code": "BO"
    },
    {
      "game": 8,
      "away_team": "Hornets",
      "away_code": "FF",
      "home_team": "Melonheads",
      "home_code": "TW"
    },
    {
      "game": 9,
      "away_team": "Cardinals",
      "away_code": "ZB",
      "home_team": "Wombats",
      "home_code": "NP"
    },
    {
      "game": 9,
      "away_team": "Tigers",
      "away_code": "AX",
      "home_team": "Mariners",
      "home_code": "CH"
    },
    {
      "game": 9,
      "away_team": "Reds",
      "away_code": "PZ",
      "home_team": "Giants",
      "home_code": "IT"
    },
    {
      "game": 9,
      "away_team": "Royals",
      "away_code": "TC",
      "home_team": "Monsters",
      "home_code": "M@"
    },
    {
      "game": 9,
      "away_team": "Devil Rays",
      "away_code": "AP",
      "home_team": "Rangers",
      "home_code": "VS"
    },
    {
      "game": 9,
      "away_team": "Yankees",
      "away_code": "WF",
      "home_team": "Astros",
      "home_code": "MC"
    },
    {
      "game": 9,
      "away_team": "Braves",
      "away_code": "HZ",
      "home_team": "Rockies",
      "home_code": "GS"
    },
    {
      "game": 9,
      "away_team": "Blue Jays",
      "away_code": "MD",
      "home_team": "Mets",
      "home_code": "MK"
    },
    {
      "game": 9,
      "away_team": "Expos",
      "away_code": "LW",
      "home_team": "Pirates",
      "home_code": "C8"
    },
    {
      "game": 9,
      "away_team": "Twins",
      "away_code": "EV",
      "home_team": "Hornets",
      "home_code": "FF"
    },
    {
      "game": 9,
      "away_team": "Angels",
      "away_code": "BO",
      "home_team": "Diamondbacks",
      "home_code": "OB"
    },
    {
      "game": 9,
      "away_team": "Melonheads",
      "away_code": "TW",
      "home_team": "Marlins",
      "home_code": "LO"
    },
    {
      "game": 10,
      "away_team": "Wombats",
      "away_code": "NP",
      "home_team": "Royals",
      "home_code": "TC"
    },
    {
      "game": 10,
      "away_team": "Giants",
      "away_code": "IT",
      "home_team": "Tigers",
      "home_code": "AX"
    },
    {
      "game": 10,
      "away_team": "Yankees",
      "away_code": "WF",
      "home_team": "Cardinals",
      "home_code": "ZB"
    },
    {
      "game": 10,
      "away_team": "Monsters",
      "away_code": "M@",
      "home_team": "Devil Rays",
      "home_code": "AP"
    },
    {
      "game": 10,
      "away_team": "Rangers",
      "away_code": "VS",
      "home_team": "Reds",
      "home_code": "PZ"
    },
    {
      "game": 10,
      "away_team": "Mariners",
      "away_code": "CH",
      "home_team": "Astros",
      "home_code": "MC"
    },
    {
      "game": 10,
      "away_team": "Marlins",
      "away_code": "LO",
      "home_team": "Rockies",
      "home_code": "GS"
    },
    {
      "game": 10,
      "away_team": "Twins",
      "away_code": "EV",
      "home_team": "Diamondbacks",
      "home_code": "OB"
    },
    {
      "game": 10,
      "away_team": "Mets",
      "away_code": "MK",
      "home_team": "Braves",
      "home_code": "HZ"
    },
    {
      "game": 10,
      "away_team": "Hornets",
      "away_code": "FF",
      "home_team": "Expos",
      "home_code": "LW"
    },
    {
      "game": 10,
      "away_team": "Blue Jays",
      "away_code": "MD",
      "home_team": "Angels",
      "home_code": "BO"
    },
    {
      "game": 10,
      "away_team": "Melonheads",
      "away_code": "TW",
      "home_team": "Pirates",
      "home_code": "C8"
    },
    {
      "game": 11,
      "away_team": "Astros",
      "away_code": "MC",
      "home_team": "Wombats",
      "home_code": "NP"
    },
    {
      "game": 11,
      "away_team": "Royals",
      "away_code": "TC",
      "home_team": "Yankees",
      "home_code": "WF"
    },
    {
      "game": 11,
      "away_team": "Mariners",
      "away_code": "CH",
      "home_team": "Monsters",
      "home_code": "M@"
    },
    {
      "game": 11,
      "away_team": "Reds",
      "away_code": "PZ",
      "home_team": "Cardinals",
      "home_code": "ZB"
    },
    {
      "game": 11,
      "away_team": "Tigers",
      "away_code": "AX",
      "home_team": "Rangers",
      "home_code": "VS"
    },
    {
      "game": 11,
      "away_team": "Devil Rays",
      "away_code": "AP",
      "home_team": "Giants",
      "home_code": "IT"
    },
    {
      "game": 11,
      "away_team": "Rockies",
      "away_code": "GS",
      "home_team": "Hornets",
      "home_code": "FF"
    },
    {
      "game": 11,
      "away_team": "Braves",
      "away_code": "HZ",
      "home_team": "Twins",
      "home_code": "EV"
    },
    {
      "game": 11,
      "away_team": "Expos",
      "away_code": "LW",
      "home_team": "Blue Jays",
      "home_code": "MD"
    },
    {
      "game": 11,
      "away_team": "Pirates",
      "away_code": "C8",
      "home_team": "Mets",
      "home_code": "MK"
    },
    {
      "game": 11,
      "away_team": "Diamondbacks",
      "away_code": "OB",
      "home_team": "Marlins",
      "home_code": "LO"
    },
    {
      "game": 11,
      "away_team": "Angels",
      "away_code": "BO",
      "home_team": "Melonheads",
      "home_code": "TW"
    },
    {
      "game": 12,
      "away_team": "Wombats",
      "away_code": "NP",
      "home_team": "Reds",
      "home_code": "PZ"
    },
    {
      "game": 12,
      "away_team": "Monsters",
      "away_code": "M@",
      "home_team": "Tigers",
      "home_code": "AX"
    },
    {
      "game": 12,
      "away_team": "Giants",
      "away_code": "IT",
      "home_team": "Cardinals",
      "home_code": "ZB"
    },
    {
      "game": 12,
      "away_team": "Royals",
      "away_code": "TC",
      "home_team": "Mariners",
      "home_code": "CH"
    },
    {
      "game": 12,
      "away_team": "Rangers",
      "away_code": "VS",
      "home_team": "Astros",
      "home_code": "MC"
    },
    {
      "game": 12,
      "away_team": "Yankees",
      "away_code": "WF",
      "home_team": "Devil Rays",
      "home_code": "AP"
    },
    {
      "game": 12,
      "away_team": "Rockies",
      "away_code": "GS",
      "home_team": "Melonheads",
      "home_code": "TW"
    },
    {
      "game": 12,
      "away_team": "Angels",
      "away_code": "BO",
      "home_team": "Twins",
      "home_code": "EV"
    },
    {
      "game": 12,
      "away_team": "Braves",
      "away_code": "HZ",
      "home_team": "Expos",
      "home_code": "LW"
    },
    {
      "game": 12,
      "away_team": "Hornets",
      "away_code": "FF",
      "home_team": "Mets",
      "home_code": "MK"
    },
    {
      "game": 12,
      "away_team": "Diamondbacks",
      "away_code": "OB",
      "home_team": "Pirates",
      "home_code": "C8"
    },
    {
      "game": 12,
      "away_team": "Marlins",
      "away_code": "LO",
      "home_team": "Blue Jays",
      "home_code": "MD"
    },
    {
      "game": 13,
      "away_team": "Tigers",
      "away_code": "AX",
      "home_team": "Wombats",
      "home_code": "NP"
    },
    {
      "game": 13,
      "away_team": "Giants",
      "away_code": "IT",
      "home_team": "Royals",
      "home_code": "TC"
    },
    {
      "game": 13,
      "away_team": "Monsters",
      "away_code": "M@",
      "home_team": "Reds",
      "home_code": "PZ"
    },
    {
      "game": 13,
      "away_team": "Cardinals",
      "away_code": "ZB",
      "home_team": "Mariners",
      "home_code": "CH"
    },
    {
      "game": 13,
      "away_team": "Yankees",
      "away_code": "WF",
      "home_team": "Rangers",
      "home_code": "VS"
    },
    {
      "game": 13,
      "away_team": "Devil Rays",
      "away_code": "AP",
      "home_team": "Astros",
      "home_code": "MC"
    },
    {
      "game": 13,
      "away_team": "Blue Jays",
      "away_code": "MD",
      "home_team": "Rockies",
      "home_code": "GS"
    },
    {
      "game": 13,
      "away_team": "Twins",
      "away_code": "EV",
      "home_team": "Pirates",
      "home_code": "C8"
    },
    {
      "game": 13,
      "away_team": "Braves",
      "away_code": "HZ",
      "home_team": "Mets",
      "home_code": "MK"
    },
    {
      "game": 13,
      "away_team": "Expos",
      "away_code": "LW",
      "home_team": "Hornets",
      "home_code": "FF"
    },
    {
      "game": 13,
      "away_team": "Marlins",
      "away_code": "LO",
      "home_team": "Diamondbacks",
      "home_code": "OB"
    },
    {
      "game": 13,
      "away_team": "Melonheads",
      "away_code": "TW",
      "home_team": "Angels",
      "home_code": "BO"
    },
    {
      "game": 14,
      "away_team": "Wombats",
      "away_code": "NP",
      "home_team": "Giants",
      "home_code": "IT"
    },
    {
      "game": 14,
      "away_team": "Royals",
      "away_code": "TC",
      "home_team": "Tigers",
      "home_code": "AX"
    },
    {
      "game": 14,
      "away_team": "Cardinals",
      "away_code": "ZB",
      "home_team": "Monsters",
      "home_code": "M@"
    },
    {
      "game": 14,
      "away_team": "Reds",
      "away_code": "PZ",
      "home_team": "Mariners",
      "home_code": "CH"
    },
    {
      "game": 14,
      "away_team": "Rangers",
      "away_code": "VS",
      "home_team": "Devil Rays",
      "home_code": "AP"
    },
    {
      "game": 14,
      "away_team": "Astros",
      "away_code": "MC",
      "home_team": "Yankees",
      "home_code": "WF"
    },
    {
      "game": 14,
      "away_team": "Rockies",
      "away_code": "GS",
      "home_team": "Twins",
      "home_code": "EV"
    },
    {
      "game": 14,
      "away_team": "Pirates",
      "away_code": "C8",
      "home_team": "Blue Jays",
      "home_code": "MD"
    },
    {
      "game": 14,
      "away_team": "Expos",
      "away_code": "LW",
      "home_team": "Braves",
      "home_code": "HZ"
    },
    {
      "game": 14,
      "away_team": "Mets",
      "away_code": "MK",
      "home_team": "Hornets",
      "home_code": "FF"
    },
    {
      "game": 14,
      "away_team": "Diamondbacks",
      "away_code": "OB",
      "home_team": "Melonheads",
      "home_code": "TW"
    },
    {
      "game": 14,
      "away_team": "Angels",
      "away_code": "BO",
      "home_team": "Marlins",
      "home_code": "LO"
    }
   
 ]
module.exports = { s1201teams, s1201schedule};
