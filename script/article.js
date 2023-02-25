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
var listItems = document.getElementById("slides-container-li").children;

let currentIndex = 0;

function clickNext() {
  //console.log(currentIndex >= listItems.length - 1);
  if (currentIndex >= listItems.length - 1) {
    currentIndex = -1;
  }
  [...listItems].forEach((item) => (item.style.display = "none"));
  listItems[++currentIndex].style.display = "inline";
  //console.log('after increment', currentIndex)
}

function clickPrevious() {
  if (currentIndex <= 0) {
    currentIndex = listItems.length;
  }
  [...listItems].forEach((item) => (item.style.display = "none"));
  listItems[--currentIndex].style.display = "inline";
}
