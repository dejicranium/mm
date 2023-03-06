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
///////////////////////////////////////////////////////////
///////////////////////////////pagination////////////////////
const itemsPerPage = 4;
// Get the article list and the pagination container
const articleList = document.getElementById("slides-container-li");
const paginationContainer = document.getElementById("pagination");

// Get the number of articles and calculate the number of pages
const numArticles = articleList.children.length;
const numPages = Math.ceil(numArticles / 4);

// Loop through each page and create a pagination button
for (let i = 1; i <= numPages; i++) {
  const button = document.createElement("li");
  const link = document.createElement("a");
  link.href = "#";
  link.textContent = i;
  button.appendChild(link);
  paginationContainer.appendChild(button);

  // Add an event listener to the button that shows the corresponding articles
  button.addEventListener("click", () => {
    // Hide all articles
    for (let j = 0; j < numArticles; j++) {
      articleList.children[j].style.display = "none";
    }

    // Show the articles for the current page
    const startIndex = (i - 1) * 4;
    const endIndex = Math.min(startIndex + 4, numArticles);
    for (let j = startIndex; j < endIndex; j++) {
      articleList.children[j].style.display = "block";
    }

    // Update the active class for the pagination buttons
    const activeButton = document.querySelector(".pagination li.active");
    if (activeButton) {
      activeButton.classList.remove("active");
    }
    button.classList.add("active");
  });
}

// Show the first page of articles and set the first pagination button as active
for (let i = 1; i < 4 && i < numArticles; i++) {
  articleList.children[i].style.display = "block";
}
paginationContainer.children[0].classList.add("active");

/////////////

//////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////SEARCH BAR FOR ARTICLE /////////////////////////////////
const articles = document.querySelectorAll(".article-section");

function searchArticles(query) {
  const results = [];

  articles.forEach((article) => {
    const title = article.querySelector(".a-h3 a").textContent.toLowerCase();

    if (title.includes(query.toLowerCase())) {
      results.push(article.outerHTML);
    }
  });

  return results;
}

const searchBtn = document.querySelector(".btn-search");
const searchInput = document.querySelector("#search-input");
const dataDisplay = document.querySelector("#data-display");

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();

  if (query !== "") {
    const results = searchArticles(query);

    if (results.length > 0) {
      dataDisplay.innerHTML = results.join("");
    } else {
      dataDisplay.innerHTML = "<p>No results found.</p>";
    }
  } else {
    dataDisplay.innerHTML = "";
  }
});
///////////
document.querySelector("#search-input").addEventListener("input", filterList);
function filterList() {
  const searchInput = document.querySelector("#search-input");
  const filter = searchInput.value.toLowerCase();
  const listItems = document.querySelectorAll(".list-group-item");
  listItems.forEach((item) => {
    let text = item.textContent;
    if (text.toLowerCase().includes(filter.toLowerCase())) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}
