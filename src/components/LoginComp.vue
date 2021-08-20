<template>
    <main>
        <div class="wrapper">
            <h1>Please Login Below:</h1>
            <input v-model="usrNameInput" type="text" placeholder="username">
            <input v-model="pwdInput" type="password" placeholder="password">
            <button @click="postAxiosCall">Login</button>
            <p :class="{ activatedErrorMsg: isActive }">Please try again!</p>
        </div>
    </main>
</template>

<script>
    import axios from "axios"
    import cookies from 'vue-cookies'
    
    export default {
        name : 'LoginComp',
        data:() => {
            return {
                isActive: true,
                usrNameInput : "",
                pwdInput : "",
            }
        },
        methods : {
            postAxiosCall: function() {
                axios.request({
                    url: 'https://reqres.in/api/login',
                    method: 'POST',
                    headers : {
                        'Content-Type': 'application/json'
                    },
                    data : {
                        "email" : this.usrNameInput,
                        "password" : this.pwdInput
                    }
                }).then((response) => {
                    console.log(response);
                    cookies.set('loginToken', response.data.token);
                    this.$router.push({ name: 'Game' });
                }).catch((error) => {
                    console.error("There was an error: " +error);
                    this.activateErrorMsg();
                })
            },
            activateErrorMsg: function() {
                this.isActive = false
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        margin: 20vh 20vw;
        border: 1px solid black;
        padding: 8vh 8vw;
    }
    .activatedErrorMsg {
        display: none;
    }

    p {
        color: red;
    }
</style>