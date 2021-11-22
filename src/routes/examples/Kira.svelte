<script>
    let myName = "Kira";
    let myAge = "23";
    let myHobbies = ["Reisen"," Lesen"," Fitness"];
    let ToDo = ["Svelte kennenlernen", "Testseite erstellen","Fragen klären"];
</script>

<main class="container mx-auto bg-blue-200 flex flex-col items-center">
    <h1 class="heading"> 
        Kurze Vorstellung von mir </h1>
    
    <p>
        Mein Name ist {myName} und ich bin {myAge} Jahre alt.<br>
        Meine Hobbies sind {myHobbies}.
    </p>
    
    <h2 class="heading2">
        ToDo-Liste: </h2>
    <ul class="liste">
        {#each ToDo as todo, i }
            <li>{i+1}) {todo}</li>
        {/each}
    </ul>
</main>


<style>
    .heading{
        @apply text-xl font-bold text-purple-800
    }
    .heading2{
        @apply text-xl font-bold text-purple-800
    }
    .liste{
        @apply bg-red-400 w-1/2
        @apply text italic
    }

</style>