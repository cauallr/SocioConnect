// script.js

document.addEventListener("DOMContentLoaded", function () {
    const postButton = document.querySelector(".post-form button");
    const postList = document.querySelector(".post-list");
  
    postButton.addEventListener("click", function () {
      const textarea = document.querySelector(".post-form textarea");
      const postContent = textarea.value.trim();
  
      if (postContent !== "") {
        const postElement = document.createElement("div");
        postElement.className = "post";
        postElement.innerHTML = `<p>${postContent}</p>`;
        postList.appendChild(postElement);
        textarea.value = ""; // Limpa o campo de texto
      }
    });
  });
  