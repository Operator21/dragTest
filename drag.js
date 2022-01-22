class Drag {
    constructor(dragDiv, dropDiv, brand) {
        //<i class="fab fa-${randomDraggableBrands[i].iconName} draggable" draggable="true" style="color: ${randomDraggableBrands[i].color};" id="${randomDraggableBrands[i].iconName}"></i>
        this.dragDiv = dragDiv;
        this.dropDiv = dropDiv;
        this.draggableElement = $N("i");
        this.draggableElement.classList.add("fab", "fa-" + brand.iconName);
        this.draggableElement.draggable = "true";        
        this.draggableElement.id = brand.iconName;        
        /*
        <div class="matching-pair">
            <span class="label">${alphabeticallySortedRandomDroppableBrands[i].brandName}</span>
            <span class="droppable" data-brand="${alphabeticallySortedRandomDroppableBrands[i].iconName}"></span>
        </div>
        */
        this.dropElement = $N("span");
        this.dropElement.classList.add("droppable");
        this.dropElement.setAttribute("data-brand", brand.iconName);
        this.dropElement.innerHTML = brand.brandName;
        this.writeHtml();

        this.draggableElement.addEventListener("dragstart", this.dragStart);

        this.dropElement.addEventListener("dragenter", this.dragEnter);
        this.dropElement.addEventListener("dragover", this.dragOver);
        this.dropElement.addEventListener("dragleave", this.dragLeave);
        //this.dropElement.addEventListener("drop", drop);
    }

    dragStart(event) {
        console.log(event.target.id);
        event.dataTransfer.setData("text", event.target.id);
    }

    dragEnter(event) {
        if (event.target.classList && event.target.classList.contains("droppable") && !event.target.classList.contains("dropped")) {
            event.target.classList.add("droppable-hover");
        }
    }

    dragOver(event) {
        if (event.target.classList && event.target.classList.contains("droppable") && !event.target.classList.contains("dropped")) {
            event.preventDefault();
        }
    }

    dragLeave(event) {
        if (event.target.classList && event.target.classList.contains("droppable") && !event.target.classList.contains("dropped")) {
            event.target.classList.remove("droppable-hover");
        }
    }

    writeHtml() {
        dragDiv.append(this.draggableElement);
        dropDiv.append(this.dropElement);
    }

    assignDrop(dropFunction) {
        this.dropElement.addEventListener("drop", dropFunction);
    }
}