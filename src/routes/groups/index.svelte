<script context="module">
    export async function load({fetch}){
        const url = 'http://localhost:3000/api/groups';
        const res = await fetch(url)
        const groups = await res.json()
        

        if (res.ok){
            return {
                props: {
                    groups
                }
            }
        }
    }
</script>
<script>
    import NewButton from "$lib/components/NewButton.svelte";
import Groups from "./Groups.svelte";
    
    export let groups;
</script>

<h2 class="m-4">Group Overview</h2>

<div class="container-sm">
    {#each groups as group }
            <Groups {group}/>
    {/each}
</div>
 


        

<NewButton href="/groups/new"/>

