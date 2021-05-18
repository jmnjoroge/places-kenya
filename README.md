# About Places
List the places in kenya from counties to their wards

# Installation
`npm i places-kenya --save`

## Usage

Indexing the places in terms of county,subcounty,ward
```
 import {indexPlaces} from "places";

 const places = indexPlaces();

 // Or if you want to index a specific county (and or with its subcounty)

 //index places in mombasa (county 001);
 const countyPlaces = indexPlaces(1);

 //index places in changamwe constituency in mombasa county
 const subCountyPlaces = indexPlaces(1,1);

 
```
