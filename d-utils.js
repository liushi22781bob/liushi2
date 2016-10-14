//
// Change the website.
//

function get(query){
  return $(query)
};
function move(query, down, right)
{
  query.css('top', '+=' + down + 'px' );
  query.css('left', '+=' + right + 'px' );
};

function goto(query, top, left)
{
  query.css("top", top);
  query.css("left", left);
}

function rotate(query, degrees)
{
  query.css({'transform' : 'rotate('+ degrees +'deg)'});
}

function where(query)
{
  return query.position();
}


//
// Colors!
//
function randomColor()
{
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}