import Vue from 'vue'
import axios from 'axios';

export default class BooksHttpRequestsService{
    static getRequest(data) {
        return new Promise((resolve, reject) => {
            axios.get(`${process.env.BOOKS_VOLUMES_API}${data}&langRestrict=en${process.env.KEY}`)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}