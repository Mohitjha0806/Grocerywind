var tl = gsap.timeline();

tl
    .from("h3, ul", {
        opacity: 0,
        y: -40,
        duration: 0.5,
    })
    .from("h2", {
        opacity: 0,
        y: -20,
        duration: 0.5,
    })
    .from("h1", {
        opacity: 0,
        y: -20,
        duration: 0.5,
    })
    .from(".png", {
        opacity: 0,
        x: 40,
        duration: 0.5,
    })
    .from(".P-two", {
        opacity: 0,
        y: 20,
        duration: 0.5,
    }).from(".playstore", {
        opacity: 0,
        y: 20,
        duration: 0.5,
    })
    .from("#nav", {
        opacity: 0,
        scale: 1.1,
        duration: 3.5,
    })
    .from(".content", {
        opacity: 0,
        scale: 1.5,
        duration: 0.5,
    })
    .from(".footer", {
        opacity: 0,
        y: 20,
        duration: 0.5,
    })
    .from("#nav-two", {
        opacity: 0,
        y: -20,
        durattion: 0.5
    })

    .from(".bottom-3-child", {
        opacity: 0,
        y: 20,
        duration: 0.5,
    })
    .from(".kart-one", {
        opacity: 0,
        scale: 1.1,
        duration: 4.5,
    })
    .from(".kart-two", {
        opacity: 0,
        scale: 1.1,
        duration: 0.2,
    })
    .from(".kart-three", {
        opacity: 0,
        scale: 1.1,
        duration: 0.5,
    })
    .from(".kart-four", {
        opacity: 0,
        scale: 1.1,
        duration: 0.5,
    })
    .from(".kart-eight", {
        opacity: 0,
        scale: 1.1,
        duration: 0.5,
    })
    .from(".kart-seven", {
        opacity: 0,
        scale: 1.1,
        duration: 0.5,
    })
    .from(".kart-six", {
        opacity: 0,
        scale: 1.1,
        duration: 0.5,
    })

    .from(".kart-five", {
        opacity: 0,
        scale: 1.1,
        duration: 0.5,
    })
    .from([".nav-left", ".nav-right"], {
        opacity: 0,
        y: -20,
        duration: 0.5,
    })
    


    .from([".ul-one", ".ul-two"], {
        opacity: 0,
        x: -20,
        duration: 0.5
        ,
    })
    .from([".ulr-one", ".ulr-two", ".ulr-three"], {
        opacity: 0,
        x: 20,
        duration: 0.9,
    })
    .from(".footer-last", {
        opacity: 0,
        y: 20,
        duration: 1.2,
    })

