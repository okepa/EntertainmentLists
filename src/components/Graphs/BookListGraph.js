import Vue from 'vue'
import { mixins } from 'vue-class-component'
import { Component, Watch, Prop } from 'vue-property-decorator'
import HttpRequestsService from '../../services/HttpRequestsService'
import { Pie } from 'vue-chartjs'
import { EventBus } from '../../main'

@Component
export default class BookListGraph extends mixins(Pie) {
    mounted() {
        this.renderChart({
            labels: ['Reading', 'Read', 'Plan To Read', 'Abandoned'],
            datasets: [
                {
                    backgroundColor: ['red', 'blue', 'green', 'yellow'],
                    data: [this.bookCounts.readingCount, this.bookCounts.readCount, this.bookCounts.planToReadCount, this.bookCounts.abandonedCount]
                }
            ]
        })
    }

    @Prop()
    bookCounts;
}