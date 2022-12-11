// creating constructor
const Employee = require('../js/employee');


//initalize testing 

describe("Employee", () => {
    describe("Initialization", () => {
      it("Initialization", () => {
        const obj = new Employee();
        expect(typeof(obj)).toEqual("object");
      });
    });


    //creating name test 
    describe("Name", () => {
      it("Creating new name", () => {
        const obj = new Employee("Brian");
        expect(obj.name).toEqual("Brian");
      });
    });


    //creating id test 
    describe("Id", () => {
      it("Creating new id", () => {
        const obj = new Employee("Brian",2244);
        expect(obj.id).toEqual(2244);
      });
    });


    //creating email test 
    describe("Email", () => {
      it("Creating new Email", () => {
        const obj = new Employee("Brian",2244, "brianm@outlook.com");
        expect(obj.email).toEqual("brianm@outlook.com");
      });
    });


     //creating office number test 
     describe("Office", () => {
        it("Creating new office number", () => {
          const obj = new Employee("Brian",2244, "brianm@outlook.com", 01);
          expect(obj.email).toEqual(01);
        });
      });


    //Test for getName method
    describe("getName", () => {
      it("Return name by getName method", () => {
        const obj = new Employee("Brian");
        expect(obj.getName()).toEqual("Brian");
      });
    });


    //Test for getId method
    describe("getId", () => {
      it("Return id by getId method", () => {
        const obj = new Employee("Brian", 2244);
        expect(obj.getId()).toEqual(2244);
      });
    });


    //Test for getEmail method
    describe("getEmail", () => {
      it("Return email by getEmail method", () => {
        const obj = new Employee("Brian", 2244, "brianm@outlook.com");
        expect(obj.getEmail()).toEqual("brianm@outlook.com");
      });
    });


    //Test for getOffice method
    describe("getOffice", () => {
        it("Return office number by getOffice method", () => {
          const obj = new Employee("Brian", 2244, "brianm@outlook.com", 01);
          expect(obj.getEmail()).toEqual("brianm@outlook.com");
        });
      });



    //Test for getRole method
    describe("getRole", () => {
      it("can return role by getRole method", () => {
        const role = "Employee";
        const obj = new Employee("Brian", 12, "brianm@outlook.com", 01);
        expect(obj.getRole()).toEqual(role);
      });
    });
});