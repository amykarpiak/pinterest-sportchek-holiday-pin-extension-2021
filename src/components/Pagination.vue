<template>
    <div class="Pagination">
        <router-link class="category prev" :to="`/category/${ prevCategory[0][0] }`">
            <Chevron mirrored />
            <span>{{ prevCategory[0][1].pagination.title }}</span>
        </router-link>
        <router-link class="home" to="/"><Home /></router-link>
        <router-link class="category next" :to="`/category/${ nextCategory[0][0] }`">
            <span>{{ nextCategory[0][1].pagination.title }}</span>
            <Chevron />
        </router-link>
        <img class="present left" src="/images/white-present.png" alt="">
        <img class="present right" src="/images/red-present-alt.png" alt="">
    </div>
</template>

<script>

    // Components.
    import Home from '@/components/icons/Home';
    import Chevron from '@/components/icons/Chevron';

    export default {
        name: 'Pagination',
        components: {
            Home,
            Chevron,
        },
        props: {
            prevCategory: { type: Array },
            nextCategory: { type: Array },
        }
    }

</script>

<style lang="scss" scoped>

    @import '../styles/_variables.scss';
    @import '../styles/_mediaqueries.scss';

    .Pagination {

        position: relative;

        width: 100%;
        height: 60px;
        padding: 0 50px;

        background-color: color(SecondaryRed);

        display: flex;
        align-items: center;
        justify-content: space-between;

        font-family: 'Good Office Pro Bold', sans-serif;
        font-size: 18px;
        color: color(White);

        @include mobile-less {
            font-size: 16px;
            padding: 0 25px;
        }

        @media (max-width: 600px) {

            font-size: 14px;

            height: auto;
            padding: 20px 25px;

        }

    }

    .Pagination img.present {
        position: absolute;
        bottom: 100%;
    }

    .Pagination img.present.left {

        left: 0;
        width: 170px;

        @include phone {
            width: 30%;
        }

    }

    .Pagination img.present.right {

        right: 0;
        width: 240px;

        @include phone {
            width: 50%;
        }

    }

    .Pagination a {

        text-decoration: none;

        display: flex;
        align-items: center;

    }

    .Pagination a.category {

        color: color(White);
        line-height: 1.2;
        white-space: nowrap;

        height: 40px;
        padding: 0 15px;

        border-radius: 20px;

        transition: background-color 250ms ease, color 250ms ease;

        @media (max-width: 600px) {
            white-space: pre;
        }

    }


    .Pagination a.category > * {
        pointer-events: none;
    }

    .Pagination a.category:hover {
        @media (min-width: 601px) {
            background-color: color(White);
            color: color(PrimaryRed);
        }
    }

    .Pagination a.category.prev {

        transform: translateX(-15px);

        @media (max-width: 600px) {
            text-align: left;
        }

    }

    .Pagination a.category.next {

        transform: translateX(15px);

        @media (max-width: 600px) {
            text-align: right;
        }

    }

    .Pagination a.category.prev svg {
        margin-right: 15px;
    }

    .Pagination a.category.next svg {
        margin-left: 15px;
    }

    .Pagination a.home {

        position: absolute;
        top: 50%;
        left: 50%;

        transform: translateX(-50%) translateY(-50%);

        width: 40px;
        height: 40px;

        border-radius: 50%;

        justify-content: center;

        transition: background-color 250ms ease;

    }

    .Pagination a.home:hover {
        @media (min-width: 601px) {
            background-color: color(White);
        }
    }

</style>

<style lang="scss">

    @import '../styles/_variables.scss';
    @import '../styles/_mediaqueries.scss';

    .Pagination a.category:hover svg path {
        @media (min-width: 601px) {
            stroke: color(PrimaryRed);
        }
    }

    .Pagination a.home:hover svg path {
        @media (min-width: 601px) {
            fill: color(PrimaryRed);
        }
    }

</style>
