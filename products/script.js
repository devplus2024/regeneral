const show_web = setTimeout(show_content_web, 1000);

var loading_bt = document.getElementById("loading_bt");
var content_web = document.getElementById("content_web");
var animation_text = document.getElementById("animation_text");
function show_content_web() {
  loading_bt.classList.remove("flex");
  loading_bt.classList.add("hidden");
  content_web.classList.remove("content_hidden");
  content_web.classList.add("content_show");
}

function change_text_anm_lg() {
  setTimeout(change_text_4, 90);
  function change_text_4() {
    document.getElementById("login_anm").innerHTML = "DVz(E";
  }
  setTimeout(change_text_0, 110);
  function change_text_0() {
    document.getElementById("login_anm").innerHTML = "il/kE";
  }
  setTimeout(change_text_1, 140);
  function change_text_1() {
    document.getElementById("login_anm").innerHTML = "a/poW";
  }
  setTimeout(change_text_2, 170);
  function change_text_2() {
    document.getElementById("login_anm").innerHTML = "Gace/";
  }
  setTimeout(change_text_3, 200);
  function change_text_3() {
    document.getElementById("login_anm").innerHTML = "LOGIN";
  }
}

function isChildOutOfViewHeight(parent, child) {
  const parentRect = parent.getBoundingClientRect();
  const childRect = child.getBoundingClientRect();

  return childRect.top < parentRect.top || childRect.bottom > parentRect.bottom;
}

const nav_gj_gsl_nve_rt = document.getElementById("nav_gj_gsl_nve_rt");
const parents = document.querySelectorAll(".parent");

function checkAndUpdateBorder() {
  let anyChildOutOfView = false;

  parents.forEach((parent) => {
    const child = parent.querySelector(".child");
    if (isChildOutOfViewHeight(parent, child)) {
      anyChildOutOfView = true;
    }
  });

  if (anyChildOutOfView) {
    nav_gj_gsl_nve_rt.classList.remove("header_main_up_nv_r_four");
    nav_gj_gsl_nve_rt.classList.add("header_show_boder_b");
  } else {
    nav_gj_gsl_nve_rt.classList.remove("header_show_boder_b");
    nav_gj_gsl_nve_rt.classList.add("header_main_up_nv_r_four");
  }
}

// Kiểm tra ngay lập tức
checkAndUpdateBorder();

// Kiểm tra khi có sự kiện cuộn
parents.forEach((parent) => {
  parent.addEventListener("scroll", checkAndUpdateBorder);
});

function player_video() {
  const parentDiv = document.getElementById("parentDiv");
  const thumbnail_video_versel_ship = document.getElementById(
    "thumbnail_video_vercel_ship"
  );
  const childDiv = document.createElement("div");
  const video_thumbnail_frame_player_button_id = document.getElementById(
    "video_thumbnail_frame_player_button_id"
  );
  thumbnail_video_versel_ship.classList.add("hidden");
  // Tạo một element div mới làm div con
  const iframe = document.createElement("iframe");
  iframe.id = "video_vercel_content";
  iframe.classList.add("block");
  iframe.classList.add("w-full");
  iframe.classList.add("h-full");
  iframe.classList.add("absolute");
  iframe.src =
    "https://www.youtube.com/embed/CHP3aDTP5Qo?autoplay=1&modestbranding=1&rel=0&hl=en&showinfo=0&color=white";
  iframe.title = "Vercel Ship 2024 Keynote";
  iframe.frameBorder = "0";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  iframe.allowFullscreen = true;

  // Thêm iframe vào div con
  childDiv.appendChild(iframe);

  // Thêm div con vào div cha
  parentDiv.appendChild(childDiv);
  video_thumbnail_frame_player_button_id.classList.remove("flex");
  video_thumbnail_frame_player_button_id.classList.add("hidden");
}

const gettingStartedElement = document.getElementById("gettingStarted");
const originalText = gettingStartedElement.innerText;
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ/]sw|<?2@#%";
let intervalId;

gettingStartedElement.addEventListener("mouseover", () => {
  let iteration = 0;
  intervalId = setInterval(() => {
    if (iteration >= 10) {
      clearInterval(intervalId);
      gettingStartedElement.innerText = originalText;
    } else {
      let newText = originalText.split("");
      for (let i = 0; i < newText.length; i++) {
        if (Math.random() > 0.5 && newText[i] !== " ") {
          const randomChar =
            alphabet[Math.floor(Math.random() * alphabet.length)];
          newText[i] = randomChar;
        }
      }
      gettingStartedElement.innerText = newText.join("");
    }
    iteration++;
  }, 30);
});

gettingStartedElement.addEventListener("mouseout", () => {
  clearInterval(intervalId);
  gettingStartedElement.innerText = originalText;
});

const show_anmt_text = setTimeout(show_animation_text, 6000);
function show_animation_text() {
  animation_text.classList.remove("hidden");
  animation_text.classList.add("cssanimation");
}
function login() {
  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((data) => {
      var user = data.find(
        (u) =>
          u.email === email &&
          u.username === username &&
          u.password === password
      );
      if (user) {
        document.getElementById("message").innerHTML = "Login successful!";
        window.location.href = "/Admin/index.html";
      } else if (password == "" && email == "" && username == "") {
        document.getElementById("message").innerHTML =
          "Please enter your infomation";
      } else if (email == "") {
        document.getElementById("message").innerHTML =
          "Please enter your email";
      } else if (username == "") {
        document.getElementById("message").innerHTML =
          "Please enter your username";
      } else if (password == "") {
        document.getElementById("message").innerHTML =
          "Please enter your password";
      } else {
        document.getElementById("message").innerHTML =
          "Invalid username or password.";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("message").innerHTML =
        "Error occurred. Please try again.";
    });
}

function signup() {
  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Tạo dữ liệu mới để thêm vào JSON Server
  var newUser = {
    email: email,
    username: username,
    password: password,
  };

  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("message").innerHTML = "Sign up successful!";
      // Redirect or do something after successful sign up
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("message").innerHTML =
        "Error occurred. Please try again.";
    });
}

fetch("/DataBase/database.json") // Đọc file JSON
  .then((response) => response.json())
  .then((data) => {
    // Chuyển đối tượng JSON thành chuỗi có định dạng để hiển thị
    const jsonContent = JSON.stringify(data, null, 2);

    // Hiển thị nội dung JSON trong phần tử <pre>
    document.getElementById("json-content").textContent = jsonContent;
  })
  .catch((error) => {
    console.error("Lỗi khi đọc file JSON:", error);
  });

document.addEventListener("DOMContentLoaded", function () {
  var scrollBtn = document.getElementById("scrollBtn");
  var targetDiv = document.getElementById("targetDiv");

  scrollBtn.addEventListener("click", function () {
    // Tính toán vị trí y của targetDiv
    var targetY = targetDiv.getBoundingClientRect().top + window.pageYOffset;

    // Tính toán khoảng cách để căn giữa theo trục y
    var offsetY =
      targetY - (window.innerHeight - targetDiv.offsetHeight) / 2 - 28;

    // Cuộn đến vị trí của targetDiv với căn giữa theo trục y
    window.scrollTo({ top: offsetY, behavior: "smooth" });
  });
});

// const options = document.querySelectorAll('input[type="radio"]');
// const optionContents = document.querySelectorAll(".option-content");

// options.forEach((option, index) => {
//   option.addEventListener("change", () => {
//     optionContents.forEach((content) => {
//       content.classList.remove("show");
//     });
//     optionContents[index].classList.add("show");
//   });
// });

// console.log(options);

// var currentPartIndex = 1;
// var contentParts = document.querySelectorAll(".content-part");
// var showMoreButton = document.getElementById("show-more-button");

// showMoreButton.addEventListener("click", function () {
//   if (currentPartIndex < contentParts.length) {
//     contentParts[currentPartIndex].style.display = "block";

//     // Lấy tất cả các hình ảnh trong phần nội dung mới
//     var imagesInNewContent =
//       contentParts[currentPartIndex].querySelectorAll(".lazy-img");

//     // Thêm lớp 'active' cho mỗi hình ảnh sau 1 giây
//     setTimeout(function () {
//       imagesInNewContent.forEach(function (image) {
//         image.classList.add("active");
//       });
//     }, 100); // 1 giây (1000ms) delay

//     currentPartIndex++;

//     if (currentPartIndex === contentParts.length) {
//       showMoreButton.textContent = "No more content";
//     }
//   } else {
//     alert("No more content available.");
//   }
// });

function showbutton() {
  var hiddenContent = document.getElementById("hiddenContent");
  var product_active = document.getElementById("showButton");
  if (product_active.classList.contains("a__hover")) {
    product_active.classList.remove("a__hover");
    product_active.classList.add("p_active_vip");
    hiddenContent.classList.remove("product_hidden_1");
    hiddenContent.classList.add("product_block_1");
  } else if (product_active.classList.contains("p_active_vip")) {
    product_active.classList.remove("p_active_vip");
    product_active.classList.add("a__hover");
    hiddenContent.classList.remove("product_block_1");
    hiddenContent.classList.add("product_hidden_1");
  }
}

function show_profile() {
  var show_menu_languages_ft = document.getElementById("languages_show");
  var show_menu_profiles = document.getElementById("profile_menu");
  if (show_menu_profiles.classList.contains("hidden_1")) {
    show_menu_profiles.classList.remove("hidden_1");
    show_menu_profiles.classList.add("block_1");
    if (show_menu_languages_ft.classList.contains("block_1")) {
      show_menu_languages_ft.classList.remove("block_1");
      show_menu_languages_ft.classList.add("hidden_1");
    }
  } else if (show_menu_profiles.classList.contains("block_1")) {
    show_menu_profiles.classList.remove("block_1");
    show_menu_profiles.classList.add("hidden_1");
  }
}

function show_menu_languages() {
  var show_menu_languages_ft = document.getElementById("languages_show");
  if (show_menu_languages_ft.classList.contains("hidden_1")) {
    show_menu_languages_ft.classList.remove("hidden_1");
    show_menu_languages_ft.classList.add("block_1");
  } else if (show_menu_languages_ft.classList.contains("block_1")) {
    show_menu_languages_ft.classList.remove("block_1");
    show_menu_languages_ft.classList.add("hidden_1");
  }
}

function show_menu_nav() {
  var menu_nav = document.getElementById("menu_nav");
  if (menu_nav.classList.contains("sm:hidden")) {
    menu_nav.classList.remove("sm:hidden");
    menu_nav.classList.remove("max-[468px]:hidden");
    menu_nav.classList.add("sm:flex-col");
    menu_nav.classList.add("sm:flex");
    menu_nav.classList.add("max-[468px]:flex-col");
    menu_nav.classList.add("max-[468px]:flex");
  } else if (menu_nav.classList.contains("sm:flex-col")) {
    menu_nav.classList.remove("sm:flex-col");
    menu_nav.classList.remove("sm:flex");
    menu_nav.classList.remove("max-[468px]:flex-col");
    menu_nav.classList.remove("max-[468px]:flex");
    menu_nav.classList.add("sm:hidden");
    menu_nav.classList.add("max-[468px]:hidden");
  }
}
function show_image_preview() {
  var show_image_it = document.getElementById("show_image_it");
  if (show_image_it.classList.contains("hidden")) {
    show_image_it.classList.remove("hidden");
    show_image_it.classList.add("block");
  } else if (show_image_it.classList.contains("block")) {
    show_image_it.classList.remove("block");
    show_image_it.classList.add("hidden");
  }
}

function getValue() {
  var inputValue = document.getElementById("input_id").value;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:5000/get_input_value", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("Đã gửi giá trị thành công.");
    }
  };
  xhr.send(JSON.stringify({ input_value: inputValue }));
}

console.log("Server VN");

function getValue() {
  var inputValue = document.getElementById("input_id").value;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/get_input_value", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("Đã gửi giá trị thành công.");
    }
  };
  xhr.send(JSON.stringify({ input_value: inputValue }));
}

// function showContent(id) {
//   var contents = document.querySelectorAll(".content");
//   var fixedDiv = document.getElementById("fixedDiv");
//   contents.forEach((content) => content.classList.remove("active"));

//   var activeContent = document.getElementById(id);
//   activeContent.classList.add("active");
// }

// var activeContent = document.getElementById("blogContent");
// activeContent.classList.add("active");

function show_password() {
  var input_password = document.getElementById("eye_icon");
  var show_password_type = document.getElementById("show_password_type");
  if (input_password.classList.contains("ti-eye-off")) {
    show_password_type.type = "text";
    input_password.classList.remove("ti-eye-off");
    input_password.classList.add("ti-eye");
  } else if (input_password.classList.contains("ti-eye")) {
    show_password_type.type = "password";
    input_password.classList.remove("ti-eye");
    input_password.classList.add("ti-eye-off");
  }
}

function show_Service_menu() {
  var menu_service = document.getElementById("Menu_service");
  var svg_service = document.getElementById("svg_service");
  var span_services = document.getElementById("span_services");
  var stroke_service = document.getElementById("stroke_service");
  if (menu_service.classList.contains("subnav__dropdown_no_active")) {
    menu_service.classList.remove("subnav__dropdown_no_active");
    menu_service.classList.add("subnav__dropdown_active");
    svg_service.classList.add("rotate_180_service");
    stroke_service.setAttribute("stroke", "white");
    svg_service.classList.remove("rotate_0_service");
    span_services.classList.add("dark:text-white");
  } else if (menu_service.classList.contains("subnav__dropdown_active")) {
    menu_service.classList.remove("subnav__dropdown_active");
    menu_service.classList.add("subnav__dropdown_no_active");
    svg_service.classList.remove("rotate_180_service");
    svg_service.classList.add("rotate_0_service");
    span_services.classList.remove("dark:text-white");
    stroke_service.setAttribute("stroke", "rgb(172, 172, 172)");
  }
}

function show_modal() {
  var content_modal = document.getElementById("content_modal");
  var blog_bg = document.getElementById("blog_bg");
  var over_flow_y = document.getElementById("over_flow_y");
  if (content_modal.classList.contains("modal")) {
    content_modal.classList.add("modal_active");
    content_modal.classList.remove("modal");
    blog_bg.classList.remove("opacity-100");
    blog_bg.classList.add("opacity-100");
    blog_bg.classList.add("bg-[#00000099]");
    blog_bg.style.zIndex = "4";
    over_flow_y.style.overflowY = "hidden";
  } else if (content_modal.classList.contains("modal_active")) {
    blog_bg.classList.add("opacity-100");
    blog_bg.classList.remove("opacity-100");
    blog_bg.classList.remove("bg-[#00000099]");
    content_modal.classList.remove("modal_active");
    content_modal.classList.add("modal");
    over_flow_y.style.overflowY = "auto";
    blog_bg.style.zIndex = "-99";
  }
}

function show_menu_blog() {
  var menu_blog = document.getElementById("menu_blog");
  if (menu_blog.classList.contains("w-0")) {
    menu_blog.classList.remove("w-0");
    menu_blog.classList.add("w-[12rem]");
  } else if (menu_blog.classList.contains("w-[12rem]")) {
    menu_blog.classList.remove("w-[12rem]");
    menu_blog.classList.add("w-0");
  }
}
function next_video() {
  var menu_blog = document.getElementById("video_1");
  if (menu_blog.classList.contains("ml-[34rem]")) {
    menu_blog.classList.remove("ml-[34rem]");
    menu_blog.classList.add("-ml-[34rem]");
  } else if (menu_blog.classList.contains("-ml-[34rem]")) {
    menu_blog.classList.remove("-ml-[34rem]");
    menu_blog.classList.add("ml-[34rem]");
  }
}

// script.js
document.addEventListener("DOMContentLoaded", function () {
  const svg = document.getElementById("grid");
  const width = svg.clientWidth;
  const height = svg.clientHeight;
  const gridSize = 20;

  // Create vertical lines
  for (let x = 0; x <= width; x += gridSize) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x);
    line.setAttribute("y1", 0);
    line.setAttribute("x2", x);
    line.setAttribute("y2", height);
    line.setAttribute("stroke", "#ccc");
    line.setAttribute("stroke-width", 1);
    svg.appendChild(line);
  }

  // Create horizontal lines
  for (let y = 0; y <= height; y += gridSize) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", 0);
    line.setAttribute("y1", y);
    line.setAttribute("x2", width);
    line.setAttribute("y2", y);
    line.setAttribute("stroke", "#ccc");
    line.setAttribute("stroke-width", 1);
    svg.appendChild(line);
  }
});

function getRandomPosition(max) {
  return Math.floor(Math.random() * max);
}

function positionBoxes() {
  const container = document.querySelector(".container_vhome");
  const boxes = document.querySelectorAll(".box");
  const containerSize = 624;
  const boxSize = 50;

  boxes.forEach((box) => {
    const x = getRandomPosition(containerSize - boxSize);
    const y = getRandomPosition(containerSize - boxSize);
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
  });
}

positionBoxes();

window.addEventListener("scroll", function () {
  var fixedDiv = document.getElementById("fixedDiv");
  var contentElements = document.getElementsByClassName("content");
  var divHeight = fixedDiv.offsetHeight;
  var isOverlapping = false;

  for (var i = 0; i < contentElements.length; i++) {
    var rect = contentElements[i].getBoundingClientRect();
    if (rect.top < divHeight && rect.bottom > 0) {
      isOverlapping = true;
      break;
    }
  }

  if (isOverlapping) {
    fixedDiv.style.backgroundColor = "yellow";
  } else {
    fixedDiv.style.backgroundColor = "white";
  }
});

function view_video() {
  var view_content = document.getElementById("view_content");
  var value_video = document.getElementById("value_video").value;
  if (value_video === "1") {
    view_content.classList.remove("hidden");
    view_content.classList.add("block");
  } else {
    view_content.classList.remove("hidden");
    view_content.classList.add("block");
  }
}

function show_search() {
  show_search_menu = document.getElementById("search_table");
  if (show_search_menu.classList.contains("hidden")) {
    show_search_menu.classList.remove("hidden");
    show_search_menu.classList.add("block");
  } else if (show_search_menu.classList.contains("block")) {
    show_search_menu.classList.remove("block");
    show_search_menu.classList.add("hidden");
  }
}

function showContent(id) {
  var contents = document.querySelectorAll(".contentsP");
  contents.forEach((content) => content.classList.remove("active"));
  var activeContent = document.getElementById(id);
  activeContent.classList.add("active");
}

function show_sidebar_chatbox() {
  var side_bar = document.getElementById("side_bar");
  if (side_bar.classList.contains("active")) {
    side_bar.classList.remove("active");
  } else {
    side_bar.classList.add("active");
  }
}
