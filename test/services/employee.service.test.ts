import { MockProxy, mock } from 'jest-mock-extended';
import { when } from 'jest-when';
import EmployeeRepository from "../../repositories/employee.repository";
import EmployeeService from "../../services/employee.services"
import Employee from "../../entities/employee.entity"

describe('EmployeeService', () => {
    let employeeRepository: MockProxy<EmployeeRepository>;
    let employeeService: EmployeeService;
    
    beforeEach(() => {
        employeeRepository = mock<EmployeeRepository>();
        employeeService = new EmployeeService(employeeRepository)
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
    
})