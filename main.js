let carouselEl = document.getElementById('carousel')

let img = 0
console.log(img);

function next(){
    console.log("NEXT", img);
    
    if(img === 0){
        carouselEl.src = "images/image2.jpg"  
        img =1  
    }
    else if(img === 1){
        carouselEl.src = "images/image3.jpg"
        img = 2 
    }
    else if(img === 2){
        carouselEl.src = "images/image1.jpg"
        img = 0   
    }
}
function prev(){
    console.log('PREV' , img);
    if(img === 0){
        carouselEl.src = "images/image3.jpg"
        img = 2   
    }
    else if(img === 1){
        carouselEl.src = "images/image1.jpg"
        img = 0   
    }
    else if(img === 2){
        carouselEl.src = "images/image2.jpg"
        img = 1  
    }
}