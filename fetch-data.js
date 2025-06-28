// Define async function to fetch user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        dataContainer.innerHTML = ''; // clear "Loading..." text

        const userList = document.createElement('ul');

        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        dataContainer.appendChild(userList);
    } catch (error) {
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Run fetchUserData after page is loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
