
<script context="module" lang="ts">
    
import Template from "./Template.svelte"; "./index.svelte";
    
    export async function load({fetch}){
        const url = '/api/channels';
        const res = await fetch(url)
        const channels = await res.json()
        
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
            <!-- mit "--name:value" könnt ihr css variablen setzen.  -->
            <a href="templates/{channel.name}" style="--channel-primary:{channel.colors.primary}; --channel-on-primary:{channel.colors.onPrimary}">
                <div class="moped rounded d-flex justify-content-between p-3 m-5 "> 
                    <div class= "text-light">{channel.name}</div>
                    <div>
                        <button type="button" id="button" class="btn btn-primary" >Edit </button>
                    </div>
                </div>
            </a>
        {/each}
    
    </body>

</html>


<style>
    .moped{
        /* mit dieser syntax könnt ihr css variablen benutzen */
        background: var(--channel-primary);
        color: var(--channel-on-primary);
    }
</style>