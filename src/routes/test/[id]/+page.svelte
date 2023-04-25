<script>
	import { fade, fly } from 'svelte/transition';

	let visible = false;
	import {
	  useForm,
	  validators,
	  Hint,
	  minLength,
	  maxLength,
	  required,
	  email,
	} from "svelte-use-form";
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import dayjs from "dayjs";

	function close() {
		show = false;
	}
  
	const date = dayjs().format("DD/MM/YYYY");
	const form = useForm();
	const { id } = $page.params;
	const prenom = id.slice(0).charAt(0).toUpperCase() + id.slice(1);
  
	let titre = `${prenom} - Page Privée`;
	let result = "";
	let mail = "";
	let postcode = "";
	let firstname = "";
	let age = "";
	let load = false;
	let selected = "";
	let answer = "";
	let monip = "";
	let online = "EN LIGNE";
	let show = false;
	let myTxt = "";
  
	let api =
	  `https://website.api.tikt.net/register?ai=31778&aci=SNAPCHAT&t1=` +
	  date +
	  `&sg=3&us=0&apm=3&ni=1&sn=wl-myclub&ap.fn=Sarah&ap.age=22&pid=https://maprivee.fr/p1.png`;
	let questions = [
	  { id: 0, text: `18 ans` },
	  { id: 1, text: `19 ans` },
	  { id: 2, text: `20 ans` },
	  { id: 3, text: `21 ans` },
	  { id: 4, text: `22 ans` },
	  { id: 5, text: `23 ans` },
	  { id: 6, text: `24 ans` },
	  { id: 7, text: `25 ans` },
	  { id: 8, text: `26 ans` },
	  { id: 9, text: `27 ans` },
	  { id: 10, text: `28 ans` },
	  { id: 11, text: `29 ans` },
	  { id: 12, text: `30 ans` },
	  { id: 13, text: `31 ans` },
	  { id: 14, text: `32 ans` },
	  { id: 15, text: `33 ans` },
	  { id: 16, text: `34 ans` },
	  { id: 17, text: `35 ans` },
	  { id: 18, text: `36 ans` },
	  { id: 19, text: `37 ans` },
	  { id: 20, text: `38 ans` },
	  { id: 21, text: `39 ans` },
	  { id: 22, text: `40 ans` },
	  { id: 23, text: `41 ans` },
	  { id: 24, text: `42 ans` },
	  { id: 25, text: `43 ans` },
	  { id: 26, text: `44 ans` },
	  { id: 27, text: `45 ans` },
	  { id: 28, text: `46 ans` },
	  { id: 29, text: `47 ans` },
	  { id: 30, text: `48 ans` },
	  { id: 31, text: `49 ans` },
	  { id: 32, text: `50 ans` },
	  { id: 33, text: `51 ans` },
	  { id: 34, text: `52 ans` },
	  { id: 35, text: `53 ans` },
	  { id: 36, text: `54 ans` },
	  { id: 37, text: `55 ans` },
	  { id: 38, text: `56 ans` },
	  { id: 39, text: `57 ans` },
	  { id: 40, text: `58 ans` },
	  { id: 41, text: `59 ans` },
	  { id: 42, text: `60 ans` },
	  { id: 43, text: `61 ans` },
	  { id: 44, text: `62 ans` },
	  { id: 45, text: `63 ans` },
	  { id: 46, text: `64 ans` },
	  { id: 47, text: `65 ans` },
	  { id: 48, text: `66 ans` },
	  { id: 49, text: `67 ans` },
	  { id: 50, text: `68 ans` },
	  { id: 51, text: `69 ans` },
	  { id: 52, text: `70 ans` },
	  { id: 53, text: `71 ans` },
	  { id: 54, text: `72 ans` },
	  { id: 55, text: `73 ans` },
	  { id: 56, text: `74 ans` },
	  { id: 57, text: `75 ans` },
	  { id: 58, text: `76 ans` },
	  { id: 59, text: `77 ans` },
	  { id: 60, text: `78 ans` },
	  { id: 61, text: `79 ans` },
	  { id: 62, text: `80 ans` },
	  { id: 63, text: `81 ans` },
	  { id: 64, text: `82 ans` },
	  { id: 65, text: `83 ans` },
	  { id: 66, text: `84 ans` },
	  { id: 67, text: `85 ans` },
	  { id: 68, text: `86 ans` },
	  { id: 69, text: `87 ans` },
	  { id: 70, text: `88 ans` },
	  { id: 71, text: `89 ans` },
	  { id: 72, text: `90 ans` },
	  { id: 73, text: `91 ans` },
	  { id: 74, text: `92 ans` },
	  { id: 75, text: `93 ans` },
	  { id: 76, text: `94 ans` },
	  { id: 77, text: `95 ans` },
	  { id: 78, text: `96 ans` },
	  { id: 79, text: `97 ans` },
	  { id: 80, text: `98 ans` },
	  { id: 81, text: `99 ans` },
	];
  
	async function submit() {
	  let birthday = 2022 - age["text"].slice(0, 2) + `-03-14`;
	  load = true;
	  const res = await fetch(api, {
		method: "POST",
		body: JSON.stringify({
		  user: {
			email: mail,
			type: "Male",
			birthday: birthday,
			first_name: firstname,
		  },
		}),
		headers: {
		  "content-type": "application/json",
		},
	  });
	  const result = await res.json();
  
	  setTimeout(() => {
		(window.location.href = result.redirect_url, "_blank");
	  });
	  load = false;
	  mail = "";
	  age = "";
	  firstname = "";
	}
  
	onMount(async () => {
	  var myArray = [
		`EN LIGNE À L'INSTANT`,
		"EN LIGNE IL Y A 3 MINUTES",
		"EN LIGNE IL Y A 4 MINUTES",
	  ];
	  online = myArray[Math.floor(Math.random() * myArray.length)];
  
	  const resulta = await fetch("https://ipinfo.io/?token=cb83f69067b70b").then(
		(r) => r.json()
	  );
  
	  const ipay = await fetch(
		`https://api.ipregistry.co/` + resulta.ip + `?key=6nn8zr4k2hcwkw32`
	  ).then((r) => r.json());
	  if (!ipay.carrier.name) {
		monip = `vers ` + ipay.location.city;
	  } else {
		monip = "";
	  }
	});
  
	function showDeux() {
	  show = true;
	}



  </script>






  
  <svelte:head>
<script>
  function clickOutside(element, callbackFunction) {
	function onClick(event) {
		if (!element.contains(event.target)) {
			callbackFunction();
		}
	}
	
	document.body.addEventListener('click', onClick);
	
	return {
		update(newCallbackFunction) {
			callbackFunction = newCallbackFunction;
		},
		destroy() {
			document.body.removeEventListener('click', onClick);
		}
	}
}
let showModal = false;
</script>

	<title>{titre}</title>
  
	<meta
	  name="description"
	  content={`Accéder à la page privée de ${prenom} pour consulter sa présentation et ses photos. ${prenom} répond généralement aux messages privés en moins d'une heure.`}
	/>
	<link rel="icon" href="favicon.png" />
  
	<meta name="viewport" content="initial-scale=1, maximum-scale=1" />
	<meta
	  name="og:description"
	  content={`Accéder à la page privée de ${prenom} pour consulter sa présentation et ses photos. ${prenom} répond généralement aux messages privés en moins d'une heure.`}
	/>
	<meta
	  name="twitter:description"
	  content={`Accéder à la page privée de ${prenom} pour consulter sa présentation et ses photos. ${prenom} répond généralement aux messages privés en moins d'une heure.`}
	/>
	<meta name="twitter:image" content="favicon.png" />
	<meta name="twitter:card" content="summary_large_image" />
  
	<meta property="og:site_name" content="Ma Page" />
	<meta property="og:type" content="profile" />
	<meta content="2419200" /><meta
	  name="twitter:card"
	  content="summary_large_image"
	/>
	<meta name="twitter:domain" content="Ma Page" /><meta
	  name="theme-color"
	  content="#ffffff"
	/>
	<link rel="shortcut icon" href="favicon.png" />
	<link rel="icon" type="image/png" href="favicon.png" />
	<link rel="icon" type="image/png" href="favicon.png" sizes="96x96" />
  </svelte:head>
  
  
  <!-- <h1 class="text-center font-bold uppercase text-[#ffedf6]">{prenom}</h1> -->
  <div class="hidden">
	  Accéder à la page privée de {prenom} pour consulter sa présentation et ses photos. {prenom} répond
	  généralement aux messages privés en moins d'une heure.
  </div>
  <div class="relative lg:w-4/12 lg:m-auto w-[95%] m-auto">
	  

	<div class="flex justify-between w-[90%] m-auto py-3 items-center">
	<img on:click={(event) => {
		show = true;
		event.stopPropagation();
	}} src="/icons/filter.webp" alt={prenom} class="w-8 h-8" />

	<div class="font-bold text-xl text-black flex items-center space-x-1">
		<!-- <img src="/icons/cp.webp" alt={prenom} class="w-6"/> -->
		<div class="mt-1 gilroy relative"> <span class="text-2xl">MYCLUB</span>
		<img src="/icons/heart2.webp" class="w-3 absolute right-[17.5px] -top-2" alt={prenom}/></div></div>
	<img src="/icons/account.webp" on:click={(event) => {
		show = true;
		event.stopPropagation();
	}} alt={prenom} class="w-6 h-6" />
</div>

	<div class=" relative">
		<div class="shadow-xl flex  items-center  space-x-2 bg-white absolute left-2 top-2 m-auto text-center w-[90px] justify-center  rounded-xl shadow-3xl font-semibold text-sm py-[1px]">
		<span class="relative flex h-3 w-3">
			<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00b777] opacity-75"></span>
			<span class="relative inline-flex rounded-full h-3 w-3 bg-[#00b777]"></span>
		  </span>
		<div class="text-[#00b777] font-bold">EN LIGNE</div></div>
		<img src="/poster.webp" alt={prenom} class="rounded-3xl"/>

		<div class="absolute bottom-2 left-2 right-2 backdrop-blur bg-white/60 rounded-xl px-4 py-4">
			<div class="flex items-center space-x-4">
			<h3 class="font-medium text-2xl gilroy">Sarah, 22</h3>
			<div class="bg-gradient-to-r from-[#F3D390] to-[#E9B755] flex items-center text-white w-[80px] rounded-xl font-medium text-sm">
				<img src="/icons/verified.webp" class="w-6" alt={prenom} />
				<div>Vérifié</div>
			</div>
		</div>
		<div class="flex space-x-2 items-center my-2">
		<img src="/icons/work.webp" alt={prenom} class="w-5"/>
		<div>Vendeuse de prêt à porter</div>
	</div>
	<!-- <div class="flex space-x-2 mb-2 items-center">
		<img src="/icons/ecole.webp" alt={prenom} class="w-5"/>
		<div>Lycée Jules Verne</div>
	</div> -->
	<div class="flex space-x-2 items-center">
		<img src="/icons/location.webp" alt={prenom} class="w-5"/>
		<div class="mt-0.5">À 7 km</div>
	</div>
	</div>
	

</div>

<div class="bg-[white] my-2 py-2 rounded-3xl px-4 shadow-xl">
	<img src="/icons/swipe.webp" class="w-10 m-auto" alt={prenom} />
	<div class="font-semibold text-lg gilroy">À Propos de moi</div>
	<div class=" py-2 text-[15px] mb-2">👋 Coucou, je m'appelle Sarah, j'ai 22 ans. Je suis passionnée de fitness et de danse.
		<br><br>
		Je suis à la recherche de mecs discrets pour des plans cul réguliers {monip} J'ai un appartement depuis peu, et j'ai très envie de m'amuser.
		<br><br>
		Si tu es intéressé, envoie-moi un message, on s'organise une soirée dans la semaine 😇
	</div>

	<div class="font-semibold text-lg gilroy">Informations de Sarah</div>
	<div class="flex flex-wrap py-2 ">
	<div class="flex space-x-2 m-1 items-center bg-[#F6F6F6] py-1 rounded-xl px-2">
		<img src="/icons/black/genre.webp" alt={prenom} class="w-6" />
		<div class="font-medium">Femme</div>
	</div>
	<div class="flex space-x-2 m-1 items-center bg-[#F6F6F6] py-1 rounded-xl px-2">
		<img src="/icons/black/ruler.webp" alt={prenom} class="w-6" />
		<div class="font-medium">163 cm</div>
	</div>
	
	<div class="flex space-x-2 m-1 items-center bg-[#F6F6F6] py-1 rounded-xl px-2">
		<img src="/icons/black/child.webp" alt={prenom} class="w-6" />
		<div class="font-medium">Pas d'enfants / En veux</div>
	</div>
	<div class="flex space-x-2 m-1 items-center bg-[#F6F6F6] py-1 rounded-xl px-2">
		<img src="/icons/black/pray.webp" alt={prenom} class="w-6" />
		<div class="font-medium">Athée</div>
	</div>
	<div class="flex space-x-2 m-1 items-center bg-[#F6F6F6] py-1 rounded-xl px-2">
		<img src="/icons/black/drink.webp" alt={prenom} class="w-6" />
		<div class="font-medium">Quelques fois</div>
	</div>
	<div class="flex space-x-2 m-1 items-center bg-[#F6F6F6] py-1 rounded-xl px-2">
		<img src="/icons/black/smoke.webp" alt={prenom} class="w-6" />
		<div class="font-medium">Ne fume pas</div>
	</div>
</div>
</div>


<img src="/p1.webp" alt={prenom} class="rounded-3xl shadow-xl"/>

<div class="bg-white my-2 py-2 rounded-3xl px-4 shadow-xl">
	<!-- <img src="/icons/swipe.webp" class="w-10 m-auto" alt={prenom} /> -->
	<div class="uppercase gilroy text-center">Je ne suis pas une escorte !! ❌</div>
	<div class=" py-2 text-[15px] mb-2">Une bonne fois pour toute je ne demande pas d'argent, je cherche juste des plans culs pour m'amuser un peu c'est tout.
<br><br>
		Je préfère généralement les mecs avec un peu d'expérience mais si tu es puceau je vais voir ce que je peux faire... 😉
		<br><br>	
		Par contre les mecs, respect et discrétion obligatoire SVP, sinon je bloque car c'est pas ce que je cherche.
	</div>

	</div>

	<img src="/p2.webp" alt={prenom} class="rounded-3xl shadow-xl"/>

<div class="bg-white my-2 py-2 rounded-3xl px-4 shadow-xl">
	<!-- <img src="/icons/swipe.webp" class="w-10 m-auto" alt={prenom} /> -->
	<div class="font-semibold  gilroy text-center">COMMENT ME RENCONTRER OU NUDES AVEC MOI ? 🍑</div>
	<div class="py-2 text-[15px] mb-2">
		Envoie-moi une petite photo sur MyClub et dis-moi quand t'es dispo. Je reçois les notifs quand j'ai un message donc habituellement, je répond en quelques minutes.
		<br><br>
		<!-- Je préviens l'inscription (essai) coûte quelque chose comme 1 ou 2 euros mais ensuite t'es tranquille tu peux conacter gratuitement autant de filles que tu veux. -->
		
		Et au moins je ne me fais pas harceler comme sur Tinder ou Snap, ça me permet de parler sans me faire spammer par des milliers de gros relous. 😘
	</div>

	</div>

	





<div on:click={(event) => {
	show = true;
	event.stopPropagation();
}} class="lg:w-12/12 cursor-pointer shake bg-gradient-to-r from-[#828ef8] to-[#6473FF] border-b[3px] border-[#0d783d] sticky bottom-2 mb-2 m-auto w-[90%] flex justify-center py-4 rounded-2xl font-semibold space-x-4 text-white">
	<!-- <img src="/icons/chat.webp" alt={prenom} class="w-6" />  -->
	<div 
	>CONTACTER SARAH SUR MYCLUB</div></div>


	<div  class={show ? "show" : "noshow"}>
		<div class="backdrop-brightness-[.15] fixed top-0 h-full w-full  left-0 lg:left-0 lg:w-full">
		  <div use:clickOutside={() => {
			console.log('clicked outside');
			show = false;
		  }} class="relative flex justify-center items-center pt-10 w-full ">
			<div
			
			  class=" bg-[white] w-[90%] lg:w-[35%] m-auto h-[auto] rounded-3xl relative"
			>
			 
			 
			  <div class="lg:w-11/12 w-11/12 m-auto ">
				
				<div class="flex items-center justify-between">
					<div
				  class="flex justify-center items-center my-2 relative  m-auto"
				>
				  <img
					src="/favicon.png"
					alt={prenom}
					class="rounded-[50px]  w-[90px] lg:w-[90px]"
				  />
				  <div
					class="h-5 w-5 rounded-full border-[4px] lg:h-5 lg:w-5 border-[white] bg-[#00b777] absolute bottom-0 right-0"
				  />
				</div>
				<div
				  class=" px-2 m-auto  justify-center text-left font-semibold "
				>
				  Contacte Sarah maintenant sur le chat <span
					class="underline ">gratuit</span
				  >
				</div>
				<img 
					on:click={close}
				  
				  src="/icons/close.webp" alt={prenom} class="w-4"/>

			</div>
				<hr class="mb-4 mt-2">

				<form use:form>
				  <div class="flex items-center  justify-center  my-4">
					<div
					  class="bg-[#6473FF] text-white w-10 h-10 rounded-l-lg p-1.5 text-center font-medium text-xl"
					>
					  1
					</div>
					<select
					  bind:value={age}
					  use:validators={[required]}
					  placeholder="ton âge"
					  class=" pl-2 text-lg w-11/12 rounded-r-lg h-10  text-black border border-"
					  on:change={() => (answer = "")}
					>
					  <option class="text-gray-400" value="" disabled selected
						>ton âge</option
					  >
					  {#each questions as question}
						<option value={question}>
						  {question.text}
						</option>
					  {/each}
					</select>
				  </div>
	  
				  <div class="flex items-center justify-center  my-4">
					<div
					  class="bg-[#6473FF] text-white w-10 h-10 rounded-l-lg p-1.5 text-center font-medium text-xl"
					>
					  2
					</div>
					<input
					  bind:value={mail}
					  id="email"
					  type="email"
					  name="email"
					  use:validators={[required, email]}
					  placeholder="ton adresse email "
					  class="pl-2 text-lg w-11/12 rounded-r-lg h-10 border  text-black"
					/>
				  </div>
	  
				  <Hint
					for="email"
					on="email"
					class="rounded text-sm text-center border-[#ef476f] border text-[#ef476f] p-1 w-[90%] m-auto mt-2"
				  >
					Merci de renseigner une adresse email valide.
				  </Hint>
	  
				  <div class="flex justify-center items-center  my-4">
					<div
					  class="bg-[#6473FF] text-white w-10 h-10 rounded-l-lg p-1.5 text-center font-medium text-xl"
					>
					  3
					</div>
					<input
					  bind:value={firstname}
					  use:validators={[minLength(3)]}
					  id="firstname"
					  name="firstname"
					  type="text"
					  placeholder="ton prénom "
					  class="pl-2 text-lg w-11/12 rounded-r-lg h-10 text-black border border-"
					/>
				  </div>
	  
				  <Hint
					for="firstname"
					on="minLength"
					let:value
					class="rounded text-sm text-center border-[#ef476f] border text-[#ef476f] p-1 w-[90%] m-auto"
				  >
					Merci d’utiliser votre vrai prénom ou à défaut un prénom
					réaliste :)
				  </Hint>
				</form>
				<button
				  on:click={submit}
				  disabled={!$form.valid}
				  class="tracking-wider cursor-pointer my-6  border--4  text-white font-medium py-3 w-[90%] m-auto flex items-center justify-center rounded-xl  space-x-4"
				>
				  {#if load}
					<svg
					  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
					  xmlns="http://www.w3.org/2000/svg"
					  fill="none"
					  viewBox="0 0 24 24"
					>
					  <circle
						class="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						stroke-width="4"
					  />
					  <path
						class="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					  />
					</svg>
				  {/if}
				  CLIQUE ICI POUR TERMINER <br>et contacter les femmes</button
				>
				<hr class="my-2">
	  
				<div
				  class=" py-2 text-sm text-center m-auto w-12/12 text-black font-medium  -mt-3"
				>
				  🚨 Entre un email qui fonctionne, et n'oublie pas de regarder les
				  spams pour valider ton email
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>

	</div>


<!-- {#if show}
<div class="modal"
		 use:clickOutside={() => {
		 console.log('clicked outside');
		 show = false;
	   }}>
	Some Modal
</div>
{:else}

{/if} -->
