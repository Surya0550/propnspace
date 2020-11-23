/**
* Template Name: EstateAgency - v2.0.0
* Template URL: https://bootstrapmade.com/real-estate-agency-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  var nav = $('nav');
  var navHeight = nav.outerHeight();

  /*--/ ScrollReveal /Easy scroll animations for web and mobile browsers /--*/
  window.sr = ScrollReveal();
  sr.reveal('.foo', {
    duration: 1000,
    delay: 15
  });

  /*--/ Carousel owl /--*/
  $('#carousel').owlCarousel({
    loop: true,
    margin: -1,
    items: 1,
    nav: true,
    navText: ['<i class="ion-ios-arrow-back" aria-hidden="true"></i>', '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  });

  /*--/ Animate Carousel /--*/
  $('.intro-carousel').on('translate.owl.carousel', function() {
    $('.intro-content .intro-title').removeClass('zoomIn animated').hide();
    $('.intro-content .intro-price').removeClass('fadeInUp animated').hide();
    $('.intro-content .intro-title-top, .intro-content .spacial').removeClass('fadeIn animated').hide();
  });

  $('.intro-carousel').on('translated.owl.carousel', function() {
    $('.intro-content .intro-title').addClass('zoomIn animated').show();
    $('.intro-content .intro-price').addClass('fadeInUp animated').show();
    $('.intro-content .intro-title-top, .intro-content .spacial').addClass('fadeIn animated').show();
  });

  /*--/ Navbar Collapse /--*/
  $('.navbar-toggle-box-collapse').on('click', function() {
    $('body').removeClass('box-collapse-closed').addClass('box-collapse-open');
  });
  $('.close-box-collapse, .click-closed').on('click', function() {
    $('body').removeClass('box-collapse-open').addClass('box-collapse-closed');
    $('.menu-list ul').slideUp(700);
  });

  /*--/ Navbar Menu Reduce /--*/
  $(window).trigger('scroll');
  $(window).bind('scroll', function() {
    var pixels = 50;
    var top = 1200;
    if ($(window).scrollTop() > pixels) {
      $('.navbar-default').addClass('navbar-reduce');
      $('.navbar-default').removeClass('navbar-trans');
    } else {
      $('.navbar-default').addClass('navbar-trans');
      $('.navbar-default').removeClass('navbar-reduce');
    }
    if ($(window).scrollTop() > top) {
      $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
    } else {
      $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
    }
  });

  /*--/ Property owl /--*/
  $('#property-carousel').owlCarousel({
    loop: true,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      769: {
        items: 2,
      },
      992: {
        items: 3,
      }
    }
  });

  /*--/ Property owl owl /--*/
  // $('#property-single-carousel').owlCarousel({
  //   loop: true,
  //   margin: 0,
  //   nav: true,
  //   // navText: ['<i class="ion-ios-arrow-back" aria-hidden="true"></i>', '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'],
  //   responsive: {
  //     0: {
  //       items: 1,
  //     }
  //   }
  // });

  /*--/ News owl /--*/
  $('#new-carousel').owlCarousel({
    loop: true,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      769: {
        items: 2,
      },
      992: {
        items: 3,
      }
    }
  });

  /*--/ Testimonials owl /--*/
  $('#testimonial-carousel').owlCarousel({
    margin: 0,
    autoplay: true,
    nav: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeInUp',
    navText: ['<i class="ion-ios-arrow-back" aria-hidden="true"></i>', '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'],
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      }
    }
  });

})(jQuery);

let response;
let topThreeResponse;
let propertyByTypeResponse;
let topThreeArray  = [];

function sendMail(value) {

  // if(value === 'contact') {
  //   // alert('Call came from contact');
  // }

  let name = document.getElementById('inputName').value;
  let email = 'sai.suryateja14@gmail.com|pramodpoli@gmail.com|sruthiswamy18@gmail.com';
  let custEmail = document.getElementById('inputEmail1').value;
  let comment = document.getElementById('textMessage').value;
  let phone = document.getElementById('inputNumber').value;

  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       console.log('Mail Sent Success');
    }
};
xhttp.open("GET", "http://localhost:3000/api/v1/mail?email=" + email + "&" + "body=" + comment + "&" + "name=" + name + "&" + "custemail=" + custEmail + "&" + "number=" + phone, true);
xhttp.send();
  
}

function getSingleProperty(id) {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/api/v1/property/get/" + parseInt(id), true);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      response = this.responseText;
      // Typical action to be performed when the document is ready:
    }
  };
}

function getTopThreeProperties() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/api/v1/property/all", true);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      topThreeResponse = JSON.parse(this.responseText);
      // Typical action to be performed when the document is ready:
    }
  };
}

function getPropertiesByType(type) {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/api/v1/property/type/" + type, true);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      propertyByTypeResponse = JSON.parse(this.responseText);
      // Typical action to be performed when the document is ready:
    }
  };
}

function indexOnLoad() {

  $(document).ready(function(){
    let ap = 'AP';
    let baseUrl = 'https://propnspace.s3.ap-south-1.amazonaws.com/';
    let attrArray = [];
    let singleAttrArray = [];
    let attrCounter = 0;
    getTopThreeProperties();
    setTimeout(function () {
      // alert(JSON.stringify(topThreeResponse));
      for (let i = topThreeResponse.length - 1; i >= topThreeResponse.length - 3; i--) {
        topThreeArray.push(topThreeResponse[i]);
      }
      for (let i = 0; i < topThreeArray.length; i++) {
        $("#indexTT").append(`<div class="col-md-4">            <div class="card-box-a card-shadow">              <div class="img-box-a">                <img src="${baseUrl}${topThreeArray[i].image}" alt="" style="object-fit:cover; width:500px; height:500px;" class="img-a img-fluid">              </div>              <div class="card-overlay">                <div class="card-overlay-a-content">                  <div class="card-header-a">                    <h2 class="card-title-a">                      <span>${topThreeArray[i].name}                        </span>                    </h2>                  </div>                  <div class="card-body-a">                    <div class="price-box d-flex">                      <span class="price-a">COST</span>                    </div>                    <a value="redirect" id="${topThreeArray[i].id}" onclick="indexFunc(this)" class="link-a" style="cursor: pointer; color: white;" >Click here to view                      <span class="ion-ios-arrow-forward"></span>                    </a>                  </div>                  <div class="card-footer-a">                    <ul class="card-info d-flex justify-content-around" id="attr_index${i}">                    </ul>                  </div>                </div>              </div>            </div>          </div>`);
        if (topThreeArray[i].attributes) {
          attrArray = topThreeArray[i].attributes.split(',');
          for (let j = 0; j < attrArray.length; j++) {
            singleAttrArray = attrArray[j].split(':');
            $("#attr_index" + i).append(`<li> <h4 class="card-info-title">${singleAttrArray[0]}</h4> <span>${singleAttrArray[1]}</span> </li>`);
            attrCounter++;
            if(attrCounter >= 4) {break};
          }
          attrCounter = 0;
        }
      }

    }, 1000);
    $("#indexTT").append(`<div class="col-md-12">            <div class="title-wrap d-flex justify-content-between">              <div class="title-box">                <h2 class="title-a">Latest Properties</h2>              </div>              <div class="title-link">                <a onclick="redirectToGrid('none')" style="cursor: pointer;">All Property                  <span class="ion-ios-arrow-forward"></span>                </a>              </div>            </div>          </div>          `);
  });
}

function gridFunc() {
  $(document).ready(function () {
    console.log(sessionStorage.getItem('redirectType'));
    if (sessionStorage.getItem('redirectType') === 'none') {
      let ap = 'AP';
      let baseUrl = 'https://propnspace.s3.ap-south-1.amazonaws.com/';
      let attrArray = [];
      let singleAttrArray = [];
      let attrCounter = 0;
      getTopThreeProperties();
      setTimeout(function () {
        for (let i = 0; i < topThreeResponse.length; i++) {
          $("#gridP").append(`<div class="col-md-4">            <div class="card-box-a card-shadow">              <div class="img-box-a">                <img src="${baseUrl}${topThreeResponse[i].image}" alt="" style="object-fit:cover; width:500px; height:500px;" class="img-a img-fluid">              </div>              <div class="card-overlay">                <div class="card-overlay-a-content">                  <div class="card-header-a">                    <h2 class="card-title-a">                      <span>${topThreeResponse[i].name}                        </span>                    </h2>                  </div>                  <div class="card-body-a">                    <div class="price-box d-flex">                      <span class="price-a">COST</span>                    </div>                    <a value="redirect" id="${topThreeResponse[i].id}" onclick="indexFunc(this)" class="link-a" style="cursor: pointer; color: white;" >Click here to view                      <span class="ion-ios-arrow-forward"></span>                    </a>                  </div>                  <div class="card-footer-a">                    <ul class="card-info d-flex justify-content-around" id="attr_grid${i}">                    </ul>                  </div>                </div>              </div>            </div>          </div>`);
          if (topThreeResponse[i].attributes) {
            attrArray = topThreeResponse[i].attributes.split(',');
            for (let j = 0; j < attrArray.length; j++) {
              singleAttrArray = attrArray[j].split(':');
              $("#attr_grid" + i).append(`<li> <h4 class="card-info-title">${singleAttrArray[0]}</h4> <span>${singleAttrArray[1]}</span> </li>`);
              attrCounter++;
              if(attrCounter >= 4) {break};
            }
            attrCounter = 0;
          }
        }

      }, 1000);
    } else {
        getPropertiesByType(sessionStorage.getItem('redirectType'));
        let baseUrl = 'https://propnspace.s3.ap-south-1.amazonaws.com/';
        let attrArray = [];
        let singleAttrArray = [];
        let attrCounter = 0;
        setTimeout(function () {
          for (let i = 0; i < propertyByTypeResponse.length; i++) {
            $("#gridP").append(`<div class="col-md-4">            <div class="card-box-a card-shadow">              <div class="img-box-a">                <img src="${baseUrl}${propertyByTypeResponse[i].image}" alt="" style="object-fit:cover; width:500px; height:500px;" class="img-a img-fluid">              </div>              <div class="card-overlay">                <div class="card-overlay-a-content">                  <div class="card-header-a">                    <h2 class="card-title-a">                      <span>${propertyByTypeResponse[i].name}                        </span>                    </h2>                  </div>                  <div class="card-body-a">                    <div class="price-box d-flex">                      <span class="price-a">COST</span>                    </div>                    <a value="redirect" id="${propertyByTypeResponse[i].id}" onclick="indexFunc(this)" class="link-a" style="cursor: pointer; color: white;" >Click here to view                      <span class="ion-ios-arrow-forward"></span>                    </a>                  </div>                  <div class="card-footer-a">                    <ul class="card-info d-flex justify-content-around" id="attr_elsegrid${i}">                      </ul>                  </div>                </div>              </div>            </div>          </div>`);
            if (propertyByTypeResponse[i].attributes) {
              attrArray = propertyByTypeResponse[i].attributes.split(',');
              for (let j = 0; j < attrArray.length; j++) {
                singleAttrArray = attrArray[j].split(':');
                $("#attr_elsegrid" + i).append(`<li> <h4 class="card-info-title">${singleAttrArray[0]}</h4> <span>${singleAttrArray[1]}</span> </li>`);
                attrCounter++;
                if(attrCounter >= 4) {break};
              }
              attrCounter = 0;
            }
          }
  
        }, 1000);
    }
  });
}

function redirectToGrid(type) {
  sessionStorage.setItem("redirectType", type);
  redirectAndSetGrid();
}

function indexFunc(values) {
  // alert(values.id);
  // setCookie('redirectId', values.id, 1);
  sessionStorage.setItem("redirectId", values.id);
  // getSingleProperty(values.id);
  redirectAndSet();
  // document.getElementById('linking').value = '1';
  // getTopThreeProperties();
//   $(document).ready(function(){
//     // $("#carousel").append('<div class="carousel-item-a intro-item bg-image" style="background-image: url(assets/img/vasavi_lake_city_normal.jpeg)"><div class="overlay overlay-a"></div><div class="intro-content display-table"><div class="table-cell"><div class="container"><div class="row"><div class="col-lg-8"><div class="intro-body"><p class="intro-title-top">Hafeezpet, Hyderabad<br> 500049</p><h1 class="intro-title mb-4"><span class="color-b">1 </span> VASAVI<br> LAKE CITY</h1><p class="intro-subtitle intro-price"><a href="property-single.html"><span class="price-a"><!--rent | $ 12.000-->EXPLORE</span></a></p></div></div></div></div></div></div></div><div class="carousel-item-a intro-item bg-image" style="background-image: url(assets/img/vasavi_lake_city_normal.jpeg)"><div class="overlay overlay-a"></div><div class="intro-content display-table"><div class="table-cell"><div class="container"><div class="row"><div class="col-lg-8"><div class="intro-body"><p class="intro-title-top">Hafeezpet, Hyderabad<br> 500049</p><h1 class="intro-title mb-4"><span class="color-b">1 </span> VASAVI<br> LAKE CITY</h1><p class="intro-subtitle intro-price"><a href="property-single.html"><span class="price-a"><!--rent | $ 12.000-->EXPLORE</span></a></p></div></div></div></div></div></div></div>');
//     // $("#carousel").append('<div class="carousel-item-a intro-item bg-image" style="background-image: url(assets/img/vasavi_lake_city_normal.jpeg)"><div class="overlay overlay-a"></div><div class="intro-content display-table"><div class="table-cell"><div class="container"><div class="row"><div class="col-lg-8"><div class="intro-body"><p class="intro-title-top">Hafeezpet, Hyderabad<br> 500049</p><h1 class="intro-title mb-4"><span class="color-b">1 </span> VASAVI<br> LAKE CITY</h1><p class="intro-subtitle intro-price"><a href="property-single.html"><span class="price-a"><!--rent | $ 12.000-->EXPLORE</span></a></p></div></div></div></div></div></div></div>');
// });
  // document.getElementById('tt_1_add_1').innerHTML = 'ADD 1';
  // document.getElementById('tt_1_add_2').innerHTML = 'ADD 2';
  // document.getElementById('tt_1_name_1').innerHTML = 'NAME 1';
  // document.getElementById('tt_1_name_2').innerHTML = 'NAME 2';
  // document.getElementById('tt_1_link').value = '4';
  // document.getElementById('tt_2_add_1').innerHTML = 'AD 1';
  // document.getElementById('tt_2_add_2').innerHTML = 'AD 2';
  // document.getElementById('tt_2_name_1').innerHTML = 'NAM 1';
  // document.getElementById('tt_2_name_2').innerHTML = 'NAM 2';
  // document.getElementById('tt_2_link').value = '5';
  // document.getElementById('tt_3_add_1').innerHTML = 'A 1';
  // document.getElementById('tt_3_add_2').innerHTML = 'A 2';
  // document.getElementById('tt_3_name_1').innerHTML = 'NA 1';
  // document.getElementById('tt_3_name_2').innerHTML = 'NA 2';
  // document.getElementById('tt_3_link').value = '6';
  // setTimeout(function () {
  //   for(let i = topThreeResponse.length-1; i >= topThreeResponse.length-3; i--) {
  //     topThreeArray.push(topThreeResponse[i]);
  //   }
  //   // document.getElementById('carousel').innerHTML = document.getElementById('carousel').innerHTML + '<div class="carousel-item-a intro-item bg-image" style="background-image: url(assets/img/vasavi_lake_city_normal.jpeg)"><div class="overlay overlay-a"></div><div class="intro-content display-table"><div class="table-cell"><div class="container"><div class="row"><div class="col-lg-8"><div class="intro-body"><p class="intro-title-top">Hafeezpet, Hyderabad<br> 500049</p><h1 class="intro-title mb-4"><span class="color-b">1 </span> VASAVI<br> LAKE CITY</h1><p class="intro-subtitle intro-price"><a href="property-single.html"><span class="price-a"><!--rent | $ 12.000-->EXPLORE</span></a></p></div></div></div></div></div></div></div>';
  // }, 1000);
}

function redirectAndSet() {
  location.href = `C:/Projects/PropNSpace/property-single.html`;
}

function redirectAndSetGrid() {
  location.href = `C:/Projects/PropNSpace/property-grid.html`;
}

function setValues() {
  // alert('Reached!');
  let v = sessionStorage.getItem('redirectId');
  let amenArray = [];
  let attrArray = [];
  let singleAttrArray = [];
  // alert(v);
  getSingleProperty(v);
  console.log(response);
  setTimeout(function () {
    let parsedResponse = JSON.parse(response)[0];
    console.log(parsedResponse);
    // alert(parsedResponse);
    $(document).ready(function(){
      // $("#attributes").append(`<li class="d-flex justify-content-between"> <strong>Property ID:</strong> <span>${parsedResponse.id}</span> </li>`);
      attrArray = parsedResponse.attributes.split(',');
      for(let i = 0; i < attrArray.length; i++) {
        singleAttrArray = attrArray[i].split(':');
        $("#attributes").append(`<li class="d-flex justify-content-between"> <strong>${singleAttrArray[0]}:</strong> <span>${singleAttrArray[1]}</span> </li>`);
      }
    });
    document.getElementById('p_name').innerHTML = parsedResponse.name;
    document.getElementById('p_add').innerHTML = parsedResponse.address;
    document.getElementById('p_name_b').innerHTML = parsedResponse.name_b;
    document.getElementById('p_id').innerHTML = parsedResponse.id;
    document.getElementById('p_add_d').innerHTML = parsedResponse.address;
    document.getElementById('p_type').innerHTML = parsedResponse.type;
    document.getElementById('p_status').innerHTML = parsedResponse.status;
    // document.getElementById('p_area').innerHTML = parsedResponse.area;
    document.getElementById('p_des_1').innerHTML = parsedResponse.description;
    document.getElementById('gmap').src = `https://maps.google.com/maps?q=${parsedResponse.name}&output=embed`;
    document.getElementById('img1').src = `https://propnspace.s3.ap-south-1.amazonaws.com/${parsedResponse.image}`;
    document.getElementById('brochure').href = `https://propnspace.s3.ap-south-1.amazonaws.com/${parsedResponse.brochure}`;
    $('#property-single-carousel').owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      // navText: ['<i class="ion-ios-arrow-back" aria-hidden="true"></i>', '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 1,
        }
      }
    });
    $(document).ready(function(){
      amenArray = parsedResponse.amenities.split(',');
      for(let i = 0; i < amenArray.length; i++) {
        $("#p_amen").append(`<li>${amenArray[i]}</li>`);
      }
    });
  }, 1000);
}