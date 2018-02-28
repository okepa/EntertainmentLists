<template>
    <v-footer height="auto" class="primary">
        <v-layout row wrap class="px-3 white--text">
            <v-flex xs6 text-xs-center class="py-3 subheading">
                All Users
                <v-divider dark class="mt-2"></v-divider>
                <div v-for="nav in navigation" :key="nav.title" :to="nav.route">
                    <v-btn flat dark small>
                        {{ nav.title }}
                    </v-btn>
                </div>
            </v-flex>
            <v-flex xs6 text-xs-center class="py-3 subheading">
                Username
                <v-divider dark class="mt-2"></v-divider>
                <div v-for="secureNav in secureNavigation" :key="secureNav.title" :to="secureNav.route">
                    <v-btn flat dark small>
                        {{ secureNav.title }}
                    </v-btn>
                </div>
            </v-flex>
            <v-flex xs12>
                <v-divider dark></v-divider>
            </v-flex>
            <v-flex xs12 py-3 text-xs-center>

                &copy;2018 —
                <strong>Entertainment Lists</strong>
            </v-flex>
        </v-layout>
    </v-footer>
</template>

<script src="./Footer.js"></script>