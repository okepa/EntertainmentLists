<template>
    <div>
        <v-container align-content-center>
            <v-layout row>
                <v-flex xs12>
                    <v-card-title primary-title class="headline mb-0">
                        Reviews
                    </v-card-title>
                    <v-card-text>
                        <div v-for="review in reviews">
                            <v-card>
                                <v-flex xs12 class="text-xs-right">
                                    <v-btn color="error" flat @click="deleteUserReview(review.bookId)">Delete</v-btn>
                                </v-flex>
                                <v-flex xs12>
                                    <v-card-title primary-title class="title mb-0">
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
                    </v-card-text>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script src="./Reviews.js"></script>