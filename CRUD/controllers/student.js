// import { db } from "../db/connection.js";
import { ObjectId } from "mongodb";
import Student from "../models/studentSchema.js";
export const getStudents = (req, res) => {
  res.status(200).json([1, 2, 3]);
};

// export const getFindStudentById = (req, res) => {
//   res.status(200).json([1, 2, 3]);
// };

export const getFindStudentById = async (req, res) => {
  try {
    const id = req.params.id;
    const collection = await db.collection("comments");
    const student = await collection.findOne({
      name: "Mercedes Tyler",
    });
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const createStudent = async (req, res) => {
  const { name, surname, age, lesson } = req.body;
  try {
    const student = new Student({ name, message });
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
