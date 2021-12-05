<script>

function saveGroup() {
        
    }

</script>

<main class="text-center">

    <h2>Add new Group</h2>
    
    <div class="input-group input-group-sm mb-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">Group name</span>
        <input type="text" class="form-control" placeholder="write group name" aria-label="Name" aria-describedby="inputGroup-sizing-sm">
    </div>

    <div class="input-group input-group-sm mb-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">Description</span>
        <textarea class="form-control" placeholder="write group description" aria-label="Description"></textarea> 
    </div>

    <div class="input-group input-group-sm mb-3">
        <label class="input-group-text" for="inputGroupSelect01">Color</label>
        <select class="form-select" id="inputGroupSelect01">
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
    
</main>

<style>
    
.input-group {
    width: 45%;
    margin-left: auto;
    margin-right:auto;
}

</style>