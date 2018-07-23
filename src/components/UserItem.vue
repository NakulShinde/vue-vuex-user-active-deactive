<template>
    <li>{{ user.name }}
        <button
         @click="toggleUserActivation(user)"
          class="action-button">{{buttonLabel}}</button>
        <span class="date-field" v-if="user.date">{{user.date.toLocaleString()}}</span>
    </li>
</template>

<script>
    export default {
        name: 'UserItem',
        props: ['user'],
        methods: {
            toggleUserActivation(user) {
                //add update date before deactivatin user 
                if(user.isActive){
                    user = Object.assign(user, { date : new Date()});
                }else {
                    //delete updated date before activating user
                    if(user.date){
                        delete user.date;
                    }
                }
                user.isActive = !user.isActive;
            }
        },
        computed: {
            buttonLabel: function () {
                return this.user.isActive ? "deactivate" : "activate";
            }
        }
    }
</script>
<style>
    .date-field {
        float: right;
        margin-right: 10px;
    }
    .action-button {
        float: right;
    }
</style>