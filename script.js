const nav = document.getElementsByClassName("header__nav");
// const links = document.getElementsByClassName("header__nav__ul__li");

let topOfNav = nav[0].offsetTop;

function fixNav(e) {
    if (window.scrollY > topOfNav) {
        //when we make a nav element fixed position CSS (as is here fixed-nav), it no longer takes up space and sort of floats on top of the browser. because of reflow on the page, the class= site-wrap then takes up the empty space now and so creates a jerky page reaction. thus need to calculate the nav height and enter this in by adding some padding
        document.body.style.paddingTop = nav[0].offsetHeight + "px";

        //create classList to the body and not the children elements as easier to manage
        document.body.classList.add("fixed-nav");
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove("fixed-nav");
    }
}
window.addEventListener("scroll", fixNav);

// const handleLinks = (e) => {
//     console.log(e);
// };

// for (let i = 0; i < links.length; i++) {
//     links[i].addEventListener("click", handleLinks);
// }
