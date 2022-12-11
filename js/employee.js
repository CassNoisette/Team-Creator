
// class for employee

class Employee {
    constructor(name=null, id=null, email=null, office=null){
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
        this.role = "Employee"
    }


getName() {
    return this.name
}

getId() {
    return this.id
}

getEmail() {
    return this.email
}

getOffice() {
    return this.office
}

getRole() {
    return this.role
}

}


// Exporting
module.exports = Employee;
