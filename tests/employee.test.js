// creating constructor
const Engineer = require('../js/engineer');


//initalize testing 

describe("Engineer", () => {
    describe("Initialization", () => {
      it("Initialization", () => {
        const obj = new Engineer();
        expect(typeof(obj)).toEqual("object");
      });
    });


    //creating name test 
    describe("Name", () => {
      it("Creating new name", () => {
        const obj = new Engineer("Ryan");
        expect(obj.name).toEqual("Ryan");
      });
    });


    //creating id test 
    describe("Id", () => {
      it("Creating new id", () => {
        const obj = new Engineer("Ryan",9634);
        expect(obj.id).toEqual(9634);
      });
    });


    //creating email test 
    describe("Email", () => {
      it("Creating new Email", () => {
        const obj = new Engineer("Ryan",9634, "Ryanm@outlook.com");
        expect(obj.email).toEqual("Ryanm@outlook.com");
      });
    });


     //creating office number test 
     describe("Office", () => {
        it("Creating new office number", () => {
          const obj = new Engineer("Ryan",9634, "Ryanm@outlook.com", 34);
          expect(obj.email).toEqual(34);
        });
      });


    //Test for getName method
    describe("getName", () => {
      it("Return name by getName method", () => {
        const obj = new Engineer("Ryan");
        expect(obj.getName()).toEqual("Ryan");
      });
    });


    //Test for getId method
    describe("getId", () => {
      it("Return id by getId method", () => {
        const obj = new Engineer("Ryan", 9634);
        expect(obj.getId()).toEqual(9634);
      });
    });


    //Test for getEmail method
    describe("getEmail", () => {
      it("Return email by getEmail method", () => {
        const obj = new Engineer("Ryan", 9634, "Ryanm@outlook.com");
        expect(obj.getEmail()).toEqual("Ryanm@outlook.com");
      });
    });


    //Test for getOffice method
    describe("getOffice", () => {
        it("Return office number by getOffice method", () => {
          const obj = new Engineer("Ryan", 9634, "Ryanm@outlook.com", 34);
          expect(obj.getEmail()).toEqual("Ryanm@outlook.com");
        });
      });



    //Test for getRole method
    describe("getRole", () => {
      it("can return role by getRole method", () => {
        const role = "Engineer";
        const obj = new Engineer("Ryan", 9634, "Ryanm@outlook.com", 34);
        expect(obj.getRole()).toEqual(role);
      });
    });
});