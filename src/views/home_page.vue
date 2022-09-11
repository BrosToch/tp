<template >
    <div class="container">
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">User information</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
        <div class="body">
            <router-link :to="{name: 'user_infor'}">Go to user information</router-link>
            <v-card :loading="loading" class="mx-auto my-12" max-width="374">
                <template slot="progress">
                    <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                </template>

                <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

                <v-card-title>Cafe Badilico</v-card-title>

                <v-card-text>
                    <v-row align="center" class="mx-0">
                        <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

                        <div class="grey--text ms-4">
                            4.5 (413)
                        </div>
                    </v-row>

                    <div class="my-4 text-subtitle-1">
                        $ • Italian, Cafe
                    </div>

                    <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
                        seating.</div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-title>Tonight's availability</v-card-title>

                <v-card-text>
                    <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
                        <v-chip>5:30PM</v-chip>

                        <v-chip>7:30PM</v-chip>

                        <v-chip>8:00PM</v-chip>

                        <v-chip>9:00PM</v-chip>
                    </v-chip-group>
                </v-card-text>

                <v-card-actions>
                    <v-btn color="deep-purple lighten-2" text @click="reserve">
                        Reserve
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>
        <template>
            <v-footer dark padless>
                <v-card flat tile class="indigo lighten-1 white--text text-center">
                    <v-card-text>
                        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
                            <v-icon size="24px">
                                {{ icon }}
                            </v-icon>
                        </v-btn>
                    </v-card-text>

                    <v-card-text class="white--text pt-0">
                        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo
                        interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa
                        consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
                        lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin.
                        Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-text class="white--text">
                        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                    </v-card-text>
                </v-card>
            </v-footer>
        </template>
    </div>
</template>
<script>
export default {
    data: () => ({
        loading: false,
        selection: 1,
    }),

    methods: {
        reserve() {
            this.loading = true
            setTimeout(() => (this.loading = false), 2000)
        },
    },
}
</script>