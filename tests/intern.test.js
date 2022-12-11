// creating constructor
const Intern = require('../js/intern');


//initalize testing 

describe("Intern", () => {
    describe("Initialization", () => {
      it("Initialization", () => {
        const obj = new Intern();
        expect(typeof(obj)).toEqual("object");
      });
    });


    //creating name test 
    describe("Name", () => {
      it("Creating new name", () => {
        const obj = new Intern("Ana");
        expect(obj.name).toEqual("Ana");
      });
    });


    //creating id test 
    describe("Id", () => {
      it("Creating new id", () => {
        const obj = new Intern("Ana",1983);
        expect(obj.id).toEqual(1983);
      });
    });


    //creating email test 
    describe("Email", () => {
      it("Creating new Email", () => {
        const obj = new Intern("Ana",1983, "Anam@outlook.com");
        expect(obj.email).toEqual("Anam@outlook.com");
      });
    });


     //creating office number test 
     describe("Office", () => {
        it("Creating new office number", () => {
          const obj = new Intern("Ana",1983, "Anam@outlook.com", 46);
          expect(obj.email).toEqual(46);
        });
      });


    //Test for getName method
    describe("getName", () => {
      it("Return name by getName method", () => {
        const obj = new Intern("Ana");
        expect(obj.getName()).toEqual("Ana");
      });
    });


    //Test for getId method
    describe("getId", () => {
      it("Return id by getId method", () => {
        const obj = new Intern("Ana", 1983);
        expect(obj.getId()).toEqual(1983);
      });
    });


    //Test for getEmail method
    describe("getEmail", () => {
      it("Return email by getEmail method", () => {
        const obj = new Intern("Ana", 1983, "Anam@outlook.com");
        expect(obj.getEmail()).toEqual("Anam@outlook.com");
      });
    });


    //Test for getOffice method
    describe("getOffice", () => {
        it("Return office number by getOffice method", () => {
          const obj = new Intern("Ana", 1983, "Anam@outlook.com", 46);
          expect(obj.getEmail()).toEqual("Anam@outlook.com");
        });
      });



    //Test for getRole method
    describe("getRole", () => {
      it("can return role by getRole method", () => {
        const role = "Intern";
        const obj = new Intern("Ana", 1983, "Anam@outlook.com", 46);
        expect(obj.getRole()).toEqual(role);
      });
    });
});