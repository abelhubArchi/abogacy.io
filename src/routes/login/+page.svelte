<script>
    import './../js/firebase.js'
    import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
    import { goto } from '$app/navigation';
    
    const auth = getAuth();
    var cuenta = {
        usuario: '',
        password: ''
    }
    
    var error = ''
    
    function  iniciarSession () {
        signInWithEmailAndPassword(auth, cuenta.usuario, cuenta.password).then((userCredential)=>{
            const user = userCredential.user;
            console.log(user);
            goto(`/dashboard`)
        }).catch((err)=>{
            console.log(err.code);
            const errormensaje = err.message;
            error = "El Usuario o Contraseña Son Incorrectos"
        })
    }
    </script>
    
    
    <svelte:head>
        <title>Iniciar Session</title>
    
    </svelte:head>
    
<div class="body">
        <div class="videofondo">
            <video autoplay loop muted>
                <source src="https://firebasestorage.googleapis.com/v0/b/abogacy-cc71f.appspot.com/o/video_7243232477827828998_0.mp4?alt=media&token=c26c7836-f599-4c2d-8075-f3db8b047d52" type="video/mp4">
                Your browser does not support the video tag.
            </video>
    
            <div class="iniciarSession">
                <h2>Acceder</h2>
              
        <form action=""  on:submit|preventDefault={iniciarSession}>
            <label for="">Usuario</label>
            <input bind:value={cuenta.usuario} type="email" placeholder="ingresa Tu Usuario">
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
        .iniciarSession form label::placeholder{
            font-family: 'Open Sans', sans-serif;
            font-weight: 700;
            color: white;
        }
        .iniciarSession form label::placeholder{
            color: white;
        }
        .iniciarSession form input{
            margin: auto;
            text-align: center;
            padding: 0px;
            height: 20px;
            color: rgb(0, 0, 0);
            font-weight: 700;
            font-family: 'Open Sans', sans-serif;
            margin-bottom: 15px;
            background-color: rgba(255, 255, 255, 0.425);
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