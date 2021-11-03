<template>
    <section id="Home">
        <img :src="'img/leftLights.png'" id="leftLight">
        <img :src="'img/rightLights.png'" id="rightLight">
            <div id="header">
                <div id="headerIcon">
                    <img :src="'img/logo.png'" id="logo">
                </div>
                <h2>Holiday</h2>
                <h1>Gift Guide</h1>
                <h3>Tap below to explore gift ideas to keep you moving all season</h3>
                <div id="headerIcon">
                    <img :src="'img/frame.png'" id="frame">
                </div>
            </div>
            <div id="categories">
                <div id="column">
                    <router-link v-bind:to="'#'">
                        <img :src="'img/her.png'" id="square">
                    </router-link>
                    <p>Gifts for Her</p>
                </div>
                <div id="column">
                    <router-link v-bind:to="'#'">
                        <img :src="'img/fan.png'" id="circle">
                    </router-link>
                    <p>Gifts for the Fan</p>
                </div>
                <div id="column">
                    <router-link v-bind:to="'#'">
                        <img :src="'img/him.png'" id="square">
                    </router-link>
                    <p>Gifts for Him</p>
                </div>
                <div id="column">
                    <router-link v-bind:to="'#'">
                        <img :src="'img/adventurer.png'" id="circle">
                    </router-link>
                    <p>Gifts for the Adventurer</p>
                </div>
                <div id="column">
                    <router-link v-bind:to="'/Kids'">
                        <img :src="'img/kids.png'" id="circle">
                    </router-link>
                    <p>Gifts for Kids</p>
                </div>
                <div id="column">
                    <router-link v-bind:to="'#'">
                        <img :src="'img/homeAthlete.png'" id="square">
                    </router-link>
                    <p>Gifts for the Home Athlete</p>
                </div>
                <div id="column">
                    <router-link v-bind:to="'#'">
                        <img :src="'img/hill.png'" id="circle">
                    </router-link>
                    <p>Gifts for the Hill</p>
                </div>
                <div id="column">
                    <router-link v-bind:to="'#'">
                        <img :src="'img/warmth.png'" id="square">
                    </router-link>
                    <p>Gifts for Warmth</p>
                </div>
            </div>
            <div id="footer">
                <img :src="'img/logo.png'" id="logo">
                <p>Privacy Policy•Terms & Conditions</p>
            </div>
    </section>
</template>

<script>

    export default {
        name: 'Kids',
    }

</script>

<style lang="scss" scoped>

</style>
