<template>
        <v-flex xs8 offset-xs2>
            <v-container fluid grid-list-md>
                <v-layout row wrap>
                    <v-flex v-if="activationSuccessful">
                       Account has been successfully activated
                    </v-flex>
                    <v-flex v-else>
                        Account was not activated please try the link again
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
</template>

<script src="./ValidateAccount.js"></script>