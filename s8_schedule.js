// http://www.convertcsv.com/csv-to-json.htm

const s8teams={
"Giants" : "<@&702678421423128637>",
"Twins" : "<@&603589134744944670>",
"Melonheads" : "<@&448576610489335809>",
"Devil Rays" : "<@&496788937705259009>",
"Cardinals" : "<@&603768487676215316>",
"Monsters" : "<@&496817066201055232>",
"Tigers" : "<@&603606321492787210>",
"Pirates" : "<@&603286831823585280>",
"Padres" : "<@&603591280471048213>",
"Mariners" : "<@&496815444116635658>",
"Rangers" : "<@&448575732344553482>",
"Hornets" : "<@&604520363673518119>",
"Orioles" : "<@&496817420753960961>",
"Wombats" : "<@&603589502891458574>",
"Angels" : "<@&702678271749390457>",
"Bombers" : "<@&603291831744200737>",
"Fishes" : "<@&603589333676589066>",
"Braves" : "<@&603768704295108628>",
"Cubs" : "<@&496817127668580362>",
"Royals" : "<@&847665786708688936>",
"Rockies" : "<@&448576748767150091>",
"Athletics" : "<@&703992227160129667>",
"Expos" : "<@&496713526778265624>",
"Blue Jays" : "<@&603589804868763648>"
}

//"game": "1",
//"away_team": "As",
//"away_code": "NF",
//"home_team": "Red Sox",
//"home_code": "XD"

const s8schedule =[
 {
   "Game": "1",
   "Away Team": "Padres",
   "Away Code": "JB",
   "Home Team": "Mariners",
   "Home Code": "JD"
 },
 {
   "Game": "1",
   "Away Team": "Rangers",
   "Away Code": "JG",
   "Home Team": "Hornets",
   "Home Code": "GH"
 },
 {
   "Game": "1",
   "Away Team": "Giants",
   "Away Code": "JC",
   "Home Team": "Cardinals",
   "Home Code": "JE"
 },
 {
   "Game": "1",
   "Away Team": "Twins",
   "Away Code": "IK",
   "Home Team": "Monsters",
   "Home Code": "GJ"
 },
 {
   "Game": "1",
   "Away Team": "Melonheads",
   "Away Code": "GI",
   "Home Team": "Tigers",
   "Home Code": "IE"
 },
 {
   "Game": "1",
   "Away Team": "Devil Rays",
   "Away Code": "JF",
   "Home Team": "Pirates",
   "Home Code": "JA"
 },
 {
   "Game": "1",
   "Away Team": "Rockies",
   "Away Code": "ID",
   "Home Team": "Blue Jays",
   "Home Code": "JH"
 },
 {
   "Game": "1",
   "Away Team": "Athletics",
   "Away Code": "IO",
   "Home Team": "Expos",
   "Home Code": "IL"
 },
 {
   "Game": "1",
   "Away Team": "Fishes",
   "Away Code": "GG",
   "Home Team": "Angels",
   "Home Code": "HK"
 },
 {
   "Game": "1",
   "Away Team": "Braves",
   "Away Code": "HM",
   "Home Team": "Bombers",
   "Home Code": "GF"
 },
 {
   "Game": "1",
   "Away Team": "Cubs",
   "Away Code": "HP",
   "Home Team": "Orioles",
   "Home Code": "HN"
 },
 {
   "Game": "1",
   "Away Team": "Royals",
   "Away Code": "IH",
   "Home Team": "Wombats",
   "Home Code": "GK"
 },
 {
   "Game": "2",
   "Away Team": "Cardinals",
   "Away Code": "JE",
   "Home Team": "Padres",
   "Home Code": "JB"
 },
 {
   "Game": "2",
   "Away Team": "Monsters",
   "Away Code": "GJ",
   "Home Team": "Mariners",
   "Home Code": "JD"
 },
 {
   "Game": "2",
   "Away Team": "Tigers",
   "Away Code": "IE",
   "Home Team": "Rangers",
   "Home Code": "JG"
 },
 {
   "Game": "2",
   "Away Team": "Pirates",
   "Away Code": "JA",
   "Home Team": "Hornets",
   "Home Code": "GH"
 },
 {
   "Game": "2",
   "Away Team": "Giants",
   "Away Code": "JC",
   "Home Team": "Melonheads",
   "Home Code": "GI"
 },
 {
   "Game": "2",
   "Away Team": "Twins",
   "Away Code": "IK",
   "Home Team": "Devil Rays",
   "Home Code": "JF"
 },
 {
   "Game": "2",
   "Away Team": "Rockies",
   "Away Code": "ID",
   "Home Team": "Athletics",
   "Home Code": "IO"
 },
 {
   "Game": "2",
   "Away Team": "Expos",
   "Away Code": "IL",
   "Home Team": "Blue Jays",
   "Home Code": "JH"
 },
 {
   "Game": "2",
   "Away Team": "Orioles",
   "Away Code": "HN",
   "Home Team": "Fishes",
   "Home Code": "GG"
 },
 {
   "Game": "2",
   "Away Team": "Wombats",
   "Away Code": "GK",
   "Home Team": "Braves",
   "Home Code": "HM"
 },
 {
   "Game": "2",
   "Away Team": "Angels",
   "Away Code": "HK",
   "Home Team": "Cubs",
   "Home Code": "HP"
 },
 {
   "Game": "2",
   "Away Team": "Bombers",
   "Away Code": "GF",
   "Home Team": "Royals",
   "Home Code": "IH"
 },
 {
   "Game": "3",
   "Away Team": "Padres",
   "Away Code": "JB",
   "Home Team": "Giants",
   "Home Code": "JC"
 },
 {
   "Game": "3",
   "Away Team": "Mariners",
   "Away Code": "JD",
   "Home Team": "Twins",
   "Home Code": "IK"
 },
 {
   "Game": "3",
   "Away Team": "Rangers",
   "Away Code": "JG",
   "Home Team": "Melonheads",
   "Home Code": "GI"
 },
 {
   "Game": "3",
   "Away Team": "Hornets",
   "Away Code": "GH",
   "Home Team": "Devil Rays",
   "Home Code": "JF"
 },
 {
   "Game": "3",
   "Away Team": "Monsters",
   "Away Code": "GJ",
   "Home Team": "Cardinals",
   "Home Code": "JE"
 },
 {
   "Game": "3",
   "Away Team": "Tigers",
   "Away Code": "IE",
   "Home Team": "Pirates",
   "Home Code": "JA"
 },
 {
   "Game": "3",
   "Away Team": "Fishes",
   "Away Code": "GG",
   "Home Team": "Rockies",
   "Home Code": "ID"
 },
 {
   "Game": "3",
   "Away Team": "Braves",
   "Away Code": "HM",
   "Home Team": "Athletics",
   "Home Code": "IO"
 },
 {
   "Game": "3",
   "Away Team": "Cubs",
   "Away Code": "HP",
   "Home Team": "Expos",
   "Home Code": "IL"
 },
 {
   "Game": "3",
   "Away Team": "Royals",
   "Away Code": "IH",
   "Home Team": "Blue Jays",
   "Home Code": "JH"
 },
 {
   "Game": "3",
   "Away Team": "Orioles",
   "Away Code": "HN",
   "Home Team": "Angels",
   "Home Code": "HK"
 },
 {
   "Game": "3",
   "Away Team": "Wombats",
   "Away Code": "GK",
   "Home Team": "Bombers",
   "Home Code": "GF"
 },
 {
   "Game": "4",
   "Away Team": "Rangers",
   "Away Code": "JG",
   "Home Team": "Padres",
   "Home Code": "JB"
 },
 {
   "Game": "4",
   "Away Team": "Hornets",
   "Away Code": "GH",
   "Home Team": "Mariners",
   "Home Code": "JD"
 },
 {
   "Game": "4",
   "Away Team": "Twins",
   "Away Code": "IK",
   "Home Team": "Cardinals",
   "Home Code": "JE"
 },
 {
   "Game": "4",
   "Away Team": "Melonheads",
   "Away Code": "GI",
   "Home Team": "Monsters",
   "Home Code": "GJ"
 },
 {
   "Game": "4",
   "Away Team": "Devil Rays",
   "Away Code": "JF",
   "Home Team": "Tigers",
   "Home Code": "IE"
 },
 {
   "Game": "4",
   "Away Team": "Giants",
   "Away Code": "JC",
   "Home Team": "Pirates",
   "Home Code": "JA"
 },
 {
   "Game": "4",
   "Away Team": "Rockies",
   "Away Code": "ID",
   "Home Team": "Orioles",
   "Home Code": "HN"
 },
 {
   "Game": "4",
   "Away Team": "Athletics",
   "Away Code": "IO",
   "Home Team": "Wombats",
   "Home Code": "GK"
 },
 {
   "Game": "4",
   "Away Team": "Expos",
   "Away Code": "IL",
   "Home Team": "Angels",
   "Home Code": "HK"
 },
 {
   "Game": "4",
   "Away Team": "Blue Jays",
   "Away Code": "JH",
   "Home Team": "Bombers",
   "Home Code": "GF"
 },
 {
   "Game": "4",
   "Away Team": "Braves",
   "Away Code": "HM",
   "Home Team": "Fishes",
   "Home Code": "GG"
 },
 {
   "Game": "4",
   "Away Team": "Cubs",
   "Away Code": "HP",
   "Home Team": "Royals",
   "Home Code": "IH"
 },
 {
   "Game": "5",
   "Away Team": "Padres",
   "Away Code": "JB",
   "Home Team": "Monsters",
   "Home Code": "GJ"
 },
 {
   "Game": "5",
   "Away Team": "Mariners",
   "Away Code": "JD",
   "Home Team": "Tigers",
   "Home Code": "IE"
 },
 {
   "Game": "5",
   "Away Team": "Rangers",
   "Away Code": "JG",
   "Home Team": "Pirates",
   "Home Code": "JA"
 },
 {
   "Game": "5",
   "Away Team": "Hornets",
   "Away Code": "GH",
   "Home Team": "Cardinals",
   "Home Code": "JE"
 },
 {
   "Game": "5",
   "Away Team": "Melonheads",
   "Away Code": "GI",
   "Home Team": "Twins",
   "Home Code": "IK"
 },
 {
   "Game": "5",
   "Away Team": "Devil Rays",
   "Away Code": "JF",
   "Home Team": "Giants",
   "Home Code": "JC"
 },
 {
   "Game": "5",
   "Away Team": "Expos",
   "Away Code": "IL",
   "Home Team": "Rockies",
   "Home Code": "ID"
 },
 {
   "Game": "5",
   "Away Team": "Blue Jays",
   "Away Code": "JH",
   "Home Team": "Athletics",
   "Home Code": "IO"
 },
 {
   "Game": "5",
   "Away Team": "Wombats",
   "Away Code": "GK",
   "Home Team": "Fishes",
   "Home Code": "GG"
 },
 {
   "Game": "5",
   "Away Team": "Angels",
   "Away Code": "HK",
   "Home Team": "Braves",
   "Home Code": "HM"
 },
 {
   "Game": "5",
   "Away Team": "Bombers",
   "Away Code": "GF",
   "Home Team": "Cubs",
   "Home Code": "HP"
 },
 {
   "Game": "5",
   "Away Team": "Orioles",
   "Away Code": "HN",
   "Home Team": "Royals",
   "Home Code": "IH"
 },
 {
   "Game": "6",
   "Away Team": "Twins",
   "Away Code": "IK",
   "Home Team": "Padres",
   "Home Code": "JB"
 },
 {
   "Game": "6",
   "Away Team": "Melonheads",
   "Away Code": "GI",
   "Home Team": "Mariners",
   "Home Code": "JD"
 },
 {
   "Game": "6",
   "Away Team": "Devil Rays",
   "Away Code": "JF",
   "Home Team": "Rangers",
   "Home Code": "JG"
 },
 {
   "Game": "6",
   "Away Team": "Giants",
   "Away Code": "JC",
   "Home Team": "Hornets",
   "Home Code": "GH"
 },
 {
   "Game": "6",
   "Away Team": "Cardinals",
   "Away Code": "JE",
   "Home Team": "Tigers",
   "Home Code": "IE"
 },
 {
   "Game": "6",
   "Away Team": "Pirates",
   "Away Code": "JA",
   "Home Team": "Monsters",
   "Home Code": "GJ"
 },
 {
   "Game": "6",
   "Away Team": "Rockies",
   "Away Code": "ID",
   "Home Team": "Braves",
   "Home Code": "HM"
 },
 {
   "Game": "6",
   "Away Team": "Athletics",
   "Away Code": "IO",
   "Home Team": "Cubs",
   "Home Code": "HP"
 },
 {
   "Game": "6",
   "Away Team": "Expos",
   "Away Code": "IL",
   "Home Team": "Royals",
   "Home Code": "IH"
 },
 {
   "Game": "6",
   "Away Team": "Blue Jays",
   "Away Code": "JH",
   "Home Team": "Fishes",
   "Home Code": "GG"
 },
 {
   "Game": "6",
   "Away Team": "Angels",
   "Away Code": "HK",
   "Home Team": "Wombats",
   "Home Code": "GK"
 },
 {
   "Game": "6",
   "Away Team": "Bombers",
   "Away Code": "GF",
   "Home Team": "Orioles",
   "Home Code": "HN"
 },
 {
   "Game": "7",
   "Away Team": "Padres",
   "Away Code": "JB",
   "Home Team": "Hornets",
   "Home Code": "GH"
 },
 {
   "Game": "7",
   "Away Team": "Mariners",
   "Away Code": "JD",
   "Home Team": "Rangers",
   "Home Code": "JG"
 },
 {
   "Game": "7",
   "Away Team": "Cardinals",
   "Away Code": "JE",
   "Home Team": "Melonheads",
   "Home Code": "GI"
 },
 {
   "Game": "7",
   "Away Team": "Monsters",
   "Away Code": "GJ",
   "Home Team": "Devil Rays",
   "Home Code": "JF"
 },
 {
   "Game": "7",
   "Away Team": "Tigers",
   "Away Code": "IE",
   "Home Team": "Giants",
   "Home Code": "JC"
 },
 {
   "Game": "7",
   "Away Team": "Pirates",
   "Away Code": "JA",
   "Home Team": "Twins",
   "Home Code": "IK"
 },
 {
   "Game": "7",
   "Away Team": "Wombats",
   "Away Code": "GK",
   "Home Team": "Rockies",
   "Home Code": "ID"
 },
 {
   "Game": "7",
   "Away Team": "Angels",
   "Away Code": "HK",
   "Home Team": "Athletics",
   "Home Code": "IO"
 },
 {
   "Game": "7",
   "Away Team": "Bombers",
   "Away Code": "GF",
   "Home Team": "Expos",
   "Home Code": "IL"
 },
 {
   "Game": "7",
   "Away Team": "Orioles",
   "Away Code": "HN",
   "Home Team": "Blue Jays",
   "Home Code": "JH"
 },
 {
   "Game": "7",
   "Away Team": "Fishes",
   "Away Code": "GG",
   "Home Team": "Cubs",
   "Home Code": "HP"
 },
 {
   "Game": "7",
   "Away Team": "Royals",
   "Away Code": "IH",
   "Home Team": "Braves",
   "Home Code": "HM"
 },
 {
   "Game": "8",
   "Away Team": "Mariners",
   "Away Code": "JD",
   "Home Team": "Padres",
   "Home Code": "JB"
 },
 {
   "Game": "8",
   "Away Team": "Hornets",
   "Away Code": "GH",
   "Home Team": "Rangers",
   "Home Code": "JG"
 },
 {
   "Game": "8",
   "Away Team": "Cardinals",
   "Away Code": "JE",
   "Home Team": "Devil Rays",
   "Home Code": "JF"
 },
 {
   "Game": "8",
   "Away Team": "Monsters",
   "Away Code": "GJ",
   "Home Team": "Giants",
   "Home Code": "JC"
 },
 {
   "Game": "8",
   "Away Team": "Tigers",
   "Away Code": "IE",
   "Home Team": "Twins",
   "Home Code": "IK"
 },
 {
   "Game": "8",
   "Away Team": "Pirates",
   "Away Code": "JA",
   "Home Team": "Melonheads",
   "Home Code": "GI"
 },
 {
   "Game": "8",
   "Away Team": "Rockies",
   "Away Code": "ID",
   "Home Team": "Bombers",
   "Home Code": "GF"
 },
 {
   "Game": "8",
   "Away Team": "Athletics",
   "Away Code": "IO",
   "Home Team": "Orioles",
   "Home Code": "HN"
 },
 {
   "Game": "8",
   "Away Team": "Expos",
   "Away Code": "IL",
   "Home Team": "Wombats",
   "Home Code": "GK"
 },
 {
   "Game": "8",
   "Away Team": "Blue Jays",
   "Away Code": "JH",
   "Home Team": "Angels",
   "Home Code": "HK"
 },
 {
   "Game": "8",
   "Away Team": "Royals",
   "Away Code": "IH",
   "Home Team": "Fishes",
   "Home Code": "GG"
 },
 {
   "Game": "8",
   "Away Team": "Braves",
   "Away Code": "HM",
   "Home Team": "Cubs",
   "Home Code": "HP"
 },
 {
   "Game": "9",
   "Away Team": "Padres",
   "Away Code": "JB",
   "Home Team": "Pirates",
   "Home Code": "JA"
 },
 {
   "Game": "9",
   "Away Team": "Mariners",
   "Away Code": "JD",
   "Home Team": "Cardinals",
   "Home Code": "JE"
 },
 {
   "Game": "9",
   "Away Team": "Rangers",
   "Away Code": "JG",
   "Home Team": "Monsters",
   "Home Code": "GJ"
 },
 {
   "Game": "9",
   "Away Team": "Hornets",
   "Away Code": "GH",
   "Home Team": "Tigers",
   "Home Code": "IE"
 },
 {
   "Game": "9",
   "Away Team": "Melonheads",
   "Away Code": "GI",
   "Home Team": "Devil Rays",
   "Home Code": "JF"
 },
 {
   "Game": "9",
   "Away Team": "Twins",
   "Away Code": "IK",
   "Home Team": "Giants",
   "Home Code": "JC"
 },
 {
   "Game": "9",
   "Away Team": "Cubs",
   "Away Code": "HP",
   "Home Team": "Rockies",
   "Home Code": "ID"
 },
 {
   "Game": "9",
   "Away Team": "Royals",
   "Away Code": "IH",
   "Home Team": "Athletics",
   "Home Code": "IO"
 },
 {
   "Game": "9",
   "Away Team": "Fishes",
   "Away Code": "GG",
   "Home Team": "Expos",
   "Home Code": "IL"
 },
 {
   "Game": "9",
   "Away Team": "Braves",
   "Away Code": "HM",
   "Home Team": "Blue Jays",
   "Home Code": "JH"
 },
 {
   "Game": "9",
   "Away Team": "Bombers",
   "Away Code": "GF",
   "Home Team": "Wombats",
   "Home Code": "GK"
 },
 {
   "Game": "9",
   "Away Team": "Angels",
   "Away Code": "HK",
   "Home Team": "Orioles",
   "Home Code": "HN"
 },
 {
   "Game": "10",
   "Away Team": "Melonheads",
   "Away Code": "GI",
   "Home Team": "Padres",
   "Home Code": "JB"
 },
 {
   "Game": "10",
   "Away Team": "Devil Rays",
   "Away Code": "JF",
   "Home Team": "Mariners",
   "Home Code": "JD"
 },
 {
   "Game": "10",
   "Away Team": "Giants",
   "Away Code": "JC",
   "Home Team": "Rangers",
   "Home Code": "JG"
 },
 {
   "Game": "10",
   "Away Team": "Twins",
   "Away Code": "IK",
   "Home Team": "Hornets",
   "Home Code": "GH"
 },
 {
   "Game": "10",
   "Away Team": "Cardinals",
   "Away Code": "JE",
   "Home Team": "Pirates",
   "Home Code": "JA"
 },
 {
   "Game": "10",
   "Away Team": "Tigers",
   "Away Code": "IE",
   "Home Team": "Monsters",
   "Home Code": "GJ"
 },
 {
   "Game": "10",
   "Away Team": "Angels",
   "Away Code": "HK",
   "Home Team": "Rockies",
   "Home Code": "ID"
 },
 {
   "Game": "10",
   "Away Team": "Bombers",
   "Away Code": "GF",
   "Home Team": "Athletics",
   "Home Code": "IO"
 },
 {
   "Game": "10",
   "Away Team": "Orioles",
   "Away Code": "HN",
   "Home Team": "Expos",
   "Home Code": "IL"
 },
 {
   "Game": "10",
   "Away Team": "Wombats",
   "Away Code": "GK",
   "Home Team": "Blue Jays",
   "Home Code": "JH"
 },
 {
   "Game": "10",
   "Away Team": "Fishes",
   "Away Code": "GG",
   "Home Team": "Royals",
   "Home Code": "IH"
 },
 {
   "Game": "10",
   "Away Team": "Cubs",
   "Away Code": "HP",
   "Home Team": "Braves",
   "Home Code": "HM"
 },
 {
   "Game": "11",
   "Away Team": "Padres",
   "Away Code": "JB",
   "Home Team": "Devil Rays",
   "Home Code": "JF"
 },
 {
   "Game": "11",
   "Away Team": "Mariners",
   "Away Code": "JD",
   "Home Team": "Giants",
   "Home Code": "JC"
 },
 {
   "Game": "11",
   "Away Team": "Rangers",
   "Away Code": "JG",
   "Home Team": "Twins",
   "Home Code": "IK"
 },
 {
   "Game": "11",
   "Away Team": "Hornets",
   "Away Code": "GH",
   "Home Team": "Melonheads",
   "Home Code": "GI"
 },
 {
   "Game": "11",
   "Away Team": "Tigers",
   "Away Code": "IE",
   "Home Team": "Cardinals",
   "Home Code": "JE"
 },
 {
   "Game": "11",
   "Away Team": "Monsters",
   "Away Code": "GJ",
   "Home Team": "Pirates",
   "Home Code": "JA"
 },
 {
   "Game": "11",
   "Away Team": "Rockies",
   "Away Code": "ID",
   "Home Team": "Royals",
   "Home Code": "IH"
 },
 {
   "Game": "11",
   "Away Team": "Athletics",
   "Away Code": "IO",
   "Home Team": "Fishes",
   "Home Code": "GG"
 },
 {
   "Game": "11",
   "Away Team": "Expos",
   "Away Code": "IL",
   "Home Team": "Braves",
   "Home Code": "HM"
 },
 {
   "Game": "11",
   "Away Team": "Blue Jays",
   "Away Code": "JH",
   "Home Team": "Cubs",
   "Home Code": "HP"
 },
 {
   "Game": "11",
   "Away Team": "Angels",
   "Away Code": "HK",
   "Home Team": "Bombers",
   "Home Code": "GF"
 },
 {
   "Game": "11",
   "Away Team": "Orioles",
   "Away Code": "HN",
   "Home Team": "Wombats",
   "Home Code": "GK"
 },
 {
   "Game": "12",
   "Away Team": "Tigers",
   "Away Code": "IE",
   "Home Team": "Padres",
   "Home Code": "JB"
 },
 {
   "Game": "12",
   "Away Team": "Pirates",
   "Away Code": "JA",
   "Home Team": "Mariners",
   "Home Code": "JD"
 },
 {
   "Game": "12",
   "Away Team": "Cardinals",
   "Away Code": "JE",
   "Home Team": "Rangers",
   "Home Code": "JG"
 },
 {
   "Game": "12",
   "Away Team": "Monsters",
   "Away Code": "GJ",
   "Home Team": "Hornets",
   "Home Code": "GH"
 },
 {
   "Game": "12",
   "Away Team": "Devil Rays",
   "Away Code": "JF",
   "Home Team": "Twins",
   "Home Code": "IK"
 },
 {
   "Game": "12",
   "Away Team": "Melonheads",
   "Away Code": "GI",
   "Home Team": "Giants",
   "Home Code": "JC"
 },
 {
   "Game": "12",
   "Away Team": "Athletics",
   "Away Code": "IO",
   "Home Team": "Rockies",
   "Home Code": "ID"
 },
 {
   "Game": "12",
   "Away Team": "Blue Jays",
   "Away Code": "JH",
   "Home Team": "Expos",
   "Home Code": "IL"
 },
 {
   "Game": "12",
   "Away Team": "Fishes",
   "Away Code": "GG",
   "Home Team": "Bombers",
   "Home Code": "GF"
 },
 {
   "Game": "12",
   "Away Team": "Braves",
   "Away Code": "HM",
   "Home Team": "Orioles",
   "Home Code": "HN"
 },
 {
   "Game": "12",
   "Away Team": "Cubs",
   "Away Code": "HP",
   "Home Team": "Wombats",
   "Home Code": "GK"
 },
 {
   "Game": "12",
   "Away Team": "Royals",
   "Away Code": "IH",
   "Home Team": "Angels",
   "Home Code": "HK"
 },
 {
   "Game": "13",
   "Away Team": "Padres",
   "Away Code": "JB",
   "Home Team": "Rangers",
   "Home Code": "JG"
 },
 {
   "Game": "13",
   "Away Team": "Mariners",
   "Away Code": "JD",
   "Home Team": "Hornets",
   "Home Code": "GH"
 },
 {
   "Game": "13",
   "Away Team": "Pirates",
   "Away Code": "JA",
   "Home Team": "Cardinals",
   "Home Code": "JE"
 },
 {
   "Game": "13",
   "Away Team": "Monsters",
   "Away Code": "GJ",
   "Home Team": "Tigers",
   "Home Code": "IE"
 },
 {
   "Game": "13",
   "Away Team": "Twins",
   "Away Code": "IK",
   "Home Team": "Melonheads",
   "Home Code": "GI"
 },
 {
   "Game": "13",
   "Away Team": "Giants",
   "Away Code": "JC",
   "Home Team": "Devil Rays",
   "Home Code": "JF"
 },
 {
   "Game": "13",
   "Away Team": "Blue Jays",
   "Away Code": "JH",
   "Home Team": "Rockies",
   "Home Code": "ID"
 },
 {
   "Game": "13",
   "Away Team": "Expos",
   "Away Code": "IL",
   "Home Team": "Athletics",
   "Home Code": "IO"
 },
 {
   "Game": "13",
   "Away Team": "Cubs",
   "Away Code": "HP",
   "Home Team": "Fishes",
   "Home Code": "GG"
 },
 {
   "Game": "13",
   "Away Team": "Braves",
   "Away Code": "HM",
   "Home Team": "Royals",
   "Home Code": "IH"
 },
 {
   "Game": "13",
   "Away Team": "Wombats",
   "Away Code": "GK",
   "Home Team": "Angels",
   "Home Code": "HK"
 },
 {
   "Game": "13",
   "Away Team": "Orioles",
   "Away Code": "HN",
   "Home Team": "Bombers",
   "Home Code": "GF"
 },
 {
   "Game": "14",
   "Away Team": "Hornets",
   "Away Code": "GH",
   "Home Team": "Padres",
   "Home Code": "JB"
 },
 {
   "Game": "14",
   "Away Team": "Rangers",
   "Away Code": "JG",
   "Home Team": "Mariners",
   "Home Code": "JD"
 },
 {
   "Game": "14",
   "Away Team": "Cardinals",
   "Away Code": "JE",
   "Home Team": "Monsters",
   "Home Code": "GJ"
 },
 {
   "Game": "14",
   "Away Team": "Pirates",
   "Away Code": "JA",
   "Home Team": "Tigers",
   "Home Code": "IE"
 },
 {
   "Game": "14",
   "Away Team": "Devil Rays",
   "Away Code": "JF",
   "Home Team": "Melonheads",
   "Home Code": "GI"
 },
 {
   "Game": "14",
   "Away Team": "Giants",
   "Away Code": "JC",
   "Home Team": "Twins",
   "Home Code": "IK"
 },
 {
   "Game": "14",
   "Away Team": "Rockies",
   "Away Code": "ID",
   "Home Team": "Expos",
   "Home Code": "IL"
 },
 {
   "Game": "14",
   "Away Team": "Athletics",
   "Away Code": "IO",
   "Home Team": "Blue Jays",
   "Home Code": "JH"
 },
 {
   "Game": "14",
   "Away Team": "Fishes",
   "Away Code": "GG",
   "Home Team": "Braves",
   "Home Code": "HM"
 },
 {
   "Game": "14",
   "Away Team": "Royals",
   "Away Code": "IH",
   "Home Team": "Cubs",
   "Home Code": "HP"
 },
 {
   "Game": "14",
   "Away Team": "Bombers",
   "Away Code": "GF",
   "Home Team": "Angels",
   "Home Code": "HK"
 },
 {
   "Game": "14",
   "Away Team": "Wombats",
   "Away Code": "GK",
   "Home Team": "Orioles",
   "Home Code": "HN"
 }
]

module.exports = { s8teams, s8schedule};
