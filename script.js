// Write your JavaScript code here!

//const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoLevel = document.querySelector("input[name=cargoMass]");  
    let list = document.getElementById("faultyItems")
    let listedPlanets;
    let listedPlanetsResponse;

    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
        listedPlanetsResponse = myFetch(); 
        console.log(`listedPlanetsResponse = ${listedPlanetsResponse}`);
        listedPlanetsResponse.then( function(result) {
            listedPlanets = result;
            //console.log(`listedPlanets = ${listedPlanets}`);
        let pickedPlanet = pickPlanet(listedPlanets);
        console.log(pickedPlanet);
        addDestinationInfo(document, pickedPlanet["name"], pickedPlanet["diameter"], pickedPlanet["star"], pickedPlanet["distance"], pickedPlanet["moons"], pickedPlanet["image"]);

        }).then(function () {
            //console.log(`listedPlanets = ${listedPlanets}`);
            // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
            form.addEventListener("submit", function(event) {

            if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoLevel.value === "") {
                alert("All fields are required!");
                event.preventDefault();
            }
            if (validateInput(pilot.value) === 'Is a Number'){
                alert("Invalid Entry for Pilot Name!");
                event.preventDefault();
            }
            if (validateInput(copilot.value) === 'Is a Number'){
                alert("Invalid Entry for Co-pilot Name!");
                event.preventDefault();
            }    
            if (validateInput(fuelLevel.value) === 'Not a Number'){
                alert("Invalid Entry for Fuel Level!");
                event.preventDefault();
            }        
            if (validateInput(cargoLevel.value) === 'Not a Number'){
                alert("Invalid Entry for Cargo Mass!");
                event.preventDefault();
            }
            formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
            event.preventDefault();
        })
    });
});