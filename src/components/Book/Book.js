import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import BooksHttpRequestsService from '../../services/BooksHttpRequestsService'
import HttpRequestsService from '../../services/HttpRequestsService'

@Component
export default class Book extends Vue {
    bookId;
    book = null;
    readingStatus = ["Reading", "Read", "Plan To Read", "Abandoned"];
    readingRating = [1, 2, 3, 4, 5];
    bookList = {
        bookId: "",
        bookTitle: "",
        bookAuthor: [],
        bookPubisher: "",
        bookStatus: "",
        bookRating: null
    }

    created() {
        this.bookId = this.$route.params.bookid;
        this.getBook();
    }

    getBook() {
        BooksHttpRequestsService.getBookRequest(`${this.bookId}`).then(result => {
            this.book = result.data.volumeInfo;
            this.bookList.bookId = this.bookId;
            this.bookList.bookTitle = this.book.title;
            this.bookList.bookAuthor = this.book.authors;
            this.bookList.bookPubisher = this.book.publisher;
            console.log(this.book);
        }).catch(err => {

        });
    }

    listSubmition() {
        HttpRequestsService.postRequest("books", this.bookList).then(result => {
            
        }).catch(err => {

        });
    }

}
