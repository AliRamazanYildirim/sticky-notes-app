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