
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

<!--<html lang="en">
    <body> -->
        
        <div class="moped">
            {#each channels as channel}
                <!-- mit "--name:value" könnt ihr css variablen setzen.  -->
                <a href="templates/{channel.name}" class = --channel:align-items-center style="--channel-primary:{channel.colors.primary}; --channel-primary:{channel.colors.primary}">
            
                        
                    <div class="box">
                        <div class= "text-dark">{channel.name}</div>
                    </div>
                 
                </a>
                
            {/each}
        </div>
    
   <!-- </body>

</html> -->


<style>
    .moped{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .box{
        /* mit dieser syntax könnt ihr css variablen benutzen */
        background: var(--channel-primary);
        color: var(--channel-on-primary);
        width: 500px;
        min-height: 10rem;
        align-items: center;

        /*margin: auto;
        display: flex;
        -Container werden nicht zentriert dargestellt */
    }
</style>