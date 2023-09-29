var sectionHeight = function() {
  var total    = $(window).height(),
      $section = $('section').css('height','auto');

  if ($section.outerHeight(true) < total) {
    var margin = $section.outerHeight(true) - $section.height();
    // $section.height(total - margin - 20); // TODO: Lower space fix? 
    $section.height(total - margin); 
  } else {
    $section.css('height','auto');
  }
}

$(window).resize(sectionHeight);

$(function() {

  // TODO: $("section h1, section h2, section h3").each... Folded H3 sub-sections?
  $("section h1, section h2").each(function(){

    const $this = $(this);
    const thisId = $this.attr("id");

    if ( thisId !== "table-of-contents" && thisId !== "wdx-180" ){

      $("nav#side-toc ul")
        .append("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + $this.text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'') + "'>" + $this.text() + "</a></li>");
      
      $this
        .attr("id",$this.text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,''));
    
      $("nav#side-toc ul li:first-child a")
        .parent()
        .addClass("active");

    }

  });

  $("nav ul li").on("click", "a", function(event) {

    const $this = $(this);

    var position = $($this.attr("href")).offset().top - 190;
    $("html, body").animate({scrollTop: position}, 400);
    $("nav ul li a").parent().removeClass("active");
    $this.parent().addClass("active");
    event.preventDefault();

  });

  sectionHeight();

  $('img').on('load', sectionHeight);

  // Back/Forward Buttons:
  $("#ctrl-forward").on("click", function(){
    history.forward();
  });
  $("#ctrl-back").on("click", function(){
    history.back();
  });

});
