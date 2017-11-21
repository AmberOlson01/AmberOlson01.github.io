function clean(node)
{
  for(var n = 0; n < node.childNodes.length; n ++)
  {
    var child = node.childNodes[n];
    if
    (
      child.nodeType === 8 
      || 
      (child.nodeType === 3 && !/\S/.test(child.nodeValue))
    )
    {
      node.removeChild(child);
      n --;
    }
    else if(child.nodeType === 1)
    {
      clean(child);
    }
  }
}


//------------------------------------------------------------------


//Demosntration of Traditional Model
document.getElementById('extraButton').onclick = function() {
  this.style.border= "thick solid #0000FF";
};


//Demonstration of WC3 Event Model
var button = document.getElementById('first');
button.addEventListener('click', function() {this.style.background = '#ff8';}, false);

//Demonstration of removeEventListener
var bolded = document.getElementById('boldedButton');
var clickBold = function() {
  alert('a CAT-HAS-TROPHY!');
  bolded.removeEventListener('mouseover', clickBold, false);
};
bolded.addEventListener('mouseover', clickBold, false);

clean(document.getElementById('navButtons'));

//Demonstration of Event object & "target"
var colors = function(event) {
  if (event.target.style) {
    event.target.style.background = '#ff8';
  }
};
document.getElementById('navButtons').addEventListener('mouseover', colors, false);

//Demonstration of preventDefault
var func = function(event) {
    console.log(event.cancelable);
    event.preventDefault();
    console.log(event);
    alert('Fake button!!!');
};
document.getElementById('fools').addEventListener('click', func, false);
