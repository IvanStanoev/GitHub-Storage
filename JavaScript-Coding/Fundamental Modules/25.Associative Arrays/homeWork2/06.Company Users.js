// { SoftUni: ['asd'], Microsoft: ['asdf']}

function companyUsers(arr) {

    let companyEmployees = {};       // празен обект

    for (let companyEmployee of arr) {                               // обхождаме през всеки елемент от оригиналния масив
        let [company, employeeId] = companyEmployee.split(' -> ');   // деструкторираме и сплитваме

        if (company in companyEmployees) {
            if (!companyEmployees[company].includes(employeeId)) {   // ако до момента този служител го няма
                companyEmployees[company].push(employeeId);          // ако имаме вече тази компания добави този служител
            }
        } else {
            companyEmployees[company] = [employeeId];               // добавяме следващата компания и служителя към нея
            //companyEmployees[company].push(employeeId);           // прави същото като 15-ти ред
        }
    }

    let entries = Object.entries(companyEmployees).sort((a, b) => a[0].localeCompare(b[0]));  // преобразуваме обекта в [масив] и сортираме по азбучен ред с .localeCompare()

    for (let [name, employeeIds] of entries) {
        console.log(name);
        employeeIds.forEach(id => console.log(`-- ${id}`));  // за всяко id отпечатай (`-- ${id}`)
    }
}
companyUsers([

    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'

]);