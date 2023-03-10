<script>

export default {
    data() {
        return {
            content: "",
            done: false,
            editMode: false,
        }
    },
    mounted() {

    },
    emits: ['add-job'],
    methods: {
        onClick() {
            this.$emit('add-job');
        }
    }
}
</script>

<template>
    <div v-if="done == false">
        <button @click="onClick">+</button>
    </div>
</template>

<style scoped></style>