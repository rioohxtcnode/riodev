// src/components/chatWidget/ChatWidget.js
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import React, {useEffect, useRef, useState} from "react";
import "./ChatWidget.scss";
import {CHAT_SYSTEM_PROMPT, CHAT_WORKER_URL} from "../../chatConfig";

/**
 * ChatWidget
 *
 * A floating chat button and popup that integrates the portfolio
 * with a ChatGPT-compatible backend (for example: a Cloudflare Worker).
 *
 * Design goals:
 * - Self-contained (styles and logic live inside the component folder).
 * - Minimal changes to the existing portfolio layout.
 * - Safe defaults (token-friendly history, basic error handling).
 */
const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [input, setInput] = useState("");

  /**
   * Internal message history.
   *
   * The "system" entry is used for the OpenAI API, but is not rendered
   * as a visible message. Only "user" and "assistant" messages are shown.
   */
  const [messages, setMessages] = useState([
    {role: "system", content: CHAT_SYSTEM_PROMPT}
  ]);

  /**
   * Ref to the messages container, so we can auto-scroll on new messages.
   */
  const messagesEndRef = useRef(null);

  /**
   * Derived list of messages that should be rendered in the UI
   * (we hide the system prompt from the visitor).
   */
  const visibleMessages = messages.filter(m => m.role !== "system");

  /**
   * Automatically scrolls to the bottom whenever the message list changes.
   */
  useEffect(() => {
    if (!messagesEndRef.current) return;
    messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
  }, [visibleMessages.length]);

  /**
   * Toggles the chat popup.
   *
   * On the first open (when there are no visible messages yet),
   * it also pushes a welcome assistant message.
   */
  const handleToggle = () => {
    setIsOpen(prev => !prev);

    if (!isOpen && visibleMessages.length === 0) {
      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          content:
            "Hi! I can help you understand Saad Pasta’s projects, skills and experience."
        }
      ]);
    }
  };

  /**
   * Sends the current input to the backend and appends the response.
   *
   * The backend is expected to return a JSON object like:
   *   { reply: "text from the assistant" }
   */
  const handleSubmit = async event => {
    event.preventDefault();
    const trimmed = input.trim();

    if (!trimmed || isSending) {
      return;
    }

    setInput("");

    const userMessage = {role: "user", content: trimmed};
    const updatedHistory = [...messages, userMessage];
    setMessages(updatedHistory);

    setIsSending(true);

    try {
      const compactHistory = updatedHistory.slice(-25);

      const response = await fetch(CHAT_WORKER_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({messages: compactHistory})
      });

      // New: log status and body if not OK
      if (!response.ok) {
        const errorText = await response.text();
        console.error("[chat-worker] HTTP error", response.status, errorText);
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      console.log("[chat-worker] response json:", data);

      const replyText =
        data && typeof data.reply === "string" && data.reply.length > 0
          ? data.reply
          : "I am having trouble responding right now. Please try again in a moment.";

      const assistantMessage = {
        role: "assistant",
        content: replyText
      };

      setMessages([...updatedHistory, assistantMessage]);
    } catch (error) {
      console.error("[chat-worker] fetch failed:", error);

      const errorMessage = {
        role: "assistant",
        content: "Connection error. Please check your network and try again."
      };
      setMessages([...updatedHistory, errorMessage]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {/* Floating button that is always visible on the screen */}
      <button
        type="button"
        className="lh-chat-toggle pulse-chat"
        onClick={handleToggle}
        aria-label="Open portfolio assistant"
      >
        Chat
      </button>

      {/* Chat popup, only rendered when isOpen is true */}
      {isOpen && (
        <div
          className="lh-chat"
          role="dialog"
          aria-label="Portfolio virtual assistant"
        >
          <div className="lh-chat__header">Assistant – Portfolio</div>

          <div className="lh-chat__msgs" ref={messagesEndRef}>
            {visibleMessages.map((msg, index) => (
              <div
                key={`${msg.role}-${index}`}
                className={
                  "lh-msg " +
                  (msg.role === "user" ? "lh-msg--user" : "lh-msg--bot")
                }
              >
                <ReactMarkdown
                  className="lh-msg__markdown"
                  remarkPlugins={[remarkGfm]}
                >
                  {msg.content}
                </ReactMarkdown>
              </div>
            ))}
          </div>

          <form className="lh-chat__form" onSubmit={handleSubmit}>
            <textarea
              className="lh-chat__input"
              placeholder="Ask something about the portfolio…"
              value={input}
              onChange={event => setInput(event.target.value)}
              disabled={isSending}
              rows={1}
            />

            <button
              type="submit"
              className="lh-chat__submit"
              disabled={isSending}
            >
              {isSending ? "…" : "Send"}
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
