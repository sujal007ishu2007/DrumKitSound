//for click on screen
for(var i = 0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     var button = this.innerHTML;
     sound(button);
    animation(button);
     
     }) }
 //for click on keyboard    
 document.addEventListener("keypress",function(event){
        sound(event.key);
        animation(event.key);
 })
 // for selecting particular key
 function sound(key){
    switch(key){
        case "w":
            var audi = new Audio("sounds/crash.mp3");
            audi.play();
            break;
        case "a":
            var audi2 = new Audio("sounds/kick-bass.mp3");
            audi2.play();
            break;
        case "s":
            var audi3 = new Audio("sounds/snare.mp3");
            audi3.play();
            break;
        case "d":
            var audi4 = new Audio("sounds/tom-1.mp3");
            audi4.play();
            break;
        case "j":
            var audi5 = new Audio("sounds/tom-2.mp3");
            audi5.play();
            break;
        case "k":
            var audi6 = new Audio("sounds/tom-3.mp3");
            audi6.play();
            break;
        case "l":
            var audi7 = new Audio("sounds/tom-4.mp3");
            audi7.play();
            break;
             
        
        default:
            console.log("refresh it")}
      }  
//for amimation adding and removing
function animation(keys){
    var abcd = document.querySelector("."+keys);
    abcd.classList.add("abc");
    setTimeout(function(){
        abcd.classList.remove("abc")},100);
}