import  {ROLE} from './role.enum'

export class User {
    name = ''
    email = ''
    password = ''
    role = ROLE.USER

    constructor(name, email, password, role) {
        this.name = name
        this.email = email
        this.password = password
        this.role = role
    }
}