<script>
    export let text, token, uid, caso;
    export let type = 'document';
    import axios from 'axios';
    import { digitalDocument } from '../routes/js/chat';

    $: editarValor = false;

    function editar(){
      editarValor = true
      console.log(editarValor);

    }


   async function guardar() {
    console.log(text)
    digitalDocument.update(arr=> [text])
    editarValor = false
}

  </script>
<div class="container">

{#if type == 'document'}
    {#if editarValor}
    <textarea class="message" bind:value={text}></textarea>

    <button on:click={guardar}>Guardar Cambios</button>
    {:else}
    <div class="message">
      <p>{text}</p>
    </div>
    <button on:click={editar}  >EDITAR DOCUMENTO</button>
    {/if}
    {:else}
    <div class="message">
      <p>{text}</p>
    </div>
  {/if}
  
</div>
  
  <style>
    .container{
      margin: auto;
      text-align: center;
    }
    .message {
      color: black;
      border-radius: 10px;
      margin: auto;
      background-color: #D9D9D9;
      border: #ffffff 3px solid;
      width: 97%;
      max-height: 40vh;
      overflow: auto;
      text-align: center;

    }
    button{
    font-family: 'Libre Baskerville', serif;
    background-color: transparent;
    text-decoration: underline;
    color: #000;
    border: none;
    margin-top: 10px;
    font-size: 18px;
    text-align: center;
    }
    .message p{
        color: black;
        margin: 0px;
     
    }
  </style>