<script context="module">
import SuccessAlert from "$lib/components/alertSuccess.svelte";
import NoSuccessAlert from "$lib/components/alertNoSuccess.svelte";

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
   
    function showSuccess(){
            document.getElementById("success").style.display="block";
            setTimeout(hideSuccess, 3000); 
        }
    function showNoSuccess(){
            document.getElementById("nosuccess").style.display="block";
            setTimeout(hideNoSuccess, 3000); 
        }
        
    function hideSuccess(){
        document.getElementById("success").style.display="none";
    }

    function hideNoSuccess(){
        document.getElementById("nosuccess").style.display="none";
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

    
</script>
<main class="text-center">

    <h2>Add new Group</h2>
    <div width=50% align=center>
    <div class="input-group input-group-sm mb-3" style="text-align: left;"></div>
        <span class="input-group-text" id="inputGroup-sizing-sm" style="max-width: 40%; height: 30px;">Group name</span>
        <input bind:value={group.name} type="text" class="form-control" style="max-width: 40%; height: 30px;" placeholder="write group name" aria-label="Name" aria-describedby="inputGroup-sizing-sm">
    

    <div class="input-group input-group-sm mb-3"> </div>
        <span class="input-group-text" id="inputGroup-sizing-sm" style="max-width: 40%; height: 30px; justify-content: left;">Description</span>
        <textarea bind:value={group.description} class="form-control" style="max-width: 40%;" placeholder="write group description" aria-label="Description"></textarea> 
    

    <div class="input-group input-group-sm mb-3"> </div>
        <label class="input-group-text" for="inputGroupSelect01" style="max-width: 40%; height: 30px;">Color</label>
        <select class="form-select" style="max-width: 40%; height: 35px;" id="inputGroupSelect01" bind:value={group.color}>
          <option selected>Choose...</option>
          <option value="1">Blue</option>
          <option value="2">Green</option>
          <option value="3">Red</option>
        </select>
   
    </div>

    <p>
        <button class="btn btn-outline-dark border-2" on:click={saveGroup}>
            Save Group
        </button>
    </p>
      <SuccessAlert> </SuccessAlert>
      <NoSuccessAlert> </NoSuccessAlert>

      </main>




<style>
    
    .input-group {
    width: 45%;
    margin-left: auto;
    margin-right:auto;
    align:left;
}</style>