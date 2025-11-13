// src/chatConfig.js

/**
 * Configuration for the portfolio chat assistant.
 *
 * This file centralizes the values that are likely to change
 * (for example: the proxy URL or the system prompt).
 * Keeping them here makes the widget easier to reuse and maintain.
 */

/**
 * Endpoint of the backend / proxy that talks to OpenAI.
 * Typically this will be a serverless function or a Cloudflare Worker.
 */
export const CHAT_WORKER_URL = "https://test/chat"; //change this URL to your own worker URL, like cloudflare worker URL

// change the prompt to your own details
/**
 * System prompt sent to the ChatGPT-compatible backend.
 * Adjust this to change the assistant's behavior and personality.
 */
export const CHAT_SYSTEM_PROMPT =
  "You are an assistant for the portfolio of Saad Pasta. Be concise, helpful, and focused on his projects, experience, and skills.";
