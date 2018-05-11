$(document).ready(function(){
  
  $("button").click(function(event){
    console.log($('.myInput').val())
  })

  $("h1").hover(function(event){
    console.log("hover")
    $(".mySpan").show()
  })

})

