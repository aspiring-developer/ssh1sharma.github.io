// displayUiOne(),  displayUiTwo(), displayUiThree() targeting onclick event to display external UI html pages 
    function displayUiOne() {
      $("#projectUiDisplay").html("<object data='web-projects/weather-dashboard/index.html'/>");
         }
    function displayUiTwo() {
      $("#projectUiDisplay").html("<object data='web-projects/work-day-planner/index.html'/>");
    }
    function displayUiThree() {
      $("#projectUiDisplay").html("<object data='web-projects/password-generator/index.html'/>");
    };

// displayGreeting() targeting user input value on index.html
function displayGreeting() {
frontInputEl = document.getElementById("frontInput");
let userName = frontInputEl.value;
      $("#greetingTexts").html("Hi " + userName + ", " + "<br>" + "Thank you for visiting our website! Please visit portfolio and about pages." );
}

// These functions below target Websites, Print Designs, Digital Drawings thumbs and display fields 
function sushiImageDisplay() {
  $("#webPagesDisplayBox").html("<img src='custom-assets/images/sushi-website-screenshot-294x196.jpg'/>");
}
function ncncImageDisplay() {
  $("#webPagesDisplayBox").html("<img src='custom-assets/images/ncnc-website-screenshot-294x196.jpg'/>");
}
function audiologyImageDisplay() {
  $("#webPagesDisplayBox").html("<img src='custom-assets/images/audiology-website-screenshot-294x196.jpg'/>");
}
function magazineImageDisplay() {
  $("#printPagesDisplayBox").html("<img src='custom-assets/images/magazine-cover-design-294x196.jpg'/>");
}
function brochureImageDisplay() {
  $("#printPagesDisplayBox").html("<img src='custom-assets/images/brochure-design-294x196.jpg'/>");
}
function collateralImageDisplay() {
  $("#printPagesDisplayBox").html("<img src='custom-assets/images/collateral-design-294x196.jpg'/>");
}
function digitalCarImageDisplay() {
  $("#digitalPagesDisplayBox").html("<img src='custom-assets/images/house-digital-art-car-layers-294x196.jpg'/>");
}
function digitalHouseImageDisplay() {
  $("#digitalPagesDisplayBox").html("<img src='custom-assets/images/house-digital-art-composite-294x196.jpg'/>");
}
function digitalLayersImageDisplay() {
  $("#digitalPagesDisplayBox").html("<img src='custom-assets/images/house-digital-art-car-layers-panel-294x196.jpg'/>");
}

