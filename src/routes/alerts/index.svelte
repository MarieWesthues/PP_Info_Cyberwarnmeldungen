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


<html lang="en">
    <body>
        
        {#each alerts as alert}
            <!--erste Bootstrap Komponente wuw-->
            <div class="rounded"> {alert.title}
                <a href="alerts/{alert._id}">
                    <Button type= "button" class= "btn btn-warning border-right-0">
                        Review
                    </Button>
                </a>
            </div>
        {/each}

        
        <NewButton href="/alerts/new" />
                <!-- <a href="/alerts/new">
                    <Button type="Button" class="btn btn-warning btn-rounded-circle">
                        +
                    </Button></a> -->
            
        
          
        
        
    </body>
</html>


<style>
    .rounded
    {
        background-color: gray;
        color: white;
        padding: 10px;
        display: flex;
        align-items: center;
        margin: 5%;
        height: 100px;
        width: 1200px;
        
    }

    

</style>



