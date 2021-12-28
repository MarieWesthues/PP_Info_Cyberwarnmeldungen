<!-- Module Scripts werden auf dem Server ausgeführt -->
<script context="module">
// API requests sollten in einem module ausgeführt werden, damit die Notwendigen Daten schon bei Page load zur verfügung stehen

// Für mehr info über die load function siehe => https://kit.svelte.dev/docs#loading
export async function load({fetch}){
    const url = '/api/alerts';
    const res = await fetch(url)
    const alerts = await res.json()

    // Inhalt von props wird Komponenten als properties zur verfügung gestellt
    if (res.ok){
        return {
            props: {
                alerts
            }
        }
    }
}
</script>

<!-- Use lang="ts" for typescript support -->
<script lang="ts">
    // In dem alerst property kann man nun auf die API response zugreifen
    export let alerts;
    
import NewButton from '$lib/components/NewButton.svelte';
    import {Button} from 'sveltestrap';
  

</script>

 <div class="container-sm" >
    {#each alerts as alert}
    <!--erste Bootstrap Komponente wuw-->
    <div class="card mb-3 mx-auto" style="max-width: 50rem">
        <h5 class="card-header fs-4">{alert.title}</h5>
        <div class="buttons text-center">
        <a href="alerts/{alert._id}">
            <Button type= "button" class= "btn btn-outline-primary border-2">
                Review
            </Button>
        </a>
    </div>
    </div>
{/each}
 </div>

    
    <NewButton href="/alerts/new" />


<style>
    /* .card {
        width: 45%;
        margin: 0 auto;
        overflow: auto;
        margin: 25px auto;
    } */
</style>



