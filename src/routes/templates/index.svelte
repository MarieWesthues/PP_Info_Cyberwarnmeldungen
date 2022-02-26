
<script context="module" lang="ts">
    
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
import Channel from "./Channel.svelte";

    export let channels;
</script>

<div class="container-sm ">
    <h1 class="text-center m-5">Channels</h1>

        <div class="row">
            {#each channels as channel}
                <div class="col-md-4">
                    <Channel {channel}/>
                </div>
            {/each}
        </div>


    
</div>