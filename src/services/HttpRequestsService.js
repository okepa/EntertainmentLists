import Vue from 'vue'
import axios from 'axios';

export default class HttpRequestsService{
    static getRequest(route) {
        return new Promise((resolve, reject) => {
            var headers = {
                headers: { 'Access-Control-Allow-Origin': '*', "x-access-token": Vue.cookie.get('cookie'), "username-id": Vue.cookie.get('usernameId') }
            }
            axios.get(process.env.API_URL + route, headers)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    static postRequest(route, item) {
        return new Promise((resolve, reject) => {
            var headers = {
                headers: { 'Access-Control-Allow-Origin': '*', "x-access-token": Vue.cookie.get('cookie'), "username-id": Vue.cookie.get('usernameId') }
            }
            axios.post(process.env.API_URL + route, item, headers)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    static deleteRequest(route) {
        return new Promise((resolve, reject) => {
            var headers = {
                headers: { 'Access-Control-Allow-Origin': '*', "x-access-token": Vue.cookie.get('cookie'), "username-id": Vue.cookie.get('usernameId') }
            }
            axios.delete(process.env.API_URL + route, headers)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}