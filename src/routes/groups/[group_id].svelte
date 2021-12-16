<script context="module">
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
   
    function showAlert(bool){
        if (bool==true) {
            document.getElementById("success").style.display="block";
            setTimeout(hideSuccess, 3000); 
        }
        else{
            document.getElementById("nosuccess").style.display="block";
            setTimeout(hideNoSuccess, 3000); 
            
        }
        
    }
    function hideSuccess(){
        document.getElementById("alert").style.display="none";
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
            let bool=true
            return(bool)
        }else{
            // validation fehlt noch
            axios.post('http://localhost:3000/api/groups', group)  
            
        }
        
    }

    
</script>

<main class="text-center">

    <h2>Add new Group</h2>
    
    <div class="input-group input-group-sm mb-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">Group name</span>
        <input bind:value={group.name} type="text" class="form-control" placeholder="write group name" aria-label="Name" aria-describedby="inputGroup-sizing-sm">
    </div>

    <div class="input-group input-group-sm mb-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">Description</span>
        <textarea bind:value={group.description} class="form-control" placeholder="write group description" aria-label="Description"></textarea> 
    </div>

    <div class="input-group input-group-sm mb-3">
        <label class="input-group-text" for="inputGroupSelect01">Color</label>
        <select class="form-select" id="inputGroupSelect01" bind:value={group.color}>
          <option selected>Choose...</option>
          <option value="1">Blue</option>
          <option value="2">Green</option>
          <option value="3">Red</option>
        </select>
    </div>

    <p>
        <button class="btn btn-outline-dark border-2" on:click={saveGroup} on:click={showAlert} >
            Save Group
        </button>
    </p>
    <div id="success" class="alert alert-success" role="alert" style="width: 300px ; display: none;position: fixed; right: 10px; top: 80px; ">
        Changes successfully saved!
        <button type="button" class="btn-close" aria-label="Close" on:click={hideSuccess}>
          </button>
      </div>

      <div id="nosuccess" class="alert alert-danger" role="alert" style="width: 300px ; display: none;position: fixed; right: 10px; top: 80px; ">
        Changes could not be saved!
        <button type="button" class="btn-close" aria-label="Close" on:click={hideNoSuccess}>
          </button>
      </div>

</main>


<style>
    
.input-group {
    width: 45%;
    margin-left: auto;
    margin-right:auto;
}

</style>