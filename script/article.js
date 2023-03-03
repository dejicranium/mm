///////////////////////////////////////////////////////////admin////////////////////////////////////////

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

//////////////////////////////////////////////////////////////////////////////////////////////////
const searchButton = document.getElementById("search-button");
const searchBox = document.getElementById("search-box");

searchButton.addEventListener("click", () => {
  const searchTerm = searchBox.value.toLowerCase();
  const articles = document.querySelectorAll(".article-section");

  articles.forEach((article) => {
    const title = article
      .querySelector(".product_name a")
      .textContent.toLowerCase();

    if (title.includes(searchTerm)) {
      article.style.display = "block";
    } else {
      article.style.display = "none";
    }
  });
});
