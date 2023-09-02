<script>

  export let role, content;

</script>

{#if role == "system"}
      <div class="system">
        <h1>{role}</h1>
        <p>{content}</p>
      </div>
{:else if  role == 'assistant'}
   <!-- else if content here -->
   <div class="message bot-message">
    <!--  <h1>{role}</h1> -->
    <p>{content}</p>
  </div>
  {:else if  role == 'user'}

   <!-- else content here -->
   <div class="message human-message">
    <!--  <h1>{role}</h1> -->
    <p>{content}</p>
  </div>
  {:else}
{/if}



 


        
<style>
.system {
  display: none;
}

.message {
  margin: 8px;
  padding: 8px 8px;
  border-radius: 8px;
  max-width: 80%;
}
.message p{
  margin: 0px;
}

.human-message {
  background-color: #f5f5f5;
  color: black;
  align-self: flex-end;
}

.bot-message {
  background-color: black;
  color: white;
  align-self: flex-start;
}

.bot-message.yellow-background {
  background-color: yellow;
}
</style>