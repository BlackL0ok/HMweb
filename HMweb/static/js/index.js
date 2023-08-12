window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
  
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollTop > 90) {
      navbar.style.top = '0';
      navbar.classList.add("sticky")
    } 
    else {
      navbar.style.top = '12vh';
    }
  });
  // teste