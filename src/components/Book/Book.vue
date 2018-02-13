<template>
    <div>
        <v-flex xs8 offset-xs2>
            <v-container fluid grid-list-md>
                <v-layout row wrap>
                    <!-- Left book details -->
                    <v-flex d-flex xs3 class="text-xs-left">
                        <v-card>
                            <v-flex xs12>
                                <!-- <v-card-media :src="book.imageLinks.thumbnail"></v-card-media> -->
                                <!-- <img :src="book.imageLinks.thumbnail"> -->
                            </v-flex>
                            <v-card-text>
                                <v-flex xs12>
                                    <span class="bold">Authors:</span>
                                    <div v-for="author in book.authors">
                                        <p>
                                            {{author}}</p>
                                    </div>
                                    <p>
                                        <span class="bold text-xs-left">Publisher:</span> {{book.publisher}}</p>
                                    <span class="bold">Categories:</span>
                                    <div v-for="category in book.categories">
                                        <p>
                                            {{category}}</p>
                                    </div>
                                    <p>
                                        <span class="bold text-xs-left">Published Date:</span> {{book.publishedDate}}</p>
                                </v-flex>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <!-- Center book details -->
                    <v-flex d-flex xs9 class="text-xs-left">
                        <v-card>
                            <v-flex xs12>
                                <v-card-title primary-title class="headline mb-0">
                                    {{book.title}}
                                </v-card-title>
                            </v-flex>
                            <v-card-text>
                                <v-flex xs12>
                                    <p v-html=book.description class="text-xs-left"></p>
                                </v-flex>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <!-- Left side book list interface -->
                    <v-flex d-flex xs3 class="text-xs-center">
                        <v-card>
                            <v-flex xs12>
                                <v-card-title primary-title class="title mb-0">
                                    Add to book list
                                </v-card-title>
                            </v-flex>
                            <v-card-text v-if="loggedIn">
                                <v-flex xs12>
                                    <v-select v-bind:items="readingStatus" v-model="bookList.bookStatus" label="Status" class="input-group--focused" item-value="status"></v-select>
                                </v-flex>
                                <v-flex xs12>
                                    <v-select v-bind:items="readingRating" v-model="bookList.bookRating" label="Rating" class="input-group--focused" item-value="rating"></v-select>
                                </v-flex>
                                <v-flex xs12>
                                    <v-btn @click="listSubmition" color="primary">Submit</v-btn>
                                </v-flex>
                            </v-card-text>
                            <v-card-text v-else>
                                <v-flex xs12>
                                    <v-btn class="primary" to="/login" dark flat>Log In</v-btn>
                                </v-flex>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <!-- Reviews -->
                    <v-flex d-flex xs9 class="text-xs-left">
                        <v-card>
                            <v-flex xs12>
                                <v-card-title primary-title class="headline mb-0">
                                    Reviews
                                    <v-spacer></v-spacer>
                                    <div v-if="loggedIn">
                                        <v-btn flat color="primary" @click="reviewDialog = !reviewDialog">Review</v-btn>
                                    </div>
                                    <div v-else>
                                        <v-btn class="primary" to="/login" dark flat>Log In</v-btn>
                                    </div>
                                </v-card-title>
                            </v-flex>
                            <v-card-text>
                                <div v-for="review in reviews">
                                    <v-card>
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
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
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

<script src="./Book.js"></script>
<style src="./Book.css"></style>