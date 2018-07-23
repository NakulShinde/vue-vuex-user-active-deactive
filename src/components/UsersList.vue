<template>
    <ul>
        <h3>Active Users</h3>
        <user-item v-for="userItem in activeUserList" 
            v-bind:user="userItem" 
            v-bind:key="userItem.id"></user-item>
        <h5>Total: {{activeUserList.length}}</h5>
    </ul>
</template>
<script>
    import UserItem from './UserItem.vue'
    export default {
        name: 'UsersList',
        components : {
            UserItem
        },
        computed: {
            activeUserList: function () {
                return this.$store.getters.activeUsers;
            }
        }
    }
</script>