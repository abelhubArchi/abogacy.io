<script>
	import './public/style/main.css';
	import logoText from  './public/img/logoText.svg';
	import { page } from '$app/stores';
    import './js/firebase.js';
    import { goto } from '$app/navigation';
    import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';

	var session = false;

var estadoMenu = "body"
function AbrirMenu(){
   estadoMenu = "body menu-is-open"
}
function CerrarMenu(){
   estadoMenu = "body"
}

const auth = getAuth();

onAuthStateChanged(auth, (user)=>{
	if (user) {
		const uid = user.uid
		console.log('si esta en session');
		session = true
	}else{
		console.log('no esta en session');
		session = false
		
	}
});

function cerrarSession() {
	var estaSeguro = confirm('Confirma Cerrar Session');
	if (estaSeguro) {
		signOut(auth).then(() => {
		 // Sign-out successful.s
		 goto(`/`)
		}).catch((error) => {
		  alert('Hubo un Error')
		});
	}else{
		return
	}
}
        
</script>

    <!-- header
    ================================================== -->
    <header class="s-header {estadoMenu}">
		
		<div class="header-logo">
			<a class="site-logo" href="/">
				<img id="imglogo" src="{logoText}" width="50" alt="Pagina De Inicio">
			</a>
		</div>
        <nav class="header-nav">
			
            <p class="header-nav__close" on:click={CerrarMenu} title="close"><span>Cerrar</span></p>

            <div class="header-nav__content">
                <h3>Menu</h3>
                <ul class="header-nav__list">
                    <li class="current"><a class:active={$page.url.pathname === '/'}  href="/" on:click={CerrarMenu} title="inicio">inicio</a></li>
                    {#if session}
                    <li><a class:active={$page.url.pathname === '/dashboard'}  href="/dashboard" on:click={CerrarMenu} title="dashboard">Entorno De Trabajo</a></li>
                    {/if}
                </ul>

                {#if session}
                <li><a id="lgText" on:click={CerrarMenu} href="/admin/user" title="iniciar sesion">Mi Perfil</a></li>
                <span on:click={cerrarSession}>Cerrar Session</span>
                {:else}
                <li><a id="lgText" on:click={CerrarMenu} href="/login" title="iniciar sesion">Iniciar Session</a></li>
                <li><a id="lgText" on:click={CerrarMenu} href="/createUser" title="Crear usuario">Crear Cuenta</a></li>
                {/if}
                   

            </div> <!-- end header-nav__content -->

        </nav>  <!-- end header-nav -->

    
        <p class="header-menu-toggle opaque" on:click={AbrirMenu}>
            <span class="header-menu-text">Menu</span>
            <span class="header-menu-icon"></span>
        </p>
     
        
    </header> <!-- end s-header -->


<main class="contenedorPadre" on:click={CerrarMenu} >
	<slot />
</main>


<style>
    
    a.active {
		color: rgb(216, 250, 23);
	}
	main {
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
		/*height: 80vh;*/
	}


    .s-header{
        background-color: #000;
    }
    .contenedorPadre{
        margin-top: 0px;
        background-color: white;
		
    }
	/* -------------------------------------------------------------------
 * ## header logo
 * ------------------------------------------------------------------- */

	#imglogo{
        width: 145px;
        height: 50px;
    }
</style>
