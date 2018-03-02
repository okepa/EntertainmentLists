<template>
    <v-flex xs8 offset-xs2>
        <v-container fluid grid-list-md>
            <v-card>
                <v-card-text>
                    <v-layout row>
                        <v-flex xs6 pr-3>
                            <v-text-field v-on:keyup.enter="getUsers" name="username" label="Username" v-model="username.username" class="input-group--focused"></v-text-field>
                        </v-flex>
                        <v-flex xs6 pr-3 class="text-xs-center">
                            <v-btn @click="getUsers" class="primary">Search</v-btn>
                        </v-flex>
                    </v-layout>
                </v-card-text>
            </v-card>
            <!-- Displayed results in data table -->
            <v-layout row>
                <v-flex class="text-xs-center">
                    <v-data-table v-bind:headers="headers" :items="users" class="elevation-1">
                        <template slot="items" slot-scope="props">
                            <tr @click="viewUser(props.item._id)">
                                <td class="text-xs-left click">{{ props.item.username }}</td>
                            </tr>
                        </template>
                    </v-data-table>
                </v-flex>
            </v-layout>
        </v-container>
    </v-flex>
</template>

<script src="./Users.js"></script>