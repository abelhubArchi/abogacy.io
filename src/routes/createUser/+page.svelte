<script>
    import './../js/firebase.js'
    import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
    import { goto } from '$app/navigation'; 
    
const auth = getAuth();
var cuenta = {
    usuario: '',
    password: ''
}

var error = ''

async function iniciarSession() {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, cuenta.usuario, cuenta.password);
        const user = userCredential.user;
        console.log(user);

        goto(`/dashboard`);
    } catch (err) {
        console.error(err.code);
        const errorMessage = err.message;
        if (errorMessage === "auth/invalid-email") {
            error = "El Usuario o Contraseña Son Incorrectos";
        } else {
            error = "Ha ocurrido un error durante el registro.";
        }
    }
}
    </script>
    
    
    <svelte:head>
        <title>Crear Cuenta</title>
    
    </svelte:head>

    
<div class="body">
    <div class="videofondo">
        <video autoplay loop muted>
            <source src="https://firebasestorage.googleapis.com/v0/b/abogacy-cc71f.appspot.com/o/abogacycreateacount.mp4?alt=media&token=24d0f2f9-649a-402e-a67f-dd08539ece90" type="video/mp4">
            Your browser does not support the video tag.
        </video>

        <div class="iniciarSession">
            <h2>Crear Cuenta</h2>
            
            <form action=""  on:submit|preventDefault={iniciarSession}>
                <label for="">Usuario</label>
                <input bind:value={cuenta.usuario} type="email" placeholder="Coloca Tu Usuario">
                <label for="">Contraseña</label>
                <input bind:value={cuenta.password}  type="password" placeholder="Ingresa Tu Contraseña">
                {#if error == ''}
                     <span></span><br>
                {:else}
                     <span style="color: red;">{error}</span> <br>
                {/if}
                <input type="submit" value="Crear Cuenta">
            </form>
            <p>Crea tu cuenta en Abogacy Bolivia </p>
        </div>
    </div>

    
</div>

    <style>
         body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            position: relative;
        }

        .videofondo {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

        video {
            object-fit: cover;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
        }
        
        .iniciarSession{
            text-align: center;
            margin: auto;
            position: relative;
            z-index: 1;
            background-color: rgba(255, 255, 255, 0.0); 
            padding-top: 100px;

        }
        .iniciarSession h2{
            font-weight: 800;
            font-size: 30px;
            color: white;
        }
        .iniciarSession p{
            font-weight: 600;
            color: white;     
            font-family: 'Open Sans', sans-serif;       
        }
        .iniciarSession form{
            width: 100%;
            text-align: center;
            margin: auto;
        }
        .iniciarSession form label{
            font-family: 'Open Sans', sans-serif;
            font-weight: 700;
            color: white;
        }
        .iniciarSession form input{
            margin: auto;
            text-align: center;
            padding: 0px;
            height: 20px;
            color: white;
            font-weight: 700;
            font-family: 'Open Sans', sans-serif;
            margin-bottom: 15px;
            background-color: rgba(4, 129, 46, 0.425);
            border-radius: 7px;
        }
    
        .iniciarSession form input[type="submit"]{
            width: 200px;
            height: 50px;
            background-color: black;
            color: white;
            font-weight: 800;
            margin-top: 20px;
        }
    
    </style>