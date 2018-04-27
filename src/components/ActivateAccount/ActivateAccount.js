import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import HttpRequestsService from '../../services/HttpRequestsService'
import { EventBus } from '../../main'

@Component
export default class ActivateAccount extends Vue {
    activationCode;
    activationSuccessful = false;
    
    created() {
        this.activationCode = this.$route.params.activationcode;
        this.activateAccount();
    }

    activateAccount(){
        HttpRequestsService.getRequest(`activate-account?activationcode=${this.activationCode}`).then(res => {
            this.activationSuccessful = true;
        }).catch(err => {
            EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
        });
    }
}
