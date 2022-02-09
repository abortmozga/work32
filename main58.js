let users = []

let addUser = () =>{
    let userName = document.querySelector('#form').value
    console.log(userName)
    let age = document.getElementById('age').value
    console.log(age)
    let user = {
        name: userName,
        age,
    }
    users.push(user)
    console.log(users)

    let userList = document.querySelector(".spisok")
    userList.insertAdjacentHTML('beforeend',`
    <li>
        <div class="name">${user.name}</div>
        <div class="age">${user['age']}</div>
    </li>
    `)
    localStorage.setItem('userName', user.name)
        console.log(localStorage)
}
