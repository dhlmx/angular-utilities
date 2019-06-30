var cssHelper = function () {
    var getCountryFlagCode = function (country) {
        var flagCode = constants.STRING_EMPTY;
        
        if (country === undefined || country === null) {
            return flagCode;
        }

        switch (country) {
            case "Afganistán":
            case "Afghanistan":
            case "Kabul":
                flagCode = "af";
                break;
            case "Aland Islands":
            case "Mariehamn":
                flagCode = "ax";
                break;
            case "Albania":
            case "Tirana":
                flagCode = "al";
                break;
            case "Algeria":
            case "Algiers":
                flagCode = "dz";
                break;
            case "American Samoa":
            case "Pago Pago":
                flagCode = "as";
                break;
            case "Andorra":
            case "Andorra la Vella":
                flagCode = "ad";
                break;
            case "Angola":
            case "Luanda":
                flagCode = "ao ";
                break;
            case "Anguilla":
            case "The Valley":
                flagCode = "ai";
                break;
            case "Antigua y Barbuda":
            case "Antigua and Barbuda":
            case "St. John's":
                flagCode = "ag";
                break;
            case "Argentina":
            case "Buenos Aires":
                flagCode = "ar";
                break;
            case "Armenia":
            case "Yerevan":
                flagCode = "am";
                break;
            case "Aruba":
            case "Oranjestad":
                flagCode = "aw";
                break;
            case "Australia":
            case "Canberra":
                flagCode = "au";
                break;
            case "Austria":
            case "Vienna":
                flagCode = "at";
                break;
            case "Azerbaijan":
            case "Baku":
                flagCode = "az";
                break;
            case "Bahamas":
            case "Nassau":
                flagCode = "bs";
                break;
            case "Baréin":
            case "Bahrain":
            case "Manama":
                flagCode = "bh";
                break;
            case "Bangladesh":
            case "Dhaka":
                flagCode = "bd";
                break;
            case "Barbados":
            case "Bridgetown":
                flagCode = "bb";
                break;
            case "Bielorusia":
            case "Belarus":
            case "Minsk":
                flagCode = "by";
                break;
            case "Bélgica":
            case "Belgium":
            case "Brussels":
                flagCode = "be";
                break;
            case "Belice":
            case "Belize":
            case "Belmopan":
                flagCode = "bz";
                break;
            case "Benin":
            case "Porto-Novo":
                flagCode = "bj";
                break;
            case "Bermuda":
            case "Hamilton":
                flagCode = "bm";
                break;
            case "Bhutan":
            case "Thimphu":
                flagCode = "bt";
                break;
            case "Bolivia":
            case "Estado Plurinacional de Bolivia":
            case "Bolivia (Estado Plurinacional de)":
            case "Bolivia (Plurinational State of)":
            case "La Paz":
                flagCode = "bo";
                break;
            case "Bonaire, Sint Eustatius and Saba":
            case "Kralendijk":
                flagCode = "bq";
                break;
            case "Bosnia y Herzegovina":
            case "Bosnia and Herzegovina":
            case "Sarajevo":
                flagCode = "ba";
                break;
            case "Botswana":
            case "Gaborone":
                flagCode = "bw";
                break;
            case "Brasil":
            case "Brazil":
            case "Brasília":
                flagCode = "br";
                break;
            case "British Indian Ocean Territory":
            case "Diego Garcia":
                flagCode = "io";
                break;
            case "Brunei Darussalam":
            case "Bandar Seri Begawan":
                flagCode = "bn";
                break;
            case "Bulgaria":
            case "Sofia":
                flagCode = "bg";
                break;
            case "Burkina Faso":
            case "Ouagadougou":
                flagCode = "bf";
                break;
            case "Burundi":
            case "Bujumbura":
                flagCode = "bi";
                break;
            case "Cabo Verde":
            case "Praia":
                flagCode = "cv";
                break;
            case "Camboya":
            case "Cambodia":
            case "Phnom Penh":
                flagCode = "kh";
                break;
            case "Camerún":
            case "Cameroon":
            case "Yaoundé":
                flagCode = "cm";
                break;
            case "Canadá":
            case "Canada":
            case "Ottawa":
                flagCode = "ca";
                break;
            case "Islas Caimán":
            case "Cayman Islands":
            case "George Town":
                flagCode = "ky";
                break;
            case "República Centroafricana":
            case "Central African Republic":
            case "Bangui":
                flagCode = "cf";
                break;
            case "Chad":
            case "N'Djamena":
                flagCode = "td";
                break;
            case "Chile":
            case "Santiago":
                flagCode = "cl";
                break;
            case "China":
            case "China (República Popular)":
            case "Repúlica Popular China":
            case "Beijing":
                flagCode = "cn";
                break;
            case "Christmas Island":
            case "Flying Fish Cove":
                flagCode = "cx";
                break;
            case "Cocos (Keeling) Islands":
            case "West Island":
                flagCode = "cc";
                break;
            case "Colombia":
            case "Bogotá":
                flagCode = "co";
                break;
            case "Comoros":
            case "Moroni":
                flagCode = "km";
                break;
            case "Islas":
            case "Cook Islands":
            case "Avarua":
                flagCode = "ck";
                break;
            case "Costa Rica":
            case "San José":
                flagCode = "cr";
                break;
            case "Croacia":
            case "Croatia":
            case "Zagreb":
                flagCode = "hr";
                break;
            case "Cuba":
            case "Cuba (República de)":
            case "Havana":
                flagCode = "cu";
                break;
            case "Curazao":
            case "Curaçao":
            case "Willemstad":
                flagCode = "cw";
                break;
            case "Chipre":
            case "Cyprus":
            case "Nicosia":
                flagCode = "cy";
                break;
            case "República Checa":
            case "Czech Republic":
            case "Prague":
                flagCode = "cz";
                break;
            case "Côte d'Ivoire":
            case "Yamoussoukro":
                flagCode = "ci";
                break;
            case "República Democrática del Congo":
            case "Democratic Republic of the Congo":
            case "Kinshasa":
                flagCode = "cd";
                break;
            case "Dinamarca":
            case "Denmark":
            case "Copenhagen":
                flagCode = "dk";
                break;
            case "Djibouti":
            case "Djibouti":
                flagCode = "dj";
                break;
            case "Dominica":
            case "Roseau":
                flagCode = "dm";
                break;
            case "República Dominicana":
            case "Dominican Republic":
            case "Santo Domingo":
                flagCode = "do";
                break;
            case "Ecuador":
            case "Quito":
                flagCode = "ec";
                break;
            case "Egipto":
            case "Egypt":
            case "Cairo":
                flagCode = "eg";
                break;
            case "El Salvador":
            case "El Salvador (República de)":
            case "San Salvador":
                flagCode = "sv";
                break;
            case "Guinea Ecuatorial":
            case "Equatorial Guinea":
            case "Malabo":
                flagCode = "gq";
                break;
            case "Eritrea":
            case "Asmara":
                flagCode = "er";
                break;
            case "Estonia":
            case "Tallinn":
                flagCode = "ee";
                break;
            case "Etiopía":
            case "Ethiopia":
            case "Addis Ababa":
                flagCode = "et";
                break;
            case "Islas Falkland":
            case "Falkland Islands":
            case "Stanley":
                flagCode = "fk";
                break;
            case "Faroe Islands":
            case "Tórshavn":
                flagCode = "fo";
                break;
            case "Federated States of Micronesia":
            case "Palikir":
                flagCode = "fm";
                break;
            case "Fiji":
            case "Suva":
                flagCode = "fj";
                break;
            case "Finlandia":
            case "Finland":
            case "Helsinki":
                flagCode = "fi";
                break;
            case "Macedonia":
            case "Macedonia (Ex República Yugoslava de)":
            case "Former Yugoslav Republic of Macedonia":
            case "Skopje":
                flagCode = "mk";
                break;
            case "Francia":
            case "France":
            case "Paris":
                flagCode = "fr";
                break;
            case "Guyana Francesa":
            case "French Guiana":
            case "Cayenne":
                flagCode = "gf";
                break;
            case "Polinesia Francesa":
            case "French Polynesia":
            case "Papeete":
                flagCode = "pf";
                break;
            case "French Southern Territories":
            case "Saint-Pierre, Réunion":
                flagCode = "tf";
                break;
            case "Gabón":
            case "Gabon":
            case "Libreville":
                flagCode = "ga";
                break;
            case "Gambia":
            case "Banjul":
                flagCode = "gm";
                break;
            case "Georgia":
            case "Tbilisi":
                flagCode = "ge";
                break;
            case "Alemania":
            case "Germany":
            case "Berlin":
                flagCode = "de";
                break;
            case "Ghana":
            case "Accra":
                flagCode = "gh";
                break;
            case "Gibraltar":
            case "Gibraltar":
                flagCode = "gi";
                break;
            case "Grecia":
            case "Greece":
            case "Athens":
                flagCode = "gr";
                break;
            case "Groelandia":
            case "Greenland":
            case "Nuuk":
                flagCode = "gl";
                break;
            case "Grenada":
            case "St. George's":
                flagCode = "gd";
                break;
            case "Guadalupe":
            case "Guadeloupe":
            case "Basse-Terre":
                flagCode = "gp";
                break;
            case "Guam":
            case "Hagåtña":
                flagCode = "gu";
                break;
            case "Guatemala":
            case "Guatemala (República de)":
            case "Guatemala City":
                flagCode = "gt";
                break;
            case "Guernsey":
            case "Saint Peter Port":
                flagCode = "gg";
                break;
            case "Guinea":
            case "Conakry":
                flagCode = "gn";
                break;
            case "Guinea-Bissau":
            case "Bissau":
                flagCode = "gw";
                break;
            case "Guyana":
            case "Georgetown":
                flagCode = "gy";
                break;
            case "Haití":
            case "Haiti":
            case "Port-au-Prince":
                flagCode = "ht";
                break;
            case "Holy See":
            case "Vatican City":
                flagCode = "va";
                break;
            case "Honduras":
            case "Tegucigalpa":
                flagCode = "hn";
                break;
            case "Hong Kong":
            case "Hong Kong":
                flagCode = "hk";
                break;
            case "Hungría":
            case "Hungary":
            case "Budapest":
                flagCode = "hu";
                break;
            case "Islandia":
            case "Iceland":
            case "Reykjavik":
                flagCode = "is";
                break;
            case "India":
            case "New Delhi":
                flagCode = "in";
                break;
            case "Indonesia":
            case "Jakarta":
                flagCode = "id";
                break;
            case "Irán":
            case "República Islámica de Irán":
            case "Irán (República Islámica de)":
            case "Iran (Islamic Republic of)":
            case "Iran (Islamic Republic of)":
            case "Tehran":
                flagCode = "ir";
                break;
            case "Irak":
            case "Iraq":
            case "Baghdad":
                flagCode = "iq";
                break;
            case "Irlanda":
            case "Ireland":
            case "Dublin":
                flagCode = "ie";
                break;
            case "Isla of Man":
            case "Isle of Man":
            case "Douglas":
                flagCode = "im";
                break;
            case "Israel":
            case "Jerusalem":
                flagCode = "il";
                break;
            case "Italia":
            case "Italy":
            case "Rome":
                flagCode = "it";
                break;
            case "Jamaica":
            case "Kingston":
                flagCode = "jm";
                break;
            case "Japón":
            case "Japan":
            case "Tokyo":
                flagCode = "jp";
                break;
            case "Jersey":
            case "Saint Helier":
                flagCode = "je";
                break;
            case "Jordania":
            case "Jordan":
            case "Amman":
                flagCode = "jo";
                break;
            case "Kazajastán":
            case "Kazakhstan":
            case "Astana":
                flagCode = "kz";
                break;
            case "Kenia":
            case "Kenya":
            case "Nairobi":
                flagCode = "ke";
                break;
            case "Kiribati":
            case "South Tarawa":
                flagCode = "ki";
                break;
            case "Kuwait":
            case "Kuwait City":
                flagCode = "kw";
                break;
            case "Kirguistán":
            case "Kyrgyzstan":
            case "Bishkek":
                flagCode = "kg";
                break;
            case "Laos":
            case "Vientiane":
                flagCode = "la";
                break;
            case "Letonia":
            case "Latvia":
            case "Riga":
                flagCode = "lv";
                break;
            case "Líbano":
            case "Lebanon":
            case "Beirut":
                flagCode = "lb";
                break;
            case "Lesotho":
            case "Maseru":
                flagCode = "ls";
                break;
            case "Liberia":
            case "Monrovia":
                flagCode = "lr";
                break;
            case "Libia":
            case "Libya":
            case "Tripoli":
                flagCode = "ly";
                break;
            case "Liechtenstein":
            case "Vaduz":
                flagCode = "li";
                break;
            case "Lituania":
            case "Lithuania":
            case "Vilnius":
                flagCode = "lt";
                break;
            case "Luxemburgo":
            case "Luxembourg":
            case "Luxembourg City":
                flagCode = "lu";
                break;
            case "Macao":
            case "Macau":
            case "Macau":
                flagCode = "mo";
                break;
            case "Madagascar":
            case "Antananarivo":
                flagCode = "mg";
                break;
            case "Malawi":
            case "Lilongwe":
                flagCode = "mw";
                break;
            case "Malasia":
            case "Malaysia":
            case "Kuala Lumpur":
                flagCode = "my";
                break;
            case "Maldivas":
            case "Maldives":
            case "Malé":
                flagCode = "mv";
                break;
            case "Mali":
            case "Bamako":
                flagCode = "ml";
                break;
            case "Malta":
            case "Valletta":
                flagCode = "mt";
                break;
            case "Islas Marshall":
            case "Marshall Islands":
            case "Majuro":
                flagCode = "mh";
                break;
            case "Martinica":
            case "Martinique":
            case "Fort-de-France":
                flagCode = "mq";
                break;
            case "Mauritania":
            case "Nouakchott":
                flagCode = "mr";
                break;
            case "Mauricio":
            case "Mauritius":
            case "Port Louis":
                flagCode = "mu";
                break;
            case "Mayotte":
            case "Mamoudzou":
                flagCode = "yt";
                break;
            case "México":
            case "México (Estados Unidos Mexicanos)":
            case "Mexico":
            case "Mexico City":
                flagCode = "mx";
                break;
            case "Moldavia":
            case "Moldova":
            case "Chișinău":
                flagCode = "md";
                break;
            case "Mónaco":
            case "Monaco":
            case "Monaco":
                flagCode = "mc";
                break;
            case "Mongolia":
            case "Ulaanbaatar":
                flagCode = "mn";
                break;
            case "Montenegro":
            case "Podgorica":
                flagCode = "me";
                break;
            case "Montserrat":
            case "Little Bay, Brades, Plymouth":
                flagCode = "ms";
                break;
            case "Marruecos":
            case "Morocco":
            case "Rabat":
                flagCode = "ma";
                break;
            case "Mozambique":
            case "Maputo":
                flagCode = "mz";
                break;
            case "Mianmar":
            case "Myanmar":
            case "Naypyidaw":
                flagCode = "mm";
                break;
            case "Namibia":
            case "Windhoek":
                flagCode = "na";
                break;
            case "Nauru":
            case "Yaren District":
                flagCode = "nr";
                break;
            case "Nepal":
            case "Kathmandu":
                flagCode = "np";
                break;
            case "Holanda":
            case "Netherlands":
            case "Amsterdam":
                flagCode = "nl";
                break;
            case "Nueva Caledonia":
            case "New Caledonia":
            case "Nouméa":
                flagCode = "nc";
                break;
            case "Nueva Zelanda":
            case "New Zealand":
            case "Wellington":
                flagCode = "nz";
                break;
            case "Nicaragua":
            case "Managua":
                flagCode = "ni";
                break;
            case "Níger":
            case "Niger":
            case "Niamey":
                flagCode = "ne";
                break;
            case "Nigeria":
            case "Abuja":
                flagCode = "ng";
                break;
            case "Niue":
            case "Alofi":
                flagCode = "nu";
                break;
            case "Norfolk Island":
            case "Kingston":
                flagCode = "nf";
                break;
            case "Corea del Norte":
            case "Corea del Norte (República Popular Democrática de Corea)":
            case "North Korea":
            case "Pyongyang":
                flagCode = "kp";
                break;
            case "Northern Mariana Islands":
            case "Capitol Hill":
                flagCode = "mp";
                break;
            case "Noruega":
            case "Norway":
            case "Oslo":
                flagCode = "no";
                break;
            case "Omán":
            case "Oman":
            case "Muscat":
                flagCode = "om";
                break;
            case "Paquistán":
            case "Pakistan":
            case "Islamabad":
                flagCode = "pk";
                break;
            case "Palau":
            case "Ngerulmud":
                flagCode = "pw";
                break;
            case "Panamá":
            case "Panamá (República de)":
            case "Panama":
            case "Panama City":
                flagCode = "pa";
                break;
            case "Papua New Guinea":
            case "Port Moresby":
                flagCode = "pg";
                break;
            case "Paraguay":
            case "Asunción":
                flagCode = "py";
                break;
            case "Perú":
            case "Peru":
            case "Lima":
                flagCode = "pe";
                break;
            case "Filipinas":
            case "Philippines":
            case "Manila":
                flagCode = "ph";
                break;
            case "Pitcairn":
            case "Adamstown":
                flagCode = "pn";
                break;
            case "Polonia":
            case "Poland":
            case "Warsaw":
                flagCode = "pl";
                break;
            case "Portugal":
            case "Lisbon":
                flagCode = "pt";
                break;
            case "Puerto Rico":
            case "San Juan":
                flagCode = "pr";
                break;
            case "Catar":
            case "Qatar":
            case "Doha":
                flagCode = "qa";
                break;
            case "Donetsk":
            case "Donetsk (República Popular de)":
            case "República Popular de Donetsk":
                flagCode = "dr";
                break;
            case "República del Congo":
            case "Republic of the Congo":
            case "Brazzaville":
                flagCode = "cg";
                break;
            case "Rumania":
            case "Romania":
            case "Bucharest":
                flagCode = "ro";
                break;
            case "Rusia":
            case "Rusia (Federación de)":
            case "Russia":
            case "Moscow":
                flagCode = "ru";
                break;
            case "Ruanda":
            case "Rwanda":
            case "Kigali":
                flagCode = "rw";
                break;
            case "Reunión":
            case "Réunion":
            case "Saint-Denis":
                flagCode = "re";
                break;
            case "Saint Barthélemy":
            case "Gustavia":
                flagCode = "bl";
                break;
            case "Saint Helena, Ascension and Tristan da Cunha":
            case "Jamestown":
                flagCode = "sh";
                break;
            case "Saint Kitts and Nevis":
            case "Basseterre":
                flagCode = "kn";
                break;
            case "Santa Lucía":
            case "Saint Lucia":
            case "Castries":
                flagCode = "lc";
                break;
            case "San Martín":
            case "Saint Martin":
            case "Marigot":
                flagCode = "mf";
                break;
            case "Saint Pierre and Miquelon":
            case "Saint-Pierre":
                flagCode = "pm";
                break;
            case "San Vicente y Las Granadinas":
            case "Saint Vincent and the Grenadines":
            case "Kingstown":
                flagCode = "vc";
                break;
            case "Samoa":
            case "Apia":
                flagCode = "ws";
                break;
            case "San Marino":
            case "San Marino":
                flagCode = "sm";
                break;
            case "Sao Tome and Principe":
            case "São Tomé":
                flagCode = "st";
                break;
            case "Arabia Saudí":
            case "Arabia Saudita":
            case "Saudi Arabia":
            case "Riyadh":
                flagCode = "sa";
                break;
            case "Senegal":
            case "Dakar":
                flagCode = "sn";
                break;
            case "Serbia":
            case "Belgrade":
                flagCode = "rs";
                break;
            case "Seychelles":
            case "Victoria":
                flagCode = "sc";
                break;
            case "Sierra Leona":
            case "Sierra Leone":
            case "Freetown":
                flagCode = "sl";
                break;
            case "Singapur":
            case "Singapore":
            case "Singapore":
                flagCode = "sg";
                break;
            case "Sint Maarten":
            case "Philipsburg":
                flagCode = "sx";
                break;
            case "Eslovaquia":
            case "Slovakia":
            case "Bratislava":
                flagCode = "sk";
                break;
            case "Eslovenia":
            case "Slovenia":
            case "Ljubljana":
                flagCode = "si";
                break;
            case "Islas Solomon":
            case "Solomon Islands":
            case "Honiara":
                flagCode = "sb";
                break;
            case "Somalia":
            case "Mogadishu":
                flagCode = "so";
                break;
            case "Sudáfrica":
            case "South Africa":
            case "Pretoria":
                flagCode = "za";
                break;
            case "South Georgia and the South Sandwich Islands":
            case "King Edward Point":
                flagCode = "gs";
                break;
            case "Corea del Sur":
            case "South Korea":
            case "Seoul":
                flagCode = "kr";
                break;
            case "Sudán del Sur":
            case "South Sudan":
            case "Juba":
                flagCode = "ss";
                break;
            case "España":
            case "Spain":
            case "Madrid":
                flagCode = "es";
                break;
            case "Sri Lanka":
            case "Sri Jayawardenepura Kotte, Colombo":
                flagCode = "lk";
                break;
            case "Palestina":
            case "Estado de Palestina":
            case "Palestina (Estado de)":
            case "Palestine":
            case "State of Palestine":
            case "Ramallah":
                flagCode = "ps";
                break;
            case "Sudán":
            case "Sudan":
            case "Khartoum":
                flagCode = "sd";
                break;
            case "Surinám":
            case "Suriname":
            case "Paramaribo":
                flagCode = "sr";
                break;
            case "Svalbard and Jan Mayen":
            case "Longyearbyen":
                flagCode = "sj";
                break;
            case "Swaziland":
            case "Lobamba, Mbabane":
                flagCode = "sz";
                break;
            case "Suecia":
            case "Sweden":
            case "Stockholm":
                flagCode = "se";
                break;
            case "Suiza":
            case "Switzerland":
            case "Bern":
                flagCode = "ch";
                break;
            case "Siria":
            case "República Árabe Siria":
            case "Siria (República Árabe)":
            case "Syrian Arab Republic":
            case "Damascus":
                flagCode = "sy";
                break;
            case "Taiwán":
            case "Taiwan":
            case "Taipei":
                flagCode = "tw";
                break;
            case "Tayikistán":
            case "Tajikistan":
            case "Dushanbe":
                flagCode = "tj";
                break;
            case "Tanzania":
            case "Dodoma":
                flagCode = "tz";
                break;
            case "Tailandia":
            case "Thailand":
            case "Bangkok":
                flagCode = "th";
                break;
            case "Timor-Leste":
            case "Dili":
                flagCode = "tl";
                break;
            case "Togo":
            case "Lomé":
                flagCode = "tg";
                break;
            case "Tokelau":
            case "Nukunonu, Atafu,Tokelau":
                flagCode = "tk";
                break;
            case "Tonga":
            case "Nukuʻalofa":
                flagCode = "to";
                break;
            case "Trinidad y Tobago":
            case "Trinidad and Tobago":
            case "Port of Spain":
                flagCode = "tt";
                break;
            case "Tunisia":
            case "Tunis":
                flagCode = "tn";
                break;
            case "Turquía":
            case "Turkey":
            case "Ankara":
                flagCode = "tr";
                break;
            case "Turkmenistán":
            case "Turkmenistan":
            case "Ashgabat":
                flagCode = "tm";
                break;
            case "Turks and Caicos Islands":
            case "Cockburn Town":
                flagCode = "tc";
                break;
            case "Tuvalu":
            case "Funafuti":
                flagCode = "tv";
                break;
            case "Uganda":
            case "Kampala":
                flagCode = "ug";
                break;
            case "Ucrania":
            case "Ukraine":
            case "Kiev":
                flagCode = "ua";
                break;
            case "Emiratos Árabes Unidos":
            case "United Arab Emirates":
            case "Abu Dhabi":
                flagCode = "ae";
                break;
            case "Inglaterra":
            case "Gran Bretaña":
            case "Reino Unido":
            case "United Kingdom":
            case "London":
                flagCode = "gb";
                break;
            case "United States Minor Outlying Islands":
            case "Washington, D.C.":
                flagCode = "um";
                break;
            case "Estados Unidos":
            case "Estados Unidos de América":
            case "United States of America":
            case "Washington, D.C.":
                flagCode = "us";
                break;
            case "Uruguay":
            case "Montevideo":
                flagCode = "uy";
                break;
            case "Uzbekistán":
            case "Uzbekistan":
            case "Tashkent":
                flagCode = "uz";
                break;
            case "Vanuatu":
            case "Port Vila":
                flagCode = "vu";
                break;
            case "Venezuela":
            case "República Bolivariana de Venezuela":
            case "Venezuela (República Bolivariana de)":
            case "Caracas":
                flagCode = "ve";
                break;
            case "Vietnám":
            case "Vietnam":
            case "Hanoi":
                flagCode = "vn";
                break;
            case "Virgin Islands (British)":
            case "Road Town":
                flagCode = "vg";
                break;
            case "Virgin Islands (U.S.)":
            case "Charlotte Amalie":
                flagCode = "vi";
                break;
            case "Wallis and Futuna":
            case "Mata-Utu":
                flagCode = "wf";
                break;
            case "Western Sahara":
            case "Laayoune":
                flagCode = "eh";
                break;
            case "Yemen":
            case "Sana'a":
                flagCode = "ye";
                break;
            case "Zambia":
            case "Lusaka":
                flagCode = "zm";
                break;
            case "Zimbabwe":
            case "Harare":
                flagCode = "zw";
        }
        return flagCode;
    },

    getCountryFlagClass = function(flagCode) {
        var flagClass = constants.STRING_EMPTY;
        
        if (flagCode === undefined || flagCode === null) { 
            return flagClass;
        }
        
        flagClass = "flag-icon-" + flagCode;
        
        return flagClass;
    },
            
    getIconClass = function (category) {
        var iconClass = constants.STRING_EMPTY;
        
        if (category === undefined || category === null) {
            category = constants.STRING_EMPTY;
        }
        
        switch (String(category).toLowerCase()) {
            case "audio":
                iconClass = "icon-audio";
                break;
            case "atom":
                iconClass = "icon-atom";
                break;
            case "calendar":
                iconClass = "icon-calendar";
                break;
            case "clock":
                iconClass = "icon-clock";
                break;
            case "clock24h":
                iconClass = "icon-clock-24h";
                break;
            case "document":
                iconClass = "icon-document";
                break;
            case "economic":
                iconClass = "icon-economic";
                break;
            case "health":
                iconClass = "icon-health";
                break;
            case "history":
                iconClass = "icon-history";
                break;
            case "image":
                iconClass = "icon-graph";
                break;
            case "oicvg":
                iconClass = "icon-oicvg";
                break;
            case "openfolder":
                iconClass = "icon-open-folder";
                break;
            case "video":
                iconClass = "icon-video";
                break;
            default:
                iconClass = "icon-document";
                break;
        }
        
        return iconClass;
    },
            
    removeLoadingIcon = function (elementId) {
        $("#" + elementId).removeClass("loading");
    },
    setLoadingIcon = function (elementId) {
        $("#" + elementId).addClass("loading");
    };

    return {
        getCountryFlagCode: getCountryFlagCode,
        getCountryFlagClass: getCountryFlagClass,
        getIconClass: getIconClass,
        removeLoadingIcon: removeLoadingIcon,
        setLoadingIcon: setLoadingIcon
    };
}();


