users = [
    {
        user: 'User 1',
        workout: 'Press'
    }
    {
        user: 'User 2',
        workout: 'Joggin'
    }
    {
        user: 'User 3',
        workout: 'Swiming'
    }
]

let showUsers = (receivedUsers) => {
    document.getElementsByTagName("tbody"){0}.innerHTML = '';
    receivedUsers.forEach((element, index) => {
        let texth1 = document.createElement("tr");
        texth1.innerHTML = `
        <td scope="row">${index + 1}</td>   
        <td>${element.user}</td>
        <td>${element.workout}</td>
        <td>
        <button type="button" class="btn btn-primary" onclick="editRegistry()">Edit</button>
        <button type="button" class="btn btn-danger" onclick="deleteRegistry()">Delete</button>
        </td>`;
        document.getElementsByTagName("tbody")[0].appendChild(texth1);
    });
};
{}