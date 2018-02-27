import Vue from 'vue'
import axios from 'axios';

export default class BooksHttpRequestsService{
    static getBooksRequest(data) {
        return new Promise((resolve, reject) => {
            axios.get(`${process.env.BOOKS_VOLUMES_API}?q=${data}&langRestrict=en&${process.env.KEY}`)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    static getBookRequest(data) {
        return new Promise((resolve, reject) => {
            axios.get(`${process.env.BOOKS_VOLUMES_API}/${data}?${process.env.KEY}`)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}