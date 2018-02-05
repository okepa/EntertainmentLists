/* globals localStorage */
import Vue from 'vue'
import HttpRequestsService from './HttpRequestsService'

export default class AuthenticationService{
  static login(email, pass, cb) {
    
    cb = arguments[arguments.length - 1]
    if (Vue.cookie.get('cookie')) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    HttpRequestsService.postRequest("login", { username: email, password: pass }).then(response => {
      if (response.data.success) {
        Vue.cookie.set('cookie', response.data.token, 1);
        if (cb) cb(true)
        this.onChange(true)
      } else {
        if (cb) cb(false)
        this.onChange(false)
      }
    }).catch(err => {

    });
  }

  static getToken() {
    return Vue.cookie.get('cookie');
  }

  static logout(cb) {
    Vue.cookie.delete('cookie');
    if (cb) cb()
    this.onChange(false)
  }

  static loggedIn() {
    return !!Vue.cookie.get('cookie');
  }

  static onChange() { }
}