<script>
    let myName = "Yasmina"
    let hobbies = ["reisen", "calligraphy", "kochen/backen"]
</script>

<main class="container mx-auto bg-blue-200 flex flex-col items-center">
    <h1 class="heading">
        Willkommen auf meiner Seite
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