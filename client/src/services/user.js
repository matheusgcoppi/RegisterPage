import { http } from './config'

export default {

    findAllUsers:() => {
        return http.get('')
    }
}