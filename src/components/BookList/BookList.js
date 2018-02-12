import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import HttpRequestsService from '../../services/HttpRequestsService'
import { EventBus } from '../../main'

@Component
export default class BookList extends Vue {
    headers = [{text: "Title", value:"title", align: 'left'}, {text: "Author", value:"authors", align: 'left'}, {text: "Publisher", value:"publisher", align: 'left'}, {text: "Rating", value:"rating", align: 'left'} ]
    readingBookList = [];
    readBookList = [];
    planToReadBookList = [];
    abandonedBookList = [];


    created() {
       this.getBookList()
    }

    getBookList(){
        HttpRequestsService.getRequest("book-list").then(result => {
            console.log(result)
            this.readingBookList = result.data.readingStatus;
            this.readBookList = result.data.readStatus;
            this.planToReadBookList = result.data.planToReadStatus;
            this.abandonedBookList = result.data.abandonedStatus;     
        }).catch(err => {
            EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
        })
    }
}
