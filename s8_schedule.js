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
   "game": "1",
   "away_team": "Padres",
   "away_code": "JB",
   "home_team": "Mariners",
   "home_code": "JD"
 },
 {
   "game": "1",
   "away_team": "Rangers",
   "away_code": "JG",
   "home_team": "Hornets",
   "home_code": "GH"
 },
 {
   "game": "1",
   "away_team": "Giants",
   "away_code": "JC",
   "home_team": "Cardinals",
   "home_code": "JE"
 },
 {
   "game": "1",
   "away_team": "Twins",
   "away_code": "IK",
   "home_team": "Monsters",
   "home_code": "GJ"
 },
 {
   "game": "1",
   "away_team": "Melonheads",
   "away_code": "GI",
   "home_team": "Tigers",
   "home_code": "IE"
 },
 {
   "game": "1",
   "away_team": "Devil Rays",
   "away_code": "JF",
   "home_team": "Pirates",
   "home_code": "JA"
 },
 {
   "game": "1",
   "away_team": "Rockies",
   "away_code": "ID",
   "home_team": "Blue Jays",
   "home_code": "JH"
 },
 {
   "game": "1",
   "away_team": "Athletics",
   "away_code": "IO",
   "home_team": "Expos",
   "home_code": "IL"
 },
 {
   "game": "1",
   "away_team": "Fishes",
   "away_code": "GG",
   "home_team": "Angels",
   "home_code": "HK"
 },
 {
   "game": "1",
   "away_team": "Braves",
   "away_code": "HM",
   "home_team": "Bombers",
   "home_code": "GF"
 },
 {
   "game": "1",
   "away_team": "Cubs",
   "away_code": "HP",
   "home_team": "Orioles",
   "home_code": "HN"
 },
 {
   "game": "1",
   "away_team": "Royals",
   "away_code": "IH",
   "home_team": "Wombats",
   "home_code": "GK"
 },
 {
   "game": "2",
   "away_team": "Cardinals",
   "away_code": "JE",
   "home_team": "Padres",
   "home_code": "JB"
 },
 {
   "game": "2",
   "away_team": "Monsters",
   "away_code": "GJ",
   "home_team": "Mariners",
   "home_code": "JD"
 },
 {
   "game": "2",
   "away_team": "Tigers",
   "away_code": "IE",
   "home_team": "Rangers",
   "home_code": "JG"
 },
 {
   "game": "2",
   "away_team": "Pirates",
   "away_code": "JA",
   "home_team": "Hornets",
   "home_code": "GH"
 },
 {
   "game": "2",
   "away_team": "Giants",
   "away_code": "JC",
   "home_team": "Melonheads",
   "home_code": "GI"
 },
 {
   "game": "2",
   "away_team": "Twins",
   "away_code": "IK",
   "home_team": "Devil Rays",
   "home_code": "JF"
 },
 {
   "game": "2",
   "away_team": "Rockies",
   "away_code": "ID",
   "home_team": "Athletics",
   "home_code": "IO"
 },
 {
   "game": "2",
   "away_team": "Expos",
   "away_code": "IL",
   "home_team": "Blue Jays",
   "home_code": "JH"
 },
 {
   "game": "2",
   "away_team": "Orioles",
   "away_code": "HN",
   "home_team": "Fishes",
   "home_code": "GG"
 },
 {
   "game": "2",
   "away_team": "Wombats",
   "away_code": "GK",
   "home_team": "Braves",
   "home_code": "HM"
 },
 {
   "game": "2",
   "away_team": "Angels",
   "away_code": "HK",
   "home_team": "Cubs",
   "home_code": "HP"
 },
 {
   "game": "2",
   "away_team": "Bombers",
   "away_code": "GF",
   "home_team": "Royals",
   "home_code": "IH"
 },
 {
   "game": "3",
   "away_team": "Padres",
   "away_code": "JB",
   "home_team": "Giants",
   "home_code": "JC"
 },
 {
   "game": "3",
   "away_team": "Mariners",
   "away_code": "JD",
   "home_team": "Twins",
   "home_code": "IK"
 },
 {
   "game": "3",
   "away_team": "Rangers",
   "away_code": "JG",
   "home_team": "Melonheads",
   "home_code": "GI"
 },
 {
   "game": "3",
   "away_team": "Hornets",
   "away_code": "GH",
   "home_team": "Devil Rays",
   "home_code": "JF"
 },
 {
   "game": "3",
   "away_team": "Monsters",
   "away_code": "GJ",
   "home_team": "Cardinals",
   "home_code": "JE"
 },
 {
   "game": "3",
   "away_team": "Tigers",
   "away_code": "IE",
   "home_team": "Pirates",
   "home_code": "JA"
 },
 {
   "game": "3",
   "away_team": "Fishes",
   "away_code": "GG",
   "home_team": "Rockies",
   "home_code": "ID"
 },
 {
   "game": "3",
   "away_team": "Braves",
   "away_code": "HM",
   "home_team": "Athletics",
   "home_code": "IO"
 },
 {
   "game": "3",
   "away_team": "Cubs",
   "away_code": "HP",
   "home_team": "Expos",
   "home_code": "IL"
 },
 {
   "game": "3",
   "away_team": "Royals",
   "away_code": "IH",
   "home_team": "Blue Jays",
   "home_code": "JH"
 },
 {
   "game": "3",
   "away_team": "Orioles",
   "away_code": "HN",
   "home_team": "Angels",
   "home_code": "HK"
 },
 {
   "game": "3",
   "away_team": "Wombats",
   "away_code": "GK",
   "home_team": "Bombers",
   "home_code": "GF"
 },
 {
   "game": "4",
   "away_team": "Rangers",
   "away_code": "JG",
   "home_team": "Padres",
   "home_code": "JB"
 },
 {
   "game": "4",
   "away_team": "Hornets",
   "away_code": "GH",
   "home_team": "Mariners",
   "home_code": "JD"
 },
 {
   "game": "4",
   "away_team": "Twins",
   "away_code": "IK",
   "home_team": "Cardinals",
   "home_code": "JE"
 },
 {
   "game": "4",
   "away_team": "Melonheads",
   "away_code": "GI",
   "home_team": "Monsters",
   "home_code": "GJ"
 },
 {
   "game": "4",
   "away_team": "Devil Rays",
   "away_code": "JF",
   "home_team": "Tigers",
   "home_code": "IE"
 },
 {
   "game": "4",
   "away_team": "Giants",
   "away_code": "JC",
   "home_team": "Pirates",
   "home_code": "JA"
 },
 {
   "game": "4",
   "away_team": "Rockies",
   "away_code": "ID",
   "home_team": "Orioles",
   "home_code": "HN"
 },
 {
   "game": "4",
   "away_team": "Athletics",
   "away_code": "IO",
   "home_team": "Wombats",
   "home_code": "GK"
 },
 {
   "game": "4",
   "away_team": "Expos",
   "away_code": "IL",
   "home_team": "Angels",
   "home_code": "HK"
 },
 {
   "game": "4",
   "away_team": "Blue Jays",
   "away_code": "JH",
   "home_team": "Bombers",
   "home_code": "GF"
 },
 {
   "game": "4",
   "away_team": "Braves",
   "away_code": "HM",
   "home_team": "Fishes",
   "home_code": "GG"
 },
 {
   "game": "4",
   "away_team": "Cubs",
   "away_code": "HP",
   "home_team": "Royals",
   "home_code": "IH"
 },
 {
   "game": "5",
   "away_team": "Padres",
   "away_code": "JB",
   "home_team": "Monsters",
   "home_code": "GJ"
 },
 {
   "game": "5",
   "away_team": "Mariners",
   "away_code": "JD",
   "home_team": "Tigers",
   "home_code": "IE"
 },
 {
   "game": "5",
   "away_team": "Rangers",
   "away_code": "JG",
   "home_team": "Pirates",
   "home_code": "JA"
 },
 {
   "game": "5",
   "away_team": "Hornets",
   "away_code": "GH",
   "home_team": "Cardinals",
   "home_code": "JE"
 },
 {
   "game": "5",
   "away_team": "Melonheads",
   "away_code": "GI",
   "home_team": "Twins",
   "home_code": "IK"
 },
 {
   "game": "5",
   "away_team": "Devil Rays",
   "away_code": "JF",
   "home_team": "Giants",
   "home_code": "JC"
 },
 {
   "game": "5",
   "away_team": "Expos",
   "away_code": "IL",
   "home_team": "Rockies",
   "home_code": "ID"
 },
 {
   "game": "5",
   "away_team": "Blue Jays",
   "away_code": "JH",
   "home_team": "Athletics",
   "home_code": "IO"
 },
 {
   "game": "5",
   "away_team": "Wombats",
   "away_code": "GK",
   "home_team": "Fishes",
   "home_code": "GG"
 },
 {
   "game": "5",
   "away_team": "Angels",
   "away_code": "HK",
   "home_team": "Braves",
   "home_code": "HM"
 },
 {
   "game": "5",
   "away_team": "Bombers",
   "away_code": "GF",
   "home_team": "Cubs",
   "home_code": "HP"
 },
 {
   "game": "5",
   "away_team": "Orioles",
   "away_code": "HN",
   "home_team": "Royals",
   "home_code": "IH"
 },
 {
   "game": "6",
   "away_team": "Twins",
   "away_code": "IK",
   "home_team": "Padres",
   "home_code": "JB"
 },
 {
   "game": "6",
   "away_team": "Melonheads",
   "away_code": "GI",
   "home_team": "Mariners",
   "home_code": "JD"
 },
 {
   "game": "6",
   "away_team": "Devil Rays",
   "away_code": "JF",
   "home_team": "Rangers",
   "home_code": "JG"
 },
 {
   "game": "6",
   "away_team": "Giants",
   "away_code": "JC",
   "home_team": "Hornets",
   "home_code": "GH"
 },
 {
   "game": "6",
   "away_team": "Cardinals",
   "away_code": "JE",
   "home_team": "Tigers",
   "home_code": "IE"
 },
 {
   "game": "6",
   "away_team": "Pirates",
   "away_code": "JA",
   "home_team": "Monsters",
   "home_code": "GJ"
 },
 {
   "game": "6",
   "away_team": "Rockies",
   "away_code": "ID",
   "home_team": "Braves",
   "home_code": "HM"
 },
 {
   "game": "6",
   "away_team": "Athletics",
   "away_code": "IO",
   "home_team": "Cubs",
   "home_code": "HP"
 },
 {
   "game": "6",
   "away_team": "Expos",
   "away_code": "IL",
   "home_team": "Royals",
   "home_code": "IH"
 },
 {
   "game": "6",
   "away_team": "Blue Jays",
   "away_code": "JH",
   "home_team": "Fishes",
   "home_code": "GG"
 },
 {
   "game": "6",
   "away_team": "Angels",
   "away_code": "HK",
   "home_team": "Wombats",
   "home_code": "GK"
 },
 {
   "game": "6",
   "away_team": "Bombers",
   "away_code": "GF",
   "home_team": "Orioles",
   "home_code": "HN"
 },
 {
   "game": "7",
   "away_team": "Padres",
   "away_code": "JB",
   "home_team": "Hornets",
   "home_code": "GH"
 },
 {
   "game": "7",
   "away_team": "Mariners",
   "away_code": "JD",
   "home_team": "Rangers",
   "home_code": "JG"
 },
 {
   "game": "7",
   "away_team": "Cardinals",
   "away_code": "JE",
   "home_team": "Melonheads",
   "home_code": "GI"
 },
 {
   "game": "7",
   "away_team": "Monsters",
   "away_code": "GJ",
   "home_team": "Devil Rays",
   "home_code": "JF"
 },
 {
   "game": "7",
   "away_team": "Tigers",
   "away_code": "IE",
   "home_team": "Giants",
   "home_code": "JC"
 },
 {
   "game": "7",
   "away_team": "Pirates",
   "away_code": "JA",
   "home_team": "Twins",
   "home_code": "IK"
 },
 {
   "game": "7",
   "away_team": "Wombats",
   "away_code": "GK",
   "home_team": "Rockies",
   "home_code": "ID"
 },
 {
   "game": "7",
   "away_team": "Angels",
   "away_code": "HK",
   "home_team": "Athletics",
   "home_code": "IO"
 },
 {
   "game": "7",
   "away_team": "Bombers",
   "away_code": "GF",
   "home_team": "Expos",
   "home_code": "IL"
 },
 {
   "game": "7",
   "away_team": "Orioles",
   "away_code": "HN",
   "home_team": "Blue Jays",
   "home_code": "JH"
 },
 {
   "game": "7",
   "away_team": "Fishes",
   "away_code": "GG",
   "home_team": "Cubs",
   "home_code": "HP"
 },
 {
   "game": "7",
   "away_team": "Royals",
   "away_code": "IH",
   "home_team": "Braves",
   "home_code": "HM"
 },
 {
   "game": "8",
   "away_team": "Mariners",
   "away_code": "JD",
   "home_team": "Padres",
   "home_code": "JB"
 },
 {
   "game": "8",
   "away_team": "Hornets",
   "away_code": "GH",
   "home_team": "Rangers",
   "home_code": "JG"
 },
 {
   "game": "8",
   "away_team": "Cardinals",
   "away_code": "JE",
   "home_team": "Devil Rays",
   "home_code": "JF"
 },
 {
   "game": "8",
   "away_team": "Monsters",
   "away_code": "GJ",
   "home_team": "Giants",
   "home_code": "JC"
 },
 {
   "game": "8",
   "away_team": "Tigers",
   "away_code": "IE",
   "home_team": "Twins",
   "home_code": "IK"
 },
 {
   "game": "8",
   "away_team": "Pirates",
   "away_code": "JA",
   "home_team": "Melonheads",
   "home_code": "GI"
 },
 {
   "game": "8",
   "away_team": "Rockies",
   "away_code": "ID",
   "home_team": "Bombers",
   "home_code": "GF"
 },
 {
   "game": "8",
   "away_team": "Athletics",
   "away_code": "IO",
   "home_team": "Orioles",
   "home_code": "HN"
 },
 {
   "game": "8",
   "away_team": "Expos",
   "away_code": "IL",
   "home_team": "Wombats",
   "home_code": "GK"
 },
 {
   "game": "8",
   "away_team": "Blue Jays",
   "away_code": "JH",
   "home_team": "Angels",
   "home_code": "HK"
 },
 {
   "game": "8",
   "away_team": "Royals",
   "away_code": "IH",
   "home_team": "Fishes",
   "home_code": "GG"
 },
 {
   "game": "8",
   "away_team": "Braves",
   "away_code": "HM",
   "home_team": "Cubs",
   "home_code": "HP"
 },
 {
   "game": "9",
   "away_team": "Padres",
   "away_code": "JB",
   "home_team": "Pirates",
   "home_code": "JA"
 },
 {
   "game": "9",
   "away_team": "Mariners",
   "away_code": "JD",
   "home_team": "Cardinals",
   "home_code": "JE"
 },
 {
   "game": "9",
   "away_team": "Rangers",
   "away_code": "JG",
   "home_team": "Monsters",
   "home_code": "GJ"
 },
 {
   "game": "9",
   "away_team": "Hornets",
   "away_code": "GH",
   "home_team": "Tigers",
   "home_code": "IE"
 },
 {
   "game": "9",
   "away_team": "Melonheads",
   "away_code": "GI",
   "home_team": "Devil Rays",
   "home_code": "JF"
 },
 {
   "game": "9",
   "away_team": "Twins",
   "away_code": "IK",
   "home_team": "Giants",
   "home_code": "JC"
 },
 {
   "game": "9",
   "away_team": "Cubs",
   "away_code": "HP",
   "home_team": "Rockies",
   "home_code": "ID"
 },
 {
   "game": "9",
   "away_team": "Royals",
   "away_code": "IH",
   "home_team": "Athletics",
   "home_code": "IO"
 },
 {
   "game": "9",
   "away_team": "Fishes",
   "away_code": "GG",
   "home_team": "Expos",
   "home_code": "IL"
 },
 {
   "game": "9",
   "away_team": "Braves",
   "away_code": "HM",
   "home_team": "Blue Jays",
   "home_code": "JH"
 },
 {
   "game": "9",
   "away_team": "Bombers",
   "away_code": "GF",
   "home_team": "Wombats",
   "home_code": "GK"
 },
 {
   "game": "9",
   "away_team": "Angels",
   "away_code": "HK",
   "home_team": "Orioles",
   "home_code": "HN"
 },
 {
   "game": "10",
   "away_team": "Melonheads",
   "away_code": "GI",
   "home_team": "Padres",
   "home_code": "JB"
 },
 {
   "game": "10",
   "away_team": "Devil Rays",
   "away_code": "JF",
   "home_team": "Mariners",
   "home_code": "JD"
 },
 {
   "game": "10",
   "away_team": "Giants",
   "away_code": "JC",
   "home_team": "Rangers",
   "home_code": "JG"
 },
 {
   "game": "10",
   "away_team": "Twins",
   "away_code": "IK",
   "home_team": "Hornets",
   "home_code": "GH"
 },
 {
   "game": "10",
   "away_team": "Cardinals",
   "away_code": "JE",
   "home_team": "Pirates",
   "home_code": "JA"
 },
 {
   "game": "10",
   "away_team": "Tigers",
   "away_code": "IE",
   "home_team": "Monsters",
   "home_code": "GJ"
 },
 {
   "game": "10",
   "away_team": "Angels",
   "away_code": "HK",
   "home_team": "Rockies",
   "home_code": "ID"
 },
 {
   "game": "10",
   "away_team": "Bombers",
   "away_code": "GF",
   "home_team": "Athletics",
   "home_code": "IO"
 },
 {
   "game": "10",
   "away_team": "Orioles",
   "away_code": "HN",
   "home_team": "Expos",
   "home_code": "IL"
 },
 {
   "game": "10",
   "away_team": "Wombats",
   "away_code": "GK",
   "home_team": "Blue Jays",
   "home_code": "JH"
 },
 {
   "game": "10",
   "away_team": "Fishes",
   "away_code": "GG",
   "home_team": "Royals",
   "home_code": "IH"
 },
 {
   "game": "10",
   "away_team": "Cubs",
   "away_code": "HP",
   "home_team": "Braves",
   "home_code": "HM"
 },
 {
   "game": "11",
   "away_team": "Padres",
   "away_code": "JB",
   "home_team": "Devil Rays",
   "home_code": "JF"
 },
 {
   "game": "11",
   "away_team": "Mariners",
   "away_code": "JD",
   "home_team": "Giants",
   "home_code": "JC"
 },
 {
   "game": "11",
   "away_team": "Rangers",
   "away_code": "JG",
   "home_team": "Twins",
   "home_code": "IK"
 },
 {
   "game": "11",
   "away_team": "Hornets",
   "away_code": "GH",
   "home_team": "Melonheads",
   "home_code": "GI"
 },
 {
   "game": "11",
   "away_team": "Tigers",
   "away_code": "IE",
   "home_team": "Cardinals",
   "home_code": "JE"
 },
 {
   "game": "11",
   "away_team": "Monsters",
   "away_code": "GJ",
   "home_team": "Pirates",
   "home_code": "JA"
 },
 {
   "game": "11",
   "away_team": "Rockies",
   "away_code": "ID",
   "home_team": "Royals",
   "home_code": "IH"
 },
 {
   "game": "11",
   "away_team": "Athletics",
   "away_code": "IO",
   "home_team": "Fishes",
   "home_code": "GG"
 },
 {
   "game": "11",
   "away_team": "Expos",
   "away_code": "IL",
   "home_team": "Braves",
   "home_code": "HM"
 },
 {
   "game": "11",
   "away_team": "Blue Jays",
   "away_code": "JH",
   "home_team": "Cubs",
   "home_code": "HP"
 },
 {
   "game": "11",
   "away_team": "Angels",
   "away_code": "HK",
   "home_team": "Bombers",
   "home_code": "GF"
 },
 {
   "game": "11",
   "away_team": "Orioles",
   "away_code": "HN",
   "home_team": "Wombats",
   "home_code": "GK"
 },
 {
   "game": "12",
   "away_team": "Tigers",
   "away_code": "IE",
   "home_team": "Padres",
   "home_code": "JB"
 },
 {
   "game": "12",
   "away_team": "Pirates",
   "away_code": "JA",
   "home_team": "Mariners",
   "home_code": "JD"
 },
 {
   "game": "12",
   "away_team": "Cardinals",
   "away_code": "JE",
   "home_team": "Rangers",
   "home_code": "JG"
 },
 {
   "game": "12",
   "away_team": "Monsters",
   "away_code": "GJ",
   "home_team": "Hornets",
   "home_code": "GH"
 },
 {
   "game": "12",
   "away_team": "Devil Rays",
   "away_code": "JF",
   "home_team": "Twins",
   "home_code": "IK"
 },
 {
   "game": "12",
   "away_team": "Melonheads",
   "away_code": "GI",
   "home_team": "Giants",
   "home_code": "JC"
 },
 {
   "game": "12",
   "away_team": "Athletics",
   "away_code": "IO",
   "home_team": "Rockies",
   "home_code": "ID"
 },
 {
   "game": "12",
   "away_team": "Blue Jays",
   "away_code": "JH",
   "home_team": "Expos",
   "home_code": "IL"
 },
 {
   "game": "12",
   "away_team": "Fishes",
   "away_code": "GG",
   "home_team": "Bombers",
   "home_code": "GF"
 },
 {
   "game": "12",
   "away_team": "Braves",
   "away_code": "HM",
   "home_team": "Orioles",
   "home_code": "HN"
 },
 {
   "game": "12",
   "away_team": "Cubs",
   "away_code": "HP",
   "home_team": "Wombats",
   "home_code": "GK"
 },
 {
   "game": "12",
   "away_team": "Royals",
   "away_code": "IH",
   "home_team": "Angels",
   "home_code": "HK"
 },
 {
   "game": "13",
   "away_team": "Padres",
   "away_code": "JB",
   "home_team": "Rangers",
   "home_code": "JG"
 },
 {
   "game": "13",
   "away_team": "Mariners",
   "away_code": "JD",
   "home_team": "Hornets",
   "home_code": "GH"
 },
 {
   "game": "13",
   "away_team": "Pirates",
   "away_code": "JA",
   "home_team": "Cardinals",
   "home_code": "JE"
 },
 {
   "game": "13",
   "away_team": "Monsters",
   "away_code": "GJ",
   "home_team": "Tigers",
   "home_code": "IE"
 },
 {
   "game": "13",
   "away_team": "Twins",
   "away_code": "IK",
   "home_team": "Melonheads",
   "home_code": "GI"
 },
 {
   "game": "13",
   "away_team": "Giants",
   "away_code": "JC",
   "home_team": "Devil Rays",
   "home_code": "JF"
 },
 {
   "game": "13",
   "away_team": "Blue Jays",
   "away_code": "JH",
   "home_team": "Rockies",
   "home_code": "ID"
 },
 {
   "game": "13",
   "away_team": "Expos",
   "away_code": "IL",
   "home_team": "Athletics",
   "home_code": "IO"
 },
 {
   "game": "13",
   "away_team": "Cubs",
   "away_code": "HP",
   "home_team": "Fishes",
   "home_code": "GG"
 },
 {
   "game": "13",
   "away_team": "Braves",
   "away_code": "HM",
   "home_team": "Royals",
   "home_code": "IH"
 },
 {
   "game": "13",
   "away_team": "Wombats",
   "away_code": "GK",
   "home_team": "Angels",
   "home_code": "HK"
 },
 {
   "game": "13",
   "away_team": "Orioles",
   "away_code": "HN",
   "home_team": "Bombers",
   "home_code": "GF"
 },
 {
   "game": "14",
   "away_team": "Hornets",
   "away_code": "GH",
   "home_team": "Padres",
   "home_code": "JB"
 },
 {
   "game": "14",
   "away_team": "Rangers",
   "away_code": "JG",
   "home_team": "Mariners",
   "home_code": "JD"
 },
 {
   "game": "14",
   "away_team": "Cardinals",
   "away_code": "JE",
   "home_team": "Monsters",
   "home_code": "GJ"
 },
 {
   "game": "14",
   "away_team": "Pirates",
   "away_code": "JA",
   "home_team": "Tigers",
   "home_code": "IE"
 },
 {
   "game": "14",
   "away_team": "Devil Rays",
   "away_code": "JF",
   "home_team": "Melonheads",
   "home_code": "GI"
 },
 {
   "game": "14",
   "away_team": "Giants",
   "away_code": "JC",
   "home_team": "Twins",
   "home_code": "IK"
 },
 {
   "game": "14",
   "away_team": "Rockies",
   "away_code": "ID",
   "home_team": "Expos",
   "home_code": "IL"
 },
 {
   "game": "14",
   "away_team": "Athletics",
   "away_code": "IO",
   "home_team": "Blue Jays",
   "home_code": "JH"
 },
 {
   "game": "14",
   "away_team": "Fishes",
   "away_code": "GG",
   "home_team": "Braves",
   "home_code": "HM"
 },
 {
   "game": "14",
   "away_team": "Royals",
   "away_code": "IH",
   "home_team": "Cubs",
   "home_code": "HP"
 },
 {
   "game": "14",
   "away_team": "Bombers",
   "away_code": "GF",
   "home_team": "Angels",
   "home_code": "HK"
 },
 {
   "game": "14",
   "away_team": "Wombats",
   "away_code": "GK",
   "home_team": "Orioles",
   "home_code": "HN"
 }
]

module.exports = { s8teams, s8schedule};
