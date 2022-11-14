<template>
    <div>
       <h3 class="employee bold">Lista de todos os Funcionários</h3>
       <table class="table table-striped">
        <thead>
            <tr>
                <th class="text-center">Nome do Funcionário</th>
                <th class="text-center">Função do Funcionário</th>
                <th class="text-center">Salário</th>
                <th class="text-center">Número de Registro</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="employee in employees" :key="employee.registration_employee">
                <td>{{employee.name_employee}}</td>
                <td>{{employee.role_employee}}</td>
                <td>{{employee.salary_employee}}</td>
                <td>{{employee.registration_employee}}</td>
                
            </tr>
        </tbody>
       </table> 
    </div>
   </template>
   
<script>
import ServiceUser from '../../services/user'
   export default {
       data() {
           return {
            employees: []
           }
       },
    mounted() {
        this.listEmployees();
    },
    methods: {
        async listEmployees() {
            const response = await ServiceUser.getEmployees();
            this.employees = response;
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