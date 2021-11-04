<template>
    <section id="Category">
        <div class="hero" :style="{ backgroundImage: `url('${hero.image}')` }">
            <div id="headerIcon">
                <img :src="'/img/logo.png'" id="logo">
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
                        <img :src="product.image" alt="image of product" class="productImage">
                        <h4>{{ product.title }}</h4>
                        <span><img :src="'/img/frameBlack.png'" class="frameBlack">Tap to Shop</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="presents">
            <img :src="'/img/leftPresentsCategory.png'" class="leftPresent">
            <img :src="'/img/rightPresentCategory.png'" class="rightPresent">
        </div>
        <div class="secondaryNav">
            <router-link to="/category/gifts-for-the-adventurer">
                <p>< h</p>
            </router-link>
            <router-link to="/home">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M29.3273 19.2191C29.7585 19.5642 29.8285 20.1934 29.4834 20.6247C29.1384 21.056 28.5091 21.1259 28.0779 20.7809L26.2212 19.2955V26.962C26.2212 27.5143 25.7735 27.962 25.2212 27.962H14.7781C14.2258 27.962 13.7781 27.5143 13.7781 26.962V19.2961L11.9222 20.7809C11.4909 21.1259 10.8616 21.056 10.5166 20.6247C10.1716 20.1934 10.2415 19.5642 10.6728 19.2191L19.3753 12.2571C19.7405 11.9649 20.2595 11.9649 20.6247 12.2571L29.3273 19.2191ZM15.7781 17.6961V25.962H24.2212V17.6955L20 14.3186L15.7781 17.6961Z" fill="white"/>
                </svg>
            </router-link>
            <router-link to="/category/gifts-for-the-fan">
                <p>Gifts for the Fan ></p>
            </router-link>
        </div>
    </section>
</template>

<script>

export default {
    name: 'Category',
    computed: {
        data() {
            return {
                categoryIndex: this.$t('categories.${ this.$route.params.id }.index')
            }
        },
        products() {
            return this.$t(`categories.${ this.$route.params.id }.products`);
        }, 

        hero() {
            return this.$t(`categories.${ this.$route.params.id }.hero`);
        }
    },
}

</script>

<style lang="scss" scoped>

    @import '../styles/_variables.scss';
    @import '../styles/_mediaqueries.scss';


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

    .frameBlack{
        width: 40px;
        height: 20px;
        margin-right: 10px;
    }
    
    .presents{
        position: relative;
    }

    .leftPresent {
        width: 220px;
        height: 334.7px;
        bottom: -44%;
        left: 0%;
        position: absolute;
    }

    .rightPresent {
        width: 251px;
        height: 244px;
        bottom: -44%;
        right: 0%;
        position: absolute;
    }

    .secondaryNav{
        color: white;
        background: #F0423D;
        font-family: Good Offc Pro;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .secondaryNav img{
        height: 20px;
    }

    .secondaryNav a{
        text-decoration: none;
        color: white;
        display: inline-block;
        margin: 0px 100px;
        padding: 5px;
    }

    .secondaryNav a:hover{
        background: white;
        color: #E72020;
        border-radius: 60px;
        padding: 5px;

    }

    svg:hover path{
        fill: #E72020;
    }

@media only screen and (max-width: 600px) {
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
        height: 600px;
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
        justify-content: space-between;
    }

    .product {
        width: 160px;
        height: 250px;
        margin: 5px;
        margin-bottom: 10px;
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
    }

    .leftPresent {
        width: 130px;
        height: 200px;
        bottom: -60%;
        left: 0%;
        position: absolute;
    }

    .rightPresent {
        width: 200px;
        height: 150px;
        bottom: 0%;
        right: 0%;
        position: absolute;
    }

    .secondaryNav{
        color: white;
        background: #F0423D;
        font-family: Good Offc Pro;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 22px;
        padding: 20px;
        display: flex;
        justify-content: space-between;
    }

    .secondaryNav img{
        height: 20px;
    }

    .secondaryNav a{
        text-decoration: none;
        color: white;
        display: inline-block;
        margin: 0px 20px;
        padding: 5px;
    }

    .secondaryNav a:hover{
        background: white;
        color: red;
        border-radius: 20px;
        padding: 5px;

    }
}


</style>