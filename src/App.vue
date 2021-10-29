<template>
    <div id="app">
        <router-view />
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
