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

console.log(alerts);

</script>



 <div class="container-sm" >
     <h1 class="text-center p-4">Alerts</h1>
    {#each alerts as alert}
    <!--erste Bootstrap Komponente wuw-->
    <div class="card mb-3 mx-auto" style="max-width: 50rem">
        <div class="bg-white card-header d-flex align-items-center justify-content-between ">
            <h5 class="fs-4 m-0">{alert.title} </h5>
            <a href="alerts/{alert._id}" class="text-decoration-none float-right link-primary fs-5">
                Review <i class="fas fa-chevron-right"></i>
            </a>
        </div>
        <div class="card-body px-4">
            <div class="mb-3">
                <i class="fas fa-pen-fancy me-2"></i>{alert.createdBy.email}

            </div>
            <div class="">
                <i class="far fa-calendar-plus me-2"></i> {new Date(alert.dateCreated).toLocaleString()}
            </div>
        </div>



    </div>
{/each}
 </div>

    
    <NewButton href="/alerts/new" />






