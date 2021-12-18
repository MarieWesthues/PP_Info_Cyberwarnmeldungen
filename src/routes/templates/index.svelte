
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
        
        <div class="channel">
            {#each channels as channel}
                <!-- mit "--name:value" könnt ihr css variablen setzen.  -->
                <a href="templates/{channel.name}" class = --channel:align-items-center style="--channel-primary:{channel.colors.primary}; --channel-primary:{channel.colors.primary}">

                        
                    <div class="box justify-content-center grow">
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <img class="rounded float-start p-2" width="80" height="80" src={channel.logo}>
                        <h3 class= "text-light">{channel.name} </h3>
                        
                        
                    </div>
                 
                </a>
                
            {/each}
        </div>
    
   <!-- </body>

</html> -->


<style>
    .channel{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 5rem;
    }
    .box{
        /* mit dieser syntax könnt ihr css variablen benutzen */
        background: var(--channel-primary);
        color: var(--channel-on-primary);
        filter: drop-shadow(10px 10px 10px rgb(167, 166, 166));
        width: 250px;
        min-height: 5rem;
        align-items: center;
        text-align: center;
        margin: 10px;
        border-radius: 10px;
        
        

        /*margin: auto;
        display: flex;
        -Container werden nicht zentriert dargestellt */
    }

    .grow { 
        transition: all .2s ease-in-out; 
    }

    .grow:hover { 
        transform: scale(1.1); 
    }
</style>