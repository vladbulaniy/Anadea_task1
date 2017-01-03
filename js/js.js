jQuery(document).ready(function ($) {

var massCell = $('.cell'); 
console.log(massCell);

$.each(massCell, function(){
  console.log($(this).attr('data-price'));  
  if($(this).attr('data-background-color') == 'yellow')
    $(this).css('background-color','#FEF5CA');    
 
  if($(this).attr('data-price') != ''){
    //$('.price')
    $(this).children('.price').css('display','block').text($(this).children('.price').text() + $(this).attr('data-price'));
    }else{
        console.log('nothing')
    }  
   
});

$('.big').attr('class', 'col-xs-12');

$('#changer').click(function(){
    if ($('#changer img').css('float') == 'left'){
        $('#changer img').css('float','right');
        $('#changer').css('background-color','red');
        $('.eng').hide();
        $('.ital').show();
        
    }else{
        $('#changer img').css('float','left');
        $('#changer').css('background-color','black');
        $('.eng').show();
        $('.ital').hide();
    }
    
})
//$('.big').next().attr('class', 'col-xs-offset-1')

});//end
