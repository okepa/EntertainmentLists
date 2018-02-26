import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { EventBus } from '../../main'

@Component
export default class Footer extends Vue {
    navigation = [{Title: "Home", Link: "/home"}, {Title: "Books", Link: "/books"}]
}
