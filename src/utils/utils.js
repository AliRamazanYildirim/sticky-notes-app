export const setNewOffset = (card, mouseMoveDir = { x: 0, y: 0 }) => {
    const offsetLeft = card.offsetLeft - mouseMoveDir.x;
    const offsetTop = card.offsetTop - mouseMoveDir.y;
 
    return {
        x: offsetLeft < 0 ? 0 : offsetLeft,
        y: offsetTop < 0 ? 0 : offsetTop,
    };
};

export const autoGrow = (textAreaRef) => {
  if (textAreaRef) {
    textAreaRef.style.height = "auto";
    textAreaRef.style.height = textAreaRef.scrollHeight + "px";
  }
};

export const setZIndex = (selectedCard, cardRefs) => {
    if (!selectedCard) return;

    const maxZIndex = Math.max(
        ...Object.values(cardRefs)
            .filter((card) => card)
            .map((card) => parseInt(card.style.zIndex) || 0),
        0
    );

    selectedCard.style.zIndex = maxZIndex + 1;
};