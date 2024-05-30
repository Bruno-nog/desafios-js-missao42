$(document).ready(function() {
    var cores = ['red', 'green', 'blue'];
    var indiceCorAtual = 0;
    var $balao = $('#balloon');

    function mudarCor() {
        indiceCorAtual = (indiceCorAtual + 1) % cores.length;
        $balao.css('background-color', cores[indiceCorAtual]);
    }

    function mudarCorInversa() {
        indiceCorAtual = (indiceCorAtual - 1 + cores.length) % cores.length;
        $balao.css('background-color', cores[indiceCorAtual]);
    }

    $balao.click(function() {
        var tamanhoAtual = parseInt($balao.css('width')) || 200;
        var novoTamanho = tamanhoAtual + 10;

        if (novoTamanho > 420) {
            novoTamanho = 200;
            $balao.css('background-color', 'red');
            indiceCorAtual = 0;
        } else {
            mudarCor();
        }

        $balao.css({
            'width': novoTamanho + 'px',
            'height': novoTamanho + 'px'
        });
    });

    $balao.mouseout(function() {
        var tamanhoAtual = parseInt($balao.css('width')) || 200;
        var novoTamanho = tamanhoAtual - 5;

        if (novoTamanho < 200) {
            novoTamanho = 200;
        } else {
            mudarCorInversa();
        }

        $balao.css({
            'width': novoTamanho + 'px',
            'height': novoTamanho + 'px'
        });
    });
});