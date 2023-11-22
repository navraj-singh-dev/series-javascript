const user_name = document.getElementById("input-name");
const button = document.getElementById("button");
const h1 = document.getElementById("h1");

button.addEventListener("click", () => {
  const value = user_name.value;
  localStorage.setItem("name", value);
  location.reload();
});

window.addEventListener("load", () => {
  const value = localStorage.getItem("name");
  h1.innerText = `Hi My Name is ${value}`;
});

// Browsers have a local storage where they store key:value
// pairs. we can store some inforamtion here in this local storage.
// and using "localStorage" object in JS, we can access that information.
// we use localStorage.getItem(), localStorage.setItem() for this.
