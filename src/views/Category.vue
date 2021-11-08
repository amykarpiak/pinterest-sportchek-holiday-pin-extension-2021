<template>
    <section id="Category">
        <div class="hero">
            <div class="bg" :style="{ backgroundImage: `url(${ data.hero.image })` }"></div>
            <div class="bg-responsive" :style="{ backgroundImage: `url(${ data.hero.responsive_image })` }"></div>
            <router-link to="/"><img class="logo" src="/images/logo.svg" alt="SportChek"></router-link>
            <div class="content">
                <h1 :class="{ shrink: data.hero.header.shrink }">
                    <span class="small">{{ data.hero.header.line1 }}</span>
                    <span>{{ data.hero.header.line2 }}</span>
                </h1>
                <h2>{{ data.hero.subtitle }}</h2>
                <img class="logo-alt" src="/images/logo-alt.svg" alt="">
            </div>
        </div>
        <div class="products">
            <a
                class="product"
                v-for="product in data.products"
                :key="product.title"
                :href="product.link"
                target="_blank"
            >
                <div>
                    <img class="product-image" :src="product.image" alt="">
                    <h3>{{ product.title }}</h3>
                </div>
                <span class="link-out">
                    <img src="/images/logo-alt-black.svg" alt="">
                    Tap to shop
                </span>
            </a>
        </div>
        <div class="shop-the-category">
            <a :href="data.category_link" target="_blank">Copy FPO</a>
        </div>
        <Pagination :prevCategory="prevCategory" :nextCategory="nextCategory" />
    </section>
</template>

<script>

    // Components.
    import Pagination from '@/components/Pagination';

    export default {
        name: 'Category',
        components: {
            Pagination,
        },
        data() {
            return {
                index: this.$t(`categories.${ this.$route.params.id }.pagination`).index,
                categories: this.$t('categories'),
            }
        },
        computed: {
            data() {
                return this.$t(`categories.${ this.$route.params.id }`);
            },
            prevCategory() {

                let prevIndex = this.index - 1;
                if (prevIndex < 0) prevIndex = (Object.keys(this.categories).length - 1);

                return Object.entries(this.categories).filter(category => category[1].pagination.index === prevIndex);

            },
            nextCategory() {

                let nextIndex = this.index + 1;
                if (nextIndex >= Object.keys(this.categories).length) nextIndex = 0;

                return Object.entries(this.categories).filter(category => category[1].pagination.index === nextIndex);

            }
        },
        watch: {
            $route(to, _) {
                this.index = this.$t(`categories.${ to.params.id }.pagination`).index;
            }
        }
    }

</script>

<style lang="scss" scoped>

    @import '../styles/_variables.scss';
    @import '../styles/_mediaqueries.scss';

    #Category {

        position: relative;
        min-height: calc(100vh - 60px);

        background: color(PrimaryRed);

    }

    #Category,
    div.hero div.bg {
        box-shadow: inset 0px 70px 230px color(Black, 0.42);
    }

    div.hero {

        position: relative;
        z-index: 5;

        padding: 50px 25px 150px;

        text-align: center;
        color: color(White);

        @include phone {
            padding: 50px 15px;
        }

    }

    div.hero div.bg,
    div.hero div.bg:after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        display: block;
        visibility: visible;

        @include mobile-less {
            display: none;
            visibility: hidden;
        }
    }

    div.hero div.bg {

        background-size: cover;
        background-position: center;
        display: block;
        visibility: visible;

        clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%);

        @include mobile-less {
            display: none;
            visibility: hidden;
        }

    }

    div.hero div.bg:after {
        content: '';
        background: linear-gradient(to top, color(Black, 0.3) 40%, transparent);

        @include mobile-less {
            display: none;
            visibility: hidden;
        }
    }

    div.hero div.bg-responsive,
    div.hero div.bg-responsive:after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        display: none;
        visibility: hidden;

        @include mobile-less {
            display: block;
            visibility: visible;
        }
    }

    div.hero div.bg-responsive {

        display: none;
        visibility: hidden;

        @include mobile-less {
            background-size: cover;
            background-position: center;
            display: block;
            visibility: visible;

            clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%);

        }

    }

    div.hero div.bg-responsive:after {
        content: '';
        background: linear-gradient(to top, color(Black, 0.3) 40%, transparent);
        display: none;
        visibility: hidden;

        @include mobile-less {
            content: '';
            background: linear-gradient(to top, color(Black, 0.3) 40%, transparent);
            display: block;
            visibility: visible;
        }
    }

    div.hero div.content {
        @include phone {
            position: relative;
            top: 200px;
        }
    }

    div.hero img.logo,
    div.hero img.logo-alt,
    div.hero h1,
    div.hero h2 {
        position: relative;
        z-index: 5;
    }

    div.hero img.logo {

        width: 170px;

        @include phone {
            width: 40%;
        }

    }

    div.hero h1,
    div.hero h2 {
        font-family: 'Bagnard', serif;
    }

    div.hero h1 {

        font-size: 70px;
        line-height: 1.1;

        margin: 40px 0 30px;

    }

    div.hero h1.shrink {

        @media (max-width: 600px) {
            font-size: 50px;
        }

        @include phone {
            font-size: 40px;
        }

    }

    div.hero h1 span {
        @include mobile-less {
            display: block;
        }
    }

    div.hero h1 span.small {

        @include mobile-less {
            font-size: 75%;
        }

        @media (max-width: 600px) {
            font-size: 50%;
        }

    }

    div.hero h2 {

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

    div.hero img.logo-alt {

        width: 80px;
        transform: translateX(15%);

        @include phone {
            width: 60px;
        }

    }

    div.products {

        position: relative;
        z-index: 5;

        width: 100%;
        // padding: 0 50px 100px;
        padding: 0 50px;
        max-width: 800px;
        margin: -75px auto 0;

        display: flex;
        flex-wrap: wrap;

        @include mobile-less {
            // padding: 0 40px 100px;
            padding: 0 40px;
        }

        @media (max-width: 600px) {
            // padding: 0 20px 250px;
            padding: 0 20px;
        }

        @include phone {
            // padding: 0 15px 200px;
            padding: 0 15px;
            margin: 200px auto 0;
        }

    }

    a.product {

        width: calc((100% / 3) - 20px);
        margin-right: 30px;
        margin-bottom: 60px;

        background-color: color(White);
        border: 4px solid color(White);
        border-radius: 20px;

        box-shadow: 0 10px 15px color(Black, 0.1);

        color: color(Black);
        text-decoration: none;
        text-align: center;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        transition: border-color 250ms ease;

        @include mobile-less {
            width: calc(50% - 20px);
            margin-right: 40px;
        }

        @media (max-width: 600px) {
            width: calc(50% - 10px);
            margin-right: 20px;
            margin-bottom: 40px;
        }

        @include phone {
            width: calc(50% - 7.5px);
            margin-right: 15px;
        }

    }

    a.product:hover {
        border-color: color(SecondaryRed);
    }

    a.product:nth-of-type(3n) {
        @media (min-width: 768px) {
            margin-right: 0;
        }
    }

    a.product:nth-of-type(even) {
        @include mobile-less {
            margin-right: 0;
        }
    }

    a.product img.product-image {
        width: 100%;
        margin-top: -18%;
    }

    a.product h3 {

        font-family: 'Good Office Pro', sans-serif;
        font-size: 16px;
        line-height: 1.2;

        margin-top: -10px;
        padding: 0 15px;

        @include phone {
            padding: 0 10px;
        }

    }

    a.product span.link-out {

        display: flex;
        align-items: center;

        font-family: 'Good Office Pro Bold', sans-serif;
        font-size: 18px;

        margin-top: 60px;
        padding: 15px;

        @include phone {

            padding: 10px;
            margin-top: 40px;

            font-size: 16px;

        }

    }

    a.product span.link-out img {
        height: 16px;
        margin-right: 5px;
    }

    div.shop-the-category {

        text-align: center;
        margin-bottom: 100px;

        @media (max-width: 600px) {
            margin-bottom: 250px;
        }

        @include phone {
            margin-bottom: 200px;
        }

    }

    div.shop-the-category a {

        font-family: 'Good Office Pro Bold', sans-serif;
        font-size: 18px;
        color: color(White);
        line-height: 1.2;
        white-space: nowrap;
        text-decoration: none;

        height: 40px;
        padding: 0 25px;

        border-radius: 20px;
        background-color: color(SecondaryRed);
        box-shadow: 0 10px 15px color(Black, 0.025);

        display: inline-flex;
        justify-content: center;
        align-items: center;

        transition: background-color 250ms ease, color 250ms ease;

        @include mobile-less {
            font-size: 16px;
            padding: 0 25px;
        }

        @media (max-width: 600px) {
            // font-size: 14px;
        }

    }

    div.shop-the-category a:hover {
        @media (min-width: 601px) {
            background-color: color(White);
            color: color(PrimaryRed);
        }
    }

</style>
