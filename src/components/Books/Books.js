import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import BooksHttpRequestsService from '../../services/BooksHttpRequestsService'

@Component
export default class Books extends Vue {
    books = [];
    page = 1;
    title = null;
    author = null;
    publisher = null;
    startIndex = 0;
    headers = [{text: "Title", value:"title", align:"left"}, {text: "Author", value:"authors", align:"left"}, {text: "Publisher", value:"publisher", align:"left"}, {text: "Description", value:"description", align:"left"} ]
    created(){
        this.getBooks();
    }

    @Watch('page')
    onPageChange(val){
        this.startIndex += 10;
        this.getBooks();
    }

    getBooks(){
        var search = null;
        if(this.title != null) search += `+intitle:${this.title}`;
        if(this.author != null) search += `+inauthor:${this.author}`;
        if(this.publisher) search += `+inpublisher:${this.publisher}`;

        BooksHttpRequestsService.getBooksRequest(`${search}&startIndex=${this.startIndex}`).then(result => {
            console.log(result.data.items);
            this.books = result.data.items;
        }).catch(err => {

        });
    }

    viewBook(id){
        this.$router.push(`/book/${id}`);
    }

}
