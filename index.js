function handleFormSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const newLi = document.createElement('li');
    newLi.innerHTML = username + ' - ' + email + ' - ' + phone +
        '<button class="delete-btn">delete</button>' +
        '<button class="edit-btn">Edit</button>';

    const userList = document.querySelector('#userList');
    userList.appendChild(newLi);

    const obj = {
        username: username,
        email: email,
        phone: phone
    };

    axios
        .post("https://crudcrud.com/api/1b61d863702d427bbcf8bf26db27cdc3/appdata", obj)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));

    const deleteButton = newLi.querySelector('.delete-btn');
    deleteButton.addEventListener('click', function () {
        userList.removeChild(newLi);
    });

    const editButton = newLi.querySelector('.edit-btn');
    editButton.addEventListener('click', function () {
        document.querySelector('#username').value = obj.username;
        document.querySelector('#email').value = obj.email;
        document.querySelector('#phone').value = obj.phone;
    });
}
