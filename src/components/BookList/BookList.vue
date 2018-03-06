<template>
    <v-flex xs8 offset-xs2>
        <v-container fluid grid-list-md>
            <v-layout row wrap>
                <v-flex>
                    <h3 class="mb-2">Reading</h3>
                    <!-- Reading Books -->
                    <v-data-table v-bind:headers="headers" :items="readingBookList" hide-actions class="elevation-1 mb-3">
                        <template slot="items" slot-scope="props">
                            <tr>
                                <td @click="viewBook(props.item.bookId)" class="text-xs-left click">{{ props.item.bookTitle }}</td>
                                <td @click="viewBook(props.item.bookId)" class="text-xs-left click">
                                    <div v-for="author in props.item.bookAuthor">
                                        {{ author }}
                                    </div>
                                </td>
                                <td @click="viewBook(props.item.bookId)" class="text-xs-left click">{{ props.item.bookPublisher }}</td>
                                <td v-if="!readOnly">
                                    <v-select @change="changeRating(props.item.bookId)" v-bind:items="readingRating" v-model="props.item.bookRating" label="Rating"
                                        class="input-group--focused"></v-select>
                                </td>
                                <td v-else @click="viewBook(props.item.bookId)" class="click">
                                    {{ props.item.bookRating }}
                                </td>
                                <td v-if="!readOnly" class="text-xs-center">
                                    <v-btn color="error" flat small @click="deleteFromList(props.item.bookId)">Delete</v-btn>
                                </td>
                            </tr>
                        </template>
                    </v-data-table>
                    <h3 class="mb-2">Read</h3>
                    <!-- Read Books -->
                    <v-data-table v-bind:headers="headers" :items="readBookList" hide-actions class="elevation-1 mb-3">
                        <template slot="items" slot-scope="props">
                            <tr>
                                <td @click="viewBook(props.item.bookId)" class="text-xs-left click">{{ props.item.bookTitle }}</td>
                                <td @click="viewBook(props.item.bookId)" class="text-xs-left click">
                                    <div v-for="author in props.item.bookAuthor">
                                        {{ author }}
                                    </div>
                                </td>
                                <td @click="viewBook(props.item.bookId)" class="text-xs-left click">{{ props.item.bookPublisher }}</td>
                                <td v-if="!readOnly">
                                    <v-select @change="changeRating(props.item.bookId)" v-bind:items="readingRating" v-model="props.item.bookRating" label="Rating"
                                        class="input-group--focused"></v-select>
                                </td>
                                <td v-else @click="viewBook(props.item.bookId)" class="click">
                                    {{ props.item.bookRating }}
                                </td>
                                <td v-if="!readOnly" class="text-xs-center">
                                    <v-btn color="error" flat small @click="deleteFromList(props.item.bookId)">Delete</v-btn>
                                </td>
                            </tr>
                        </template>
                    </v-data-table>
                    <h3 class="mb-2">Plan to Read</h3>
                    <!-- Plan to read books -->
                    <v-data-table v-bind:headers="headers" :items="planToReadBookList" hide-actions class="elevation-1 mb-3">
                        <template slot="items" slot-scope="props">
                            <tr>
                                <td @click="viewBook(props.item.bookId)" class="text-xs-left click">{{ props.item.bookTitle }}</td>
                                <td @click="viewBook(props.item.bookId)" class="text-xs-left click">
                                    <div v-for=" author in props.item.bookAuthor">
                                        {{ author }}
                                    </div>
                                </td>
                                <td @click="viewBook(props.item.bookId)" class="text-xs-left click">{{ props.item.bookPublisher }}</td>
                                <td v-if="!readOnly">
                                    <v-select @change="changeRating(props.item.bookId)" v-bind:items="readingRating" v-model="props.item.bookRating" label="Rating"
                                        class="input-group--focused"></v-select>
                                </td>
                                <td v-else @click="viewBook(props.item.bookId)" class="click">
                                    {{ props.item.bookRating }}
                                </td>
                                <td v-if="!readOnly" class="text-xs-center">
                                    <v-btn color="error" small flat @click="deleteFromList(props.item.bookId)">Delete</v-btn>
                                </td>
                            </tr>
                        </template>
                    </v-data-table>
                    <h3 class="mb-2">Abandoned</h3>
                    <!-- Abandoned Books -->
                    <v-data-table v-bind:headers="headers" :items="abandonedBookList" hide-actions class="elevation-1 mb-3">
                        <template slot="items" slot-scope="props">
                            <tr>
                                <td @click="viewBook(props.item.bookId)" class="text-xs-left click">{{ props.item.bookTitle }}</td>
                                <td @click="viewBook(props.item.bookId)" class="text-xs-left click">
                                    <div v-for=" author in props.item.bookAuthor">
                                        {{ author }}
                                    </div>
                                </td>
                                <td @click="viewBook(props.item.bookId)" class="text-xs-left click">{{ props.item.bookPublisher }}</td>
                                <td v-if="!readOnly">
                                    <v-select @change="changeRating(props.item.bookId)" v-bind:items="readingRating" v-model="props.item.bookRating" label="Rating"
                                        class="input-group--focused"></v-select>
                                </td>
                                <td v-else @click="viewBook(props.item.bookId)" class="click">
                                    {{ props.item.bookRating }}
                                </td>
                                <td v-if="!readOnly" class="text-xs-center">
                                    <v-btn color="error" small flat @click="deleteFromList(props.item.bookId)">Delete</v-btn>
                                </td>
                            </tr>
                        </template>
                    </v-data-table>
                </v-flex>
            </v-layout>
        </v-container>
    </v-flex>
</template>

<script src="./BookList.js"></script>