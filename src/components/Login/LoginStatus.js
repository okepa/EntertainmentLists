import Vue from 'vue'
import Component from 'vue-class-component'
import HttpRequestsService from '../../services/HttpRequestsService'
import AuthenticationService from '../../services/AuthenticationService'
import { EventBus } from '../../main';


@Component
export default class LoginStatus extends Vue {
    loggedIn = AuthenticationService.loggedIn();
    token = null;
    
    created(){
        EventBus.$on('loginStatus', () => {
            this.emitLoginStatus();
        });
        this.emitLoginStatus()
    }

    emitLoginStatus(){
        if(Vue.cookie.get('cookie') != null){
            this.token = Vue.cookie.get('cookie');
        } else {
            this.token = null;
        }

    }
}