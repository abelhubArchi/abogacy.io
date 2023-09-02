
<script>
	import { digitalDocument } from './../routes/js/chat.js';
	import Message from './Message.svelte';

    import quenecesitas from "../routes/public/img/quenecesitas.png";
    import { chatDocumentAbogacy } from '../routes/js/digitalchat';
    export let caso, id;

    let viewBoton1 = false;
    let viewBoton2 = false;
    let botonFocus = ''
    function viewbotonUno() {
      if (viewBoton1) {
          viewBoton1 = false;
          botonFocus = '';
      }else{
          viewBoton1 = true;
          botonFocus = 'focusBoton'
      }
    }
    
</script>

{#if $digitalDocument == undefined}
<!-- Imagen de Bienvenida -->
   <span class="welcome">
     <picture>
     <img src={quenecesitas} alt="Welcome" />
     </picture>
  </span>
  <div class="opciones">
    <button on:click={viewbotonUno} class="{botonFocus}" >Familiar</button>
    <a href="/dashboard/uploadDocument/{caso}"><button>Chat Document</button></a>
    {#if viewBoton1}
    <div class="questionButtons">
       <button>Divorcio</button>
       <button>Asistencia Familiar</button>
       <button>Homologacion</button>
       <button>Guarda</button>
       <button>Liquidacion</button>
     </div>
    {/if}
  </div>
  
{:else}
   <div class="container">
     <!-- Si tiene un Documento Digital -->
     <!-- <h1>{caso}</h1> -->
    <Message text={$digitalDocument} token={id} uid="{id}"></Message>
    <div class="opciones">
      <button on:click={chatDocumentAbogacy(id, caso, 'resumir', $digitalDocument)}  class="{botonFocus}" >Resumir Documento</button>
      <button on:click={chatDocumentAbogacy(id, caso, 'IdLeyes', $digitalDocument)} class="{botonFocus}" >Identificar Leyes</button>
      <button on:click={chatDocumentAbogacy(id, caso, 'particiClave', $digitalDocument)} class="{botonFocus}" >Participantes Clave</button>
      <button on:click={chatDocumentAbogacy(id, caso, 'dectecteinconsis', $digitalDocument)} class="{botonFocus}" >Detectar Inconsistencias</button>
      <button on:click={chatDocumentAbogacy(id, caso, 'puntosClav', $digitalDocument)} class="{botonFocus}" >Puntos Clave del Documento</button>
    </div>
  </div>
{/if}


<style>
  .container{
    margin: auto;
    text-align: center;
  }
 
  .focusBoton{
    background-color: red;
  }
  	.welcome img {
		margin: auto;
		width: 100%;
		top: 0;
		display: block;
	}
    .opciones{
    text-align: center;
    margin: 0px 0px 10px 0px;
    max-height: 200px;
    overflow: auto;  
  }
  .opciones button{
    background-color: black;
    margin: auto;
    color: white;
    border-radius: 16px;
    transition-duration: 500ms;
    transition-delay: 100ms;
    margin-top: 4px;
  }
  .opciones .questionButtons{
    display: flexbox;
    flex-wrap: wrap;
    width: 30%;
    text-align: left;
    margin-top: 20px;
  }
  .opciones .questionButtons button{
    background-color: rgb(7, 73, 40);
    border-radius: 5px;
  }
</style>