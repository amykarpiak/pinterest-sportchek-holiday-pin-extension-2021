<template>
    <div id="app">
        <router-view />
        <footer>
            <img src="/images/logo.svg" alt="SportChek">
            <span>
                <a :href="$t('misc.legal.privacy_policy_link')" target="_blank">{{ $t('misc.legal.privacy_policy') }}</a>
                <span> • </span>
                <a :href="$t('misc.legal.terms_and_conditions_link')" target="_blank">{{ $t('misc.legal.terms_and_conditions') }}</a>
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

        background-color: color(PrimaryRed);

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

    footer a:hover {
        text-decoration: underline;
    }

</style>
