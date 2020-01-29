// In una sottocartella handlebars fate una pagina semplice con un input e un pulsante e inviate un messaggio a cui segue una risposta come avete fatto per boolzapp, usando però handlebars.
$(document).ready(function () {
  $('.send').click(function () {
    var textNew = $('.send-text').val();
    var data = new Date ();
    var hours = data.getHours();
    var minutes = data.getMinutes();
    var timeNew = ' sono le' + ' ' + hours + ':' + minutes;

    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);

    var context = {
      'text': textNew,
      'time': timeNew
      };
      var html = template(context);

      $('#app').append(html);
  })

});
