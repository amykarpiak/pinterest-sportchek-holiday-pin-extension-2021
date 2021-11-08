<template>
    <svg class="LogoAlt" width="31" height="16" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_797:473)">
            <path d="M3.60791 7.06186L7.00653 9.61082L30.7638 4.52393L3.60791 7.06186Z" fill="#252425"/>
            <path d="M14.8966 8.93793V14.8966H1.10345V1.10345H14.8966V5.00966L16 4.91034V0H0V16H16V8.69517L14.8966 8.93793Z" fill="#252425"/>
        </g>
        <defs>
            <clipPath id="clip0_797:473">
                <rect width="30.7641" height="16" fill="white"/>
            </clipPath>
        </defs>
    </svg>
</template>

<script>

    export default {
        name: 'LogoAlt',
    }

</script>

<style lang="scss" scoped>

    .LogoAlt {
        height: 16px;
        margin-right: 5px;
    }

    a.product span.link-out svg.LogoAlt path{
        transition: fill 250ms ease;
    }

    a.product:hover span.link-out svg.LogoAlt path{
        fill: #F0423D;
    }

</style>
