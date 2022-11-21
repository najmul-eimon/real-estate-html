$(function(){
  "use strick";

  /*======================= Filter toggle ========================*/
  $("#moreFilters").on("click", function () {
    $(".bottom-content").slideToggle(600);
  });

  /*======================= Filter select dropdown ========================*/
  $(document).ready(function() {
    $('.filter-select').select2();
  });

  /*======================= Filter range for price ========================*/
  $( "#price-slider-range" ).slider({
    range: true,
    min: 0,
    max: 1000000,
    values: [ 10000, 800000 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " to $" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "$ " + $( "#price-slider-range" ).slider( "values", 0 ) +
    " to $ " + $( "#price-slider-range" ).slider( "values", 1 ) );

  /*======================= Filter range for area ========================*/
  $( "#area-slider-range" ).slider({
    range: true,
    min: 0,
    max: 10000,
    values: [ 1000, 8000 ],
    slide: function( event, ui ) {
      $( "#area" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });
  $( "#area" ).val( $( "#area-slider-range" ).slider( "values", 0 ) +
    " to " + $( "#area-slider-range" ).slider( "values", 1 ) );

  /*======================= Counter up ========================*/
  var counted = 0;
  $(window).scroll(function() {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
      $('.counter').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },
          {
            duration: 2000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }
          });
      });
      counted = 1;
    }
  });


  /*======================= latest properties tab filtering ========================*/

  $('.filter-btn-list button').on('click', function (event) {
    const parentName = $(this).parent().attr("class");

    if(parentName !== 'dropdown'){
      $(this).parent().siblings('.active').removeClass('active');
      $(this).parent().addClass('active');
      $('.dropdown-item').parent().siblings('.active').removeClass('active');
    }

    $('.filter-btn-list .dropdown-item').on('click', function(){
      $(this).parent().parent().parent().siblings('.active').removeClass('active');
      $(this).parent().addClass('active');
    });
    
  });

  var gridContainer = document.querySelector('#property-grid-container');
  var listContainer = document.querySelector('#property-list-container');
  var mixer1 = mixitup(gridContainer);
  var mixer2 = mixitup(listContainer);

/*======================= latest properties video popup ========================*/
  $('.video-popup').magnificPopup({
    type: 'iframe'
    // other options
  });

});


