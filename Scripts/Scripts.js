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


const textAnimationTweenParagraph = new TimelineMax().to(
    '.geese-paragraph .reveal',
    5,
    {
        backgroundSize: '100% 100%',
        ease: Power0.easeNone
    }
).to(
    '.geese-paragraph .reveal',
    1,
    {
        color: 'black',
        ease: Power0.easeNone
    }
)

const textAnimationTweenHeader = new TimelineMax().to(
    '.geese-text-header .reveal',
    1,
    {
        backgroundSize: '100% 100%',
        ease: Power0.easeNone
    }
).to(
    //From what I saw, there is no delay parameter here.
    //This serves to add a delay when the reveal finishes and the text color change.
    '.geese-text-header .reveal',
    4,
    {
        ease: Power0.easeNone
    }
).to(
    '.geese-text-header .reveal',
    1,
    {
        color: 'black',
        ease: Power0.easeNone
    }
)

let geeseText = new ScrollMagic.Scene({
    triggerElement: '.geese-text',
    triggerHook: .5
})
    .setTween(textAnimationTweenParagraph)
    .addTo(geeseController);


geeseText = new ScrollMagic.Scene({
    triggerElement: '.geese-text',
    triggerHook: .5
})
    .setTween(textAnimationTweenHeader)
    .addTo(geeseController);



const scalingGoose = new ScrollMagic.Scene(
    {
        triggerElement: '.goose-boxes',
        triggerHook: .8,
        offset: 300,
        duration: '50%',
    })
    .setTween(TweenMax.from('.goose-box', 1,
        {
            width: '10%',
            height: '15%',
            ease: Power0.easeNone
        }))
    .addIndicators()
    .addTo(geeseController);