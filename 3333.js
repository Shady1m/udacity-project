// Wait for the DOM to load before running the script
document.addEventListener('DOMContentLoaded', function () {

    // Get the navbar list and all section elements
    const navbarList = document.querySelector('#navbar__list');
    const sections = document.querySelectorAll('section');
  
    // Build the navigation menu
    function buildNav() {
      let navHTML = '';
      sections.forEach((section) => {
        const sectionID = section.id;
        const sectionName = section.dataset.nav;
        navHTML += `<li><a class="menu__link" href="#${sectionID}">${sectionName}</a></li>`;
      });
      navbarList.innerHTML = navHTML;
    }
  
    // Add a click event listener to each menu item
    function addClickListeners() {
      const menuItems = document.querySelectorAll('.menu__link');
      menuItems.forEach((menu) => {
        menu.addEventListener('click', function (event) {
          event.preventDefault();
          const sectionID = this.getAttribute('href');
          const targetSection = document.querySelector(sectionID);
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        });
      });
    }
  ////////////////////////////////////////////////////////////////





  ///////////////////////////////////////////////////////////////////
    // Set the active class to the section in view
    function setActiveSection() {
      const currentScroll = window.pageYOffset;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        const sectionBottom = section.offsetHeight + sectionTop;
        if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
          section.classList.add('your-active-class');
        } else {
          section.classList.remove('your-active-class');
        }
      });
    }
  
    // Build the navigation menu on page load
    buildNav();
  
    // Add click listeners to menu items
    addClickListeners();
  
    // Set the active section on scroll
    window.addEventListener('scroll', setActiveSection);
  });
  // Create a button element
const button = document.createElement("button");
button.textContent = "UP TO START";
button.classList.add("back-to-top");

// Add click event listener to scroll to the top of the page
button.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Add the button to the page
document.body.appendChild(button);




  


  /////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////

