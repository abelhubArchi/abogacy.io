<script>
    import { goto } from '$app/navigation';
    import { digitalDocument } from '../js/chat.js';
    
	import { makeRequest } from './../js/axios.js'; 
     //verify user
     import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
    
     digitalDocument.set();

     const auth = getAuth();
    var token, uid;
    onAuthStateChanged(auth, async (user)=>{
      if (user) {
            uid = user.uid;
        user.getIdToken().then((tokenOuth)=>{
                 token = tokenOuth;
                 console.log(token);
                 console.log(makeRequest('get', `/casos/${uid}/getCase`));
            });

            
      }else{
        console.log('no esta en session');
      }
    });
    //verify user


const newCaso = async ()=>{
    var caso = prompt("Nombre De Caso", "");
    if (caso != '') {
        const create = await makeRequest('post', `/casos/${uid}/postCreateCase`, {'newCase': caso})
        if (create == 'OK') {
            console.log('Caso creado con Exito');
            goto(`/dashboard/abogacyChat/${caso}`)
        } else {
            alert('Hubo un error :(')
        }
    } else {
        alert('Introdusca el Nombre Del Caso')
    }
}


</script>

<div class="container">
     <h1 class="title">Entorno</h1>
     <button on:click={newCaso}>Nuevo Caso</button>
    <div class="tabla">
        {#await makeRequest('get', `/casos/${uid}/getCase`)}
            <h1>cargando</h1>
        {:then value}
        {#each value as caso}
        <div class="caso">
              <a href="dashboard/abogacyChat/{caso.id}" data-sveltekit-preload-code="tap">
                <h1>{caso.id}</h1>
               <!-- <p>Creado el: 01/24/2023</p> -->
               </a>
        </div>
        {/each}
        
        {/await}
        
         
    </div>

    
</div>

<style>
    .container{
        width: 100%;
        min-height: 100vh;
        text-align: center;
    }
    .container h1{
        text-transform: uppercase;
        font-weight: 600;
    }
    .container button{
        border-radius: 20px;
        margin-top: 20px;
    }
    .container .tabla{
        background: linear-gradient(rgba(255, 255, 255, 0.315), 20%, rgba(112, 112, 112, 0.356));
        width: 100%;
        height: 100%;
        text-align: center;
        padding: 10px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .container .tabla .caso{
        width: 20%;
        height: 30vh;
        margin: 30px auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        border: #2B3F3E 10px solid;
        border-radius: 30px;
    }
    .container .tabla .caso h1{
        font-size: 20px;
    }
    @media only screen and (max-width: 700px){
        .container .tabla .caso{
        width: 40%;
        height: 18vh;
        background-color: #2B3F3E;
      }
    }

</style>


