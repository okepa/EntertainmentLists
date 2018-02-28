import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { EventBus } from '../../main'

@Component
export default class Footer extends Vue {
    navigation = [
        { title: "Home", route: "/home" },
        { title: "Books", route: "/books" },
        { title: "Users", route: "/users" }
    ]
    secureNavigation = [
        { title: 'Book List', route: '/book-list' },
        { title: 'Settings', route: '/settings/user-information' }
    ]
}
