<template>
    <v-footer height="auto" class="primary">
        <v-layout row wrap class="px-3 white--text">
                <v-flex xs6 text-xs-center class="py-3 subheading" v-if="token != null">
                    All Users
                    <v-divider dark class="mt-2"></v-divider>
                    <div v-for="nav in navigation" :key="nav.title">
                        <v-btn flat dark small class="mb-0" :to="nav.route">
                            {{ nav.title }}
                        </v-btn>
                    </div>
                </v-flex>
                <v-flex xs6 text-xs-center class="py-3 subheading" v-if="token != null">
                    Logged In
                    <v-divider dark class="mt-2"></v-divider>
                    <div v-for="secureNav in secureNavigation" :key="secureNav.title" >
                        <v-btn flat dark small class="mb-0" :to="secureNav.route">
                            {{ secureNav.title }}
                        </v-btn>
                    </div>
                </v-flex>
                    <v-flex xs12 text-xs-center class="py-3 subheading" v-if="token == null">
                            All Users
                            <v-divider dark class="mt-2"></v-divider>
                            <div v-for="nav in navigation" :key="nav.title">
                                <v-btn flat dark small class="mb-0" :to="nav.route">
                                    {{ nav.title }}
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