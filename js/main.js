// Custom Select
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl, customSelect;
        customSelect = this.parentNode.parentNode.parentNode.parentNode.getElementsByTagName("div")[0];
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (oi = 0; oi < sl; oi++) {
        if (s.options[oi].innerHTML == this.innerHTML) {
            s.selectedIndex = oi;
            if(oi == 2){
                customSelect.classList.add("selected-21");
                customSelect.classList.remove("selected-22");
            }
            else{
                customSelect.classList.remove("selected-21");
                customSelect.classList.add("selected-22");
            }
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
        }
        }
        h.click();
    });
    b.appendChild(c);
}
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);


// Dropdown Open
// $('.dropdown-open').click(function() {
//   $(this).next('.card-block-hidden-content').toggle();
//   $(this).parent('.card-lg-wrapp').toggleClass('opened');
//   if ($(this).text() == "Know More") {
//     $(this).text("Close")
//   } else {
//     $(this).text("Know More")
//   }
// });

$('.dropdown-open').click(function() {
  $(this).next('.card-block-hidden-content').toggle();
  $(this).parent('.card-lg-wrapp').toggleClass('opened');
  if ($(this).text() == "Know More") {
    $(this).text("Close")
  } else {
    $(this).text("Know More")
  }
 
  $(this).attr("type","current");
  var current = this;

  $(".dropdown-open").each(function() {
    var ele = this;
    if(!ele.type){
    if ($(this).text() == "Close") {
      $(this).next('.card-block-hidden-content').toggle();
      $(this).parent('.card-lg-wrapp').toggleClass('opened');
      if ($(this).text() == "Know More") {
        $(this).text("Close")
      } else {
        $(this).text("Know More")
      }
    }
  }
    
  });

  $(current).attr("type","");


});

//Loading
var count=0;
$(document).ready(function(){
  SetValues();
  $(window).scroll(function(){
    //Will check if the user has reached bottom of a PAGE
    SetValues();
    //Check for user has reached bottom of Page
    if($(window).scrollTop()==($(document).height()-window.innerHeight)){
      $('#loading').fadeIn();
      setTimeout("appendContent()", 1000);
    }
  });
});
var appendContent=function(){
  //alert("You are At Bottom");
  // $('#content').append("@@@@@@@@@ ---------- "+count+" TIMES  ---------- @@@@@@@@@<br/>");
  count++;
  for(var i=0;i<1;i++){
    $('#content').append("<a href='img/g-16.jpg' class='col-md-4'> <div class='card-image-block'> <img src='img/g-16.jpg' alt='' class='w-100'> </div></a><a href='img/g-17.jpg' class='col-md-4'> <div class='card-image-block'> <img src='img/g-17.jpg' alt='' class='w-100'> </div></a> <a href='img/g-18.jpg' class='col-md-4'> <div class='card-image-block'> <img src='img/g-18.jpg' alt='' class='w-100'> </div></a> <a href='img/g-19.jpg' class='col-md-4'> <div class='card-image-block'> <img src='img/g-19.jpg' alt='' class='w-100'> </div></a> <a href='img/g-20.jpg' class='col-md-4'> <div class='card-image-block'> <img src='img/g-20.jpg' alt='' class='w-100'> </div></a> <a href='img/g-21.jpg' class='col-md-4'> <div class='card-image-block'> <img src='img/g-21.jpg' alt='' class='w-100'> </div></a> <a href='img/g-22.jpg' class='col-md-4'> <div class='card-image-block'> <img src='img/g-22.jpg' alt='' class='w-100'> </div></a> <a href='img/g-23.jpg' class='col-md-4'> <div class='card-image-block'> <img src='img/g-23.jpg' alt='' class='w-100'> </div></a> <a href='img/g-24.jpg' class='col-md-4'> <div class='card-image-block'> <img src='img/g-24.jpg' alt='' class='w-100'> </div></a> <a href='img/g-25.jpg' class='col-md-4'> <div class='card-image-block'> <img src='img/g-25.jpg' alt='' class='w-100'> </div></a> <a href='img/g-26.jpg' class='col-md-4'> <div class='card-image-block'> <img src='img/g-26.jpg' alt='' class='w-100'> </div></a> <a href='img/g-27.jpg' class='col-md-4'> <div class='card-image-block'> <img src='img/g-27.jpg' alt='' class='w-100'> </div></a> <a href='img/g-28.jpg' class='col-md-4'> <div class='card-image-block'> <img src='img/g-28.jpg' alt='' class='w-100'> </div></a> <a href='img/g-29.jpg' class='col-md-4'> <div class='card-image-block'> <img src='img/g-29.jpg' alt='' class='w-100'> </div></a> <a href='img/g-1.jpg' class='col-md-4'> <div class='card-image-block'> <img src='img/g-1.jpg' alt='' class='w-100'> </div></a>");	
  }
  $('#loading').fadeOut();
};
var SetValues=function(){
  $('table tr:first-child td:nth-child(2)').html($(window).scrollTop());
  $('table tr:first-child td:nth-child(4)').html($(document).height());
  $('table tr:first-child td:nth-child(6)').html(window.innerHeight);//$(window).height()
};


// Magnific Popup
$('.gallery').each(function() { // the containers for all your galleries
  $(this).magnificPopup({
      delegate: 'a', // the selector for gallery item
      type: 'image',
      gallery: {
        enabled:true
      }
  });
});

// Show more and Less more
$('.read-more').click(function() {
  $(this).prev('.more-text').toggle();
   $(this).parent('p').toggleClass('opened');
  if ($(this).text() == "Read More") {
    $(this).text("Read Less")
  } else {
    $(this).text("Read More")
  }


  $(this).attr("type","current");
  var current = this;

  $(".read-more").each(function() {
    var ele = this;
    if(!ele.type){
    if ($(this).text() == "Read Less") {
      $(this).prev('.more-text').toggle();
   $(this).parent('p').toggleClass('opened');
  if ($(this).text() == "Read More") {
    $(this).text("Read Less")
  } else {
    $(this).text("Read More")
  }
    }
  }
    
  });

  $(current).attr("type","");
});