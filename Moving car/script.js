m = 0;
var y;
function start() {
  y = setInterval(run, 50);

  function run() {
   if(m==1280)
   {
    m=0;
    clearInterval(y);
   }
   else{
    m += 5;
    var x = document.getElementById("cr");
    x.style.marginLeft = m + "px";
   }
  }
}

function stop() {
  clearInterval(y);
}
