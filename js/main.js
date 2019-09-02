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

    login_welcome.html('<span  class="name-color"><strong>Bienvenido, ' + form_name + '</strong></span> <hr>')
    logout.append('<hr> <a href="#" id="logout">Cerrar sesión</a>')

    $('#login').hide()

    $('#logout').click(function () {
      localStorage.clear()
      location.reload()
    })
  }

  // Posts
  // if (window.location.href.indexOf('index') > -1) {
    var posts = [
      {
        image: 'imagenes/article1image.jpg',
        title: 'Título del post 1',
        date: 'Publicado el día: ' + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra, diam eu cursus aliquam, metus purus tincidunt quam, eu tempor nulla lectus sit amet arcu.Donec diam erat, pharetra ut pellentesque quis, ultrices sed leo.Sed est nibh, egestas vel sollicitudin sit amet, viverra quis dui.Quisque tristique      gravida feugiat.Ut facilisis turpis non ante ornare, eget interdum risus facilisis.Sed convallis at purus      in sagittis.Nunc maximus augue sit amet eros fringilla porttitor.Quisque ac varius enim.Etiam et magna      est.In volutpat quam pharetra, scelerisque nisl egestas, auctor est.Nam suscipit commodo arcu vitae      molestie.</p> <p>Donec id massa tempor, euismod augue semper, viverra enim. Cras ac diam urna. Donec molestie libero vitae dui maximus, sit amet viverra neque ornare. Aenean eu molestie lorem. Aliquam tellus ligula, dignissim et diam vitae, congue auctor dolor. Praesent gravida commodo turpis, elementum dignissim arcu vestibulum nec. Integer finibus risus vitae magna eleifend, a maximus lorem vestibulum. Pellentesque laoreet tortor ac aliquam bibendum. Nulla libero dolor, luctus sed quam vel, sodales pellentesque tellus. Donec vitae velit augue. Mauris bibendum fermentum mi, vel aliquam tortor pellentesque vitae. Proin vel neque eget nulla scelerisque aliquam ut eu ligula. Morbi non tempor ipsum. Curabitur varius lorem a diam fringilla hendrerit.</p>'
      },
      {
        image: 'imagenes/article2image.png',
        title: 'Título del post 2',
        date: 'Publicado el día: ' + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra, diam eu cursus aliquam, metus purus tincidunt quam, eu tempor nulla lectus sit amet arcu.Donec diam erat, pharetra ut pellentesque quis, ultrices sed leo.Sed est nibh, egestas vel sollicitudin sit amet, viverra quis dui.Quisque tristique      gravida feugiat.Ut facilisis turpis non ante ornare, eget interdum risus facilisis.Sed convallis at purus      in sagittis.Nunc maximus augue sit amet eros fringilla porttitor.Quisque ac varius enim.Etiam et magna      est.In volutpat quam pharetra, scelerisque nisl egestas, auctor est.Nam suscipit commodo arcu vitae      molestie.</p> <p>Donec id massa tempor, euismod augue semper, viverra enim. Cras ac diam urna. Donec molestie libero vitae dui maximus, sit amet viverra neque ornare. Aenean eu molestie lorem. Aliquam tellus ligula, dignissim et diam vitae, congue auctor dolor. Praesent gravida commodo turpis, elementum dignissim arcu vestibulum nec. Integer finibus risus vitae magna eleifend, a maximus lorem vestibulum. Pellentesque laoreet tortor ac aliquam bibendum. Nulla libero dolor, luctus sed quam vel, sodales pellentesque tellus. Donec vitae velit augue. Mauris bibendum fermentum mi, vel aliquam tortor pellentesque vitae. Proin vel neque eget nulla scelerisque aliquam ut eu ligula. Morbi non tempor ipsum. Curabitur varius lorem a diam fringilla hendrerit.</p>'
      },
      {
        image: 'imagenes/jQueryLogo2.1000x250.png',
        title: 'Título del post 3',
        date: 'Publicado el día: ' + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra, diam eu cursus aliquam, metus purus tincidunt quam, eu tempor nulla lectus sit amet arcu.Donec diam erat, pharetra ut pellentesque quis, ultrices sed leo.Sed est nibh, egestas vel sollicitudin sit amet, viverra quis dui.Quisque tristique      gravida feugiat.Ut facilisis turpis non ante ornare, eget interdum risus facilisis.Sed convallis at purus      in sagittis.Nunc maximus augue sit amet eros fringilla porttitor.Quisque ac varius enim.Etiam et magna      est.In volutpat quam pharetra, scelerisque nisl egestas, auctor est.Nam suscipit commodo arcu vitae      molestie.</p> <p>Donec id massa tempor, euismod augue semper, viverra enim. Cras ac diam urna. Donec molestie libero vitae dui maximus, sit amet viverra neque ornare. Aenean eu molestie lorem. Aliquam tellus ligula, dignissim et diam vitae, congue auctor dolor. Praesent gravida commodo turpis, elementum dignissim arcu vestibulum nec. Integer finibus risus vitae magna eleifend, a maximus lorem vestibulum. Pellentesque laoreet tortor ac aliquam bibendum. Nulla libero dolor, luctus sed quam vel, sodales pellentesque tellus. Donec vitae velit augue. Mauris bibendum fermentum mi, vel aliquam tortor pellentesque vitae. Proin vel neque eget nulla scelerisque aliquam ut eu ligula. Morbi non tempor ipsum. Curabitur varius lorem a diam fringilla hendrerit.</p>'
      },
      {
        image: 'imagenes/jQueryLogo4.1000x250.png',
        title: 'Título del post 4',
        date: 'Publicado el día: ' + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra, diam eu cursus aliquam, metus purus tincidunt quam, eu tempor nulla lectus sit amet arcu.Donec diam erat, pharetra ut pellentesque quis, ultrices sed leo.Sed est nibh, egestas vel sollicitudin sit amet, viverra quis dui.Quisque tristique      gravida feugiat.Ut facilisis turpis non ante ornare, eget interdum risus facilisis.Sed convallis at purus      in sagittis.Nunc maximus augue sit amet eros fringilla porttitor.Quisque ac varius enim.Etiam et magna      est.In volutpat quam pharetra, scelerisque nisl egestas, auctor est.Nam suscipit commodo arcu vitae      molestie.</p> <p>Donec id massa tempor, euismod augue semper, viverra enim. Cras ac diam urna. Donec molestie libero vitae dui maximus, sit amet viverra neque ornare. Aenean eu molestie lorem. Aliquam tellus ligula, dignissim et diam vitae, congue auctor dolor. Praesent gravida commodo turpis, elementum dignissim arcu vestibulum nec. Integer finibus risus vitae magna eleifend, a maximus lorem vestibulum. Pellentesque laoreet tortor ac aliquam bibendum. Nulla libero dolor, luctus sed quam vel, sodales pellentesque tellus. Donec vitae velit augue. Mauris bibendum fermentum mi, vel aliquam tortor pellentesque vitae. Proin vel neque eget nulla scelerisque aliquam ut eu ligula. Morbi non tempor ipsum. Curabitur varius lorem a diam fringilla hendrerit.</p>'
      },
      {
        image: 'imagenes/jQueryLogo3.1000x250.png',
        title: 'Título del post 5',
        date: 'Publicado el día: ' + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra, diam eu cursus aliquam, metus purus tincidunt quam, eu tempor nulla lectus sit amet arcu.Donec diam erat, pharetra ut pellentesque quis, ultrices sed leo.Sed est nibh, egestas vel sollicitudin sit amet, viverra quis dui.Quisque tristique      gravida feugiat.Ut facilisis turpis non ante ornare, eget interdum risus facilisis.Sed convallis at purus      in sagittis.Nunc maximus augue sit amet eros fringilla porttitor.Quisque ac varius enim.Etiam et magna      est.In volutpat quam pharetra, scelerisque nisl egestas, auctor est.Nam suscipit commodo arcu vitae      molestie.</p> <p>Donec id massa tempor, euismod augue semper, viverra enim. Cras ac diam urna. Donec molestie libero vitae dui maximus, sit amet viverra neque ornare. Aenean eu molestie lorem. Aliquam tellus ligula, dignissim et diam vitae, congue auctor dolor. Praesent gravida commodo turpis, elementum dignissim arcu vestibulum nec. Integer finibus risus vitae magna eleifend, a maximus lorem vestibulum. Pellentesque laoreet tortor ac aliquam bibendum. Nulla libero dolor, luctus sed quam vel, sodales pellentesque tellus. Donec vitae velit augue. Mauris bibendum fermentum mi, vel aliquam tortor pellentesque vitae. Proin vel neque eget nulla scelerisque aliquam ut eu ligula. Morbi non tempor ipsum. Curabitur varius lorem a diam fringilla hendrerit.</p>'
      },
    ];

    posts.forEach((item, index) => {
      var post = `
      <article class="post">
        <div class="centrado">
          <img src="${item.image}" alt="Imagen del post">
        </div>
          <h2>${item.title}</h2>
          <span class="date">${item.date}</span>
          <p>
            ${item.content}
          </p>
        <div class="section-title-divider"></div>
      </article>
      `;

      $('#posts').append(post)

    })
  // }

  // Selector de tema
  var theme = $('#theme')

  $('#gray-theme').click(function () {
    theme.attr('href', 'css/gray-theme.css')
  })

  $('#yellow-theme').click(function () {
    theme.attr('href', 'css/yellow-theme.css')
  })

  $('#pink-theme').click(function () {
    theme.attr('href', 'css/pink-theme.css')
  })

  $('#green-theme').click(function () {
    theme.attr('href', 'css/green-theme.css')
  })

  $('#black-theme').click(function () {
    theme.attr('href', 'css/black-theme.css')
  })



  // Back to top button
  $(window).scroll(function () {

    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }

  });

  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
  });

});


