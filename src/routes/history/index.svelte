<script context="module">
    // API requests sollten in einem module ausgeführt werden, damit die Notwendigen Daten schon bei Page load zur verfügung stehen
    
    // Für mehr info über die load function siehe => https://kit.svelte.dev/docs#loading
    export async function load({fetch}){
        const url = '/api/history';
        const res = await fetch(url)
        const persistedAlerts = await res.json()
    
        // Inhalt von props wird Komponenten als properties zur verfügung gestellt
        if (res.ok){
            return {
                props: {
                    persistedAlerts
                }
            }
        }
    }
  </script>
  
  
  
  <script>
  import PersistedAlert from "./History.svelte";
  import NewButton from "$lib/components/NewButton.svelte";
  
  export let persistedAlerts;
  
   
  </script>
  
  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">Searchbar</span>
    <input type="text" class="form-control" placeholder="search..." aria-label="Search" aria-describedby="basic-addon1">
  </div>
  
  <h2 class="text-center">Alert Overview</h2>
  
  <main>
     <div class= "alerts">
        {#each persistedAlerts as persistedAlert}
            <PersistedAlert {persistedAlert}/>
        {/each}
    </div>
  
  </main>
  
  <style>
    .input-group
    {
      width:  45%;
      margin: 0 auto;
    }
  </style>
  
  