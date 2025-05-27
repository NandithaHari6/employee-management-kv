import { MockProxy, mock } from 'jest-mock-extended';
import { when } from 'jest-when';
import EmployeeRepository from "../../repositories/employee.repository";
import EmployeeService from "../../services/employee.services"
import Employee from "../../entities/employee.entity"
import { DepartmentRepository } from '../../repositories/department.repository';

describe('EmployeeService', () => {
    let employeeRepository: MockProxy<EmployeeRepository>;
    let employeeService: EmployeeService;
    let departmentRepository: MockProxy<DepartmentRepository>;
    
    beforeEach(() => {
        employeeRepository = mock<EmployeeRepository>();
        departmentRepository=mock<DepartmentRepository>()
        employeeService = new EmployeeService(employeeRepository,departmentRepository)
    })
        
        describe('getEmployeeById', () => {
            
            it('should return value when user with proper id exsists', async () => {
                const mockEmployee = { id: 6, name: "Nanditha" } as Employee;
                when(employeeRepository.findOneById).calledWith(1).mockReturnValue(mockEmployee)
                const result = await employeeService.getEmployeeById(1)
                expect(employeeRepository.findOneById).toHaveBeenCalledWith(1);
                expect(result).toStrictEqual(mockEmployee);
            })

            it('should throw an error when user with provided id does not exsist',async()=>{
                when(employeeRepository.findOneById).calledWith(2).mockReturnValue(null)
                expect(employeeService.getEmployeeById(2)).rejects.toThrow("Employee not found")
                expect(employeeRepository.findOneById).toHaveBeenCalledWith(2);
            })
        })

        describe('getAllEmployees',()=>{
            it(`it should return all employees present in the DB`,async()=>{
                const mockEmpArr=[{id:3,name:'Nanditha'},{id:4,name:'Navami'}] as Employee[]
                when(employeeRepository.findMany).calledWith().mockReturnValue(mockEmpArr)
                //assert
                const result=await employeeService.getAllEmployees()
                expect(result).toStrictEqual(mockEmpArr);
                expect(employeeRepository.findMany).toHaveBeenCalled()
            })

            it(`should throw an error when there are no employees in the DB`,async()=>{
                const mockEmp=[] as Employee[]
                when(employeeRepository.findMany).calledWith().mockReturnValue(mockEmp)
                // expect(employeeRepository.findMany).toHaveBeenCalled()

                expect(employeeService.getAllEmployees).toHaveLength(0)
                
            })
        })

    
})