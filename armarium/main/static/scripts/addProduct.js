$(document).ready(function () {
function setupPost() {
  $.ajaxSetup({
     beforeSend: function(xhr, settings) {
         function getCookie(name) {
             var cookieValue = null;
             if (document.cookie && document.cookie != '') {
                 var cookies = document.cookie.split(';');
                 for (var i = 0; i < cookies.length; i++) {
                     var cookie = jQuery.trim(cookies[i]);
                     // Does this cookie string begin with the name we want?
                     if (cookie.substring(0, name.length + 1) == (name + '=')) {
                         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                         break;
                     }
                 }
             }
             return cookieValue;
         }
         if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
             // Only send the token to relative URLs i.e. locally.
             xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
         }
     }
  });
}

  console.info("ADDPRODUCTS TEMPLATE");
  Dropzone.options.addImageDropzone = {
    autoProcessQueue : false,
    paramName: "file",
    maxFiles: 5,
    init: function () {
      this.on("addedfile", function() {
        if (this.files[5]!=null){
          this.removeFile(this.files[5]);
        }
      });
    },
    accept : function(file, done) {

    }
  }

  $("#btn-submit").click(function (e) {
    setupPost();
    e.preventDefault();
    data = {};
    data["nombre"] = $("#nombre").val();
    data["cantidad"] = $("#cantidad").val();
    data["shortDescription"] = $("#shortDescription").val();


;

    $.ajax({
      type: "POST",
      url: "/addProduct/",
      data: data
    })
      .done(function( msg ) {
        alert( "Data: " + msg );
      });

  })
});
