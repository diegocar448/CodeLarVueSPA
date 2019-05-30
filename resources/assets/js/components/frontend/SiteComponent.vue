<template>
    <div>
        <header-site></header-site>

        <router-view></router-view> 

        <footer-site></footer-site>
    </div>
</template>

<script>
import SiteFooterComponent from './SiteFooterComponent'
import SiteHeaderComponent from './SiteHeaderComponent'

export default {
    components:{
        footerSite: SiteFooterComponent,
        headerSite: SiteHeaderComponent
    }
}
</script>

<style scoped>

</style>


