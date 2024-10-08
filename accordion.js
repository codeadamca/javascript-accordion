function accordion_toggle(target) {
  // console.log("open");
  // console.log(target);

  // Create a reference to all sections using
  // a class name.
  var divsToHide = document.getElementsByClassName("accordion-section");
  // Loop throug each section
  for (var i = 0; i < divsToHide.length; i++) {
    // Hide each section
    divsToHide[i].style.display = "none";
  }

  // Create a reference to an element with the
  // same name as the target variable
  var content = document.getElementById(target);

  // console.log(content.style.display);

  // Check if the content is currently displayed
  if (content.style.display === "block") {
    // Hide the content
    content.style.display = "none";
  } else {
    // Display the content
    content.style.display = "block";
  }
}
