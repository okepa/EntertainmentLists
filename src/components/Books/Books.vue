<template>
    <v-flex xs8 offset-xs2>
        <v-container fluid grid-list-md>
            <v-card>
                <v-card-text>
                    <v-layout row>
                        <v-flex xs3 pr-3>
                            <v-text-field v-on:keyup.enter="getBooks" name="title" label="Title" v-model="title" class="input-group--focused"></v-text-field>
                        </v-flex>
                        <v-flex xs3 pr-3>
                            <v-text-field v-on:keyup.enter="getBooks" name="author" label="Author" v-model="author" class="input-group--focused"></v-text-field>
                        </v-flex>
                        <v-flex xs3 pr-3>
                            <v-text-field v-on:keyup.enter="getBooks" name="publisher" label="Publisher" v-model="publisher" class="input-group--focused"></v-text-field>
                        </v-flex>
                        <v-flex xs3 pr-3>
                                <v-text-field v-on:keyup.enter="getBooks" name="category" label="Genre" v-model="category" class="input-group--focused"></v-text-field>
                        </v-flex>
                        <v-flex xs3 pr-3 class="text-xs-center">
                            <v-btn @click="getBooks" class="primary">Search</v-btn>
                        </v-flex>
                    </v-layout>
                </v-card-text>
            </v-card>
            <!-- Displayed results in data table -->
            <v-layout row>
                <v-flex class="text-xs-center">
                    <v-data-table v-bind:headers="headers" :items="finalBooks" class="elevation-1" :total-items="totalItems" rows-per-page-text="10" :rows-per-page-items=[10] :pagination.sync="pagination">
                        <template slot="items" slot-scope="props">
                            <tr @click="viewBook(props.item.id)">
                                <td v-if="props.item.volumeInfo.imageLinks != null" class="text-xs-left pa-1"><img :src="props.item.volumeInfo.imageLinks.smallThumbnail" height="175" width="125"></img> </td>
                                <td v-else></td>
                                <td class="text-xs-left">{{ props.item.volumeInfo.title }}</td>
                                <td v-if="props.item.volumeInfo.authors != null" class="text-xs-left">{{ props.item.volumeInfo.authors[0] }}</td>
                                <td v-else></td>
                                <td class="text-xs-left">{{ props.item.volumeInfo.publisher }}</td>
                                <td class="text-xs-left">{{ props.item.volumeInfo.description }}</td>
                                <td class="text-xs-left">{{ bookRatingDisplay(props.item.bookRating) }}</td>
                            </tr>
                        </template>
                    </v-data-table>
                </v-flex>
            </v-layout>
        </v-container>
    </v-flex>
</template>

<script src="./Books.js"></script>