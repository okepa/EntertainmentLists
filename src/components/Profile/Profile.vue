<template>
    <div>
        <v-container align-content-center>
            <v-layout row>
                <v-flex xs6 offset-xs3 @keyup.enter="login">
                    <v-card>
                        <v-card-title>
                            <v-layout row>
                                <v-flex>
                                    <h1 class="indigo--text text--darken-4">Profile</h1>
                                </v-flex>
                            </v-layout>
                        </v-card-title>
                        <v-card-text>
                            <v-layout row>
                                <v-flex class="ma-3">
                                    <v-text-field name="Username" label="Username" class="input-group--focused" v-model="profile.username" readonly></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex class="ma-3">
                                        <v-text-field name="Email" label="Email" class="input-group--focused" v-model="profile.email"></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex class="ma-3">
                                    <v-btn class="primary" @click="updateProfile" dark>Update</v-btn>
                                </v-flex>
                            </v-layout>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script src="./Profile.js"></script>
<style src="./Profile.css"></style>