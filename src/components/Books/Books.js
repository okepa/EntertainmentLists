import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import BooksHttpRequestsService from '../../services/BooksHttpRequestsService'
import { EventBus } from '../../main'
import HttpRequestsService from '../../services/HttpRequestsService';

@Component
export default class Books extends Vue {
    books = [];
    finalBooks = [];
    title = null;
    author = null;
    publisher = null;
    category = null;
    startIndex = 0;
    headers = [{ text: "Thumbnail", value: "thumbnail", align: "left" }, { text: "Title", value: "title", align: "left" }, { text: "Author", value: "authors", align: "left" }, { text: "Publisher", value: "publisher", align: "left" }, { text: "Description", value: "description", align: "left" }, { text: "Rating", value: "bookRating", align: "left" }]
    totalItems = 0;
    pagination = {};

    @Watch('pagination.page')
    onPageChange(val) {
        this.startIndex = this.pagination.page * 10 - 10;
        this.getBooks();
    }

    getBooks() {
        var search = "";
        var first = true;

        if (this.title != null) {
            search += `intitle:${this.title}`;
            first = false;
        }
        if (this.author != null) {
            if (!first) search += `+`;
            search += `inauthor:${this.author}`;
            first = false;
        }
        if (this.publisher != null) {
            if (!first) search += `+`;
            search += `inpublisher:${this.publisher}`;
            first = false;
        }
        if (this.category != null) {
            if (!first) search += `+`;
            search += `subject:${this.category}`;
        }
        if (search != "") {
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
                    this.totalItems = result.data.totalItems
                    this.pages = Math.ceil(result.data.totalItems / 10);
                });
            }).catch(err => {
                EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
            });
        }
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
