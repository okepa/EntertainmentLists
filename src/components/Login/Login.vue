<template>
    <div>
        <v-alert color="error" icon="error" dismissible v-model="error">
            {{message}}
        </v-alert>
        <v-container align-content-center>
            <v-layout row>
                <v-flex xs6 offset-xs3 @keyup.enter="login">
                    <v-card>
                        <v-card-title>
                            <v-layout row>
                                <v-flex>
                                    <h1 class="indigo--text text--darken-4">Login</h1>
                                </v-flex>
                            </v-layout>
                        </v-card-title>
                        <v-card-text>
                            <v-layout row>
                                <v-flex class="ma-3">
                                    <v-text-field name="Email" label="Email" class="input-group--focused" v-model="email" ></v-text-field>
                                </v-flex>
                                </v-layout>
                                <v-layout row>
                                <v-flex  class="ma-3">
                                    <v-text-field name="Password" label="Password" class="input-group--focused" v-model="pass" type="password"></v-text-field>
                                </v-flex>
                                </v-layout>
                                <v-layout row>
                                <v-flex class="ma-3">
                                    <v-btn @click="login" class="primary" dark>Login</v-btn>
                                </v-flex>
                            </v-layout>
                        </v-card-text>
                    </v-card>
                </v-flex>   
            </v-layout>
        </v-container>
    </div>
</template>

<script src="./Login.js"></script>