"use strict"

let getsideid = 'sidebar'
let checkSide = localStorage.getItem('side');
if (checkSide == '1') {
    SideDisabler();
}
function SideBarSwitch() {
    if (checkSide == 0) {
        SideDisabler('sidebar');
        document.location.reload(true);
    } else {
        localStorage.setItem('side', '0');
        document.location.reload(true);
    }
}



function SideDisabler() {
    localStorage.setItem('sideid', 'sidebar');
    document.getElementById(localStorage.getItem('sideid')).style = "display: none";
    document.getElementsByClassName('block-o')[0].classList.remove('uside')
    /*const howmanytabs = document.querySelectorAll('.a-tab');
    if (howmanytabs.length) {
        for (let step = 0; step < howmanytabs.length; step++) {
            const element = howmanytabs[step];
            element.style.display = 'block'
        }
    }*/
    localStorage.setItem('side', '1');
}

function PopupClose() {
    const howmanyclosers = document.querySelectorAll('.block-button-close');
    if (howmanyclosers.length) {
        for (let step = 0; step < howmanyclosers.length; step++) {
            const element = howmanyclosers[step].parentElement;
            element.style.display = 'none'
        }
    }
}

function OpenLink(getlink) {
    window.open(getlink, '_self');
}

function OpenPopup(getid) {
    document.getElementById(getid).style.display = 'flex';
}

function OpenTablo(tablo) {
    var tablos = document.querySelectorAll('.block-dropdown-tab-lo');

    if (tablos.length) {
        for (let step = 0; step < tablos.length; step++) {
            var element = tablos[step];
            element.style = "display: none";
        }
    }

    for (let step = 0; step < tablos.length; step++) {
        let element = tablos[step];
        if (element.get)
        element.style = "display: none";
    }

    if (getComputedStyle(document.getElementById(tablo)).display == 'flex') {
        document.getElementById(tablo).style = "display: none"
    } else if (getComputedStyle(document.getElementById(tablo)).display == 'none') {
        document.getElementById(tablo).style = "display: flex"
    }
}

function OpenTab(gettab) {
    const howmanytabs = document.querySelectorAll('.a-tab');
    if (howmanytabs.length) {
        for (let step = 0; step < howmanytabs.length; step++) {
            const element = howmanytabs[step];
            element.style.display = 'none'
        }
    }
    document.getElementById(gettab).style.display = 'flex';
}

// DARK MODE
function DarkEnabler() {
    document.getElementsByTagName('body')[0].style = "background-color: rgb(30, 30, 30)";
    document.getElementsByClassName('topbar-o')[0].style = "color: white";
    document.getElementsByClassName('sidebar-o')[0].style = "background-color: rgb(36, 38, 38)";

    var textl = document.querySelectorAll('.text-la');
    var textlb = document.querySelectorAll('.text-lb');
    var textlc = document.querySelectorAll('.text-lc');
    var textld = document.querySelectorAll('.text-ld');
    var blocksidetabse = document.querySelectorAll('.block-side-tabs-e');
    var blockinput = document.querySelectorAll('.block-input');
    var blockliste = document.querySelectorAll('.block-list-e');

    if (textl.length) {
        for (let step = 0; step < textl.length; step++) {
            var element = textl[step];
            element.style = "color: white";
        }
    }
    if (textlb.length) {
        for (let step = 0; step < textlb.length; step++) {
            var element = textlb[step];
            element.style = "color: white";
        }
    }
    if (textlc.length) {
        for (let step = 0; step < textlc.length; step++) {
            var element = textlc[step];
            element.style = "color: white";
        }
    }
    if (textld.length) {
        for (let step = 0; step < textld.length; step++) {
            var element = textld[step];
            element.style = "color: white";
        }
    }
    if (blocksidetabse.length) {
        for (let step = 0; step < blocksidetabse.length; step++) {
            var element = blocksidetabse[step];
            element.style = "background-color: rgb(60, 62, 63); color: white";
        }
    }
    if (blockinput.length) {
        for (let step = 0; step < blockinput.length; step++) {
            var element = blockinput[step];
            element.style = "background-color: rgb(40, 40, 40); color: white";
        }
    }
    if (blockliste.length) {
        for (let step = 0; step < blockliste.length; step++) {
            var element = blockliste[step];
            element.style = "color: white";
        }
    }
}

let checkMode = localStorage.getItem('mode');
if (checkMode == '1') {
    DarkEnabler();
}

function ThemeSwitch() {
    if (checkMode == '0') {
        DarkEnabler();
        localStorage.setItem('mode', '1');
        document.location.reload(true);
    } else {
        localStorage.setItem('mode', '0');
        document.location.reload(true);
    }
}

document.getElementsByClassName('block-mode-e')[0].innerHTML = `
<label class="switch" onclick="ThemeSwitch()">
  <input type="checkbox">
  <span class="slider round"></span>
</label>`;

document.getElementsByClassName('block-toggle-e')[0].innerHTML = `
<span class="bar"></span>
<span class="bar"></span>
<span class="bar"></span>`;

const toggleButton = document.getElementsByClassName('block-toggle-e')[0]
const navbarLinks = document.getElementsByClassName('block-top-tabs')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

document.getElementsByClassName("block-button-close-e").onclick = function (e) {
    location.reload(true);
}

const addclosers = document.querySelectorAll('.block-popup');
if (addclosers.length) {
    for (let step = 0; step < addclosers.length; step++) {
        const element = addclosers[step];
        let test = document.createElement("div")
        test.setAttribute('class', 'block-button-close')
        test.setAttribute('onclick', 'PopupClose()')
        test.textContent = 'X'
        element.appendChild(test);
    }
}