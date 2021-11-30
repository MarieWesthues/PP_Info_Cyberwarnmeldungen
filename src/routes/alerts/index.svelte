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

</script>


<html lang="en">
    <body>
        
        {#each alerts as alert}
            <!--erste Bootstrap Komponente wuw-->
            <div class="rounded"> {alert._id}
                <!-- <button type="button" id="button" class="btn btn-primary pull-right"  on:click={()=> setSelection(obj)}> Review </button> -->
                <a href="alerts/{alert._id}">click</a>
            </div>
        {/each}
    
        
        <!-- <button type="button" id="Hinzufügen" class="btn btn-primary pull-right"  on:click= {() => addMessage()}> + </button>  -->
        
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

    #button{
        align-content: right;
        margin-left: 85%;
    }

    #Hinzufügen{
        margin-left: 92%;
        margin-bottom: 50px;
        background-color: white;
        border-radius: 50%;
        
    }


</style>



