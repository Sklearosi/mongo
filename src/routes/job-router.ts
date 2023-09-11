import { createJob, getAllJobs, getJobs } from 'controller/jobs-controller';
import express from 'express'

const jobRouter = express.Router();

jobRouter.post("/job-insert", createJob)
jobRouter.get("/job-get", getJobs )
jobRouter.get("/all-job", getAllJobs)


export default jobRouter