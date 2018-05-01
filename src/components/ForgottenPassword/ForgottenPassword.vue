<template>
    <v-flex xs5 offset-xs3>
        <v-container align-content-center>
            <v-layout row wrap>
                <v-flex @keyup.enter="sendForgottenEmail">
                    <v-card>
                        <v-card-title primary-title class="headline mb-0">
                            Forgotten Password
                        </v-card-title>
                        <v-card-text>
                            <v-layout row>
                                <v-flex class="ma-3">
                                    <v-text-field name="Username" label="Username" class="input-group--focused" v-model="forgottenPassword.username" required :error-messages="errors.collect('Username')"
                                        v-validate="'required'" data-vv-name="Username"></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex class="ma-3">
                                    <v-text-field name="Email" label="Email" class="input-group--focused" v-model="forgottenPassword.email" required :error-messages="errors.collect('Email')"
                                        v-validate="'required|email'" data-vv-name="Email"></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                    <v-flex class="ma-3">
                                        <v-btn @click="sendForgottenEmail" class="primary" dark>Send</v-btn>
                                    </v-flex>
                                </v-layout>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-flex>
</template>

<script src="./ForgottenPassword.js"></script>