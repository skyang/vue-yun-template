<template>
    <div class="hello">
        <hello></hello>
    </div>
</template>

<script>
    import {
        mapActions
    } from 'vuex'
    import components from 'components'

    export default {
        name: 'help',
        methods: {
            ...mapActions([
                'getUserInfo'
            ])
        },
        components: {
            Hello: components.Hello
        }
    }
</script>
