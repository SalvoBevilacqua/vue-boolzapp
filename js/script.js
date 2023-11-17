const { createApp } = Vue;
const dt = luxon.DateTime;
const currentDate = new Date().toDateString();

createApp({
    data() {
        console.log(allcontacts);
        return {
            contacts: allcontacts,
            activeIndex: 0,
            message: '',
            timer: null,
            searchText: ''
        }
    },
    created() {
        alert("ho usato il preset fornito da voi per due motivi: il mio aveva il tema dark abilitato e non volevo toglierlo (ma non sopportavo di lavorarci) e perchè volevo provare a lavorare su un progetto non mio");
    },
    methods: {
        updateIndex(index) {this.activeIndex = index},
        numberOfMessage(index) {return this.contacts[index].messages.length - 1},
        insertMessage(index,text) {
            const date = this.updatedDate();

            this.contacts[index].messages.push({
            date: date,
            message: text,
            status: 'sent'
        });
        this.message = '';
        },
        receiveMessage(index) {
            const date = this.updatedDate();

            this.contacts[index].messages.push({
            date: date,
            message: 'apposto',
            status: 'received'
        })
        },
        autoMessage(index) {this.timer = setTimeout(this.receiveMessage, 1000, index)},
        dateModifier(fullDate) {
            const luxonDate = dt.fromFormat(fullDate, "dd/MM/yyyy HH:mm:ss");
            return luxonDate.toFormat("HH:mm");
        },
        checkTodayDate(lastMessageDate) {
            const dateOfToday = dt.fromFormat(currentDate, "EEE MMM dd yyyy");
            const today = dateOfToday.toFormat("dd MM yy");
            const dateOfMessage = dt.fromFormat(lastMessageDate, "dd/MM/yyyy HH:mm:ss");
            const mess = dateOfMessage.toFormat("dd MM yy");
            let dateFlag = false;
            if (today === mess) {
                dateFlag = true;
            }
            return dateFlag;
        },
        updatedDate() {
            const date = new Date();
            let tempDate = `${date.getDate()}/${date.getMonth() +1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            return tempDate;
        },
        search() {
            let textToSearch = this.searchText.toLowerCase();
            this.contacts.forEach(element => {
                if (element.name.toLowerCase().includes(textToSearch)) {
                    element.visible = true;
                } else {
                    element.visible = false;
                }
            })
        }
    }
}).mount("#app");