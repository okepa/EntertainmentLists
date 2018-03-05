<template>
    <v-layout row class="text-xs-center">
        <v-flex xs6 offset-sm3 class="mt-5">
            <v-btn class="primary" dark to="/register" v-if="!loggedIn">Register</v-btn>
            <v-btn class="primary" dark to="/books">Books</v-btn>
            <v-btn class="primary" dark to="/users">Users</v-btn>
            <v-btn class="primary" dark to="/book-list" v-if="loggedIn">Book List</v-btn>
            <v-btn class="primary" dark to="/profile" v-if="loggedIn">Profile</v-btn>
            <v-btn class="primary" dark to="/settings/user-information" v-if="loggedIn">Settings</v-btn>
        </v-flex>
    </v-layout>
</template>

<script src="./Home.js"></script>