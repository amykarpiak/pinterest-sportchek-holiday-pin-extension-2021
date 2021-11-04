<template>
    <section id="CategoryList">
        <div v-for product in products">
        
        <h3> hello</h3>
        <img :src="{{product.image}}" alt"">
        <h3>{{product.title}}</h3>
        {{product.link}}

        </div>

  </section>
</template>

<script>

export default {
  name: 'gifts-for-kids',
    computed: {
        products() {
            return this.$t('categories.${ this. }')
        }
    },
    created() {
        console.log(this.$router)
    }
}

</script>

<style lang="scss" scoped>

</style>
