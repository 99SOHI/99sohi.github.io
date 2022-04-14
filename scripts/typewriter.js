var app = document.getElementById('tw');

var typewriter = new Typewriter(app, {
    loop: true,
    autostart: true
});

typewriter.typeString('alwi')
    .pauseFor(1750)
    .deleteAll()
    .typeString('Alwi')
    .pauseFor(300)
    .deleteAll()
    .typeString('<strong>Alwi!</strong>')
    .pauseFor(3000)
    .start();