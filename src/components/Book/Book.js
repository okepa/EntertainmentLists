import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import BooksHttpRequestsService from '../../services/BooksHttpRequestsService'
import HttpRequestsService from '../../services/HttpRequestsService'
import AuthenticationService from '../../services/AuthenticationService'
import { EventBus } from '../../main'

@Component
export default class Book extends Vue {
    bookId;
    book = new Object();
    readingStatus = ["Reading", "Read", "Plan To Read", "Abandoned"];
    readingRating = ["", 1, 2, 3, 4, 5];
    bookList = {
        usernameId: null,
        bookId: "",
        bookTitle: "",
        bookAuthor: [],
        bookPubisher: "",
        bookStatus: "",
        bookRating: null,
        bookRatingCount: null,
        bookRatingTotal: null
    }
    reviews = [];
    review = {
        usernameId: null,
        bookId: "",
        reviewTitle: "",
        reviewRating: "",
        reviewContent: ""
    };
    reviewDialog = false;
    loggedIn = AuthenticationService.loggedIn();

    created() {
        this.bookId = this.$route.params.bookid;
        this.bookList.bookId = this.bookId;
        this.review.bookId = this.bookId;
        this.getBook();
        this.getReviews();
        if (this.loggedIn) {
            this.getUserBookInfo();
            this.getUserReview();
        }
    }

    getBook() {
        BooksHttpRequestsService.getBookRequest(`${this.bookId}`).then(result => {
            this.book = result.data.volumeInfo;
            this.bookList.usernameId = Vue.cookie.get('usernameId');
            this.bookList.bookTitle = this.book.title;
            this.bookList.bookAuthor = this.book.authors;
            this.bookList.bookPubisher = this.book.publisher;
        }).catch(err => {
            EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
        });
    }

    getUserBookInfo() {
        HttpRequestsService.getRequest(`books?b=${this.bookId}`).then(result => {
            if (result.data.bookData != null) {
                this.bookList.bookStatus = result.data.bookData.bookStatus;
                this.bookList.bookRating = result.data.bookData.bookRating;
            }
        }).catch(err => {
            EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
        });
    }

    getReviews() {
        HttpRequestsService.getRequest(`reviews?b=${this.bookId}`).then(result => {
            this.reviews = result.data.reviews;
        }).catch(err => {
            EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
        });
    }

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
                    EventBus.$emit('toast', { type: "success", text: "Review Submitted" });
                    this.getReviews();
                }).catch(err => {
                    EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
                });
            } else {
                EventBus.$emit('toast', { type: "error", text: "Please fill in required fields" });
            }
        });
    }

    listSubmition() {
        this.$validator.validateAll({ "Status": this.bookList.bookStatus }).then((result) => {
            if (result) {
                HttpRequestsService.postRequest("book-list", this.bookList).then(result => {
                    EventBus.$emit('toast', { type: "success", text: "Added to your book list" });
                }).catch(err => {
                    EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
                });
            }
            else {
                EventBus.$emit('toast', { type: "error", text: "Please fill in required fields" });
            }
        });
    }

}
