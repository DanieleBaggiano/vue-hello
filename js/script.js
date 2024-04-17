console.log(Vue);

const { createApp } = Vue;
 
createApp ({
    data() {
        return {
            greeting : "Benvenuti nel Nuovo Mondo!",
            image : "./img/manga-one-piece-wallpaper-preview.jpg"
        }
    }
}).mount(`#app`);