import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import HttpRequestsService from '../../services/HttpRequestsService'
import { EventBus } from '../../main'

@Component
export default class Reviews extends Vue {
    reviews = [];

    created(){
        this.getUserReviews();
    }

    getUserReviews(){
        HttpRequestsService.getRequest("user-reviews").then(result => {
            this.reviews = result.data.reviews;
        }).catch(err => {
            EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
        })
    }
}
