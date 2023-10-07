// *********drop down start************//
const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");

// Toggle dropdown function
const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
};

// Toggle dropdown open/close when dropdown button is clicked
dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});

// Close dropdown when dom element is clicked
document.documentElement.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown();
  }
});

// *********drop down end************//

const nowfal = document.getElementById("nowfal");
const chatcontainer = document.querySelector(".chat-container");
const chatdiv = document.createElement("div");
const chatContainer1 = document.querySelector(".chat-container1");
const leo = document.querySelector("leo");

// const chatBox = document.querySelector(".chat-box");

const obj = {
  1111: {
    name: "Nowfal",
    src: "https://lh5.googleusercontent.com/-7ssjf_mDE1Q/AAAAAAAAAAI/AAAAAAAAASo/tioYx2oklWEHoo5nAEyCT-KeLxYqE5PuQCLcDEAE/s100-c-k-no-mo/photo.jpg",
    value: "I'am Nowfal!",
  },
  2345: {
    name: "Rohan",
    src: " https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    value: "I'am Rohan!",
  },
  33434: {
    name: "Zoya",
    src: " https://images.pexels.com/photos/8367221/pexels-photo-8367221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    value: "I'am Zoya!",
  },
  45343: {
    name: "Ava",
    src: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    value: "I'am Ava!",
  },
  534345: {
    name: "Leo",
    src: "https://images.pexels.com/photos/2474307/pexels-photo-2474307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    value: "I'am Leo!",
  },
  6535: {
    name: "Azariah",
    src: "https://images.pexels.com/photos/3564412/pexels-photo-3564412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    value: "I'am Azariah!",
  },
  73454: {
    name: "oliver",
    src: "https://images.pexels.com/photos/2919367/pexels-photo-2919367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    value: "I'am Oliver!",
  },
  8454: {
    name: "Jeslin",
    src: "https://images.pexels.com/photos/14526673/pexels-photo-14526673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    value: "I'am Jeslin!",
  },
};

const chatClick = (userid) => {
  const userNameTag = document.querySelector(".personName");
  const userId = userid;
  const data = obj[userId];
  userNameTag.textContent = data?.name;

  // dp img start
  const dp = document.querySelector(".user-dp");
  const dpdata = obj[userId].src;
  dp.src = dpdata;
  // dp img end

  // chat store start
  const chatStore = document.querySelector(".nowfal-store");
  // console.log(time);
  // const chatStore = document.querySelector(".nowfal-store");

  const storeData = obj[userId];
  chatStore.textContent = storeData?.value;

  // console.log(time.textContent);

  // nowfal store end
};

var btnContainer = document.querySelector(".chat-list");

var btns = btnContainer.querySelectorAll(".chat-box");
// console.log(btns);

btns.forEach((e) => {
  e.addEventListener("click", function () {
    btns.forEach((e) => e.classList.remove("active"));
    this.classList.add("active");
  });
});
