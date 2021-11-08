<template>
    <section id="Home">
        <div class="masthead">
            <img class="lights left" src="/images/lights-left.png" alt="">
            <img class="lights right" src="/images/lights-right.png" alt="">
            <img class="logo" src="/images/logo.svg" alt="SportChek">
            <h1>
                <span class="small">{{ $t('home.title.line1') }}</span>
                <span>{{ $t('home.title.line2') }}</span>
            </h1>
            <h2>{{ $t('home.subtitle') }}</h2>
            <img class="logo-alt" src="/images/logo-alt.svg" alt="">
            <Scroll />
        </div>
        <div class="categories">
        <div id="anchorPoint"></div>
            <div class="row one">
                <router-link
                    v-for="category in $t('home.categories.row1')"
                    :key="category.title"
                    :style="{ backgroundImage: `url(${ category.src })` }"
                    :class="`category ${ category.shape }`"
                    :to="`category/${ category.id }`"
                >
                    <h3>{{ category.title }}</h3>
                    <div class="arrow-wrapper">
                        <img class="arrow" src="/images/red-arrow.svg" alt="">
                    </div>
                </router-link>
            </div>
            <div class="row two">
                <router-link
                    v-for="category in $t('home.categories.row2')"
                    :key="category.title"
                    :style="{ backgroundImage: `url(${ category.src })` }"
                    :class="`category ${ category.shape }`"
                    :to="`category/${ category.id }`"
                >
                    <h3>{{ category.title }}</h3>
                    <div class="arrow-wrapper">
                        <img class="arrow" src="/images/red-arrow.svg" alt="">
                    </div>
                </router-link>
            </div>
        </div>
        <img class="present left" src="/images/red-present.png" alt="">
        <img class="present right" src="/images/grey-present.png" alt="">
    </section>
</template>

<script>

    // Components
    import Scroll from '@/components/icons/Scroll';

    // Misc.
    import preload from '@/preload';

    export default {
        name: 'Home',
        components: {
            Scroll,
        },
        mounted() {
            preload();
        }
    }

</script>

<style lang="scss" scoped>

    @import '../styles/_variables.scss';
    @import '../styles/_mediaqueries.scss';

    #Home {

        position: relative;

        color: color(White);
        background-color: color(White);

        min-height: calc(100vh - 60px);

    }

    #Home img.present {
        position: absolute;
        bottom: 0;
        z-index: 0;
    }

    #Home img.present.left {

        left: 0;
        width: 170px;

        @include phone {
            width: 30%;
        }

    }

    #Home img.present.right {

        right: 0;
        width: 240px;

        @include phone {
            width: 50%;
        }

    }

    div.masthead {

        position: relative;

        background-image: url('/images/home-bg.png');
        background-size: 100% 100%;

        padding: 50px 25px 150px;

        text-align: center;

        @include mobile-less {
            background-image: url('/images/home-bg-mobile.png');
        }

        @include phone {
            padding: 50px 15px 150px;
        }

    }

    div.masthead img.lights {

        position: absolute;
        top: 0;

        max-width: 350px;

    }

    div.masthead img.lights.left {

        left: 0;
        width: 20%;

        @include phone {
            width: 25%;
        }

    }

    div.masthead img.lights.right {

        right: 0;
        width: 22%;

        @include phone {
            width: 30%;
        }

    }

    div.masthead img.logo {

        width: 170px;

        @include phone {
            width: 40%;
        }

    }

    div.masthead h1 {

        font-family: 'Bagnard', serif;
        font-size: 70px;
        line-height: 1.1;

        margin: 40px 0 30px;

        @include phone {
            font-size: 50px;
        }

    }

    div.masthead h1 span {
        display: block;
    }

    div.masthead h1 span.small {
        font-size: 75%;
    }

    div.masthead h2 {

        font-family: 'Good Office Pro', sans-serif;
        font-size: 25px;
        line-height: 1.25;

        margin-bottom: 30px;

        @include tablet-less {
            font-size: 20px;
        }

        @include phone {
            font-size: 18px;
        }

    }

    div.masthead img.logo-alt {

        width: 80px;
        transform: translateX(15%);

        @include phone {
            width: 60px;
        }

    }

    div.categories {

        position: relative;
        z-index: 5;

        width: 100%;
        padding: 0 50px 100px;
        max-width: 1200px;
        margin: -100px auto 0;

        @include mobile-less {
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
        }

        @include phone {
            padding: 0 25px 175px;
        }

    }

    div.categories div.row {

        display: flex;
        justify-content: space-between;

        @include mobile-less {

            justify-content: flex-start;
            flex-direction: column;

            width: calc(50% - 25px);

        }

        @include phone {
            width: calc(50% - 10px);
        }

    }

    div.categories div.row.two {
        margin-top: 40px;
    }

    a.category {

        position: relative;

        width: calc(25% - 25px);
        height: 0;
        padding-top: calc(25% - 25px);

        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        transition: transform 500ms ease;

        box-shadow: 0 10px 15px color(Black, 0.1);

        color: color(White);
        text-decoration: none;

        @include mobile-less {
            width: 100%;
            padding-top: 100%;
            margin-top: 25px;
        }

    }

    a.category:first-of-type {
        @include mobile-less {
            margin-top: 0;
        }
    }

    a.category:first-of-type {
        @include mobile-less {
            margin-top: 0;
        }
    }

    a.category:after {

        content: '';

        position: absolute;
        bottom: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background: linear-gradient(to top, color(Black, 0.4), transparent 50%);
        border-radius: inherit;

    }

    a.category.square {
        border-radius: 25px;
    }

    a.category.circle {
        border-radius: 50%;
    }

    a.category.square:before,
    a.category.circle:before {

        content: '';

        position: absolute;
        top: 50%;
        left: 50%;
        z-index: -1;

        transform: translate(-50%, -50%);

        width: 100%;
        height: 100%;
        padding: 5px;

        background-color: transparent;

        transition: background-color 250ms ease;

    }

    a.category.square:before {
        border-radius: 30px;
    }

    a.category.circle:before {
        border-radius: inherit;
    }

    a.category.square:hover:before,
    a.category.circle:hover:before {
        background-color: color(SecondaryRed);
    }

    a.category h3 {

        position: absolute;
        left: 50%;
        z-index: 5;

        transform: translateX(-50%);

        font-family: 'Good Office Pro Bold', sans-serif;
        font-size: 28px;
        line-height: 1.1;
        text-align: center;
        white-space: pre;

        @include desktop {
            font-size: 24px;
        }

        @include tablet {
            font-size: 22px;
        }

        @include tablet-less {
            font-size: 18px;
        }

    }

    a.category.square h3 {
        bottom: 8%;
    }

    a.category.circle h3 {
        bottom: 12%;
    }

    a.category div.arrow-wrapper {

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        border-radius: inherit;
        overflow: hidden;

    }

    a.category img.arrow {

        position: absolute;
        right: 0;
        z-index: 5;

        width: 40px;

        @include tablet-less {
            width: 30px;
        }

    }

    a.category.square img.arrow {

        bottom: 25px;

        @include tablet-less {

            bottom: auto;
            top: 50%;

            transform: translateY(-50%);

        }

    }

    a.category.circle img.arrow {
        top: 50%;
        transform: translateY(-50%);
    }

</style>
