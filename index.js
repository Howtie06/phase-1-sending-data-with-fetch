// Add your code here
function submitData(name, email) {
    const formData = {
      name: name,
      email: email
    };
  
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    };
  
    return fetch('http://localhost:3000/users', config)
      .then(response => response.json())
      .then(data => {
        appendIdToDOM(data.id);
      })
      .catch(error => {
        appendErrorToDOM(error.message);
      });
  }
  
  function appendIdToDOM(id) {
    const idElement = document.createElement('p');
    idElement.textContent = `New ID: ${id}`;
    document.body.appendChild(idElement);
  }
  
  function appendErrorToDOM(message) {
    const errorElement = document.createElement('p');
    errorElement.textContent = `Error: ${message}`;
    document.body.appendChild(errorElement);
  }
  
  submitData();