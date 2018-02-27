import Vue from 'vue'
import { Component, Watch, Prop } from 'vue-property-decorator'
import HttpRequestsService from '../../services/HttpRequestsService'
import AuthenticationService from '../../services/AuthenticationService'

import { EventBus } from '../../main'

@Component
export default class Reviews extends Vue {
    bookId;
    location = "";
    reviews = [];
    reviewCount = 0;
    page = 1;
    reviewDialog = false;
    readingRating = ["", 1, 2, 3, 4, 5];
    loggedIn = AuthenticationService.loggedIn();
    review = {};

    created() {
        this.bookId = this.$route.params.bookid;
        if (this.$route.path == "/profile/reviews") {
            this.location = this.$route.path;
            this.getUserReviews();
        }
        else if (this.$route.matched[0].path == "/book/:bookid") {
            this.review = this.reviewInfo;
            this.location = this.$route.matched[0].path;
            this.getBookReviews();
            if (this.loggedIn) {
                this.getUserReview();
            }
        }
    }

    @Prop()
    reviewInfo;

    @Watch('page')
    onPageChange(val) {
        this.getUserReviews();
    }

    @Watch('$route')
    onRouteChange(val) {
        this.bookId = this.$route.params.bookid;
        this.getBookReviews();
        if (this.loggedIn) {
            this.getUserReview();
        }
    }
    //Get all user reviews
    getUserReviews() {
        HttpRequestsService.getRequest(`user-reviews?p=${this.page}`).then(result => {
            this.reviewCount = Math.ceil(result.data.reviewsTotal / 5);
            this.reviews = result.data.reviews;
            console.log(this.reviewCount);
        }).catch(err => {
            EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
        })
    }
    //Get all review for one book
    getBookReviews() {
        HttpRequestsService.getRequest(`reviews?b=${this.bookId}&p=${this.page}`).then(result => {
            this.reviewCount = Math.ceil(result.data.reviewsTotal / 5);
            this.reviews = result.data.reviews;
            console.log(this.reviewCount)
        }).catch(err => {
            EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
        });
    }
    //Get user review for one book
    getUserReview() {
        HttpRequestsService.getRequest(`review?b=${this.bookId}`).then(result => {
            if (result.data.review != null) {
                this.review = result.data.review;
            }
        }).catch(err => {
            EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
        })
    }

    postReview() {
        this.$validator.validateAll({ "Title": this.review.reviewTitle, "Rating": this.review.reviewRating, "Content": this.review.reviewContent }).then((result) => {
            if (result) {
                HttpRequestsService.postRequest("review", this.review).then(result => {
                    this.reviewDialog = !this.reviewDialog;
                    EventBus.$emit('toast', { type: "success", text: result.data.message });
                    this.getBookReviews();
                }).catch(err => {
                    EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
                });
            } else {
                EventBus.$emit('toast', { type: "error", text: "Please fill in required fields" });
            }
        });
    }

    deleteUserReview(id) {
        HttpRequestsService.deleteRequest(`user-reviews?b=${id}`).then(result => {
            EventBus.$emit('toast', { type: "success", text: result.data.message });
            this.getUserReviews();
        }).catch(err => {
            EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
        })
    }

    userBookList(usernameId){
        this.$router.push(`/book-list/${usernameId}`);
    }
}
