window.onload = function(){

    correctNavPane();
};

window.onscroll = function(){

    correctNavPane();
};

function correctNavPane(){

    var header = document.getElementById('site-header');
    if (header.classList) {

        if (window.scrollY > 10){

            header.classList.remove('larger');
            header.classList.add('smaller');

            for(i = 0; i < 4; i++){

                var navButton = document.getElementsByClassName('nav-button')[i];
                navButton.classList.add('smaller');
                navButton.classList.remove('larger');
            }

        }else{

            header.classList.remove('smaller');
            header.classList.add('larger');

            for(i = 0; i < 4; i++){

                var navButton = document.getElementsByClassName('nav-button')[i];
                navButton.classList.add('larger');
                navButton.classList.remove('smaller');
            }
        }
    }
}
