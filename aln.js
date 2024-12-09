$(document).ready(() => {

    //configurando o menu
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    // // Fecha o menu ao clicar em um botão/link dentro dele
     $('#nav-menu a').click(() => {
        $('#nav-menu').removeClass('active');
        $('#hamburger-menu').removeClass('active');
     });

    // Fecha o menu ao clicar fora dele
    $(document).click((e) => {
        if (!$(e.target).closest('#hamburger-menu, #nav-menu').length) {
            $('#nav-menu').removeClass('active');
            $('#hamburger-menu').removeClass('active');
        }
    });

    // configurando owl carousel

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav:true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })

    $('#top-movies-slide').owlCarousel({
        items: 2,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            500: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })

    $('.movies-slide').owlCarousel({
        items: 2,
        dots: false,
        loop: true,
        nav:true,
        navText: navText,
        margin: 15,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })

    $(".abreopop").each((index, btn) => {
        $(btn).click(() => {
            $(".popup").eq(index).addClass("abre");
        });
    });
    
    $(".fechaopop").each((index, btn) => {
        $(btn).click(() => {
            $(".popup").eq(index).removeClass("abre");
        });
    });    

})

