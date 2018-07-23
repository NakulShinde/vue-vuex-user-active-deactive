<template>
    <ul>
        <h3>Deactive Users</h3>
        <user-item v-for="userItem in deactiveUsers" 
            v-bind:user="userItem" 
            v-bind:key="userItem.id"></user-item>
        <h5>Total: {{deactiveUsers.length}}</h5>
    </ul>
</template>
<script>
    import UserItem from './UserItem.vue'
    export default {
        name: 'DeactiveUsersList',
        components : {
            UserItem
        },
        computed: {
            deactiveUsers: function () {
                return this.$store.state.deactiveUsers;
            }
        }
    }
</script>