/**
 * It gets the data from localStorage, if it's empty, it creates an empty array, then it clears the
 * table body, then it loops through the array and creates a new row for each element in the array.
 */
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


/**
 * It takes the index of the user you want to delete, gets the saved users from local storage, filters
 * out the user you want to delete, and then saves the filtered list back to local storage.
 * @param parIndex - The index of the user to be deleted.
 */
let deleteRegistry = (parIndex) => {
    savedUsers = JSON.parse(localStorage.getItem('usersls'))
    savedUsers = savedUsers.filter((alumno, index) => index !== parIndex);
    localStorage.setItem('usersls',  JSON.stringify(savedUsers));
    showUsers();
}

/**
 * It takes the index of the user in the array and fills the form with the user's data.
 * @param parIndex - the index of the user in the array
 */
let fillForm = (parIndex) => {
    savedUsers = JSON.parse(localStorage.getItem('usersls'))
    document.getElementById('position').value = parIndex;
    document.getElementById('nameUser').value = savedUsers[parIndex].name;
    document.getElementById('workout').value = savedUsers[parIndex].workout;
}

/**
 * It takes the values from the form, and then it updates the localStorage with the new values.
 * @returns the value of the variable savedUsers.
 */
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

/**
 * It takes the values from the input fields, pushes them into the usersLS array, and then saves the
 * array to local storage.
 */
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

/**
 * It clears the localstorage memory and then alerts the user that the memory was erased.
 */
let clearCache = () => {
    localStorage.clear();    
    alert('Localstorage memory was erased');
    showUsers();
}

/* It's calling the function showUsers() to show the users in the table. */
showUsers();