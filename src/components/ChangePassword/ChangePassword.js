import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import HttpRequestsService from '../../services/HttpRequestsService'
import { EventBus } from '../../main'

@Component
export default class ForgottenPassword extends Vue {
    changePassword = {validationCode: "", password: ""};

    changePassword() {
        this.$validator.validateAll().then((result) => {
            if (result) {
                HttpRequestsService.postRequest("change-password", this.changePassword).then(result => {
                    EventBus.$emit('toast', { type: "success", text: "Email changed" });
                }).catch(err => {
                    if(err.message == "Request failed with status code 401"){
                        EventBus.$emit('toast', { type: "error", text: "The email account does not exist for this username or the email account has not been validated" });
                    } else {
                        EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
                    }
                });
            }
        });
    }
}