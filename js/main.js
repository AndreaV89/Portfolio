// Array of projects

const projectsArray = [
    {
        name: "Employee Directory",
        src: "images/employee_directory.png",
        siteURL: "https://andreav89.github.io/Project-8/",
        codeURL: "https://github.com/AndreaV89/Project-8",
        skills: "#AJAX, #Javascript, #JQuery, #API, #CSS",
        description: "Startup Employee Directory. In this project I used Random User Generator API to grab information for 12 random employees, and used fetch and parse to listing the employees in a grid with their image, full name and location. Clicking the employee's image will open a modal window with more detailed information."
    },
    {
        name: "WebApp Dashboard",
        src: "images/dashboard.png",
        siteURL: "https://andreav89.github.io/Project-7/",
        codeURL: "https://github.com/AndreaV89/Project-7",
        skills: "#HTML, #CSS, #GridLayout, #SVG, #JQuery",
        description: "Interactive dashboard for a web application. HTML and CSS was created from scratch looking a mockup. This project is full of awesome features like notifications panel, autocomplete searching of users, implementation of chart plugin, and Local Storage for saving settings."
    },
    {
        name: "Wheel of Success",
        src: "images/wheel_of_success.png",
        siteURL: "https://andreav89.github.io/Project-6/",
        codeURL: "https://github.com/AndreaV89/Project-6",
        skills: "#Javascript, #JQuery",
        description: "Browser version of a word guessing game. Using Javascript i've created an array of casual phrases. With a function the program will choose a phrase from that array, split the phrase into letters, and put those letters onto the game board."
    },
    {
        name: "Interactive Photo Gallery",
        src: "images/image_gallery.png",
        siteURL: "https://andreav89.github.io/Project-5/",
        codeURL: "https://github.com/AndreaV89/Project-5",
        skills: "#Javascript, #JQuery, #CSS, #HTML",
        description: "This is a simple image gallery. Clicking on images will open a lightbox with larger image and caption. The user can search for an image using the search box, that filter the images in real time."
    },
    {
        name: "Online Registration Form",
        src: "images/code_review.png",
        siteURL: "https://andreav89.github.io/Project-3",
        codeURL: "https://github.com/AndreaV89/Project-3",
        skills: "#HTML, #CSS",
        description: "Really simple online registration form example. Is fully responsive and mobile-friendly. Here is a wide variety of HTML form input types, like text input, checkboxes, radio buttons, select menu and so on."
    }
];

const projectImg = $('.projects-container img');
const modalContainer = document.getElementById('modal');

// Projects Modal

let modalHTML = "";
function createModal(index) {
    modalHTML += '<div id="img-container">';
    modalHTML += `<img class="modal-project-img" src="${projectsArray[index].src}" alt="Project Image">`;
    modalHTML += '</div>';
    modalHTML += '<div id="description-container">';
    modalHTML += '<button id="exit-modal">&larr;<span id="tooltip">Back home</span></button>';
    modalHTML += `<h2 class="project-name">${projectsArray[index].name}</h2>`;
    modalHTML += `<h3 class="skills">${projectsArray[index].skills}</h3>`;
    modalHTML += `<p class="description">${projectsArray[index].description}</p>`;
    modalHTML += '<div id="btn-container">';
    modalHTML += `<a id="code-link" href="${projectsArray[index].codeURL}" target="_blank">Code</a>`;
    modalHTML += `<a id="site-link" href="${projectsArray[index].siteURL}" target="_blank">Demo</a>`;
    modalHTML += '</div>';
    modalHTML += '</div>';
    modalContainer.innerHTML = modalHTML;
}

let index;
$(document).ready(function() {
    projectImg.click(function() {
        index = $(this).index("img");
        createModal(index);
        $('#modal').animate({
            right: '0'
        }, 500);
    });
});

$('#modal').on('click', '#exit-modal', function() {
    modalHTML = "";
    $('#modal').animate({
        right: '-100vw'
    }, 500);
});

// Slide Menu

$(document).ready(function(){
    $('#menu-btn').click(function(){
        $('#menu').slideToggle(200);
        $('#menu').css('display' , 'flex');
    });
});







    