import "../../setupTests";
import { convertToF, convertToMph, getCardinalDirection, getGreatestCloudCoverage } from './WeatherInfoHelper';

describe("helper functions work", () => {

    const expected = {
        f: 32,
        mph: 23.02,
        cd: "E",
        cc: "No clouds below 12,000 feet"
    }

    it("convertToF works", () => {
        expect(convertToF(0)).toEqual(expected.f);
    });
    it("covertToMph works", () => {
        expect(convertToMph(20)).toEqual(expected.mph);
    });
    it("getCardinalDirection works", () => {
        expect(getCardinalDirection(100)).toEqual(expected.cd);
    });
    it("getGreatestCloudCoverage works", () => {
        expect(getGreatestCloudCoverage([{
            "coverage": "clr",
            "altitudeFt": 0.0,
            "ceiling": false
        }])).toEqual(expected.cc);
    });
});