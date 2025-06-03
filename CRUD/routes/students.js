import express from "express";
import {
  getStudents,
  getFindStudentById,
  createStudent,
} from "../controllers/student.js";

const router = express.Router();

router.get("/students", getStudents);
router.get("/student/:id", getFindStudentById);
router.post("/student", createStudent);

// router.post("/student", addStudent);

export default router;
