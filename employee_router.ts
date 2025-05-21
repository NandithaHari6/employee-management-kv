import express from "express";
import Employee from "./entities/employee.entity";
import { Entity } from "typeorm";
import datasource from "./db/data-source";

const employeeRouter = express.Router();
const employeeRepository=datasource.getRepository(Employee);


employeeRouter.get("/", async(req, res) => {
  
  const employees=await employeeRepository.find()
  res.status(200).send(employees)
});

employeeRouter.get("/:id", async(req, res) => {
  const empId = Number(req.params["id"]);
  console.log(empId);

 
  const employee=await employeeRepository.findOneBy({
    id:empId
  })
  res.status(200).send(employee);
});


employeeRouter.post("/", async(req, res) => {
  console.log(req.body);
  const newEmployee = new Employee();
  newEmployee.email = req.body.email;
  newEmployee.name = req.body.name;
  newEmployee.createdAt = new Date();
  newEmployee.updatedAt = new Date();
  await employeeRepository.save(newEmployee);
  res.status(201).send(newEmployee);
});

employeeRouter.delete("/:id", async(req, res) => {
  const empId = Number(req.params["id"]);

    const employee=await employeeRepository.findOneBy({
    id:empId
  })
  await employeeRepository.remove(employee)

  res.status(200).send(employee);
});

employeeRouter.put("/:id", async(req, res) => {
 const empId = Number(req.params["id"]);


  await employeeRepository.update({id:empId},{  name:req.body.name,
email:req.body.email});
  res.status(200).send("Updated");
});

export default employeeRouter;
