// import packages
const fs = require("fs");
const turf = require("@turf/turf");
const chalk = require("chalk");

// shortcuts to in and out files, change these accordingly
inFirstFile = __dirname + "/../data/superfund-sites.geojson"
inSecondFile = __dirname + "/../data/TRI-facilities.geojson"
outFilePath = __dirname + "/../data/hexgrid.json"

// first read in first features
fs.readFile(inFirstFile, "utf8", (err, firstData) => {
    if (err) throw err;

    // define variable for first dataset
    const firstFeatures = JSON.parse(firstData);

    // then read in second features
    fs.readFile(inSecondFile, "utf8", (err, secondData) => {
        if (err) throw err;

        // define variable for second dataset
        const secondFeatures = JSON.parse(secondData)

        // then call function to create hex grid, passing both datasets
        createHexGrid(firstFeatures, secondFeatures)
    })

})

const createHexGrid = (firstFeatures, secondFeatures) => {
    
    // establish a bounding box
    // [ minX, minY, maxX, maxY ]
    const bbox = [-125, 23, -65, 50];

    // define our cell Diameter
    const cellSide = .25;

    // define units for Turf
    const options = {
        units: "degrees"
    };

    // create the hex polygons
    let hexgrid = turf.hexGrid(bbox, cellSide, options);

    // call function to sum all points within each hexagon
    sumPoints(firstFeatures, secondFeatures, hexgrid);
}

const sumPoints = (firstFeatures, secondFeatures, hexgrid) => {
    const options = {
        ignoreBoundary: true
      };

    // set a counter variable
    let firstCount;
    let secondCount;
    let rseiScore;
    let cancerScore;
    let nonCancerScore;
    
    // loop through each hex in hexgrid
    turf.featureEach(hexgrid, (hex, i) => {
        // reset counter to zero for each hex
        firstCount = 0
        secondCount = 0

        // reset RSEI total score to 0 for each hex
        rseiScore = 0
        cancerScore = 0
        nonCancerScore = 0

        // loop through each first feature
        turf.featureEach(firstFeatures, point => {
            // if the firstFeature is inside the hex
            if (turf.booleanPointInPolygon(point, hex, options)) {
                firstCount++ // increase first count by 1
            }
        });

        // loop through each secondFeature
        turf.featureEach(secondFeatures, point => {
            // if the secondFeature is inside hex
            if (turf.booleanPointInPolygon(point, hex, options)) {
                secondCount++ // increase second count by 1
                rseiScore = rseiScore + point.properties.RSEI_Score
                cancerScore = cancerScore + point.properties.RSEI_Score_Cancer
                nonCancerScore = nonCancerScore + point.properties.RSEI_Score_Noncancer
            }
        })

        // output progress
        if (firstCount > 0) {
            console.log(chalk.green("adding " + firstCount +  " firstFeatures to hex #: " + i));
        }

        if (secondCount > 0) {
            console.log(chalk.blue("adding " + secondCount + " secondFeatures to hex #: " + i))
        }



        // update hex properties with both dataset counts
        hex.properties = Object.assign({}, hex.properties, {
            superfundCount: firstCount,
            triCount: secondCount,
            rseiScore: rseiScore,
            cancerScore: cancerScore,
            nonCancerScore: nonCancerScore
        });

        // define both counts as integers
        let firstNum = parseInt(hex.properties.superfundCount)
        let secondNum = parseInt(hex.properties.triCount)

        // create sum field of counts of both datasets
        sum = firstNum + secondNum

        // see progress
        console.log(chalk.magenta(sum));


        // update hex properties with the sum of both datasets
        hex.properties = Object.assign({}, hex.properties, {
            sum: sum,
        });

    });

    console.log(chalk.blue("ready to write the hexgrid to file"));
    
    // truncate the coordinate precision to reduce file size
    hexgrid = turf.truncate(hexgrid, {
        precision: 5
    });

    // call function write the hexgrid to file
    writeHexGrid(hexgrid)
}

const writeHexGrid = (hexgrid) => {
    // stringify the hexgrid and write to file
    fs.writeFile(
        outFilePath,
        JSON.stringify(hexgrid),
        "utf-8",
        err => {
            if (err) throw err;
            console.log(chalk.green("Done writing file!"))
        }
    );
}