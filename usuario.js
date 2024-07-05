//Grab the components we need
const profiles = document.getElementsByClassName("profile");
const pinScreen = document.getElementById("profile-lock-container");
const profileScreen = document.getElementById("container");
const body = document.body;
const pinExitButton = document.getElementById("exit-lock-btn");

//Upon loading the pen, initialize the screen to be the profile select screen
body.onload = function () {
  profileScreen.style.display = "flex";
  pinScreen.style.display = "none";
};

//If we click on one of the profiles, take us to the profile lock screen
for (let i = 0; i < profiles.length; i++) {
  profiles[i].onclick = function () {
    pinScreen.style.display = "flex";
    container.style.display = "none";
  };
}

//If we click on the X inside of the profile lock screen, take us back to the profile select screen
pinExitButton.onclick = function () {
  pinScreen.style.display = "none";
  profileScreen.style.display = "flex";
};

//Manage Profile
const manageButton = document.getElementById("manage-button");
const header = document.getElementById("header");
const profileImgs = document.getElementsByClassName("profile-img");
let isManage = false;

manageButton.onclick = function () {
  if (isManage) {
    header.innerText = "Who's watching?";
    manageButton.innerText = "Manage Profiles";
    manageButton.style.opacity = "50%";
    manageButton.style.border = "1px solid white";
    manageButton.style.color = "white";
    manageButton.style.backgroundColor = "rgb(20, 20, 20)";

    for (let i = 0; i < profileImgs.length; i++) {
      profileImgs[i].style.opacity = "100%";
    }

    manageButton.onmouseover = function () {
      manageButton.style.opacity = "100%";
    };
    manageButton.onmouseout = function () {
      manageButton.style.opacity = "50%";
    };
    isManage = false;
  } else {
    header.innerText = "Manage Profiles:";
    manageButton.innerText = "Done";
    manageButton.style.backgroundColor = "white";
    manageButton.style.color = "rgb(20, 20, 20)";
    manageButton.style.opacity = "100%";
    manageButton.style.border = "none";

    for (let i = 0; i < profileImgs.length; i++) {
      profileImgs[i].style.opacity = "50%";
    }

    manageButton.onmouseover = function () {
      manageButton.style.backgroundColor = "red";
      manageButton.style.color = "white";
    };
    manageButton.onmouseout = function () {
      manageButton.style.backgroundColor = "white";
      manageButton.style.color = "rgb(20, 20, 20)";
    };
    isManage = true;
  }
};
