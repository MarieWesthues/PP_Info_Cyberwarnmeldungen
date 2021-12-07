
<script context="module" lang="ts">
    
import Template from "./Template.svelte"; "./index.svelte";
    
    export async function load({fetch}){
        const url = '/api/channels';
        const res = await fetch(url)
        const channels = await res.json()
        console.log(channels);
        
        if (res.ok){
            return {
                props: {
                    channels
                }
            }
        }
    }
    
</script>

<script>
    export let channels;
</script>

<html lang="en">
    <body>
        

        {#each channels as channel}
            <!--erste Bootstrap Komponente wuw-->
            <a href="templates/{channel.cert_id}">
                <div class="rounded d-flex justify-content-between p-3 m-5 bg-secondary"> 
                    <div class= "text-light">ChannelName</div>
                    <div>
                        <button type="button" id="button" class="btn btn-primary" on:click={()=> setSelection(obj)}>Edit </button>
                    </div>
                </div>
            </a>
        {/each}
    
    </body>

</html>