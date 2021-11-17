<script>
    let myName = "Stefan"
    let hobbies = ["programmieren", "dank memes", "schlechte Wortspiele"]
</script>

<main class="container mx-auto bg-blue-200 flex flex-col items-center">
    <h1 class="heading">
        Wilgommen zu m1 Saide
    </h1>
    
    <p>
        Mein Name ist {myName}
    </p>
    
    <h1 class="heading">
        Meine Hobbies sind:
    </h1>
    <ul class="bg-green-500 w-1/2">
        {#each hobbies as hobby, i }
            <li>{i+1}) {hobby}</li>
        {/each}
    </ul>
</main>


<style>
    .heading{
        @apply text-xl font-bold text-green-300
    }
</style>

