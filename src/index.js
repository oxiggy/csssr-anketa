require('./index.css')

const autosize= require('autosize')
autosize(document.querySelector('.b-textarea'))

const rangeslider= require('rangeslider-js')
rangeslider.create(document.querySelector('.b-range__input'))
