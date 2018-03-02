import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import { EventBus } from '../../main'
import HttpRequestsService from '../../services/HttpRequestsService';
import VueCharts from 'vue-chartjs'
import BookListGraph from '../Graphs/BookListGraph'

@Component({
    components: {
        BookListComponent: BookListGraph
    } 
})
export default class Profile extends Vue {
    userInformation = {};
    readingCount = 0;
    readCount = 0;
    planToReadCount = 0;
    abandonedCount = 0;
    usernameId = Vue.cookie.get('usernameId');

    created() {
        if(this.$route.params.id == null) {
            this.getUserInformation();
        } else {
            this.getOtherUserInformation();
        }
    }

    getUserInformation() {
        HttpRequestsService.getRequest("profile").then(result => {
            this.userInformation = result.data.user;
            this.readingCount = result.data.readingCount;
            this.readCount = result.data.readCount;
            this.planToReadCount = result.data.planToReadCount;
            this.abandonedCount = result.data.abandonedCount;
        }).catch(err => {
            EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
        });
    }

    getOtherUserInformation() {
        HttpRequestsService.getRequest(`user-profile?username=${this.$route.params.id}`).then(result => {
            this.userInformation = result.data.user;
            this.readingCount = result.data.readingCount;
            this.readCount = result.data.readCount;
            this.planToReadCount = result.data.planToReadCount;
            this.abandonedCount = result.data.abandonedCount;
        }).catch(err => {
            EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
        })
    }

    toBookList(usernameId){
        this.$router.push(`/book-list/${usernameId}`);
    }
}
