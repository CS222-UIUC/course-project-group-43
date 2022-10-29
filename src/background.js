var btnStart=document.getElementById("btnStart");
var btnPause=document.getElementById("btnPause");
var btnBreak=document.getElementById("btnBreak");
var btnCancel=document.getElementById("btnCancel");

 var min=document.querySelectorAll("input")[0];
 var is_cal=false;
 // console.log(min);
 var sec=document.querySelectorAll("input")[1];
 var timer;
 btnStart.onclick=Count;
 btnPause.onclick=Pause;
 btnCancel.onclick=Cancel;
 btnBreak.onclick = Break;

 var audio= new Audio("https://wvw.mixloaded.com/wp-content/uploads/2022/09/Rosa_Walton_ft_Hallie_Coggins_-_I_Really_Want_to_Stay_at_Your_House_MixLoaded.Com.mp3");
 function Count(){
  is_cal=true;
 }
 function Pause(){
  is_cal=false;
 }
 function Break(){
  is_cal=false;
  min.value=10;
  sec.value=0;
  audio.pause();
 }
  function Cancel(){
  is_cal=false;
  min.value=25;
  sec.value=0;
  audio.pause();
 }
 timer=setInterval(function(){

 if(is_cal){
  if(sec.value>=1 && min.value>=0){
    sec.value--
  }else if(min.value>0){
    sec.value=59;
    min.value--
  }else{
    is_cal=false;
    sec.value=min.value=0;
    audio.play();
    alert("Time out");
  }
 }else{
 min.value=min.value;
 }
 },1000);
