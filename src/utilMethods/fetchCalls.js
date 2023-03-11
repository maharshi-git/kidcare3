const postDocDetails = (imageData, postFunc) => { 
    
    let url = `http://localhost:3000${postFunc}`;
    
    fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    // handle response data
  })
  .catch(error => {
    // handle error
  });

}

export default postDocDetails;