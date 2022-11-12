import { Router } from "express"
import UserController from "./UserController"

const router = Router();

router.post("/user", UserController.createUser)
router.get("/users", UserController.findAllUsers)
router.get("/user/:registration_employee", UserController.findUser)
router.put("/user/:registration_employee", UserController.updateUser)
router.delete("/user/:registration_employee", UserController.deleteUser)

export { router }