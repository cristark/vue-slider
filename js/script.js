let app = new Vue({

    el: '#container',
    data: {
        counter: 0,
        src: [
            'img/bali.jpg',
            'img/dubai.jpg',
            'img/cuba.jpg',
            'img/kyoto.jpg',
        ],
        names: [
            'Bali - Thailand',
            'Dubai - United Arab Emirates',
            'Havana - Cuba',
            'Kyoto - Japan'
        ]
    },
    methods: {
        movePrev() {
            (this.counter == 0) ? 
                this.counter = this.src.length - 1 :
                this.counter --;
        },
        moveNext() {
            (this.counter == this.src.length - 1) ? 
                this.counter = 0 :
                this.counter ++;
        },
        changeImg(indice) {
            this.counter = indice;
        }
    }

});