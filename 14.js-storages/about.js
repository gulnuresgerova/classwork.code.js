let userData = JSON.parse(localStorage.getItem("allUsers")) ;

renderTable(userData);
function renderTable(userData){
    let table = document.querySelector("table");
    let tbody = document.querySelector("tbody");
    
    userData.forEach((allUsers) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
        <td> ${allUsers.firstname}</td>
        <td> ${allUsers.lastname}</td>
        <td> ${allUsers.address}</td>
        <td> ${allUsers.id}</td>
        `;
        tbody.append(tr);
    });
    table.appendChild(tbody);
}

