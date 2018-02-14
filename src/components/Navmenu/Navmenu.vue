<template>
  <div>
    <v-toolbar dark color="primary">
      <v-toolbar-title>Entertainment List</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer" dark></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down" v-for="nav in navigation" :key="nav.title">
        <v-btn flat :to="nav.route">{{ nav.title }}</v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/book-list" v-if="token != null">Book List</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-layout wrap>
      <v-navigation-drawer temporary v-model="drawer" absolute>
        <v-list class="pa-1 indigo darken-4" dark>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>FFFilter</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-list class="pt-0">
          <v-divider></v-divider>
          <div v-for="nav in navigation" :key="nav.title">
            <v-list-tile :to="nav.route" exact>
              <v-list-tile-content>
                <v-list-tile-title>{{ nav.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
          </div>
          <v-list-tile to="/book-list" exact v-if="token != null">
            <v-list-tile-content>
              <v-list-tile-title>Book List</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </div>
</template>

<script src="./Navmenu.js"></script>