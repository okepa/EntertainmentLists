<template>
  <v-app id="app">
    <v-snackbar :timeout="timeout" color="success" top :multi-line="true" v-model="snackbarSuccess">
      {{ text }}
      <v-btn dark flat @click.native="snackbarSuccess = false">Close</v-btn>
    </v-snackbar>
    <v-snackbar :timeout="timeout" color="error" top :multi-line="true" v-model="snackbarError">
      {{ text }}
      <v-btn dark flat @click.native="snackbarError = false">Close</v-btn>
    </v-snackbar>
    <v-snackbar :timeout="timeout" color="primary" top absolute :multi-line="true" v-model="snackbarInfo">
      {{ text }}
      <v-btn dark flat @click.native="snackbarInfo = false">Close</v-btn>
    </v-snackbar>
    <v-snackbar :timeout="timeout" color="warning" top :multi-line="true" v-model="snackbarWarning">
      {{ text }}
      <v-btn dark flat @click.native="snackbarWarning = false">Close</v-btn>
    </v-snackbar>
    <navmenu/>
    <loginstatus/>
    <router-view/>
    <footerall/>
  </v-app>
</template>

<script src="./App.js"></script>
<style src="./App.css"></style>