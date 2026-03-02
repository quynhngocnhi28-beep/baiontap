import { useState } from "react";
import './LetterForm.css'

function LetterForm({ onAdd }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === "") return;

        onAdd(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <img 
              type="text"
              placeholder="Viết letter..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ width: "100%", padding: "8px"}}
            />
            <button style={{ marginTop: "10px"}}>Gửi</button>
        </form>
    );
}

export default LetterForm;