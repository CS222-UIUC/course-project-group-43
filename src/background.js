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
},1000);//loop every second !




function toDoList() {
  var addItems = document.querySelector('.add-items');
  //todolist
  var itemsList = document.querySelector('.plates'); 
  var buttons = document.querySelector('.buttons');
  var items = JSON.parse(localStorage.getItem('items')) || []; //get item on stack，convert items as objects

  //add item
  function handleSubmit(e) {
    e.preventDefault(); //prevent refresh after add item
    var name = this.querySelector('[name=item]').value; //get the item in the bar

    var item = {
      name: name,
      done: false, 
    };
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items)); //convert back to string
    updateList(items, itemsList); //update list
    this.reset();
  }

  function updateList(plates = [], plateList) {
    plateList.innerHTML = plates
      .map(function (plate, i) {
        return (
          '<li><input type="checkbox" data-index="' +
          i +
          '" id="plate' +
          i +
          '" ' +
          (plate.done ? 'checked' : '') +
          ' /><label for="plate' +
          i +
          '">' +
          plate.name +
          '</label></li>'
        );
      })
      .join('');
  }

  function doButtonPress(e) {
    var action = e.target.dataset.action;
    switch (action) {
      case 'clear':
        items = [];
        break;
      case 'check':
        items.map(function (item) {
          return (item.done = true);
        });
        break;
      case 'uncheck':
        items.map(function (item) {
          return (item.done = false);
        });
        break;
      default:
        return;
    }
    localStorage.setItem('items', JSON.stringify(items));
    updateList(items, itemsList);
  }

  addItems.addEventListener('submit', handleSubmit);
  buttons.addEventListener('click', doButtonPress);

  updateList(items, itemsList);
}

document.addEventListener('DOMContentLoaded', toDoList);
