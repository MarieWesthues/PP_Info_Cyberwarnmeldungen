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
export let persistedAlerts;
</script>
    
<h2 class="m-4">Alert Overview</h2>
  
<div class= "container-sm">
  {#each persistedAlerts as persistedAlert}
    <PersistedAlert {persistedAlert}/>
  {/each}
</div>  