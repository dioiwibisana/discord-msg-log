// src/commands/ping.ts
import { Message } from 'discord.js';

export const name = 'ping';
export const description = 'Responds with Pong!';
export const execute = (message: Message) => {
    message.channel.send('Pong!');
};
