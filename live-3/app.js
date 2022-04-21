/* 
MILESTONE 1
Creiamo un oggetto Movie, con le seguenti proprieta: 
- images che conterra una lista di immagini
- title che conterra il titolo del film
- category che conterra la categoria del film
- length che conterra la lunghezza del film in minuti


MILESTONE 2
Creare il markup ed utilizzare le direttive vue per stampare a 
schermo il film in una card. Mostrando la prima immagine, il titolo, 
la categoria e la lunghezza

MILESTONE 3
Aggiungiamo due frecce al markup e utilizziamole per rendere dimanico lo slider. 
Al click sulla freccia di destra scorriamo all'immagine successiva
Al click sulla freccia di sinistra scorriamo all'immagine precedente

MILESTONE 4
Aggiungiamo le miniature delle altre immagini presenti per il film. Evidenziamo 
l'immagine selezionata, magari con un border. Quando clicchiamo sulle frecce la 
miniatura evidenziata cambia.
*/

const app = new Vue({
    el: '#app',
    data: {
        activeImage: 0,
        movie: {
            images: [
                'https://www.themoviedb.org/t/p/w440_and_h660_face/sSdRI34rbqXj21SruV52AUoXRkE.jpg',
                'https://www.themoviedb.org/t/p/w440_and_h660_face/bbqz34ytdrYUcK3GZSAwsrW2Ee7.jpg',
                'https://www.themoviedb.org/t/p/original/kJEGB8xLLiHKwkaDz9iECZ2gCwN.jpg',
                'https://www.themoviedb.org/t/p/original/eGrA9icvrXp0WuwstypaAKtJkWc.jpg',
                'https://www.themoviedb.org/t/p/original/uhtZdw7rsBHlALoyMT8rtCVBbMj.jpg'
            ],
            title: 'Venom la furia di Carnage',
            category: 'Azione',
            length: '120 min'
        }
    },
    methods: {
        prevImage() {
            //per vedere che il @click funziona
            console.log('prev image');
            if (this.activeImage === 0) {
                this.activeImage = this.movie.images.length
            }
            this.activeImage--

        },

        nextImage() {
            //per vedere che il @click funziona
            console.log('next image');
            this.activeImage++
            if (this.activeImage === this.movie.images.length) {
                this.activeImage = 0

            }

        }
    }
})