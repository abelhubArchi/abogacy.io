
<script>
	import { digitalDocument } from './../routes/js/chat.js';
	import Message from './Message.svelte';

    import quenecesitas from "../routes/public/img/quenecesitas.png";
    import { chatDocumentAbogacy, procesos } from '../routes/js/digitalchat';
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

  <div class="opciones">
    {#if viewBoton1}
    <div class="questionButtons">
      <h1>Familiar</h1>
      <button on:click={procesos(id, caso, 'Divorcio')}>Divorcio</button>
      <button on:click={procesos(id, caso, 'AsistenFamiliar')}>Asistencia Familiar</button>
      <button on:click={procesos(id, caso, 'Homologacion')}>Homologacion</button>
      <button on:click={procesos(id, caso, 'Guarda')}>Guarda</button>
      <button on:click={procesos(id, caso, 'LIquidacion')}>Liquidacion</button> <br>
      <h1>Inmobiliario</h1>
      <p>Estamos trabajando en ello</p>
      <button style="background-color: red;" on:click={viewbotonUno}>Salir</button>
    </div>
    {:else}
    <!-- Imagen de Bienvenida -->
   <span class="welcome">
    <picture>
    <img src={quenecesitas} alt="Welcome" />
    </picture>
 </span>
    <button on:click={viewbotonUno} class="{botonFocus}" >Procesos</button>
    <a href="/dashboard/uploadDocument/{caso}"><button>Documentos</button></a>
    <a href="/dashboard/uploadDocument/{caso}"><button>Redactar Memorial (pronto)</button></a>
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
    max-height: 1000px;
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
    width: 100%;
    text-align: center;
    margin-top: 20px;
  }
  .opciones .questionButtons button{
    background-color: rgb(7, 73, 40);
    border-radius: 5px;
  }
</style>