document.getElementById('email').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default action of the link

    const email = document.getElementById('email').innerText;
    navigator.clipboard.writeText(email)
        .then(() => {
            showToast('Email copied!');
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
});

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.innerText = message;
    toast.className = 'show';
    setTimeout(() => { toast.className = toast.className.replace('show', ''); }, 3000);
}
