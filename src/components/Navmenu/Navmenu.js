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
        { title: 'Home', route: '/home', exact: true},
        { title: 'Books', route: '/books', exact: true},
        { title: 'Users', route: '/users', exact: true}
    ];

    secureNavigation = [
        { title: 'Book List', route: '/book-list', exact: true},
        { title: 'Profile', route: '/profile', exact: true},
        { title: 'Settings', route: '/settings', exact: false}
    ]
    
    created(){
        EventBus.$on('loginStatus', () => {
            this.loginStatus();
        });
        this.loginStatus()
    }

    
    loginStatus() {
        if (Vue.cookie.get('cookie') != null) {
            this.token = Vue.cookie.get('cookie');
        } else {
            this.token = null;
        }
    }
}