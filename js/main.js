/**
 * Created by the, rogue Pixxel on 07/26/2017.
 */
$(document).ready(function(){

    var tl = new TimelineMax();

    var owl = $('.owl-carousel');

    owl.owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false
    });
    function tween() {
        var slide = $('.owl.item.active>.slide>.text');
        console.log(this);
        TweenMax.set(slide.children(), 1, {opacity: 0, y: 80}, {opacity: 1, y:0}, 0.2)
    }
    owl.on('changed.owl.carousel',
        function (e){
            tl.kill();
            tween(e)
        }
    );
});