import { createContext } from "react";
import useChat from "../hooks/useChat";

export const ChatContext = createContext();

export function ChatProvider({ children }) {
  const chat = useChat();

  return <ChatContext.Provider value={chat}>{children}</ChatContext.Provider>;
}
