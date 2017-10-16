new Vue({
    el: '.second_main_right',
    data: {
        activeFlag: true,
    },
    methods: {
        act: function() {
            this.activeFlag = !this.activeFlag;
        }
    }
});