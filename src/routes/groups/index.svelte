<script>
let groups = ["Group 1", "Group 2", "Group 3"]
let members = [["Erkan Alles, Tim Buktu"],["Anna Bolika, Tim Buktu"],["Erkan Alles"]]

function deleteMe() {
      
    }

function editMe() {
      
    }
 
let isOpen = false;

function addGroup(event) {
    isOpen = event.detail.isOpen;
  }

</script>

<main>
    <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Searchbar</span>
        <input type="text" class="form-control" placeholder="search..." aria-label="Search" aria-describedby="basic-addon1">
    </div>

      <h2 class="text-center">Group Overview</h2>

     
     <div class= "groups">
        {#each groups as element, i (element)}

        
        <div class="card">
            <h5 class="card-header fs-4">{element}</h5>
                <div class="card-body">
                <p class="card-title fw-light fs-5">Members: {members[i ++]}</p>

                <div class="buttons text-end">
                    <button class="btn btn-outline-warning border-2" on:click={editMe}>
                        Edit
                    </button>

                    <button class="btn btn-outline-danger border-2" on:click={deleteMe}>
                        Delete
                    </button>
                </div>
            </div>  
        </div>
        <p></p>
   

        {/each}
    </div>

    
    <a href="groups/[group_id]">
        <div class="add text-center">
          <button class="btn btn-outline-dark border-2 rounded-pill" on:click={() => addGroup()}>+</button>
        </div>
    </a>

    
</main>

<style>

.card {
    width: 45%;
    margin: 0 auto;
}

.input-group {
    width:  45%;
    margin: 0 auto;
}

</style>