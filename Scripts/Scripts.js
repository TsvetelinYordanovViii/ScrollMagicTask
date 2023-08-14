const geeseController = new ScrollMagic.Controller();

const headerParallax = new ScrollMagic.Scene(
    {
        triggerElement: '.geese-header',
        triggerHook: 0,
        duration: '100%'
    })
    .setTween(TweenMax.from('.header-background', 1, { y: '-25%', ease: Power0.easeNone }))
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


let navigationPin = new ScrollMagic.Scene({
    triggerElement: '.geese-navigation',
    triggerHook: 0
})
    .setPin('.geese-navigation', { pushFollowers: false })
    .addTo(geeseController);


navigationPin = new ScrollMagic.Scene({
    triggerElement: '.geese-images',
    triggerHook: 0
})
    .setTween(
        '.geese-navigation',
        1,
        {
            backgroundColor: '#87ceeb',
            height: '3.5rem'
        })
    .addTo(geeseController);


navigationPin = new ScrollMagic.Scene({
    triggerElement: '.geese-images',
    triggerHook: 0
})
    .setTween(
        '.geese-nav-button',
        1,
        {
            x: '10%'
        })
    .addTo(geeseController);



let geeseText = new ScrollMagic.Scene({
    triggerElement: '.geese-text',
    triggerHook: .5
})
    .setTween(
        '.geese-paragraph .reveal',
        5,
        {
            backgroundSize: '100% 100%',
            ease: Power0.easeNone
        })
    .addTo(geeseController);


geeseText = new ScrollMagic.Scene({
    triggerElement: '.geese-text',
    triggerHook: .5
})
    .setTween(
        '.geese-text-header .reveal',
        1,
        {
            backgroundSize: '100% 100%',
            ease: Power0.easeNone
        })
    .addTo(geeseController);