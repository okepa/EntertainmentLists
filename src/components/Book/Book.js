import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import BooksHttpRequestsService from '../../services/BooksHttpRequestsService'
import HttpRequestsService from '../../services/HttpRequestsService'
import AuthenticationService from '../../services/AuthenticationService'
import Reviews from '../Reviews/Reviews.vue'
import { EventBus } from '../../main'

@Component({
    components: {
        ReviewsComponent: Reviews
    }
})
export default class Book extends Vue {
    bookId;
    book = {};
    readingStatus = ["Reading", "Read", "Plan To Read", "Abandoned"];
    readingRating = ["", 1, 2, 3, 4, 5];
    bookList = {
        usernameId: null,
        bookId: "",
        bookTitle: "",
        bookAuthor: [],
        bookPublisher: "",
        bookStatus: "",
        bookRating: null,
        bookRatingCount: null,
        bookRatingTotal: null
    }
    loggedIn = AuthenticationService.loggedIn();
    search = "";
    startIndex = 0;
    similarBooks = [];
    reviewInfo = {
        usernameId: null,
        bookId: "",
        reviewTitle: "",
        reviewRating: "",
        reviewContent: "",
        bookTitle: "",
        bookAuthor: [],
        bookPublisher: "",
        bookRating: null,
        bookRatingCount: null,
        bookRatingTotal: null
    };

    created() {
        this.bookId = this.$route.params.bookid;
        this.bookList.bookId = this.reviewInfo.bookId = this.bookId;
        this.getBook().then(() => {
            this.getSimilarBooks();
        });
        if (this.loggedIn) {
            this.getUserBookInfo();
        }
    }
    @Watch('$route')
    onRouteChange(val) {
        this.bookId = this.$route.params.bookid;
        this.bookList.bookId = this.reviewInfo.bookId = this.bookId;
        this.getBook().then(() => {
            this.similarBooks = [];
            this.getSimilarBooks();
        });
        if (this.loggedIn) {
            this.bookList.bookStatus = "";
            this.bookList.bookRating = null;
            this.getUserBookInfo();
        }
    }

    getBook() {
        return new Promise((resolve, reject) => {
            BooksHttpRequestsService.getBookRequest(`${this.bookId}`).then(result => {
                this.book = result.data.volumeInfo;
                this.bookList.usernameId = Vue.cookie.get('usernameId');
                this.bookList.bookTitle = this.reviewInfo.bookTitle = this.book.title;
                this.bookList.bookAuthor = this.reviewInfo.bookAuthor = this.book.authors;
                this.bookList.bookPublisher = this.reviewInfo.bookPublisher = this.book.publisher;
                resolve();
            }).catch(err => {
                EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
                reject();
            });
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

    listSubmition() {
        this.$validator.validateAll({ "Status": this.bookList.bookStatus }).then((result) => {
            if (result) {
                HttpRequestsService.postRequest("book-list", this.bookList).then(result => {
                    EventBus.$emit('toast', { type: "success", text: result.data.message });
                }).catch(err => {
                    EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
                });
            }
            else {
                EventBus.$emit('toast', { type: "error", text: "Please fill in required fields" });
            }
        });
    }
    /**
     * Get similar books depending on category
     */
    getSimilarBooks() {
        if (this.book.categories != null) {
            this.search += `subject:${this.book.categories[0]}`;
            BooksHttpRequestsService.getBooksRequest(`${this.search}`).then(total => {
                var randomNumber = 0;
                if (total.data.totalItems >= 10) {
                    randomNumber = Math.floor((Math.random() * total.data.totalItems) + 0) - 10;
                }
                BooksHttpRequestsService.getBooksRequest(`${this.search}&startIndex=${randomNumber}`).then(result => {
                    this.similarBooks = result.data.items;
                }).catch(err => {
                    EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
                });
            }).catch(err => {
                EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
            });
        }
    }

    viewSimilarBook(id) {
        this.$router.push(`/book/${id}`);
    }

}
