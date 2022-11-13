<template>
 <div class="container">
    <div class="card">
        <div class="card-header">
            <h3 class="employee">Criar novo Funcionário</h3>
        </div>
        <div class="card-body">

            <form v-on:submit.prevent="SubmitForm()">
                <div class="form-group">
                    <label class="font-weight--bold">Nome do Funcionário</label>
                    <input type="text" class="form-control" placeholder="ex: Matheus Coppi" v-model="employee.name_employee" required>
                </div>

                <div class="form-group">
                    <label class="font-weight--bold">Função na Empresa</label>
                    <input type="text" class="form-control" placeholder="ex: Desenvolvedor Web" v-model="employee.role_employee" required>
                </div>

                <div class="form-group">
                    <label class="font-weight--bold">Salário</label>
                    <input type="number" class="form-control" placeholder="ex: 2000" v-model="employee.salary_employee" required>
                </div>

                <div class="form-group">
                    <label class="font-weight--bold">Número de Registro do Funcionário</label>
                    <input type="number" class="form-control" placeholder="ex: 174" v-model="employee.registration_employee" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary" type="submit">Adicionar</button>
                </div>
            </form>

        </div>
    </div>
 </div>
</template>

<script>
export default {
    components: {
       name: 'CreateEmployee',
    },

    data() {
        return {
            employee: {
            name_employee: '',
            role_employee: '',
            salary_employee: '',
            registration_employee: ''
        }
        }
    },

    methods: {
        SubmitForm() {

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