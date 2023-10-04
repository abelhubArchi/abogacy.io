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
		<video controls autoplay>
			<source src="https://firebasestorage.googleapis.com/v0/b/abogacy-cc71f.appspot.com/o/abogacy.mp4?alt=media&token=d9394db9-6106-4d1c-86e9-6b4182106988" type="video/mp4">
		</video>
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
	video{
		width: 80%;
		height: 70vh;
	}
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
