// Define an object to store information for each button
const buttonInfo = {
    placement: {
        title: "Placement Training",
        content: "Information about Placement Tdfdfdraining."
    },
    internship: {
        title: "Internship Programs",
        content: "Information about Internship Programs."
    },
    workshop: {
        title: "Workshops",
        content: "Information about Workshops."
    },
    Miscellaneous: {
        title: "Miscellaneous Courses",
        content: "Information about DevMinds Courses."
    },
    Events: {
        title: "Events",
        content: "Information about DevMinds Events."
    }
};

function openOverlay(buttonData) {
    var overlay = document.getElementById("overlay");
    var overlayTitle = document.getElementById("overlay-title");
    var overlayContent = document.getElementById("overlay-content");

    overlay.style.display = "block";
    overlayTitle.innerText = buttonInfo[buttonData].title;
    overlayContent.innerText = buttonInfo[buttonData].content;
}

function closeOverlay() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}

// Add click event listeners to the buttons
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener("click", function () {
        openOverlay(this.getAttribute("data-info"));
    });
});

