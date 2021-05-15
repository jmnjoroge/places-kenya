const places = {
  "Mombasa*": {
    Changamwe: ["Port Reitz", "Kipevu", "Airport", "Changamwe", "Chaani"],
    Jomvu: ["Jomvu Kuu", "Miritini", "Mikindani"],
    Kisauni: ["Mjambere", "Junda", "Bamburi", "Mwakirunge", "Mtopanga", "Magogoni", "Shanzu"],
    Nyali: ["Free Town", "Ziwa la Ngombe", "Mkomani", "Kongowea", "Kadzandani"],
    Likoni: ["Mtongwe", "Shika Adabu", "Bofu", "Likoni", "Timbwani"],
    Mvita: ["Mji wa Kale/Makadara", "Tudor", "Tononoka", "Majengo", "Ganjoni/Shimanzi"],
  },
  Kwale: {
    Msambweni: ["Gombato Bongwe", "Ukunda", "Kinondo", "Ramisi"],
    "Lunga Lunga": ["Pongwe", "Dzombo", "Vanga", "Mwereni"],
    Kinango: ["Kinango", "Mwavumbo", "Kasemeni", "Puma", "Samburu", "Mackinnon Road", "Ndavaya"],
    Matuga: ["Tsimba Golini", "Waa", "Tiwi", "Kubo South"],
  },
  Kilifi: {
    "Kilifi North": ["Tezo", "Sokoni", "Kibarani", "Dabaso", "Matsangoni", "Watamu", "Mnarani"],
    "Kilifi South": ["Junju", "Mwarakaya", "Shimo la Tewa", "Chasimba", "Mtepeni"],
    Kaloleni: ["Mariakani", "Kayafungo", "Kaloleni", "Mwanamwinga"],
    Rabai: ["Mwawesa", "Ruruma", "Kambe/Ribe", "Rabai Kisurutini"],
    Ganze: ["Ganze", "Bamba", "Jaribuni", "Sokoke"],
    Malindi: ["Jilore", "Kakuyuni", "Ganda", "Malindi Town", "Sheila"],
    Magarini: ["Marafa", "Magarini", "Gongoni", "Adu", "Garashi", "Sabaki"],
  },
  "Tana River": {
    Garsen: ["Kipini", "Garsen South", "Kipini West", "Garsen Central", "Garsen West", "Garsen North"],
    Galole: ["Kinakomba", "Mikinduni", "Chewani", "Wayu"],
    Bura: ["Chewele", "Hirimani", "Bangale", "Sala", "Madogo"],
  },
  Lamu: {
    "Lamu East": ["Faza", "Kiunga", "Basuba"], //21
    "Lamu West": ["Shella", "Mkomani", "Hindi", "Mkunumbi", "Hongwe", "Witu", "Bahari"],
  }, //22
  "Taita Taveta": {
    Taveta: ["Chala", "Mahoo", "Bomani", "Mboghoni", "Mata"], //23
    Wundanyi: ["Wundanyi/Mbale", "Werugha", "Wumingu/Kishushe", "Mwanda/Mgange"], //24
    Mwatate: ["Ronge", "Mwatate", "Bura", "Chawia", "Wusi/Kishamba"], //25
    Voi: ["Mbololo", "Sagala", "Kaloleni", "Marungu", "Kasigau", "Ngolia"],
  }, //26
  Garissa: {
    "Garissa Township": ["Waberi", "Galbet", "Township", "Iftin"], //27
    Balambala: ["Balambala", "Danyere", "Jarajara", "Saka", "Samkuri"], //28
    Lagdera: ["Modogashe", "Bename", "Goreale", "Maalamin", "Sabena", "Baraki"], //29
    Dadaab: ["Dertu", "Dadaab", "Labisgale", "Damajale", "Liboi", "Abakaile"], //30
    Fafi: [], //31
    Ijara: [],
  }, //32
  Wajir: {
    "Wajir North": [],
    "Wajir East": [],
    Tarbaj: [],
    "Wajir West": [],
    "Wajir South": [],
    Eldas: [],
  },
  Mandera: {
    "Mandera West": [],
    Banissa: [],
    "Mandera North": [],
    "Mandera South": [],
    "Mandera East": [],
    Lafey: [],
  },
  Marsabit: {
    Moyale: [],
    "North Horr": [],
    Saku: [],
    Laisamis: [],
  },
  Isiolo: {
    "Isiolo North": ["Wabera", "Bulapesi", "Chari", "Cherab", "Ngaremara", "Burat", "Oldonyiro"], //49
    "Isiolo South": ["Garba Tulla", "Kinna", "Sericho"],
  }, //50
  Meru: {
    "Igembe South": ["Maua", "Athiru Gaiti", "Akachiu", "Kanuni", "Kiegoi/Antubochiu"], //51
    "Igembe Central": ["Akirang'ondu", "Athiru Ruujine", "Igembe East", "Njia", "Kangeta"], //52
    "Igembe North": ["Antuambia", "Ntunene", "Antubetwe Kiongo East", "Naathu", "Amwathi"], //53
    "Tigania West": ["Athwana", "Akithii", "Kianjai", "Nkomo", "Mbeu"], //54
    "Tigania East": ["Thangatha", "Mikinduri", "Kiguchwa", "Muthara", "Karama"], //55
    "North Imenti": ["Municipality", "Ntima East", "Ntima West", "Nyaki West", "Nyaki East"], //56
    Buuri: ["Timau", "Kisima", "Kiirua/Naari", "Ruiri/Rwarera"], //57
    "Central Imenti": ["Mwanganthia", "Abothunguchi Central", "Abothunguchi West", "Kiagu", "Kibirichia"], //58
    "South Imenti": ["Mitunguu", "Igoji", "Igoji West", "Abogeta East", "Abogeta West", "Nkuene"],
  }, //59
  "Tharaka-Nithi": {
    Maara: ["Mitheru", "Muthambi", "Mwimbi", "Ganga", "Chogoria"], //60
    "Chuka/Igamba Ng'ombe": ["Mariani", "Karingani", "Magumoni", "Mugwe", "Igambango'mbe"], //61
    Tharaka: ["Gatunga", "Mukothima", "Nkondi", "Chiakariga", "Marimanti"],
  }, //62 seek to 1130
  Embu: {
    Manyatta: ["Ruguru-Ngandori", "Kithimu", "Nginda", "Mbeti North", "Kirimari", "Gaturi South"], //63
    Runyenjes: ["Gaturi North", "Kagaari South", "Central", "Kagaari North", "Kyeni North", "Kyeni South"], //64
    "Mbeere South": ["Mwea", "Makima", "Mbeti South", "Mavuria", "Kiambere"], //65
    "Mbeere North": ["Nthawa", "Muminji", "Evurore"],
  }, //66
  Kitui: {
    "Mwingi North": ["Ngomeni", "Kyuso", "Mumoni", "Tseikuru", "Tharaka"], //67
    "Mwingi West": ["Kyome/Thaana", "Nguutani", "Migwani", "Kiomo/Kyethani"], //68
    "Mwingi Central": ["Waita", "Nguni", "Nuu", "Mui"], //69
    "Kitui West": ["Mutonguni", "Matinyani", "Kauwi", "Kwamutonga"], //70
    "Kitui Rural": ["Kisasi", "Mbitini", "Kwavonza/Yatta", "Kanyangi"], //71
    "Kitui Central": ["Miambani", "Township", "Kyangwithya West", "Mulango", "Kyangwithya East"], //72
    "Kitui East": ["Zombe/Mwitika", "Nzambani", "Chuluni", "Voo/Kyamatu", "Endau/Malalani", "Mutitu/Kaliku"], //73
    "Kitui South": ["Ikanga/Kyatune", "Mutomo", "Mutha", "Ikutha", "Kanziko", "Athi"],
  }, //74
  Machakos: {
    "Machakos Town": [],
    Mavoko: [],
    Masinga: ["Kivaa", "Masinga Central", "Ekalakala", "Muthesya", "Ndithini"],
    Yatta: ["Ndalani", "Matuu", "Kithimani", "Ikombe", "Katangi"], //76
    Kangundo: [],
    Kathiani: [],
    Matungulu: ["Tala", "Matungulu North", "Matungulu East", "Matungulu West", "Kyeleni"],
    Mwala: [],
  },
  Makueni: {
    Mbooni: ["Tulimani", "Mbooni", "Kithungo/Kitundu", "Kiteta-Kisau", "Waia-Kako", "Kalawa"], //83
    "Kilome#": [], //84
    Kaiti: ["Ukia", "Kee", "Kilungu", "Ilima"], //85
    Makueni: ["Wote", "Muvau/Kikumini", "Mavindini", "Kitise/Kithuki", "Kathonzweni", "Nzaui/Kalamba", "Mbitini"],
    "Kibwezi West": ["Makindu", "Nguumo", "Kikumbulyu North", "Kikumbulyu South"], //87
    "Kibwezi East": ["Masongaleni", "Mtito Andei", "Thange", "Ivingoni/Nzambani"],
  }, //88
  Nyandarua: {
    Kinangop: ["Engineer", "Gathara", "North Kinangop", "Murungaru", "Njabini/Kibiru", "Nyakio", "Magumu", "Githabai"],
    Kipipiri: ["Wanjohi", "Kipipiri", "Geta", "Githioro"],
    "Ol Joro Orok": ["Gathanji", "Gatimu", "Weru", "Charagita"],
    Ndaragwa: ["Leshau/Pondo", "Kiriita", "Central", "Shamata"],
    "Ol Kalou": ["Karau", "Kanjuiri", "Mirangine", "Kaimbaga", "Rurii"],
  },
  "Nyeri*": {
    Kieni: ["Mwiyogo/Endarasha", "Gakawa", "Gatarakwa", "Mugunda", "Mweiga", "Naro Moru/Kiamathaga", "Thegu River"],
    Mathira: ["Commercial", "Hospital", "Iria-ini/Mathira", "Kirimukuyu", "Konyu", "Magutu", "Market", "Ngorano", "Railway", "Residential", "Stadium"],
    "Nyeri Town": ["Chania", "Gatitu", "Kamakwa", "Karia", "Kiganjo", "Kirichu", "Mukaro", "Muruguru", "Nyaribo", "Nyeri Central"],
    Mukurweini: ["Gakindu", "Giathugu", "Gikondi", "Githi", "Muhito", "Rutune", "Thanu"],
    Tetu: ["Aguthi", "Karundu", "Muhoya", "Tetu", "Thingingi"],
    Othaya: ["Kanyange", "Kianganda", "Nduye River", "Nyamari", "Thuti", "Chinga", "Iria-ini", "Karima", "Mahiga", "Mumwe"],
  },
  Kirinyaga: {
    Mwea: ["Mutithi", "Kangai", "Thiba", "Wamumu", "Nyangati", "Murinduko", "Gathigiriri", "Tebere"],
    Gichugu: ["Kabare", "Karumandi", "Baragwi", "Ngariama", "Njuki-Ini"],
    Ndia: ["Mukure", "Kiine", "Kariti"],
    "Kirinyaga Central": ["Kanyekiini", "Mutira", "Inoi", "Kerugoya"],
  },
  "Murang'a": {
    Kangema: ["Kanyenya-ini", "Muguru", "Rwathia"], //104
    Mathioya: ["Kiharu", "Kahuro", "Kangema", "Mathioya"],
    Kiharu: ["Wangu", "Mugoiri", "Mbiri", "Township", "Murarandia", "Gaturi"],
    Kigumo: ["Kahumbu", "Muthithi", "Kigumo", "Kangari", "Kinyona"], //107
    "Maragua#*": [],
    Kandara: ["Ngararia", "Muruka", "Kagundu-ini", "Gaichanjiru", "Ithiru", "Ruchu"], //109
    Gatanga: ["Ithanga", "Kakuzi/Mitubiri", "Kihumbu-ini", "Gatanga", "Kariara"],
  }, //110
  Kiambu: {
    Githunguri: ["Githunguri", "Githiga", "Ikinu", "Ngewa", "Komothai"],
    "Gatundu North": ["Gituamba", "Githobokoni", "Chania", "Mang'u"],
    "Gatundu South": ["Kiamwangi", "Kiganjo", "Ndarugo", "Ngenda"],
    Ruiru: ["Gitothua", "Biashara", "Gatongora", "Kahawa Sukari", "Kahawa Wendani", "Kiuu", "Mwiki", "Mwihoko"],
    Juja: ["Murera", "Theta", "Witeithie", "Kalimoni"],
    "Thika Town": ["Township", "Kamenu", "Hospital", "Gatuanyaga", "Ngoliba"],
    /*117*/ "Kiambu Town": ["Ting'ang'a", "Ndumberi", "Riabai", "Township"],
    Kiambaa: ["Cianda", "Karuri", "Ndenderu", "Muchatha", "Kihara"],
    Kabete: ["Gitaru", "Muguga", "Nyathuna", "Kabete", "Uthiru"],
    Kikuyu: ["Karai", "Nachu", "Sigona", "Kikuyu", "Kinoo"],
    Limuru: ["Limuru Central", "Limuru East", "Ngecha-Tigoni", "Ndeiya", "Bibirioni"],
    Lari: ["Kinale", "Kijabe", "Nyanduma", "Kamburu", "Lari Kirenga"],
  },
  Turkana: {
    "Turkana North": [],
    "Turkana West": [],
    "Turkana Central": [],
    Loima: [],
    "Turkana South": [],
    "Turkana East": [],
  },
  "West Pokot": {
    Kapenguria: ["Riwo", "Kapenguria", "Mnagei", "Siyoi", "Endugh", "Sook"],
    Kacheliba: ["Suam", "Kodich", "Kasei", "Kapchok", "Kiwawa", "Alale"],
    "Pokot South": ["Chepareria", "Batei", "Lelan", "Tapach"],
    Sigor: ["Sekerr", "Masool", "Lomut", "Wei Wei"],
  },
  Samburu: {
    "Samburu West": [],
    "Samburu North": [],
    "Samburu East": [],
  },
  "Trans Nzoia": {
    Kwanza: [],
    Endebess: ["Endebess", "Matumbei", "Chepchoina"], //137
    Saboti: ["Kinyoro", "Matisi", "Tuwani", "Saboti", "Machewa"], //138
    Kiminini: ["Kiminini", "Waitaluk", "Hospital", "Sirende", "Sikhendu", "Nabwiswa"], //139
    Cherangany: ["Motosiet", "Situnga", "Kaplamai", "Makutano", "Sinyereri", "Cherangany", "Suwerwa"] /*140*/,
  },
  "Uasin Gishu": {
    Soy: ["Kuinet/Kapsuswa", "Soy", "Ziwa", "Kipsomba", "Kapkures", "Mois Bridge", "Segero/Barsombe"], //
    Turbo: [],
    Moiben: ["Sergoit", "Karuna Meibeki", "Moiben", "Tembelio", "Kimumu"], //143
    Ainabkoi: ["Kapsoya", "Kaptagat", "Ainabkoi/Olare"],
    Kapseret: [],
    Kesses: [],
  },
  "Elgeyo Marakwet": {
    "Marakwet East": ["Sambirir", "Kapyego", "Endo", "Embobut/Embolot"],
    "Marakwet West": [],
    "Keiyo North": [],
    "Keiyo South": [],
  },
  Nandi: {
    "Tinderet#": [],
    Aldai: [],
    "Nandi Hills": [],
    "Chesumei#": [],
    Emgwen: [],
    Mosop: [],
  },
  Baringo: {
    Tiaty: [],
    "Baringo North": [],
    "Baringo Central": [],
    "Baringo South": [],
    Mogoto: [],
    "Eldama Ravine": [],
  },
  "Laikipia*": {
    "Laikipia North": [],
    "Laikipia West": ["Kiganda", "Maina", "Manguo", "Ndunyu", "Ndururumo/Hospital", "Uaso Narok", "Ayam", "Lorian", "Manyatta", "Melwa", "Gituamba", "Igwamiti", "Kinamba", "Muhotetu", "Mutara", "Muthengera", "Ol-Moran", "Salama", "Sipili", "Sosiani"],
    "Laikipia East": ["Biashara", "Central", "Hospital", "Mashamba", "Nturukuma", "Stadium", "Ethi", "Ildigiri/Ilpolei", "Ilingwesi", "Lamuria", "Makurian", "Mukogodo", "Mumonyot", "Naibor", "Ngobit", "Oloiborsoit", "Segera", "Sirma", "Tigithi", "Umande"],
  },
  "Nakuru*": {
    "Nakuru Town East": ["Biashara", "Kivumbini", "Flamingo", "Menengai", "Nakuru East"],
    "Nakuru Town West": ["Barut", "London", "Kaptembwa", "Kapkures", "Rhoda", "Shabab"],
    Njoro: ["Mau Narok", "Mauche", "Kihingo", "Nesuit", "Lare", "Njoro"],
    Molo: ["Mariashoni", "Elburgon", "Turi", "Molo"],
    Gilgil: ["Gilgil", "Elementaita", "Mbaruk/Eburu", "Malewa West", "Murindat"],
    Naivasha: ["Biashara", "Hellsgate", "Lakeview", "Maai Mahiu", "Maeilla", "Olkaria", "Naivasha East", "Viwandani"],
    "Kuresoi North": ["Kiptororo", "Nyota", "Sirikwa", "Kamara"],
    "Kuresoi South": ["Amalo", "Keringet", "Kiptagich", "Tinet"],
    Rongai: ["Menengai West", "Soin", "Visoi", "Mosop", "Solai"],
    Subukia: ["Subukia", "Weseges", "Kabazi"],
    Bahati: ["Dundori", "Kabatini", "Kiamaina", "Lanet/Umoja", "Bahati"],
  },
  "Narok*": {
    //["Angata naado", "Enabelbel", "Enoosupukia", "Entiyani", "Entontol", "Ildamat", "Ilmasharian/Morijo", "Keekonyokie", "Masikonde", "Mosiro", "Naisoya", "Nkairamiram", "Nkareta East", "Nkareta North", "Ntulele", "Olchoro", "Oleleshwa", "Oletukat", "Olokurto", "Olopito", "Olorropil", "Olpusimoru", "Stadium", "Suswa", "Upper Melili"],
    "Narok North*": ["Narok Town", "Olpusimoru", "Olokurto", "Nkareta", "Olorroil", "Melili"],
    //["Elangata-Enterit", "Ilmotiook", "Lemek", "Loita West", "Maji Moto", "Mara", "Melelo", "Morijo Loita", "Mulot", "Naikarra", "Naroosura", "Nkareta West", "Olderkesi", "Olkinyei", "Olololunga", "Siana"],
    "Narok South*": ["Maji Moto", "Ololulung'a", "Melelo", "Loita", "Sogoo", "Sagamian"],
    "Narok West": ["Ilmotiok", "Mara", "Siana", "Naikara"],
    "Narok East": ["Mosiro", "Ildamat", "Keekonyokie", "Suswa"],
    "Emuria Dikirr": ["Ilkerin", "Olomasani", "Mogondo", "Kapsasian"],
    Kilgoris: ["Central", "Keian", "Angata Barikoi", "Shankoe", "Kimintet", "Lolgorian"],
  },
  Kajiado: {
    "Kajiado Central": [],
    "Kajiado North": [],
    "Kajiado South": [],
    "Kajiado East": [],
    "Kajiado West": [],
  },
  Kericho: {
    "Kipkelion East": [],
    "Kipkelion West": [],
    Ainamoi: [],
    Bureti: [],
    Belgut: [],
    "Sigowet/Soin": [],
  },
  "Bomet*": {
    "Bomet Central": [],
    "Bomet East": [],
    Chepalungu: [],
    Sotik: ["Chebilat", "Chemagel", "Kaplong"],
    Konoin: ["Boito", "Embomos", "Kaptebeng'wet", "Kimulot", "Koiwa", "Mogogosiek", "Saosa"],
  },
  Kakamega: {
    Lugari: ["Lumakanda", "Lugari", "Mautuma", "Lwandeti", "Chekalini", "Chevaywa"],
    Likuyani: ["Sinoko", "Nzoia", "Kongoni", "Sango", "Likuyani"],
    "Malava#": [],
    Lurambi: ["Shirere", "Mahiakalo", "Shieywe", "Butsotso Central", "Butsotso East", "Butsotso South"], //202
    "Navakholo#": [],
    "Mumias West": ["Mumias Central", "Mumias North", "Etenje", "Musanda"], //204
    "Mumias East": ["East Wanga", "Lubuni Lusheya", "Malaha Isongo Makunga"],
    Matungu: ["Koyonzo", "Namamali", "Kholera", "Khalaba", "Mayoni"],
    "Butere#": [],
    "Khwisero#*": [],
    Shinyalu: [],
    Ikolomani: ["Idakho East", "Idakho South", "Idakho Central", "Idakho North"],
  },
  Vihiga: {
    Vihiga: ["Mungoma", "Maragoli Central", "Lugaga", "Wamuluma", "Maragoli South"],
    "Sabatia#": [],
    "Hamisi#": [],
    Luanda: ["Luanda Township", "Luanda South", "Mwibona", "Wemiliba", "Emabungo"],
    Emuhaya: ["Central Bunyore", "North East Bunyore", "West Bunyore"],
  },
  "Bungoma*": {
    Bumula: ["Mukwa", "Siboti", "Bumula", "Kimaeti", "Musikoma", "Namasanda", "Sio", "Siritanyi", "South Bukusu", "West Bukusu"],
    Kanduyi: ["Khalaba", "Mjini", "Sinoko", "Stadium", "Marakaru/Tuuti", "Bukembe West", "Bukembe East", "East Sang'alo", "West Sang'alo"],
    Sirisia: ["Chebukutumi", "Chongoyi", "Kulisiru", "Ndakalu", "Sitabicha/Mwalie East", "Tamlega/Mwalie West", "Chwele", "Luuya/Sirare", "Lwandanyi/Namubila", "Mukuyuni", "Namwela", "North Bukusu"],
    Kabuchai: [],
    Kimilili: ["Kibingei", "Kimilili Township", "Kimilili Rural", "Maeni", "Kamukuywa"],
    "Webuye West": [],
    "Webuye East": [],
    "Mt Elgon": ["Chemoge", "Chepkube", "Cheptais", "Chepyuk", "Chesikak", "Chongeywo", "Elgon", "Emmia", "Kapkateny", "Kaptama", "Namorio"],
    Tongaren: [],
  },
  "Busia*": {
    Nambale: ["Bulanda", "Burumba", "Mayenje", "Mjini", "Kisoko", "Lwanyange", "Manyole", "Tangakona/Khwirale", "Bukhayo Central", "Bukhayo East", "Bukhayo North/Walatsi", "Matayos North", "Matayos South"],
    Butula: ["Marachi Central", "Marachi East", "Marachi North", "Marachi West", "Elugulu", "Kingandole"],
    Funyula: ["Bwiri", "Funyula North", "Funyula South", "Namboboto", "Nangina", "Odiado", "Wakhungu"],
    Budalangi: ["Bukani", "Bukoma", "Bulemia", "Lunyofu", "Bunyala North", "Bunyala South"],
    Matayos: [],
    "Teso North": [],
    "Teso South": [],
  },
  Siaya: {
    "Gem#": [],
    Ugenya: ["Ugenya East", "Ugenya West", "Ugenya North", "Ukwala"],
    Ugunja: ["Sidindi", "Ugunja", "Sigomre"],
    "Alego Usonga#": [],
    "Bondo#": [],
    "Rarieda#": ["Central Asembo", "East Asembo", "Madiany East", "Madiany West", "Rarieda West"],
  },
  "Kisumu*": {
    "Kisumu East": ["Central Kolwa", "East Kajulu", "East Kolwa", "Manyatta", "Nyalenda", "West Kajulu"],
    "Kisumu West": [],
    "Kisumu Central": [],
    Nyando: [],
    Muhoroni: ["Fort Ternan", "God Nyithindo", "Koru", "Muhoroni Town", "Owaga", "Ombeyi South", "Chemelil", "Miwani", "North East Kano", "Nyang'oma", "Ombeyi North", "Tamu"],
    Nyakach: [],
    Seme: [],
  },
  "Homa Bay": {
    "Homa Bay Town": [],
    "Kabondo Kasipul": [],
    Karachuonyo: [],
    Kasipul: [],
    Ndhiwa: [],
    Rangwe: [],
    "Suba North": [],
    "Suba South": [],
  },
  Migori: {
    Rongo: [],
    Awendo: [],
    "Suna East": [],
    "Suna West": [],
    Uriri: [],
    Nyatike: [],
    "Kuria West": [],
    "Kuria East": [],
  },
  "Kisii*": {
    Bobasi: ["Emenwa/Nyoera", "Kiobegi/Gionseri", "Nyachogochogo", "Nyantira", "Mosora", "Sameta", "Bobasi Chache", "Bobasi Masige", "Igare", "Maji Mazuri", "Nyacheki", "Nyangusu"],
    Bonchari: ["Nyamokenye", "Bogiakumu", "Bokeira", "Insaria", "Nyang'iti", "Bomariba", "Bomokora", "Riana"],
    "Nyaribari Chache": ["Bobaracho", "Central", "Ibeno/Keumbu", "Kanga Hill", "Kegati", "Kiogoro", "Nyansira", "Nyaura"],
    "Nyaribari Masaba": ["Amabuko", "Ichuni", "Gekonge", "Gesusu", "Kerema", "Metembe", "Ikorongo", "Kiamokama", "Mogonga"],
    "South Mugirango": ["Bogetenga", "Boikanga East", "Boikanga West", "Bomonyara", "Borabu", "Central/Ikoba", "Chitago", "Getenga", "Nyachenge", "Nyango/Kiburunga", "Nyansore"],
    "Bomachoge Borabu": [],
    "Bomachoge Chache": [],
    "Kitutu Chache North": [],
    "Kitutu Chache South": [],
  },
  Nyamira: {
    "Kitutu Masaba": [],
    "West Mugirango": [],
    "North Mugirango": [],
    Borabu: [],
  },
  "Nairobi City*": {
    Westlands: ["Kitisuru", "Parklands/Highridge", "Kangemi", "Karura", "Mountain View"],
    "Dagoretti North": ["Kilimani", "Kawangware", "Gatina", "Kileleshwa", "Kabiro"],
    "Dagoretti South": ["Mutu-ini", "Ngand'o", "Riruta", "Uthiru/Ruthimitu", "Waithaka"],
    "Lang'ata": ["Karen", "Nairobi West", "Nyayo Highrise", "South C"],
    Kibra: ["Laini Saba", "Lindi", "Makina", "Woodley", "Kenyatta Golf Course", "Sarang'ombe"],
    Roysambu: ["Githurai", "Kahawa West", "Zimmerman", "Roysambu", "Kahawa"],
    Kasarani: ["Clay City", "Mwiki", "Kasarani", "Njiru Shopping", "Ruai"],
    Ruaraka: ["Babadogo", "Utalii", "Mathare North", "Lucky Summer", "Korogocho"],
    "Embakasi South": ["Imara Daima", "Kwa Njenga", "Kwa Reuben", "Pipeline", "Kware"],
    "Embakasi North": ["Kariobangi North", "Dandora Area I", "Dandora Area II", "Dandora Area III", "Dandora Area IV"],
    "Embakasi Central": ["Kayole North", "Kayole NorthCentral*", "Kayole South", "Komarock", "Chokaa", "Matopeni/Spring Valley"],
    "Embakasi East": ["Upper Savanna", "Lower Savanna", "Embakasi", "Utawala", "Mihang'o"],
    "Embakasi West": ["Umoja I", "Umoja II", "Mowlem", "Kariobangi South"],
    Makadara: ["Maringo/Hamza", "Viwandani", "Harambee", "Makongeni"],
    Kamukunji: ["Pumwani", "Eastleigh North", "Eastleigh South", "Airbase", "California"],
    Starehe: ["Nairobi Central", "Ngara", "Pangani", "Ziwani/Kariokor", "Landimawe", "Nairobi South"],
    Mathare: ["Hospital", "Mabatini", "Huruma", "Ngei", "Mlango Kubwa", "Kiamaiko"],
  },
};

module.exports = places;
