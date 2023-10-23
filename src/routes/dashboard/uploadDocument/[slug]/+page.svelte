<script>
	import { goto } from '$app/navigation';
    import axios from 'axios';
    import documentIcon from './../../../public/img/documenIcon.svg'
    var direccion = 'https://abogacy.onrender.com/';
    import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
    import { digitalDocument } from '../../../js/chat';
    export let data;

    var token, uid;
    const auth = getAuth();
    
    onAuthStateChanged(auth, (user)=>{
	if (user) {
        uid = user.uid;
		user.getIdToken().then((tokenOuth)=>{
             token = tokenOuth;
        })
	}else{
		console.log('no esta en session');
	}
});
    //axios
    axios.defaults.baseURL = direccion;

    //subirImg
    const instance = axios.create({
    baseURL: direccion,
    });

    async function uploadImage(doc) {
    let formData = new FormData();
    for(let i = 0; i < doc.length; i++) {
        formData.append("documents", doc[i]);
    }
    //
    try {
    const response = await instance.post(`/subirImagenes/${uid}/${data.caso}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': token,
      }
    });
    return response.data;
    } catch (error) {
    console.error(error);
   }
}


//avatar
    var imagenSelccionada = false;
            let files = [];
            var procesoDeSubidaDeImagen = 'Crear Producto';
            var nombreArchivo;
            var archivo;
            var fileinput;
            $: avatar = [];
    
            var documentosNew = [];

            $: if(files){
               for (const file of files) {
                    documentosNew.push(files[0])
                  }
            } 
    
    
          
                
              
            let docs = [];
            const onFileSelected =(e)=>{
              imagenSelccionada = true;
               //   console.log(e.target.files[0]);
                  let reader = new FileReader();
                        reader.readAsDataURL(e.target.files[0]);
                        reader.onload = e => {
                       
                        docs.push(e.target.result)
                        avatar = [...docs]
                        console.log(avatar);
                  
               //for(let i=0; i<=e.target.files.length-1; i++){
                //console.log(e.target.files[i]);
               //   let reader = new FileReader();
                 //       reader.readAsDataURL(e.target.files[i]);
                  //      reader.onload = e => {
                  //          docs.push(e.target.result)
                  //          avatar = [...docs]
                  //          console.log(avatar);
                //        };
                 }
            }

            function concatenarArrays() {
                
            }
           var loading = false;
           var digitalizado = []
           async function subirDocumentos() {
                loading = true;
                const doc = documentosNew;
                const response = await uploadImage(doc);
                console.log(response);
                if(response){
                    digitalDocument.set(response);
                    goto(`/dashboard/abogacyChat/${data.caso}`)
                }else(
                    alert('hubo un error'))
    
            }
    </script>
    
    
    <div class="container">
        <div class="upload">
            <div class="img">
                <div class="documentos">
             {#each avatar as img}
                    <img src="{img}" alt="">    
             {:else}
                 <img src="{documentIcon}" on:click={()=>{fileinput.click();}} alt="">
             {/each}
             
             {#if loading}
             <p>DIGITALIZANDO ARCHIVOS... <br> ESPERE POR FAVOR</p>
             {:else}
             <div class="button">
              {#if imagenSelccionada}
              <button on:click={()=>{fileinput.click();}}  >ANADIR MAS DOCUMENTOS</button>
              <button on:click={subirDocumentos}  >DIGITALIZAR DOCUMENTOS</button>
               <p>Se digitalizara el documento para poder interactuar con ellos</p>
              {:else}
           
              <button on:click={()=>{fileinput.click();}}  >INGRESA LOS DOCUMENTOS</button>
              <p>Puedes subir: <br> Contratos, Memoriales, Testimonios o Cualquier Documento</p>
              {/if}
            </div>
             {/if}
              
              <input style="display: none" bind:files type="file" accept=".jpg, .jpeg, .png" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} >
            </div>
            </div>
            
        </div>
      
    </div>
    
    
    
    <style>
    .container{
    margin: auto;
    text-align: center;
    }
    .container .upload{
        padding-top: 40px;
        margin: auto;
        text-align: center;
    }
    .container .upload .img .documentos{
        width: 100%;
        height: 60vh;
       
        display: flex;
       
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

    }
    .container .upload .img .documentos img{
        width: 200px;
        height: 300px;
        margin: 0px 20px 20px;
        border-radius: 30px;
        transition-duration: 300ms;
    }
    .container .upload .img .documentos img:hover{
        width: 205px;
        height: 305px;
    }
    .container  .button button{
    font-family: 'Libre Baskerville', serif;
    border-radius: 23px;
    font-weight: 700;
    background-color: #2B3F3E;
    font-size: 12px;
    color: #FFFFFF;
    }
    .container  .button p{
        color: black;
        font-family: 'Open Sans', sans-serif;
    }
    </style>