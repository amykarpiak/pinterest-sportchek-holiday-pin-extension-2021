<template>
    <section id="Category">
        <div class="hero">
            <div id="headerIcon">
                <img :src="'/img/logo.png'" id="logo">
                </div>
                <h1>Gifts for Kids</h1>
                <h3>Tap below to explore gift ideas to keep you moving all season</h3>
                <div id="headerIcon">
                    <img :src="'/img/frame.png'" id="frame">
                </div>
        </div>
        <div class="wrapper">
            <div class="productListing">
                <div class="products">
                    <div class="product" v-for="product in products" :key="product.title">
                        <img :src="'{{ product.image }}'" alt="">
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
                <p>< Gifts for the Adventurer</p>
            </router-link>
            <router-link to="/home">
                <img :src="'/img/homeIcon.png'" class="homeIcon">
            </router-link>
            <router-link to="/category/gifts-for-the-fan">
                <p>Gifts for the Fan ></p>
            </router-link>
        </div>
        <div id="footer">
            <img :src="'/img/logo.png'" id="logo">
            <p>Privacy Policy•Terms & Conditions</p>
        </div>
    </section>
</template>

<script>

export default {
    name: 'Category',
    computed: {
        products() {
            return this.$t(`categories.${ this.$route.params.id }`);
        }
    },
}

</script>

<style lang="scss" scoped>

    @import '../styles/_variables.scss';

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
        color: red;
        border-radius: 20px;
        padding: 5px;

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