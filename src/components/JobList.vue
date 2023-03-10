<script>

export default {
    data() {
        return {
            jobs: [],
        }
    },
    mounted() {

    },
    props: ['userId'],
    methods: {
        onAddJob() {
            this.jobs.push({
                content: "",
                done: false,
                editMode: false,
            })
        },
        onDeleteJob(id) {
            this.jobs.splice(id, 1);
        }
    }
}
</script>

<template>
    <div class="jobList">
        <div v-for="(job, index) in jobs">
            <Job :id=index :job=job @delete="onDeleteJob" />
        </div>
        <div>
            <AddButton @add-job="onAddJob" />
        </div>
    </div>
</template>

<style scoped></style>