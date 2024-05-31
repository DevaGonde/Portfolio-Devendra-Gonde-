document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const visitorEmail = document.getElementById('visitorEmail').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const name = document.getElementById('name').value;

    // Construct the mailto link
    const mailtoLink = `mailto:devendragonde1221@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}&name=${name}%0D%0A%0D%0AFrom: ${encodeURIComponent(visitorEmail)}`;

    // Open the mailto link
    window.location.href = mailtoLink;
    alert('mail sent')
   document.getElementById('emailForm').reset()
});
