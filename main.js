//make category list (the item in the list)
var categoryItem= document.getElementById("list");
var categoryInfo = document.getElementById("category");
var categoryInfo2 = document.getElementById("caregory-info");
var removeBtn = document.getElementById("remove");
categoryItem.addEventListener('click',function(){
    categoryInfo.style.display="block";
    categoryInfo2.style.display="block";
}) 
//th end 
//remove category list (the item in the list)
removeBtn.addEventListener('click',function(){
    categoryInfo.style.display="none";
    categoryInfo2.style.display="none";
}) 





//the end


//make the counter for hours
var show = document.getElementById("hoursShow");
var show1 = document.getElementById("minutesShow");
var show2 = document.getElementById("secondsShow");
var date = new Date();
var x = date.getHours();
var y = date.getMinutes();
var z = date.getSeconds();
show.innerHTML = x ;
show1.innerHTML = y ;
show2.innerHTML = z ;
//make seconds automayically
function count (){
    var zz = show2.innerHTML;
    var yy = show1.innerHTML;
    var xx = show.innerHTML;
    if(zz<60){
        zz++;
        show2.innerHTML= zz;
    }
    if(zz==60){
         zz=0;
         show2.innerHTML = zz;
         yy++;
         show1.innerHTML = yy ;
    }
    if(yy==60){
        yy=0;
        show1.innerHTML = yy;
        xx++;
        show.innerHTML = xx;
    }
    setTimeout("count()",1000);
}
count();

    













//make the slide for every button 
var arr1 = ["cl11 (1).png","cl11 (2).png","cl11 (3).png","cl11 (4).png","cl5.jpg","cl6.jpg","cl7.jpg","cl8.jpg","cl9.jpeg","cl0.jpeg"];
var i =0 ;
var imageSlide = document.getElementById("clotheSlide");
var btn1 = document.getElementById("cloth1");
var btn2 = document.getElementById("cloth2");
imageSlide.src = arr1[i];
btn1.addEventListener('click',function(){
    if(i<arr1.length -1){
        i++;
        imageSlide.src = arr1[i];
    }
    else if (i== arr1.length -1){
        i = 0;
        imageSlide.src = arr1[i];
    }
})

btn2.addEventListener('click',function(){
    if(i<=arr1.length -1 && i !=0){
        i--;
        imageSlide.src = arr1[i];
    }
    else if (i==0){
        i = arr1.length-1;
        imageSlide.src = arr1[i];
    }
})