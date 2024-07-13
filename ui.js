var app = new BlueKit_Android_Application;
BlueKit_App_Data = `
<div id="nav"></div>
<div style="margin: 10px">
  <h2>
    About
  </h2>
  <p class="panel">
    BlueJuicyAds is a Creator supporting platform which allows users to download high quality softwares for free but still ensuring the the developer can earn through revenue so BlueJuicyAds shows ads to users before making the download available so that both user and devs can get profit and product.
  </p>
  <div id="products">
    
  </div>
  <br><br>
  <center id="productsc">
  </center>
`;
app.AppStatus = 1;
app.CreateApp(0);

// navigation
var nav = app.Widgets().Button('BlueJuicyAds - The Creator Supporting Platform');
nav.Render('nav');
nav.SetHeight(100);
nav.SetWidth(100,'%');
nav.SetFontSize(20);
document.getElementById(nav.GetRoot()).style.borderRadius='0px';

var panel = app.Widgets().Panel();
panel.Render('products');
panel.AddChildren(`<h2> For Devs </h2>

This service is only available for FOZ DTX CORP and other brands associated with FOZ DTX CORP not any other 3rd party developer can use this service at any cost. This is to ensure that user safety is at the best place.

<br>
<br>
<hr>

<h2> For Users </h2>

This service is for all users , You can claim the foz dtx corp products for free by BlueJuicyAds with ensuring your privacy and safety. BlueJuicyAds doesn't provides harmfull ads like popunder or sound or video ads so that you can ensure that you will click on the right spot.
`);

// var browse = app.Widgets().Button('Browse Products');
// browse.Render('productsc');
// browse.SetWidth(100);
// browse.SetFontSize(12);


var btn = new Flexi_Button('Continue', function() {
  window.open("products.html");
});
btn.render(document.getElementById('productsc'));
btn.setBackgroundColor('dodgerblue');
btn.setTextColor('white')