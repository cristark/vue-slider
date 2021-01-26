let app = new Vue({

    el: '#container',
    data: {
        counter: 0,
        src: [
            'img/bali.jpg',
            'img/dubai.jpg',
            'img/cuba.jpg',
            'img/kyoto.jpg',
        ]
    },
    methods: {
        movePrev() {
            (this.counter == 0) ? 
                this.counter = this.src.length - 1 :
                this.counter --;
        }
    }

});