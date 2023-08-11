let geeseController = new ScrollMagic.Controller();

let headerPin = new ScrollMagic.Scene({
    triggerElement: '.buffer',
    triggerHook: 0.3
})
    .setPin('.geese-header', { pushFollowers: false })
    .addTo(geeseController);

new ScrollMagic.Scene({ triggerElement: ".geese-header" })
    .setTween(".geese-header", { y: "80%", ease: Linear.easeNone })
    .addIndicators()
    .addTo(geeseController);