const formEl = document.getElementById('form');
const submitBtn = document.getElementById('submit');


formEl.addEventListener('submit', (e) => {
    e.preventDefault();
});



// Ajax
submitBtn.onclick = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'api/send_email.php', true);
    xhr.onload = () => {
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            let data = xhr.response;

            if (data == 'success') {
                alert('Email sent successfully');
            }

            if (data == 'error') {
                alert('Something went wrong');
            }

            if (data == 'missing_fields') {
                alert('All fields are required');
            }
            location.replace('index.php');
        }
    }

    xhr.send(new FormData(formEl));
}