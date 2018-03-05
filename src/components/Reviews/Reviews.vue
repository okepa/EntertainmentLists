<template>
    <div>
        <v-container align-content-center grid-list-md>
            <v-layout row>
                <v-flex xs12>
                    <v-card-title primary-title class="headline mb-0">
                        Reviews
                        <v-spacer></v-spacer>
                        <div v-if="location == '/book/:bookid'">
                            <div v-if="loggedIn">
                                <v-btn flat color="primary" @click="reviewDialog = !reviewDialog">Review</v-btn>
                            </div>
                            <div v-else>
                                <v-btn color="primary" to="/login" dark flat>Log In</v-btn>
                            </div>
                        </div>
                    </v-card-title>
                    <v-card-text v-if="reviews.length > 0">
                        <div v-for="review in reviews">
                            <v-card class="mb-3">
                                <v-flex xs12 v-if="location == '/settings/reviews' || location == '/profile'">
                                    <v-card-title primary-title class="headline mb-0 pb-0 pt-0">
                                        {{review.bookTitle}}
                                        <v-spacer></v-spacer>
                                        <v-btn v-if="location == '/settings/reviews'" color="error" flat @click="deleteUserReview(review.bookId)">Delete</v-btn>
                                    </v-card-title>
                                </v-flex>
                                <v-flex xs12 v-if="location == '/book/:bookid'">
                                    <v-card-title class="subheading">
                                        <v-spacer></v-spacer>
                                        <div v-if="review.usernameId._id == usernameId">
                                                {{review.usernameId.username}}
                                        </div>
                                        <div v-else>
                                                <a @click="userBookList(review.usernameId._id)">{{review.usernameId.username}}</a>
                                        </div>

                                    </v-card-title>
                                </v-flex>
                                <v-flex xs12>
                                    <v-card-title class="title">
                                        {{review.reviewTitle}}
                                        <v-spacer></v-spacer>
                                        {{review.reviewRating}}
                                    </v-card-title>
                                </v-flex>
                                <v-card-text>
                                    <v-flex xs12>
                                        {{review.reviewContent}}
                                    </v-flex>
                                </v-card-text>
                            </v-card>
                        </div>
                        <v-pagination v-if="reviews.length > 0" :length="reviewCount" v-model="page" :total-visible="5"></v-pagination>
                    </v-card-text>
                    <v-card-text v-else class="text-xs-center">
                        There are no reviews here
                    </v-card-text>
                </v-flex>
            </v-layout>
        </v-container>
        <v-dialog v-model="reviewDialog" persistent max-width="50%">
            <v-card>
                <v-card-title class="headline mb-0">Review</v-card-title>
                <v-card-text>
                    <v-layout row>
                        <v-flex xs6 pa-1>
                            <v-text-field name="Title" label="Title" class="input-group--focused" v-model="review.reviewTitle" required :error-messages="errors.collect('Title')"
                                v-validate="'required'" data-vv-name="Title"></v-text-field>
                        </v-flex>
                        <v-flex xs6 pa-1>
                            <v-select name="Rating" v-bind:items="readingRating" v-model="review.reviewRating" label="Rating" class="input-group--focused"
                                item-value="rating" required :error-messages="errors.collect('Rating')" v-validate="'required'"
                                data-vv-name="Rating"></v-select>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex xs12 pa-1>
                            <v-text-field multi-line name="Content" label="Content" class="input-group--focused" v-model="review.reviewContent" required
                                :error-messages="errors.collect('Content')" v-validate="'required'" data-vv-name="Content"></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="error" flat @click.native="reviewDialog = !reviewDialog">Cancel</v-btn>
                    <v-btn color="success" flat @click.native="postReview">Submit</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script src="./Reviews.js"></script>