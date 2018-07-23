<template>
    <li>{{ user.name }}
        <button @click="toggleUserActivation(user)" class="action-button">{{buttonLabel}}</button>
        <span class="date-field" v-if="user.date">{{user.date.toLocaleString()}}</span>
    </li>
</template>

<script>
    export default {
        name: 'UserItem',
        props: ['user'],
        methods: {
            toggleUserActivation(user) {
                if (user.isActive) {
                    this.$store.commit({
                        type: 'deactivateUser',
                        user: user.id
                    });
                } else {
                    this.$store.commit({
                        type: 'activateUser',
                        user: user
                    });
                }
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