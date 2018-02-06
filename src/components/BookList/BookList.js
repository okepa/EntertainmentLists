import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import HttpRequestsService from '../../services/HttpRequestsService'

@Component
export default class BookList extends Vue {

    created() {
       
    }

    getBookList(){
        HttpRequestsService.getRequest("books").then(result => {
            
        }).catch(err => {

        })
    }
}
