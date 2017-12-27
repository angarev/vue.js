new Vue({
    el: '#app',
    data: {
        link: 'http://www.google.com'
    },
    methods: {
        changeLink: function() {
            this.link = 'http://apple.com'
        }
    }
});