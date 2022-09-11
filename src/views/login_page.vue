<template >
    <div class="container">
        <div class="user_infor">
            <div class="welcome">
                <h1>Welcome to our website</h1>
            </div>
            <div class="user_login">
                <div>
                    <h4>Login page</h4>
                    <div class="username">
                        <input type="text" placeholder="Usenmae">
                    </div>
                    <div class="pass">
                        <input type="password" name="" id="" placeholder="Password"></input>
                    </div>
                    <div class="btn">
                        <button @click="login">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'login_page',
    data() {
        return {

        }
    },

    methods: {
        login() {
            console.log("user have click");
            this.$router.push({ name: 'home_page' })
        }
    },

}
</script>
<style scoped lang="scss">
.container {
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;

    .user_infor {
        border: 1px solid black;
        padding: 20px 40px;
        border-radius: 20px;

        .welcome {
            text-align: center;
        }

        .user_login {
            margin-top: 30px;

            div {
                h4 {
                    text-align: center;
                    font-size: 24px;
                }

                div {
                    input {
                        margin-top: 10px;
                        width: 100%;
                        border: 1px solid black;
                        padding: 10px 0px;
                    }
                }

                .btn {
                    display: flex;
                    justify-content: center;
                    margin-top: 20px;

                    button {
                        padding: 10px 30px;
                        border: 1px solid black;
                        background: blue;
                        color: white;
                    }
                }
            }
        }
    }
}
</style>