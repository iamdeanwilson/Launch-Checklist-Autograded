// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `<h2>MissionDestination</h2><ol><li>Name: ${name}</li><li>Diameter: ${diameter}</li><li>Star: ${star}</li><li>Distance from Earth: ${distance}</li><li>Number of Moons: ${moons}</li></ol><img src=${imageUrl}>`

    // let missionTargetH2 = document.createElement("h2");
    // missionTargetH2.innerHTML = "Mission Destination";
    // document.getElementById("missionTarget").appendChild(missionTargetH2);

    // let missionTargetList = document.createElement("ol");
    // missionTargetList.setAttribute("id", "missionTargetList");
    // document.getElementById("missionTarget").appendChild(missionTargetList);

    // let missionTargetName = document.createElement("li");
    // missionTargetName.setAttribute("id", "missionTargetName");
    // missionTargetName.innerHTML = `Name: ${name}`;
    // document.getElementById("missionTargetList").appendChild(missionTargetName);

    // let missionTargetDiameter = document.createElement("li");
    // missionTargetDiameter.setAttribute("id", "missionTargetdiameter");
    // missionTargetDiameter.innerHTML = `Diameter: ${diameter}`;
    // document.getElementById("missionTargetList").appendChild(missionTargetDiameter);

    // let missionTargetStar = document.createElement("li");
    // missionTargetStar.setAttribute("id", "missionTargetdiameter");
    // missionTargetStar.innerHTML = `Star: ${star}`;
    // document.getElementById("missionTargetList").appendChild(missionTargetStar);

    // let missionTargetDistance = document.createElement("li");
    // missionTargetDistance.setAttribute("id", "missionTargetdiameter");
    // missionTargetDistance.innerHTML = `Distance from Earth: ${distance}`;
    // document.getElementById("missionTargetList").appendChild(missionTargetDistance);

    // let missionTargetMoons = document.createElement("li");
    // missionTargetMoons.setAttribute("id", "missionTargetdiameter");
    // missionTargetMoons.innerHTML = `Number of Moons: ${moons}`;
    // document.getElementById("missionTargetList").appendChild(missionTargetMoons);

    // let missionTargetImage = document.createElement("img");
    // missionTargetImage.setAttribute("id", "missionTargetImage");
    // document.getElementById("missionTarget").appendChild(missionTargetImage);
    // missionTargetImage.setAttribute("src", imageUrl)

 }


 function validateInput(testInput) {
    let inputType
    if((testInput) === ''){
      inputType = 'Empty';
    } else if (isNaN(testInput) === true){
      inputType = 'Not a Number'
    } else if (isNaN(testInput) === false){
      inputType = 'Is a Number'
    }
    return inputType
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    list.style.visibility = 'visible';
    document.querySelector("li[id=pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
    document.querySelector("li[id=copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
    if(Number(fuelLevel) < 10000){
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = "red";
        document.querySelector("li[id=fuelStatus").style.color = "red";
        document.querySelector("li[id=fuelStatus").innerHTML = "Fuel level too low for launch";
    }    
    if(Number(cargoLevel) > 10000){
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = "red";
        document.querySelector("li[id=cargoStatus").style.color = "red";
        document.querySelector("li[id=cargoStatus").innerHTML = "Cargo mass too heavy for launch";
    }
    if(Number(fuelLevel) >= 10000){
        document.querySelector("li[id=fuelStatus").style.color = '';
        document.querySelector("li[id=fuelStatus").innerHTML = 'Fuel level high enough for launch';
    }    
    if(Number(cargoLevel) <= 10000){
        document.querySelector("li[id=cargoStatus").style.color = '';
        document.querySelector("li[id=cargoStatus").innerHTML = 'Cargo mass low enough for launch';
    }
    if (Number(cargoLevel) <= 10000 && Number(fuelLevel) >= 10000){
        document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
        document.getElementById("launchStatus").style.color = "green";
    }
}
 
async function myFetch() {
    const response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    const json = await response.json();
    return json;
    };



// async function myFetch() {
//     let listedPlanets;
//     fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
//            response.json().then( function(result) {
//                listedPlanets = result;
//                console.log(listedPlanets);
//                return listedPlanets;
//            });
//         });
// }

 function pickPlanet(planets) {
    //https://handlers.education.launchcode.org/static/planets.json, 6 planets total
    let pickedPlanet = planets[Math.floor(Math.random()*6)]
    return pickedPlanet
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;