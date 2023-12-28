// src/events/messageCreate.ts
import { Message } from 'discord.js';

export const name = 'messageCreate';
export const execute = (message: Message) => {
    // Handle message creation event
    // console.log(`Message from ${message.author.tag}: ${message.content}`, message);
};
