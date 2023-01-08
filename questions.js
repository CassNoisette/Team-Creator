// fs module
const fs = require ('fs');

// inquirer module
const inquirer = require ('inquirer');

// Team profiles
const Employee= require('./js/employee');
const Engineer= require('./js/engineer');
const Intern= require('./js/intern');
const Manager=require('./js/manager');

// Team arrays
const employee =[];
const enginner= [];
const intern=[];
const teamArray = [];


// create new team member
const createTeam = () => {
    inquirer .prompt ([{
        type: 'input',
    message:'Would you like to create a profile?',
    name: 'createTeam',
},
])
.then((answers)=> {
    if (answers.createTeam === true){
        question();
    }
  else {
    module.exports = Employee;
    module.exports = Engineer;
    module.exports = Intern;
    module.exports = Manager;
    // deleteHTML();
 
    console.log(answers)
    return answers;

  }

});
   
    };


    //Role selection
    const question = () => {
        inquirer.prompt ([
            {
                type:'input',
                name:'role',
                message:'what is the employee role?',
                choices: ['Employee, Engineer, Intern, Manager'],
            },
        ])
        .then((answers)=>{
            if (answers.role === 'Employee'){
                employeeQuestions();
            } 
            else if (answers.role === 'Engineer'){
                engineerQuestions ();
            }
            else if (answers.role === 'Intern'){
                internQuestions ();
            }
            else if (answers.role === 'Manager'){
                managerQuestions ();
            }

        });
    };

    question();

// employe question
const employeeQuestions = () => {
    inquirer .prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Record the employe name'
        },

        {
            type: 'input',
            name: 'Id',
            message: 'what is the employe ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is the employe email?'
        },


        {
            type: 'input',
            name: 'Office number',
            message: 'what is the employe office number?'
        },
 ])

 .then((answers)=> {
    const newEmployee = new Employee (
        answers.name,
        answers.id,
        answers.email,
        answers.office,
    );
    employee.push(newEmployee);
    createTeam();
 });
};

// engineer questions
const engineerQuestions = () => {
    inquirer .prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Record the engineer name'
        },

        {
            type: 'input',
            name: 'Id',
            message: 'what is the engineer ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is the engineer email?'
        },


        {
            type: 'input',
            name: 'Office number',
            message: 'what is the engineer office number?'
        },
 ])

 .then((answers)=> {
    const newEngineer = new Engineer (
        answers.name,
        answers.id,
        answers.email,
        answers.office,
    );
    enginner.push(newEngineer);
    createTeam();
 });
};

// intern questions:
const internQuestions = () => {
    inquirer .prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Record the intern name'
        },

        {
            type: 'input',
            name: 'Id',
            message: 'what is the intern ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is the intern email?'
        },


        {
            type: 'input',
            name: 'Office number',
            message: 'what is the intern office number?'
        },
 ])

 .then((answers)=> {
    const newIntern = new Intern (
        answers.name,
        answers.id,
        answers.email,
        answers.office,
    );
    intern.push(newIntern);
    createTeam();
 });
};

// manager questions 
const managerQuestions = () => {
    inquirer .prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Record the manager name'
        },

        {
            type: 'input',
            name: 'Id',
            message: 'what is the manager ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is the manager email?'
        },


        {
            type: 'input',
            name: 'Office number',
            message: 'what is the manager office number?'
        },
 ])

 .then((answers)=> {
    const newManager = new Manager (
        answers.name,
        answers.id,
        answers.email,
        answers.office,
    );
    manager.push(newManager);
    createTeam();
 });
};

const writeFile = info => {
fs.writeFile ('./dist/Team.html', info, err =>{
if (err) {
    console.log(err);
    return;
}
else{
    console.log ("Team profile created!")
}
})
}


newEmployee()
  .then(newEngineer)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });
