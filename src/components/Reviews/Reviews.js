import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import HttpRequestsService from '../../services/HttpRequestsService'
import { EventBus } from '../../main'

@Component
export default class Reviews extends Vue {
    reviews = [];
    reviewCount = 0;
    page = 1;

    created(){
        this.getUserReviews();
    }

    @Watch('page')
    onPageChange(val){
        this.getUserReviews();
    }


    getUserReviews(){
        HttpRequestsService.getRequest(`user-reviews?p=${this.page}`).then(result => {
            this.reviewCount = Math.ceil(result.data.reviewsTotal / 5);
            this.reviews = result.data.reviews;
        }).catch(err => {
            EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
        })
    }

    deleteUserReview(id){
        HttpRequestsService.deleteRequest(`user-reviews?b=${id}`).then(result => {
            EventBus.$emit('toast', { type: "success", text: result.data.message });
            this.getUserReviews();        
        }).catch(err => {
            EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
        })
    }
}
