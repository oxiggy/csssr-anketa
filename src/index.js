require('./index.styl')

const autosize= require('autosize')
autosize(document.querySelector('.b-textarea'))

const $= require('jquery')
const rangeslider= require('rangeslider.js')

Range(document.querySelector('.b-range'))

function Range(element) {
    const input= element.querySelector('.b-range__input');
    $(input).rangeslider({
        polyfill: false
    });
    element.querySelectorAll('.b-range__option').forEach(function (optionElement) {
        optionElement.addEventListener('click', function () {
            $(input)
                .val(Number(optionElement.dataset.value))
                .change()
            ;
        })
    })
}
