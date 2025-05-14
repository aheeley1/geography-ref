// 2024 records
const counties = [
  {
    county: "El Paso County",
    population: 752772,
    county_seat: "Colorado Springs",
  },
  {
    county: "City and County of Denver",
    population: 716577,
    county_seat: "Denver",
  },
  {
    county: "Arapahoe County",
    population: 656061,
    county_seat: "Littleton",
    largest_city: "Aurora",
  },
  {
    county: "Jefferson County",
    population: 576366,
    county_seat: "Golden",
  },
  {
    county: "Adams County",
    population: 533365,
    county_seat: "Brighton",
  },
  {
    county: "Douglas County",
    population: 387847,
    county_seat: "Castle Rock",
  },
  {
    county: "Larimer County",
    population: 367719,
    county_seat: "Fort Collins",
  },
  {
    county: "Weld County",
    population: 351154,
    county_seat: "Greeley",
  },
  {
    county: "Boulder County",
    population: 330758,
    county_seat: "Boulder",
  },
  {
    county: "Pueblo County",
    population: 171306,
    county_seat: "Pueblo",
  },
  {
    county: "Mesa County",
    population: 158980,
    county_seat: "Grand Junction",
  },
  {
    county: "City and County of Broomfield",
    population: 76647,
    county_seat: "Broomfield",
  },
  {
    county: "Garfield County",
    population: 62379,
    county_seat: "Glenwood Springs",
  },
  {
    county: "La Plata County",
    population: 56620,
    county_seat: "Durango",
  },
  {
    county: "Eagle County",
    population: 55831,
    county_seat: "Eagle",
  },
  {
    county: "Fremont County",
    population: 48863,
    county_seat: "Cañon City",
  },
  {
    county: "Montrose County",
    population: 46610,
    county_seat: "Montrose",
  },
  {
    county: "Delta County",
    population: 31964,
    county_seat: "Delta",
  },
  {
    county: "Summit County",
    population: 31299,
    county_seat: "Breckenridge",
  },
  {
    county: "Morgan County",
    population: 29111,
    county_seat: "Fort Morgan",
  },
  {
    county: "Elbert County",
    population: 27699,
    county_seat: "Kiowa",
  },
  {
    county: "Montezuma County",
    population: 26084,
    county_seat: "Cortez",
  },
  {
    county: "Routt County",
    population: 25873,
    county_seat: "Steamboat Springs",
  },
  {
    county: "Teller County",
    population: 25172,
    county_seat: "Cripple Creek",
  },
  {
    county: "Chaffee County",
    population: 20856,
    county_seat: "Salida",
  },
  {
    county: "Logan County",
    population: 20504,
    county_seat: "Sterling",
  },
  {
    county: "Park County",
    population: 18846,
    county_seat: "Fairplay",
  },
  {
    county: "Otero County",
    population: 18094,
    county_seat: "La Junta",
  },
  {
    county: "Gunnison County",
    population: 17462,
    county_seat: "Gunnison",
  },
  {
    county: "Alamosa County",
    population: 16776,
    county_seat: "Alamosa",
  },
  {
    county: "Pitkin County",
    population: 15700,
    county_seat: "Aspen",
  },
  {
    county: "Grand County",
    population: 15434,
    county_seat: "Hot Sulphur Springs",
  },
  {
    county: "Las Animas County",
    population: 13975,
    county_seat: "Trinidad",
  },
  {
    county: "Archuleta County",
    population: 13872,
    county_seat: "Pagosa Springs",
  },
  {
    county: "Moffat County",
    population: 13292,
    county_seat: "Craig",
  },
  {
    county: "Prowers County",
    population: 11662,
    county_seat: "Lamar",
  },
  {
    county: "Rio Grande County",
    population: 11242,
    county_seat: "Del Norte",
  },
  {
    county: "Yuma County",
    population: 10378,
    county_seat: "Wray",
  },
  {
    county: "Clear Creek County",
    population: 9700,
    county_seat: "Georgetown",
  },
  {
    county: "San Miguel County",
    population: 8582,
    county_seat: "Telluride",
  },
  {
    county: "Conejos County",
    population: 8240,
    county_seat: "Conejos",
  },
  {
    county: "Lake County",
    population: 8073,
    county_seat: "Leadville",
  },
  {
    county: "Kit Carson County",
    population: 7483,
    county_seat: "Burlington",
  },
  {
    county: "Huerfano County",
    population: 7432,
    county_seat: "Walsenburg",
  },
  {
    county: "Saguache County",
    population: 6824,
    county_seat: "Saguache",
  },
  {
    county: "Rio Blanco County",
    population: 6668,
    county_seat: "Meeker",
  },
  {
    county: "Gilpin County",
    population: 6125,
    county_seat: "Central City",
  },
  {
    county: "Bent County",
    population: 5987,
    county_seat: "Las Animas",
  },
  {
    county: "Crowley County",
    population: 5898,
    county_seat: "Ordway",
  },
  {
    county: "Lincoln County",
    population: 5741,
    county_seat: "Hugo",
  },
  {
    county: "Custer County",
    population: 5561,
    county_seat: "Westcliffe",
  },
  {
    county: "Ouray County",
    population: 5396,
    county_seat: "Ouray",
  },
  {
    county: "Washington County",
    population: 4864,
    county_seat: "Akron",
  },
  {
    county: "Phillips County",
    population: 4350,
    county_seat: "Holyoke",
  },
  {
    county: "Costilla County",
    population: 3876,
    county_seat: "San Luis",
  },
  {
    county: "Baca County",
    population: 3701,
    county_seat: "Springfield",
  },
  {
    county: "Dolores County",
    population: 2073,
    county_seat: "Dove Creek",
  },
  {
    county: "Sedgwick County",
    population: 1704,
    county_seat: "Julesburg",
  },
  {
    county: "Cheyenne County",
    population: 1606,
    county_seat: "Cheyenne Wells",
  },
  {
    county: "Kiowa County",
    population: 1446,
    county_seat: "Eads",
  },
  {
    county: "Jackson County",
    population: 1391,
    county_seat: "Walden",
  },
  {
    county: "Mineral County",
    population: 865,
    county_seat: "Creede",
  },
  {
    county: "San Juan County",
    population: 793,
    county_seat: "Silverton",
  },
  {
    county: "Hinsdale County",
    population: 747,
    county_seat: "Lake City",
  },
];

const above_half = counties.filter((county) => county.population >= 500000);

console.log("Colorado Counties", counties.length);

console.log("Colorado Counties Greater Than Half-Million", above_half);
