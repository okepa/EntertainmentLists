<template>
        <v-flex xs8 offset-xs2>
            <v-container fluid grid-list-md>
                <v-layout row wrap>
                    <!-- Left user details -->
                    <v-flex d-flex xs3 class="text-xs-left">
                        <v-card>
                            <v-flex xs12>
                                <!-- Thumbnail placeholder -->
                                <!-- <v-card-media v-if="book.imageLinks != null" :src="book.imageLinks.thumbnail" height="225"></v-card-media> -->
                            </v-flex>
                            <v-card-text>
                                <v-flex xs12>
                                    <span class="bold">Username:</span>
                                    <p>
                                        {{userInformation.username}}</p>
                                </v-flex>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <!-- Center stats -->
                    <v-flex d-flex xs9 class="text-xs-left">
                        <v-card>
                            <v-flex xs12>
                                <v-card-title primary-title class="headline mb-0">
                                    Statistics
                                </v-card-title>
                            </v-flex>
                            <v-card-text>
                                <v-flex xs6>
                                    <span class="bold">Books Reading:</span>
                                    <p>
                                        {{readingCount}}</p>
                                </v-flex>
                                <v-flex xs6>
                                    <span class="bold">Books Read:</span>
                                    <p>
                                        {{readCount}}</p>
                                </v-flex>
                                <v-flex xs6>
                                    <span class="bold">Books Plan To Read:</span>
                                    <p>
                                        {{planToReadCount}}</p>
                                </v-flex>
                                <v-flex xs6>
                                    <span class="bold">Books Abandoned:</span>
                                    <p>
                                        {{abandonedCount}}</p>
                                </v-flex>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
</template>

<script src="./BookListGraph.js"></script>
<style src="./Profile.css"></style>