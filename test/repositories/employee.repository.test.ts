import { Repository } from "typeorm";
import EmployeeRepository from "../../repositories/employee.repository";
import Employee from "../../entities/employee.entity";
import { MockProxy, mock } from 'jest-mock-extended';
import { when } from 'jest-when';
describe("EmployeeRepository",()=>{
    let repository:MockProxy<Repository<Employee> >
    let employeeRepository:EmployeeRepository;
    beforeAll(()=>{
        repository=mock<Repository<Employee>>()
        employeeRepository=new EmployeeRepository(repository)
    })
        describe('findMany', () => {
        it("should return all employees with relations", async () => {
            const mockEmployees = [
                { id: 1, name: "Employee 1" } as Employee,
                { id: 2, name: "Employee 2" } as Employee
            ];
            when(repository.find).calledWith({
                relations: {
                    address: true,
                    department: true
                }
            }).mockReturnValue(mockEmployees);

            const result = await employeeRepository.findMany();

            expect(result).toEqual(mockEmployees);
            expect(repository.find).toHaveBeenCalledWith({
                relations: {
                    address: true,
                    department: true
                }
            });
        });

})
})