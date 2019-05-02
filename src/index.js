import list from "./actions/list";
import add from "./actions/add";
import remove from "./actions/remove";
import update from "./actions/update"

const picturesGridElement = document.getElementById("pictures-grid");
const pictureInputElement = document.getElementById("picture-url-input");
const pictureAddButtonElement = document.getElementById("picture-add-button");

const pictureItemTemplate = document.getElementById("picture-item-template");

const getInputContents = () => pictureInputElement.value;
const clearInputContents = () => (pictureInputElement.value = "");

const refreshGrid = () => {
  // FIXME: use your functions to get all the elements
  const items = list();

  const fragment = document.createDocumentFragment();

  items.forEach((elm, i) => {
    const clone = document.importNode(pictureItemTemplate.content, true);

    const imgElement = clone.querySelector(".picture-item-image");

    // FIXME: set the URL from your Picture model.
    //imgElement.src = "https://picsum.photos/458/354";
    imgElement.src = elm;

    const deleteButtonElement = clone.querySelector(
      ".picture-item-delete-button"
    );

    // FIXME: use your functions to delete the selected element
    deleteButtonElement.addEventListener("click", () => {
      remove(i);
      refreshGrid()
    });

    const updateButtonElement = clone.querySelector(
      ".picture-item-update-button"
    );

    const updateUrl = clone.querySelector(".update-button");

    updateButtonElement.addEventListener("click", () => {
      if (updateUrl.value.length > 0) {
        update(i, updateUrl.value.trim());
        refreshGrid();
      }
    });

    fragment.appendChild(clone);
  });

  picturesGridElement.innerHTML = "";
  picturesGridElement.appendChild(fragment);
};

const addPictureHandler = () => {
  const URL = getInputContents().trim();

  // FIXME: use your actions functions to add a new picture
  // FIXME: bonus, trim eventual whitespaces and validate content

  if (URL.length > 0) {
    add(URL);
    refreshGrid()
  }

  clearInputContents();
};

refreshGrid();

pictureAddButtonElement.addEventListener("click", () => addPictureHandler());
