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
export default class Settings extends Vue {
    userInformation = {title: "User Information", active: true, route: "/settings/user-information"};
    reviews = {title: "Reviews", active: false, route: "/settings/reviews"};
}
