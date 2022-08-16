async function editFormHandler(event) {
  event.preventDefault();

<<<<<<< HEAD
  const title = document.querySelector('input[name="post-title"]').value.trim();
=======
  const title = document.querySelector('input[name="title"]').value.trim();
>>>>>>> 72fc35d98361ef8ed23c94339bebcbd9c482229c
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
