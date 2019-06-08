function toggleContent(evt) {
    var clickEl = evt.target;

    if (clickEl.classList.contains('read-more-read-less__cta')) {
        var currentContainer = clickEl.closest('.read-more-read-less');
            for(var i = 0; i< currentContainer.length; i++) {
     
            var dots = document.getElementsByClassName('read-more-read-less__dots')[0];
            var moreText = document.getElementsByClassName('read-more-read-less__more')[0];
            var buttons = document.getElementsByClassName('read-more-read-less__cta');

            for (var j = 0; j < buttons.length; j++) {
                buttons[j].classList.toggle('hide');
            

            dots.classList.toggle('hide');
            moreText.classList.toggle('hide');
        }}
    }}
var containers = document.getElementsByClassName('read-more-read-less__container');
    containers.addEventListener('click', toggleContent);

