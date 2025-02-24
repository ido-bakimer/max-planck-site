// When i first wrote this, it was just a single function to toggle the display of tabs, using the tabs-toggle-button.
// but i ran into an edge case where, if ive hidden the tab section, and then i resize the screen over 1200px,
//  the tabs-toggle-button would be hidden, locking the user from opening the tabs.

// so my solution was to add a second function to toggle the display of the tabs based on the screen size.

function displayTabs() {
    var element = document.getElementById("tabs");
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  }
 
  function displayTabsByMedia() {
    const tabs = document.getElementById("tabs");
    const isMobile = window.innerWidth <= 1600;
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
