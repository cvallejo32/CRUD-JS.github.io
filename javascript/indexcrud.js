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
