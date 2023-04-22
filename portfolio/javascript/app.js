const indicator = document.querySelector(".indicator");
const navbar = document.querySelector(".navbar2");
const sectionBar = document.querySelector(".section-bar");
const indicatorChild = document.querySelector("i");

function iconChange(){
  if(window.innerWidth<=1100){
    const indicatorBar = document.querySelector('.indicator')
    indicator.innerHTML=`<i class="bi bi-list"></i>`
  }
}
iconChange()
const typed = new Typed(document.querySelector(".span"), {
  strings: ["", "Dev front-end", "Web designe", "Develloper web"],
  smartBackspace: true,
  typeSpeed: 100,
  loop:true,
  backDelay: 1000,
  backSpeed: 30,
});
indicatorChild.addEventListener("click", () => {
  indicator.click();
});

indicator.addEventListener("click", (e) => {
  if (indicator.classList.value === "indicator") {
    navbar.classList.add("navbar");
    navbar.classList.remove("navbar2");
    sectionBar.style.flex = "0 0 80%";
    sectionBar.style.marginLeft = "20%";
    indicator.classList.remove("indicator");
    indicator.classList.add("indicator2");
    indicator.innerHTML = `<i class="bi bi-arrow-right"></i>`;
  } else if (indicator.classList.value === "indicator2") {
    navbar.classList.add("navbar2");
    navbar.classList.remove("navbar");
    sectionBar.style.flex = "0 0 100%";
    sectionBar.style.marginLeft = "0";
    indicator.classList.remove("indicator2");
    indicator.classList.add("indicator");
    indicator.innerHTML = `<i class="bi bi-arrow-left"></i>`;
  }
});

let Ratio = 0.1;
let options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  threshold: Ratio,
};

let observer = new IntersectionObserver((items, e) => {
  items.forEach((element) => {
    if (element.intersectionRatio > Ratio) {
      element.target.classList.add("animation-bar-visible");
      element.target.classList.remove("animation-bar");
    } else {
      element.target.classList.add("animation-bar");
      element.target.classList.remove("animation-bar-visible");
    }
  });
}, options);
let target = document.querySelectorAll(".animation-bar")
target.forEach((element) => {
  observer.observe(element);
  
})
let portfolioInfo = document.querySelectorAll('.projet-target').forEach(item=>{
  item.style.transform='scale(0)'
  portfoliAnimation(item)
})
 function portfoliAnimation(e){
  const images = document.querySelectorAll('.img>img')
images.forEach(image=>{
  image.addEventListener('mouseover',()=>{
    image.style.transform='scale(0)'
    e.style.transform='scale(1)'
  })
})
 }