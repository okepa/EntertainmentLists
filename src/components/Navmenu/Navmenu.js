import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import AuthenticationService from '../../services/AuthenticationService'
import { EventBus } from '../../main';

@Component
export default class Navmenu extends Vue {
    drawer = null;
    loggedIn = AuthenticationService.loggedIn();
    token = null;

    navigation = [
        { title: 'Home', route: '/home', loggedIn: null },
        { title: 'Books', route: '/books', loggedIn: null }
    ];
    
    created(){
        EventBus.$on('navmenuLoginStatus', () => {
            this.loginStatus();
        });
        this.loginStatus()
        console.log(this.token)
    }

    
    loginStatus() {
        if (Vue.cookie.get('cookie') != null) {
            this.token = Vue.cookie.get('cookie');
        } else {
            this.token = null;
        }
    }
}