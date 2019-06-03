
// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

// set up firebase
var firebaseConfig = {
    apiKey: "AIzaSyAmGJgkEMNjpW0TdFUJq8XWw-pD5iGg6Pc",
    authDomain: "train-time-b90d2.firebaseapp.com",
    databaseURL: "https://train-time-b90d2.firebaseio.com",
    projectId: "train-time-b90d2",
    storageBucket: "train-time-b90d2.appspot.com",
    messagingSenderId: "168101586607",
    appId: "1:168101586607:web:6cbc192fff6e5314"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

// button to add new trains
$("#add-train-btn").on("click", function (event) {
    event.preventDefault();

    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var trainDestination = $("#destination-input").val().trim();
    var trainFirstTime = $("#first-train-time-input").val().trim();
    var trainFreq = $("#frequency-input").val().trim();

    // Creates local "temporary" object for holding train data
    var newTrain = {
        name: trainName,
        destination: trainDestination,
        firstTime: trainFirstTime,
        frequency: trainFreq
    };

    // Uploads train data to the database
    database.ref().push(newTrain);

    // Logs everything to console
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.firstTime);
    console.log(newTrain.frequency);

    alert("Train successfully added");

    // Clears all of the text-boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#first-train-time-input").val("");
    $("#frequency-input").val("");
});

// database.ref().on("child_added", function (childSnapshot) {
//     console.log(childSnapshot.val());

//     // Store everything into a variable.
//     var trainName = childSnapshot.val().name;
//     var trainDestination = childSnapshot.val().destination;
//     var trainFirstTime = childSnapshot.val().firstTime;
//     var trainFreq = childSnapshot.val().frequency;

//     // Obtain current time
//     // var currentTime = moment().diff(moment());

//     // Calculate time next train arrives
//     // var trainNextArrival = trainFirstTime - trainFreq;

//     // Create the new row
//     var newRow = $("<tr>").append(
//         $("<td>").text(trainName),
//         $("<td>").text(trainDestination),
//         $("<td>").text(trainFirstTime),
//         $("<td>").text(trainNextArrival),
//         $("<td>").text(trainMinutesAway),
//     );

//     // Append the new row to the table
//     $("#train-table > tbody").append(newRow);
// });
});