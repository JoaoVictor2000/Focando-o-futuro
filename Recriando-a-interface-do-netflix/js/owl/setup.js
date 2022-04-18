$('.owl-carousel').owlCarousel({
    loop:true,/*Quer fazer um efeito de loop? Sim */
    margin:10,/*Margem entre uma div e outra*/
    nav:false, /*Os botoes de navegaçôes*/
    responsive:{//tela se adaota 
        0:{
            items:1
        },
        600:{// tres itens por vz

            items:3
        },
        1000:{// se a tela ter mais de  1000pixel, fica 5 itens por vez
            items:5
        }
    }
})