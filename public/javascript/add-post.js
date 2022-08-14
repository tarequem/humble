async function newFormHandler(event) {
  console.log("HERRE");

  event.preventDefault();

  console.log("HERE");

  const title = document.querySelector('input[name="post-title"]').value;
  const image = document.querySelector('input[name="image"]').value;

  console.log(`=== title: ${title}`);
  console.log(`=== image: ${image}`);
  

  let response;
  try {
    response= await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title
      }),
      file: image,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.log(`Could not send post req: ${error}`);
  }
  

  console.log(`response: ${response}`);

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
