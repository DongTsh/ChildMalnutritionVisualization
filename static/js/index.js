var myChart = echarts.init(document.getElementById('main'));  

option = {  
    title: {  
        left: 'center',  
        top: 'top'  
    },    
    visualMap: {  
        min: 1,  
        max: 60,  
        inRange: {
            color: [
                '#fcfbfd',
                '#efedf5',
                '#dadaeb',
                '#bcbddc',
                '#9e9ac8',
                '#807dba',
                '#6a51a3',
                '#4a1486'
            ]
          },
          text: ['High', 'Low'],
          calculable: true
    },  
    series: [  
        {  
            name: 'World',  
            type: 'map',  
            mapType: 'world',  
            roam: false,
            select: {
                label: {
                    color: '#000',
                    backgroundColor: '',
                    formatter: '{b}: {c}',
                    fontWeight: 'bold',
                    fontSize: 20
                },
                itemStyle: {
                    areaColor: 'white'
                }
            },
            emphasis: {
                label: {
                    show: true,
                    color: '#000',
                    fontWeight: 'bold',
                    fontSize: 8,
                    formatter: '{b}: {c}'
                },
                itemStyle:{
                    borderWidth: 1,
                    areaColor: '#fff'
                }
                
            },  
            data: [  
                {name: "Afghanistan",value: "54.6"},{name: "Albania",value: "29.7"},{name: "Algeria",value: "22.1"},{name: "Andorra",value: "0.0"},{name: "Angola",value: "47.8"},{name: "Anguilla",value: "0.0"},{name: "Antigua and Barbuda",value: "0.0"},{name: "Argentina",value: "10.5"},{name: "Armenia",value: "17.7"},{name: "Australia",value: "1.3"},{name: "Austria",value: "0.0"},{name: "Azerbaijan",value: "24.3"},{name: "Bahamas",value: "0.0"},{name: "Bahrain",value: "11.0"},{name: "Bangladesh",value: "56.0"},{name: "Barbados",value: "8.3"},{name: "Belarus",value: "4.9"},{name: "Belgium",value: "4.0"},{name: "Belize",value: "25.2"},{name: "Benin",value: "36.8"},{name: "Bhutan",value: "46.5"},{name: "Bolivia (Plurinational State of)",value: "33.4"},{name: "Bosnia and Herzegovina",value: "12.7"},{name: "Botswana",value: "31.5"},{name: "Brazil",value: "9.8"},{name: "British Virgin Islands",value: "0.0"},{name: "Brunei Darussalam",value: "20.9"},{name: "Bulgaria",value: "10.0"},{name: "Burkina Faso",value: "41.5"},{name: "Burundi",value: "62.3"},{name: "Cabo Verde",value: "18.0"},{name: "Cambodia",value: "51.1"},{name: "Cameroon",value: "37.3"},{name: "Canada",value: "0.0"},{name: "Central African Republic",value: "43.4"},{name: "Chad",value: "42.5"},{name: "Chile",value: "2.9"},{name: "China",value: "20.1"},{name: "Colombia",value: "17.5"},{name: "Comoros",value: "42.4"},{name: "Congo",value: "36.4"},{name: "Cook Islands",value: "0.0"},{name: "Costa Rica",value: "7.7"},{name: "Croatia",value: "0.0"},{name: "Cuba",value: "7.2"},{name: "Cyprus",value: "0.0"},{name: "Czechia",value: "2.7"},{name: "Côte d'Ivoire",value: "33.6"},{name: "Democratic People's Republic of Korea",value: "54.4"},{name: "Democratic Republic of the Congo",value: "47.8"},{name: "Denmark",value: "0.0"},{name: "Djibouti",value: "30.0"},{name: "Dominica",value: "0.0"},{name: "Dominican Republic",value: "10.6"},{name: "Ecuador",value: "28.2"},{name: "Egypt",value: "26.9"},{name: "El Salvador",value: "28.8"},{name: "Equatorial Guinea",value: "39.3"},{name: "Eritrea",value: "47.7"},{name: "Estonia",value: "2.1"},{name: "Eswatini",value: "36.8"},{name: "Ethiopia",value: "57.5"},{name: "Fiji",value: "5.9"},{name: "Finland",value: "0.0"},{name: "France",value: "0.0"},{name: "Gabon",value: "25.8"},{name: "Gambia",value: "29.8"},{name: "Georgia",value: "16.2"},{name: "Germany",value: "1.5"},{name: "Ghana",value: "33.3"},{name: "Greece",value: "2.7"},{name: "Grenada",value: "0.0"},{name: "Guatemala",value: "53.8"},{name: "Guinea",value: "34.2"},{name: "Guinea0Bissau",value: "33.9"},{name: "Guyana",value: "15.0"},{name: "Haiti",value: "30.9"},{name: "Holy See",value: "0.0"},{name: "Honduras",value: "37.5"},{name: "Hungary",value: "0.0"},{name: "Iceland",value: "0.0"},{name: "India",value: "49.8"},{name: "Indonesia",value: "41.5"},{name: "Iran (Islamic Republic of)",value: "14.5"},{name: "Iraq",value: "28.4"},{name: "Ireland",value: "0.0"},{name: "Israel",value: "0.0"},{name: "Italy",value: "0.0"},{name: "Jamaica",value: "7.4"},{name: "Japan",value: "8.4"},{name: "Jordan",value: "11.0"},{name: "Kazakhstan",value: "17.7"},{name: "Kenya",value: "38.9"},{name: "Kiribati",value: "20.4"},{name: "Kuwait",value: "4.2"},{name: "Kyrgyzstan",value: "29.9"},{name: "Lao People's Democratic Republic",value: "49.7"},{name: "Latvia",value: "0.0"},{name: "Lebanon",value: "16.0"},{name: "Lesotho",value: "41.0"},{name: "Liberia",value: "45.1"},{name: "Libya",value: "20.5"},{name: "Liechtenstein",value: "0.0"},{name: "Lithuania",value: "0.0"},{name: "Luxembourg",value: "0.0"},{name: "Madagascar",value: "55.2"},{name: "Malawi",value: "55.7"},{name: "Malaysia",value: "20.0"},{name: "Maldives",value: "33.6"},{name: "Mali",value: "40.0"},{name: "Malta",value: "0.0"},{name: "Marshall Islands",value: "38.2"},{name: "Mauritania",value: "40.4"},{name: "Mauritius",value: "12.7"},{name: "Mexico",value: "20.3"},{name: "Micronesia (Federated States of)",value: "0.0"},{name: "Monaco",value: "0.0"},{name: "Mongolia",value: "29.4"},{name: "Montenegro",value: "8.7"},{name: "Montserrat",value: "0.0"},{name: "Morocco",value: "25.2"},{name: "Mozambique",value: "50.5"},{name: "Myanmar",value: "47.0"},{name: "Namibia",value: "30.3"},{name: "Nauru",value: "26.8"},{name: "Nepal",value: "57.9"},{name: "Netherlands",value: "1.3"},{name: "New Zealand",value: "0.0"},{name: "Nicaragua",value: "25.3"},{name: "Niger",value: "52.1"},{name: "Nigeria",value: "42.3"},{name: "Niue",value: "0.0"},{name: "North Macedonia",value: "8.8"},{name: "Norway",value: "0.0"},{name: "Oman",value: "15.1"},{name: "Pakistan",value: "42.1"},{name: "Palau",value: "0.0"},{name: "Panama",value: "18.5"},{name: "Papua New Guinea",value: "41.9"},{name: "Paraguay",value: "18.3"},{name: "Peru",value: "31.7"},{name: "Philippines",value: "35.7"},{name: "Poland",value: "3.3"},{name: "Portugal",value: "4.9"},{name: "Qatar",value: "9.4"},{name: "Republic of Korea",value: "2.9"},{name: "Republic of Moldova",value: "12.3"},{name: "Romania",value: "13.7"},{name: "Russian Federation",value: "0.0"},{name: "Rwanda",value: "49.1"},{name: "Saint Kitts and Nevis",value: "0.0"},{name: "Saint Lucia",value: "3.8"},{name: "Saint Vincent and the Grenadines",value: "0.0"},{name: "Samoa",value: "6.1"},{name: "San Marino",value: "0.0"},{name: "Sao Tome and Principe",value: "31.1"},{name: "Saudi Arabia",value: "13.3"},{name: "Senegal",value: "25.4"},{name: "Serbia",value: "9.7"},{name: "Seychelles",value: "10.9"},{name: "Sierra Leone",value: "38.7"},{name: "Singapore",value: "4.4"},{name: "Slovakia",value: "0.0"},{name: "Slovenia",value: "0.0"},{name: "Solomon Islands",value: "34.0"},{name: "Somalia",value: "31.9"},{name: "South Africa",value: "28.1"},{name: "South Sudan",value: "38.9"},{name: "Spain",value: "0.0"},{name: "Sri Lanka",value: "20.6"},{name: "State of Palestine",value: "9.9"},{name: "Sudan",value: "40.8"},{name: "Suriname",value: "13.9"},{name: "Sweden",value: "0.0"},{name: "Switzerland",value: "0.0"},{name: "Syrian Arab Republic",value: "28.1"},{name: "Tajikistan",value: "41.6"},{name: "Thailand",value: "16.9"},{name: "Timor0Leste",value: "54.8"},{name: "Togo",value: "35.2"},{name: "Tokelau",value: "0.0"},{name: "Tonga",value: "12.9"},{name: "Trinidad and Tobago",value: "5.9"},{name: "Tunisia",value: "12.9"},{name: "Turkey",value: "0.0"},{name: "Turkmenistan",value: "27.4"},{name: "Turks and Caicos Islands",value: "0.0"},{name: "Tuvalu",value: "12.1"},{name: "Uganda",value: "44.0"},{name: "Ukraine",value: "22.4"},{name: "United Arab Emirates",value: "0.0"},{name: "United Kingdom",value: "0.0"},{name: "United Republic of Tanzania",value: "47.7"},{name: "United States",value: "3.1"},{name: "Uruguay",value: "14.6"},{name: "Uzbekistan",value: "29.5"},{name: "Vanuatu",value: "25.1"},{name: "Venezuela (Bolivarian Republic of)",value: "17.8"},{name: "Viet Nam",value: "41.8"},{name: "Yemen",value: "55.2"},{name: "Zambia",value: "54.0"},{name: "Zimbabwe",value: "32.4"}
            ] 
        },  
    ]  
};  
myChart.setOption(option); 