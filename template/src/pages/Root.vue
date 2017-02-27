<template>
    <div class="wrap">
        Root
        {{#yunui}}
        <y-button>Root</y-button>
        {{/yunui}}
        <router-view></router-view>
    </div>
</template>

<script>
    import router from 'src/router'
    import store from 'src/vuex'
    import filters from 'filters'

    export default {
        router,
        store,
        filters,
        name: 'root',
        components: {}
    }
</script>
