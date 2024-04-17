document.addEventListener('DOMContentLoaded', function() {
    if (document.body.id === "tinymce") {
      const elements = document.querySelectorAll('div.pre');
      elements.forEach(function(element) {
        element.style.fontFamily = "verdana, geneva, sans-serif";
      });
    }
  });
  