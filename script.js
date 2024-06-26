// const show_web = setTimeout(show_content_web, 500);

// var loading_bt = document.getElementById("loading_bt");
// var content_web = document.getElementById("content_web");
// var animation_text = document.getElementById("animation_text");
// function show_content_web() {
//   loading_bt.classList.remove("flex");
//   loading_bt.classList.add("hidden");
//   content_web.classList.remove("content_hidden");
//   content_web.classList.add("content_show");
// }

document.addEventListener("DOMContentLoaded", function () {
  console.log("Document fully loaded and parsed");
  // Code xử lý khi trang đã tải xong HTML
});

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

// const show_anmt_text = setTimeout(show_animation_text, 6000);
// function show_animation_text() {
//   animation_text.classList.remove("hidden");
//   animation_text.classList.add("cssanimation");
// }

function showContent(id) {
  var contents = document.querySelectorAll(".content");
  var fixedDiv = document.getElementById("fixedDiv");
  contents.forEach((content) => content.classList.remove("active"));

  var activeContent = document.getElementById(id);
  activeContent.classList.add("active");
}

// window.addEventListener("scroll", function () {
//   var fixedDiv = document.getElementById("fixedDiv");
//   var contentElements = document.getElementsByClassName("content");
//   var divHeight = fixedDiv.offsetHeight;
//   var isOverlapping = false;

//   for (var i = 0; i < contentElements.length; i++) {
//     var rect = contentElements[i].getBoundingClientRect();
//     if (rect.top < divHeight && rect.bottom > 0) {
//       isOverlapping = true;
//       break;
//     }
//   }

//   if (isOverlapping) {
//     fixedDiv.style.backgroundColor = "yellow";
//   } else {
//     fixedDiv.style.backgroundColor = "white";
//   }
// });
