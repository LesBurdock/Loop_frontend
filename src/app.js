const openCall =()=>{
    let hamburger = document.getElementById("hamburger");
    let nav_items = document.getElementById("nav_items");
    if (nav_items.style.display === "block") {
        nav_items.style.display = "none";
      } else {  
        nav_items.style.display = "block";
      }
}

