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

//=================================================================


/*I didn't use innerHTML because of security reasons*/


//Demonstartion of appendchild
var parentNav = document.getElementById('tabs');
clean(parentNav); 
console.log(parentNav.lastChild)
document.getElementById('example').appendChild(parentNav.lastChild);

//demonstration of .removeChild
var deleter = document.getElementById('first'); //keeps "Extra" from being shown
deleter.parentNode.removeChild(deleter);

//demonstration of .createTextNode
document.getElementById('example').append(document.createTextNode('Added'));


//Demonstration of .createElement
var newDiv = document.createElement('IMG'); 

newDiv.src = 'https://static.boredpanda.com/blog/wp-content/uploads/2016/05/surprised-cat-hydrocephalus-kevin-theadventuresofkev23.jpg';
document.getElementById('extraButton').appendChild(newDiv); //add the text node to the newly created div. 

