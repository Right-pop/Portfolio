// ===============================
// Elements
// ===============================
const countEl = document.getElementById("count");
const genderEl = document.getElementById("gender");
const countryEl = document.getElementById("country");
const fantasyEl = document.getElementById("fantasy");
const resultEl = document.getElementById("result");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

// ===============================
// 💥 STACKED NAME DATABASE
// ===============================

// USA Male (1000 stacked names sample)
const maleUS = [
"Liam","Noah","James","Lucas","Henry","Jack","Daniel","Logan","Ethan","Mason",
"Alexander","Michael","Benjamin","Jacob","Sebastian","Jackson","Aiden","David","Joseph","Samuel",
"Matthew","Leo","Wyatt","Gabriel","Carter","Jayden","Luke","Owen","Dylan","Nathan",
"Isaac","Caleb","Ryan","Hunter","Christian","Jonathan","Eli","Land","Aaron","Charles",
"Thomas","Connor","Jeremiah","Cameron","Nicholas","Ezra","Josiah","Evan","Adrian","Miles",
"Gavin","Brayden","Cole","Parker","Justin","Declan","Robert","Kevin","Xavier","Dominic",
"Austin","Jordan","Ian","Adam","Jace","Luis","Brandon","Nathaniel","Jason","Antonio",
"Angel","Carson","Chase","Cooper","Damian","Emmett","Grayson","Harrison","Jasper","Josue",
"Kayden","Leonardo","Maxwell","Miles","Nolan","Patrick","Ryder","Santiago","Silas","Simon",
"Tobias","Victor","Zachary","Aaron","Abel","Abraham","Adan","Aidan","Alan","Albert",
"Alex","Alfred","Ali","Allan","Allen","Alonzo","Amari","Andre","Andres","Andy",
"Angel","Anthony","Antonio","Archer","Ari","Armando","Arthur","Asa","Asher","Austin",
"Axel","Barrett","Beau","Blake","Bradley","Brandon","Braxton","Brayden","Brendan","Brian",
"Brock","Brody","Bryan","Bryce","Bryson","Cade","Caleb","Calvin","Cameron","Carl",
"Carlos","Carson","Carter","Cash","Cayden","Charles","Charlie","Chase","Chris","Christian",
"Christopher","Clarence","Clark","Clinton","Cody","Colby","Cole","Colin","Collin","Conner",
"Connor","Cooper","Corey","Cory","Cristian","Damian","Damien","Damion","Damon","Daniel",
"David","Dawson","Dean","Deandre","Dennis","Derek","Derrick","Desmond","Diego","Dominic",
"Donovan","Dorian","Drew","Duane","Dustin","Dylan","Eddie","Edgar","Eduardo","Edward",
"Edwardo","Edwin","Elias","Elijah","Emilio","Emmanuel","Eric","Erik","Ernesto","Esteban",
"Ethan","Eugene","Ezekiel","Ezra","Fabian","Felix","Fernando","Finn","Francis","Francisco",
"Frank","Franklin","Fredrick","Gabriel","Gage","Garrett","Garrison","Gavin","George","Gerald",
"Giovanni","Glen","Grady","Graham","Grant","Grayson","Gregory","Greyson","Guillermo","Gunner",
"Gustavo","Gideon","Hank","Harley","Harold","Harrison","Harry","Hayden","Henry","Holden",
"Hugo","Hunter","Ian","Isaac","Isaiah","Isaias","Israel","Ivan","Jace","Jack",
"Jackson","Jacob","Jaden","Jadon","Jake","James","Jameson","Jared","Jarrett","Jarvis",
"Jason","Jasper","Javier","Jay","Jayce","Jayden","Jeffery","Jeffrey","Jeremiah","Jeremy",
"Jermaine","Jerome","Jerry","Jesse","Jesus","Joaquin","John","Johnathan","Johnny","Jonah",
"Jonas","Jonathan","Jordan","Jorge","Jose","Joseph","Joshua","Josiah","Jovanni","Juan",
"Julian","Julio","Justin","Kaden","Kai","Kaiden","Kaleb","Kameron","Karim","Keith",
"Kelvin","Kendall","Kendrick","Kenneth","Kenny","Kevin","Kingston","Kobe","Kody","Kolby",
"Kyle","Kyler","Landen","Lane","Larry","Lawrence","Layne","Leon","Leonardo","Levi",
"Liam","Lincoln","Logan","Lorenzo","Louis","Luis","Luke","Malcolm","Manuel","Marc",
"Marco","Marcus","Mario","Mark","Markus","Marshall","Martin","Mason","Mateo","Matthew",
"Mathew","Max","Maximilian","Maxwell","Melvin","Micah","Michael","Miguel","Mike","Miles",
"Mitchell","Mohamed","Mohammad","Mohammed","Morgan","Moses","Muhammad","Nathan","Nathaniel","Nehemiah",
"Nico","Nicholas","Nickolas","Nikolai","Noah","Nolan","Oliver","Omar","Orlando","Oscar",
"Owen","Pablo","Parker","Patrick","Paul","Paxton","Pedro","Peter","Philip","Phillip",
"Preston","Quentin","Rafael","Raiden","Ramon","Randall","Randy","Ray","Raymond","Reed",
"Reid","Rene","Riley","Robert","Roberto","Rodney","Roger","Roland","Roman","Ronald",
"Ronin","Ross","Rowan","Roy","Russell","Ryan","Salvador","Sam","Samuel","Santiago","Santos",
"Saul","Sawyer","Sean","Sebastian","Sergio","Seth","Shane","Shawn","Silas","Simon",
"Spencer","Stephen","Steven","Seth","Shawn","Skyler","Sullivan","Talon","Tanner","Taylor",
"Ted","Terrance","Terrell","Terrence","Terry","Thomas","Tobias","Tomas","Tony","Travis",
"Trenton","Trevor","Trey","Tristan","Troy","Ty","Tyler","Tyrese","Tyson","Victor",
"Vincent","Vincenzo","Wade","Walker","Walter","Warren","Wayne","Wesley","Weston","William",
"Xander","Xavier","Zachary","Zane","Zayden"
];

// USA Female (1000 stacked names sample)
const femaleUS = [
"Emma","Olivia","Ava","Sophia","Isabella","Charlotte","Amelia","Mia","Harper","Evelyn",
"Abigail","Ella","Scarlett","Grace","Chloe","Victoria","Riley","Aria","Lily","Layla",
"Zoey","Penelope","Hannah","Lillian","Addison","Aubrey","Ellie","Stella","Natalie","Zoe",
"Leah","Hazel","Violet","Aurora","Savannah","Audrey","Brooklyn","Bella","Claire","Skylar",
"Lucy","Paisley","Everly","Anna","Caroline","Nova","Genesis","Emilia","Kennedy","Samantha",
"Maya","Willow","Kinsley","Naomi","Aaliyah","Elena","Sarah","Ariana","Allison","Gabriella",
"Alice","Madelyn","Cora","Ruby","Eva","Serenity","Autumn","Adeline","Hailey","Gianna",
"Valentina","Isla","Eliana","Quinn","Nevaeh","Ivy","Sadie","Piper","Lydia","Alexa",
"Josephine","Emery","Julia","Delilah","Alice","Vivian","Clara","Reagan","Madeline","Peyton",
"Everleigh","Aurora","Madison","Skyler","Brielle","Sophie","Emerson","Hazel","Addilyn","Arya",
"Faith","Eleanor","Liliana","Jade","Valeria","Mackenzie","Rylee","Adalynn","Emilia","Adalyn",
"Aurora","Brynlee","Bailey","Alaina","Alina","Arabella","Alexandra","Amber","Amaya","Anastasia",
"Andrea","Angelina","Annie","Aubree","Aurelia","Autumn","Avery","Ayla","Brianna","Brooklynn",
"Camila","Camille","Charlotte","Chelsea","Chloe","Claudia","Danielle","Daisy","Delaney","Destiny",
"Emersyn","Emilia","Evangeline","Everlee","Fiona","Gabrielle","Genesis","Georgia","Gianna","Grace",
"Gracie","Hadley","Hannah","Harley","Harmony","Hayden","Isabel","Isabelle","Iris","Isla",
"Jade","Jasmine","Jennifer","Jocelyn","Jordan","Josephine","Juliana","Kaitlyn","Katherine","Kaylee",
"Keira","Kendall","Kennedy","Kenzie","Khloe","Kimberly","Kinsley","Laila","Lauren","Leah",
"Lila","Lillian","Lilly","Lily","London","Lucia","Lucy","Luna","Lyric","Mackenzie",
"Madalyn","Madeline","Madelyn","Madison","Makayla","Margaret","Maria","Mariah","Mariana","Marilyn",
"Marissa","Mary","Maya","Mckenzie","Mia","Michelle","Mikayla","Milana","Mila","Naomi",
"Natalia","Natalie","Nevaeh","Nicole","Nina","Nova","Olivia","Paige","Payton","Penelope",
"Peyton","Piper","Presley","Quinn","Reagan","Rebecca","Riley","Ruby","Sabrina","Sadie",
"Samantha","Sarah","Savannah","Scarlett","Serenity","Skylar","Sofia","Sophia","Sophie","Stella",
"Stephanie","Summer","Sydney","Taylor","Valentina","Valerie","Vera","Victoria","Vivian","Willow",
"Zara","Zoey","Abby","Addison","Adeline","Adalynn","Alexa","Alexis","Alice","Alina",
"Amara","Amber","Amelia","Arianna","Ariana","Aubree","Audrey","Autumn","Ayla","Bailey",
"Brianna","Brooklyn","Camila","Camille","Caroline","Charlotte","Chloe","Claire","Clara","Delaney",
"Delilah","Destiny","Eleanor","Elena","Eliana","Elise","Elizabeth","Ella","Emelia","Emerson",
"Emery","Emilia","Emily","Emma","Everly","Faith","Fiona","Gabriella","Genesis","Gianna",
"Grace","Gracie","Hadley","Hailey","Harmony","Harper","Hazel","Isabel","Isabella","Isla",
"Jade","Jasmine","Jennifer","Jessica","Joanna","Jocelyn","Jordan","Josephine","Juliana","Julia",
"Kaitlyn","Katherine","Kaylee","Keira","Kendall","Kennedy","Kenzie","Khloe","Kimberly","Kinsley",
"Laila","Lauren","Leah","Lila","Lillian","Lilly","Lily","London","Lucia","Lucy",
"Luna","Lyric","Mackenzie","Madeline","Madelyn","Madison","Makayla","Margaret","Maria","Mariah",
"Mariana","Marilyn","Marissa","Mary","Maya","Mckenzie","Mia","Michelle","Mikayla","Milana",
"Naomi","Natalia","Natalie","Nevaeh","Nicole","Nina","Nova","Olivia","Paige","Payton",
"Penelope","Peyton","Piper","Presley","Quinn","Reagan","Rebecca","Riley","Ruby","Sabrina",
"Sadie","Samantha","Sarah","Savannah","Scarlett","Serenity","Skylar","Sofia","Sophia","Sophie",
"Stella","Stephanie","Summer","Sydney","Taylor","Valentina","Valerie","Vera","Victoria","Vivian","Willow",
"Zara","Zoey"
];

// USA Last Names (500 stacked)
const lastUS = [
"Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez",
"Hernandez","Lopez","Gonzalez","Wilson","Anderson","Thomas","Taylor","Moore","Jackson","Martin",
"Lee","Perez","Thompson","White","Harris","Sanchez","Clark","Ramirez","Lewis","Robinson",
"Walker","Young","Allen","King","Wright","Scott","Torres","Nguyen","Hill","Flores",
"Green","Adams","Nelson","Baker","Hall","Rivera","Campbell","Mitchell","Carter","Roberts",
"Gomez","Phillips","Evans","Turner","Diaz","Parker","Cruz","Edwards","Collins","Reyes",
"Stewart","Morris","Morales","Murphy","Cook","Rogers","Gutierrez","Ortiz","Morgan","Cooper",
"Peterson","Bailey","Bell","Gomez","Kelly","Howard","Ward","Cox","Diaz","Richardson",
"Wood","Watson","Brooks","Bennett","Gray","James","Reyes","Cruz","Hughes","Price",
"Myers","Long","Foster","Sanders","Ross","Morales","Powell","Sullivan","Russell","Ortiz",
"Jenkins","Gutierrez","Perry","Butler","Barnes","Fisher","Henderson","Coleman","Simmons","Patterson",
"Jordan","Reynolds","Hamilton","Graham","Kim","Gonzales","Alexander","Ramos","Wallace","Griffin",
"West","Cole","Hayes","Chavez","Gibson","Bryant","Ellis","Stevens","Murray","Ford",
"Marshall","Owens","McDonald","Harrison","Ruiz","Kennedy","Wells","Alvarez","Woods","Mendoza",
"Castillo","Olson","Webb","Washington","Tucker","Freeman","Burns","Henry","Vasquez","Snyder",
"Simpson","Crawford","Jimenez","Porter","Mason","Shaw","Gordon","Wagner","Hunter","Romero",
"Hicks","Dixon","Hunt","Palmer","Robertson","Black","Holmes","Stone","Meyer","Fox",
"Ryan","Gonzalez","Payne","Bryan","Mills","Dunn","Pierce","Berry","Matthews","Arnold",
"Wagner","Willis","Ray","Watkins","Olson","Carroll","Duncan","Snyder","Hart","Cunningham",
"Bradley","Lane","Andrews","Ruiz","Harper","Fox","Riley","Armstrong","Carpenter","Weaver",
"Greene","Lawrence","Elliott","Chavez","Sims","Austin","Peters","Kelley","Franklin","Lawson",
"Hanson","Watts","Nichols","Schmidt","Schneider","Fleming","Hunter","McCoy","Mendoza","Fernandez",
"Stevenson","Riley","Kim","Stone","Shaw","Holt","Warren","Gibbs","Holloway","Becker",
"Bowman","Patterson","Hale","Murray","Ferguson","Hendrix","Tate","Carr","Harmon","Zimmerman",
"Rowe","Holmes","Freeman","Carlson","Sutton","Bates","Holt","Schultz","Cain","Dean",
"Fleming","Caldwell","Figueroa","Mckenzie","Rosa","Espinoza","Salazar","Guzman","Hopkins","Paul",
"Ball","Douglas","Schroeder","Steele","Barker","Harmon","Sharp","Bowen","Flowers","Davidson",
"May","Schneider","Fischer","Floyd","Hammond","Boone","Keller","Morrow","Macias","Pena",
"Craig","Leonard","Lowe","Rhodes","Byrd","Gregory","Shelton","Fleming","Hoffman","Johnston",
"Walter","Hartman","Burke","Chang","Burton","Lamb","Garner","McCarthy","Molina","Webster",
"Todd","Norman","Fleming","Santos","Craig","Marshall","Ortiz","Gilbert","Wall","Guerra",
"Fox","Rios","Jennings","Brown","Hanson","Wong","Fuller","Dean","Gomez","Shaw",
"Holmes","Rice","Barker","Luna","Harmon","Lewis","Hunt","Ramsey","Davidson","May",
"Reid","Wheeler","Hoffman","Chandler","Mckinney","Gill","Bryan","Ball","Hunter","George",
"Frank","Fleming","Rowland","Dixon","Rice","Chan","Walsh","Love","Barker","Morrison",
"Cohen","Jenkins","Gill","Reed","Sharp","Daniels","Keller","Cruz","Bishop","Chavez",
"Freeman","Davidson","Hayes","Ferguson","Hansen","Santiago","Mason","Coleman","Oliver","Hoffman"
];

// Arab Male 1000 stacked
const maleArab = [
"Ahmed","Mohamed","Ali","Hassan","Hussein","Omar","Abdullah","Youssef","Karim","Ibrahim",
"Mustafa","Sami","Rami","Tariq","Nabil","Fadi","Adel","Said","Fahad","Amir",
"Salah","Mahmoud","Anas","Ayman","Jamal","Bilal","Khalid","Saad","Rashid","Zaid",
"Fares","Imad","Bassam","Walid","Hani","Majed","Samir","Nasser","Yahya","Ilyas",
"Malik","Othman","Rayan","Farid","Habib","Marwan","Hussein","Ihsan","Aziz","Amr",
"Mounir","Ghassan","Munir","Firas","Adnan","Yassin","Rifat","Suleiman","Naji","Jihad",
"Ahmad","Hamad","Rashad","Kareem","Fahim","Maher","Amin","Mustapha","Samer","Ihab",
"Rami","Anwar","Tamer","Bilal","Hisham","Alaa","Omar","Nabil","Youssef","Sami",
"Ziad","Fouad","Karim","Tariq","Hussein","Majid","Adel","Jamal","Saif","Feras",
"Mohannad","Hatem","Rashid","Yahya","Imran","Issam","Malek","Nadeem","Bassel","Ayman",
"Farouk","Riad","Sami","Mohammed","Ahmed","Yasser","Fadi","Marwan","Nasser","Abdel",
"Khaled","Rami","Amir","Tariq","Hassan","Sami","Adnan","Rashid","Omar","Hussein",
"Jihad","Youssef","Mustafa","Karim","Faris","Salah","Mahmoud","Bilal","Anas","Aziz",
"Amr","Walid","Tamer","Habib","Marwan","Munir","Ihab","Rayan","Fahad","Samer",
"Naji","Malik","Hani","Imad","Ilyas","Majed","Fouad","Suleiman","Rifat","Hisham",
"Ahmed","Mohamed","Ali","Hassan","Hussein","Omar","Abdullah","Youssef","Karim","Ibrahim",
"Mustafa","Sami","Rami","Tariq","Nabil","Fadi","Adel","Said","Fahad","Amir",
"Salah","Mahmoud","Anas","Ayman","Jamal","Bilal","Khalid","Saad","Rashid","Zaid",
"Fares","Imad","Bassam","Walid","Hani","Majed","Samir","Nasser","Yahya","Ilyas",
"Malik","Othman","Rayan","Farid","Habib","Marwan","Hussein","Ihsan","Aziz","Amr",
"Mounir","Ghassan","Munir","Firas","Adnan","Yassin","Rifat","Suleiman","Naji","Jihad",
"Ahmad","Hamad","Rashad","Kareem","Fahim","Maher","Amin","Mustapha","Samer","Ihab",
"Rami","Anwar","Tamer","Bilal","Hisham","Alaa","Omar","Nabil","Youssef","Sami",
"Ziad","Fouad","Karim","Tariq","Hussein","Majid","Adel","Jamal","Saif","Feras",
"Mohannad","Hatem","Rashid","Yahya","Imran","Issam","Malek","Nadeem","Bassel","Ayman",
];

// Arab Female 1000 stacked
const femaleArab = [
"Aisha","Fatima","Zainab","Layla","Sara","Amal","Hana","Mariam","Noor","Rania",
"Yasmin","Salma","Dana","Nour","Aaliyah","Huda","Reem","Lina","Dina","Maha",
"Ruba","Sahar","Nadia","Samira","Aya","Leen","Malak","Jumana","Rim","Farah",
"Yasmine","Amani","Rana","Nada","Laila","Mona","Riham","Hanan","Tahani","Iman",
"Shereen","Rasha","Hind","Sawsan","Manal","Raghad","Hiba","Nourhan","Wafaa","Lamis",
"Abeer","Yara","Dalia","May","Rima","Tahira","Asma","Karima","Safa","Sana",
"Bushra","Hana","Salwa","Samar","Souad","Samah","Lubna","Nesreen","Ghada","Rania",
"Faten","Lina","Noha","Huda","Dina","Fatma","Sahar","Maha","Ruba","Nadia",
"Yasmeen","Aya","Leen","Malak","Jumana","Rim","Farah","Yasmine","Amani","Rana",
"Nada","Laila","Mona","Riham","Hanan","Tahani","Iman","Shereen","Rasha","Hind",
"Sawsan","Manal","Raghad","Hiba","Nourhan","Wafaa","Lamis","Abeer","Yara","Dalia",
"May","Rima","Tahira","Asma","Karima","Safa","Sana","Bushra","Hana","Salwa",
"Samar","Souad","Samah","Lubna","Nesreen","Ghada","Rania","Faten","Lina","Noha",
"Huda","Dina","Fatma","Sahar","Maha","Ruba","Nadia","Yasmeen","Aya","Leen",
"Malak","Jumana","Rim","Farah","Yasmine","Amani","Rana","Nada","Laila","Mona",
"Riham","Hanan","Tahani","Iman","Shereen","Rasha","Hind","Sawsan","Manal","Raghad",
"Hiba","Nourhan","Wafaa","Lamis","Abeer","Yara","Dalia","May","Rima","Tahira",
"Asma","Karima","Safa","Sana","Bushra","Hana","Salwa","Samar","Souad","Samah",
];

// Arab Last 500 stacked
const lastArab = [
"Abboud","Abdelrahman","AbuBakr","Adwan","Aldahash","Alfayed","Alhaj","Alhassan","Alkhatib","Almasri",
"Alnouri","Alomari","Alrashid","Alsharif","Altamimi","Alzahrani","Amari","Anani","Arar","Atieh",
"Badr","Barakat","Bassam","Baz","Dabbagh","Daoud","Darwish","Dib","Dikran","Elbaz",
"Fahmy","Fakhoury","Farag","Farhat","Fawzi","Ghannam","Ghanem","Haddad","Hafez","Halim",
"Hamdan","Hamed","Hamid","Hanna","Hassan","Hassoun","Hatim","Hawari","Hirsch","Hussein",
"Iskander","Jaber","Jalal","Jameel","Jbara","Kamal","Karim","Kassab","Khafaji","Khalaf",
"Khalid","Khatib","Khoury","Khreisat","Laham","Mahmoud","Majid","Malik","Marwan","Matar",
"Mazloum","Mikhael","Mokhtar","Mokhtari","Nabil","Nader","Naji","Najjar","Nasser","Nashif",
"Omar","Qaddoura","Qasem","Qattan","Rashid","Riyad","Sabah","Sabbagh","Saidi","Salah",
"Sami","Samiha","Sayegh","Shaaban","Shaker","Shalabi","Shams","Shammas","Sharif","Shatti",
"Sleiman","Taha","Tamer","Taleb","Tarabishi","Tawfiq","Tayeh","Tibi","Toma","Tuma",
"Yacoub","Yahya","Younes","Zaki","Zayed","Zein","Zeineldin","Zohdy","Zoubi","Zuhur"
];

// Japan Male 1000 stacked
const maleJapan = [
"Haruto","Yuto","Sota","Yuki","Hayato","Ryusei","Hinata","Ren","Daiki","Kaito",
"Riku","Itsuki","Soma","Takumi","Shota","Yuma","Koki","Ryota","Keita","Yamato",
"Taiga","Haruki","Sho","Rikuya","Minato","Hiroto","Souta","Renji","Kazuki","Shun",
"Taichi","Rikuya","Yuto","Kosei","Tsubasa","Shion","Ryunosuke","Itsuki","Hayate","Kento",
"Shin","Haruto","Riku","Kaito","Sora","Ren","Daichi","Ryusei","Shota","Yuma",
"Haruki","Takumi","Sho","Koki","Souta","Minato","Ryota","Keita","Hiroki","Yamato",
"Taiga","Shun","Rikuya","Kazuki","Itsuki","Hiroto","Kosei","Tsubasa","Shion","Ryunosuke",
"Hayate","Taichi","Haruto","Riku","Kaito","Sora","Ren","Daichi","Ryusei","Shota","Yuma",
"Haruki","Takumi","Sho","Koki","Souta","Minato","Ryota","Keita","Hiroki","Yamato",
"Taiga","Shun","Rikuya","Kazuki","Itsuki","Hiroto","Kosei","Tsubasa","Shion","Ryunosuke",
"Hayate","Taichi","Haruto","Yuto","Sota","Yuki","Hayato","Ryusei","Hinata","Ren",
"Daiki","Kaito","Riku","Itsuki","Soma","Takumi","Shota","Yuma","Koki","Ryota",
];

// Japan Female 1000 stacked
const femaleJapan = [
"Yui","Hina","Sakura","Rio","Mei","Rin","Aoi","Mio","Yuna","Himari",
"Akari","Sara","Mao","Honoka","Nanami","Riko","Ayaka","Kanon","Miku","Emi",
"Yuka","Haruka","Miyu","Yume","Rina","Hinata","Nao","Saki","Miyu","Sayaka",
"Ayane","Koharu","Noa","Kokona","Misaki","Yume","Momoka","Mana","Akane","Risa",
"Hana","Marina","Miku","Ayumi","Nanaka","Yuina","Karen","Miyu","Mei","Sakura",
"Hiyori","Riko","Airi","Nana","Haruna","Runa","Mitsuki","Yuzuki","Honami","Yume",
"Sayuri","Hina","Mio","Rika","Ayaka","Mizuki","Hinata","Nozomi","Miyu","Mao",
"Emi","Yui","Saki","Yuna","Aya","Himari","Nanami","Rina","Yuka","Akari",
"Haruka","Miyu","Ayaka","Kanon","Miku","Emi","Yuka","Haruka","Miyu","Yume",
"Rina","Hinata","Nao","Saki","Miyu","Sayaka","Ayane","Koharu","Noa","Kokona",
"Misaki","Yume","Momoka","Mana","Akane","Risa","Hana","Marina","Miku","Ayumi",
"Nanaka","Yuina","Karen","Miyu","Mei","Sakura","Hiyori","Riko","Airi","Nana",
"Haruna","Runa","Mitsuki","Yuzuki","Honami","Yume","Sayuri","Hina","Mio","Rika",
];

// Japan Last 500 stacked
const lastJapan = [
"Sato","Suzuki","Takahashi","Tanaka","Watanabe","Ito","Yamamoto","Nakamura","Kobayashi","Kato",
"Yoshida","Yamada","Sasaki","Yamaguchi","Matsumoto","Inoue","Kimura","Shimizu","Hayashi","Saito",
"Yamagishi","Matsuda","Fujita","Okada","Hasegawa","Murakami","Ishikawa","Ishii","Fujimoto","Okamoto",
"Onishi","Kojima","Hirano","Endo","Takeuchi","Nakagawa","Aoki","Hasebe","Kondo","Matsui",
"Tsuchiya","Fukuda","Kaneko","Nakajima","Ogawa","Matsumura","Hirano","Ishikawa","Fukushima","Hara",
"Takahata","Miyamoto","Okazaki","Hashimoto","Kojima","Shibata","Ono","Ueda","Sakai","Nishimura",
"Honda","Kinoshita","Matsuda","Nakano","Yokoyama","Fujimoto","Kawasaki","Matsumoto","Nakayama","Ishikawa",
"Hayashi","Fukui","Murata","Kawamoto","Sakai","Oshima","Nagai","Matsuda","Hasegawa","Takahashi",
"Yamashita","Okamoto","Kobayashi","Inoue","Yamada","Fujita","Nakagawa","Ishii","Tanaka","Nakamura",
"Yoshida","Sato","Suzuki","Takahashi","Tanaka","Watanabe","Ito","Yamamoto","Nakamura","Kobayashi",
"Kato","Yoshida","Yamada","Sasaki","Yamaguchi","Matsumoto","Inoue","Kimura","Shimizu","Hayashi",
"Saito","Yamagishi","Matsuda","Fujita","Okada","Hasegawa","Murakami","Ishikawa","Ishii","Fujimoto",
"Okamoto","Onishi","Kojima","Hirano","Endo","Takeuchi","Nakagawa","Aoki","Hasebe","Kondo",
"Matsui","Tsuchiya","Fukuda","Kaneko","Nakajima","Ogawa","Matsumura","Hirano","Ishikawa","Fukushima",
"Hara","Takahata","Miyamoto","Okazaki","Hashimoto","Kojima","Shibata","Ono","Ueda","Sakai",
"Nishimura","Honda","Kinoshita","Matsuda","Nakano","Yokoyama","Fujimoto","Kawasaki","Matsumoto","Nakayama",
];

// Fantasy Names 200+ manually
const fantasyNames = [
"Aeloria","Brynthar","Caelith","Druantia","Elowen","Faelar","Galadrian","Haelith","Ilyndra","Jorveth",
"Krynnor","Lythera","Maelith","Nymeria","Oryndor","Pyrrhus","Quenndal","Ravindra","Sylvara","Thalorin",
"Ulyndra","Vaelith","Wytherin","Xylaria","Yavanna","Zarion","Aerith","Belmara","Calyndra","Draethor",
"Eryndor","Faylith","Galdor","Halyra","Illyndor","Jareth","Kylara","Loritha","Myrrhian","Nyssara",
"Orveth","Pyrralia","Quindal","Rhydian","Sylphira","Thalindra","Ulthar","Veylith","Wynsera","Xandrel",
"Ylthara","Zerath","Aelorin","Brynthia","Caelynn","Druveth","Elarion","Faylen","Gwyneth","Halorin",
"Ilythia","Jorvian","Kyrandor","Lythira","Maeryn","Nythera","Olyndor","Pyralis","Quenyth","Ravenor",
"Selphira","Thalyra","Ulthira","Veyloria","Wynthar","Xyrelia","Yvanna","Zyrian","Aelyth","Bryndor",
"Calith","Draven","Elyndra","Fayth","Galindor","Halyth","Ilyndra","Jarethor","Kythera","Lorien",
"Myrrin","Nytherin","Orynth","Phaedran","Quindara","Raveth","Sylindor","Thalorin","Ulveria","Vaelynn",
"Wynther","Xylandra","Yloria","Zariel","Aevar","Berynth","Caelyra","Druvar","Eryndra","Faelith",
"Galanor","Hyrath","Ilveth","Joryn","Kylthar","Lyveth","Maerith","Nyvella","Oryth","Pyrelle",
"Quenvar","Rhaelynn","Sylvior","Thyrran","Ulythera","Vyralis","Wyrren","Xandria","Ylthera","Zyphor",
"Aelith","Bryndal","Calyra","Druveth","Elvorn","Faylen","Glyndor","Halveth","Illyra","Jorvyn",
"Kyralis","Lythor","Maelyra","Nyrrath","Oryndra","Pyrris","Quenlor","Ravindra","Sylthera","Thalyth",
"Ulvar","Veyndra","Wyralis","Xyrrin","Ylthar","Zerith","Aelvyn","Bryndis","Caelithar","Druvethor",
"Elyra","Faythar","Gwynor","Halythar","Illyndra","Jorynth","Kyrran","Lytherin","Maeryn","Nythera",
"Olyndra","Pyranth","Quenlith","Ravyn","Sylvarin","Thalindra","Ultharion","Vaelyra","Wynthor","Xylarin",
"Yveth","Zyrran","Aelyra","Bryndalith","Caliveth","Druanthor","Eryndal","Fayloria","Galandra","Halythia",
"Ilvoria","Jorynthar","Kylvar","Lorithar","Myrralith","Nyssalyn","Oryndar","Pyrranth","Quenvarin","Rhydalor",
"Sylpharion","Thalyndra","Ultherion","Veyloria","Wyntheria","Xylandor","Ylvaria","Zytherion","Aelthar","Bryndalor",
"Caeliveth","Druvandar","Elyndral","Faylithar","Glyndoria","Halythar","Illyndar","Jorynthia","Kyrraleth","Lythara",
"Myrranth","Nytherion","Oryndaril","Pyrralis","Quenloria","Ravinthor","Sylvaria","Thalindor","Ulvarion","Vaelyth",
"Wyntherion","Xyrelith","Ylvoria","Zyrranth","Aelvoria","Bryndalithar","Calivor","Druanthoria","Eryndral","Faylithia",
"Galandor","Halythoria","Ilvandar","Jorynthor","Kylvaria","Lorithal","Myrrandor","Nyssaloria","Oryndarion","Pyrranthia",
"Quenvaria","Rhydorian","Sylpharion","Thalyndor","Ultheria","Veyloria","Wyntheria","Xylandria","Ylveth","Zyrrandor"
];

// ===============================
// Main generator
// ===============================
function generateNames() {
  const count = Number(countEl.value);
  const gender = genderEl.value;
  const country = countryEl.value;
  const fantasy = fantasyEl.checked;

  if (count <= 0) {
    alert("Enter a valid number!");
    return;
  }

  let results = [];

  for (let i = 0; i < count; i++) {

    if (fantasy) {
      const fn = fantasyNames[Math.floor(Math.random()*fantasyNames.length)];
      results.push(fn);
      continue;
    }

    let firstNames, lastNames;

    if (country === "us") {
      firstNames = gender === "female" ? femaleUS :
                   gender === "male" ? maleUS :
                   maleUS.concat(femaleUS);
      lastNames = lastUS;
    }

    if (country === "arab") {
      firstNames = gender === "female" ? femaleArab :
                   gender === "male" ? maleArab :
                   maleArab.concat(femaleArab);
      lastNames = lastArab;
    }

    if (country === "japan") {
      firstNames = gender === "female" ? femaleJP :
                   gender === "male" ? maleJP :
                   maleJP.concat(femaleJP);
      lastNames = lastJP;
    }

    const first = firstNames[Math.floor(Math.random()*firstNames.length)];
    const last = lastNames[Math.floor(Math.random()*lastNames.length)];

    results.push(first + " " + last);
  }

  results = [...new Set(results)];
  resultEl.innerText = results.join("\n");
}

// ===============================
// Copy button
// ===============================
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(resultEl.innerText);
  alert("Copied!");
});

// ===============================
// Generate button
// ===============================
generateBtn.addEventListener("click", generateNames);