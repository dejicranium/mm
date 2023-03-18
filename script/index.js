var slider = tns({
  arrowKeys: true,
  autoplay: false,
  container: ".js-slider-product-tray",
  controls: true,
  controlsContainer: ".js-controls",
  gutter: 24,
  items: 1.2,
  loop: false,
  mouseDrag: true,
  nav: false,
  responsive: {
    360: {
      items: 1.2,
    },
    600: {
      items: 1.8,
    },
    900: {
      items: 2.5,
    },
  },
  slideBy: "page",
  touch: true,
});

///
///////////////////////////////////////////////////////////////////////////////////
const blogPostData = [
  {
    title: "Yet another article 2",
    date: "2023-03-15",
    author: "Kevin Powell",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    link: "./blog/2023-03-15-yet-another-article/",
    imgUrl: "./assets/blog/photo-2-.png",
  },
  // ... Add the rest of your blog posts as objects here
];

function displayRecentPosts(posts) {
  const recentPostsContainer = document.getElementById("recent-blog-posts");
  recentPostsContainer.innerHTML = "";

  posts.forEach((post) => {
    const postSection = document.createElement("section");
    postSection.classList.add("article-section", "grid");

    postSection.innerHTML = `
      <div class="card_container">
        <div class="card_image">
          <img src="${post.imgUrl}" alt="${post.title}" />
        </div>
        <div class="card_details">
          <div class="product_name">
            <h3 class="a-h3"><a href="${post.link}" class="color , list-group-item">${post.title}</a></h3>
            <div>
              <p class="a-p">${post.content}</p>
            </div>
          </div>
          <div class="a-details">
            <ul>
              <li><a href="${post.link}">Read more</a></li>
              <li>${post.author} - ${post.date}</li>
            </ul>
          </div>
        </div>
      </div>

      
    `;

    recentPostsContainer.appendChild(postSection);
  });
}

function getRecentPosts(postData) {
  const sortedPosts = postData.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  return sortedPosts.slice(0, 3);
}

const recentPosts = getRecentPosts(blogPostData);
displayRecentPosts(recentPosts);
