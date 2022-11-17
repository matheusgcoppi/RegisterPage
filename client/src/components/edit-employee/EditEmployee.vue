<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Editar Funcionário</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="updateFormEmployee()">
                    <div class="form-group">
                        <label class="font-weight-bold">Nome do Funcionário</label>
                        <input type="text" id="name" class="form-control" v-model="employeeForm.name_employee">
                    </div>

                    <div class="form-group">
                        <label class="font-weight-bold">Função do Funcionário</label>
                        <input type="text" id="role" class="form-control" v-model="employeeForm.role_employee">
                    </div>

                    <div class="form-group">
                        <label class="font-weight-bold">Salário do Funcionário</label>
                        <input type="number" id="salary" class="form-control" v-model="employeeForm.salary_employee">
                    </div>

                    <div class="form-group">
                        <label class="font-weight-bold">Número de Registro do Funcionário</label>
                        <input type="number" id="registration" class="form-control" v-model="employeeForm.registration_employee">
                    </div>

                    <div class="form-group">
                        <button type="submit" class="btn btn-primary"><font-awesome-icon icon="fa-solid fa-pen" /> Update </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
   </template>
   
   <script>
   import ServiceUser from '../../services/user'
   export default {
       data() {
           return {
            employeeForm: {}
           }
       },
       mounted() {
        this.getEmployeeById() 
            
        
       },
       
       methods: {
        async getEmployeeById() {
            const {registration_employee} = this.$route.params;
            const response = await ServiceUser.updateEmployee(registration_employee)
            this.employeeForm = {...response}

        },
        async updateFormEmployee() {
            await ServiceUser.updateEmployee(this.employeeForm);
            this.$router.push ({name: 'list'})
            },
       }
   }
   </script>
   <style>
   .employee {
        display: flex;
        align-items: center;
        justify-content: center;
    }
   </style>