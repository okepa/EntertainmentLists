import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import BooksHttpRequestsService from '../../services/BooksHttpRequestsService'
import HttpRequestsService from '../../services/HttpRequestsService'
import { EventBus } from '../../main'

@Component
export default class App extends Vue {
    name = 'app';
    timeout = 6000;
    snackbarSuccess = false;
    snackbarError = false;
    snackbarInfo = false;
    snackbarWarning = false;
    text = "";

    created() {
        EventBus.$on('toast', payload => {
            this.emitAlert(payload);
        });
    }

    emitAlert(message) {
        switch (message.type) {
            case "success":
                this.snackbarSuccess = true;
                break;
            case "error":
                this.snackbarError = true;
                break;
            case "info":
                this.snackbarInfo = true;
                break;
            case "warning":
                this.snackbarWarning = true;
                break;
        }
        this.text = message.text;
    }

}
