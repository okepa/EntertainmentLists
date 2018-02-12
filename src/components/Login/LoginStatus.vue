<template>
    <div>
        <v-layout row>
            <v-flex xs12 class="text-xs-right" v-if="token != null">
                <v-btn class="primary" to="/logout" dark flat>Log Out</v-btn>
            </v-flex>
            <v-flex xs12 lg12 class="text-xs-right" v-if="token == null">
                <v-btn class="primary" to="/login" dark flat>Log In</v-btn>
                <v-btn class="primary" to="/register" dark flat>Register</v-btn>
            </v-flex>
        </v-layout>
    </div>
</template>

<script src="./LoginStatus.js"></script>