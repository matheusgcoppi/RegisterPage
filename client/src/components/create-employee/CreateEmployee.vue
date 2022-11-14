<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3 class="employee">Criar novo Funcionário</h3>
            </div>
            <div class="card-body">

                <form>
                    <div class="form-group">
                        <label class="font-weight--bold">Nome do Funcionário</label>
                        <input type="text" class="form-control" placeholder="ex: Matheus Coppi"
                            v-model="employeeForm.name_employee"
                            :class="{ 'is-invalid': isSubmitted && $v.employeeForm.name_employee.$error }">
                        <div v-if="isSubmitted && !v.employeeForm.name_employee.required" class="invalid-feedback">
                            Nome do Funcionário é Necessário!!!
                        </div>
                    </div>


                    <div class="form-group">
                        <label class="font-weight--bold">Função na Empresa</label>
                        <input type="text" class="form-control" placeholder="ex: Desenvolvedor Web"
                            v-model="employeeForm.role_employee"
                            :class="{ 'is-invalid': isSubmitted && $v.employeeForm.role_employee.$error }">
                        <div v-if="isSubmitted && !v.employeeForm.name_employee.required" class="invalid-feedback">
                            Função do Funcionário é Necessário!!!
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="font-weight--bold">Salário</label>
                        <input type="number" class="form-control" placeholder="ex: 2000"
                            v-model="employeeForm.salary_employee"
                            :class="{ 'is-invalid': isSubmitted && $v.employeeForm.salary_employee.$error }">
                        <div v-if="isSubmitted && !v.employee.name_employee.required" class="invalid-feedback">
                            Salário do Funcionário é Necessário!!!
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="font-weight--bold">Número de Registro do Funcionário</label>
                        <input type="number" class="form-control" placeholder="ex: 174"
                            v-model="employeeForm.registration_employee"
                            :class="{ 'is-invalid': isSubmitted && $v.employeeForm.registration_employee.$error }">
                        <div v-if="isSubmitted && !v.employeeForm.name_employee.required" class="invalid-feedback">
                            Número de Registro do Funcionário é Necessário!!!
                        </div>
                    </div>

                    <div class="form-group">
                        <button @click="SubmitEmployee" class="btn btn-primary"><font-awesome-icon icon="fas fa-user-plus" />Adicionar</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>

<script>

import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import ServiceUser from '../../services/user'

export default { 

    components: {
        name: 'CreateEmployee',
    },

    data() {
        return {
            employeeForm: {
                name_employee: null,
                role_employee: null,
                salary_employee: null,
                registration_employee: null,
            },
            isSubmitted: false // não pode submiter, quem pode submiter é os if de cima
        }
    },
    validations: {
        employeeForm: {
            name_employee: { required },
            role_employee: { required },
            salary_employee: { required },
            registration_employee: { required },
        }
    },
    methods: {
        async SubmitEmployee() {
            try {
                await ServiceUser.createEmployee(this.employeeForm);
                this.$router.push({
                    name: 'list',
                })
            } catch (error) {
                console.log(error)
            }
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