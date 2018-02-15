import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import HttpRequestsService from '../../services/HttpRequestsService'
import { EventBus } from '../../main'

@Component
export default class Login extends Vue {
    registration = { username: "", email: "", password: "", confirmPassword: "" }

    register() {
        this.$validator.validateAll().then((result) => {
            if (result) {
                HttpRequestsService.postRequest("register", this.registration).then((response) => {
                    EventBus.$emit('toast', { type: "success", text: response.data.message });
                    this.registration = { username: "", email: "", password: "", confirmPassword: "" }
                    this.$router.push("/login")
                }).catch(err => {
                    EventBus.$emit('toast', { type: "error", text: "Something went wrong" });
                });
            } else {
                EventBus.$emit('toast', { type: "error", text: "Please fill in required fields" });
            }
        });
    }
}
