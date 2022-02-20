/*header fixed*/
 $(function (){
   let header=$("#header")
   let intro=$("#intro")
   let introH=intro.innerHeight();
   let scrollPos=$(window).scrollTop()

   checkScroll(scrollPos,introH)

   $(window).on("scroll load resize", function (){
     introH=intro.innerHeight()
     scrollPos=$(this).scrollTop()
checkScroll(scrollPos,introH)
   })

    function checkScroll(scrollPos,introH){
      if(scrollPos > introH){
        header.addClass("fixed")
      }
      else {
        header.removeClass("fixed")
      }

     }



/*scroll*/
$("[data-scroll]").on("click", function (event){
  event.preventDefault()

  let elementId=$(this).data("scroll")

  let elementOffSet=$(elementId).offset().top;
console.log(elementOffSet)

    nav.removeClass("show")

  $("html,body").animate({
    scrollTop:elementOffSet - 70
  },1000)

})

   /*navToggle*/
let nav=$("#nav");
let navToggle=$("#navToggle")

   navToggle.on("click",function (event){
     event.preventDefault()

       nav.toggleClass("show")
   })













})