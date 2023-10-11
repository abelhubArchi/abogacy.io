import { makeRequest } from "./axios";

import { writable } from "svelte/store";


export const mensajes = writable([{'role': 'assistant', 'content': 'Hola Soy Abogacy! :)'}])
export const digitalDocument = writable()
export async function getChat(id, caso) {
    const chats = await makeRequest('get',`/chat/${id}/${caso}`)
    console.log(chats.data);
    mensajes.update(arr => [...chats.data])
    return{
       chats: chats.data
    }

}

export const loading = writable(false)