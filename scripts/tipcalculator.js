

// calculate tip function
function calculateTip() {

      //Store the data of inputs
      var billAmount = document.getElementById("billAmount").value;
      var serviceQuality = document.getElementById("serviceQuality").value;
      var numPeople = document.getElementById("totalPeople").value;

      // quick validation of input
      if(billAmount === "" || serviceQuality === 0) {
        window.alert("Please enter all values");
        return; //this will prevent the function from continuing
      }

      //Check the amount of people
      if(numPeople === "" || numPeople <= 1) {
        numPeople = 1;
        document.getElementById('each').style.display = "none";
      } else {
        document.getElementById('each').style.display = "block";
      }

      //Math
      var total = (billAmount * serviceQuality) / numPeople;
      total = Math.round(total * 100) / 100;
      total = total.toFixed(2);


      //Display the tip
      document.getElementById("total_tip").style.display = "block";
      document.getElementById('tip').innerHTML = total;

}


//Hide the tip amount on load
document.getElementById("total_tip").style.display = "none";
document.getElementById("each").style.display = "none";

//Clicking the button calls our custom function
document.getElementById("calculate_button").onclick = function() { calculateTip(); };
