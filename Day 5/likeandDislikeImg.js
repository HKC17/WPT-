function changeImage(p1) {
    let imgTag = document.querySelector("#id1");
  
    if (p1 == 1) {
      imgTag.setAttribute("src", "1.webp");
    } else if (p1 == 2) {
      imgTag.setAttribute("src", "2.webp");
    } else if (p1 == 3) {
      imgTag.setAttribute("src", "3.jpg");
    }else if (p1 == 4) {
        imgTag.setAttribute("src", "4.jpg");
      }
  }

    function like() {
        let h1CounterTag = document.querySelector("#like");
        let existingValue = h1CounterTag.innerHTML;
        let newValue = parseInt(existingValue) + 1;
        h1CounterTag.innerHTML = newValue;
      }
      
      function dislike() {
        let h1CounterTag = document.querySelector("#dislike");
        let existingValue = h1CounterTag.innerHTML;
        let newValue = parseInt(existingValue) + 1;
        h1CounterTag.innerHTML = newValue;
      }