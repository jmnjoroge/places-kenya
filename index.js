const places = require("./Resources/places");

const listCounties = () => {
  return Object.keys(places);
};

const listSubCounties = (county, showWards = false) => {
  return showWards ? places[county] : Object.keys(places[county]);
};

const listWards = (county, subcounty) => {
  return places[county][subcounty];
};

const findPlace = (county, subcounty = -1, ward = -1) => {
  if (county <= 0 || county > 47) return "Unknown location given!";

  //county name
  const c = listCounties()[county - 1];
  const subcounties = listSubCounties(c);

  //check if the subcounty index is valid else just return the county
  if (subcounty <= 0 || subcounty > subcounties.length) return c;

  //subcounty name
  const s = subcounties[subcounty - 1];
  const wards = listWards(c, s);
  if (ward <= 0 || ward > wards.length) return `${s},${c}`;

  const w = wards[ward - 1];
  return `${w}, ${s}, ${c}`;
};

const findStrPlace = placeStr => {
  let location = ["2"];
  switch (typeof placeStr) {
    case "string":
      if (placeStr.includes(",")) {
        location = placeStr.split(",");
      } else if (placeStr.includes("/")) {
        location = placeStr.split("/");
      } else if (placeStr.includes(":")) {
        location = placeStr.split(":");
      }
      break;
    case "object":
      const values = Object.values(placeStr);
      location = values.length > 0 ? values : [-1];
      break;
    default:
      location = [-1];
      break;
  }

  return findPlace(...location);
};

const checkIsALocation = locationStr => {};

/**Index the places as key value pair of the ward,subcounty,county indexes */
const indexPlaces = (countyIndex, subcountyIndex) => {
  let places = [];

  const allCounties = listCounties();
  //check if they want to index a specific county
  const indexInCounty = countyIndex && countyIndex < allCounties.length && countyIndex > 0;

  //list of counties to index
  const counties = indexInCounty ? [allCounties[countyIndex - 1]] : allCounties;

  counties.forEach((county, c) => {
    const allSubcounties = listSubCounties(county);

    //check if they want to index a specific subcounty
    const indexInSubcounty = subcountyIndex && subcountyIndex < allSubcounties.length && subcountyIndex > 0;

    //list of subcounties to index
    const subcounties = indexInSubcounty ? [allSubcounties[subcountyIndex - 1]] : allSubcounties;

    /**update the county index
     * (add one since index starts from zero and county numbers start from one,
     * or add the index of the county being indexed)
     * */
    c = c + indexInCounty ? countyIndex : 1;

    if (subcounties.length <= 0) {
      places[c] = county;
    } else {
      subcounties.forEach((subcounty, s) => {
        s = s + subcountyIndex ? subcountyIndex : 1;

        const wards = listWards(county, subcounty);

        if (wards.length <= 0) {
          places[`${c},${s}`] = `${subcounty},${county}`;
        } else {
          listWards(county, subcounty).forEach((ward, w) => {
            w = w + 1;
            places[`${c},${s},${w}`] = `${ward},${subcounty},${county}`;
          });
        }
      });
    }
  });

  return places;
};

module.exports = { listCounties, listSubCounties, listWards, findPlace, findStrPlace, indexPlaces, checkIsALocation };
