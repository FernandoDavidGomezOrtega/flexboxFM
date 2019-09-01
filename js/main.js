$(document).ready(function () {

  // Slider
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: false,
    slideWidth: 1000,
    adaptiveHeight: true,
    auto: true,
    pause: 3000,
    keyboardEnabled: true
    // autoStart: true

    // responsive: true
  });

    // Reloj
    // if (window.location.href.indexOf('index') > -1) {
      var reloj = moment().format('h:mm:ss a')
      $('#reloj').html(reloj)
  
      setInterval(function () {
        var reloj = moment().format('h:mm a')
  
        $('#reloj').html(reloj)
      }, 1000)
  
    // }

      // Login falso
  $('#login form').submit(function () {
    var form_name = $('#form_name').val()

    localStorage.setItem('form_name', form_name)
  })

  var form_name = localStorage.getItem('form_name')

  if (form_name != null && form_name != undefined) {
    var login_welcome = $('#login-welcome')
    var logout = $('#logout')

    login_welcome.html('<span>Bienvenido, ' + form_name + '</span> <hr>')
    logout.append('<hr> <a href="#" id="logout">Cerrar sesión</a>')

    $('#login').hide()

    $('#logout').click(function () {
      localStorage.clear()
      location.reload()
    })
  }
 
})