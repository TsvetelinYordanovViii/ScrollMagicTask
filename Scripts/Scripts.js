const geeseController = new ScrollMagic.Controller();

/*const headerPin = new ScrollMagic.Scene({
    triggerElement: '.geese-navigation',
    triggerHook: 0.3
})
    .setPin('.geese-navigation', { pushFollowers: false })
    .addTo(geeseController);*/

const headerParallax = new ScrollMagic.Scene(
    {
        triggerElement: '.geese-header',
        triggerHook: 0,
        duration: '100%'
    })
    .setTween(TweenMax.from('.header-background', 1, { y: '-25%', ease: Power0.easeNone }))
    .addIndicators()
    .addTo(geeseController);


let alternatingDirection = 1;
let verticalOrHorizontalDirection = 0;
$('.geese-image-container').each((k, container) => {
    if (verticalOrHorizontalDirection === 0) {
        new ScrollMagic.Scene({
            triggerElement: container,
            triggerHook: .8,
            duration: '100%'
        })
            .setTween(TweenMax.from(container, 1, {
                x: (alternatingDirection * (-15)) + '%',
                opacity: 0,
                ease: Power0.ease
            })).addTo(geeseController)
        verticalOrHorizontalDirection = 1;
    }
    else {
        new ScrollMagic.Scene({
            triggerElement: container,
            triggerHook: .8,
            duration: '100%'
        })
            .setTween(TweenMax.from(container, 1, {
                y: alternatingDirection * (-15) + '%',
                opacity: 0,
                ease: Power0.ease
            })).addTo(geeseController)
        verticalOrHorizontalDirection = 0;
        alternatingDirection = alternatingDirection / -1;
    }
});