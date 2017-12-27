new Vue({
    el: '#app',
    data: {
        counter: 0
    },
    watch: {
        counter: function() {
            var vm = this;
            setTimeout(function() {
                vm.counter = 0;
            }, 2000);
        }
    },
    methods: {
        result() {
            return this.counter > 10 ? 'Greater 10' : 'Smaller 10';
        }
    }
});