<template>
    <v-flex xs8 offset-xs2>
        <v-container>
            <v-layout row>
                <v-flex xs3 pr-3>
                    <v-text-field name="title" label="Title" v-model="title" class="input-group--focused"></v-text-field>
                </v-flex>
                <v-flex xs3 pr-3>
                    <v-text-field name="author" label="Author" v-model="author" class="input-group--focused"></v-text-field>
                </v-flex>
                <v-flex xs3 pr-3>
                    <v-text-field name="publisher" label="Publisher" v-model="publisher" class="input-group--focused"></v-text-field>
                </v-flex>
                <v-flex xs3 pr-3>
                    <v-btn @click="getBooks" class="primary">Search</v-btn>
                </v-flex>
            </v-layout>
            <!-- Displayed results in data table -->
            <v-layout row>
                <v-flex>
                    <v-data-table v-bind:headers="headers" :items="finalBooks" hide-actions class="elevation-1">
                        <template slot="items" slot-scope="props">
                            <tr @click="viewBook(props.item.id)">
                                <td class="text-xs-left">{{ props.item.volumeInfo.title }}</td>
                                <td class="text-xs-left">{{ props.item.volumeInfo.authors[0] }}</td>
                                <td class="text-xs-left">{{ props.item.volumeInfo.publisher }}</td>
                                <td class="text-xs-left">{{ props.item.volumeInfo.description }}</td>
                                <td class="text-xs-left">{{ props.item.bookRating }}</td>
                            </tr>
                        </template>
                    </v-data-table>
                    <v-pagination v-bind:length.number="15" v-model="page"></v-pagination>
                </v-flex>
            </v-layout>
        </v-container>
    </v-flex>
</template>

<script src="./Books.js"></script>