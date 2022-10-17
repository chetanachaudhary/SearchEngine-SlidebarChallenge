//Search Engine
const search = () =>{
    const searchEngine=document.getElementById("search-item").value.toUpperCase();
    const storeItems=document.getElementById("food-menu");
    const foodItems=document.querySelectorAll(".foodItems");
    const foodDetails=storeItems.getElementsByTagName('h2');

    for(var i=0; i<foodDetails.length; i++)
    {
        let match=foodItems[i].getElementsByTagName('h2')[0];

        if(match){
          let textvalue= match.textContent || match.innerHtml
          if(textvalue.toUpperCase().indexOf(searchEngine) > -1){
            foodItems[i].style.display="";
          }
          else{
            foodItems[i].style.display="none";
          }
        }
    }
}

//For Image-Slider
// let imageSlider=document.querySelector('.imageSlider');
// let images=['images/food-offer','images/food-offer2.jpg','images/food-offer3.jpg','images/food-offer4.jpg'];
// let loop=0;

// function prev(){
//   if(loop<=0){
//     loop=images.length;
//     loop--;
//     return setImg();
//   }
// }
// function next(){
//   if(loop>=(images.length-1))
//     loop=-1;
//     loop++;
//     return setImg();
    

// }
// function setImg(){
//   return imageSlider.setAttribute('src','images/'+images[loop]);

// }

let loop=0;
let images=[];
let time=1000;

//Image List
images[0]='food-offer.jpg';
images[1]='food-offer2.jpg';
images[2]='food-offer3.jpg';
images[3]='food-offer4.jpg';

//change Image
function changeImg(){
  document.slide.src=images[loop];
  if(loop<images.length-1){
    loop++;

  }
  else{
    loop=0;
  }
  setTimeout("changeImg()",time);
}
window.onload=changeImg;

let typed=new Typed(".auto-type",{
  strings:["Welcome","Our Festive Offer","festive-season"],
  typeSpeed:150,
  backSpeed:150,
  loop:true
})