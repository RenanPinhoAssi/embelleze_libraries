
var a = "https://embelleze.generalwebsolutions.com.br/api";
var check_all_images_complete = function (callback) {
  // We are listening for lazy images, when all images have a real size on DOM, we fire our callback function
  let images_container = $("#content-viewer").find("img");
  let number_images = images_container.length;
  let progress = 0;

  $(images_container).one("load", function () {
    progress++;
    if (progress >= number_images) {
      setTimeout(function () {
        callback();
        already_loaded = true;
      }, 1000);
    }
  });
};

var initial_setup = function () {
  // Maybe we want to execute some custom scripts
  $('[data-toggle="popover"]').popover();
};

var libraries_starter = function () {
  // We should start our libraries here
    console.log("Loading Parallax...");
    $.ajax({
      type: "GET",
      url: a + "/parallax/get_parallax",
      contentType: "application/json",
      success: function (data) {
        console.log("Parallax loaded!");
        refresh_objects_listeners(data);
        AOS.init();
      },
      error: function () {
        console.log("Parallax Could not be loaded...");
      },
    });

};

var load_page = function (url, callback) {
  $("#content-viewer").load(url, function () {
    initial_setup();
    check_all_images_complete(libraries_starter);
    callback();
    $("html, body").animate({ scrollTop: 0 }, 500);
    // START PARTICLES
    try {
      particlesJS.load(
        "particles-js",
        "assets/effects/particles.json",
        function () {
          console.log("callback - particles.js config loaded");
        }
      );
    } catch (e) {}
  });
};

var scrollToLink = function (id) {
  let target = $(id);
  let offset = $("#menu-header").height() + 20;
  console.log(target.hasClass("aos-animate"));
  let extra_offset = target.hasClass("aos-animate") ? 0 : 100;
  let target_position = target.offset().top - offset - extra_offset;
  console.log(target.height());
  console.log(target.offset().top);
  $("html, body").animate({ scrollTop: target_position }, 500);
};
