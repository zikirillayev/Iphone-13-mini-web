(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

window.addEventListener("keypress", (i)=>{
    if(i.which === 32){
      
      document.querySelector('.simple').className = 'simple active'
    }
})