// { SoftUni: ['asd'], Microsoft: ['asdf']}

function companyUsers(arr) {
 
    let companyEmployees = {};

    for (let companyEmployee of arr) {
        let [company, employeeId] = companyEmployee.split(' -> ');

        if (company in companyEmployees) {
            if (!companyEmployees[company].includes(employeeId)) {   // ако до момента този служител го няма
                companyEmployees[company].push(employeeId);          // добави този служител
            }
        } else {
            companyEmployees[company] = [employeeId];
            //companyEmployees[company].push(employeeId);
        }
    }

    let entries = Object.entries(companyEmployees).sort((a, b) => a[0].localeCompare(b[0]));  // сортираме по азбучен ред с .localeCompare()
    
    for (let [name, employeeIds] of entries) {
        console.log(name);
        employeeIds.forEach(id => console.log(`-- ${id}`));
    }
}
companyUsers([

    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'

]);