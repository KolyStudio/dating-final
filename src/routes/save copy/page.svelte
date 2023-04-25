<script>
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
	  `https://website.api.tikt.net/register?ai=31778&aci=DIRECT&t1=` +
	  date +
	  `&sg=3&us=0&apm=3&ni=1&sn=chaudpassion&ap.fn=Sarah&ap.age=22&pid=https://maprivee.fr/poster.png`;
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
  
  
  <h1 class="text-center font-bold uppercase text-[#ffedf6]">{prenom}</h1>
  <div class="hidden">
	  Accéder à la page privée de {prenom} pour consulter sa présentation et ses photos. {prenom} répond
	  généralement aux messages privés en moins d'une heure.
  </div>
  <div class="relative lg:w-5/12 lg:m-auto">
	  <div class="flex relative w-full justify-center rounded-full">
		  <div class="flex justify-center absolute right-0 left-0 top-[10px]">
			  <div
				  class="text-white fade-inn rounded-lg  bg-[#46b26e]  px-3 py-1 text-center text-xs font-semibold uppercase"
			  >
				  {online}
			  </div>
		  </div>
		  <video
			  class="m-auto rounded-[20px] w-[70%] lg:w-[50%] mt-5"
			  controls
			  poster="/poster.webp"
			  src="/cp.mp4"
		  >
			  <track kind="captions" />
		  </video>
	  </div>
  
  <div class="flex space-x-4 justify-center pt-4">
  <div class="bg-white rounded-xl border-b-[3px] border-[#ca97fd] font-medium px-2">🎂 22 ans</div>
  <div class="bg-white  rounded-xl border-b-[3px] border-[#ca97fd] font-medium px-2">📍 À 7 km</div>
  </div>
  
	  <div class="  w-[90%] m-auto my-3 text-center">
		  <p class="py-2 font-medium ">
			  À la recherche d'un plan cul {monip} pour m'amuser un peu ! 😘
			  <br />
			  <br />Si tu es intéressé, envoie-moi un message ici et on s'organise un truc 
			  
		  </p>
	  </div>
  
	  <div class="flex space-x-1 justify-center">
	  <img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90"/>
	  <img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90"/>
	  <a href="/" class="cursor-default"><img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90"/></a>
	  </div>
  
	  <div on:click={showDeux} id="decl"
		  class="cursor-pointer  bg-gradient-to-r  from-[#c181ff] to-[#c899f6] border-b-4 border-[#9c69cf] text-white text-lg font-medium py-4 w-[90%] m-auto flex items-center justify-center rounded-3xl my-2 space-x-4"
	  >
	  ME CONTACTER MAINTENANT
	  </div>
  
	  <div class="w-[80%] bg-white m-auto rounded-2xl shadow-xl my-4">
		  <img alt={prenom} src={`/ex.webp`} class="rounded-2xl" />
	  </div>
	  <div class="text-xs font-medium w-[90%] m-auto text-center">A savoir, si je montre pas mon visage dans la vidéo c'est que je l'ai un peu retouché pour pas trop être reconnue, j'ai un boulot et une famille donc je pense que vous comprendrez pourquoi... ^^</div>
  
  
	  <div class="w-[95%] m-auto p-3 rounded-3xl my-4 pb-1">
		  <h2 class="font-semibold text-[#c181ff]">JE NE SUIS PAS UNE ESCORTE !! ❌</h2>
		  <p class="py-2  text-sm">
			  Une bonne fois pour toutes, je ne demande <b>pas d'argent,</b> je cherche juste des plans culs
			  pour m'amuser un peu, c'est tout.
			  <br /><br />
			  Je préfère généralement les mecs avec <b> un peu d'expérience </b>{' '}
			  mais si tu es puceau, je vais voir ce que je peux faire... 😉
			  <br /> <br />Par contre les mecs,{' '}
			  <b>respect et discrétion obligatoire SVP,</b> sinon je bloque car c'est pas ce que je recherche.
		  </p>
	  </div>
  
	  <div class="w-[95%] m-auto p-3 rounded-3xl my-4 ">
		  <h2 class="font-semibold text-[#c181ff]">COMMENT ME RENCONTRER EN RÉEL ?</h2>
		  <p class="py-2  text-sm">
			  Envoie-moi une petite photo sur{' '}
			  <span class="cursor-pointer text-blue-600 font-semibold underline underline-offset-2">
				  <span on:click={showDeux} > Chaud Passion en cliquant ici </span>
			  </span>{' '}
			  et <b>dis-moi quand t'es dispo.</b> Je reçois les notifs quand j'ai un message, donc
			  habituellement,
			  <b> je répond en quelques minutes.</b>
			  <!-- <br /><br />
			  Je préviens l'essai coûte quelque chose comme 1 ou 2 euros mais ensuite t'es tranquille tu peux
			  contacter
			  <b> autant de filles que tu veux.</b> -->
			  <br /><br />
			 Je préfère passer par <b> Chaud passion</b> car au moins, je ne me fais pas harceler comme sur Tinder, Badoo ou Snap,
			  <b> ça me permet de te parler sans me faire spammer</b> par des miliers des gros relous. 😘
		  </p>
	  </div>
  
	  <div id="decl"
	  on:click={showDeux}
	class="cursor-pointer  bg-gradient-to-r  from-[#c181ff] to-[#c899f6] border-b-4 border-[#9c69cf] text-white text-lg font-medium py-4 w-[90%] m-auto flex items-center justify-center rounded-3xl my-2 space-x-4"
	  >
		  CLIQUE ICI POUR VOIR MON PROFIL
	  </div>
  
	  <div class="w-[95%] m-auto p-3 rounded-3xl mt-6">
		  <h2 class="font-semibold text-center text-[#c181ff]">QUELQUES TÉMOIGNAGES</h2>
	  </div>
  
	  <div class="py-3">
		  <div class="w-[85%] bg-white m-auto p-3 rounded-3xl my-2 ">
			  <img alt={prenom} src="/reviews/rev1.webp" />
		  </div>
		  <div class="text-center m-auto w-[85%] font-medium text-sm">
			  Vous êtes nombreux à avoir pris l'offre d'essai et à en être contents apparement ! 😘
		  </div>
	  </div>
  
	  <div class="py-3">
		  <div class="w-[85%] bg-white m-auto p-3 rounded-3xl my-2 ">
			  <img alt={prenom} src="/reviews/test/rev3.webp" />
		  </div>
  
		  <div class="text-center m-auto w-[85%] font-medium text-sm">
			  La persévérance finit toujours par payer ! 💪 Amuse toi bien ! 😘
		  </div>
	  </div>
  
	  <div class="py-3">
		  <div class="w-[85%] bg-white m-auto p-3 rounded-3xl my-2">
			  <img alt={prenom} src="/reviews/rev3.webp" />
		  </div>
		  <div class="text-center m-auto w-[85%] font-medium text-sm">
			  Ce ne sont pas des escortes, tu peux contacter autant de filles que tu veux. 👌
		  </div>
	  </div>
  
	  <div class="py-3">
		  <div class="w-[85%] bg-white m-auto p-3 rounded-3xl my-2 ">
			  <img alt={prenom} src="/reviews/rev2.webp" />
		  </div>
  
		  <div class="text-center m-auto w-[85%] font-medium text-sm">
			  Si tu es septique, inscris-toi et rejoins-moi, tu verras que ça
			  fonctionne vraiment ! 💯🔥
		  </div>
	  </div>
  
	  <div on:click={showDeux} id="decl"
	class="cursor-pointer  bg-gradient-to-r  from-[#c181ff] to-[#c899f6] border-b-4 border-[#9c69cf] text-white text-lg font-medium py-4 w-[90%] m-auto flex items-center justify-center rounded-3xl my-2 space-x-4"
	>
	  S'INSCRIRE SUR CHAUD PASSION 🔞
  </div>
  
  
  
  
  
  
  <div class={show ? "show" : "noshow"}>
	<div class="backdrop-brightness-[.15] fixed top-0 h-full w-full  lg:w-5/12">
	  <div class="relative flex justify-center items-center pt-10 w-full ">
		<div
		  class=" bg-[white] w-[95%] lg:w-[75%] m-auto h-[auto] rounded-2xl relative"
		>
		  <!-- <div class='absolute -mt-20 w-full flex justify-center'>
			  
			  <div class="w-10 h-10 text-xl m-auto cursor-pointer bg-white text-[#1b1c21] text-center rounded-full font-bold pt-[7px]" on:click={close}>✖</div>
			  </div> -->
		  <div class="flex  space-x-4 justify-center mt-2 items-center px-3">
			<div
			  class="flex justify-center items-center my-2 relative w-[200px] lg:w-[130px] m-auto"
			>
			  <img
				src="/p1.webp"
				alt={prenom}
				class="rounded-[50px]  w-[170px] lg:w-[130px]"
			  />
			  <div
				class="h-6 w-6 rounded-full border-[4px] lg:h-5 lg:w-5 border-[white] bg-[#09BC8A] absolute bottom-0 right-0"
			  />
			</div>
			<div class=" text-black font-medium">
			  Afin de ne parler qu'à des majeurs, je ne souhaite parler qu'aux
			  hommes inscrits.{" "}🔞
			</div>
		  </div>
		  <div class="lg:w-9/12 w-11/12 m-auto ">
			<div
			  class="w-10/12 m-auto justify-center text-center text-[#46b26e] font-semibold mt-2"
			>
			  Crée ton compte et parle avec moi en <span
				class="underline">chat</span
			  > 😏
			</div>
			<form use:form>
			  <div class="flex items-center  justify-center  my-4">
				<div
				  class="bg-[#9081F6] text-white w-10 h-10 rounded-l-lg p-1.5 text-center font-medium text-xl"
				>
				  1
				</div>
				<select
				  bind:value={age}
				  use:validators={[required]}
				  placeholder="ton âge"
				  class=" pl-2 text-lg w-9/12 rounded-r-lg h-10  text-black border-2 border-"
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
				  class="bg-[#9081F6] text-white w-10 h-10 rounded-l-lg p-1.5 text-center font-medium text-xl"
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
				  class="pl-2 text-lg w-9/12 rounded-r-lg h-10 border-2 border-  text-black"
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
				  class="bg-[#9081F6] text-white w-10 h-10 rounded-l-lg p-1.5 text-center font-medium text-xl"
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
				  class="pl-2 text-lg w-9/12 rounded-r-lg h-10 text-black border-2 border-"
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
			  class="tracking-wider cursor-pointer my-6  border-b-4  text-white text-lg font-medium py-3 w-[90%] m-auto flex items-center justify-center rounded-3xl  space-x-4"
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
			  COMMENCE À BAISER !</button
			>
  
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