<template>
    <div class="scroll-wrapper">
    <button v-scroll-to="'#anchorPoint'">
        <svg class="scroll" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.0352 21.1953C20.2812 21.4414 20.6914 21.4414 20.9375 21.1953L26.2695 15.8906C26.5156 15.6172 26.5156 15.207 26.2695 14.9609L25.6406 14.332C25.3945 14.0859 24.9844 14.0859 24.7109 14.332L20.5 18.543L16.2617 14.332C15.9883 14.0859 15.5781 14.0859 15.332 14.332L14.7031 14.9609C14.457 15.207 14.457 15.6172 14.7031 15.8906L20.0352 21.1953Z" fill="white"/>
            <path d="M20.0352 28.1953C20.2812 28.4414 20.6914 28.4414 20.9375 28.1953L26.2695 22.8906C26.5156 22.6172 26.5156 22.207 26.2695 21.9609L25.6406 21.332C25.3945 21.0859 24.9844 21.0859 24.7109 21.332L20.5 25.543L16.2617 21.332C15.9883 21.0859 15.5781 21.0859 15.332 21.332L14.7031 21.9609C14.457 22.207 14.457 22.6172 14.7031 22.8906L20.0352 28.1953Z" fill="white"/>
            <circle cx="20.5" cy="20.5" r="19.75" stroke="white" stroke-width="1.5"/>
        </svg>
    </button>
    </div>
</template>

<script>

    export default {
        name: 'Scroll',
    }

</script>

<style lang="scss" scoped>

    @import '../../styles/_mediaqueries.scss';

    svg.scroll{

        display: none;

        @include mobile-less{
            display: block;
        }

    }

    .scroll-wrapper{
        display: flex;
        justify-content: center;
        margin-top: 40px;
        margin-right: 15px;
    }

    button{
        background: transparent;
        border: none;
    }

</style>
