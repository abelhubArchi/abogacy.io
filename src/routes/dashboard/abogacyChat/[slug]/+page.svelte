<script>
	  import Chat from './../../../../components/Chat.svelte';
    import InputChat from '../../../../components/InputChat.svelte';
    import FirtsBottons from '../../../../components/primerBoton.svelte';
    import Message from '../../../../components/Message.svelte';
    import { getChat,mensajes, loading } from '../../../js/chat';
    
    
    
    export let data;


    //verify user
    import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
    

  
    
    const auth = getAuth();
    var token, uid;
    $: historialChat = [];
    onAuthStateChanged(auth, async (user)=>{
      if (user) {
            uid = user.uid;
        user.getIdToken().then((tokenOuth)=>{
                 token = tokenOuth;
                 console.log(token);
                 //var chatCaso = getChat(uid, data.caso)
            });
        getChat(uid, data.caso)
           
      }else{
        console.log('no esta en session');
      }
    });
    //verify user
    
   //loadChat
   //async function loadChat() {
    //  const chatLoader =  await getChat(uid, data.caso);
     // console.log(chatLoader);
     // return('HolaWhatsApp')
  // }


             // Suscripción al almacén mensajes
             const unsubscribe = mensajes.subscribe(value => {
             console.log('Almacén mensajes actualizado:', value);
             historialChat = value;
             });

var promptValue = '';

</script>


<div class="container">
  {#if $mensajes.length == 1}
  <FirtsBottons caso="{data.caso}" id="{uid}" token="{token}"></FirtsBottons>
  {:else}
     <!-- una vez cargados hacemos un each al el componente chat.js hace un SET del chat a la variable writable mensajes -->
  <div class="containerChats" id="contenedroChats">
    {#each $mensajes as chat}
       <!-- pintamos el componente chat y lo personalizamos para cada rol -->
       <Chat role="{chat.role}" content={chat.content}></Chat>
    {/each}
  </div>
  {#if $loading}
     <h1>Abogacy respondiendo...</h1>
  {/if}

  {/if}
</div>
   <InputChat ruta="{data.caso}" id="{uid}"></InputChat>
<style>

  .container {
  text-align: center;
  }
 .container .containerChats {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  padding: 0px 0px 100px 0px;
}



</style>

