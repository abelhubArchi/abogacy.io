<script>
	
    import { makeRequest } from "../routes/js/axios.js";
    import photo from "../routes/public/img/photo.svg";
    import send from "../routes/public/img/send.svg";
    import { mensajes } from './../routes/js/chat.js';
    export let ruta;
    export let id;
    export let chats, verifyFirtsMsj;

    $: prompt = "";

   
    async function enviarmsg(){
      if (prompt != "") { 
        let historialmsj = [
         {"role": "user", "content": prompt}
        ];

          mensajes.update(arr => [...arr, historialmsj[0]])
           var data = JSON.stringify($mensajes)
           console.log("esto envia \n" ,  $mensajes);
           prompt = "";
           var response = await makeRequest('post', `/chat/${id}/${ruta}/enviar`, {data});
           mensajes.update(arr => [...arr, response])
           
      }else{
        alert('Escribe Tu Pregunta Personalizada')
        console.log($mensajes);
      }
    }
    </script>
    
    <form class="prompt">
        <input type="text" bind:value={prompt} required id="chat-input" autocomplete="off" placeholder="Escribe Tu Pregunta Personalizada">
        <div class="opciones">
            <a href="/dashboard/uploadDocument/{ruta}"><img src="{photo}" alt=""></a>
            <img src="{send}" alt="" on:click={enviarmsg}>
        </div>
    </form>
    
    <style>
    
    .prompt {
      position: fixed;
      bottom: 0;
      width: 100%;
      background-color: #f5f5f5;
      padding: 8px;
      box-sizing: border-box;
      margin: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .prompt input[type="text"] {
      width: 100%;
      padding: 8px;
      margin-right: 8px;
      border-radius: 4px;
      border: none;
      font-size: 16px;
      box-sizing: border-box;
      margin-bottom: 5px;
    }
    
    .prompt button {
      padding: 8px;
      border-radius: 4px;
      border: none;
      background-color: green;
      color: white;
      font-size: 16px;
      cursor: pointer;
    }
    .prompt .opciones img{
        width: 30px;
        transition: 300ms;
    }
    .prompt .opciones img:active{
        background-color: #2b3f3e71;
        border-radius: 50%;
    }
    </style>