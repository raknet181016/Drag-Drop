const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", itemDragstart);
item.addEventListener("dragend", itemDragend);

for (const placeholder of placeholders) {
    placeholder.addEventListener("dragover", placeholderDragover);
    placeholder.addEventListener("dragenter", placeholderDragenter);
    placeholder.addEventListener("dragleave", placeholderDragleave);
    placeholder.addEventListener("drop", placeholderDrop);
}

function itemDragstart(e) {
    e.target.classList.add("hold");
    setTimeout(() => e.target.classList.add("hide"), 0);
}

function itemDragend(e) {
    e.target.classList.remove("hold", "hide");
}

function placeholderDragover(e) {
    e.preventDefault();
}

function placeholderDragenter(e) {
    e.target.classList.add("hovered");
}

function placeholderDragleave(e) {
    e.target.classList.remove("hovered");
}

function placeholderDrop(e) {
    e.target.classList.remove("hovered");
    e.target.append(item);
}