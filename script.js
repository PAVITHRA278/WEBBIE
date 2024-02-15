// Function to handle smooth scrolling when clicking navigation links
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });

        if (sectionId === 'objectives') {
            showBoxes(); // Show boxes if the Objectives section is clicked
        }
    }
}

// Function to show the boxes
function showBoxes() {
    var boxes = document.querySelectorAll('.box');
    boxes.forEach(function(box) {
        box.style.display = 'block';
    });
}

// Function to display the contact boxes horizontally
function displayBoxesHorizontally() {
    var contactBoxContainer = document.querySelector('.contact-box-container');
    if (contactBoxContainer) {
        contactBoxContainer.style.flexDirection = 'row'; // Change flex direction to row
    }
}
