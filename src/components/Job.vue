<script>
import JobList from './JobList.vue';

export default {
    data() {
        return {
            content: this.job.content,
            done: this.job.done,
            editMode: this.job.editMode,
            myClass: "job",
        };
    },
    mounted() {
        this.onFocus();
    },
    emits: ["delete"],
    props: ["job", "id"],
    methods: {
        onFocus() {
            this.editMode = true;
            this.$nextTick(() => {
                this.$refs.textRef.focus();
            });
        },
        onBlur() {
            this.editMode = false;
        },
        onDelete() {
            this.$emit("delete", this.id);
        },
        isInputShown() {
            return !this.done && (this.editMode || this.content == "");
        }
    }
}
</script>

<template>
    <div>
        <div :class="myClass" @keypress.enter="onBlur" tabindex="1">
            <input style="margin-right: 5px;" type="checkbox" v-model="done" />
            <input v-if="isInputShown()" @focus="onFocus" type="text" v-model="content" placeholder="What is the task?"
                @blur="onBlur" ref="textRef">
            <span v-else @focus="onFocus" tabindex="1">{{ content }}</span>
            <button class="remove-button" @click="onDelete">-</button>
        </div>
        <JobList class="childJob" :showAddButton="isInputShown()" />
    </div>
</template>

<style scoped>
.remove-button {
    justify-self: right;
}

.job {
    padding: 0px;
    min-width: 100px;
    background-color: beige;
    display: grid;
    text-align: left;
    grid-template-columns: 20px auto 50px;
}

.childJob {
    margin-left: 20px;
}

.done {
    background-color: gray;
}
</style>