/*
Esercizio di oggi: Vue Hello
nome repo: vue-hello
Descrizione:
Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un'immagine, presa anch'essa da un data.
*/

const { createApp } = Vue;

createApp({
  data() {
    return {
      message:
        "To see a World in a grain of sand and a heaven in a wild flower, hold infinity in the palm of your hand and eternity in an hour.",
      author: "William Blake",
    };
  },
}).mount("#app");
