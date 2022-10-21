users = [
    {
        name: 'User 1',
        workout: 'Press'
    }
    {
        name: 'User 2',
        workout: 'Joggin'
    }
    {
        name: 'User 3',
        workout: 'Swiming'
    }
]

let showUsers = (receivedUsers) => {
    document.getElementsByTagName("tbody"){0}.innerHTML = '';
    receivedUsers.forEach((element, index) => {
        let texth1 = document.createElement("tr");
        texth1.innerHTML = `
        <td scope="row">${index + 1}</td>   
        
        `
    });
};
