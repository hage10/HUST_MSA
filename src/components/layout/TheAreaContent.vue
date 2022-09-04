<template>
    <div class="area-content">
        <TheHeader/>
        <TheMainContent/>
    </div>
</template>

<script>
import TheHeader from './TheHeader.vue';
import TheMainContent from './TheMainContent.vue';
export default {
  name: 'TheContainer',
  components: {
    TheHeader,
    TheMainContent
}
}
</script>

<style>
.area-content {
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    width: 42%;
}

.area-content .main-content {
    background-color: #e5e5e5;
    flex-grow: 2;
}


.main-content {
    display: flex;
    max-width: 100%;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
}

.main-content .header-content {
    display: flex;
    justify-content: space-between;
    height: 36px;
    align-items: stretch;
    margin-top: 24px;
    margin-bottom: 24px;
}

.header-content .title-content {
    display: flex;
    font-size: 24px;
    font-weight: 700;
    color: #111;
    line-height: 36px;
}
</style>