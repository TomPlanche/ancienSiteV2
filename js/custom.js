/* ========================================================================== */
/*                 MADE BY TOMPLANCHE (TOMPLANCHE@ICLOUD.COM)                 */
/* ========================================================================== */

// alert("This site is under construction, please be indulgent. :)");

document.getElementById("age").innerHTML = new Date().getFullYear() - 2002;
document.getElementById("annee").innerHTML = new Date().getFullYear();


document.getElementById("ptf1").onclick = function () {
    window.open("https://github.com/TomPlanche/game-tools-univ");
}

document.getElementById("ptf2").onclick = function () {
    window.open("https://github.com/TomPlanche/easyCpp20CompileAndRunMac");
}

document.getElementById("ptf3").onclick = function () {
    window.open("https://github.com/TomPlanche/usefullCppMath");
}

document.getElementById("ptf4").onclick = function () {
    window.open("https://github.com/TomPlanche/S1.01");
}


var phrase = [
    "Bayonne",
    "Hossegor",
    "Tarbes"
];

var part = 0;
var part_index = 0;
var intervalle_instance;

var imgBay = new Image();
var imgHoss = new Image();
var imgTar = new Image();

imgBay.src = "img/bayonne.png"
imgHoss.src = "img/hossegor.png"
imgTar.src = "img/tarbes.png"

imgBay.onload = function () {
    $("#accueil").css("background",
        "url('" + image.src + "')");
};

imgHoss.onload = function () {
    $("#accueil").css("background",
        "url('" + image.src + "')");
};

imgTar.onload = function () {
    $("#accueil").css("background",
        "url('" + image.src + "')");
};


elem = document.getElementById('change');
image_fond = document.getElementById('accueil');
virgule = document.getElementById('virgule');


function Ecrire() {
    var texte = phrase[part].substring(0, part_index + 1);
    elem.innerHTML = texte;
    part_index++;


    if (part === 0) {
        image_fond.setAttribute('style', 'display: table; width: 100%; height: 100vh; background: url(/img/bayonne.png) top center; background-size: cover; color: #fff;');
    } else if (part === 1) {
        image_fond.setAttribute('style', 'display: table; width: 100%; height: 100vh; background: url(/img/hossegor.png) top center; background-size: cover; color: #fff;');
    } else {
        image_fond.setAttribute('style', 'display: table; width: 100%; height: 100vh; background: url(/img/tarbes.png) top center; background-size: cover; color: #fff;');
    }



    if (texte === phrase[part]) {
        virgule.innerHTML = ",";
        clearInterval(intervalle_instance);
        setTimeout(function () {
            intervalle_instance = setInterval(Effacer, 25);
        }, 2000);
    }
};


function Effacer() {
    virgule.innerHTML = "";
    var texte = phrase[part].substring(0, part_index - 1);
    elem.innerHTML = texte;
    part_index--;

    if (texte === '') {
        clearInterval(intervalle_instance);

        if (part == (phrase.length - 1))
            part = 0;
        else
            part++;

        part_index = 0;

        setTimeout(function () {
            intervalle_instance = setInterval(Ecrire, 85);
        }, 600);
    }
};

intervalle_instance = setInterval(Ecrire, 85);






jQuery(document).ready(function ($) {

    new WOW().init();

    $('.nav-menu').superfish({
        animation: {
            opacity: 'show'
        },
        speed: 400
    });


    if ($('#nav-menu-container').length) {
        var $mobile_nav = $('#nav-menu-container').clone().prop({
            id: 'mobile-nav'
        });
        $mobile_nav.find('> ul').attr({
            'class': '',
            'id': ''
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
        $('body').append('<div id="mobile-body-overly"></div>');
        $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

        $(document).on('click', '.menu-has-children i', function (e) {
            $(this).next().toggleClass('menu-item-active');
            $(this).nextAll('ul').eq(0).slideToggle();
            $(this).toggleClass("fa-chevron-up fa-chevron-down");
        });

        $(document).on('click', '#mobile-nav-toggle', function (e) {
            $('body').toggleClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('#mobile-body-overly').toggle();
        });

        $(document).click(function (e) {
            var container = $("#mobile-nav, #mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                    $('#mobile-body-overly').fadeOut();
                }
            }
        });
    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
        $("#mobile-nav, #mobile-nav-toggle").hide();
    }

    $("#header").sticky({
        topSpacing: 0,
        zIndex: '50'
    });


    $('a[href*="#"]:not([href="#"])').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {

                var top_space = 0;

                if ($('#header').length) {
                    top_space = $('#header').outerHeight();
                }

                $('html, body').animate({
                    scrollTop: target.offset().top - top_space
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu').length) {
                    $('.nav-menu .menu-active').removeClass('menu-active');
                    $(this).closest('li').addClass('menu-active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                    $('#mobile-body-overly').fadeOut();
                }

                return false;
            }
        }
    });


    $(window).scroll(function () {

        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }

    });

    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

});


/* --------------------------------- BUTTON --------------------------------- */
var dark = false;

var bouton_theme = document.getElementById('bouton-theme');
var logo_iut = document.getElementById('logo-iut');


var fichier1 = document.getElementById('fich-1');
var fichier2 = document.getElementById('fich-2');
var fichier3 = document.getElementById('fich-3');
var fichier4 = document.getElementById('fich-4');
var fichier5 = document.getElementById('fich-5');
var fichier6 = document.getElementById('fich-6');
var fichier7 = document.getElementById('fich-7');
var fichier8 = document.getElementById('fich-8');

document.documentElement.setAttribute('data-theme', 'light');
localStorage.setItem('theme', 'light');

bouton_theme.onclick = function () {
    if (dark === true) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');

        logo_iut.setAttribute('src', 'img/logo_iutbpb_2018_h3.png');


        fichier1.setAttribute('src', "img/icones-fichiers/fichier-ai-b.png");
        fichier2.setAttribute('src', "img/icones-fichiers/fichier-sh-b.png");
        fichier3.setAttribute('src', "img/icones-fichiers/fichier-cpp-b.png");
        fichier4.setAttribute('src', "img/icones-fichiers/fichier-js-b.png");
        fichier5.setAttribute('src', "img/icones-fichiers/fichier-py-b.png");
        fichier6.setAttribute('src', "img/icones-fichiers/fichier-sql-b.png");
        fichier7.setAttribute('src', "img/icones-fichiers/fichier-swift-b.png");
        fichier8.setAttribute('src', "img/icones-fichiers/fichier-web-b.png")
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');

        logo_iut.setAttribute('src', 'img/logo_iutbpb_2018_h3-b.png');

        fichier1.setAttribute('src', "img/icones-fichiers/fichier-ai-n.png");
        fichier2.setAttribute('src', "img/icones-fichiers/fichier-sh-n.png");
        fichier3.setAttribute('src', "img/icones-fichiers/fichier-cpp-n.png");
        fichier4.setAttribute('src', "img/icones-fichiers/fichier-js-n.png");
        fichier5.setAttribute('src', "img/icones-fichiers/fichier-py-n.png");
        fichier6.setAttribute('src', "img/icones-fichiers/fichier-sql-n.png");
        fichier7.setAttribute('src', "img/icones-fichiers/fichier-swift-n.png");
        fichier8.setAttribute('src', "img/icones-fichiers/fichier-web-n.png");
    }

    dark = !dark;
};




function start() {

    // Add event "click" to "demo buttons"
    demoButtons = document.querySelectorAll('.js-modify');
    for (var i = 0; i < demoButtons.length; i++) {
        demoButtons[i].addEventListener('click', toggleEffect);
    }

    // Add event "click" to "save buttons"
    var saveButtons = document.querySelectorAll('.js-save');
    for (var i = 0; i < saveButtons.length; i++) {
        saveButtons[i].addEventListener('click', toggleActive);
    }

}

// Toggle "effect" classes
function toggleEffect() {
    var target = document.querySelector(this.dataset.target);
    target.dataset.effect = this.dataset.effect;

    for (var i = 0; i < demoButtons.length; i++) {
        demoButtons[i].classList.remove('active');
    }

    toggleActive.call(this);
}

// Toggle "active" class
function toggleActive() {
    this.classList.toggle('active');
}

// Invoke "start ()" function
window.addEventListener('load', start);




// set the starting position of the cursor outside of the screen
let clientX = -100;
let clientY = -100;
const innerCursor = document.querySelector(".cursor--small");

const initCursor = () => {
    // add listener to track the current mouse position
    document.addEventListener("mousemove", e => {
        clientX = e.clientX;
        clientY = e.clientY;
    });

    // transform the innerCursor to the current mouse position
    // use requestAnimationFrame() for smooth performance
    const render = () => {
        innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
        // if you are already using TweenMax in your project, you might as well
        // use TweenMax.set() instead
        // TweenMax.set(innerCursor, {
        //   x: clientX,
        //   y: clientY
        // });

        requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
};

initCursor();

let lastX = 0;
let lastY = 0;
let isStuck = false;
let showCursor = false;
let group, stuckX, stuckY, fillOuterCursor;

const initCanvas = () => {
    const canvas = document.querySelector(".cursor--canvas");
    const shapeBounds = {
        width: 75,
        height: 75
    };
    paper.setup(canvas);
    const strokeColor = "rgb(43, 177, 255)";
    const strokeWidth = 3;
    const segments = 8;
    const radius = 50;

    // we'll need these later for the noisy circle
    const noiseScale = 50; // speed
    const noiseRange = 10; // range of distortion
    let isNoisy = false; // state

    // the base shape for the noisy circle
    const polygon = new paper.Path.RegularPolygon(
        new paper.Point(0, 0),
        segments,
        radius
    );
    polygon.strokeColor = strokeColor;
    polygon.strokeWidth = strokeWidth;
    polygon.smooth();
    group = new paper.Group([polygon]);
    group.applyMatrix = false;

    const noiseObjects = polygon.segments.map(() => new SimplexNoise());
    let bigCoordinates = [];

    // function for linear interpolation of values
    const lerp = (a, b, n) => {
        return (1 - n) * a + n * b;
    };

    // function to map a value from one range to another range
    const map = (value, in_min, in_max, out_min, out_max) => {
        return (
            ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
        );
    };

    // the draw loop of Paper.js
    // (60fps with requestAnimationFrame under the hood)
    paper.view.onFrame = event => {
        // using linear interpolation, the circle will move 0.2 (20%)
        // of the distance between its current position and the mouse
        // coordinates per Frame
        if (!isStuck) {
            // move circle around normally
            lastX = lerp(lastX, clientX, 0.2);
            lastY = lerp(lastY, clientY, 0.2);
            group.position = new paper.Point(lastX, lastY);
        } else if (isStuck) {
            // fixed position on a nav item
            lastX = lerp(lastX, stuckX, 0.2);
            lastY = lerp(lastY, stuckY, 0.2);
            group.position = new paper.Point(lastX, lastY);
        }

        if (isStuck && polygon.bounds.width < shapeBounds.width) {
            // scale up the shape 
            polygon.scale(1.08);
        } else if (!isStuck && polygon.bounds.width > 75) {
            // remove noise
            if (isNoisy) {
                polygon.segments.forEach((segment, i) => {
                    segment.point.set(bigCoordinates[i][0], bigCoordinates[i][1]);
                });
                isNoisy = false;
                bigCoordinates = [];
            }
            // scale down the shape
            const scaleDown = 0.92;
            polygon.scale(scaleDown);
        }

        // while stuck and big, apply simplex noise
        if (isStuck && polygon.bounds.width >= shapeBounds.width) {
            isNoisy = true;
            // first get coordinates of large circle
            if (bigCoordinates.length === 0) {
                polygon.segments.forEach((segment, i) => {
                    bigCoordinates[i] = [segment.point.x, segment.point.y];
                });
            }

            // loop over all points of the polygon
            polygon.segments.forEach((segment, i) => {

                // get new noise value
                // we divide event.count by noiseScale to get a very smooth value
                const noiseX = noiseObjects[i].noise2D(event.count / noiseScale, 0);
                const noiseY = noiseObjects[i].noise2D(event.count / noiseScale, 1);

                // map the noise value to our defined range
                const distortionX = map(noiseX, -1, 1, -noiseRange, noiseRange);
                const distortionY = map(noiseY, -1, 1, -noiseRange, noiseRange);

                // apply distortion to coordinates
                const newX = bigCoordinates[i][0] + distortionX;
                const newY = bigCoordinates[i][1] + distortionY;

                // set new (noisy) coodrindate of point
                segment.point.set(newX, newY);
            });

        }
        polygon.smooth();
    };
}

initCanvas();

const initHovers = () => {

    // find the center of the link element and set stuckX and stuckY
    // these are needed to set the position of the noisy circle
    const handleMouseEnter = e => {
        const navItem = e.currentTarget;
        const navItemBox = navItem.getBoundingClientRect();
        stuckX = Math.round(navItemBox.left + navItemBox.width / 2);
        stuckY = Math.round(navItemBox.top + navItemBox.height / 2);
        isStuck = true;
    };

    // reset isStuck on mouseLeave
    const handleMouseLeave = () => {
        isStuck = false;
    };

    // add event listeners to all items
    const linkItems = document.querySelectorAll(".link");
    linkItems.forEach(item => {
        item.addEventListener("mouseenter", handleMouseEnter);
        item.addEventListener("mouseleave", handleMouseLeave);
    });
};

initHovers();