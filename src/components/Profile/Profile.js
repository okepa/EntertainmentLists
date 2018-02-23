import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import HttpRequestsService from '../../services/HttpRequestsService'
import UserInformation from '../UserInformation/UserInformation.vue'
import Reviews from '../Reviews/Reviews.vue'
import { EventBus } from '../../main'

@Component({
    components:{
        UserInformationComponent: UserInformation,
        ReviewsComponent: Reviews
    }
})
export default class Profile extends Vue {
    userInformation = {title: "User Information", active: true, route: "/profile/user-information"};
    reviews = {title: "Reviews", active: false, route: "/profile/reviews"};
}
