import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import BooksHttpRequestsService from '../../services/BooksHttpRequestsService'
import { EventBus } from '../../main'
import HttpRequestsService from '../../services/HttpRequestsService';

@Component
export default class Books extends Vue {
    books = [];
    finalBooks = [];
    page = 1;
    title = null;
    author = null;
    publisher = null;
    startIndex = 0;
    headers = [{ text: "Title", value: "title", align: "left" }, { text: "Author", value: "authors", align: "left" }, { text: "Publisher", value: "publisher", align: "left" }, { text: "Description", value: "description", align: "left" }, { text: "Rating", value: "bookRating", align: "left" }]
    pages = 0;
    created() {
        this.getBooks();
    }

    @Watch('page')
    onPageChange(val) {
        this.startIndex = this.page * 10 - 10;
        this.getBooks();
    }

    getBooks() {
        var search = null;
        if (this.title != null) search += `+intitle:${this.title}`;
        if (this.author != null) search += `+inauthor:${this.author}`;
        if (this.publisher != null) search += `+inpublisher:${this.publisher}`;

        BooksHttpRequestsService.getBooksRequest(`${search}&startIndex=${this.startIndex}`).then(result => {
            this.books = result.data.items;
            HttpRequestsService.getRequest(`ratings`).then(result2 => {
                for (var i = 0; i < this.books.length; i++) {
                    for (var j = 0; j < result2.data.bookData.length; j++) {
                        if (this.books[i].id == result2.data.bookData[j].bookId) {
                            this.books[i].bookRating = result2.data.bookData[j].bookRating;
                        }
                    }
                }
                this.finalBooks = this.books;
                this.pages = Math.ceil(result.data.totalItems / 10);
            });
        }).catch(err => {
            EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
        });
    }

    viewBook(id) {
        this.$router.push(`/book/${id}`);
    }

    bookRatingDisplay(rating) {
        if (rating == 0) {
            return "";
        } else {
            return rating;
        }

    }

}
