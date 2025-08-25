
var container = document.querySelector("#maincontainer");
var cursor = document.querySelector("#cursor")

container.addEventListener("mousemove", function (dets) {
    console.log(dets)
    gsap.to(cursor, {
        x: dets.x - "20",
        y: dets.y - "20"
    })
})
var typed = new Typed(".text", {
    strings: ["Software Engineer", "Web Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

