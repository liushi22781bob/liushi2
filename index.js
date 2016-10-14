// @param[string] query
function get(query){return $(query)};

function randomColor()
{
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

setInterval(
  function()
  {
    //
    // Run the same code every two seconds!
    //
    var logo = get("#logo");
    var slogan = get("#slogan");
    var android = get("#android");
    var phone = get("#phone");
    var page_footer = get("#page_footer");

    //get("div").css('border-color', randomColor());
    logo.css('background-color', randomColor());
    slogan.css('background-color', randomColor());

    //move(logo, -1, -1);
    //move(phone, 1, 1);

    //move(slogan, -1, -1);
    //move(android, 1, 1);
    
    move(page_footer, 1, -1)

  }, 100);