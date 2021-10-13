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
                submitBtn.value = 'Send';
                formEl.reset();
            }

            if (data == 'error') {
                alert('Something went wrong');
                submitBtn.value = 'Send';
            }

            if (data == 'missing_fields') {
                alert('All fields are required');
                submitBtn.value = 'Send';
            }
            
        }
    }

    xhr.send(new FormData(formEl));
    submitBtn.value = 'Loading ...';
    submitBtn.disabled = true;
}
