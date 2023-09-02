<script>
    export let data;
    import axios from 'axios';
    var direccion = 'http://192.168.0.17:3000/';
    import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
    import Message from '../../../../components/Message.svelte';
    var token, uid;
    const auth = getAuth();
    
    onAuthStateChanged(auth, (user)=>{
	if (user) {
        uid = user.uid;
		user.getIdToken().then((tokenOuth)=>{
             token = tokenOuth;
             console.log(token);
        })
        obtenerChat()
	}else{
		console.log('no esta en session');
	}
});

  //axios
  axios.defaults.baseURL = direccion;
  var IA;

  let chatMessages;
  $: mensajeshistorial = []; 
  async function obtenerChat() {
 
  const response = await axios.get(`/chat/${uid}/${data.caso}`);
    console.log(response);
    //IA = response.data.choices[0].text
    IA = response.data.chat[0].documentDigital
    mensajeshistorial = [...response.data.questionChat]
    console.log(mensajeshistorial);
     chatMessages.scrollTop = chatMessages.scrollHeight;

}

const instance = axios.create({
    baseURL: direccion,
    });
var promptValue = '';
async function prompt(promptdata) {
  let formData = new FormData();
  try{
   console.log('tu pregunta es ' + promptdata);
  const response = await
  instance.post(`/chat/${uid}/${data.caso}/enviar`, 
  {prompt: promptdata},
  {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      }
    });
    obtenerChat()
    promptValue = ''
   console.log(response.data);
   //alert("Hola Johan " + response.data.text)

  }catch{
    console.log('error');
  }
}
   

</script>

<div class="container">
  <h1>DOCUMENTO</h1>
  <p>Texto digital no es perfecto. Leer y corregir</p>
  <div class="chat-container">
    {#if IA == undefined} 
     <h1>Cargando...</h1>
    {:else}
    <Message text="{IA}" token="{token}" uid="{uid}" caso="{data.caso}"/> 
    {/if}
    <div class="particion"></div>
    <div class="question">  
      <button class="enviar" type="submit" on:click={()=> prompt('Human:Describeme el documento')}>DESCRIBIR</button>
      <button class="enviar" type="submit"on:click={()=>prompt('Human:Quienes son los demandantes?')} >Demandantes</button> 
      <button class="enviar" type="submit" on:click={()=>prompt('Human:Como puedo defenderme?')} >RESOLVER DUDAS</button>
      <button class="enviar" type="submit" on:click={()=>prompt('Human:Que leyes hay en el documento?')}>Ver Leyes</button>
      
    </div>
    <div class="mensajes" bind:this={chatMessages}>
      {#each mensajeshistorial as mensaje}
      {#if mensaje.startsWith('Human:')}
      <div class="message human-message">
        <p>{mensaje.slice(7)}</p>
      </div>
    {:else if mensaje.startsWith('abogacy:')}
      <div class="message bot-message">
        <p>{mensaje.slice(9)}</p>
      </div>
    {/if}
      {/each}
    </div>
  </div>
  
  <form class="prompt">
    <input type="text" required id="chat-input" autocomplete="off" placeholder="Escribe Tu Pregunta Personalizada"  bind:value={promptValue}>
    <button class="enviar" type="submit" on:click={prompt(`Human: ${promptValue}`)}>Enviar</button>
  </form>
</div>

<style>
  .container{
    width: 100%;
    text-align: center;
    padding-top: 20px;

    
  }
  .container h1{
    font-family: 'Libre Baskerville', serif;
    margin: 0px;
    font-size: 25px;  
  }
  .container .chat-container{
    width: 86%;
    height: 70vh;
  
    margin: auto;
  }
  .container .chat-container .particion{
    width: 100%;
    height: 7px;
    background-color: #2B3F3E;
  }

  .container .chat-container .question{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
  .container .chat-container .question button{
    width: 42vw;
    text-align: center;
    padding: 0px;
    border-radius: 10px;
    background-color: #2B3F3E;
    color: white;
    font-weight: 600;
    font-family: 'Libre Baskerville', serif;
    }


    /*chat*/
    .container .chat-container .mensajes{
       width: 100%;
       height: 35vh; 
       overflow-y: auto;
    }
    .container .chat-container .mensajes .message{
    background-color: white;
    display: flex;
    justify-content: center;
    margin: 10px 0;
    min-width: 30px;
    max-width: wrap;
    }
    .container .chat-container .mensajes .human-message{
      background-color: #bbb9b9;
      padding: 20px 0px;
      
      border-radius: 20px;
      margin: 20px 0px;
    }
    .container .chat-container .mensajes .human-message p{
      margin: 0px;
      color: black;
    }
    .container .chat-container .mensajes .bot-message{
      background-color: #2B3F3E;
      padding: 20px;
      border-radius: 20px;
      margin: 0px;
    }
    .container .chat-container .mensajes .bot-message p{
      color: white;
      font-family: 'Libre Baskerville', serif;
      margin: 0px;
      font-size: 12px;
    }
  .container .prompt{
    display: flex;
    justify-content: center;
   
  }
  .container .prompt input{
    background-color: white;
    width: 90%;
    height: 30px;
    border-radius: 20px;
    
  }
  .container .prompt input{
    background-color: white;
    width: 70%;
    height: 30px;
    border-radius: 20px;
    margin: 0px 10px 0px 0px;
  }
  .container .prompt .enviar {
    background-color: #2B3F3E;
    color: white;
    margin-top: 4px;
    border-radius: 7px;
    border: none;
  }
</style>