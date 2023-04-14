(function ($) {
    $(function () {

        $('.ncard__tabs').on('click', 'a:not(.active)', function (e) {
            e.preventDefault();
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.ncard').find('.ncard__cont-block').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);
const swiper = new Swiper('.ncard__slider .swiper', {

    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: ".ncard__nav",
    }
});
$('.nheader__search').on('click', function (e) {
    e.preventDefault();
    $('.nheader-s').addClass('active');
});
$('.nheader-s__del').on('click', function (e) {
    e.preventDefault();
    $('.nheader-s').removeClass('active');
});
$('.ntop__burg').on('click', function (e) {
    e.preventDefault();
    $('.nmenu').toggleClass('active');
    $(this).toggleClass('active');
});

if ($(window).width() < 992) {
    $('.with-sub').on('click', function (e) {
        e.preventDefault();
        $(this).find('ul').toggleClass('active');
    });
}
$('.ncalc__select-top').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.ncalc__select').toggleClass('active');
});
$('.ncalc__select-drop a').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.ncalc__select').find('.ncalc__select-top').html($(this).html());
    $('.ncalc__select').removeClass('active');
    if ($(this).hasClass('input')) {
        $(this).closest('.ncalc__select').find('.ncalc__select-top').html('');
        $(this).closest('.ncalc__select').addClass('hidden');
    } else {
        $(this).closest('.ncalc__select').removeClass('hidden');
        if ($(this).hasClass('ncalc2_toinp')) {
            $(this).closest('.ncalc__select').find('input').attr('data-ru', $(this).attr('data-ru'));
            $(this).closest('.ncalc__select').find('input').attr('data-cf', $(this).attr('data-cf'));
            $(this).closest('.ncalc__select').find('input').attr('data-of', $(this).attr('data-of'));
            $(this).closest('.ncalc__select').find('input').val($(this).html());
        }
        if ($(this).hasClass('ncalc2_tocor')) {
            $(this).closest('.ncalc__select').find('.ncalc4').val($(this).attr('data-val'));
        }
    }
});
$('.ncalc4_2').on('input', function () {
    $(this).closest('.ncalc__select').find('.ncalc4').val($(this).val())
});
$('body').on('mousedown', function (e) {
    if (!(($(e.target).parents('.ncalc__select').length) || ($(e.target).hasClass('ncalc__select')))) {
        $('.ncalc__select').removeClass('active');
    }
});
$('.ncatalog__cats > a').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).next('.ncatalog__cats-drop').toggleClass('active');
});
$('.ncatalog__fil').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).next('.ncatalog__filters').toggleClass('active');
});
$('.ncalc__submit').on('click', function (e) {
    e.preventDefault();

    $('.nres1').html($('.ncalc1').val());
    $('.nres2').html($('.ncalc5').val());
    $('.nres3').html($('.ncalc3').val());
    $('.nres4').html($('.ncalc2').val());
    $('.nres5').html($('.ncalc4').val());
    $('.nres6').html($('.ncalc6').val());
    let nr_ru = $('.ncalc2').attr('data-ru');
    let nr_cf = $('.ncalc2').attr('data-cf');
    let nr_of = $('.ncalc2').attr('data-of');
    $('.nres_of').html(nr_of);
    let nr_per = Math.round($('.ncalc4').val() * 314) / 100;
    $('.nres_per').html(nr_per);
    let nr_af = Math.round($('.ncalc4').val() * $('.ncalc4').val() * 314) / 400;
    $('.nres_af').html(nr_af);
    let nr_nf = 0.7 * (nr_per * $('.ncalc6').val() + nr_of * nr_af);
    $('.nres_nf').html(nr_nf);
    $('.nres_k3').html(Math.round(nr_nf * 100 / $('.ncalc3').val()) / 100);
    $('.nres_h').html($('.ncalc1').val());
    $('.nres_3d').html((75 * $('.ncalc6').val()) / 100);
    $('.nres_e').html((40 * nr_af) / 100);
    let nr_nu = -0.37 / ($('.ncalc1').val() / $('.ncalc6').val()) + 1;
    $('.nres_nu').html(nr_nu);
    let nr_rg = 0.7 * nr_ru * ($('.ncalc4').val() * 1 + nr_cf * 1);
    console.log(nr_rg);
    let nr_m = (0.1 * nr_rg * $('.ncalc6').val() * $('.ncalc6').val() * $('.ncalc6').val() + $('.ncalc3').val() * (40 * nr_af) / 100) * nr_nu;
    let nr_nk3 = nr_m / $('.ncalc5').val();
    $('.nres_rg').html(nr_rg);
    $('.nres_m').html(nr_m);
    $('.nres_nk3').html(nr_nk3);
    if (nr_nk3 > 1) {
        $('.nres_res').html('ФУНДАМЕНТ ПРОХОДИТ ПО НЕСУЩЕЙ СПОСОБНОСТИ');
    } else {
        $('.nres_res').html('ФУНДАМЕНТ НЕ ПРОХОДИТ ПО НЕСУЩЕЙ СПОСОБНОСТИ');
    }
    $('.ncalc').hide();
    $('.nres').show();
});
$('.nres__back').on('click', function (e) {
    e.preventDefault();
    $('.ncalc').show();
    $('.nres').hide();
});
$('.nres__pech').on('click', function (e) {
    e.preventDefault();
    window.print();
});