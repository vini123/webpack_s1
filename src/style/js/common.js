require('../css/main.css')
require('../css/index.less')

module.exports = new Vue({
    el: '#app',
    data: {
        value1: 0,
        navdata: [
            {active: true, text: '首页', href: './home.html'},
            {active: false, text: '娱乐', href: './show.html'},
            {active: false, text: '商城', href: 'javascript:void(0)'}],
        carouselHeight: '320px',
    },
})
