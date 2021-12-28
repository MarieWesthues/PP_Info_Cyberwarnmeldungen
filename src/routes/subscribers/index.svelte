<script context="module">
  // API requests sollten in einem module ausgeführt werden, damit die Notwendigen Daten schon bei Page load zur verfügung stehen
  
  // Für mehr info über die load function siehe => https://kit.svelte.dev/docs#loading
  export async function load({fetch}){
      const url = '/api/subscribers';
      const res = await fetch(url)
      const subscribers = await res.json()
  
      // Inhalt von props wird Komponenten als properties zur verfügung gestellt
      if (res.ok){
          return {
              props: {
                  subscribers
              }
          }
      }
  }
</script>



<script>
import Subscriber from "./Subscriber.svelte";
import NewButton from "$lib/components/NewButton.svelte";

export let subscribers;

 
</script>

<!-- <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Searchbar</span>
  <input type="text" class="form-control" placeholder="search..." aria-label="Search" aria-describedby="basic-addon1">
</div> -->

<h2 class="m-4">Subscriber Overview</h2>


<div class="container-sm">
  {#each subscribers as subscriber }
    <Subscriber {subscriber} />
  {/each}
</div>




<NewButton href="/subscribers/new"/>


<style>
  .input-group
  {
    width:  45%;
    margin: 0 auto;
  }
</style>

