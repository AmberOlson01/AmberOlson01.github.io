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

//==============================================================================


//demonstration of getElementbyId
  var nav = document.getElementById('tabs'); 
  clean(nav);

//demonstration of .childNodes
  var navChildren = nav.childNodes;

//demonstration of .firstChild
  var firstChild = nav.firstChild;
  console.log(firstChild);
  firstChild.style.fontSize = "50px"; 
  console.log(firstChild);
        
  document.getElementById('header').style.fontFamily = "Georgia, Impact, sans-serif";

//demonstration of .nextSibling
  function cantRead() {
    var menuItem = document.getElementById('first');
    console.log(menuItem);
    while (menuItem != document.getElementById('first').parentNode.lastChild){
      menuItem.style.fontSize = "x-large";
      menuItem = menuItem.nextSibling;
      console.log(menuItem);
    }
    menuItem.style.fontSize = "x-large";
  }

//demonstration of parent Node        
  var pictures = document.getElementById('bigEyes').parentNode;
  clean(pictures);
  console.log(pictures);
  var picturesChild = pictures.firstChild;
  picturesChild.style.borderStyle = "solid";
  pictures.firstChild.style.borderWidth = "thick";
  pictures.firstChild.style.borderColor= "black";
  pictures.lastChild.style.borderStyle="solid"; //note need border style
  pictures.lastChild.style.borderWidth = "thick";
  pictures.lastChild.style.borderColor= "black";
    
    
  var picturesRowTwo = pictures.nextSibling;
  console.log(picturesRowTwo);