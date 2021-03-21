export const convertToF = (temp) => {
    return !temp ? "No temp data" : (9 * temp + (32 * 5))/5;
}

export const convertToMph = (knots) => {
    return knots * 1.151;
}

export const getCardinalDirection = (num) => {
    const tmp = Math.trunc((num/22.5) + 0.5);
    const arr = ["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
    return arr[(tmp % 16)];
}

export const getGreatestCloudCoverage = (clouds) => {
    const coverageValue = {
        "skc": 0,
        "clr": 1,
        "few": 2,
        "sct": 3,
        "bkn": 4,
        "ovc": 5
    };

    if(!clouds) {
        return "No cloud data";
    }

    let maxCoverage = -1;
    let maxClouds = "";
    
    clouds.forEach((cloud) => {
        if(cloud.coverage && (coverageValue[cloud.coverage] > maxCoverage)) {
            maxCoverage = coverageValue[cloud.coverage];
            maxClouds = cloud.coverage;
        }
    });

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