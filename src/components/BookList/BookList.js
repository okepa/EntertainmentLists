import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import HttpRequestsService from '../../services/HttpRequestsService'
import { EventBus } from '../../main'

@Component
export default class BookList extends Vue {
    headers = [{text: "Title", value:"title", align: 'left'}, {text: "Author", value:"authors", align: 'left'}, {text: "Publisher", value:"bookPublisher", align: 'left'}, {text: "Rating", value:"rating", align: 'left'},{text: "Options", value:"options", align: 'center'}  ]
    readingRating = ["", 1, 2, 3, 4, 5];
    readingBookList = [];
    readBookList = [];
    planToReadBookList = [];
    abandonedBookList = [];
    readOnly = false;


    created() {
        if(this.$route.params.id == null){
            this.getBookList();
        } else {
            this.getUserBookList();
        }
    }

    @Watch('$route.params.id')
    onRouteChange(val){
        if(this.$route.params.id == null){
            this.getBookList();
        } else {
            this.getUserBookList();
        }
    }

    getBookList(){
        this.readOnly = false;
        HttpRequestsService.getRequest("book-list").then(result => {
            this.readingBookList = result.data.readingStatus;
            this.readBookList = result.data.readStatus;
            this.planToReadBookList = result.data.planToReadStatus;
            this.abandonedBookList = result.data.abandonedStatus;
        }).catch(err => {
            EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
        })
    }

    
    viewBook(id){
        this.$router.push(`/book/${id}`);
    }

    deleteFromList(id){
        HttpRequestsService.deleteRequest(`book-list?b=${id}`).then(result => {
            this.getBookList();
            EventBus.$emit('success', { type: "error", text: result.data.message });
        }).catch(err => {
            EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
        })
    }

    changeRating(id){
       //look for id in array
        var obj = this.readingBookList.find(o => o.bookId = id);
        HttpRequestsService.postRequest("book-list", obj).then(result => {
            EventBus.$emit('success', { type: "error", text: result.data.message });
        }).catch(err => {
            EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
        })
    }

    getUserBookList(){
        HttpRequestsService.getRequest(`user-book-list?username=${this.$route.params.id}`).then(result => {
            this.readOnly = true;
            this.readingBookList = result.data.readingStatus;
            this.readBookList = result.data.readStatus;
            this.planToReadBookList = result.data.planToReadStatus;
            this.abandonedBookList = result.data.abandonedStatus;
        }).catch(err => {
            EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
        })
    }
}
