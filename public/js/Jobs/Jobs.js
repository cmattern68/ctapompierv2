LoadAllJobs = () => {
    return new Promise((resolve, reject) => {
        let Jobs = {};
        const jobsList = httpGet("http://localhost/equipements/jobs");

        for (const [key, new_job] of Object.entries(jobsList)) {
            let job = new Job(new_job);
            Jobs[job.id] = job;
        }
        resolve(Jobs);
    });
}