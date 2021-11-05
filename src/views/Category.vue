<template>
    <section id="Category">
        <div class="hero" :style="{ backgroundImage: `url('${hero.image}')` }">
            <div id="headerIcon">
                <router-link to="/"><img :src="'/img/logo.png'" id="logo"></router-link>
            </div>
            <h1>{{ hero.header }}</h1>
            <h3>{{ hero.text }}</h3>
            <div id="headerIcon">
                <img :src="'/img/frame.png'" id="frame">
            </div>
        </div>
        <div class="wrapper">
            <div class="productListing">
                <div class="products">
                    <div class="product" v-for="product in products" :key="product.title">
                        <a :href="product.link" target="_blank">
                        <img :src="product.image" alt="image of product" class="productImage">
                        <h4>{{ product.title }}</h4>
                        <span><img :src="'/img/frameBlack.png'" class="frameBlack">Tap to Shop</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="presents">
            <img :src="'/img/leftPresentsCategory.png'" class="leftPresent">
            <img :src="'/img/rightPresentCategory.png'" class="rightPresent">
        </div>
        <div class="pagination">
            <router-link class="category prev" :to="`/category/${ prevCategory[0][0] }`">
                <Chevron mirrored />
                <span>{{ prevCategory[0][1].pagination.title }}</span>
            </router-link>
            <router-link class="home" to="/"><Home /></router-link>
            <router-link class="category next" :to="`/category/${ nextCategory[0][0] }`">
                <span>{{ nextCategory[0][1].pagination.title }}</span>
                <Chevron />
            </router-link>
        </div>
    </section>
</template>

<script>

    // Components.
    import Home from '@/components/icons/Home';
    import Chevron from '@/components/icons/Chevron';

    export default {
        name: 'Category',
        components: {
            Home,
            Chevron,
        },
        data() {
            return {
                index: this.$t(`categories.${ this.$route.params.id }.pagination`).index,
                categories: this.$t('categories'),
            }
        },
        computed: {
            products() {
                return this.$t(`categories.${ this.$route.params.id }.products`);
            },
            hero() {
                return this.$t(`categories.${ this.$route.params.id }.hero`);
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

    div.pagination {

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

    div.pagination a {

        text-decoration: none;

        display: flex;
        align-items: center;

    }

    div.pagination a.category {

        color: color(White);
        line-height: 1.2;
        white-space: nowrap;

        @media (max-width: 600px) {
            white-space: pre;
        }

    }

    div.pagination a.category.prev {
        @media (max-width: 600px) {
            text-align: left;
        }
    }

    div.pagination a.category.next {
        @media (max-width: 600px) {
            text-align: right;
        }
    }

    div.pagination a.category.prev svg {

        margin-right: 20px;

        @include mobile-less {
            margin-right: 15px;
        }

    }

    div.pagination a.category.next svg {

        margin-left: 20px;

        @include mobile-less {
            margin-left: 15px;
        }

    }

    div.pagination a.home {

        position: absolute;
        top: 50%;
        left: 50%;

        transform: translateX(-50%) translateY(-50%);

        width: 40px;
        height: 40px;

        border-radius: 50%;

        justify-content: center;

        // transition: background-color 250ms ease;

    }

    div.pagination a.home:hover {
        // background-color: color(White);
    }

    /**********/
    /**********/
    /**********/


    #Category{
        background: #E72020;
        box-shadow: inset 0px 70px 230px rgba(0, 0, 0, 0.42);
    }

    h1{
        margin-top: 100px;
        font-family: 'Bagnard', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 70px;
        line-height: 70px;
        text-align: center;
        color: #FFFFFF;
        text-shadow: 0px 4px 14px rgba(11, 11, 11, 0.25);
    }

    h3{
        margin-top: 40px;
        font-family: 'Bagnard', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 25px;
        line-height: 35px;
        text-align: center;
        color: #FFFFFF;
        text-shadow: 0px 4px 14px rgba(11, 11, 11, 0.25);
    }

    h4{
        font-family: Good Offc Pro;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        margin: 5px;
    }

    .hero{
        height: 600px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%);
        box-shadow: inset 0px 70px 230px rgba(0, 0, 0, 0.42);
    }

    #headerIcon{
        padding-top: 50px;
    }

    .productListing{
        display: flex;
        justify-content: center;
        padding: 30px;
    }

    .products {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        width: 700px;
        margin-top: -100px;
        position: relative;
    }

    .product {
        width: 200px;
        height: 300px;
        margin-right: 50px;
        margin-bottom: 50px;
        background-color: color(White);
        border-radius: 20px;
        box-shadow: 0 15px 15px color(Black, 0.05);
    }

    .product span{
        font-family: Good Offc Pro;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    .product:nth-child(3n) {
        margin-right: 0;
    }

    .product .productImage{
        height: 230px;
        margin-top: -50px;
    }

    .product a{
        text-decoration: none;
        color: black;
    }

    .frameBlack{
        width: 40px;
        height: 20px;
        margin-right: 10px;
    }

    .presents{
        position: relative;
    }

    .leftPresent {
        width: 15%;
        bottom: -44%;
        left: 0%;
        position: absolute;
        z-index: 0;
    }

    .rightPresent {
        width: 20%;
        bottom: -44%;
        right: 0%;
        position: absolute;
        z-index: 0;
    }

    svg:hover path{
        fill: #E72020;
        padding: 0px;
    }

    i{
        width: 20px;
    }

@media only screen and (max-width: 950px) {
    #Category{
        background: #E72020;
        box-shadow: inset 0px 70px 230px rgba(0, 0, 0, 0.42);
    }

    h1{
        margin-top: 100px;
    }

    h3{
        margin-top: 40px;
    }

    h4{
        font-family: Good Offc Pro;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
    }

    .hero{
        height: 650px;
        background-image: url("/img/giftsforkids.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%);
        box-shadow: inset 0px 70px 230px rgba(0, 0, 0, 0.42);
        position: relative;
    }

    #headerIcon{
        padding-top: 50px;
    }

    .productListing{
        display: flex;
        justify-content: center;
        margin-bottom: 200px;
        margin-top: 100px;
    }

    .products {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        justify-content: space-around;
    }

    .product {
        width: 200px;
        height: 300px;
        margin: 5px;
        margin-bottom: 30px;
        background-color: color(White);
        border-radius: 20px;
        box-shadow: 0 15px 15px color(Black, 0.05);
    }

    .product span{
        font-family: Good Offc Pro;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    .product:nth-child(3n) {
        margin: 5px;
    }

    .frameBlack{
        width: 40px;
        height: 20px;
        margin-right: 5px;
    }

    .presents{
        position: relative;
        z-index: 0;
    }

    .leftPresent {
        width: 160px;
        bottom: -60%;
        left: 0%;
        position: absolute;
        z-index: 0;
    }

    .rightPresent {
        width: 200px;
        bottom: 0%;
        right: 0%;
        position: absolute;
        z-index: 0;
    }

}


</style>
