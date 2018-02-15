<template>
    <div>
        <v-container fluid grid-list-md>
            <v-layout row>
                <v-flex d-flex xs3>
                    <v-card>
                        <v-list class="pt-0 pb-0">
                            <v-divider></v-divider>
                            <!-- <div v-for="option in options" :key="option.title"> -->
                            <v-list-tile @click="userInformation.active=!userInformation.active">
                                <v-list-tile-content>
                                    <v-list-tile-title>{{userInformation.title}}</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-divider></v-divider>
                            <v-list-tile @click="reviews.active=!reviews.active">
                                <v-list-tile-content>
                                    <v-list-tile-title>{{reviews.title}}</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <!-- </div> -->
                        </v-list>
                    </v-card>
                </v-flex>
                <v-flex d-flex xs9>
                    <v-card>
                        <!-- <div v-for="option in options"> -->
                            <div v-if="userInformation.active">
                                <user-information-component></user-information-component>
                            </div>
                            <div v-if="reviews.active">
                                <reviews-component></reviews-component>
                            </div>
                        <!-- </div> -->
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script src="./Profile.js"></script>