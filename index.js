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

    //get("div").css('border-color', randomColor());
    logo.css('background-color', randomColor());
    slogan.css('background-color', randomColor());

    move(logo, -1, -1);
    move(phone, 1, 1);



  }, 100);