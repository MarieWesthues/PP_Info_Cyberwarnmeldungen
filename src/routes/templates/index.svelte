
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
                <div class="box rounded d-flex justify-content-center p-3 m-5 "> 
                    <div class= "text-light">{channel.name}</div>
                    <!--<div>
                        <button type="button" id="button" class="btn btn-primary" > </button>
                    </div>-->
                </div>
            </a>
        {/each}
    
    </body>

</html>


<style>
    .box{
        /* mit dieser syntax könnt ihr css variablen benutzen */
        background: var(--channel-primary);
        color: var(--channel-on-primary);
        width: 40vw;
        height: 8vh;
        align-items: center;
        /*margin: auto;
        display: flex;
        -Container werden nicht zentriert dargestellt */
    }
</style>