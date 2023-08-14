const controller = new ScrollMagic.Controller();

const headerParallax = new ScrollMagic.Scene(
    {
        triggerElement: '.site-header',
        triggerHook: 0,
        duration: '100%'
    })
    .setTween(TweenMax.from('.site-header-background', 1, { y: '-25%', ease: Power0.easeNone }))
    .addTo(controller);


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
            })).addTo(controller)
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
            })).addTo(controller)
        verticalOrHorizontalDirection = 0;
        alternatingDirection = alternatingDirection / -1;
    }
});


const navigationPin = new ScrollMagic.Scene({
    triggerElement: '.navigation-bar',
    triggerHook: 0
})
    .setPin('.navigation-bar', { pushFollowers: false })
    .addTo(controller);


const navigationColor = new ScrollMagic.Scene({
    triggerElement: '.geese-images',
    triggerHook: 0
})
    .setTween(
        '.navigation-bar',
        1,
        {
            backgroundColor: '#87ceeb',
            height: '3.5rem'
        })
    .addTo(controller);


const navigationButtonMovement = new ScrollMagic.Scene({
    triggerElement: '.geese-images',
    triggerHook: 0
})
    .setTween(
        '.nav-button',
        1,
        {
            x: '10%'
        })
    .addTo(controller);


const textAnimationTweenParagraph = new TimelineMax().to(
    '.site-description-paragraph .reveal',
    5,
    {
        backgroundSize: '100% 100%',
        ease: Power0.easeNone
    }
).to(
    '.site-description-paragraph .reveal',
    1,
    {
        color: 'black',
        ease: Power0.easeNone
    }
)

const textAnimationTweenHeader = new TimelineMax().to(
    '.site-description-header .reveal',
    1,
    {
        backgroundSize: '100% 100%',
        ease: Power0.easeNone
    }
).to(
    //From what I saw, there is no delay parameter here.
    //This serves to add a delay when the reveal finishes and the text color change.
    '.site-description-header .reveal',
    4,
    {
    }
).to(
    '.site-description-header .reveal',
    1,
    {
        color: 'black',
        ease: Power0.easeNone
    }
)

const geeseText = new ScrollMagic.Scene({
    triggerElement: '.geese-text',
    triggerHook: .5
})
    .setTween(textAnimationTweenParagraph)
    .addTo(controller);


const geeseTextHeader = new ScrollMagic.Scene({
    triggerElement: '.geese-text',
    triggerHook: .5
})
    .setTween(textAnimationTweenHeader)
    .addTo(controller);



const growingGoose = new ScrollMagic.Scene(
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
    .addTo(controller);


const slideInImages = new TimelineMax().to(
    '.carousel-image:nth-child(1)',
    1,
    {
        x: '100%',
        ease: Power0.easeNone
    }
).to(
    '.carousel-image:nth-child(2)',
    1,
    {
        x: '100%',
        ease: Power0.easeNone
    }
).to(
    '.carousel-image:nth-child(3)',
    1,
    {
        x: '100%',
        ease: Power0.easeNone
    }
).to(
    '.carousel-image:nth-child(4)',
    1,
    {
        x: '100%',
        ease: Power0.easeNone
    }
)


const carousel = new ScrollMagic.Scene(
    {
        triggerElement: '.gallery-carousel',
        triggerHook: 0,
        duration: '200%',
    })
    .setPin('.navigation-bar', { pushFollowers: true })
    .setTween(slideInImages)
    .addTo(controller);