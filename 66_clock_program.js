
const label = document.getElementById("label");

update();
setInterval(update, 1000);

function update(){

    let date = new Date();
    label.innerHTML = formatTime(date);

    function formatTime(){
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        let ampm = hour >= 12 ? "pm" : "am";
    
        hour = (hour % 12) || 12;

        hour = formatZeroes(hour);
        minute = formatZeroes(minute);
        second = formatZeroes(second);

        return `${hour}:${minute}:${second} ${ampm}`;
    }
    function formatZeroes(time){
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }

}