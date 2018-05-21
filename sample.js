$(document).ready(function(){
  
  let currentColor = "white"
  let currentNumber = 0

  $("button").click(function(event){
    console.log($('.myInput').val())
  })

  $("h1").hover(function(event){
    console.log("hover")
    $(".mySpan").show()
  })

  //Toggle the background color of the "Blue" button

  $("#white-button").click(function(event){
  	if (currentColor === "white") {
  		$(this).css({"background-color": "blue"})
  		currentColor = "blue"
  	} else {
  		$(this).css({"background-color": "white"})
  		currentColor = "white"
  	}
  })

  //Reveal the hidden paragraph

  $("#paragraph").hover(function(event){
  	$("#hidden-paragraph").show()
  })

  //Increase the value of the number in the middle of the button

  $("#number-button").click(function(event){
  	currentNumber = currentNumber + 1
  	$(this).text(currentNumber) 
  })

})

