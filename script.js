function lukadetail() {
    window.location.href = "luka5detail.html";
}



// luka5detail,html image change function
var Mainimg=document.getElementById("Mainimg");
var smallimg=document.getElementsByClassName("smallimg");
for(let i=0; i<smallimg.length; i++){
    smallimg[i].onclick=function(){
        Mainimg.src=smallimg[i].src;
    }
}
console.log(smallimg);