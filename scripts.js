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
  const deleteLi = document.createElement("div");
  const deleteImg = document.createElement("img");
  const closeDelete = document.createElement("img");
  const deleteSpan = document.createElement("span");
  const container = document.getElementById("container");

  img.src = "./assets/check.svg";
  img.style.width = "23px";
  img.style.cursor = "pointer";

  removeItem.src = "./assets/trash.svg";
  removeItem.style.width = "23px";
  removeItem.style.cursor = "pointer";
  removeItem.style;

  deleteImg.src = "./assets/alerta.svg";
  deleteImg.style.width = "23px";

  closeDelete.src = "./assets/fechar.svg";
  closeDelete.style.width = "23px";
  closeDelete.style.cursor = "pointer";

  deleteImg.classList.add("deleteImg");
  deleteLi.classList.add("deleteLi");
  closeDelete.classList.add("closeDelete");
  newItem.classList.add("span-txt");
  img.classList.add("check");
  removeItem.classList.add("delete");
  deleteSpan.classList.add("span-txt-delete");

  newItem.textContent = item;
  deleteSpan.textContent = "O item foi removido da lista";

  img.addEventListener("click", () => {
    if (img.src.includes("check.svg")) {
      img.src = "./assets/checkOn.svg";
    } else {
      img.src = "./assets/check.svg";
    }
  });

  removeItem.addEventListener("click", () => {
    container.append(deleteLi);
    setTimeout(() => {
      deleteLi.classList.add("fade-out");
      setTimeout(() => {
        deleteLi.style.display = "none";
      }, 200);
    }, 1000);
  });
  closeDelete.addEventListener("click", () => {
    deleteLi.style.display = "none";
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

  deleteLi.prepend(deleteImg);
  deleteLi.append(deleteSpan);
  deleteLi.append(closeDelete);
  listAdd.append(newItem);
  listAdd.prepend(img);
  listAdd.append(removeItem);
  buyList.prepend(listAdd);
  listAdd.classList.add("list-li");
});
