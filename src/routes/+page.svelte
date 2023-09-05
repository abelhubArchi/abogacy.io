<script>
	import img1 from "../routes/public/homeimg/1.png";
	import img2 from "../routes/public/homeimg/2.png";
	import img3 from "../routes/public/homeimg/3.png";
	import porqn from "../routes/public/homeimg/porqn.png";
	import ofrecemos from "../routes/public/homeimg/ofrecemos.png"
	import proceso from "../routes/public/homeimg/proceso.png"
	import whatsistheprocess from "../routes/public/homeimg/whatsistheprocess.png";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	
	<div class="home">
		<h1>Abogacy</h1>
	</div>
	<div class="corte">
		<img src="{porqn}" alt="">
	</div>
	<div class="img">
		<img src="{img1}" alt="">
	</div>	
	<div class="corte">
		<img src="{ofrecemos}" alt="">
	</div>

	<div class="img">
		<img src="{img2}" alt="">
	</div> 
	<div class="corte">
		<img src="{proceso}" alt="">
	</div>
	<div class="img bgblack">
		<img src="{img3}" alt="">
	</div>	
</section>

<style>
	section{
		margin: auto;
		text-align: center;
	}
	section .home{
		width: 100%;
		height: 70vh;
	}
	section .corte img{
		width: 100%;
	}
	section .img{
		width: 100%;
	}
	section .img img{
		width: 80%;
		border-radius: 20px;
	}
	.bgblack{ 
		background-color: black;
	}
</style>
