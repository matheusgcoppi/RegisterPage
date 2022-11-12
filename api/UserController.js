import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default {
    async createUser (req, res) {
        try {
            const {name_employee, role_employee, salary_employee, registration_employee} = req.body
    
            const registrationEmployeee = await prisma.Employee.findUnique({
                where: {registration_employee}
            })
    
            if(registrationEmployeee) {
                return res.json({error: "Já existe um funcionário com esse ID"})
            }
            
            const user = await prisma.Employee.create({
                data: {
                    name_employee,
                    role_employee,
                    salary_employee,
                    registration_employee
                }
            });
    
            return res.json(user)
    
        } catch (error) {
            return res.json({error})
            
        }
    },

    async findAllUsers (req, res) {
        try {
            const users = await prisma.Employee.findMany()
            return res.json(users)
        } catch (error) {
            return res.json({error})
        }
    },
    
    async findUser (req, res) {
        try {
            const { registration_employee } = req.params;
            const user = await prisma.Employee.findUnique({
                where: {registration_employee: Number(registration_employee)}
            })
        if(!user) return res.json({error: "Não foi possivel encontrar este usuário"})
            return res.json({user})
        } catch (error) {
            return res.json({error})
        }
    },

    async updateUser (req, res) {
        try {
            const { registration_employee } = req.params;
            const { name_employee, role_employee, salary_employee} = req.body
            let user = await prisma.Employee.findUnique({
                where: {registration_employee: Number(registration_employee)}
            })
            user = await prisma.Employee.update({
                where: {registration_employee: Number(registration_employee)},
                data: {name_employee, role_employee, salary_employee}
            })
        return res.json({user})
        } catch (error) {
            return res.json({error})
        }
    },

    async deleteUser (req, res) {
        try {
            const { registration_employee } = req.params;
            const user = await prisma.Employee.findUnique({
                where: {registration_employee: Number(registration_employee)}
            })

        if(!user) return res.json({error: "Não foi possivel encontrar este usuário"})
        
        await prisma.Employee.delete({
            where: {registration_employee: Number(registration_employee)}
        })

        return res.json({message: "Funcionário deletado"})

        } catch (error) {
            return res.json({error})
        }
    }
}