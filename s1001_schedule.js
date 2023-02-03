// http://www.convertcsv.com/csv-to-json.htm

const s1001teams={
  "Fishes":"<@603589333676589066>",
  "Blue Jays":"<@603589804868763648>",
  "Padres":"<@603591280471048213>",
  "Monsters":"<@496817066201055232>",
  "York Mets":"<@1067528046451642418>",
  "Pirates":"<@603286831823585280>",
  "Devil Rays":"<@496788937705259009>",
  "Expos":"<@496713526778265624>",
  "Louis Cardinals":"<@603768487676215316>",
  "Red Sox":"<@1067536861570023424>",
  "Bombers":"<@603291831744200737>",
  "Angels":"<@702678271749390457>",
  "Cubs":"<@496817127668580362>",
  "Reds":"<@995878927753019412>",
  "Braves":"<@603768704295108628>",
  "Royals":"<@847665786708688936>",
  "Astros":"<@493888943754838036>",
  "Marlins":"<@496815324553936898>",
  "Giants":"<@702678421423128637>",
  "Twins":"<@603589134744944670>",
  "Rockies":"<@448576748767150091>",
  "Mariners":"<@1067670617094094878>"
}

//"game": "1",
//"away_team": "As",
//"away_code": "NF",
//"home_team": "Red Sox",
//"home_code": "XD"

const s1001schedule =[
  {
    "game": 1,
    "away_team": "Blue Jays",
    "away_code": "EX",
    "home_team": "Astros",
    "home_code": "55"
  },
  {
    "game": 1,
    "away_team": "Giants",
    "away_code": "IT",
    "home_team": "Cardinals",
    "home_code": "CH"
  },
  {
    "game": 1,
    "away_team": "Twins",
    "away_code": "MK",
    "home_team": "Marlins",
    "home_code": "LO"
  },
  {
    "game": 1,
    "away_team": "Expos",
    "away_code": "MA",
    "home_team": "Pirates",
    "home_code": "QM"
  },
  {
    "game": 1,
    "away_team": "Rockies",
    "away_code": "C8",
    "home_team": "Royals",
    "home_code": "VS"
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
    "away_team": "Padres",
    "away_code": "B@",
    "home_team": "Fishes",
    "home_code": "CW"
  },
  {
    "game": 1,
    "away_team": "Mariners",
    "away_code": "GS",
    "home_team": "Angels",
    "home_code": "BO"
  },
  {
    "game": 1,
    "away_team": "Braves",
    "away_code": "N8",
    "home_team": "Red Sox",
    "home_code": "AX"
  },
  {
    "game": 1,
    "away_team": "Mets",
    "away_code": "WZ",
    "home_team": "Cubs",
    "home_code": "M@"
  },
  {
    "game": 1,
    "away_team": "Monsters",
    "away_code": "YY",
    "home_team": "Bombers",
    "home_code": "JK"
  },
  {
    "game": 2,
    "away_team": "Royals",
    "away_code": "VS",
    "home_team": "Blue Jays",
    "home_code": "EX"
  },
  {
    "game": 2,
    "away_team": "Cardinals",
    "away_code": "CH",
    "home_team": "Devil Rays",
    "home_code": "AP"
  },
  {
    "game": 2,
    "away_team": "Astros",
    "away_code": "55",
    "home_team": "Twins",
    "home_code": "MK"
  },
  {
    "game": 2,
    "away_team": "Pirates",
    "away_code": "QM",
    "home_team": "Giants",
    "home_code": "IT"
  },
  {
    "game": 2,
    "away_team": "Expos",
    "away_code": "MA",
    "home_team": "Marlins",
    "home_code": "LO"
  },
  {
    "game": 2,
    "away_team": "Mariners",
    "away_code": "GS",
    "home_team": "Rockies",
    "home_code": "C8"
  },
  {
    "game": 2,
    "away_team": "Padres",
    "away_code": "B@",
    "home_team": "Monsters",
    "home_code": "YY"
  },
  {
    "game": 2,
    "away_team": "Red Sox",
    "away_code": "AX",
    "home_team": "Fishes",
    "home_code": "CW"
  },
  {
    "game": 2,
    "away_team": "Mets",
    "away_code": "WZ",
    "home_team": "Braves",
    "home_code": "N8"
  },
  {
    "game": 2,
    "away_team": "Cubs",
    "away_code": "M@",
    "home_team": "Reds",
    "home_code": "PZ"
  },
  {
    "game": 2,
    "away_team": "Bombers",
    "away_code": "JK",
    "home_team": "Angels",
    "home_code": "BO"
  },
  {
    "game": 3,
    "away_team": "Blue Jays",
    "away_code": "EX",
    "home_team": "Twins",
    "home_code": "MK"
  },
  {
    "game": 3,
    "away_team": "Marlins",
    "away_code": "LO",
    "home_team": "Cardinals",
    "home_code": "CH"
  },
  {
    "game": 3,
    "away_team": "Giants",
    "away_code": "IT",
    "home_team": "Royals",
    "home_code": "VS"
  },
  {
    "game": 3,
    "away_team": "Pirates",
    "away_code": "QM",
    "home_team": "Devil Rays",
    "home_code": "AP"
  },
  {
    "game": 3,
    "away_team": "Rockies",
    "away_code": "C8",
    "home_team": "Expos",
    "home_code": "MA"
  },
  {
    "game": 3,
    "away_team": "Astros",
    "away_code": "55",
    "home_team": "Mets",
    "home_code": "WZ"
  },
  {
    "game": 3,
    "away_team": "Braves",
    "away_code": "N8",
    "home_team": "Padres",
    "home_code": "B@"
  },
  {
    "game": 3,
    "away_team": "Fishes",
    "away_code": "CW",
    "home_team": "Bombers",
    "home_code": "JK"
  },
  {
    "game": 3,
    "away_team": "Monsters",
    "away_code": "YY",
    "home_team": "Reds",
    "home_code": "PZ"
  },
  {
    "game": 3,
    "away_team": "Red Sox",
    "away_code": "AX",
    "home_team": "Cubs",
    "home_code": "M@"
  },
  {
    "game": 3,
    "away_team": "Angels",
    "away_code": "BO",
    "home_team": "Mariners",
    "home_code": "GS"
  },
  {
    "game": 4,
    "away_team": "Rockies",
    "away_code": "C8",
    "home_team": "Blue Jays",
    "home_code": "EX"
  },
  {
    "game": 4,
    "away_team": "Royals",
    "away_code": "VS",
    "home_team": "Pirates",
    "home_code": "QM"
  },
  {
    "game": 4,
    "away_team": "Twins",
    "away_code": "MK",
    "home_team": "Expos",
    "home_code": "MA"
  },
  {
    "game": 4,
    "away_team": "Devil Rays",
    "away_code": "AP",
    "home_team": "Giants",
    "home_code": "IT"
  },
  {
    "game": 4,
    "away_team": "Marlins",
    "away_code": "LO",
    "home_team": "Astros",
    "home_code": "55"
  },
  {
    "game": 4,
    "away_team": "Cardinals",
    "away_code": "CH",
    "home_team": "Monsters",
    "home_code": "YY"
  },
  {
    "game": 4,
    "away_team": "Mariners",
    "away_code": "GS",
    "home_team": "Mets",
    "home_code": "WZ"
  },
  {
    "game": 4,
    "away_team": "Fishes",
    "away_code": "CW",
    "home_team": "Reds",
    "home_code": "PZ"
  },
  {
    "game": 4,
    "away_team": "Bombers",
    "away_code": "JK",
    "home_team": "Braves",
    "home_code": "N8"
  },
  {
    "game": 4,
    "away_team": "Angels",
    "away_code": "BO",
    "home_team": "Padres",
    "home_code": "B@"
  },
  {
    "game": 4,
    "away_team": "Cubs",
    "away_code": "M@",
    "home_team": "Red Sox",
    "home_code": "AX"
  },
  {
    "game": 5,
    "away_team": "Blue Jays",
    "away_code": "EX",
    "home_team": "Marlins",
    "home_code": "LO"
  },
  {
    "game": 5,
    "away_team": "Astros",
    "away_code": "55",
    "home_team": "Expos",
    "home_code": "MA"
  },
  {
    "game": 5,
    "away_team": "Twins",
    "away_code": "MK",
    "home_team": "Rockies",
    "home_code": "C8"
  },
  {
    "game": 5,
    "away_team": "Giants",
    "away_code": "IT",
    "home_team": "Pirates",
    "home_code": "QM"
  },
  {
    "game": 5,
    "away_team": "Royals",
    "away_code": "VS",
    "home_team": "Devil Rays",
    "home_code": "AP"
  },
  {
    "game": 5,
    "away_team": "Cardinals",
    "away_code": "CH",
    "home_team": "Fishes",
    "home_code": "CW"
  },
  {
    "game": 5,
    "away_team": "Padres",
    "away_code": "B@",
    "home_team": "Mariners",
    "home_code": "GS"
  },
  {
    "game": 5,
    "away_team": "Cubs",
    "away_code": "M@",
    "home_team": "Monsters",
    "home_code": "YY"
  },
  {
    "game": 5,
    "away_team": "Angels",
    "away_code": "BO",
    "home_team": "Braves",
    "home_code": "N8"
  },
  {
    "game": 5,
    "away_team": "Reds",
    "away_code": "PZ",
    "home_team": "Red Sox",
    "home_code": "AX"
  },
  {
    "game": 5,
    "away_team": "Mets",
    "away_code": "WZ",
    "home_team": "Bombers",
    "home_code": "JK"
  },
  {
    "game": 6,
    "away_team": "Cardinals",
    "away_code": "CH",
    "home_team": "Blue Jays",
    "home_code": "EX"
  },
  {
    "game": 6,
    "away_team": "Expos",
    "away_code": "MA",
    "home_team": "Rockies",
    "home_code": "C8"
  },
  {
    "game": 6,
    "away_team": "Devil Rays",
    "away_code": "AP",
    "home_team": "Twins",
    "home_code": "MK"
  },
  {
    "game": 6,
    "away_team": "Pirates",
    "away_code": "QM",
    "home_team": "Astros",
    "home_code": "55"
  },
  {
    "game": 6,
    "away_team": "Marlins",
    "away_code": "LO",
    "home_team": "Royals",
    "home_code": "VS"
  },
  {
    "game": 6,
    "away_team": "Red Sox",
    "away_code": "AX",
    "home_team": "Giants",
    "home_code": "IT"
  },
  {
    "game": 6,
    "away_team": "Mets",
    "away_code": "WZ",
    "home_team": "Padres",
    "home_code": "B@"
  },
  {
    "game": 6,
    "away_team": "Reds",
    "away_code": "PZ",
    "home_team": "Fishes",
    "home_code": "CW"
  },
  {
    "game": 6,
    "away_team": "Braves",
    "away_code": "N8",
    "home_team": "Bombers",
    "home_code": "JK"
  },
  {
    "game": 6,
    "away_team": "Cubs",
    "away_code": "M@",
    "home_team": "Angels",
    "home_code": "BO"
  },
  {
    "game": 6,
    "away_team": "Monsters",
    "away_code": "YY",
    "home_team": "Mariners",
    "home_code": "GS"
  },
  {
    "game": 7,
    "away_team": "Blue Jays",
    "away_code": "EX",
    "home_team": "Devil Rays",
    "home_code": "AP"
  },
  {
    "game": 7,
    "away_team": "Twins",
    "away_code": "MK",
    "home_team": "Cardinals",
    "home_code": "CH"
  },
  {
    "game": 7,
    "away_team": "Giants",
    "away_code": "IT",
    "home_team": "Astros",
    "home_code": "55"
  },
  {
    "game": 7,
    "away_team": "Pirates",
    "away_code": "QM",
    "home_team": "Royals",
    "home_code": "VS"
  },
  {
    "game": 7,
    "away_team": "Rockies",
    "away_code": "C8",
    "home_team": "Marlins",
    "home_code": "LO"
  },
  {
    "game": 7,
    "away_team": "Red Sox",
    "away_code": "AX",
    "home_team": "Expos",
    "home_code": "MA"
  },
  {
    "game": 7,
    "away_team": "Mariners",
    "away_code": "GS",
    "home_team": "Padres",
    "home_code": "B@"
  },
  {
    "game": 7,
    "away_team": "Angels",
    "away_code": "BO",
    "home_team": "Mets",
    "home_code": "WZ"
  },
  {
    "game": 7,
    "away_team": "Bombers",
    "away_code": "JK",
    "home_team": "Reds",
    "home_code": "PZ"
  },
  {
    "game": 7,
    "away_team": "Fishes",
    "away_code": "CW",
    "home_team": "Monsters",
    "home_code": "YY"
  },
  {
    "game": 7,
    "away_team": "Braves",
    "away_code": "N8",
    "home_team": "Cubs",
    "home_code": "M@"
  },
  {
    "game": 8,
    "away_team": "Astros",
    "away_code": "55",
    "home_team": "Blue Jays",
    "home_code": "EX"
  },
  {
    "game": 8,
    "away_team": "Giants",
    "away_code": "IT",
    "home_team": "Rockies",
    "home_code": "C8"
  },
  {
    "game": 8,
    "away_team": "Expos",
    "away_code": "MA",
    "home_team": "Twins",
    "home_code": "MK"
  },
  {
    "game": 8,
    "away_team": "Cardinals",
    "away_code": "CH",
    "home_team": "Pirates",
    "home_code": "QM"
  },
  {
    "game": 8,
    "away_team": "Devil Rays",
    "away_code": "AP",
    "home_team": "Marlins",
    "home_code": "LO"
  },
  {
    "game": 8,
    "away_team": "Royals",
    "away_code": "VS",
    "home_team": "Monsters",
    "home_code": "YY"
  },
  {
    "game": 8,
    "away_team": "Padres",
    "away_code": "B@",
    "home_team": "Mets",
    "home_code": "WZ"
  },
  {
    "game": 8,
    "away_team": "Mariners",
    "away_code": "GS",
    "home_team": "Reds",
    "home_code": "PZ"
  },
  {
    "game": 8,
    "away_team": "Braves",
    "away_code": "N8",
    "home_team": "Angels",
    "home_code": "BO"
  },
  {
    "game": 8,
    "away_team": "Cubs",
    "away_code": "M@",
    "home_team": "Fishes",
    "home_code": "CW"
  },
  {
    "game": 8,
    "away_team": "Bombers",
    "away_code": "JK",
    "home_team": "Red Sox",
    "home_code": "AX"
  },
  {
    "game": 9,
    "away_team": "Blue Jays",
    "away_code": "EX",
    "home_team": "Rockies",
    "home_code": "C8"
  },
  {
    "game": 9,
    "away_team": "Expos",
    "away_code": "MA",
    "home_team": "Astros",
    "home_code": "55"
  },
  {
    "game": 9,
    "away_team": "Giants",
    "away_code": "IT",
    "home_team": "Marlins",
    "home_code": "LO"
  },
  {
    "game": 9,
    "away_team": "Royals",
    "away_code": "VS",
    "home_team": "Cardinals",
    "home_code": "CH"
  },
  {
    "game": 9,
    "away_team": "Pirates",
    "away_code": "QM",
    "home_team": "Twins",
    "home_code": "MK"
  },
  {
    "game": 9,
    "away_team": "Angels",
    "away_code": "BO",
    "home_team": "Devil Rays",
    "home_code": "AP"
  },
  {
    "game": 9,
    "away_team": "Red Sox",
    "away_code": "AX",
    "home_team": "Padres",
    "home_code": "B@"
  },
  {
    "game": 9,
    "away_team": "Fishes",
    "away_code": "CW",
    "home_team": "Braves",
    "home_code": "N8"
  },
  {
    "game": 9,
    "away_team": "Mets",
    "away_code": "WZ",
    "home_team": "Reds",
    "home_code": "PZ"
  },
  {
    "game": 9,
    "away_team": "Monsters",
    "away_code": "YY",
    "home_team": "Cubs",
    "home_code": "M@"
  },
  {
    "game": 9,
    "away_team": "Bombers",
    "away_code": "JK",
    "home_team": "Mariners",
    "home_code": "GS"
  },
  {
    "game": 10,
    "away_team": "Rockies",
    "away_code": "C8",
    "home_team": "Astros",
    "home_code": "55"
  },
  {
    "game": 10,
    "away_team": "Cardinals",
    "away_code": "CH",
    "home_team": "Giants",
    "home_code": "IT"
  },
  {
    "game": 10,
    "away_team": "Marlins",
    "away_code": "LO",
    "home_team": "Twins",
    "home_code": "MK"
  },
  {
    "game": 10,
    "away_team": "Blue Jays",
    "away_code": "EX",
    "home_team": "Expos",
    "home_code": "MA"
  },
  {
    "game": 10,
    "away_team": "Devil Rays",
    "away_code": "AP",
    "home_team": "Pirates",
    "home_code": "QM"
  },
  {
    "game": 10,
    "away_team": "Royals",
    "away_code": "VS",
    "home_team": "Fishes",
    "home_code": "CW"
  },
  {
    "game": 10,
    "away_team": "Padres",
    "away_code": "B@",
    "home_team": "Bombers",
    "home_code": "JK"
  },
  {
    "game": 10,
    "away_team": "Mets",
    "away_code": "WZ",
    "home_team": "Angels",
    "home_code": "BO"
  },
  {
    "game": 10,
    "away_team": "Mariners",
    "away_code": "GS",
    "home_team": "Braves",
    "home_code": "N8"
  },
  {
    "game": 10,
    "away_team": "Reds",
    "away_code": "PZ",
    "home_team": "Cubs",
    "home_code": "M@"
  },
  {
    "game": 10,
    "away_team": "Red Sox",
    "away_code": "AX",
    "home_team": "Monsters",
    "home_code": "YY"
  },
  {
    "game": 11,
    "away_team": "Marlins",
    "away_code": "LO",
    "home_team": "Blue Jays",
    "home_code": "EX"
  },
  {
    "game": 11,
    "away_team": "Expos",
    "away_code": "MA",
    "home_team": "Cardinals",
    "home_code": "CH"
  },
  {
    "game": 11,
    "away_team": "Twins",
    "away_code": "MK",
    "home_team": "Astros",
    "home_code": "55"
  },
  {
    "game": 11,
    "away_team": "Devil Rays",
    "away_code": "AP",
    "home_team": "Royals",
    "home_code": "VS"
  },
  {
    "game": 11,
    "away_team": "Rockies",
    "away_code": "C8",
    "home_team": "Pirates",
    "home_code": "QM"
  },
  {
    "game": 11,
    "away_team": "Angels",
    "away_code": "BO",
    "home_team": "Giants",
    "home_code": "IT"
  },
  {
    "game": 11,
    "away_team": "Cubs",
    "away_code": "M@",
    "home_team": "Padres",
    "home_code": "B@"
  },
  {
    "game": 11,
    "away_team": "Fishes",
    "away_code": "CW",
    "home_team": "Red Sox",
    "home_code": "AX"
  },
  {
    "game": 11,
    "away_team": "Braves",
    "away_code": "N8",
    "home_team": "Mariners",
    "home_code": "GS"
  },
  {
    "game": 11,
    "away_team": "Reds",
    "away_code": "PZ",
    "home_team": "Monsters",
    "home_code": "YY"
  },
  {
    "game": 11,
    "away_team": "Bombers",
    "away_code": "JK",
    "home_team": "Mets",
    "home_code": "WZ"
  },
  {
    "game": 12,
    "away_team": "Twins",
    "away_code": "MK",
    "home_team": "Blue Jays",
    "home_code": "EX"
  },
  {
    "game": 12,
    "away_team": "Cardinals",
    "away_code": "CH",
    "home_team": "Royals",
    "home_code": "VS"
  },
  {
    "game": 12,
    "away_team": "Marlins",
    "away_code": "LO",
    "home_team": "Expos",
    "home_code": "MA"
  },
  {
    "game": 12,
    "away_team": "Giants",
    "away_code": "IT",
    "home_team": "Devil Rays",
    "home_code": "AP"
  },
  {
    "game": 12,
    "away_team": "Astros",
    "away_code": "55",
    "home_team": "Rockies",
    "home_code": "C8"
  },
  {
    "game": 12,
    "away_team": "Pirates",
    "away_code": "QM",
    "home_team": "Cubs",
    "home_code": "M@"
  },
  {
    "game": 12,
    "away_team": "Padres",
    "away_code": "B@",
    "home_team": "Braves",
    "home_code": "N8"
  },
  {
    "game": 12,
    "away_team": "Monsters",
    "away_code": "YY",
    "home_team": "Fishes",
    "home_code": "CW"
  },
  {
    "game": 12,
    "away_team": "Angels",
    "away_code": "BO",
    "home_team": "Bombers",
    "home_code": "JK"
  },
  {
    "game": 12,
    "away_team": "Red Sox",
    "away_code": "AX",
    "home_team": "Reds",
    "home_code": "PZ"
  },
  {
    "game": 12,
    "away_team": "Mets",
    "away_code": "WZ",
    "home_team": "Mariners",
    "home_code": "GS"
  },
  {
    "game": 13,
    "away_team": "Blue Jays",
    "away_code": "EX",
    "home_team": "Pirates",
    "home_code": "QM"
  },
  {
    "game": 13,
    "away_team": "Devil Rays",
    "away_code": "AP",
    "home_team": "Cardinals",
    "home_code": "CH"
  },
  {
    "game": 13,
    "away_team": "Rockies",
    "away_code": "C8",
    "home_team": "Twins",
    "home_code": "MK"
  },
  {
    "game": 13,
    "away_team": "Royals",
    "away_code": "VS",
    "home_team": "Giants",
    "home_code": "IT"
  },
  {
    "game": 13,
    "away_team": "Astros",
    "away_code": "55",
    "home_team": "Marlins",
    "home_code": "LO"
  },
  {
    "game": 13,
    "away_team": "Reds",
    "away_code": "PZ",
    "home_team": "Expos",
    "home_code": "MA"
  },
  {
    "game": 13,
    "away_team": "Bombers",
    "away_code": "JK",
    "home_team": "Padres",
    "home_code": "B@"
  },
  {
    "game": 13,
    "away_team": "Fishes",
    "away_code": "CW",
    "home_team": "Angels",
    "home_code": "BO"
  },
  {
    "game": 13,
    "away_team": "Braves",
    "away_code": "N8",
    "home_team": "Mets",
    "home_code": "WZ"
  },
  {
    "game": 13,
    "away_team": "Monsters",
    "away_code": "YY",
    "home_team": "Red Sox",
    "home_code": "AX"
  },
  {
    "game": 13,
    "away_team": "Cubs",
    "away_code": "M@",
    "home_team": "Mariners",
    "home_code": "GS"
  },
  {
    "game": 14,
    "away_team": "Expos",
    "away_code": "MA",
    "home_team": "Blue Jays",
    "home_code": "EX"
  },
  {
    "game": 14,
    "away_team": "Astros",
    "away_code": "55",
    "home_team": "Royals",
    "home_code": "VS"
  },
  {
    "game": 14,
    "away_team": "Twins",
    "away_code": "MK",
    "home_team": "Giants",
    "home_code": "IT"
  },
  {
    "game": 14,
    "away_team": "Pirates",
    "away_code": "QM",
    "home_team": "Cardinals",
    "home_code": "CH"
  },
  {
    "game": 14,
    "away_team": "Marlins",
    "away_code": "LO",
    "home_team": "Rockies",
    "home_code": "C8"
  },
  {
    "game": 14,
    "away_team": "Devil Rays",
    "away_code": "AP",
    "home_team": "Red Sox",
    "home_code": "AX"
  },
  {
    "game": 14,
    "away_team": "Padres",
    "away_code": "B@",
    "home_team": "Angels",
    "home_code": "BO"
  },
  {
    "game": 14,
    "away_team": "Monsters",
    "away_code": "YY",
    "home_team": "Mets",
    "home_code": "WZ"
  },
  {
    "game": 14,
    "away_team": "Reds",
    "away_code": "PZ",
    "home_team": "Braves",
    "home_code": "N8"
  },
  {
    "game": 14,
    "away_team": "Fishes",
    "away_code": "CW",
    "home_team": "Cubs",
    "home_code": "M@"
  },
  {
    "game": 14,
    "away_team": "Mariners",
    "away_code": "GS",
    "home_team": "Bombers",
    "home_code": "JK"
  }
 ]
module.exports = { s1001teams, s1001schedule};
