import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import BooksHttpRequestsService from '../../services/BooksHttpRequestsService'
import HttpRequestsService from '../../services/HttpRequestsService'
import { EventBus } from '../../main'

@Component
export default class Book extends Vue {
    bookId;
    book = new Object();
    readingStatus = ["Reading", "Read", "Plan To Read", "Abandoned"];
    readingRating = [1, 2, 3, 4, 5];
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

    created() {
        this.bookId = this.$route.params.bookid;
        this.getBook();
        this.getUserBook();
    }

    getBook() {
        BooksHttpRequestsService.getBookRequest(`${this.bookId}`).then(result => {
            this.book = result.data.volumeInfo;
            console.log(this.book.authors)
            this.bookList.usernameId = Vue.cookie.get('usernameId');
            this.bookList.bookId = this.bookId;
            this.bookList.bookTitle = this.book.title;
            this.bookList.bookAuthor = this.book.authors;
            this.bookList.bookPubisher = this.book.publisher;
            //console.log(this.book);
        }).catch(err => {
            EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
        });
    }

    getUserBook() {
        HttpRequestsService.getRequest(`books?b=${this.bookId}`).then(result => {
            if(result.data.bookData != null){
                this.bookList.bookStatus = result.data.bookData.bookStatus;
                this.bookList.bookRating = result.data.bookData.bookRating;
            }
        }).catch(err => {
            EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
        });
    }

    listSubmition() {
        HttpRequestsService.postRequest("book-list", this.bookList).then(result => {
            EventBus.$emit('toast', { type: "success", text: "Added to your book list" });
        }).catch(err => {
            EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
        });
    }

}
