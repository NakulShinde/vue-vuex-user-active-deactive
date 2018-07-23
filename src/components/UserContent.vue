<template>
    <div class="wrapper">
        <div class="left">
            <UsersList />
        </div>
        <div class="right">
            <DeactiveUsersList />
        </div>
    </div>
</template>
<script>
    import UsersList from './UsersList.vue'
    import DeactiveUsersList from './DeactiveUsersList.vue'
    export default {
        name: 'UserContent',
        components: {
            UsersList,
            DeactiveUsersList
        }
    }
</script>
<style>
    .wrapper {
        overflow: hidden;
        position: relative;
        margin: auto 10%;
        padding: 5px;
    }

    .wrapper div {
        min-height: 200px;
        padding: 10px;
        border: 2px dashed #ccc;
        margin: 5px;
        text-align: left;
    }

    .left {
        float: left;
        min-width: 300px;
    }

    .right {
        overflow: hidden;
        width: auto;
    }

    @media screen and (max-width: 760px) {
        .left {
            float: none;
            width: auto;
        }
    }
</style>