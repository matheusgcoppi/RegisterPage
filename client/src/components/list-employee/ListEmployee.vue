<template>
    <div>
        <h3 class="employee bold">Lista de todos os Funcionários</h3>
        <table class="table table-striped">
            <thead id="lable-table">
                <tr>
                    <th class="text-center">Nome do Funcionário</th>
                    <th class="text-center">Função do Funcionário</th>
                    <th class="text-center">Salário</th>
                    <th class="text-center">Número de Registro</th>
                    <th class="text-center">Acões</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="employee in employees" :key="employee.registration_employee">
                    <td>{{ employee.name_employee }}</td>
                    <td>{{ employee.role_employee }}</td>
                    <td>{{ employee.salary_employee }}</td>
                    <td>{{ employee.registration_employee }}</td>
                    <td>
                        <router-link :to="{ name: 'update', params: { id: employee.registration_employee } }"
                            class="btn btn-sucess">
                            <font-awesome-icon icon="fa-solid fa-pen" /> Editar
                        </router-link>
                    </td>
                    <td>
                        <button @click="removeEmployee(employee.registration_employee)" class="btn btn-danger">
                            <font-awesome-icon icon="fa-solid fa-trash" /> Apagar
                        </button>
                    </td>
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
        async removeEmployee(id) {
            await ServiceUser.deleteEmployee(id)
            this.$router.go(this.$router.currentRoute)
            //this.$router.push({ name: 'home' }); ou da pra usar esse também
        }

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