// $(document).ready(function($) {

//     var countListItems = $("#todo-list li").length;

//     function recount() {
//         // count the items that aren't marked as complete

//         $("#todo-count strong").html(countListItems);

//     }
    
           
//     $("#new-todo").keyup(function(event) {
//         if (event.keyCode == 13) { //IF YOU PRESS ENTER

//             var newListItem = $("#new-todo").val(); //check input value

//             if (newListItem.length > 0) { //make sure something has been entered

//                 var listLength = $(".done").length + 1;
                
//                 $("#todo-list").append("<li><input type=checkbox class=done data-id= 'item" + listLength + "''>" + newListItem + "<button class=delete>" + "remove" + "</button>" + "</li>");
//                 //adds <li> to the DOM

//                 $('#new-todo').val(''); //returns the todo input to the placeholder
                
//             } 

//             //add (1) to the counter everytime a list item is added
//             recount();

//         }
//     });
   
//     function deleteItem() { 
//         $(this).parent().remove(); //deletes item when clicked
       
//     }

//     function markItemComplete() { //strikes through item when individual item is clicked or marks through all when "mark all as completed" is clicked. This doesn't allow you to uncheck individual items.
//         if ($(this).parent().hasClass("complete")) {
//             $(this).parent().removeClass('complete')
//         } else {
//             $(this).parent().addClass('complete');
//         }
//     }


//     function markAllComplete() {

//     }

//     function removeCompleted() { //removes completed items
//         $("li.complete").remove();
//     }

//     $(function() { //where everything goes down
       
//         $(document).on('click', '.delete', deleteItem);
//         $(document).on('click', '.done', markItemComplete);
//         $("#clear-completed").on('click', removeCompleted);
//         $("#toggle-all").on('click', markAllComplete);
//     });

// });

//==============================================================================

//AJS CLASS 7/28

// SetUpParameters()
// onLoad()
// onUpdate()
// EventHandlers
//     onclick
//     onhover
//     ontoggle
// calculation functions
    
//     getTax(){

//     }

//    function updateDownPayment(){

//     }

//     function updateMonthlyPayment(){

//     }

//     function updateVehiclePrice(){

//     }


//===============================================================================

//e.target
//e.currentTarget 


// <html>

// <span>// e.currentTarget -- the one the actual event listener is on
// 		<a href='#'>click me</a> //e.Target -- the one you click
// </span>

// </html>


//event bubbling - the DOM will trigger each event listener up the tree
//e.stopPropogation



//===============================================================================


//Scope is set of variables that you have access too
//JavaScript uses Lexical scoping


//===============================================================================


// //Pure versus impure functions

// var item = { cost: 1 }; //cost: is our key and 1 is our value

// function pureFunction() {
// 	var quantity = 1; 

// 	cost = cost * quantity + 2;

// 	return cost;
// }

// var c = pureFunction(item.cost);


//================================================================================

// function TwitterFeed(TwiData){......}

// function TwitterFeed(FaceData){
// 	//log feed
// 	//clear feed
// 	FaceaData = []; // Not the same as a variable. This functions locally.
// }

// var FaceData = [];
// var TwiData = [];
// FBFeed(FaceData);
// TwitterFeed(TwiData);




// var string = "internet"; // 1
// function logString(str){ 
// 	console.log(str);
// 	str="hello world";
// 	return str;

// }
// console.log(logString(string)); // 2
// console.log(string);




































