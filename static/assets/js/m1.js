// main.js
let qp;

try {
  qp = window.top.location.pathname === "/d";
} catch {
  try {
    qp = window.parent.location.pathname === "/d";
  } catch {
    qp = false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Blocked Hostnames Check
  const blockedHostnames = ["gointerstellar.app", "computers-science.com", "roundrockisd.online", "algebraxyz.info", "thegalleryofart.info"];

  if (!blockedHostnames.includes(window.location.hostname)) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//angelabedsautopsy.com/1c/c3/8a/1cc38a6899fdf8ba4dfe779bcc54627b.js";
    document.body.appendChild(script);
  }

  const nav = document.querySelector(".f-nav");

  if (nav) {
    const themeId = localStorage.getItem("theme");
    let LogoUrl = "/assets/media/favicon/main.png";
    if (themeId === "Inverted") {
      LogoUrl = "/assets/media/favicon/main-inverted.png";
    }
    const html = `
      <div id="icon-container">
        <a class="icon" href="/./"><img alt="nav" id="INImg" src="${LogoUrl}"/></a>
      </div>
      <div class="f-nav-right">
        <a class="navbar-link" href="/./a"><i class="fa-solid fa-gamepad navbar-icon"></i><an>&#71;&#97;</an><an>&#109;&#101;&#115;</an></a>
        <a class="navbar-link" href="/./b"><i class="fa-solid fa-phone navbar-icon"></i><an>&#65;&#112;</an><an>&#112;&#115;</an></a>
        ${qp ? "" : '<a class="navbar-link" href="/./d"><i class="fa-solid fa-laptop navbar-icon"></i><an>&#84;&#97;</an><an>&#98;&#115;</an></a>'}
        <a class="navbar-link" href="/./c"><i class="fa-solid fa-gear navbar-icon settings-icon"></i><an>&#83;&#101;&#116;</an><an>&#116;&#105;&#110;&#103;</an></a>
      </div>`;
    nav.innerHTML = html;
  }

  // LocalStorage Setup for 'dy'
  if (localStorage.getItem("dy") === null || localStorage.getItem("dy") === undefined) {
    localStorage.setItem("dy", "false");
  }

  // Theme Logic
  const themeid = localStorage.getItem("theme");
  const themeEle = document.createElement("link");
  themeEle.rel = "stylesheet";
  const themes = {
    catppuccinMocha: "/assets/css/themes/catppuccin/mocha.css?v=00",
    catppuccinMacchiato: "/assets/css/themes/catppuccin/macchiato.css?v=00",
    catppuccinFrappe: "/assets/css/themes/catppuccin/frappe.css?v=00",
    catppuccinLatte: "/assets/css/themes/catppuccin/latte.css?v=00",
    Inverted: "/assets/css/themes/colors/inverted.css?v=00",
    sky: "/assets/css/themes/colors/sky.css?v=00",
  };

  if (themes[themeid]) {
    themeEle.href = themes[themeid];
    document.body.appendChild(themeEle);
  } else {
    const customThemeEle = document.createElement("style");
    customThemeEle.textContent = localStorage.getItem(`theme-${themeid}`);
    document.head.appendChild(customThemeEle);
  }

  // Favicon and Name Logic
  const icon = document.getElementById("tab-favicon");
  const name = document.getElementById("t");
  const selectedValue = localStorage.getItem("selectedOption");

  function setCloak(nameValue, iconUrl) {
    const customName = localStorage.getItem("CustomName");
    const customIcon = localStorage.getItem("CustomIcon");

    let FinalNameValue = nameValue;
    let finalIconUrl = iconUrl;

    if (customName) {
      FinalNameValue = customName;
    }
    if (customIcon) {
      finalIconUrl = customIcon;
    }

    if (finalIconUrl) {
      icon.setAttribute("href", finalIconUrl);
      localStorage.setItem("icon", finalIconUrl);
    }
    if (FinalNameValue) {
      name.textContent = FinalNameValue;
      localStorage.setItem("name", FinalNameValue);
    }
  }

  const options = {
    Google: { name: "Google", icon: "/assets/media/favicon/google.png" },
    "Savvas Realize": {
      name: "Savvas Realize",
      icon: "/assets/media/favicon/savvas-realize.png",
    },
    SmartPass: {
      name: "SmartPass",
      icon: "/assets/media/favicon/smartpass.png",
    },
    "World Book Online - Super Home": {
      name: "Super Home Page",
      icon: "/assets/media/favicon/wbo.ico",
    },
    "World Book Online - Student": {
      name: "WBO Student | Home Page",
      icon: "/assets/media/favicon/wbo.ico",
    },
    "World Book Online - Timelines": {
      name: "Timelines - Home Page",
      icon: "/assets/media/favicon/wbo.ico",
    },
    Naviance: {
      name: "Naviance Student",
      icon: "/assets/media/favicon/naviance.png",
    },
    "PBS Learning Media": {
      name: "PBS LearningMedia | Teaching Resources For Students And Teachers",
      icon: "/assets/media/favicon/pbslearningmedia.ico",
    },
    "PBS Learning Media Student Home": {
      name: "Student Homepage | PBS LearningMedia",
      icon: "/assets/media/favicon/pbslearningmedia.ico",
    },
    Drive: {
      name: "My Drive - Google Drive",
      icon: "/assets/media/favicon/drive.png",
    },
    Classroom: { name: "Home", icon: "/assets/media/favicon/classroom.png" },
    Schoology: {
      name: "Home | Schoology",
      icon: "/assets/media/favicon/schoology.png",
    },
    Gmail: { name: "Gmail", icon: "/assets/media/favicon/gmail.png" },
    Clever: {
      name: "Clever | Portal",
      icon: "/assets/media/favicon/clever.png",
    },
    Khan: {
      name: "Dashboard | Khan Academy",
      icon: "/assets/media/favicon/khan.png",
    },
    Dictionary: {
      name: "Dictionary.com | Meanings & Definitions of English Words",
      icon: "/assets/media/favicon/dictionary.png",
    },
    Thesaurus: {
      name: "Synonyms and Antonyms of Words | Thesaurus.com",
      icon: "/assets/media/favicon/thesaurus.png",
    },
    Campus: {
      name: "Infinite Campus",
      icon: "/assets/media/favicon/campus.png",
    },
    IXL: { name: "IXL | Dashboard", icon: "/assets/media/favicon/ixl.png" },
    Canvas: { name: "Dashboard", icon: "/assets/media/favicon/canvas.png" },
    LinkIt: { name: "Test Taker", icon: "/assets/media/favicon/linkit.ico" },
    Edpuzzle: { name: "Edpuzzle", icon: "/assets/media/favicon/edpuzzle.png" },
    "i-Ready Math": {
      name: "Math To Do, i-Ready",
      icon: "/assets/media/favicon/i-ready.ico",
    },
    "i-Ready Reading": {
      name: "Reading To Do, i-Ready",
      icon: "/assets/media/favicon/i-ready.ico",
    },
    "ClassLink Login": {
      name: "Login",
      icon: "/assets/media/favicon/classlink-login.png",
    },
    "Google Meet": {
      name: "Google Meet",
      icon: "/assets/media/favicon/google-meet.png",
    },
    "Google Docs": {
      name: "Google Docs",
      icon: "/assets/media/favicon/google-docs.ico",
    },
    "Google Slides": {
      name: "Google Slides",
      icon: "/assets/media/favicon/google-slides.ico",
    },
    Wikipedia: {
      name: "Wikipedia",
      icon: "/assets/media/favicon/wikipedia.png",
    },
    Britannica: {
      name: "Encyclopedia Britannica | Britannica",
      icon: "/assets/media/favicon/britannica.png",
    },
    Ducksters: {
      name: "Ducksters",
      icon: "/assets/media/favicon/ducksters.png",
    },
    Minga: {
      name: "Minga – Creating Amazing Schools",
      icon: "/assets/media/favicon/minga.png",
    },
    "i-Ready Learning Games": {
      name: "Learning Games, i-Ready",
      icon: "/assets/media/favicon/i-ready.ico",
    },
    "NoRedInk Home": {
      name: "Student Home | NoRedInk",
      icon: "/assets/media/favicon/noredink.png",
    },
    Desmos: {
      name: "Desmos | Graphing Calculator",
      icon: "/assets/media/favicon/desmos.ico",
    },
    "Newsela Binder": {
      name: "Newsela | Binder",
      icon: "/assets/media/favicon/newsela.png",
    },
    "Newsela Assignments": {
      name: "Newsela | Assignments",
      icon: "/assets/media/favicon/newsela.png",
    },
    "Newsela Home": {
      name: "Newsela | Instructional Content Platform",
      icon: "/assets/media/favicon/newsela.png",
    },
    "PowerSchool Sign In": {
      name: "Student and Parent Sign In",
      icon: "/assets/media/favicon/powerschool.png",
    },
    "PowerSchool Grades and Attendance": {
      name: "Grades and Attendance",
      icon: "/assets/media/favicon/powerschool.png",
    },
    "PowerSchool Teacher Comments": {
      name: "Teacher Comments",
      icon: "/assets/media/favicon/powerschool.png",
    },
    "PowerSchool Standards Grades": {
      name: "Standards Grades",
      icon: "/assets/media/favicon/powerschool.png",
    },
    "PowerSchool Attendance": {
      name: "Attendance",
      icon: "/assets/media/favicon/powerschool.png",
    },
    Nearpod: { name: "Nearpod", icon: "/assets/media/favicon/nearpod.png" },
    StudentVUE: {
      name: "StudentVUE",
      icon: "/assets/media/favicon/studentvue.ico",
    },
    "Quizlet Home": {
      name: "Flashcards, learning tools and textbook solutions | Quizlet",
      icon: "/assets/media/favicon/quizlet.webp",
    },
    "Google Forms Locked Mode": {
      name: "Start your quiz",
      icon: "/assets/media/favicon/googleforms.png",
    },
    DeltaMath: {
      name: "DeltaMath",
      icon: "/assets/media/favicon/deltamath.png",
    },
    Kami: { name: "Kami", icon: "/assets/media/favicon/kami.png" },
    "GoGuardian Admin Restricted": {
      name: "Restricted",
      icon: "/assets/media/favicon/goguardian-lock.png",
    },
    "GoGuardian Teacher Block": {
      name: "Uh oh!",
      icon: "/assets/media/favicon/goguardian.png",
    },
    "World History Encyclopedia": {
      name: "World History Encyclopedia",
      icon: "/assets/media/favicon/worldhistoryencyclopedia.png",
    },
    "Big Ideas Math Assignment Player": {
      name: "Assignment Player",
      icon: "/assets/media/favicon/bim.ico",
    },
    "Big Ideas Math": {
      name: "Big Ideas Math",
      icon: "/assets/media/favicon/bim.ico",
    },
  };

  if (options[selectedValue]) {
    setCloak(options[selectedValue].name, options[selectedValue].icon);
  }

  // Event Key Logic
  const eventKey = JSON.parse(localStorage.getItem("eventKey")) || ["Ctrl", "E"];
  const pLink = localStorage.getItem("pLink") || "https://classroom.google.com/";
  let pressedKeys = [];

  document.addEventListener("keydown", event => {
    pressedKeys.push(event.key);
    if (pressedKeys.length > eventKey.length) {
      pressedKeys.shift();
    }
    if (eventKey.every((key, index) => key === pressedKeys[index])) {
      window.location.href = pLink;
      pressedKeys = [];
    }
  });

  // Background Image Logic
  const savedBackgroundImage = localStorage.getItem("backgroundImage");
  if (savedBackgroundImage) {
    document.body.style.backgroundImage = `url('${savedBackgroundImage}')`;
  }
});
