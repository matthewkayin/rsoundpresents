window.onscroll = function() {
    var el = document.getElementsByClassName('nav-button')[0];
    var el2 = document.getElementById('site-header');
    var className = 'small';
    if (el.classList) {
        if (window.scrollY > 10){
            el.style.padding = '2px 10px';
            el2.style.padding = '2px 0px';
        }else{
            el.style.padding = '10px 10px';
            el2.style.padding = '10px 0px';
        }
    }
};

function revealInfo() {

    document.write("hello");
}
