function handleLogin(event) {
    event.preventDefault(); // Ngăn chặn form submit mặc định
    
    const users = {};
    for (let i = 1; i <= 9; i++) {
        users[`user${i}`] = "123";
    }
    users["root"] = "root";
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (users[username] && users[username] === password) {
        if (username === "root") {
            window.location.href = "https://github.com/Ymqkwbsj/khitrithuc.io/tree/11dfc8b63fb04ae3df76d403947f14cc0f065c6b/next";
        } else {
            window.location.href = "https://www.google.com";
        }
    } else {
        alert("Bạn đã đăng nhập sai!");
    }
}
