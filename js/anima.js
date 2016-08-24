



//Funcionalidades para abrir os itens que estõ no final da página a criança.
//a função deve destacar a foto clicada e aparecer um texto ao lado.

function carregaFotoItem1() {
    //posição inicial
    $("#item1 .img-clicada").css({'z-index':'100'});
    $("#item2 .itens").css({'z-index':'50'});
    $("#item3 .itens").css({'z-index':'50'});

    $("#item1 .texto-item").css({'left':'-200%'});

    $(".camada-cinza").animate({'opacity':'show'},300);
    $("#item1 .img-clicada").css({'transform':'scale(1.04, 1.04)', '-ms-transform':'scale(1.04, 1.04)', '-webkit-transform':'scale(1.04, 1.04)', 'bottom':'0'});
    $("#item1 .img-clicada").animate({'opacity':'show'},300);


    $("#item1 .texto-item").css({'z-index':'90'});
    $("#item1 .texto-item").delay(700).animate({'left':'100%'},800);
}

function carregaFotoItem2() {
    $("#item2 .img-clicada").css({'z-index':'100'});
    $("#item1 .itens").css({'z-index':'50'});
    $("#item3 .itens").css({'z-index':'50'});

    $("#item2 .texto-item").css({'left':'-200%'});

    $(".camada-cinza").animate({'opacity':'show'},300);
    $("#item2 .img-clicada").css({'transform':'scale(1.04, 1.04)', '-ms-transform':'scale(1.04, 1.04)', '-webkit-transform':'scale(1.04, 1.04)', 'bottom':'0'});
    $("#item2 .img-clicada").animate({'opacity':'show'},300);
    $("#item2 .img-clicada").delay(300).animate({'left':'-100%'},300);

    $("#item2 .texto-item").delay(800).animate({'z-index':'90'},50);
    $("#item2 .texto-item").delay(700).animate({'left':'0%'},800);
}

function carregaFotoItem3() {
    $("#item3 .img-clicada").css({'z-index':'100'});
    $("#item1 .itens").css({'z-index':'50'});
    $("#item2 .itens").css({'z-index':'50'});

    $("#item3 .texto-item").css({'left':'-200%'});

    $(".camada-cinza").animate({'opacity':'show'},300);
    $("#item3 .img-clicada").css({'transform':'scale(1.04, 1.04)', '-ms-transform':'scale(1.04, 1.04)', '-webkit-transform':'scale(1.04, 1.04)', 'bottom':'0'});
    $("#item3 .img-clicada").animate({'opacity':'show'},300);
    $("#item3 .img-clicada").delay(300).animate({'left':'-200%'},300);

    $("#item3 .texto-item").css({'left':'-300%'});
    $("#item3 .texto-item").delay(800).animate({'z-index':'90'},50);
    $("#item3 .texto-item").delay(700).animate({'left':'-100%'},800);
}

function fechaFotoItem(id) {
    if (id == '1') {
        //item 1
        $("#item1 .texto-item").animate({'left':'-200%'},800);
        $("#item1 .texto-item").delay(800).animate({'z-index':'40'},50);
        $("#item1 .img-clicada").delay(700).animate({'opacity':'hide'},300);
        $(".camada-cinza").delay(800).animate({'opacity':'hide'},300);

        $("#item1 .texto-item").delay(10).animate({'display':'block', 'position':'relative', 'border':'none', 'left':'0'},10);
    }


    if (id == '2') {
        //item 2
        $("#item2 .texto-item").animate({'left':'-300%'},800);
        $("#item2 .img-clicada").delay(800).animate({'left':'0'},300);

        $("#item2 .texto-item").delay(1100).animate({'z-index':'40'},50);
        $("#item2 .img-clicada").delay(100).animate({'opacity':'hide'},300);
        $(".camada-cinza").delay(1100).animate({'opacity':'hide'},300);

        $("#item2 .texto-item").delay(10).animate({'display':'block', 'position':'relative', 'border':'none', 'left':'0'},10);
    }


    if (id == '3') {
        //item 2
        $("#item3 .texto-item").animate({'left':'-300%'},800);
        $("#item3 .img-clicada").delay(800).animate({'left':'0'},300);

        $("#item3 .texto-item").delay(10).animate({'z-index':'40'},50);
        $("#item3 .img-clicada").delay(100).animate({'opacity':'hide'},300);
        $(".camada-cinza").delay(1100).animate({'opacity':'hide'},300);

        $("#item3 .texto-item").delay(10).animate({'display':'block', 'position':'relative', 'border':'none', 'left':'0'},10);
    }        
}
