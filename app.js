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
var finalPrint;



$("button").on("click", function(){
    $(".groupNum").remove();

    var workingArray = classArray;
     
    workingArray = shuffle(workingArray);

    // get value from button html
    buttonValue = parseInt($(this).text());

    var newStuff = arrayToGroups(workingArray, buttonValue);
    console.log(newStuff);

    var groupLength = newStuff[0];
    console.log(groupLength.length);


 // Creating group lists
    for(var i = 0; i <buttonValue; i++){
          
      //ALL appending together//
      var newGroup = "<li class='groupNum' > Group " + (i + 1) + "<br>" + newStuff[i]+"</li>";
        
      $(".groupList").append(newGroup);
          

 classArray = [
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

grouped = [];         



};





});

// console.log(randomStudent(20 , 1));
function arrayToGroups(source, groups) { 
//This is the array of groups to return:
        var grouped = [];

        //work out the size of the group
        var groupSize = Math.ceil(source.length/groups);

        //clone the source array so we can safely splice it
        var clone = source;

        for (var r=0;r<groups;r++) {
          

          //Grab the next groupful from the clone, and append it to the array of groups
          grouped.push(clone.splice(0, groupSize));            
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


                });