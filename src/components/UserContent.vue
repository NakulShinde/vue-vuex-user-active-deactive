<template>
    <div class="wrapper">
        <div class="left">
            <UsersList v-bind:userList="activeUserList" title="Active Users"/>
        </div>
        <div class="right">
            <UsersList  v-bind:userList="deactiveUserList" title="Deactive Users"/>
        </div>
    </div>
</template>
<script>
    import UsersList from './UsersList.vue'
    export default {
        name: 'UserContent',
        components: {
            UsersList
        },
        computed: {
            activeUserList: function () {
                return this.$store.state.userList.filter(function (user){
                    return user.isActive == true;
                })
            },
            deactiveUserList: function () {
                return this.$store.state.userList.filter(function (user){
                    return user.isActive == false;
                })
            } 
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