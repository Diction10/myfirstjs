// Modify the inner HTML in the page
document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('button').forEach(function(button) {
        button.onclick = function() {
            document.querySelector('h3').innerHTML = button.dataset.text
        }
    })
});


document.addEventListener('DOMContentLoaded', 
function displayTime() {
    // define the variable for the date and time and function
    const now = new Date();
    const time = showHours(now.getHours()) + addZero(now.getMinutes()) + addZero(now.getSeconds()) + addamPm(now.getHours());
    
    document.querySelector('#time').innerHTML = time;
    // let function run every second
    setInterval(displayTime, 1000);

    // define function for 12 hours
    function showHours (hours) {
        if (hours == 12){
            return 12;
        }
        if (hours < 13) {
            return hours;
        }
    }
    // Add a zero to the single digit
    function addZero(val) {
        if (val > 9) {
            return ':' + val;
        }
        return ':0' + val;
    }

    // Add am or pm
    function addamPm (period) {
        if (period < 12) {
            return ' am';
        }
        return ' pm';
    }
});


document.addEventListener('DOMContentLoaded', function showDate() {
    const now = new Date();
    // Display Date
    const day = now.getDate();
    console.log(day)
    const month = now.getMonth() + 1;
    console.log(month)
    const year = now.getFullYear();
    console.log(year)

    document.querySelector('#date').innerHTML = `Today's date is : ${day} / ${month} / ${year}`

});
