<script>
    let name = "Lisa";
    let src ="pictures/Igel.gif"
    // import Nested from "./Nested.svelte";
    let count = 0;
    function counting() {
        count += 1;
    }
    let hobbies = ["Kochen, Lesen, Gaming"];
</script>

<h1 class="text-blue-300 text-5xl font-sans italic">Hallo mein Name ist {name}</h1>


<p class="text-purple-300 text-3xl font-sans">Meine Hobbys sind:</p>
<ul class="text-violet-300 font-serif text-2xl"> 
    {#each hobbies as hobby, i}
        <li>{i +1} {hobby}</li>
    {/each}
</ul>

<img {src} alt="Ein Igel">

<button on:click={counting}>
    Seen {count} Times
</button>
<!-- <Nested/> -->

<style>

</style>