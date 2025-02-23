// Adicionando itens na lista
const input = document.querySelector("input");
addEventListener("submit", (event) => {
  event.preventDefault();
  const item = input.value;

  console.log(item);
  const buyList = document.querySelector("ul");
  const listAdd = document.createElement("li");
  const newItem = document.createElement("p");
  const img = document.createElement("img");
  const removeItem = document.createElement("img");

  img.src = "./assets/check.svg";
  img.style.width = "23px";
  img.style.cursor = "pointer";

  removeItem.src = "./assets/trash.svg";
  removeItem.style.width = "23px";
  removeItem.style.cursor = "pointer";
  removeItem.style;

  newItem.classList.add("span-txt");
  img.classList.add("check");
  removeItem.classList.add("delete");

  newItem.textContent = item;

  img.addEventListener("click", () => {
    if (img.src.includes("check.svg")) {
      img.src = "./assets/checkOn.svg";
    } else {
      img.src = "./assets/check.svg";
    }
  });

  removeItem.addEventListener("mouseover", () => {
    removeItem.style.transform = "scale(1.1)";
  });
  removeItem.addEventListener("mouseout", () => {
    removeItem.style.transform = "scale(1)";
  });

  removeItem.addEventListener("click", (event) => {
    listAdd.style.display = "none";
  });

  listAdd.append(newItem);
  listAdd.prepend(img);
  listAdd.append(removeItem);
  buyList.prepend(listAdd);
  listAdd.classList.add("list-li");
});
