new Vue({
    el: '#app',
    data: {
        attachRed: false,
        color: 'green',
        inlineColor: 'grey'
    },
    computed: {
        divClasses: function() {
            return {
                red: this.attachRed,
                blue: !this.attachRed
            }
        }
    }
});