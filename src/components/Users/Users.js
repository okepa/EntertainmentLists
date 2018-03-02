import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import { EventBus } from '../../main'
import HttpRequestsService from '../../services/HttpRequestsService';

@Component
export default class Users extends Vue {
    users = [];
    username = null;
    headers = [{ text: "Username", value: "username", align: "left" }]

    created(){
        this.getUsers();
    }
    
    getUsers() {
        HttpRequestsService.getRequest("users").then(result => {
            this.users = result.data.users;
        }).catch(err => {
            EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
        });
    }

    viewUser(id) {
        this.$router.push(`/profile/${id}`);
    }
}
