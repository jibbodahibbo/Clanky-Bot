// http://www.convertcsv.com/csv-to-json.htm

const s9teams={
"Reds" : "<@&995878927753019412>",
"Braves" : "<@&603768704295108628>",
"Pirates" : "<@&603286831823585280>",
"Angels" : "<@&702678271749390457>",
"Bombers" : "<@&603291831744200737>",
"Cubs" : "<@&496817127668580362>",
"Devil Rays" : "<@&496788937705259009>",
"Rockies" : "<@&448576748767150091>",
"Rangers" : "<@&448575732344553482>",
"Hornets" : "<@&604520363673518119>",
"Orioles" : "<@&496817420753960961>",
"Royals" : "<@&847665786708688936>",
"Marlins" : "<@&496815324553936898>",
"Wombats" : "<@&603589502891458574>",
"Giants" : "<@&702678421423128637>",
"Brewers" : "<@&496530637596000287>",
"Yankees" : "<@&668468071861583891>",
"Diamondbacks" : "<@&783577309000368189>",
"Athletics" : "<@&703992227160129667>",
"Fishes" : "<@&603589333676589066>",
"Cardinals" : "<@&603768487676215316>",
"Monsters" : "<@&496817066201055232>",
"Melonheads" : "<@&448576610489335809>",
"Twins" : "<@&603589134744944670>"
}

//"game": "1",
//"away_team": "As",
//"away_code": "NF",
//"home_team": "Red Sox",
//"home_code": "XD"

const s9schedule =[
 {
   "game": 1,
   "away_team": "Hornets",
   "away_code": "DW",
   "home_team": "Royals",
   "home_code": "VS"
 },
 {
   "game": 1,
   "away_team": "Rangers",
   "away_code": "26",
   "home_team": "Orioles",
   "home_code": "MV"
 },
 {
   "game": 1,
   "away_team": "Devil Rays",
   "away_code": "AE",
   "home_team": "Pirates",
   "home_code": "QM"
 },
 {
   "game": 1,
   "away_team": "Reds",
   "away_code": "JY",
   "home_team": "Cubs",
   "home_code": "EM"
 },
 {
   "game": 1,
   "away_team": "Bombers",
   "away_code": "GY",
   "home_team": "Braves",
   "home_code": "N8"
 },
 {
   "game": 1,
   "away_team": "Rockies",
   "away_code": "MA",
   "home_team": "Angels",
   "home_code": "BO"
 },
 {
   "game": 1,
   "away_team": "Melonheads",
   "away_code": "EX",
   "home_team": "Cardinals",
   "home_code": "WZ"
 },
 {
   "game": 1,
   "away_team": "Twins",
   "away_code": "TO",
   "home_team": "Monsters",
   "home_code": "YY"
 },
 {
   "game": 1,
   "away_team": "Yankees",
   "away_code": "C8",
   "home_team": "Giants",
   "home_code": "IT"
 },
 {
   "game": 1,
   "away_team": "Marlins",
   "away_code": "MM",
   "home_team": "Fishes",
   "home_code": "CW"
 },
 {
   "game": 1,
   "away_team": "Athletics",
   "away_code": "AT",
   "home_team": "Wombats",
   "home_code": "YT"
 },
 {
   "game": 1,
   "away_team": "Diamondbacks",
   "away_code": "TV",
   "home_team": "Brewers",
   "home_code": "SB"
 },
 {
   "game": 2,
   "away_team": "Royals",
   "away_code": "VS",
   "home_team": "Reds",
   "home_code": "JY"
 },
 {
   "game": 2,
   "away_team": "Pirates",
   "away_code": "QM",
   "home_team": "Hornets",
   "home_code": "DW"
 },
 {
   "game": 2,
   "away_team": "Cubs",
   "away_code": "EM",
   "home_team": "Rockies",
   "home_code": "MA"
 },
 {
   "game": 2,
   "away_team": "Devil Rays",
   "away_code": "AE",
   "home_team": "Bombers",
   "home_code": "GY"
 },
 {
   "game": 2,
   "away_team": "Braves",
   "away_code": "N8",
   "home_team": "Rangers",
   "home_code": "26"
 },
 {
   "game": 2,
   "away_team": "Orioles",
   "away_code": "MV",
   "home_team": "Angels",
   "home_code": "BO"
 },
 {
   "game": 2,
   "away_team": "Cardinals",
   "away_code": "WZ",
   "home_team": "Marlins",
   "home_code": "MM"
 },
 {
   "game": 2,
   "away_team": "Giants",
   "away_code": "IT",
   "home_team": "Melonheads",
   "home_code": "EX"
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
   "away_team": "Yankees",
   "away_code": "C8",
   "home_team": "Athletics",
   "home_code": "AT"
 },
 {
   "game": 2,
   "away_team": "Wombats",
   "away_code": "YT",
   "home_team": "Twins",
   "home_code": "TO"
 },
 {
   "game": 2,
   "away_team": "Monsters",
   "away_code": "YY",
   "home_team": "Brewers",
   "home_code": "SB"
 },
 {
   "game": 3,
   "away_team": "Royals",
   "away_code": "VS",
   "home_team": "Rangers",
   "home_code": "26"
 },
 {
   "game": 3,
   "away_team": "Hornets",
   "away_code": "DW",
   "home_team": "Orioles",
   "home_code": "MV"
 },
 {
   "game": 3,
   "away_team": "Reds",
   "away_code": "JY",
   "home_team": "Devil Rays",
   "home_code": "AE"
 },
 {
   "game": 3,
   "away_team": "Angels",
   "away_code": "BO",
   "home_team": "Cubs",
   "home_code": "EM"
 },
 {
   "game": 3,
   "away_team": "Bombers",
   "away_code": "GY",
   "home_team": "Pirates",
   "home_code": "QM"
 },
 {
   "game": 3,
   "away_team": "Rockies",
   "away_code": "MA",
   "home_team": "Braves",
   "home_code": "N8"
 },
 {
   "game": 3,
   "away_team": "Cardinals",
   "away_code": "WZ",
   "home_team": "Twins",
   "home_code": "TO"
 },
 {
   "game": 3,
   "away_team": "Melonheads",
   "away_code": "EX",
   "home_team": "Monsters",
   "home_code": "YY"
 },
 {
   "game": 3,
   "away_team": "Marlins",
   "away_code": "MM",
   "home_team": "Yankees",
   "home_code": "C8"
 },
 {
   "game": 3,
   "away_team": "Brewers",
   "away_code": "SB",
   "home_team": "Fishes",
   "home_code": "CW"
 },
 {
   "game": 3,
   "away_team": "Athletics",
   "away_code": "AT",
   "home_team": "Giants",
   "home_code": "IT"
 },
 {
   "game": 3,
   "away_team": "Diamondbacks",
   "away_code": "TV",
   "home_team": "Wombats",
   "home_code": "YT"
 },
 {
   "game": 4,
   "away_team": "Cubs",
   "away_code": "EM",
   "home_team": "Royals",
   "home_code": "VS"
 },
 {
   "game": 4,
   "away_team": "Rangers",
   "away_code": "26",
   "home_team": "Bombers",
   "home_code": "GY"
 },
 {
   "game": 4,
   "away_team": "Devil Rays",
   "away_code": "AE",
   "home_team": "Hornets",
   "home_code": "DW"
 },
 {
   "game": 4,
   "away_team": "Orioles",
   "away_code": "MV",
   "home_team": "Rockies",
   "home_code": "MA"
 },
 {
   "game": 4,
   "away_team": "Pirates",
   "away_code": "QM",
   "home_team": "Reds",
   "home_code": "JY"
 },
 {
   "game": 4,
   "away_team": "Braves",
   "away_code": "N8",
   "home_team": "Angels",
   "home_code": "BO"
 },
 {
   "game": 4,
   "away_team": "Fishes",
   "away_code": "CW",
   "home_team": "Cardinals",
   "home_code": "WZ"
 },
 {
   "game": 4,
   "away_team": "Twins",
   "away_code": "TO",
   "home_team": "Athletics",
   "home_code": "AT"
 },
 {
   "game": 4,
   "away_team": "Yankees",
   "away_code": "C8",
   "home_team": "Melonheads",
   "home_code": "EX"
 },
 {
   "game": 4,
   "away_team": "Monsters",
   "away_code": "YY",
   "home_team": "Diamondbacks",
   "home_code": "TV"
 },
 {
   "game": 4,
   "away_team": "Giants",
   "away_code": "IT",
   "home_team": "Marlins",
   "home_code": "MM"
 },
 {
   "game": 4,
   "away_team": "Wombats",
   "away_code": "YT",
   "home_team": "Brewers",
   "home_code": "SB"
 },
 {
   "game": 5,
   "away_team": "Angels",
   "away_code": "BO",
   "home_team": "Royals",
   "home_code": "VS"
 },
 {
   "game": 5,
   "away_team": "Orioles",
   "away_code": "MV",
   "home_team": "Reds",
   "home_code": "JY"
 },
 {
   "game": 5,
   "away_team": "Bombers",
   "away_code": "GY",
   "home_team": "Cubs",
   "home_code": "EM"
 },
 {
   "game": 5,
   "away_team": "Rockies",
   "away_code": "MA",
   "home_team": "Devil Rays",
   "home_code": "AE"
 },
 {
   "game": 5,
   "away_team": "Rangers",
   "away_code": "26",
   "home_team": "Pirates",
   "home_code": "QM"
 },
 {
   "game": 5,
   "away_team": "Braves",
   "away_code": "N8",
   "home_team": "Hornets",
   "home_code": "DW"
 },
 {
   "game": 5,
   "away_team": "Brewers",
   "away_code": "SB",
   "home_team": "Cardinals",
   "home_code": "WZ"
 },
 {
   "game": 5,
   "away_team": "Monsters",
   "away_code": "YY",
   "home_team": "Marlins",
   "home_code": "MM"
 },
 {
   "game": 5,
   "away_team": "Athletics",
   "away_code": "AT",
   "home_team": "Fishes",
   "home_code": "CW"
 },
 {
   "game": 5,
   "away_team": "Diamondbacks",
   "away_code": "TV",
   "home_team": "Yankees",
   "home_code": "C8"
 },
 {
   "game": 5,
   "away_team": "Twins",
   "away_code": "TO",
   "home_team": "Giants",
   "home_code": "IT"
 },
 {
   "game": 5,
   "away_team": "Wombats",
   "away_code": "YT",
   "home_team": "Melonheads",
   "home_code": "EX"
 },
 {
   "game": 6,
   "away_team": "Royals",
   "away_code": "VS",
   "home_team": "Rockies",
   "home_code": "MA"
 },
 {
   "game": 6,
   "away_team": "Cubs",
   "away_code": "EM",
   "home_team": "Orioles",
   "home_code": "MV"
 },
 {
   "game": 6,
   "away_team": "Devil Rays",
   "away_code": "AE",
   "home_team": "Rangers",
   "home_code": "26"
 },
 {
   "game": 6,
   "away_team": "Hornets",
   "away_code": "DW",
   "home_team": "Bombers",
   "home_code": "GY"
 },
 {
   "game": 6,
   "away_team": "Reds",
   "away_code": "JY",
   "home_team": "Angels",
   "home_code": "BO"
 },
 {
   "game": 6,
   "away_team": "Pirates",
   "away_code": "QM",
   "home_team": "Braves",
   "home_code": "N8"
 },
 {
   "game": 6,
   "away_team": "Cardinals",
   "away_code": "WZ",
   "home_team": "Diamondbacks",
   "home_code": "TV"
 },
 {
   "game": 6,
   "away_team": "Fishes",
   "away_code": "CW",
   "home_team": "Monsters",
   "home_code": "YY"
 },
 {
   "game": 6,
   "away_team": "Yankees",
   "away_code": "C8",
   "home_team": "Twins",
   "home_code": "TO"
 },
 {
   "game": 6,
   "away_team": "Melonheads",
   "away_code": "EX",
   "home_team": "Athletics",
   "home_code": "AT"
 },
 {
   "game": 6,
   "away_team": "Marlins",
   "away_code": "MM",
   "home_team": "Brewers",
   "home_code": "SB"
 },
 {
   "game": 6,
   "away_team": "Giants",
   "away_code": "IT",
   "home_team": "Wombats",
   "home_code": "YT"
 },
 {
   "game": 7,
   "away_team": "Royals",
   "away_code": "VS",
   "home_team": "Braves",
   "home_code": "N8"
 },
 {
   "game": 7,
   "away_team": "Pirates",
   "away_code": "QM",
   "home_team": "Orioles",
   "home_code": "MV"
 },
 {
   "game": 7,
   "away_team": "Cubs",
   "away_code": "EM",
   "home_team": "Devil Rays",
   "home_code": "AE"
 },
 {
   "game": 7,
   "away_team": "Rockies",
   "away_code": "MA",
   "home_team": "Bombers",
   "home_code": "GY"
 },
 {
   "game": 7,
   "away_team": "Reds",
   "away_code": "JY",
   "home_team": "Hornets",
   "home_code": "DW"
 },
 {
   "game": 7,
   "away_team": "Angels",
   "away_code": "BO",
   "home_team": "Rangers",
   "home_code": "26"
 },
 {
   "game": 7,
   "away_team": "Cardinals",
   "away_code": "WZ",
   "home_team": "Wombats",
   "home_code": "YT"
 },
 {
   "game": 7,
   "away_team": "Giants",
   "away_code": "IT",
   "home_team": "Monsters",
   "home_code": "YY"
 },
 {
   "game": 7,
   "away_team": "Fishes",
   "away_code": "GY",
   "home_team": "Yankees",
   "home_code": "C8"
 },
 {
   "game": 7,
   "away_team": "Diamondbacks",
   "away_code": "TV",
   "home_team": "Athletics",
   "home_code": "AT"
 },
 {
   "game": 7,
   "away_team": "Marlins",
   "away_code": "MM",
   "home_team": "Melonheads",
   "home_code": "EX"
 },
 {
   "game": 7,
   "away_team": "Brewers",
   "away_code": "SB",
   "home_team": "Twins",
   "home_code": "TO"
 },
 {
   "game": 8,
   "away_team": "Orioles",
   "away_code": "MV",
   "home_team": "Royals",
   "home_code": "VS"
 },
 {
   "game": 8,
   "away_team": "Rangers",
   "away_code": "26",
   "home_team": "Hornets",
   "home_code": "DW"
 },
 {
   "game": 8,
   "away_team": "Braves",
   "away_code": "N8",
   "home_team": "Devil Rays",
   "home_code": "AE"
 },
 {
   "game": 8,
   "away_team": "Rockies",
   "away_code": "MA",
   "home_team": "Reds",
   "home_code": "JY"
 },
 {
   "game": 8,
   "away_team": "Pirates",
   "away_code": "QM",
   "home_team": "Cubs",
   "home_code": "EM"
 },
 {
   "game": 8,
   "away_team": "Bombers",
   "away_code": "GY",
   "home_team": "Angels",
   "home_code": "BO"
 },
 {
   "game": 8,
   "away_team": "Monsters",
   "away_code": "YY",
   "home_team": "Cardinals",
   "home_code": "WZ"
 },
 {
   "game": 8,
   "away_team": "Twins",
   "away_code": "TO",
   "home_team": "Melonheads",
   "home_code": "EX"
 },
 {
   "game": 8,
   "away_team": "Wombats",
   "away_code": "YT",
   "home_team": "Yankees",
   "home_code": "C8"
 },
 {
   "game": 8,
   "away_team": "Diamondbacks",
   "away_code": "TV",
   "home_team": "Marlins",
   "home_code": "MM"
 },
 {
   "game": 8,
   "away_team": "Giants",
   "away_code": "IT",
   "home_team": "Fishes",
   "home_code": "CW"
 },
 {
   "game": 8,
   "away_team": "Athletics",
   "away_code": "AT",
   "home_team": "Brewers",
   "home_code": "SB"
 },
 {
   "game": 9,
   "away_team": "Devil Rays",
   "away_code": "AE",
   "home_team": "Royals",
   "home_code": "VS"
 },
 {
   "game": 9,
   "away_team": "Rangers",
   "away_code": "26",
   "home_team": "Rockies",
   "home_code": "MA"
 },
 {
   "game": 9,
   "away_team": "Bombers",
   "away_code": "GY",
   "home_team": "Orioles",
   "home_code": "MV"
 },
 {
   "game": 9,
   "away_team": "Hornets",
   "away_code": "DW",
   "home_team": "Cubs",
   "home_code": "EM"
 },
 {
   "game": 9,
   "away_team": "Braves",
   "away_code": "N8",
   "home_team": "Reds",
   "home_code": "JY"
 },
 {
   "game": 9,
   "away_team": "Angels",
   "away_code": "BO",
   "home_team": "Pirates",
   "home_code": "QM"
 },
 {
   "game": 9,
   "away_team": "Yankees",
   "away_code": "C8",
   "home_team": "Cardinals",
   "home_code": "WZ"
 },
 {
   "game": 9,
   "away_team": "Twins",
   "away_code": "TO",
   "home_team": "Diamondbacks",
   "home_code": "TV"
 },
 {
   "game": 9,
   "away_team": "Athletics",
   "away_code": "AT",
   "home_team": "Monsters",
   "home_code": "YY"
 },
 {
   "game": 9,
   "away_team": "Melonheads",
   "away_code": "EX",
   "home_team": "Fishes",
   "home_code": "CW"
 },
 {
   "game": 9,
   "away_team": "Wombats",
   "away_code": "YT",
   "home_team": "Marlins",
   "home_code": "MM"
 },
 {
   "game": 9,
   "away_team": "Brewers",
   "away_code": "SB",
   "home_team": "Giants",
   "home_code": "IT"
 },
 {
   "game": 10,
   "away_team": "Royals",
   "away_code": "VS",
   "home_team": "Hornets",
   "home_code": "DW"
 },
 {
   "game": 10,
   "away_team": "Orioles",
   "away_code": "MV",
   "home_team": "Rangers",
   "home_code": "26"
 },
 {
   "game": 10,
   "away_team": "Angels",
   "away_code": "BO",
   "home_team": "Devil Rays",
   "home_code": "AE"
 },
 {
   "game": 10,
   "away_team": "Cubs",
   "away_code": "EM",
   "home_team": "Braves",
   "home_code": "N8"
 },
 {
   "game": 10,
   "away_team": "Reds",
   "away_code": "JY",
   "home_team": "Bombers",
   "home_code": "GY"
 },
 {
   "game": 10,
   "away_team": "Rockies",
   "away_code": "MA",
   "home_team": "Pirates",
   "home_code": "QM"
 },
 {
   "game": 10,
   "away_team": "Cardinals",
   "away_code": "WZ",
   "home_team": "Melonheads",
   "home_code": "EX"
 },
 {
   "game": 10,
   "away_team": "Monsters",
   "away_code": "YY",
   "home_team": "Twins",
   "home_code": "TO"
 },
 {
   "game": 10,
   "away_team": "Brewers",
   "away_code": "SB",
   "home_team": "Yankees",
   "home_code": "C8"
 },
 {
   "game": 10,
   "away_team": "Fishes",
   "away_code": "CW",
   "home_team": "Wombats",
   "home_code": "YT"
 },
 {
   "game": 10,
   "away_team": "Marlins",
   "away_code": "MM",
   "home_team": "Athletics",
   "home_code": "AT"
 },
 {
   "game": 10,
   "away_team": "Diamondbacks",
   "away_code": "TV",
   "home_team": "Giants",
   "home_code": "IT"
 },
 {
   "game": 11,
   "away_team": "Pirates",
   "away_code": "QM",
   "home_team": "Royals",
   "home_code": "VS"
 },
 {
   "game": 11,
   "away_team": "Hornets",
   "away_code": "DW",
   "home_team": "Angels",
   "home_code": "BO"
 },
 {
   "game": 11,
   "away_team": "Rockies",
   "away_code": "MA",
   "home_team": "Cubs",
   "home_code": "EM"
 },
 {
   "game": 11,
   "away_team": "Bombers",
   "away_code": "GY",
   "home_team": "Devil Rays",
   "home_code": "AE"
 },
 {
   "game": 11,
   "away_team": "Rangers",
   "away_code": "26",
   "home_team": "Reds",
   "home_code": "JY"
 },
 {
   "game": 11,
   "away_team": "Braves",
   "away_code": "N8",
   "home_team": "Orioles",
   "home_code": "MV"
 },
 {
   "game": 11,
   "away_team": "Giants",
   "away_code": "IT",
   "home_team": "Cardinals",
   "home_code": "WZ"
 },
 {
   "game": 11,
   "away_team": "Melonheads",
   "away_code": "EX",
   "home_team": "Brewers",
   "home_code": "SB"
 },
 {
   "game": 11,
   "away_team": "Diamondbacks",
   "away_code": "TO",
   "home_team": "Fishes",
   "home_code": "CW"
 },
 {
   "game": 11,
   "away_team": "Athletics",
   "away_code": "AT",
   "home_team": "Yankees",
   "home_code": "C8"
 },
 {
   "game": 11,
   "away_team": "Twins",
   "away_code": "TO",
   "home_team": "Marlins",
   "home_code": "MM"
 },
 {
   "game": 11,
   "away_team": "Wombats",
   "away_code": "YT",
   "home_team": "Monsters",
   "home_code": "YY"
 },
 {
   "game": 12,
   "away_team": "Royals",
   "away_code": "VS",
   "home_team": "Bombers",
   "home_code": "GY"
 },
 {
   "game": 12,
   "away_team": "Cubs",
   "away_code": "EM",
   "home_team": "Rangers",
   "home_code": "26"
 },
 {
   "game": 12,
   "away_team": "Orioles",
   "away_code": "MV",
   "home_team": "Devil Rays",
   "home_code": "AE"
 },
 {
   "game": 12,
   "away_team": "Hornets",
   "away_code": "DW",
   "home_team": "Rockies",
   "home_code": "MA"
 },
 {
   "game": 12,
   "away_team": "Reds",
   "away_code": "JY",
   "home_team": "Pirates",
   "home_code": "QM"
 },
 {
   "game": 12,
   "away_team": "Angels",
   "away_code": "BO",
   "home_team": "Braves",
   "home_code": "N8"
 },
 {
   "game": 12,
   "away_team": "Cardinals",
   "away_code": "WZ",
   "home_team": "Athletics",
   "home_code": "AT"
 },
 {
   "game": 12,
   "away_team": "Fishes",
   "away_code": "CW",
   "home_team": "Twins",
   "home_code": "TO"
 },
 {
   "game": 12,
   "away_team": "Monsters",
   "away_code": "YY",
   "home_team": "Yankees",
   "home_code": "C8"
 },
 {
   "game": 12,
   "away_team": "Melonheads",
   "away_code": "EX",
   "home_team": "Diamondbacks",
   "home_code": "TV"
 },
 {
   "game": 12,
   "away_team": "Marlins",
   "away_code": "MM",
   "home_team": "Giants",
   "home_code": "IT"
 },
 {
   "game": 12,
   "away_team": "Brewers",
   "away_code": "SB",
   "home_team": "Wombats",
   "home_code": "YT"
 },
 {
   "game": 13,
   "away_team": "Rangers",
   "away_code": "26",
   "home_team": "Royals",
   "home_code": "VS"
 },
 {
   "game": 13,
   "away_team": "Orioles",
   "away_code": "MV",
   "home_team": "Hornets",
   "home_code": "DW"
 },
 {
   "game": 13,
   "away_team": "Cubs",
   "away_code": "EM",
   "home_team": "Bombers",
   "home_code": "GY"
 },
 {
   "game": 13,
   "away_team": "Devil Rays",
   "away_code": "AE",
   "home_team": "Rockies",
   "home_code": "MA"
 },
 {
   "game": 13,
   "away_team": "Angels",
   "away_code": "BO",
   "home_team": "Reds",
   "home_code": "JY"
 },
 {
   "game": 13,
   "away_team": "Braves",
   "away_code": "N8",
   "home_team": "Pirates",
   "home_code": "QM"
 },
 {
   "game": 13,
   "away_team": "Twins",
   "away_code": "TO",
   "home_team": "Cardinals",
   "home_code": "WZ"
 },
 {
   "game": 13,
   "away_team": "Monsters",
   "away_code": "YY",
   "home_team": "Melonheads",
   "home_code": "EX"
 },
 {
   "game": 13,
   "away_team": "Fishes",
   "away_code": "CW",
   "home_team": "Athletics",
   "home_code": "AT"
 },
 {
   "game": 13,
   "away_team": "Yankees",
   "away_code": "C8",
   "home_team": "Diamondbacks",
   "home_code": "TV"
 },
 {
   "game": 13,
   "away_team": "Brewers",
   "away_code": "SB",
   "home_team": "Marlins",
   "home_code": "MM"
 },
 {
   "game": 13,
   "away_team": "Wombats",
   "away_code": "YT",
   "home_team": "Giants",
   "home_code": "IT"
 },
 {
   "game": 14,
   "away_team": "Royals",
   "away_code": "VS",
   "home_team": "Orioles",
   "home_code": "MV"
 },
 {
   "game": 14,
   "away_team": "Hornets",
   "away_code": "DW",
   "home_team": "Rangers",
   "home_code": "26"
 },
 {
   "game": 14,
   "away_team": "Devil Rays",
   "away_code": "AE",
   "home_team": "Cubs",
   "home_code": "EM"
 },
 {
   "game": 14,
   "away_team": "Bombers",
   "away_code": "GY",
   "home_team": "Rockies",
   "home_code": "MA"
 },
 {
   "game": 14,
   "away_team": "Reds",
   "away_code": "JY",
   "home_team": "Braves",
   "home_code": "N8"
 },
 {
   "game": 14,
   "away_team": "Pirates",
   "away_code": "QM",
   "home_team": "Angels",
   "home_code": "BO"
 },
 {
   "game": 14,
   "away_team": "Cardinals",
   "away_code": "WZ",
   "home_team": "Monsters",
   "home_code": "YY"
 },
 {
   "game": 14,
   "away_team": "Melonheads",
   "away_code": "EX",
   "home_team": "Twins",
   "home_code": "TO"
 },
 {
   "game": 14,
   "away_team": "Yankees",
   "away_code": "C8",
   "home_team": "Fishes",
   "home_code": "CW"
 },
 {
   "game": 14,
   "away_team": "Athletics",
   "away_code": "AT",
   "home_team": "Diamondbacks",
   "home_code": "TV"
 },
 {
   "game": 14,
   "away_team": "Marlins",
   "away_code": "MM",
   "home_team": "Wombats",
   "home_code": "YT"
 },
 {
   "game": 14,
   "away_team": "Giants",
   "away_code": "IT",
   "home_team": "Brewers",
   "home_code": "SB"
 }
]
module.exports = { s9teams, s9schedule};
