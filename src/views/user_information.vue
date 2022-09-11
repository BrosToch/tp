<template>
    <v-app id="inspire">
        <nav>
            <div class="icon">
                <i class="bi bi-list"></i>
            </div>
            <div class="nav_list">
                <ul>
                    <li><a href="home">Home</a></li>
                    <li><a href="about">About</a></li>
                </ul>
            </div>
            <div class="btn">
                <v-btn depressed color="primary">
                    Primary
                </v-btn>
            </div>
        </nav>
    </v-app>
</template>
<script>
export default {
    data: () => ({

    }),
}
</script>
<style scoped lang="scss">
nav {
    display: flex;
    justify-content: space-around;
    background-color: rgb(15, 120, 97);
    height: 70px;
    align-items: center;

    .icon {
        i {
            font-size: 40px;
            color: white;
        }
    }

    .nav_list {
        ul {
            display: flex;
            list-style: none;

            li {
                margin-left: 30px;

                a {
                    text-decoration: none;
                    color: white;
                    font-size: 25px;
                }
            }
        }
    }
}
</style>