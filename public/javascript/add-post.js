// async function newFormHandler(event) {
//   console.log("HERRE");

//   event.preventDefault();

//   console.log("HERE");

//   const title = document.querySelector('input[name="post-title"]').value;
//   const image = document.querySelector('input[name="image"]').value;
//   console.log(title);
//   console.log(image);

//   // const formData = new FormData(document.querySelector('#post-form'));
//   // console.log(formData);
//   const formData = new FormData(event.target);
//   const formProps = Object.fromEntries(formData);
//   console.log(formProps.image);
  
//   let response;
//   try {
//     response= await fetch(`/api/posts`, {
//       method: 'POST',
//       body: formProps.image,
//       headers: {
//         'Content-Type': 'image/jpg'
//       }
//     });
//   } catch (error) {
//     console.log(`Could not send post req: ${error}`);
//   }
  

//   console.log(`response: ${response}`);

//   if (response.ok) {
//     document.location.replace('/dashboard');
//   } else {
//     alert(response.statusText);
//   }
// }

// document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
