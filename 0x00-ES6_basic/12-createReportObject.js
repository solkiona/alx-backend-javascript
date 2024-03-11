export default function createReportObject(employeesList) {
    
return {
    get allEmployees(){ return {...employeesList}},
    getNumberOfDepartments(){
        return Object.keys(employeesList).length;
       
    }
}



}

// function newobject(employeesList){
//     return{
//         get allEmployees() {
//             return {...employeesList};
//         }
//         ,
//         getNumberOfDepartments(){
//             return Object.keys(employeesList).length;
//         }
//     }
    
// }

// // const number = newobject({ engineering: [ 'Bob', 'Jane' ], marketing: [ 'Sylvie' ] });

// const report = newobject({ engineering: [ 'Bob', 'Jane' ], marketing: [ 'Sylvie' ] });

// console.log(report.allEmployees);
// console.log(report.getNumberOfDepartments(report.allEmployees));