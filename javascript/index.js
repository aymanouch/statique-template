$(function() {
    //the javascript is ready
    //just calculate the height possible
    const claculHeight = (totalHeight, elt, paddingAdditional) => {
        const heightPossible = elt.outerHeight();
        return totalHeight - heightPossible - paddingAdditional;
    }
    // set the height to the element
    const setHeight = (elt) => {
        elt.css("height", claculHeight($(window).height(), $(".controle-head__container"), 16));
    }
    const handleIconAnime = () => {
        //this function do the animation of the bar icon
        let switchLight = true;
        $("#bar_icon").on("click", function() {
         const myBarAnimation = gsap.timeline();
         if(switchLight) {
            myBarAnimation.to($(this).find("div:first-child"), {margin:0, rotate:'45deg', duration:.2})
            .to($(this).find("div:last-child"), {rotate:'-45deg',duration:.2},"-1");
            switchLight=!switchLight;
         } else {
            myBarAnimation.to($(this).find("div:first-child"), {marginBottom:".5rem", rotate:'0deg', duration:.2})
            .to($(this).find("div:last-child"), {rotate:'0deg',duration:.2},"-1");
            switchLight=!switchLight;
         }

         animateLinks(switchLight);
        });
    }

    //function create the beautfull animation 

    const animateLinks = (switchLight) => {
        const myLinksAnimation = gsap.timeline();
        if(!switchLight) {
            myLinksAnimation.to($(".global-links__container"), {display:"block"})
            .to($(".navbar"), {backgroundColor:"white", duration:"0.1"}, '-=1')
            .from($(".website-links li"), {y:50, opacity:0}, "-=.5")
            .from($(".social-links"), {y:15, opacity:0}, "-=.8");
        } else {
            myLinksAnimation.to($(".global-links__container"), {display:"none"})
            .to($(".navbar"), {backgroundColor:"rgba(0,0,0,0)", duration:"0.1"}, '-=1')
            .to($(".website-links li"), {y:50, opacity:0}, "-=.5")
            .to($(".social-links"), {y:15, opacity:0}, "-=.5")
            .to($(".website-links li"), {y:0, opacity:1}, "<=1")
            .to($(".social-links"), {y:0, opacity:1}, "<=1");
        }
        
    }

    //generate the event when resize the window
    $(window).on("resize", function() {setHeight($(".links-list__container"))});

    //appel all functions
    if($(window).width() <= 768) {
        setHeight($(".links-list__container"));
    }
    handleIconAnime();
})