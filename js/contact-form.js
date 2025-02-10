const scriptURL = 'https://script.google.com/macros/s/AKfycby9voAgR6jLKsksqCbE2Vkn5B3vQqtDx6eBm7KEfecE7auR-h9HhOArhQYmHcZsUKZw-Q/exec'
    const form = document.forms['Portofolio Message']
  
    form.addEventListener('submit', e => {
      e.preventDefault();
      
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          if (response.ok) {
            alert('Message sent successfully!');
            form.reset(); 
          } else {
            alert('Failed to send message. Please try again.');
          }
        })
        .catch(error => {
          console.error('Error!', error.message);
          alert('There was an error submitting the form. Please check your connection.');
        });
    });