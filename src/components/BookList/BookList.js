import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import HttpRequestsService from '../../services/HttpRequestsService'

@Component
export default class BookList extends Vue {
    headers = [{text: "Title", value:"title", align: 'left'}, {text: "Author", value:"authors", align: 'left'}, {text: "Publisher", value:"publisher", align: 'left'}, {text: "Rating", value:"rating", align: 'left'} ]
    bookList = [];

    created() {
       this.getBookList()
    }

    getBookList(){
        HttpRequestsService.getRequest("books").then(result => {
            this.bookList = result.data.bookList.books;
            console.log(this.bookList);
        }).catch(err => {
        })
    }
}
