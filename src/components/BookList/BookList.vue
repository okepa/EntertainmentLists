<template>
    <v-flex xs8 offset-xs2>
        <v-container fluid grid-list-md>
            <v-layout row wrap>
                <v-flex>
                    <!-- Reading Books -->
                    <v-data-table v-bind:headers="headers" :items="readingBookList" hide-actions class="elevation-1 mb-3">
                        <template slot="items" slot-scope="props">
                            <td class="text-xs-left">{{ props.item.bookTitle }}</td>
                            <td class="text-xs-left" v-for=" author in props.item.bookAuthor">
                                {{ author }}
                            </td>
                            <td class="text-xs-left">{{ props.item.bookPublisher }}</td>
                            <td class="text-xs-left">{{ props.item.bookRating }}</td>
                        </template>
                    </v-data-table>
                    <!-- Read Books -->
                    <v-data-table v-bind:headers="headers" :items="readBookList" hide-actions class="elevation-1 mb-3">
                        <template slot="items" slot-scope="props">
                            <td class="text-xs-left">{{ props.item.bookTitle }}</td>
                            <td class="text-xs-left" v-for=" author in props.item.bookAuthor">
                                {{ author }}
                            </td>
                            <td class="text-xs-left">{{ props.item.bookPublisher }}</td>
                            <td class="text-xs-left">{{ props.item.bookRating }}</td>
                        </template>
                    </v-data-table>
                    <!-- Plan to read books -->
                    <v-data-table v-bind:headers="headers" :items="planToReadBookList" hide-actions class="elevation-1 mb-3">
                        <template slot="items" slot-scope="props">
                            <td class="text-xs-left">{{ props.item.bookTitle }}</td>
                            <td class="text-xs-left" v-for=" author in props.item.bookAuthor">
                                {{ author }}
                            </td>
                            <td class="text-xs-left">{{ props.item.bookPublisher }}</td>
                            <td class="text-xs-left">{{ props.item.bookRating }}</td>
                        </template>
                    </v-data-table>
                    <!-- Abandoned Books -->
                    <v-data-table v-bind:headers="headers" :items="abandonedBookList" hide-actions class="elevation-1 mb-3">
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