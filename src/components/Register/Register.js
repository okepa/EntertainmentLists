import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import HttpRequestsService from '../../services/HttpRequestsService'

@Component
export default class Login extends Vue {
    registration = {username: "", email: "", password: "", confirmPassword: ""}
    success = false;
    error = false;
    message = "";

    register() {
        this.$validator.validateAll().then((result) => {
            if(result){
                HttpRequestsService.postRequest("register", this.registration).then((response) => {
                    this.message = "Registration successfull"
                    this.success = true;
                    this. registration = {username: "", email: "", password: "", confirmPassword: ""}
                    setTimeout(() => { 
                        this.success = false;
                        this.$router.push("/login")
                    }, 2000);                
                }).catch(err => {
                    this.message = "Oops something went wrong"
                    this.error = true;
                });
            }else{
                this.message = "Please fill in required fields"
                this.error = true;
                setTimeout(() => { 
                    this.error = false;
                }, 3000);
            }
        });
    }
}
