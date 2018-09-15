function config() {
    // Initialize Firebase
    
//    var firebase = require("firebase/app");
    
    var config = {
        apiKey: "AIzaSyAS3E8TKgi-NY7BKFwrmoyy0-Il8PHB4dM",
        authDomain: "htn2018-93f66.firebaseapp.com",
        databaseURL: "https://htn2018-93f66.firebaseio.com",
        projectId: "htn2018-93f66",
        storageBucket: "htn2018-93f66.appspot.com",
        messagingSenderId: "808610887680"
    };
    firebase.initializeApp(config);
}

function fetchQueue() {
    var db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    
    var roomsRef = db.collection("rooms").doc("rRKbJxuwTt9qtvdcKItE");
    
    roomsRef.onSnapshot(function(doc) {
        if (doc.exists) {
            updateQueue(doc.data());
//            doc.data();
            
        }
    });
}

function updateQueue(data) {
    var roomHeading = document.getElementById("room-name");
    roomHeading.innerText = data.name;
}