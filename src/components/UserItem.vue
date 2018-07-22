<template>
    <li>{{ user.name }}
        <button
         @click="toggleUserActivation(user)"
          class="action-button">{{buttonLabel}}</button>
    </li>
</template>

<script>
    export default {
        name: 'UserItem',
        props: ['user'],
        methods: {
            toggleUserActivation(user) {
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
    .action-button {
        float: right;
    }
</style>