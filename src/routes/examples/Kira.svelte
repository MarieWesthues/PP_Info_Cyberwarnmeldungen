<script>
    let myName = "Kira"
    let myAge = "23"
    let myHobbies = ["Reisen","Lesen","Fitness"]
</script>

<main class="container mx-auto bg-blue-200 flex flex-col items-center">
    <h1 class="heading">
        
    </h1>
    
    <p>
        Mein Name ist {myName} und ich bin {myAge} Jahre alt.
    </p>
    
    <h1 class="heading">
       
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