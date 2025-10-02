setInterval(() => {
    const t = document.getElementById("time");
    const today = new Date();
    
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    
    t.textContent = `${hour<10?"0"+hour:hour}:${min<10?"0"+min:min}:${sec<10?"0"+sec:sec}`
    
}, 100);