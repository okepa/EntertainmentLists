import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import AuthenticationService from '../../services/AuthenticationService'
import { EventBus } from '../../main'

@Component
export default class Footer extends Vue {
    navigation = [
        { title: "Home", route: "/home" },
        { title: "Books", route: "/books" },
        { title: "Users", route: "/users" }
    ]
    secureNavigation = [
        { title: 'Book List', route: '/book-list' },
        { title: 'Settings', route: '/settings/user-information' },
        { title: 'Profile', route: '/profile'}

    ]
    loggedIn = AuthenticationService.loggedIn();
    token = null;

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
