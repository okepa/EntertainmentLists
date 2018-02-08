<template>
    <div>
        <v-container align-content-center>
            <v-layout row>
                <v-flex xs6 offset-xs3 @keyup.enter="login">
                    <v-card>
                        <v-card-title>
                            <v-layout row>
                                <v-flex>
                                    <h1 class="indigo--text text--darken-4">Register</h1>
                                </v-flex>
                            </v-layout>
                        </v-card-title>
                        <v-card-text>
                             <v-layout row>
                                <v-flex class="ma-3">
                                    <v-text-field name="Email" label="Email" class="input-group--focused" v-model="registration.email" required :error-messages="errors.collect('Email')" v-validate="'required|email'" data-vv-name="Email"></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                    <v-flex class="ma-3">
                                        <v-text-field name="Username" label="Username" class="input-group--focused" v-model="registration.username" required :error-messages="errors.collect('Username')" v-validate="'required'" data-vv-name="Username"></v-text-field>
                                    </v-flex>

                            </v-layout>
                            <v-layout row>
                                    <v-flex class="ma-3">
                                        <v-text-field name="Password" label="Password" class="input-group--focused" v-model="registration.password" type="password" required :error-messages="errors.collect('Password')" v-validate="'required|confirmed:ConfirmPassword'" data-vv-name="Password"></v-text-field>
                                    </v-flex>
                            </v-layout>
                            <v-layout row>
                                    <v-flex class="ma-3">
                                        <v-text-field name="ConfirmPassword" label="Confim Password" class="input-group--focused" v-model="registration.confirmPassword" type="password" required :error-messages="errors.collect('ConfirmPassword')" v-validate="'required'" data-vv-name="ConfirmPassword"></v-text-field>
                                    </v-flex>
                            </v-layout>
                            <v-layout row>
                                    <v-flex class="ma-3">
                                        <v-btn @click="register" class="primary" dark>Register</v-btn>
                                    </v-flex>
                            </v-layout> 
                                        </v-card-text>
                                    </v-card>
                                </v-flex>   
                            </v-layout>
        </v-container>
    </div>
</template>

<script src="./Register.js"></script>