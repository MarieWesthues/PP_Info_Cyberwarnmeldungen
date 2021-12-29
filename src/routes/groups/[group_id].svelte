<script context="module">
import NoSuccessAlert from "$lib/components/alertNoSuccess.svelte";
import showAndhide, {showSuccess, showNoSuccess} from "$lib/components/showAndhide.svelte";

    function EmptyGroup(){
            this.name= "";
            this.description="";
            this.color='blue';
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



    async function saveGroup(){
        if (group._id) {
            axios.put(`http://localhost:3000/api/groups/${group._id}`,group)
            showSuccess()
            
        }else{
            // validation fehlt noch
            let res = await axios.post('http://localhost:3000/api/groups', group) 
             if(res.status==200){
                 group=res.data;
                 showSuccess();
             }
             else{
                showNoSuccess();
             }
        }
        
    }
    async function deleteGroup(){
        await axios.delete(`http://localhost:3000/api/groups/${group._id}`)
        window.location.href = "http://localhost:3000/groups";
    }
</script>

<div class="container">
    <div class="mx-auto " style="max-width: 50rem">
        <h1 class="my-4 ">Add new Group</h1>
        <div class="mb-3">
            <label class="form-label">Group Name</label>
            <input bind:value={group.name} type="text" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Description</label>
            <textarea bind:value={group.description} class="form-control"/>
        </div>
        <div class="mb-3">
            <span class="color-picker me-2" style="--color-picker-value:{group.color}">
                <span class="color-picker__overlay shadow-sm"></span>
                <input type="color" bind:value={group.color} class="color-picker__input form-control"/>
            </span>
            <label>Color</label>
        </div>

        <div class="mb-3 mt-5">
            <button class="btn btn-danger me-3" class:disabled={! group._id} on:click={deleteGroup}>
                <i class="fas fa-trash-alt"></i> Delete Group
            </button>
            <button class="btn btn-outline-primary border-2" on:click={saveGroup}>
                <i class="fas fa-save"></i> Save Group
            </button>
        </div>
    </div>
 
</div>





<!-- <main class="text-center">
    <br>
    <h2>Add new Group</h2>
    <br>
    <div width=50% align=center>
    <div class="input-group-prepend" style="text-align: left;"></div>
        <span class="input-group-text" id="inputGroup-sizing-default" style="max-width: 40%; background: #f4f4f5; height: 40px; font-size: 1.25rem; border: 0;"><strong>Group name</strong></span>
        <input bind:value={group.name} type="text" class="form-control" style="max-width: 40%; height: 35px;" placeholder="write group name" aria-label="Name" aria-describedby="inputGroup-sizing-default">
    
    <br>
    <div class="input-group input-group-sm mb-3"> </div>
        <span class="input-group-text" id="inputGroup-sizing-sm" style="max-width: 40%;background: #f4f4f5; height: 40px; font-size: 1.25rem; border: 0; justify-content: left;"><strong>Description</strong></span>
        <textarea bind:value={group.description} class="form-control" style="max-width: 40%;" placeholder="write group description" aria-label="Description"></textarea> 
    
    <br>
    <div class="input-group input-group-sm mb-3">  </div>
        <label class="input-group-text" for="inputGroupSelect01" style="max-width: 40%;background: #f4f4f5; height: 40px; font-size: 1.25rem; border: 0"><strong>Color</strong></label>
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

      </main> -->




<style>
    .color-picker{
        width: 2rem;
        height: 2rem;
        position: relative;
        display: inline-block;
    }
    .color-picker__input{
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 100px;
        border: none;
        cursor: pointer;
    }

    .color-picker__input:focus{
        box-shadow: 0 0 0 0.25rem var(--color-picker-value);
        opacity: .50;
    }
    .color-picker__overlay{
        width: 100%;
        height: 100%;
        background: var(--color-picker-value);
        border-radius: 2rem;
        position: absolute;
        opacity: 1;
        z-index: 1;
        pointer-events: none;
    }
    
</style>