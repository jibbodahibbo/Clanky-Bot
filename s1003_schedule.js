// http://www.convertcsv.com/csv-to-json.htm

const s1003teams={
  "Diamondbacks":"<@&783577309000368189>",
  "Twins":"<@&1071145277362274434>",
  "Red Sox":"<@&670773176984403982>",
  "Angels":"<@&1067540852769050744>",
  "Marlins":"<@&1069707239478272131>",
  "White Sox":"<@&703669468768895206>",
  "Braves":"<@&603768704295108628>",
  "Astros":"<@&1067544975325265960>",
  "Pirates":"<@&1067903483027673211>",
  "Padres":"<@&1071145701725184070>",
  "Orioles":"<@&496817420753960961>",
  "Rangers":"<@&1067528806765699162>",
  "Cubs":"<@&1071145998656737360>",
  "Expos":"<@&1071144968435028049>",
  "Wombats":"<@&603589502891458574>",
  "Royals":"<@&1067544069221392414>",
  "Tigers":"<@&603606321492787210>",
  "Mets":"<@&847666608852041778>",
  "Indians":"<@&448576195190063110>",
  "Melonheads":"<@&448576610489335809>",
  "Fishes":"<@&603589333676589066>",
  "Giants":"<@&1067545232243183737>"
}

//"game": "1",
//"away_team": "As",
//"away_code": "NF",
//"home_team": "Red Sox",
//"home_code": "XD"

const s1003schedule =[
  {
    "game": 1,
    "away_team": "Astros",
    "away_code": "BO",
    "home_team": "Royals",
    "home_code": "AT"
  },
  {
    "game": 1,
    "away_team": "Rangers",
    "away_code": "WZ",
    "home_team": "Mets",
    "home_code": "VS"
  },
  {
    "game": 1,
    "away_team": "Indians",
    "away_code": "C0",
    "home_team": "Cubs",
    "home_code": "B@"
  },
  {
    "game": 1,
    "away_team": "Padres",
    "away_code": "M@",
    "home_team": "Melonheads",
    "home_code": "EX"
  },
  {
    "game": 1,
    "away_team": "Diamondbacks",
    "away_code": "TV",
    "home_team": "Orioles",
    "home_code": "SB"
  },
  {
    "game": 1,
    "away_team": "Wombats",
    "away_code": "YT",
    "home_team": "Giants",
    "home_code": "C8"
  },
  {
    "game": 1,
    "away_team": "Twins",
    "away_code": "TO",
    "home_team": "Marlins",
    "home_code": "PZ"
  },
  {
    "game": 1,
    "away_team": "Fishes",
    "away_code": "CW",
    "home_team": "Angels",
    "home_code": "AX"
  },
  {
    "game": 1,
    "away_team": "Expos",
    "away_code": "JY",
    "home_team": "White Sox",
    "home_code": "MT"
  },
  {
    "game": 1,
    "away_team": "Braves",
    "away_code": "N8",
    "home_team": "Tigers",
    "home_code": "BB"
  },
  {
    "game": 1,
    "away_team": "Red Sox",
    "away_code": "LW",
    "home_team": "Pirates",
    "home_code": "MM"
  },
  {
    "game": 2,
    "away_team": "Orioles",
    "away_code": "SB",
    "home_team": "Astros",
    "home_code": "BO"
  },
  {
    "game": 2,
    "away_team": "Mets",
    "away_code": "VS",
    "home_team": "Giants",
    "home_code": "C8"
  },
  {
    "game": 2,
    "away_team": "Royals",
    "away_code": "AT",
    "home_team": "Indians",
    "home_code": "C0"
  },
  {
    "game": 2,
    "away_team": "Melonheads",
    "away_code": "EX",
    "home_team": "Rangers",
    "home_code": "WZ"
  },
  {
    "game": 2,
    "away_team": "Padres",
    "away_code": "M@",
    "home_team": "Cubs",
    "home_code": "B@"
  },
  {
    "game": 2,
    "away_team": "Fishes",
    "away_code": "CW",
    "home_team": "Diamondbacks",
    "home_code": "TV"
  },
  {
    "game": 2,
    "away_team": "Twins",
    "away_code": "TO",
    "home_team": "Red Sox",
    "home_code": "LW"
  },
  {
    "game": 2,
    "away_team": "White Sox",
    "away_code": "MT",
    "home_team": "Marlins",
    "home_code": "PZ"
  },
  {
    "game": 2,
    "away_team": "Braves",
    "away_code": "N8",
    "home_team": "Expos",
    "home_code": "JY"
  },
  {
    "game": 2,
    "away_team": "Tigers",
    "away_code": "BB",
    "home_team": "Wombats",
    "home_code": "YT"
  },
  {
    "game": 2,
    "away_team": "Pirates",
    "away_code": "MM",
    "home_team": "Angels",
    "home_code": "AX"
  },
  {
    "game": 3,
    "away_team": "Astros",
    "away_code": "BO",
    "home_team": "Indians",
    "home_code": "C0"
  },
  {
    "game": 3,
    "away_team": "Cubs",
    "away_code": "B@",
    "home_team": "Mets",
    "home_code": "VS"
  },
  {
    "game": 3,
    "away_team": "Rangers",
    "away_code": "WZ",
    "home_team": "Orioles",
    "home_code": "SB"
  },
  {
    "game": 3,
    "away_team": "Melonheads",
    "away_code": "EX",
    "home_team": "Giants",
    "home_code": "C8"
  },
  {
    "game": 3,
    "away_team": "Diamondbacks",
    "away_code": "TV",
    "home_team": "Padres",
    "home_code": "M@"
  },
  {
    "game": 3,
    "away_team": "Royals",
    "away_code": "AT",
    "home_team": "Braves",
    "home_code": "N8"
  },
  {
    "game": 3,
    "away_team": "Expos",
    "away_code": "JY",
    "home_team": "Twins",
    "home_code": "TO"
  },
  {
    "game": 3,
    "away_team": "Marlins",
    "away_code": "PZ",
    "home_team": "Pirates",
    "home_code": "MM"
  },
  {
    "game": 3,
    "away_team": "Red Sox",
    "away_code": "LW",
    "home_team": "Wombats",
    "home_code": "YT"
  },
  {
    "game": 3,
    "away_team": "White Sox",
    "away_code": "MT",
    "home_team": "Tigers",
    "home_code": "BB"
  },
  {
    "game": 3,
    "away_team": "Angels",
    "away_code": "AX",
    "home_team": "Fishes",
    "home_code": "CW"
  },
  {
    "game": 4,
    "away_team": "Diamondbacks",
    "away_code": "TV",
    "home_team": "Astros",
    "home_code": "BO"
  },
  {
    "game": 4,
    "away_team": "Orioles",
    "away_code": "SB",
    "home_team": "Melonheads",
    "home_code": "EX"
  },
  {
    "game": 4,
    "away_team": "Indians",
    "away_code": "C0",
    "home_team": "Padres",
    "home_code": "M@"
  },
  {
    "game": 4,
    "away_team": "Giants",
    "away_code": "C8",
    "home_team": "Rangers",
    "home_code": "WZ"
  },
  {
    "game": 4,
    "away_team": "Cubs",
    "away_code": "B@",
    "home_team": "Royals",
    "home_code": "AT"
  },
  {
    "game": 4,
    "away_team": "Mets",
    "away_code": "VS",
    "home_team": "Red Sox",
    "home_code": "LW"
  },
  {
    "game": 4,
    "away_team": "Fishes",
    "away_code": "CW",
    "home_team": "Braves",
    "home_code": "N8"
  },
  {
    "game": 4,
    "away_team": "Marlins",
    "away_code": "PZ",
    "home_team": "Wombats",
    "home_code": "YT"
  },
  {
    "game": 4,
    "away_team": "Pirates",
    "away_code": "MM",
    "home_team": "Expos",
    "home_code": "JY"
  },
  {
    "game": 4,
    "away_team": "Angels",
    "away_code": "AX",
    "home_team": "Twins",
    "home_code": "TO"
  },
  {
    "game": 4,
    "away_team": "Tigers",
    "away_code": "BB",
    "home_team": "White Sox",
    "home_code": "MT"
  },
  {
    "game": 5,
    "away_team": "Astros",
    "away_code": "BO",
    "home_team": "Cubs",
    "home_code": "B@"
  },
  {
    "game": 5,
    "away_team": "Royals",
    "away_code": "AT",
    "home_team": "Padres",
    "home_code": "M@"
  },
  {
    "game": 5,
    "away_team": "Indians",
    "away_code": "C0",
    "home_team": "Diamondbacks",
    "home_code": "TV"
  },
  {
    "game": 5,
    "away_team": "Rangers",
    "away_code": "WZ",
    "home_team": "Melonheads",
    "home_code": "EX"
  },
  {
    "game": 5,
    "away_team": "Orioles",
    "away_code": "SB",
    "home_team": "Giants",
    "home_code": "C8"
  },
  {
    "game": 5,
    "away_team": "Mets",
    "away_code": "VS",
    "home_team": "Marlins",
    "home_code": "PZ"
  },
  {
    "game": 5,
    "away_team": "Twins",
    "away_code": "TO",
    "home_team": "Fishes",
    "home_code": "CW"
  },
  {
    "game": 5,
    "away_team": "Tigers",
    "away_code": "BB",
    "home_team": "Red Sox",
    "home_code": "LW"
  },
  {
    "game": 5,
    "away_team": "Angels",
    "away_code": "AX",
    "home_team": "Expos",
    "home_code": "JY"
  },
  {
    "game": 5,
    "away_team": "Wombats",
    "away_code": "YT",
    "home_team": "White Sox",
    "home_code": "MT"
  },
  {
    "game": 5,
    "away_team": "Braves",
    "away_code": "N8",
    "home_team": "Pirates",
    "home_code": "MM"
  },
  {
    "game": 6,
    "away_team": "Mets",
    "away_code": "VS",
    "home_team": "Astros",
    "home_code": "BO"
  },
  {
    "game": 6,
    "away_team": "Padres",
    "away_code": "M@",
    "home_team": "Diamondbacks",
    "home_code": "TV"
  },
  {
    "game": 6,
    "away_team": "Giants",
    "away_code": "C8",
    "home_team": "Indians",
    "home_code": "C0"
  },
  {
    "game": 6,
    "away_team": "Melonheads",
    "away_code": "EX",
    "home_team": "Royals",
    "home_code": "AT"
  },
  {
    "game": 6,
    "away_team": "Cubs",
    "away_code": "B@",
    "home_team": "Orioles",
    "home_code": "SB"
  },
  {
    "game": 6,
    "away_team": "White Sox",
    "away_code": "MT",
    "home_team": "Rangers",
    "home_code": "WZ"
  },
  {
    "game": 6,
    "away_team": "Braves",
    "away_code": "N8",
    "home_team": "Twins",
    "home_code": "TO"
  },
  {
    "game": 6,
    "away_team": "Wombats",
    "away_code": "YT",
    "home_team": "Marlins",
    "home_code": "PZ"
  },
  {
    "game": 6,
    "away_team": "Expos",
    "away_code": "JY",
    "home_team": "Pirates",
    "home_code": "MM"
  },
  {
    "game": 6,
    "away_team": "Tigers",
    "away_code": "BB",
    "home_team": "Angels",
    "home_code": "AX"
  },
  {
    "game": 6,
    "away_team": "Red Sox",
    "away_code": "LW",
    "home_team": "Fishes",
    "home_code": "CW"
  },
  {
    "game": 7,
    "away_team": "Astros",
    "away_code": "BO",
    "home_team": "Giants",
    "home_code": "C8"
  },
  {
    "game": 7,
    "away_team": "Indians",
    "away_code": "C0",
    "home_team": "Mets",
    "home_code": "VS"
  },
  {
    "game": 7,
    "away_team": "Rangers",
    "away_code": "WZ",
    "home_team": "Royals",
    "home_code": "AT"
  },
  {
    "game": 7,
    "away_team": "Melonheads",
    "away_code": "EX",
    "home_team": "Orioles",
    "home_code": "SB"
  },
  {
    "game": 7,
    "away_team": "Diamondbacks",
    "away_code": "TV",
    "home_team": "Cubs",
    "home_code": "B@"
  },
  {
    "game": 7,
    "away_team": "White Sox",
    "away_code": "MT",
    "home_team": "Padres",
    "home_code": "M@"
  },
  {
    "game": 7,
    "away_team": "Fishes",
    "away_code": "CW",
    "home_team": "Twins",
    "home_code": "TO"
  },
  {
    "game": 7,
    "away_team": "Angels",
    "away_code": "AX",
    "home_team": "Braves",
    "home_code": "N8"
  },
  {
    "game": 7,
    "away_team": "Pirates",
    "away_code": "MM",
    "home_team": "Wombats",
    "home_code": "YT"
  },
  {
    "game": 7,
    "away_team": "Marlins",
    "away_code": "PZ",
    "home_team": "Red Sox",
    "home_code": "LW"
  },
  {
    "game": 7,
    "away_team": "Expos",
    "away_code": "JY",
    "home_team": "Tigers",
    "home_code": "BB"
  },
  {
    "game": 8,
    "away_team": "Royals",
    "away_code": "AT",
    "home_team": "Astros",
    "home_code": "BO"
  },
  {
    "game": 8,
    "away_team": "Rangers",
    "away_code": "WZ",
    "home_team": "Diamondbacks",
    "home_code": "TV"
  },
  {
    "game": 8,
    "away_team": "Padres",
    "away_code": "M@",
    "home_team": "Indians",
    "home_code": "C0"
  },
  {
    "game": 8,
    "away_team": "Mets",
    "away_code": "VS",
    "home_team": "Melonheads",
    "home_code": "EX"
  },
  {
    "game": 8,
    "away_team": "Giants",
    "away_code": "C8",
    "home_team": "Cubs",
    "home_code": "B@"
  },
  {
    "game": 8,
    "away_team": "Orioles",
    "away_code": "SB",
    "home_team": "Red Sox",
    "home_code": "LW"
  },
  {
    "game": 8,
    "away_team": "Twins",
    "away_code": "TO",
    "home_team": "Braves",
    "home_code": "N8"
  },
  {
    "game": 8,
    "away_team": "Fishes",
    "away_code": "CW",
    "home_team": "Wombats",
    "home_code": "YT"
  },
  {
    "game": 8,
    "away_team": "Expos",
    "away_code": "JY",
    "home_team": "Angels",
    "home_code": "AX"
  },
  {
    "game": 8,
    "away_team": "Tigers",
    "away_code": "BB",
    "home_team": "Marlins",
    "home_code": "PZ"
  },
  {
    "game": 8,
    "away_team": "Pirates",
    "away_code": "MM",
    "home_team": "White Sox",
    "home_code": "MT"
  },
  {
    "game": 9,
    "away_team": "Astros",
    "away_code": "BO",
    "home_team": "Diamondbacks",
    "home_code": "TV"
  },
  {
    "game": 9,
    "away_team": "Padres",
    "away_code": "M@",
    "home_team": "Royals",
    "home_code": "AT"
  },
  {
    "game": 9,
    "away_team": "Rangers",
    "away_code": "WZ",
    "home_team": "Cubs",
    "home_code": "B@"
  },
  {
    "game": 9,
    "away_team": "Orioles",
    "away_code": "SB",
    "home_team": "Mets",
    "home_code": "VS"
  },
  {
    "game": 9,
    "away_team": "Melonheads",
    "away_code": "EX",
    "home_team": "Indians",
    "home_code": "C0"
  },
  {
    "game": 9,
    "away_team": "Angels",
    "away_code": "AX",
    "home_team": "Giants",
    "home_code": "C8"
  },
  {
    "game": 9,
    "away_team": "White Sox",
    "away_code": "MT",
    "home_team": "Twins",
    "home_code": "TO"
  },
  {
    "game": 9,
    "away_team": "Marlins",
    "away_code": "PZ",
    "home_team": "Expos",
    "home_code": "JY"
  },
  {
    "game": 9,
    "away_team": "Braves",
    "away_code": "N8",
    "home_team": "Wombats",
    "home_code": "YT"
  },
  {
    "game": 9,
    "away_team": "Red Sox",
    "away_code": "LW",
    "home_team": "Tigers",
    "home_code": "BB"
  },
  {
    "game": 9,
    "away_team": "Pirates",
    "away_code": "MM",
    "home_team": "Fishes",
    "home_code": "CW"
  },
  {
    "game": 10,
    "away_team": "Diamondbacks",
    "away_code": "TV",
    "home_team": "Royals",
    "home_code": "AT"
  },
  {
    "game": 10,
    "away_team": "Mets",
    "away_code": "VS",
    "home_team": "Rangers",
    "home_code": "WZ"
  },
  {
    "game": 10,
    "away_team": "Cubs",
    "away_code": "B@",
    "home_team": "Indians",
    "home_code": "C0"
  },
  {
    "game": 10,
    "away_team": "Astros",
    "away_code": "BO",
    "home_team": "Padres",
    "home_code": "M@"
  },
  {
    "game": 10,
    "away_team": "Giants",
    "away_code": "C8",
    "home_team": "Melonheads",
    "home_code": "EX"
  },
  {
    "game": 10,
    "away_team": "Orioles",
    "away_code": "SB",
    "home_team": "Marlins",
    "home_code": "PZ"
  },
  {
    "game": 10,
    "away_team": "Twins",
    "away_code": "TO",
    "home_team": "Pirates",
    "home_code": "MM"
  },
  {
    "game": 10,
    "away_team": "Braves",
    "away_code": "N8",
    "home_team": "Angels",
    "home_code": "AX"
  },
  {
    "game": 10,
    "away_team": "Fishes",
    "away_code": "CW",
    "home_team": "Expos",
    "home_code": "JY"
  },
  {
    "game": 10,
    "away_team": "Wombats",
    "away_code": "YT",
    "home_team": "Tigers",
    "home_code": "BB"
  },
  {
    "game": 10,
    "away_team": "White Sox",
    "away_code": "MT",
    "home_team": "Red Sox",
    "home_code": "LW"
  },
  {
    "game": 11,
    "away_team": "Cubs",
    "away_code": "B@",
    "home_team": "Astros",
    "home_code": "BO"
  },
  {
    "game": 11,
    "away_team": "Padres",
    "away_code": "M@",
    "home_team": "Mets",
    "home_code": "VS"
  },
  {
    "game": 11,
    "away_team": "Indians",
    "away_code": "C0",
    "home_team": "Royals",
    "home_code": "AT"
  },
  {
    "game": 11,
    "away_team": "Giants",
    "away_code": "C8",
    "home_team": "Orioles",
    "home_code": "SB"
  },
  {
    "game": 11,
    "away_team": "Diamondbacks",
    "away_code": "TV",
    "home_team": "Melonheads",
    "home_code": "EX"
  },
  {
    "game": 11,
    "away_team": "Angels",
    "away_code": "AX",
    "home_team": "Rangers",
    "home_code": "WZ"
  },
  {
    "game": 11,
    "away_team": "Tigers",
    "away_code": "BB",
    "home_team": "Twins",
    "home_code": "TO"
  },
  {
    "game": 11,
    "away_team": "Marlins",
    "away_code": "PZ",
    "home_team": "White Sox",
    "home_code": "MT"
  },
  {
    "game": 11,
    "away_team": "Expos",
    "away_code": "JY",
    "home_team": "Fishes",
    "home_code": "CW"
  },
  {
    "game": 11,
    "away_team": "Wombats",
    "away_code": "YT",
    "home_team": "Red Sox",
    "home_code": "LW"
  },
  {
    "game": 11,
    "away_team": "Pirates",
    "away_code": "MM",
    "home_team": "Braves",
    "home_code": "N8"
  },
  {
    "game": 12,
    "away_team": "Indians",
    "away_code": "C0",
    "home_team": "Astros",
    "home_code": "BO"
  },
  {
    "game": 12,
    "away_team": "Mets",
    "away_code": "VS",
    "home_team": "Orioles",
    "home_code": "SB"
  },
  {
    "game": 12,
    "away_team": "Cubs",
    "away_code": "B@",
    "home_team": "Padres",
    "home_code": "M@"
  },
  {
    "game": 12,
    "away_team": "Rangers",
    "away_code": "WZ",
    "home_team": "Giants",
    "home_code": "C8"
  },
  {
    "game": 12,
    "away_team": "Royals",
    "away_code": "AT",
    "home_team": "Diamondbacks",
    "home_code": "TV"
  },
  {
    "game": 12,
    "away_team": "Melonheads",
    "away_code": "EX",
    "home_team": "Tigers",
    "home_code": "BB"
  },
  {
    "game": 12,
    "away_team": "Twins",
    "away_code": "TO",
    "home_team": "Expos",
    "home_code": "JY"
  },
  {
    "game": 12,
    "away_team": "Red Sox",
    "away_code": "LW",
    "home_team": "Marlins",
    "home_code": "PZ"
  },
  {
    "game": 12,
    "away_team": "Angels",
    "away_code": "AX",
    "home_team": "Pirates",
    "home_code": "MM"
  },
  {
    "game": 12,
    "away_team": "White Sox",
    "away_code": "MT",
    "home_team": "Wombats",
    "home_code": "YT"
  },
  {
    "game": 12,
    "away_team": "Braves",
    "away_code": "N8",
    "home_team": "Fishes",
    "home_code": "CW"
  },
  {
    "game": 13,
    "away_team": "Astros",
    "away_code": "BO",
    "home_team": "Melonheads",
    "home_code": "EX"
  },
  {
    "game": 13,
    "away_team": "Giants",
    "away_code": "C8",
    "home_team": "Mets",
    "home_code": "VS"
  },
  {
    "game": 13,
    "away_team": "Diamondbacks",
    "away_code": "TV",
    "home_team": "Indians",
    "home_code": "C0"
  },
  {
    "game": 13,
    "away_team": "Orioles",
    "away_code": "SB",
    "home_team": "Rangers",
    "home_code": "WZ"
  },
  {
    "game": 13,
    "away_team": "Royals",
    "away_code": "AT",
    "home_team": "Cubs",
    "home_code": "B@"
  },
  {
    "game": 13,
    "away_team": "Wombats",
    "away_code": "YT",
    "home_team": "Padres",
    "home_code": "M@"
  },
  {
    "game": 13,
    "away_team": "Pirates",
    "away_code": "MM",
    "home_team": "Twins",
    "home_code": "TO"
  },
  {
    "game": 13,
    "away_team": "Marlins",
    "away_code": "PZ",
    "home_team": "Angels",
    "home_code": "AX"
  },
  {
    "game": 13,
    "away_team": "Expos",
    "away_code": "JY",
    "home_team": "Braves",
    "home_code": "N8"
  },
  {
    "game": 13,
    "away_team": "Red Sox",
    "away_code": "LW",
    "home_team": "White Sox",
    "home_code": "MT"
  },
  {
    "game": 13,
    "away_team": "Tigers",
    "away_code": "BB",
    "home_team": "Fishes",
    "home_code": "CW"
  },
  {
    "game": 14,
    "away_team": "Padres",
    "away_code": "M@",
    "home_team": "Astros",
    "home_code": "BO"
  },
  {
    "game": 14,
    "away_team": "Royals",
    "away_code": "AT",
    "home_team": "Orioles",
    "home_code": "SB"
  },
  {
    "game": 14,
    "away_team": "Indians",
    "away_code": "C0",
    "home_team": "Rangers",
    "home_code": "WZ"
  },
  {
    "game": 14,
    "away_team": "Melonheads",
    "away_code": "EX",
    "home_team": "Mets",
    "home_code": "VS"
  },
  {
    "game": 14,
    "away_team": "Cubs",
    "away_code": "B@",
    "home_team": "Diamondbacks",
    "home_code": "TV"
  },
  {
    "game": 14,
    "away_team": "Giants",
    "away_code": "C8",
    "home_team": "White Sox",
    "home_code": "MT"
  },
  {
    "game": 14,
    "away_team": "Twins",
    "away_code": "TO",
    "home_team": "Angels",
    "home_code": "AX"
  },
  {
    "game": 14,
    "away_team": "Red Sox",
    "away_code": "LW",
    "home_team": "Braves",
    "home_code": "N8"
  },
  {
    "game": 14,
    "away_team": "Wombats",
    "away_code": "YT",
    "home_team": "Expos",
    "home_code": "JY"
  },
  {
    "game": 14,
    "away_team": "Marlins",
    "away_code": "PZ",
    "home_team": "Tigers",
    "home_code": "BB"
  },
  {
    "game": 14,
    "away_team": "Fishes",
    "away_code": "CW",
    "home_team": "Pirates",
    "home_code": "MM"
  }
 ]
module.exports = { s1003teams, s1003schedule};
