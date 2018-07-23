<template>
    <ul>
        <h3>{{title}}</h3>
        <user-item v-for="userItem in userList" 
            v-bind:user="userItem" 
            v-bind:key="userItem.id"></user-item>
        <h5>Total: {{userList.length}}</h5>
    </ul>
</template>
<script>
    import UserItem from './UserItem.vue'
    export default {
        name: 'UsersList',
        props: ['userList', 'title'],
        components : {
            UserItem
        }
    }
</script>