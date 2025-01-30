import { useRef, useEffect } from "react";
import Trash from "../icons/Trash";
import useNotesStore from "../store/useNotesStore";

const NoteCard = () => {
  const notes = useNotesStore((state) => state.notes);
  const textAreaRefs = useRef({});

  useEffect(() => {
    Object.values(textAreaRefs.current).forEach((ref) => ref && autoGrow(ref));
  }, [notes]);

  const autoGrow = (textAreaRef) => {
    if (textAreaRef) {
      textAreaRef.style.height = "auto"; // Höhe auf Auto zurücksetzen
      textAreaRef.style.height = textAreaRef.scrollHeight + "px"; // Höhe auf ScrollHeight setzen
    }
  };

  return (
    <>
      {notes.map((note) => (
        <div
          key={note.$id}
          className="card"
          style={{
            backgroundColor: note.colors.colorBody,
            left: `${note.position.x}px`,
            top: `${note.position.y}px`,
          }}
        >
          <div
            className="card-header"
            style={{ backgroundColor: note.colors.colorHeader }}
          >
            <Trash />
          </div>
          <div className="card-body">
            <textarea
              ref={(el) => (textAreaRefs.current[note.$id] = el)}
              style={{ color: note.colors.colorText }}
              defaultValue={note.body}
              onInput={() => {
                autoGrow(textAreaRefs.current[note.$id]);
              }}
            ></textarea>
          </div>
        </div>
      ))}
    </>
  );
};

export default NoteCard;
