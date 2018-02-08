<template>
    <v-flex xs8 offset-xs2>
        <v-container fluid grid-list-md>
            <v-layout row wrap>
                <!-- Left book details -->
                <v-flex xs3 class="text-xs-left">
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
                <v-flex xs9 class="text-xs-left">
                    <v-card>
                        <v-flex xs12>
                            <v-card-title primary-title>
                                <h3 class="headline mb-0">{{book.title}}</h3>
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
                <v-flex xs3 class="text-xs-left">
                    <v-card>
                        <v-flex xs12>
                            <v-card-title primary-title>
                                <h3 class="title mb-0">Add to book list</h3>
                            </v-card-title>
                        </v-flex>
                        <v-card-text>
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
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-flex>
</template>

<script src="./Book.js"></script>
<style src="./Book.css"></style>