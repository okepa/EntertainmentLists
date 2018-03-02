import Vue from 'vue'
import { mixins } from 'vue-class-component'
import { Component, Watch } from 'vue-property-decorator'
import HttpRequestsService from '../../services/HttpRequestsService'
import { Pie } from 'vue-chartjs'
import { EventBus } from '../../main'

@Component
export default class BookListGraph extends mixins(Pie) {
    readingCount = 0;
    readCount = 0;
    planToReadCount = 0;
    abandonedCount = 0;

    mounted() {
        if (this.$route.params.id == null) {
            this.getUserInformation().then(() => {
                this.renderChart({
                    labels: ['Reading', 'Read', 'Plan To Read', 'Abandoned'],
                    datasets: [
                        {
                            backgroundColor: ['red', 'blue', 'green', 'yellow'],
                            data: [this.readingCount, this.readCount, this.planToReadCount, this.abandonedCount]
                        }
                    ]
                })
            });
        } else {
            this.getOtherUserInformation().then(() => {
                this.renderChart({
                    labels: ['Reading', 'Read', 'Plan To Read', 'Abandoned'],
                    datasets: [
                        {
                            backgroundColor: ['red', 'blue', 'green', 'yellow'],
                            data: [this.readingCount, this.readCount, this.planToReadCount, this.abandonedCount]
                        }
                    ]
                })
            });
        }

    }

    getUserInformation() {
        return new Promise((resolve, reject) => {
            HttpRequestsService.getRequest("profile").then(result => {
                this.readingCount = result.data.readingCount;
                this.readCount = result.data.readCount;
                this.planToReadCount = result.data.planToReadCount;
                this.abandonedCount = result.data.abandonedCount;
                resolve();
            }).catch(err => {
                EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
                reject();
            });
        })
    }

    getOtherUserInformation() {
        return new Promise((resolve, reject) => {
            HttpRequestsService.getRequest(`user-profile?username=${this.$route.params.id}`).then(result => {
                this.readingCount = result.data.readingCount;
                this.readCount = result.data.readCount;
                this.planToReadCount = result.data.planToReadCount;
                this.abandonedCount = result.data.abandonedCount;
                resolve();
            }).catch(err => {
                EventBus.$emit('toast', { type: "error", text: "Oops something went wrong" });
                reject();
            });
        })
    }
}