<template>
    <v-flex>
        <v-container fluid grid-list-md>
            <v-layout row>
                <v-flex d-flex xs3>
                    <v-card>
                        <v-list class="pt-0 pb-0">
                            <v-divider></v-divider>
                            <v-list-tile @click="userInformation.active=true; reviews.active=false" :to="userInformation.route">
                                <v-list-tile-content>
                                    <v-list-tile-title>{{userInformation.title}}</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-divider></v-divider>
                            <v-list-tile @click="reviews.active=true; userInformation.active=false" :to="reviews.route">
                                <v-list-tile-content>
                                    <v-list-tile-title>{{reviews.title}}</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-divider></v-divider>
                        </v-list>
                    </v-card>
                </v-flex>
                <v-flex d-flex xs9>
                    <v-card>
                        <router-view></router-view>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-flex>
</template>

<script src="./Settings.js"></script>