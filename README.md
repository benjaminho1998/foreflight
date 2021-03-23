# ForeFlight Interview
Hi! This is my submission for the Foreflight take-home exercise.

## How to run locally
1. Please download/clone this repo
2. Install dependencies with `npm install`
3. Run `npm start`
4. Navigate to http://localhost:3000/

## How to run tests
1. In project folder, run `npm test`

## Technologies
- React.js
- Sass
- Axios
- Redux
- Redux Thunk
- Jest
- Enzyme
- React Router
- React Icons
- React Router Tabs
- React Bootstrap

## Requirements

> Take in one or more airport identifiers and display airport and weather information.

I created this web app that allows you to switch between the four different airports/tabs. In each of the bodies, the requested airport and weather information is displayed. Additionally, I added in a little extra relevant content mainly for styling/UI purposes.

## Additional Notes
- The app is mobile-friendly
- The weather data for Lockhart doesn't include a current conditions property. As a result, I used the first conditions object from its forecast array
- The weather data for Heathrow and Lockhart do not have temperature values. I instead return "No temp data" for their pages


---


# ForeFlight Interview
The ForeFlight development team would like to get a better picture of your coding and problem solving skills. Please build a program that implements the specification below. Some guidelines to keep in mind:
 
* You may use any open source / public libraries that you like.
* Your future peers will be reviewing your submission so write it appropriately.
 
## Specification
### Input:
  - One or more airport identifiers: `kaus`, `50r`, `egll`, `khou` . 
 
### Output:
 
 A web page with the following:
 - The airport identifier (icao)
 - The airport name
 - The available runways
 - The lat/long of the airport
 - A current weather report that contains the following
    - Temp (F)
    - Relative humidity (%)
    - Summary of cloud coverage (text string)
        - This is the greatest amount of coverage listed if any
    - Visibility (Statute Miles)
    - Wind Speed (MPH)
    - Wind Direction (cardinal directions to secondary-intercardinal precision)
 
#### Data Sources
The data sources for this exercise can be accessed while the development server is running. 
- `Airport` data can be obtained at: http://localhost:3000/airports/<airport_identifier>.json . 
    - Ex. http://localhost:3000/airports/kaus.json
- `Weather Conditions` can be obtained at:  http://localhost:3000/weather/<airport_identifier>.json
    - Ex. http://localhost:3000/weather/kaus.json