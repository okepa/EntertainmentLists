import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'

@Component
export default class Navmenu extends Vue {
    drawer = null;
    
    navigation = [
        { title: 'Home', route: '/home' },
        { title: 'Register', route: '/register' },
        { title: 'Books', route: '/books' },
        { title: 'Book List', route: '/book-list'}
      ];
}