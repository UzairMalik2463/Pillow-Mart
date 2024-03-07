const navbar = document.getElementById('navbar');
  
    
    window.onscroll = function () {
     
      const scrollPosition = window.scrollY;
  
      
      if (scrollPosition > 100) {
        
        navbar.style.backgroundColor = 'white';
        navbar.style.transition = 'background-color 0.5s ease';
        navbar.style.paddingTop = '2px';
      } else {
        
        navbar.style.backgroundColor = 'transparent';
        navbar.style.transition = 'background-color 0.5s ease';
        navbar.style.paddingTop = '6px';
      }
    };
    
    function searchslider() {
      let searchContainer = document.getElementById("searchContainer");
      let searchInput = document.getElementById("searchInput");
      
      searchContainer.style.opacity = '0'; 
      searchContainer.style.display = "block";
      
     
      let opacity = 0;
      let fadeInInterval = setInterval(function() {
        opacity += 0.1;
        searchContainer.style.opacity = opacity;
        if (opacity >= 1) {
          clearInterval(fadeInInterval); 
        }
      }, 50); 
    
      searchInput.style.display = "block";
      searchInput.style.border = "none";
    
      searchInput.addEventListener("focus", function() {
        this.style.outline = "none";
        this.style.border = "none";
      });
    }
    
    document.getElementById("closeButton").addEventListener("click", function() {
      let searchContainer = document.querySelector(".search-slider");
      searchContainer.style.display = "none";
    });
    

  
function handleSearchSlider() {
  const searchContainer = document.getElementById("searchContainer");
  const scrollPosition = window.scrollY;
  
  if (scrollPosition > 10) {
    
    searchContainer.style.display = "none";
  } 
}


window.addEventListener("scroll", handleSearchSlider);




    
    
    