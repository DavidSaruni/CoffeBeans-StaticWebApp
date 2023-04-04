//slide show
let index=0;
function slideShow(){
    let slide= document.getElementsByClassName('slideshow-container');
    for(i=0;i<slide.length;i++)slide[i].style.display='none';
    index++;
    if(index>slide.length)index=1;
    slide[index-1].style.display='block';
    setTimeout(slideShow,5000);
}

slideShow();

const keybtn=document.getElementById('gen-key');
let keydisp=document.getElementById('key-value-box');



keybtn.addEventListener('click',()=>{
    iddate= new Date();
    letter_arr=['aXcv','Aer','/dfb','ggB','gfc','CvCg','89d','Ds','fe','gE','Ftyuf','iFc','g','HiGog','hte','H','ifgda80','I443','j22','J2fy','bcFR','defY','=09','Zz','Qq'];
    keydisp.innerHTML=`<p>${iddate.getFullYear()}${letter_arr[Math.floor(Math.random() * letter_arr.length)]}${iddate.getMonth()+1}${iddate.getDate()}${iddate.getHours()}${iddate.getMinutes()}${iddate.getSeconds()}</p>`
})

//scroll to registration form button
const scrollbtn=document.getElementById('scroll-btn')
scrollbtn.addEventListener('click',()=>{
    let regContainer=document.getElementById('reg-container')
    regContainer.scrollIntoView()//scrolls to the registration form
})

 

