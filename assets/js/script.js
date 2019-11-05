/*Quand un champ a le focus, définir sa bordure à 1px solid green.
Quand le champ perd le focus, définir la bordure à 1px solid red.*/
$(function(){
  $('#lastName').focus(function(){
    $(this).css('border', '3px solid green');
  });
  $('#firstName').focus(function(){
    $(this).css('border', '3px solid green');
  });
  $('#lastName').focusout(function(){
    $(this).css('border', '2px solid red');
  });
  $('#firstName').focusout(function(){
    $(this).css('border', '2px solid red');
  });
});
