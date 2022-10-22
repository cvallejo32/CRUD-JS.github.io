let showUsers = () => {
    let usersLS = JSON.parse(localStorage.getItem('usersls'))
    if( usersLS === null){
        console.log('entro');
        localStorage.setItem('usersls',  JSON.stringify([]));
        usersLS = []
    }
    document.getElementsByTagName("tbody")[0].innerHTML = '';
    usersLS.forEach((element, index) => {
        let texth1 = document.createElement("tr");
        texth1.innerHTML = `
        <td scope="row">${index + 1}</td>
        <td>${element.name}</td>
        <td>${element.workout}</td>
        <td>
            <button type="button" class="btn btn-primary" onclick="fillForm(${index})">
                Edit
            </button>
            <button type="button" class="btn btn-danger" onclick="deleteRegistry(${index})">
                Delete
            </button>
        </td>`;
        document.getElementsByTagName("tbody")[0].appendChild(texth1);
    });
}

let deleteRegistry = (parIndex) => {
    savedUsers = JSON.parse(localStorage.getItem('usersls'))
    savedUsers = savedUsers.filter((alumno, index) => index !== parIndex);
    localStorage.setItem('usersls',  JSON.stringify(savedUsers));
    showUsers();
}

let fillForm = (parIndex) => {
    savedUsers = JSON.parse(localStorage.getItem('usersls'))
    document.getElementById('position').value = parIndex;
    document.getElementById('nameUser').value = savedUsers[parIndex].name;
    document.getElementById('workout').value = savedUsers[parIndex].workout;
}

let updateRegistry = () => {
    let position = document.getElementById('position').value;
    let nameUser = document.getElementById('nameUser').value;
    let workout = document.getElementById('workout').value;
    if (position == '' || isNaN(position)) {
        alert('Debe seleccionar un registro');
        return false;
    }
    savedUsers = JSON.parse(localStorage.getItem('usersls'))
    savedUsers[position] = {
        name: nameUser,
        workout: workout
    }
    document.getElementById('position').value = '';
    document.getElementById('nameUser').value = '';
    document.getElementById('workout').value = '';
    localStorage.setItem('usersls',  JSON.stringify(savedUsers));
    showUsers();
}

let addRegistry = () => {
    usersLS = JSON.parse(localStorage.getItem('usersls'))
    const newUser = {
        name: document.getElementById('nameUser').value,
        workout: document.getElementById('workout').value
    }
    document.getElementById('nameUser').value = '';
    document.getElementById('workout').value = '';
    usersLS.push(newUser);
    localStorage.setItem('usersls',  JSON.stringify(usersLS));
    showUsers();
}

let clearCache = () => {
    localStorage.clear();    
    alert('Localstorage memory was erased');
    showUsers();
}

showUsers();