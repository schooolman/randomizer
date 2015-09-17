$(document).ready(function(){

var classArray = [
                    "Aarti",
                    "Danielle",
                    "David B.",
                    "Brian",
                    "David H.",
                    "Amelia",
                    "Geoffrey",
                    "Jacob",
                    "Manu",
                    "John",
                    "Jonathan",
                    "Laura",
                    "Lauren",
                    "Erick",
                    "Nicholas",
                    "Doug",
                    "Ryan",
                    "Sarah",
                    "Zachary",
                    "Liz"
                ];


var buttonValue = 0;


$("button").on("click", function(){
     classArray = shuffle(classArray);

     buttonValue = parseInt($(this).text());
     // console.log(buttonValue);
     var newStuff = arrayToGroups(classArray, buttonValue);
     console.log(newStuff);

     var groupLength = newStuff[0];
     console.log(groupLength.length);

// / Creating group lists
     for(var i = 0; i <buttonValue; i++){
          // console.log("probably an object");
          var newGroup = "<ul class='groupNum'> Group " + i + "</ul>";
          $(".groupList").append(newGroup + newStuff[i]);

          // for(var it = 0; it <= groupLength.length; it++){
          //      console.log();
          // }

          // $(".groupNum").append(newStuff);
};






});

// console.log(randomStudent(20 , 1));
function arrayToGroups(source, groups) { 
//This is the array of groups to return:
                    var grouped = [];

                    //work out the size of the group
                    var groupSize = Math.ceil(source.length/groups);

                    //clone the source array so we can safely splice it
                    var queue = source;

                    for (var r=0;r<groups;r++) {
                      //Grab the next groupful from the queue, and append it to the array of groups
                      grouped.push(queue.splice(0, groupSize));            
                    }       
            return grouped;
};

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
// var herbGroups = arrayToGroups(classArray, 3);
// console.log(herbGroups);


     // Creating group lists
//      for(var i = 1; i <= buttonValue; i++){
//           // console.log("probably an object");

//           $(".groupList").append("<ul class=\"groupNum" + i + "\">"" Group " + i + "</ul>");


//      };

//      // create holding array for group




//      // getting random student on click
//      for(var it = 0; it <= classArray.length; it++){
//           var selectStudent = randomStudent(19, 0);
//           $(".groupNum").append(classArray[selectStudent] + " ");

//      }

// });

// // function to find a random student
// function randomStudent(max , min){
//      var calculate = Math.floor(Math.random()*(1+max-min)+min);
//      return calculate;









                });