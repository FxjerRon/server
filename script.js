// script.js

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
      const response = await fetch('http://localhost:4001', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${username}&password=${password}`,
      });

      if (response.ok) {
        const result = await response.text();
        alert(result); // แสดงข้อความล็อกอินสำเร็จ
      } else {
        throw new Error('Invalid username or password');
      }
    } catch (error) {
      console.error(error);
      alert('Error during login. Please try again.'); // แสดงข้อความเมื่อเกิดข้อผิดพลาด
    }
  });
});