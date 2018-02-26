<template>
    <v-footer class="pa-3 primary" >
        <v-layout row wrap justify-center>
            <v-btn dark flat v-for="nav in navigation" :key="nav.Title" :to="nav.Link">
                {{ nav.Title }}
            </v-btn>
            <v-flex xs12 py-3 text-xs-center white--text>
                &copy;2018 —
                <strong>Entertainment Lists</strong>
            </v-flex>
        </v-layout>
    </v-footer>
</template>

<script src="./Footer.js"></script>