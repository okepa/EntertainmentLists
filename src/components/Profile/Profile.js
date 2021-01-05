import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import { EventBus } from '../../main'
import HttpRequestsService from '../../services/HttpRequestsService';
import VueCharts from 'vue-chartjs'
import BookListGraph from '../Graphs/BookListGraph'
import Reviews from '../Reviews/Reviews'

@Component({
    components: {
        BookListComponent: BookListGraph,
        ReviewsComponent: Reviews
    } 
})
export default class Profile extends Vue {
    userInformation = {};
    bookCounts = {
        readingCount: 0,
        readCount: 0,
        planToReadCount: 0,
        abandonedCount: 0
    }
    usernameId = Vue.cookie.get('usernameId');

    created() {
        if(this.$route.params.profileid == null) {
            this.getUserInformation();
        } else {
            this.getOtherUserInformation();
        }
    }

    @Watch('$route.params.profileid')
    onRouteChange(val){
        if(this.$route.params.profileid == null) {
            this.getUserInformation();
        } else {
            this.getOtherUserInformation();
        }
    }

    getUserInformation() {
        HttpRequestsService.getRequest("profile").then(result => {
            this.userInformation = result.data.user;
            this.bookCounts.readingCount = result.data.readingCount;
            this.bookCounts.readCount = result.data.readCount;
            this.bookCounts.planToReadCount = result.data.planToReadCount;
            this.bookCounts.abandonedCount = result.data.abandonedCount;
        }).catch(err => {
            EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
        });
    }

    getOtherUserInformation() {
        HttpRequestsService.getRequest(`user-profile?username=${this.$route.params.profileid}`).then(result => {
            this.userInformation = result.data.user;
            this.bookCounts.readingCount = result.data.readingCount;
            this.bookCounts.readCount = result.data.readCount;
            this.bookCounts.planToReadCount = result.data.planToReadCount;
            this.bookCounts.abandonedCount = result.data.abandonedCount;
        }).catch(err => {
            EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
        })
    }

    toBookList(usernameId){
        this.$router.push(`/book-list/${usernameId}`);
    }
}
