<!-- index for alert overview.
[slug] is for editing alerts
if a new alert is to be created go to alerts/new

-->
<!--<script>
    let objs = [{id: 'soos'}, {id: 'saaas'}]
</script>

{#each objs as obj }
    <div>
        {obj.id}
        <a href="alerts/{obj.id}">click</a>
    </div>
{/each}


  import SendingAlerts from "./SendingAlerts.svelte";

   
        function addMessage () {

    }

-->

<script>
import { page } from "$app/stores";


    
let message = "Message Title";

</script>



<html lang="en">
    <body>
        

        {#each message as obj}
            <!--erste Bootstrap Komponente wuw-->
            <div class="rounded"> Message Title
                <button type="button" id="button" class="btn btn-primary pull-right"  on:click={()=> setSelection(obj)}> Review </button>
            </div>
        {/each}
    
        
        <button type="button" id="Hinzufügen" class="btn btn-primary pull-right"  on:click= {() => addMessage()}> + </button> 
        
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



