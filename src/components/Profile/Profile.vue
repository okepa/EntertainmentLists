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
                            <v-flex xs12 v-if="userInformation._id != usernameId" class="text-xs-center">
                                <v-btn color="primary" flat small @click="toBookList(userInformation._id)">Book List</v-btn>
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
                            <v-flex xs12 v-if="readingCount == 0 && readCount == 0 && planToReadCount == 0 && abandonedCount == 0" class="text-xs-center">
                                The user has not added any books to their list
                            </v-flex>
                            <v-flex xs12 v-else >
                                <book-list-component></book-list-component>
                            </v-flex>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-flex>
</template>

<script src="./Profile.js"></script>
<style src="./Profile.css"></style>