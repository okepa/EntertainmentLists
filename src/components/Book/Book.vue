<template>
        <v-flex xs8 offset-xs2>
            <v-container fluid grid-list-md>
                <v-layout row wrap>
                    <!-- Left book details -->
                    <v-flex d-flex xs3 class="text-xs-left">
                        <v-card>
                            <v-flex xs12>
                                <v-card-media v-if="book.imageLinks != null" :src="book.imageLinks.thumbnail" height="225"></v-card-media>
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
                                    <v-select v-bind:items="readingStatus" v-model="bookList.bookStatus" label="Status" class="input-group--focused" item-value="status"
                                        required :error-messages="errors.collect('Status')" v-validate="'required'" data-vv-name="Status"></v-select>
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
                                    <v-btn color="primary" to="/login" dark flat>Log In</v-btn>
                                </v-flex>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <!-- Similar books -->
                    <v-flex d-flex xs9 class="text-xs-left">
                        <v-card>
                            <v-flex xs12>
                                <v-card-title primary-title class="title mb-0">
                                    Similar Books
                                </v-card-title>
                            </v-flex>
                            <v-flex xs12 justify-center class="pa-3 text-xs-center align-center mx-auto" v-if="this.book.categories != null">
                                <v-carousel style="height:400px; width:275px; margin:auto;" class="text-xs-center mx-auto align-center">
                                    <v-carousel-item v-if="item.volumeInfo.imageLinks != null" v-for="(item,i) in similarBooks" :src="item.volumeInfo.imageLinks.thumbnail"
                                        :key="i" style="background-size: 275px" @click="viewSimilarBook(item.id)" class="click"></v-carousel-item>
                                </v-carousel>
                            </v-flex>
                            <v-flex xs12 justify-center class="pa-3 text-xs-center align-center mx-auto" v-else>
                                There are no similar book
                            </v-flex>
                        </v-card>
                    </v-flex>
                    <!-- Reviews -->
                    <v-flex d-flex xs12 class="text-xs-left">
                        <v-card>
                            <reviews-component></reviews-component>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
</template>

<script src="./Book.js"></script>
<style src="./Book.css"></style>