
window.onscroll = function() {
    console.log("Vertical: " + window.scrollY);
    console.log("Horizontal: " + window.scrollX);
  
    if  (window.scrollY>200)
     {
        const element =  document.querySelector('.section2')
          element.classList.add('animated', 'slideInRight')

     }

     if  (window.scrollY>400)
     {
        const element =  document.querySelector('.section3')
          element.classList.add('animated', 'zoomIn')

     }

     if  (window.scrollY>1000)
     {
        const element =  document.querySelector('.section4')
          element.classList.add('animated', 'bounce')

     }
  };