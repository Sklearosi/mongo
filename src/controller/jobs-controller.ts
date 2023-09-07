import { Request, Response } from "express";
import Job from "models/Jobs";

export const createJob = async (req: Request, res: Response) => {

    const {
        id,
        company,
        logo,
        logoBackground,
        position,
        postedAt,
        contract,
        location,
        website,
        apply,
        description,
        requirements,
        role,
      } = req.body;

    try {

        const newJob =  new Job({
            id,
            company,
            logo,
            logoBackground,
            position,
            postedAt,
            contract,
            location,
            website,
            apply,
            description,
            requirements,
            role
      })

      newJob.save();
      return res.status(201).json(newJob)
        
    } catch (error) {
        return res.status(401).json(error)
    }

    

}


export const getJobs = async (req: Request, res: Response) => {
    try {
      
      const page = typeof req.query.page === 'string' ? parseInt(req.query.page, 10) || 1 : 1;
      const pageSize = typeof req.query.pageSize === 'string' ? parseInt(req.query.pageSize, 10) || 6 : 6;

      const skip = (page - 1) * pageSize

      const totalJobs = await Job.countDocuments();

      const jobs = await Job.find()
      .skip(skip)
      .limit(pageSize)

      const totalPages = Math.ceil(totalJobs / pageSize);

    
  
      return res.status(200).json({
        jobs,
        totalPages,
        currentPage: page,
      });
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };