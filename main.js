(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
        month = day * 30;
        year = day * 365;

        let graduation = new Date('May 6, 2026 14:00:00')

  // From Matt Smith's CodePen: https://codepen.io/AllThingsSmitty/pen/JJavZN
  
  const countDown = new Date(graduation).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("years").innerText = Math.floor(distance / (year)),
          document.getElementById("months").innerText = Math.floor((distance % (year)) / (month)),
          document.getElementById("days").innerText = Math.floor((distance % (month)) / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        if (distance < 0) {
          document.getElementById("headline").innerText = "We did it! Congrats!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
      }, 0)
  }());
    // End

    
    let semesterStart = 1661144400000
let ms = Number(new Date()) - semesterStart 
let semesterLength = 116949600000

function gPercent() {
    return Math.round(ms/semesterLength * 100)
}

function barPercent() {
    let progress = document.querySelector('.progress');
    let width = progress.offsetWidth;
    const percent = ms/semesterLength
    return percent * width
}


document.getElementById("gPercent").innerText = gPercent()


document.addEventListener('DOMContentLoaded', () => {
  let resizer = new ResizeObserver(handleResize);
  resizer.observe(document.querySelector('.progress'));
});

function handleResize(entries) {
  console.log('resize called');
  let div = entries[0].target;
  anime({
    targets: 'div.progress-value',
    width: barPercent(),
    easing: 'easeInOutQuint',
    borderRadius: '100px',
    direction: 'alternate',
    loop:false
  });
 }