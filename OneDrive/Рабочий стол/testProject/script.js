let menuOpen = false;

function toggleMenu() {
  let menu = document.getElementById('btnOfMenu');

  if (menuOpen) {
      menu.style.display = "none";
  } else {
      menu.style = "display: block";
  }
  menuOpen = !menuOpen;
}

function reviewPage() {
    window.location.href = 'secondPage.html';
  }

function goToMainPage() {
    window.location.href = 'firstPage.html';
  }

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(posts => {
  const postSpace = document.querySelector('.postSpace');

  posts.slice(0, 7).forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const titleElement = document.createElement('h2');
    titleElement.textContent = post.title;

    const bodyElement = document.createElement('p');
    bodyElement.textContent = post.body;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete the post';
    deleteButton.className = 'deletePost'

    deleteButton.addEventListener('click', () => {
      deletePost(post.id, postElement);
    });

    postElement.appendChild(titleElement);
    postElement.appendChild(bodyElement);
    postElement.appendChild(deleteButton);
    postSpace.appendChild(postElement);
  });
});

function deletePost(postId, postElement) {

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
  method: 'DELETE'
})
  .then(response => {
    if (response.ok) {
      postElement.classList.add('animationTrigger')
      postElement.addEventListener('animationend', () => {
        postElement.remove();
      });
  } else {
      console.log('Error');
    }
  })
}

function search () {
    let searchInput = document.getElementById('searchInput')
    const postSpace = document.querySelector('.postSpace');
    let text = searchInput.value 

    let children = postSpace.children

    for(let child of children) {
      if(child.innerText.toLowerCase().includes(text.toLowerCase())){
        child.style.display = "block"
      } else {
        child.style.display = "none"
      }
    }
  }

