window.onload = function(){
  
    $('.image').hover(in_, out);
    
    
  };//window.onload
  
  function in_(){
    let h=getComputedStyle(this).height,
        w=getComputedStyle(this).width;
    
    $(this).prepend(`<div class=hover><p></p>
        <i class=ion-android-expand></i></div>`);
    
    $('.hover').css({'width':w,'display':'flex','flex-direction': 'column'}).animate({height:h},220);
      setTimeout(function(){
        $('i').on('click',zoom);
      },100);
  }
  function out(){
    $('.hover').html('').animate({height:0},220,function(){
      $(this).remove();
    });
  }
  
  function zoom(){
    
    let x = this.parentElement.parentElement.children[1].getAttribute('src');
    $('#close').show();
    $('#zoomed-img').attr('src',x);
    $('#zoomed').css('display','flex');
    
    $('#close').on('click',function(){
      $('#zoomed').hide();
      $('#close').hide();
    });
  }//zoom