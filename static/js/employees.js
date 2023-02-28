const obj = {
    "employees": [
        {
            "name": "James",
            "age": 27,
            "salary": 17000
        },
        {
            "name": "Robert",
            "age": 27,
            "salary": 25000
        },
        {
            "name": "Emma",
            "age": 27,
            "salary": 45000
        },
        {
            "name": "Mohammed",
            "age": 27,
            "salary": 33000
        },
        {
            "name": "Kumar",
            "age": 27,
            "salary": 14000
        },
        {
            "name": "Ganesh",
            "age": 27,
            "salary": 35000
        },
        {
            "name": "Krish",
            "age": 27,
            "salary": 15000
        }
    ]
};
function fill(name, age, salary) {
    let div = document.createElement('div');
    div.className = 'employees';
    div.innerHTML = `
    <p class="name">${name}</p>
    <p class="age">${age}</p>
    <p class="salary">${salary}</p>`;
    return div;
}
let container = document.querySelector('.container');
let single = document.querySelector('.single');
let home = document.getElementById('home');
let invisible = document
    .getElementById('invisible');
obj.employees.forEach((employee) => {
    container.append(fill(employee.name, employee.age, employee.salary));
});
let allEmployees = document.querySelectorAll('.employees');
allEmployees.forEach((e, i) => {
    e.addEventListener('click', () => {
        invisible.style.display = 'block';
        single.style.display = 'flex';
        let target = obj.employees[i];
        single.innerHTML = `
        <div>
        <p class="name">${target.name}</p>
        <p class="age">${target.age}</p>
        <p class="salary">${target.salary}</p>
        </div>

        <button id="home">Back</button>
        `;

    });
});
document.addEventListener('click', (e) => {
    if (e.target.id === 'home' || e.target.id === 'invisible') {
        single.style.display = 'none';
        invisible.style.display = 'none';
    }
});
