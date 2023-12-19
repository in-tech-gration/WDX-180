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

  function debugUpcomingWeeklyLinks(){

    // DEBUG SOON TO BE RELEASED WEEKS: Shift+MetaKey+Click
    $(document.body).on("click", e => {
      try {
        if (e.shiftKey && e.metaKey) {
          const match = e.target.href.match(/#week(\d{2})\/.*/);
          if (match) {
            e.target.href = e.target.href.replace(/#week(\d{2})\/.*/, `week${match[1]}/`);
          }
        }
        return true;
      } catch (e) {
        console.log(e);
      }
    });    

  }

  // TODO: $("section h1, section h2, section h3").each... Folded H3 sub-sections?
  $("section h1, section h2:not(.week-controls__previous_week, .week-controls__next_week)").each(function(){

    const $this = $(this);
    const thisId = $this.attr("id");
    
    if ( thisId !== "table-of-contents" && thisId !== "wdx-180" ){

      const link = $this.text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'');
      let innerText = $this.text().trim();

      if ( $this.find("span").hasClass("summary-day") ){
        innerText = innerText.replace(/Week\s?\d{1,2}\s-\s?/, "");
      }

      $("nav#side-toc ul")
        .append(
          `
            <li class="tag-${this.nodeName.toLowerCase()}">
              <a href="#${link}">
                ${innerText}
              </a>
            </li>
          `
        );

      $this
        .attr("id",$this.text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,''));
    
      $("nav#side-toc ul li:first-child a")
        .parent()
        .addClass("active");

    }

  });

  $("nav ul li").on("click", "a", function(event) {

    const $this = $(this);

    const position = $($this.attr("href")).offset().top - 190;
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

  // DEBUG SOON TO BE RELEASED WEEKS: Shift+MetaKey+Click
  debugUpcomingWeeklyLinks();

  const themeMode = localStorage.getItem("wdx-theme");
  if ( themeMode === "dark-theme" ){
    $(document.body).addClass("dark-theme");
    $("#theme-toggler #toggle").prop("checked", true);
  }

  $("#theme-toggler #toggle").on("change", e =>{

    $(document.body).toggleClass("dark-theme");

    if ( localStorage.getItem("wdx-theme") === "dark-theme" ){
      localStorage.removeItem("wdx-theme");
    } else {
      localStorage.setItem("wdx-theme", "dark-theme");
    }

  });

});
