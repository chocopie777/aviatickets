// js из node_moduless
import $ from "jquery";
import 'slick-carousel/slick/slick.js';

$('.review-slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
});