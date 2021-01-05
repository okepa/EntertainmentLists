import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import HttpRequestsService from '../../services/HttpRequestsService'
import { EventBus } from '../../main'

@Component
export default class UserInformation extends Vue {
    profile = {}

    created(){
        this.getProfile();
    }

    getProfile(){
        HttpRequestsService.getRequest("user-information").then(result => {
            this.profile = result.data.user;
        }).catch(err => {
            EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
        });
    }

    updateProfile(){
        HttpRequestsService.postRequest("user-information", this.profile).then(result => {
            EventBus.$emit('toast', { type: "success", text: result.data.message });
        }).catch(err => {
            EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
        });
    }
}
