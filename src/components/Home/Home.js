import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import BooksHttpRequestsService from '../../services/BooksHttpRequestsService'
import HttpRequestsService from '../../services/HttpRequestsService'
import AuthenticationService from '../../services/AuthenticationService'
import { EventBus } from '../../main'

@Component
export default class Home extends Vue {
    loggedIn = AuthenticationService.loggedIn();

    created() {
        
    }



}
