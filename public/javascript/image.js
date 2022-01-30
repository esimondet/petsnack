const imageForm = document.querySelector('#imageForm');
const imageInput = document.querySelector('#imageInput');

//listen for submit, accept files
imageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const file = imageInput.files[0];

  //get secure URL from server
  const { url } = fetch('/s3Url').then((res) => res.json());

  //post image to s3 bucket
  fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: file,
  });

  const imageUrl = url.split('?')[0];
  console.log(imageUrl);

  // display uploaded image on page
  // const img = document.createElement('img');
  // img.src = imageUrl;
  // document.body.appendChild(img);
});
