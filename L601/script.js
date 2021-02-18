let studentId = prompt('შეიყვანეთ სტუდენტის ID', '');
document.querySelectorAll('[data-student-id = "' + studentId + '"]').forEach(el => el.style.background = 'green');