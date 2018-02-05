import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import BooksHttpRequestsService from '../../services/BooksHttpRequestsService'

@Component
export default class Book extends Vue {
    bookId;
    created(){
        this.bookId = this.$route.params.bookid
        this.getBook();
    }

    getBook(){
        BooksHttpRequestsService.getBookRequest(`${this.bookid}`).then(result => {
            console.log(result);
            this.book = result.data.items;
        }).catch(err => {

        });
    }

}
