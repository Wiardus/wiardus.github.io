gsap.registerPlugin(ScrollTrigger);

function countVisitors () {
    const visitors = document.getElementById('visitors');
    let count = 0 + localStorage.getItem('count');
    count ++;
    localStorage.setItem('count', count)
    visitors.innerHTML += count    
}

let split = new SplitText(".name")

let tl = gsap.timeline({scrollTrigger:{
  trigger:".name",
  start:"top 50%",
  end:"bottom top",
  toggleActions:"restart none none reset"
}})
.from(split.chars, {yPercent:-100,  stagger:0.05, duration:0.3, ease:"back"})
.from(split.chars, {opacity:0, stagger:0.05, duration:0.2}, 0)
.from("button", {y:100, opacity:0, ease:"back", duration:1}, "<1")
