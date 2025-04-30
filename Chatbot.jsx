import { useState } from "react";
import { respostas } from "../data/respostas";

export default function Chatbot() {
  const [mensagens, setMensagens] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const pergunta = input.toLowerCase();
    const resposta = respostas[pergunta] || "Não entendi, torcedor! Tenta outra pergunta 🔄";
    setMensagens([...mensagens, { de: "Você", texto: input }, { de: "FURIA Bot", texto: resposta }]);
    setInput("");
  };

  return (
    <div className="chat-container">
      <h2 className="chat-title">🔥 FURIA Chatbot</h2>
      <div className="chat-box">
        {mensagens.map((m, i) => (
          <p key={i}><strong>{m.de}:</strong> {m.texto}</p>
        ))}
      </div>
      <div className="chat-input-container">
        <input
          className="chat-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Digite sua pergunta"
        />
        <button className="chat-button" onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
}
