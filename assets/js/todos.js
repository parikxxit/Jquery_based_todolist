$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(1000, function(){
    $(this).remove();
  });
  event.stopPropagation;
});
$("input[type='text']").keypress(function(event){
  //13 is the js code of enter key
  if (event.which === 13) {
    //grabbing the task for li
    var todoText = $(this).val()
    // adding text to li
    $("ul").append("<li>" + "<span><i class='fa fa-trash'></i></span> " + todoText +"</li>");
    //removing the text after enter press
    $(this).val("");
  }
});
$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
})
