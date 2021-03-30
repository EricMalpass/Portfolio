/*
const javaEffectEl = document.querySelector('#javaEffect');


function javaEffect (){
    console.log("hello")
    //const img1 = "file:///C:/Users/ericm/homework2/Portfolio/portfolio/images/travelpicture.jpg";
    const img1 = "./portfolio/images/travelpicture.jpg";

    //javaEffectEl.setAttribute("src", "./portfolio/images/formalpicture.jpg");
    const img2 = "./portfolio/images/formalpicture.jpg";
    //const img2 = "file:///C:/Users/ericm/homework2/Portfolio/portfolio/images/formalpicture.jpg";

    console.log(javaEffectEl.src);
    console.log(img1)
    if (javaEffectEl.src == img1){
        javaEffectEl.src = img2
        console.log("hi");
    }
    else if (javaEffectEl.src == img2){
        console.log("hi");
        javaEffectEl.src = img1
    }
};

javaEffectEl.addEventListener('click', javaEffect);
*/
const javaEffectEl = document.querySelector('#javaEffect');
let current = 1;

function javaEffect() {
  console.log('hello');
  const img1 = './portfolio/images/travelpicture.jpg';
  const img2 = './portfolio/images/formalpicture.jpg';
  if (current === 1) {
    javaEffectEl.src = img2;
    current = 2;
    console.log('hi');
  } else if (current = 2) {
    console.log('hi');
    javaEffectEl.src = img1;
    current = 1;
  }
}

javaEffectEl.addEventListener('mouseover', javaEffect);