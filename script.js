
var block=document.getElementById("block");
var hole=document.getElementById("hole");
var character=document.getElementById("character");
var jumping=0;
var counter=0;


hole.addEventListener('animationiteration',()=>{
    var random=(Math.random()*3);
    var top=(random*100)+150;
    hole.style.top=-top+"px";
    counter++;

});
setInterval(function(){
    var chartop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (jumping==0){
   character.style.top=(chartop+3)+"px";}
   var blockleft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
   var holetop=parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
   var chartop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
   var ctop=-(500-chartop);
   if (chartop>480||(blockleft<20)&&(blockleft>-50)&&(ctop<holetop||ctop>holetop+130)){
    alert("gameover!! \n Your Score = "+counter);
  
   document.getElementById("instructions").innerHTML=(" Your last Score is "+counter)
    character.style.top=100+'px';
    counter=0;
   }
},10);
function jump(){
     jumping=1;
     let jumpcount =0;
     var jumpingInterval=setInterval(function(){
        var chartop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
       
    

        if (chartop>6&&jumpcount<15){
            character.style.top=(chartop-5)+"px"; 
        }
        if (jumpcount>20){
            clearInterval(jumpingInterval);
            jumping=0;
            jumpcount=0;
        }
      jumpcount++;
     },10);
} 