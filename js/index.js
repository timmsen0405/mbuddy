function onLoad() {
    console.log("Load")
    if(!window.usingCordova) //triggers when opened in browser (no cordova)
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
      // App content here.
}

window.onload = onLoad;
document.addEventListener('deviceready', initApp, false); //deviceready is a cordova status. 
 