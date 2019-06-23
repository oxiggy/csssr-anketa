require('./index.css')

const autosize= require('autosize')
autosize(document.querySelector('.b-textarea'))

const $= require('jquery')
const rangeslider= require('rangeslider.js')
$('.b-range__input').rangeslider({
    polyfill: false
});
