<template>
    <div>
        <v-container align-content-center>
            <v-layout row>
                <v-flex xs12>
                        <v-card-title primary-title class="headline mb-0">
                            User Information
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
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script src="./UserInformation.js"></script>
<style src="./UserInformation.css"></style>