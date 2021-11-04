<template>
    <section id="Category">
        <div class="products">
            <div class="product" v-for="product in products" :key="product.title">
                <!-- <img src="" alt=""> -->
                <h4>{{ product.title }}</h4>
                <span>Tap to Shop</span>
            </div>
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

    .products {

        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

        width: 700px;

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

    .product:nth-child(3n) {
        margin-right: 0;
    }

</style>
