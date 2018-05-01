import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import HttpRequestsService from '../../services/HttpRequestsService'
import { EventBus } from '../../main'

@Component
export default class ValidateAccount extends Vue {
    validationCode;
    validationSuccessful = false;
    
    created() {
        this.validationCode = this.$route.params.validationcode;
        this.activateAccount();
    }

    activateAccount(){
        HttpRequestsService.getRequest(`validate-account?validationcode=${this.validationCode}`).then(res => {
            this.validationSuccessful = true;
        }).catch(err => {
            EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
        });
    }
}
