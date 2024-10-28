document.addEventListener("DOMContentLoaded", function () {

    'use strict';

    gsap.registerPlugin(ScrollTrigger);


    // lennis smooth scroll
    const lenis = new Lenis({
        duration: 1.2
    });

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf);

    // Integration lenis on GSAP ScrollTrigger
    
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    });

    let workInfoItems = document.querySelectorAll('.work_photo-item');
    workInfoItems.forEach(function (item, index) {
        item.style.zIndex = workInfoItems.length - index;
    });

    gsap.set(".work_photo-item",{
        ClipPath: function () {
            return "inset(0px 0px 0px 0px)"
        }
    });

    const animation = gsap.to('.work_photo-item:not(:last-child)',{
        ClipPath: function () {
            return "inset(0px 0px 415px 0px)"
        },
        stagger:.5,
        ease: "none",
    });

    ScrollTrigger.create({
        trigger:".work",
        start:"top top",
        end:"bottom bottom",
        animation: animation,
        scrub: 1,
        pin:".right"
    });
});