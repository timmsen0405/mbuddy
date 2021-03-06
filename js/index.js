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
        id: 'com.application.mbuddy',
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

///// EVENT-LISTENERS /////
document.addEventListener('deviceready', initApp, false); //deviceready is a cordova status.

/* var cntxtBttns = document.getElementsByClassName("button-outline");
for (var i = 0; i < cntxtBttns.length; i++) {
    cntxtBttns[i].addEventListener("click", function () {
        for (var j = 0; j < cntxtBttns.length; j++) {
            cntxtBttns[j].classList.remove("button-active");
        };
        this.classList.add("button-active");
    });
} */

document.getElementById("tgPartner").addEventListener("change", function () { changeDisplay("partnerScreen", this.checked) })

document.getElementById("tgContact").addEventListener("change", function () { changeDisplay("contactScreen", this.checked) })

document.getElementById("cb-bill2mail").addEventListener("change", function () { changeDisplay("bill2mail", this.checked) })


var $$ = Dom7;

$$('.convert-form-to-data').on('click', function () {
    var formData = app.form.convertToData('#form-kna');
    alert(JSON.stringify(formData));
});


$$('.fill-form-from-data').on('click', function () {
    var formData = {
        'name1': 'Mustermann GmbH',
        'name2': 'Hauptverwaltung',
        'street': 'Musterstrasse',
        'houseno': '1',
        'zip-code': '12345',
        'city': 'Musterhausen',
        'tel': '0123456789',
        'mobilephone': '0987654321',
        'email': 'info@mustermann.de',
        'kukla': 'a3',
        'toggle-contact': ['yes'],
        'cp-surname': 'Max',
        'cp-lastname': 'Mustermann',
        'cp-tel': '022148753',
        'cp-mobilephone': '0152345678',
        'cp-email': 'max@mustermann.de'
    }
    console.log(formData);
    app.form.fillFromData('#form-kna', formData);
});
