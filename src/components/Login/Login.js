import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import HttpRequestsService from '../../services/HttpRequestsService'
import AuthenticationService from '../../services/AuthenticationService'

@Component
export default class Login extends Vue {
    email = null;
    pass = null;
    error = false;
    message = "Incorrect username and password"
    loggedIn = AuthenticationService.loggedIn()

    created() {
        AuthenticationService.onChange = loggedIn => {
            this.loggedIn = loggedIn
        }
    }

    login() {
        AuthenticationService.login(this.email, this.pass, loggedIn => {
            if (!loggedIn) {
                this.error = true
                setTimeout(() => { 
                    this.error = false;
                }, 3000);
            } else {
                this.$router.replace(this.$route.query.redirect || '/home')
            }
        })
    }
}
