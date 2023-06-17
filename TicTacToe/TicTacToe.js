var click_count=0;

var boxes = document.querySelectorAll(".Box");

boxes.forEach(function(Box) {
  Box.addEventListener("click", function() {
    click_count++;
    if(click_count%2!=0)
    {
        Box.style.backgroundColor = "white";
    }
    else
    {
        Box.style.backgroundColor = "Black";
    }
  });
});
