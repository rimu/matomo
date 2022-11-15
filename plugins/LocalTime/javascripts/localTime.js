//adds numOfSeconds to the date
function addSeconds(numOfSeconds, date = new Date()) {
  date.setSeconds(date.getSeconds() + numOfSeconds);
  return date;
}

//turn a number into a string, padded by len number of zeros (2 digits by default)
Number.prototype.padZero= function(length){
  var string_version_of_number = String(this), c= "0";
  length = length || 2;
  while(string_version_of_number.length < length) {
    string_version_of_number = c + string_version_of_number;
  }
  return string_version_of_number;
};


document.addEventListener("DOMContentLoaded", function(){
  //update the current time once per second
  setInterval(function () {
    var clock = document.getElementById("realTimeClock");
    if(clock !== null) {
      //parse the existing time into a format that JS will handle, e.g. 2022-03-14T09:55:30.820
      var clock_js_format = clock.innerHTML.replace(" ", "T") + ".000";
      var clock_incremented = addSeconds(1, new Date(clock_js_format));

      //write the Date object to the screen in the same format it was originally
      var month = clock_incremented.getMonth() + 1;             //why you do this to me, JS, why?
      clock.innerHTML = clock_incremented.getFullYear() + "-" +
        month.padZero() + "-" +
        clock_incremented.getDate().padZero() + " " +
        clock_incremented.getHours().padZero() + ":" +
        clock_incremented.getMinutes().padZero() + ":" +
        clock_incremented.getSeconds().padZero();
    }
  }, 1000);


}, false);

