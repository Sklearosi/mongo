import { createJob, getJobs } from 'controller/jobs-controller';
import express from 'express'

const jobRouter = express.Router();

jobRouter.post("/job-insert", createJob)
jobRouter.get("/job-get", getJobs )


export default jobRouter