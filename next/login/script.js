document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = ['user1', 'user2', 'user3', 'user4', 'user5', 'user6', 'user7', 'user8', 'user9', 'user10', 'admin'];
    if ((users.includes(username) && password === '123')) {
        window.location.href = 'https://translate.google.com/?hl=vi&sl=auto&tl=vi&op=translate';
    } else if (username === 'root' && password === 'root') {
        window.location.href = 'https://www.google.com';
    } else {
        alert('Invalid username or password');
    }
});