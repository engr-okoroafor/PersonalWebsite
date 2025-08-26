import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI, Chat } from "@google/genai";
import { chatSystemInstruction } from '../../data/content.ts';
import type { ChatMessage } from '../../types.ts';
import { Tooltip } from './Section.tsx';

const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const chatRef = useRef<Chat | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && !chatRef.current) {
            try {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
                chatRef.current = ai.chats.create({
                    model: 'gemini-2.5-flash',
                    config: {
                        systemInstruction: chatSystemInstruction,
                    },
                });
                
                // Add initial greeting message from the bot
                if (messages.length === 0) {
                    setMessages([{
                        role: 'model',
                        text: "Hello! I'm the AI assistant for Chukwudifu Uzoma Okoroafor. Feel free to ask me anything about his skills, projects, or experience."
                    }]);
                }
            } catch (error) {
                console.error("Failed to initialize Gemini AI:", error);
                setMessages([{
                    role: 'model',
                    text: "Sorry, I'm having trouble connecting right now. Please try again later."
                }]);
            }
        }
    }, [isOpen]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: ChatMessage = { role: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            if (!chatRef.current) throw new Error("Chat not initialized.");

            const response = await chatRef.current.sendMessage({ message: input });
            const modelMessage: ChatMessage = { role: 'model', text: response.text };
            setMessages(prev => [...prev, modelMessage]);
        } catch (error) {
            console.error("Error sending message:", error);
            const errorMessage: ChatMessage = { role: 'model', text: "Apologies, I encountered an error. Please try again." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="fixed bottom-24 left-4 sm:left-6 z-40 w-[calc(100vw-2rem)] max-w-sm h-[65vh] max-h-[700px] bg-panel/80 backdrop-blur-xl border border-white/10 rounded-4xl shadow-2xl flex flex-col"
                    aria-modal="true"
                    role="dialog"
                    aria-labelledby="chat-widget-title"
                >
                    <header className="flex items-center justify-between p-4 border-b border-white/10 flex-shrink-0">
                        <div className="flex items-center gap-3">
                            <Bot className="text-accent-cyan" size={24} />
                            <h2 id="chat-widget-title" className="font-bold text-primary">AI Assistant</h2>
                        </div>
                        <Tooltip text="Close Chat">
                            <button onClick={() => setIsOpen(false)} className="p-2 rounded-full hover:bg-white/10 transition-colors" aria-label="Close chat window">
                                <X size={20} className="text-secondary" />
                            </button>
                        </Tooltip>
                    </header>

                    <div className="flex-grow p-4 overflow-y-auto">
                        <div className="flex flex-col gap-4">
                            {messages.map((msg, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className={`flex items-start gap-3 max-w-[85%] ${msg.role === 'user' ? 'self-end' : 'self-start'}`}
                                >
                                    {msg.role === 'model' && <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center flex-shrink-0"><Bot size={18} className="text-accent-cyan" /></div>}
                                    <div className={`px-4 py-2 rounded-2xl ${msg.role === 'user' ? 'bg-accent-purple text-white rounded-br-none' : 'bg-surface text-secondary rounded-bl-none'}`}>
                                        <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                                    </div>
                                    {msg.role === 'user' && <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center flex-shrink-0"><User size={18} className="text-primary" /></div>}
                                </motion.div>
                            ))}
                            {isLoading && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start gap-3 self-start">
                                    <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center flex-shrink-0"><Bot size={18} className="text-accent-cyan" /></div>
                                    <div className="px-4 py-3 rounded-2xl bg-surface text-secondary rounded-bl-none">
                                       <Loader2 size={20} className="animate-spin text-secondary" />
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                    </div>

                    <footer className="p-4 border-t border-white/10 flex-shrink-0">
                        <form onSubmit={handleSend} className="flex items-center gap-3">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about my projects..."
                                className="w-full bg-surface border border-white/10 rounded-full py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-accent-cyan transition-shadow text-sm"
                                disabled={isLoading}
                                aria-label="Chat input"
                            />
                            <Tooltip text="Send Message">
                                <button type="submit" disabled={isLoading || !input.trim()} className="w-10 h-10 bg-accent-cyan rounded-full flex items-center justify-center flex-shrink-0 text-white disabled:bg-secondary disabled:cursor-not-allowed transition-colors" aria-label="Send message">
                                    <Send size={18} />
                                </button>
                            </Tooltip>
                        </form>
                    </footer>
                </motion.div>
            )}
            </AnimatePresence>

            <Tooltip text="Chat with my AI" position="top">
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-accent-cyan/80 hover:bg-accent-cyan backdrop-blur-lg flex items-center justify-center text-white transition-all duration-300"
                    whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(6, 182, 212, 0.6)' }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={isOpen ? "Close chat" : "Open chat"}
                    aria-expanded={isOpen}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isOpen ? 'close' : 'open'}
                            initial={{ opacity: 0, rotate: -30, scale: 0.5 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: 30, scale: 0.5 }}
                            transition={{ duration: 0.2 }}
                        >
                            {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
                        </motion.div>
                    </AnimatePresence>
                </motion.button>
            </Tooltip>
        </>
    );
};

export default ChatWidget;
