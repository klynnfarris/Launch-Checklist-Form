
//fetcha data to display
window.addEventListener("load", function(){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
   console.log(response);
   response.json().then(function(json) {
      const fetchedData =document.getElementById("missionTarget");
      fetchedData.innerHTML =`
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[0].name}</li>
   <li>Diameter: ${json[0].diameter}</li>
   <li>Star: ${json[0].star}</li>
   <li>Distance from Earth: ${json[0].distance}</li>
   <li>Number of Moons: ${json[0].moons}</li>
</ol>
<img src="${json[0].image}">
`;
});
});
});


function init () {
//initialize button variable and assign it to html element
let submitFormButton = document.getElementById("formSubmit");
submitFormButton.addEventListener("click", preventDefault);

//validation function to perform if button is clicked
function preventDefault(){
   //let pilotNameInput = document.querySelector("input[name=pilotName]");
   //can also retreive them this way 

   let pilotNameInput = document.getElementById("pilotName");
   let copilotNameInput = document.getElementById("copilotName");
   let fuelLevelInput = document.getElementById("fuelLevel");
   let cargoMassInput = document.getElementById("cargoMass");

   //checks to make sure user has entered values for every field 
   if (pilotNameInput.value == "" || copilotNameInput.value == ""
      || fuelLevelInput.value == "" || cargoMassInput.value == ""){
      alert("All fields are required!");
   }

   //checks to make sure user input is correct type 
   if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)
      || !isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value)){
      alert("Make sure to enter valid information for each field!");
   }

   //update list elements with new values
   document.getElementById("pilotStatus").innerHTML = `${pilotNameInput.value} is ready for launch`;
   document.getElementById("copilotStatus").innerHTML = `${copilotNameInput.value} is ready for launch`;
   

   //check if fuel and cargo mass display faulty items or ready for launch

   if ((fuelLevelInput.value < 10000) && (cargoMassInput.value > 10000)){
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch.`;
      document.getElementById("cargoStatus").innerHTML = `Cargo mass too high for launch.`;
      document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
      document.getElementById("launchStatus").style.color = "red";
   } else if(fuelLevelInput.value < 10000){
       document.getElementById("faultyItems").style.visibility = "visible";
       document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`;
       document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
       document.getElementById("launchStatus").style.color = "red";
   } else if (cargoMassInput.value > 10000){
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("cargoStatus").innerHTML = `Cargo mass too high for launch`;
      document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
      document.getElementById("launchStatus").style.color = "red";
  } else {
   document.getElementById("launchStatus").innerHTML = "Shuttle ready for launch!";
   document.getElementById("launchStatus").style.color = "green";
}


  }

}


window.onload = init;