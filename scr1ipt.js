alert("Welcome to HackInsight-Code");

var result = window.confirm("This Chatbot is an automated system and may not always provide accurate information. Are you sure you want to proceed?");

if (result) {
    console.log("User clicked OK");
} else {
    console.log("User clicked Cancel");
}

function openTab(tabName) {
    var i, tabContent;

    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    document.getElementById(tabName).style.display = "block";
}

function openNestedTab(nestedTabName) {
    var i, nestedTabContent;

    nestedTabContent = document.getElementsByClassName("nested-tab-content");
    for (i = 0; i < nestedTabContent.length; i++) {
        nestedTabContent[i].style.display = "none";
    }

    document.getElementById(nestedTabName).style.display = "block";
}

function scrollToTop() {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }