users = [
    {
        user: 'User 1',
        workout: 'Press'
    },
    {
        user: 'User 2',
        workout: 'Joggin'
    },
    {
        user: 'User 3',
        workout: 'Swiming'
    },
]




let showUsers = (receivedUsers) => {
    document.getElementsByTagName("tbody")[0].innerHTML = '';
    receivedUsers.forEach((element, index) => {
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
};

let deleteRegistry = (parIndex) =>{
    users = users.filter((user, index) => index !== parIndex);
    showUsers(users);
};

let editRegistry = (parIndex) =>{
    document.getElementById('position').value = parIndex;
    document.getElementById('nameUser').value = users[parIndex].user;
    document.getElementById('workout').value = users[parIndex].workout;
};

let updateRegistry = () => {
    let position = document.getElementById('position').value;
    let nameUser = document.getElementById('nameUser').value;
    let workout = document.getElementById('workout').value;

    if (position == '' || isNaN(position)) {
        alert('You must select a registry!');
        return false;
    }
};

showUsers();