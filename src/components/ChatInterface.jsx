import React, { useState } from "react";

function ChatInterface() {
  const [threads] = useState(["Advisor A", "Advisor B"]);
  const [selected, setSelected] = useState("Advisor A");
  const [messages, setMessages] = useState({
    "Advisor A": [],
    "Advisor B": [],
  });
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages({
      ...messages,
      [selected]: [...messages[selected], { text: input, sent: true }],
    });
    setInput("");
  };

  return (
    <div className="chat-container">
      <div className="chat-list">
        {threads.map((t) => (
          <div
            key={t}
            onClick={() => setSelected(t)}
            style={{
              cursor: "pointer",
              fontWeight: selected === t ? "bold" : "normal",
            }}
          >
            {t}
          </div>
        ))}
      </div>
      <div className="chat-box">
        <div style={{ flex: 1, overflowY: "auto" }}>
          {messages[selected].map((m, i) => (
            <div key={i} className={`message ${m.sent ? "sent" : "received"}`}>
              {m.text}
            </div>
          ))}
        </div>
        <div>
          <input
            placeholder="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;
