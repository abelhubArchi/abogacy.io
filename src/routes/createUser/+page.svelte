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
    
    
    <div class="iniciarSession">
        <h1>Crear Cuenta</h1>
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
            <input type="submit" value="Iniciar Session">
        </form>
    </div>
    
    <style>
        .iniciarSession{
            text-align: center;
            margin: auto;
            background-color: azure;
        }
        .iniciarSession h1{
            font-weight: 600;
            font-family: 'Open Sans', sans-serif;
            font-size: 30px;
        }
        .iniciarSession form{
            width: 100%;
            text-align: center;
            margin: auto;
        }
        .iniciarSession form label{
            font-family: 'Open Sans', sans-serif;
            font-weight: 700;
        }
        .iniciarSession form input{
            margin: auto;
            text-align: center;
            padding: 0px;
            height: 20px;
        }
    
    </style>