$(document).ready(function(){
  
  let currentColor = "white"
  let currentNumber = 0

  $("button").click(function(){
    console.log($('.myInput').val())
  })

  $("h1").hover(function(event){
    console.log("hover")
    $(".mySpan").show()
  })

  //Toggle the background color of the "Blue" button

  $("#white-button").click(function(){
  	
   //  if (currentColor === "white") {
  		
   //    $("#white-button").css({"background-color": "blue"})
  	// 	currentColor = "blue"

  	// } else {
  		
   //    $("#white-button").css({"background-color": "white"})
  	// 	currentColor = "white"

  	// }
    $(this).toggleClass("main")

  })

  //Reveal the hidden paragraph

  $("#paragraph").hover(function(){
  	$("#hidden-paragraph").show()
  })

  //Increase the value of the number in the middle of the button

  $("#number-button").click(function(){
  	currentNumber = currentNumber + 1
  	$(this).text(currentNumber) 
  })

})

