const btn = document.getElementById('buttons');

function showTime() {
    const currentTime = new Date();
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    document.getElementById("time").innerText = time;
}

let n = (prompt("Enter n")); 
 let count = 0;
btn.addEventListener("click", () => {
    let interval = setInterval(() => {
        showTime();
        count++;
        if (count >= n) {
            clearInterval(interval);
        }
    }, 1000);
});
