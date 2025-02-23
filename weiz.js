function displayTabs() {
    var element = document.getElementById("tabs");
    console.log(element);
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  }
 
  function displayTabsByMedia() {
    const tabs = document.getElementById("tabs");
    const isMobile = window.innerWidth <= 1600;
console.log('ismobile:' + isMobile)
    if (isMobile) {
        tabs.classList.add("hidden");
    } else {
        tabs.classList.remove("hidden");
    }
}

// Run on page load
window.addEventListener("DOMContentLoaded", displayTabsByMedia);

// Listen for screen size changes
window.addEventListener("resize", displayTabsByMedia);
