<template>
    <div>
        <h1>Computer</h1>
        <div>
            <img :src="require('@/assets/' + getPicLink)"/>
        </div>
      
    </div>
</template>

<script>
    export default {
        name : 'GameCompSelect',
        computed: {
            getPicLink() {
                return this.$store.state.computerPictureURL;
            }
        }
    }
</script>

<style scoped>
    img {
        max-height: 400px;
    }
</style>