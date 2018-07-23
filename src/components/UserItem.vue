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

                (user.isActive)? this.deactivateUser(user): this.activateUser(user);

            },
            activateUser : function (user){

                //remove user from deactiveUsers
                this.$store.state.deactiveUsers.splice(this.$store.state.deactiveUsers.indexOf(user), 1);

                let newUser = Object.assign({}, user);
                
                //update activation state
                newUser.isActive = true;
                if(newUser.date){
                    delete newUser.date
                }

                this.$store.state.userList.push(newUser);

            },
            deactivateUser : function (user){
                //remove user from userList
                this.$store.state.userList.splice(this.$store.state.userList.indexOf(user), 1);

                let newUser = Object.assign({date : new Date() }, user);
                
                //update activation state
                newUser.isActive = false;

                this.$store.state.deactiveUsers.push(newUser);
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