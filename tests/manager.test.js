// creating constructor
const Manager = require('../js/manager');


//initalize testing 

describe("Manager", () => {
    describe("Initialization", () => {
      it("Initialization", () => {
        const obj = new Manager();
        expect(typeof(obj)).toEqual("object");
      });
    });


    //creating name test 
    describe("Name", () => {
      it("Creating new name", () => {
        const obj = new Manager("Caroline");
        expect(obj.name).toEqual("Caroline");
      });
    });


    //creating id test 
    describe("Id", () => {
      it("Creating new id", () => {
        const obj = new Manager("Caroline",1094);
        expect(obj.id).toEqual(1094);
      });
    });


    //creating email test 
    describe("Email", () => {
      it("Creating new Email", () => {
        const obj = new Manager("Caroline",1094, "Carolinem@outlook.com");
        expect(obj.email).toEqual("Carolinem@outlook.com");
      });
    });


     //creating office number test 
     describe("Office", () => {
        it("Creating new office number", () => {
          const obj = new Manager("Caroline",1094, "Carolinem@outlook.com", 75);
          expect(obj.email).toEqual(75);
        });
      });


    //Test for getName method
    describe("getName", () => {
      it("Return name by getName method", () => {
        const obj = new Manager("Caroline");
        expect(obj.getName()).toEqual("Caroline");
      });
    });


    //Test for getId method
    describe("getId", () => {
      it("Return id by getId method", () => {
        const obj = new Manager("Caroline", 1094);
        expect(obj.getId()).toEqual(1094);
      });
    });


    //Test for getEmail method
    describe("getEmail", () => {
      it("Return email by getEmail method", () => {
        const obj = new Manager("Caroline", 1094, "Carolinem@outlook.com");
        expect(obj.getEmail()).toEqual("Carolinem@outlook.com");
      });
    });


    //Test for getOffice method
    describe("getOffice", () => {
        it("Return office number by getOffice method", () => {
          const obj = new Manager("Caroline", 1094, "Carolinem@outlook.com", 75);
          expect(obj.getEmail()).toEqual("Carolinem@outlook.com");
        });
      });



    //Test for getRole method
    describe("getRole", () => {
      it("can return role by getRole method", () => {
        const role = "Manager";
        const obj = new Manager("Caroline", 1094, "Carolinem@outlook.com", 75);
        expect(obj.getRole()).toEqual(role);
      });
    });
});