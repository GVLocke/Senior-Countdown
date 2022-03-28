(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "05/21/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          if (distance < 0) {
            document.getElementById("headline").innerText = "WE DID IT!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
        }, 0)
    }());

    let semesterStart = 1641306600000
let ms = Number(new Date()) - semesterStart 
let semesterLength = 11854830000

function gPercent() {
    return Math.round(ms/semesterLength * 100)
}

function barPercent() {
    const percent = ms/semesterLength
    return percent * 500
}

anime({
    targets: 'div.progress-value',
    delay: 400,
    width: barPercent(),
    borderRadius: '100px',
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop:false
  });

document.getElementById("gPercent").innerText = gPercent()