const buttonInfo = {
    placement: {
        title: "Placement Training",
        content: "Branches covered: CSE ISE AI/ML EC EEE MECH & CIVIL" +
            "\nGet a quote by contacting us with your requirement, our team will get in touch with you",
        image: "assets/images/placement.jpg",// Replace with the actual image file name
        buttons: [
            {
                id: "overlaybtns",
                label: "Get a Quote",
                onClick: function () {
                    window.location.href = 'https://devminds.in/contact';
                }
            }
        ]
    },
    internship: {
        title: "Internship Programs",
        content: "We provide the best in class internship programs.\n Domains include: \nWeb Development, AI/ML - Data Science, Embedded Systems  and IOT,  DevOps etc",
        image: "assets/images/misc.jpg", // Replace with the actual image file name
        buttons: [

            {
                id: "overlaybtns",
                label: "Register",
                onClick: function () {
                    window.location.href = 'https://devminds.in/internship';
                }
            }
        ]
    },
    Workshops: {
        title: "Workshops",
        content: "From 1-day workshops to 2 months bootcamps, we have it lined up for you in various domains",
        image: "assets/images/webdev.jpg", // Replace with the actual image file name
        buttons: [
            {
                id: "overlaybtns",
                label: "Register",
                onClick: function () {
                    window.location.href = 'https://devminds.in/';
                }
            }
        ]
    },
    Miscellaneous: {
        title: "Miscellaneous Courses",
        content: "At DevMinds, we have many miscellaneous courses like Leadership Skills, Public Speaking Clubs, Financial Discipline Masterclass etc",
        image: "assets/images/softskills.jpg", // Replace with the actual image file name
        buttons: [
            {
                id: "overlaybtns",
                label: "Contact us",
                onClick: function () {
                    window.location.href = 'https://devminds.in/contact';
                }
            }
        ]
    },
    Events: {
        title: "Events",
        content: "We host and organise various scholastic, tech, and fun events like Hackathons, Carnivals, ",
        image: "assets/images/gallery1.jpg", // Replace with the actual image file name
        buttons: [

            {
                id: "overlaybtns",
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
        button.id = buttonData.id;
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

