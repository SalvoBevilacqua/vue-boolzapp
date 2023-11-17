const { createApp } = Vue;

createApp({
    data() {
        console.log(allcontacts);
        return {
            contacts: allcontacts,
            activeIndex: 0,
            message: '',
            timer: null
        }
    },
    created() {
        alert("ho usato il preset fornito da voi per due motivi: il mio aveva il tema dark abilitato e non volevo toglierlo (ma non sopportavo di lavorarci) e perchè volevo provare a lavorare su un progetto non mio.");
    },
    methods: {
        updateIndex(index) {this.activeIndex = index},
        numberOfMessage(index) {return this.contacts[index].messages.length - 1},
        insertMessage(index,text) {this.contacts[index].messages.push({
            date: '10/01/2020 15:30:55',
            message: text,
            status: 'sent'
        })
        },
        receiveMessage(index) {this.contacts[index].messages.push({
            date: '10/01/2020 15:30:55',
            message: 'apposto',
            status: 'received'
        })
        },
        autoMessage(index) {this.timer = setTimeout(this.receiveMessage, 1000, index)}
    }
}).mount("#app");