const buttonInfo = {
    placement: {
        title: "Placement Training",
        content: "Information about Placement Training.",
        image: "assets/images/04.jpg",// Replace with the actual image file name
        buttons: [
            {
                label: "Get a Quote",
                onClick: function () {
                    window.location.href = 'https://devminds.in/contact';
                }
            }
        ]
    },
    internship: {
        title: "Internship Programs",
        content: "Information about Internship Programs.",
        image: "assets/images/04.jpg", // Replace with the actual image file name
        buttons: [

            {
                label: "Register",
                onClick: function () {
                    window.location.href = 'https://devminds.in/internship';
                }
            }
        ]
    },
    Workshops: {
        title: "Workshops",
        content: "Information about Workshops.",
        image: "assets/images/04.jpg", // Replace with the actual image file name
        buttons: [
            {
                label: "Register",
                onClick: function () {
                    window.location.href = 'https://devminds.in/';
                }
            }
        ]
    },
    Miscellaneous: {
        title: "Miscellaneous Courses",
        content: "Information about Miscellaneous Courses.",
        image: "assets/images/04.jpg", // Replace with the actual image file name
        buttons: [
            {
                label: "Contact us",
                onClick: function () {
                    window.location.href = 'https://devminds.in/contact';
                }
            }
        ]
    },
    Events: {
        title: "Events",
        content: "Information about DevMinds Events.",
        image: "assets/images/04.jpg", // Replace with the actual image file name
        buttons: [

            {
                label: "Get a Quote",
                onClick: function () {
                    window.location.href = 'https://devminds.in/contact';
                }
            }
        ]
    },
};

function openOverlay(buttonData) {
    var overlay = document.getElementById("overlay");
    var overlayTitle = document.getElementById("overlay-title");
    var overlayImage = document.getElementById("overlay-image");
    var overlayContent = document.getElementById("overlay-content");
    var overlayButtons = document.getElementById("overlay-buttons");

    overlay.style.display = "block";
    overlayTitle.innerText = buttonInfo[buttonData].title;
    overlayImage.src = buttonInfo[buttonData].image;
    overlayContent.innerText = buttonInfo[buttonData].content;

    // Clear any existing buttons
    overlayButtons.innerHTML = "";

    // Add buttons for this overlay
    buttonInfo[buttonData].buttons.forEach(function (buttonData, index) {
        var button = document.createElement("button");
        button.innerText = buttonData.label;
        button.addEventListener("click", buttonData.onClick);
        overlayButtons.appendChild(button);
    });
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

