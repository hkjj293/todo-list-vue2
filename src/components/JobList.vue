<script>

export default {
    data() {
        return {
            jobs: [],
            jobsCreated: 0,
        }
    },
    mounted() {

    },
    props: ['userId', 'showAddButton'],
    methods: {
        onAddJob() {
            this.jobs.push({
                content: "",
                done: false,
                editMode: false,
                key: Math.random() + Math.random() * 1000000
            });
        },
        onDeleteJob(id) {
            console.log(id);
            this.jobs.splice(id, 1);
        }
    }
}
</script>

<template>
    <div class="jobList">
        <Job v-for="(job, index) in jobs" :id=index :job=job @delete="onDeleteJob" :key=job.key />
        <AddButton v-if="showAddButton" @add-job="onAddJob" />
    </div>
</template>

<style scoped></style>