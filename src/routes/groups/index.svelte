<script context="module">
    export async function load({fetch}){
        const url = 'http://localhost:3000/api/groups';
        const res = await fetch(url)
        const groups = await res.json()
        
        console.log(groups);

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

<main>
    <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Searchbar</span>
        <input type="text" class="form-control" placeholder="search..." aria-label="Search" aria-describedby="basic-addon1">
    </div>

    <h2 class="text-center">Group Overview</h2>

        <div class= "groups">
            {#each groups as group }
                  <Groups {group}/>
            {/each}
        </div>
            
        <p></p>

        
</main>
<NewButton href="/groups/new"/>

<style>
.input-group {
    width:  45%;
    margin: 0 auto;
}
</style>