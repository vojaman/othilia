<template>
    <main-header></main-header>
    <slot></slot>
    <main-footer></main-footer>
</template>

<script>
    import MainHeader from '@/Jetstream/components/MainHeader.vue'
    import MainFooter from '@/Jetstream/components/MainFooter.vue'

    export default {
        components: {
            MainHeader,
            MainFooter
        },
    }
</script>