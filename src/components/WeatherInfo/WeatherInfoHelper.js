//Converts C to F
//Runs in time O(1)
export const convertToF = (temp) => {
    return temp === undefined || temp === null ? "No temp data" : (9 * temp + (32 * 5))/5;
}

//Converts knots to mph
//Runs in time O(1)
export const convertToMph = (knots) => {
    return knots * 1.151;
}

//Converts degree to cardinal direction. From: https://stackoverflow.com/questions/7490660/converting-wind-direction-in-angles-to-text-words
//Runs in time O(1)
export const getCardinalDirection = (num) => {
    const tmp = Math.trunc((num/22.5) + 0.5);
    const arr = ["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
    return arr[(tmp % 16)];
}

//Grabs the greatest cloud coverage listed in the cloudLayers array
//Runs in time O(n) where n = # of elements in clouds/cloudLayers 
export const getGreatestCloudCoverage = (clouds) => {
    if(clouds === undefined || clouds === null || clouds.length === 0) {
        return "No cloud data";
    }
    
    //Assigns values of cloud coverage from least cloudy to most. Source: https://en.wikipedia.org/wiki/METAR
    const coverageValue = {
        "skc": 0,
        "clr": 1,
        "few": 2,
        "sct": 3,
        "bkn": 4,
        "ovc": 5
    };

    let maxCoverage = -1;
    let maxClouds = "";
    
    //Gets the greatest cloud coverage
    clouds.forEach((cloud) => {
        if(cloud.coverage && (coverageValue[cloud.coverage] > maxCoverage)) {
            maxCoverage = coverageValue[cloud.coverage];
            maxClouds = cloud.coverage;
        }
    });

    //Translates the abbreviations to full strings
    switch(maxClouds) {
        case "skc":
            maxClouds = "Sky clear";
            break;
        case "clr":
            maxClouds = "No clouds below 12,000 feet";
            break;
        case "few":
            maxClouds = "Few clouds";
            break;
        case "sct":
            maxClouds = "Scattered clouds";
            break;
        case "bkn":
            maxClouds = "Broken clouds";
            break;
        case "ovc":
            maxClouds = "Overcast";
            break;
        default:
            maxClouds = "Vertical Visibility";
    }

    return maxClouds;
}