document.addEventListener("DOMContentLoaded", function () {
  const postButton = document.querySelector(".post-form button");
  const postList = document.querySelector(".post-list");
  const menuBtn = document.querySelector("#menuBtn"); // ID corrigido
  const sidebar = document.querySelector(".sidebar");

  menuBtn.addEventListener("click", function () {
    sidebar.classList.toggle("sidebar-active");
  });

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

  // Adiciona um ouvinte de evento para fechar a barra lateral ao clicar fora dela
  document.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
      sidebar.classList.remove("sidebar-active");
    }
  });
});
