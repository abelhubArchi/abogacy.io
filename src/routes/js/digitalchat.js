import { makeRequest } from "./axios";
import { mensajes } from "./chat";

export  async function chatDocumentAbogacy(id, caso, promptType, documento) {
   let historialMsj = [
    {'role': 'user', 'content': "Documento" + ":\n " + documento[0]}
   ]
   var data = JSON.stringify(historialMsj) 
   var digitalChat = await makeRequest('post', `/chat/${id}/${caso}/documentChat/${promptType}`, {data})
   console.log(data);
   mensajes.update(arr => [...arr, digitalChat.data ])
   location.reload()
}