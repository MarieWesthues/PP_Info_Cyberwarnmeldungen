<script context="module">
import NoSuccessAlert from "$lib/components/alertNoSuccess.svelte";
import showAndhide, {showSuccess, showNoSuccess} from "$lib/components/showAndhide.svelte";

    function EmptyGroup(){
            this.name= "";
            this.description="";
    }

    export async function load({page}){

        const groupsUrl = `http://localhost:3000/api/groups`
        const groups = await fetch(groupsUrl).then(res => res.json())

        const url = `http://localhost:3000/api/groups/${page.params.group_id}`;
        const group = page.params.group_id === 'new' ? new EmptyGroup() : await fetch(url).then(res => res.json())

        
            return {
                props: {
                    group,
                    groups
                }
            }
    }
   
</script>
<script>

    import axios from "axios";
    

    export let group 
    // man kann keinen attribute eines objekts binden. Deshalb müsssen attribute welche gebunden werden sollen destructured werden.



    function saveGroup(){
        if (group._id) {
            axios.put(`http://localhost:3000/api/groups/${group._id}`,group)
            showSuccess()
            
        }else{
            // validation fehlt noch
            axios.post('http://localhost:3000/api/groups', group)  
            showNoSuccess()
            
        }
        
    }
    async function deleteGroup(){
        await axios.delete(`http://localhost:3000/api/groups/${group._id}`)
        window.location.href = "http://localhost:3000/groups";
    }

    
</script>
<main class="text-center">
    <br>
    <h2>Add new Group</h2>
    <br>
    <div width=50% align=center>
    <div class="input-group-prepend" style="text-align: left;"></div>
        <span class="input-group-text" id="inputGroup-sizing-default" style="max-width: 40%; height: 40px; font-size: 1.25rem; border: 0"><strong>Group name</strong></span>
        <input bind:value={group.name} type="text" class="form-control" style="max-width: 40%; height: 35px;" placeholder="write group name" aria-label="Name" aria-describedby="inputGroup-sizing-default">
    
    <br>
    <div class="input-group input-group-sm mb-3"> </div>
        <span class="input-group-text" id="inputGroup-sizing-sm" style="max-width: 40%; height: 40px; font-size: 1.25rem; border: 0; justify-content: left;"><strong>Description</strong></span>
        <textarea bind:value={group.description} class="form-control" style="max-width: 40%;" placeholder="write group description" aria-label="Description"></textarea> 
    
    <br>
    <div class="input-group input-group-sm mb-3">  </div>
        <label class="input-group-text" for="inputGroupSelect01" style="max-width: 40%; height: 40px; font-size: 1.25rem; border: 0"><strong>Color</strong></label>
        <input type="color" bind:value={group.color} class="form-control" style="max-width: 40% ; height: 30px">
        


    <br>
    <p>
        <button class="btn btn-danger" class:disabled={! group._id} on:click={deleteGroup}>
            Delete Group
        </button>
        <button class="btn btn-outline-dark border-2" on:click={saveGroup}>
            Save Group
        </button>
    </p>

      </main>




<style>
    
    .input-group {
    width: 45%;
    margin-left: auto;
    margin-right:auto;
    align:left;
}</style>