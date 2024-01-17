const inco_list = document.getElementById("inco_moblie");
const menu_list = document.getElementById("nave");


inco_list.addEventListener("click", function() {
    if (menu_list.classList.contains("menu_active")) {
        menu_list.classList.remove("menu_active");
    } else {
      menu_list.classList.add("menu_active");
    }
  });

