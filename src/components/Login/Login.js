import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import HttpRequestsService from '../../services/HttpRequestsService'
import AuthenticationService from '../../services/AuthenticationService'
import { EventBus } from '../../main'

@Component
export default class Login extends Vue {
    username = null;
    pass = null;
    loggedIn = AuthenticationService.loggedIn()

    created() {
        AuthenticationService.onChange = loggedIn => {
            this.loggedIn = loggedIn
        }
    }

    login() {
        AuthenticationService.login(this.username, this.pass, loggedIn => {
            if (!loggedIn) {
                EventBus.$emit('toast', { type: "error", text: "Incorrect username and password" });
            } else {
                this.$router.replace(this.$route.query.redirect || '/home')
            }
        })
    }
}
