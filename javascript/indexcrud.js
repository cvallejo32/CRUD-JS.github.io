let showUsers = () => {
    let usersLS = JSON.parse(localStorage.getItem('usersls'))
    if( usersLS === null){
        console.log('entro');
        localStorage.setItem('usersls', JSON.stringify([]));
        usersLS = []
    }
    document.getElementsByTagName("tbody")[0].innerHTML = '';
    usersLS.forEach((element, index) => {
        let texth1 = document.createElement("tr");
        texth1.innerHTML = `
        <td scope="row">${index + 1}</td>   
        <td>${element.user}</td>
        <td>${element.workout}</td>
        <td>
        <button type="button" class="btn btn-primary" onclick="editRegistry(${index})">
        Edit
        </button>
        <button type="button" class="btn btn-danger" onclick="deleteRegistry(${index})">
        Delete
        </button>
        </td>`;
        document.getElementsByTagName("tbody")[0].appendChild(texth1);
    });
}

let deleteRegistry = (parIndex) =>{
    storageUsers = JSON.parse(localStorage.getItem('usersls'))
    storageUsers = storageUsers.filter((user, index) => index !== parIndex)
    localStorage.setItem('usersls', JSON.stringify(storageUsers));
    showUsers();
};

let fillForm = (parIndex) =>{
    storageUsers = JSON.parse(localStorage.getItem('usersls'))
    document.getElementById('position').value = parIndex;
    document.getElementById('nameUser').value = storageUsers[parIndex].user;
    document.getElementById('workout').value = storageUsers[parIndex].workout;
};

let updateRegistry = () => {
    let position = document.getElementById('position').value;
    let nameUser = document.getElementById('nameUser').value;
    let workout = document.getElementById('workout').value;
    if (position == '' || isNaN(position)) {
        alert('You must select a registry!');
        return false;
    }
    storageUsers = JSON.parse(localStorage.getItem('usersls'))
    storageUsers[position] = {
        user: nameUser,
        workout: workout
    }
    document.getElementById('position').value = '';
    document.getElementById('nameUser').value = '';
    document.getElementById('workout').value = '';
    localStorage.setItem('usersls', JSON.stringify(storageUsers));
    showUsers
};

let addRegistry = () => {
    usersLS = JSON.parse(localStorage.getItem('usersls'))
    const newUser = {
        user: document.getElementById('nameUser').value,
        workout: document.getElementById('workout').value
    }
    document.getElementById('nameUser').value = '';
    document.getElementById('workout').value = '';
    usersLS.push(newUser);
    localStorage.setItem('usersls', JSON.stringify(usersLS));
    showUsers();
}

let clearCache = () => {
    localStorage.clear();
    alert('Local storage memory has been erased');
    showUsers();
}

showUsers();