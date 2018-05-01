<template>
    <v-flex xs5 offset-xs3>
        <v-container align-content-center>
            <v-layout row wrap>
                <v-flex @keyup.enter="changePassword">
                    <v-card>
                        <v-card-title primary-title class="headline mb-0">
                            Change Password
                        </v-card-title>
                        <v-card-text>
                            <v-layout row>
                                <v-flex class="ma-3">
                                    <v-text-field name="Password" label="Password" class="input-group--focused" v-model="changePassword.password" type="password"
                                        required :error-messages="errors.collect('Password')" v-validate="'required|confirmed:ConfirmPassword'"
                                        data-vv-name="Password"></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex class="ma-3">
                                    <v-text-field name="ConfirmPassword" label="Confim Password" class="input-group--focused" v-model="changePassword.confirmPassword"
                                        type="password" required :error-messages="errors.collect('ConfirmPassword')" v-validate="'required'"
                                        data-vv-name="ConfirmPassword"></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex class="ma-3">
                                    <v-btn @click="changePassword" class="primary" dark>Send</v-btn>
                                </v-flex>
                            </v-layout>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-flex>
</template>

<script src="./ChangePassword.js"></script>