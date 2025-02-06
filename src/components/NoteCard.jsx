import { useEffect } from "react";
import Trash from "../icons/Trash";
import useNotesStore from "../store/useNotesStore";
import { setNewOffset } from "../utils/utils";

const NoteCard = () => {
  const {
    notes = [],
    updateNotePosition,
    textAreaRefs,
    cardRefs,
    draggingId,
    mouseStartPos,
    setDraggingId,
    setMouseStartPos,
  } = useNotesStore();

  useEffect(() => {
    Object.values(textAreaRefs).forEach((ref) => ref && autoGrow(ref));
  }, [notes, textAreaRefs]);

  const autoGrow = (textAreaRef) => {
    if (textAreaRef) {
      textAreaRef.style.height = "auto";
      textAreaRef.style.height = textAreaRef.scrollHeight + "px";
    }
  };

  const handleMouseDown = (e, id) => {
    setDraggingId(id);
    setMouseStartPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!draggingId) return;

    const deltaX = e.clientX - mouseStartPos.x;
    const deltaY = e.clientY - mouseStartPos.y;
    const card = cardRefs[draggingId];
    if (!card) return;
    
    const newOffset = setNewOffset(card, { x: -deltaX, y: -deltaY });

    updateNotePosition(draggingId, newOffset.x - card.offsetLeft, newOffset.y - card.offsetTop);
    setMouseStartPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setDraggingId(null);
  };

  return (
    <div onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      {notes.map((note) => (
        <div
          key={note.$id}
          ref={(el) => (cardRefs[note.$id] = el)}
          className="card"
          style={{
            backgroundColor: note.colors.colorBody,
            left: `${note.position.x}px`,
            top: `${note.position.y}px`,
            position: "absolute",
          }}
        >
          <div
            className="card-header"
            style={{ backgroundColor: note.colors.colorHeader }}
            onMouseDown={(e) => handleMouseDown(e, note.$id)}
          >
            <Trash />
          </div>
          <div className="card-body">
            <textarea
              ref={(el) => (textAreaRefs[note.$id] = el)}
              style={{ color: note.colors.colorText }}
              defaultValue={note.body}
              onInput={() => autoGrow(textAreaRefs[note.$id])}
            ></textarea>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteCard;
