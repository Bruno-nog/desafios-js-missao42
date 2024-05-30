$(document).ready(function() {
    var cores = ['blue', 'red', 'brown'];
    var indiceAtual = 0;

    $('#mudar-cor').click(function() {
        $('body').css('background-color', cores[indiceAtual]);
        indiceAtual = (indiceAtual + 1) % cores.length;
    });
});