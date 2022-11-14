import config from './config'

export default {

    // all employees http://localhost:3333/users/
    async getEmployees() {
        try {
          const response = await config().get('/users');
          return response.data;
        } catch (error) {
          console.error(error);
          throw new Error('Error!');
        }
      },

    //Create new employee
    async createEmployee(employee) {
        try {
            const response = await config().post('/user', employee);
            return response.data;
        } catch (error) {
            console.error(error);
            throw new Error('Error!');
        }
    },

    // show employee by id http://localhost:3333/users/id:
    async getEmployeeID(registration_employee) {
        try {
            const response = await config().get(`user/${registration_employee}`)
            return response.data;
            
        } catch (error) {
            console.error(error);
            throw new Error('Error!');
        }
    },

    // update employee http://localhost:3333/user/:registration_employee:
    async updateEmployee(registration_employee) {
        try {
            const response = await config().put(`user/${registration_employee}`)
            return response.data;
            
        } catch (error) {
            console.error(error);
            throw new Error('Error!');
        }
    },

    // delete employee http://localhost:3333/user/:registration_employee:
    async deleteEmployee(registration_employee) {
        try {
            const response = await config().delete(`user/${registration_employee}`)
            return response.data;
            
        } catch (error) {
            console.error(error);
            throw new Error('Error!');
        }
    }
}
