//  class for engineer

class Engineer {
    constructor(name=null, id=null, email=null, office=null){
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
        this.role = "Engineer"
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
module.exports = Engineer;
