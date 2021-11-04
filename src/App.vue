<template>
    <div id="app">
        <router-view />
        <footer>
            <img src="/images/logo.svg" alt="SportChek">
            <span>
                <a href="https://sportchek.ca" target="_blank">Privacy Policy</a>
                <span> • </span>
                <a href="https://sportchek.ca" target="_blank">Terms of Service</a>
            </span>
        </footer>
    </div>
</template>

<script>

    export default {
        name: 'app',
        created() {
            this.$root.$i18n.locale = this.$route.query.lang ?? 'en';
        }
    }

</script>

<style lang="scss" scoped>

    @import './styles/_variables.scss';
    @import './styles/_mediaqueries.scss';

    footer {

        width: 100%;
        height: 60px;
        padding: 0 50px;

        background-color: color(Red);

        display: flex;
        align-items: center;
        justify-content: space-between;

        font-family: 'Good Office Pro', sans-serif;
        font-size: 14px;
        color: color(White);

        @include mobile-less {
            padding: 0 25px;
        }

        @include phone {

            flex-direction: column;
            justify-content: center;

            height: auto;
            padding: 20px 25px;

        }

    }

    footer img {

        width: 80px;

        @include phone {
            margin-bottom: 20px;
        }

    }

    footer a {
        color: color(White);
        text-decoration: none;
    }

</style>
