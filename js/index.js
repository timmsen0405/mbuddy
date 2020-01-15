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


function changeDisplay(className, checkStatus) {
    var list = document.getElementsByClassName(className);
    if (checkStatus == "true") {
        list.classList.remove('nodDisplay')
    }
    else { list.classList.add('noDisplay') }
}

window.onload = onLoad;
document.addEventListener('deviceready', initApp, false); //deviceready is a cordova status.

document.getElementById("tgPartner").addEventListener("change", changeDisplay("partnerScreen", this.status)))
