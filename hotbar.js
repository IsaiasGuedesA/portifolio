var inco_list = document.getElementById("inco_moblie");
var menu_list = document.getElementById("menu");


inco_list.addEventListener("click", function() {
    if (menu_list.classList.contains("menu_active")) {
        menu_list.classList.remove("menu_active");
    } else {
      menu_list.classList.add("menu_active");
    }
  });

