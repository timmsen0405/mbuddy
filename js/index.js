if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
}

function onLoad() {
    console.log("Load")
    if (!window.usingCordova) //triggers when opened in browser (no cordova)
    {
        initApp();
        console.log("Opened app in browser.");
    }

}

function initApp() {
    console.log("Starting application...")
    var app = new Framework7({
        root: '#app',
        name: 'Mobile Buddy',
        id: 'com.applicaiton.mbuddy',
        panel: {
            swipe: 'left',
        }
    });

}


function changeDisplay(className, cbVal) {
    console.log("Checkbox-Status: ", cbVal);
    var list = document.getElementsByClassName(className);
    for (var i = 0; i < list.length; i++) {
        if (cbVal) {
            list[i].classList.remove('noDisplay');
        }
        else {
            list[i].classList.add('noDisplay');
        }
    }
}

window.onload = onLoad;
document.addEventListener('deviceready', initApp, false); //deviceready is a cordova status.

document.getElementById("tgPartner").addEventListener("change", function () { changeDisplay("partnerScreen", this.checked) })

document.getElementById("tgContact").addEventListener("change", function () { changeDisplay("contactScreen", this.checked) })

