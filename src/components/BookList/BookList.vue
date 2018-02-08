<template>
    <v-flex xs8 offset-xs2>
        <v-container fluid grid-list-md>
            <v-layout row wrap>
                <v-flex>
                    <v-data-table v-bind:headers="headers" :items="bookList" hide-actions class="elevation-1">
                        <template slot="items" slot-scope="props">
                            <td class="text-xs-left">{{ props.item.bookTitle }}</td>
                            <td class="text-xs-left" v-for=" author in props.item.bookAuthor">
                                {{ author }}
                            </td>
                            <td class="text-xs-left">{{ props.item.bookPublisher }}</td>
                            <td class="text-xs-left">{{ props.item.bookRating }}</td>
                        </template>
                    </v-data-table>
                </v-flex>
            </v-layout>
        </v-container>
    </v-flex>
</template>

<script src="./BookList.js"></script>