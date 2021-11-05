<template>
    <svg :class="{ Chevron: true, mirrored }" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 14L8 8L2 2" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>

<script>

    export default {
        name: 'Chevron',
        props: {
            mirrored: { type: Boolean, default: false },
        }
    }

</script>

<style lang="scss" scoped>

    @import '../../styles/_mediaqueries.scss';

    .Chevron {

        width: 10px;
        height: 16px;

        @include mobile-less {
            width: 8px;
            height: 13px;
        }

    }

    .Chevron.mirrored {
        transform: scaleX(-1);
    }

    .Chevron path {
        transition: stroke 250ms ease;
    }

</style>
