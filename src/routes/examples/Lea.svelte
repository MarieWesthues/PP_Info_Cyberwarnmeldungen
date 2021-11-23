<script>
    import "tailwindcss/tailwind.css"
    let ansprache = "Leute"
    let name = "Lea"
    let hobbies = ["tanzen", "lesen", "chillen"]
    let filme = ["Star Wars", "Harry Potter", "Die Tribute von Panem"]
    let src = "https://media0.giphy.com/media/J60dQZ7iLDHCZ2kjaN/giphy.gif?cid=ecf05e47u4w1d83ruonyeb6xlsce6p46k5qj6cgdk22cbe2g&rid=giphy.gif&ct=g"
    let count = 0;
    let abschied = "Bis Baldrian, eure Lea"

	function incrementCount() {
		count +=1;
	}
</script>

<main class="container mx-auto bg-purple-200 flex flex-col items-center">
    <h1 class="heading1">
        Hey {ansprache}, ich hoffe euch geht es gut!
    </h1>
    
    <p>
        Ich bin {name} und das hier ist meine Svelte-Testseite.
    </p>
    
    <h1 class="heading2">
        Meine Hobbies sind:
    </h1>
    <ul class="bg-green-100 w-1/2">
        {#each hobbies as hobby, i }
            <li>{i+1}) {hobby}</li>
        {/each}

    
    </ul>

    <h1 class="heading2">
        Meine Top 3 Filmreihen sind:
    </h1>
    <ul class="bg-green-100 w-1/2">
        {#each filme as film, i }
            <li>{i+1}) {film}</li>
        {/each}

    
    </ul>

    <img {src} alt="Ein lustiges Gif eines verfressenen Seesterns.">

    <button on:click={incrementCount}>
        Liked {count} {count === 1 ? 'time' : 'times'}
    </button>

    <p>
        <a href="https://giphy.com/">Hier</a> findet ihr weitere coole Gifs. Und für den Zeitvertreib zwischendurch, <br/>
        schaut euch <a href="https://9gag.com/">lustige Memes</a> an.
    </p>

    <p>
        Und hiermit <br/> {abschied}
    </p>
    </main>


<style>
    .heading1{
        @apply text-xl font-bold text-purple-800;
    }

    .heading2{
        @apply text-lg font-bold text-pink-400;
    }
</style>
