<script>

let groups =["Group 1", "Group 2", "Group 3"];

function saveSubscriber() {
        
    }

</script>


<main  class="text-center">

    <h1>Add new Subscriber</h1>

    <div class="input-group input-group-sm mb-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">Name</span>
        <input type="text" class="form-control" aria-label="Name" aria-describedby="inputGroup-sizing-sm">
    </div>
    <div class="input-group input-group-sm mb-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">Email</span>
        <input type="text" class="form-control" aria-label="Email" aria-describedby="inputGroup-sizing-sm">
    </div>

    <div class="input-group">
        <label>
            Intern
            <input class="form-check-input" type="checkbox" id="intern" value="intern">
        </label>
    </div>

    <h3>Subscriber Groups</h3>

    {#each groups as group, i}
        <div class="input-group">
            <label>
                <input class="form-check-input" type="checkbox" id="groups" value="">
                {group}  
            </label> 
        </div>
    {/each}

    <div>
        <button class="btn btn-outline-dark border-2" on:click={saveSubscriber}>
            Save Subscriber
        </button>
    </div>

</main>

<style>
  
  .input-group {
    width: 30%;
    margin-left: auto;
    margin-right:auto;
}

</style>