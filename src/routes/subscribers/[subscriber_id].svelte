<script>

    let groups =["Group 1", "Group 2", "Group 3"];

    function saveTemplate() {
        alert("saved")
    }

</script>


<main  class="text-center">

    <h1>Add new Subscriber</h1>

    <p>Name <input></p>
    <p>E-mail <input></p>

    <p><label>
        Intern
        <input type=checkbox>
    </label></p>

    <h3>Subscriber Groups</h3>

    {#each groups as group, i}
       <label>
            <input type=checkbox><p>{group}</p>
        </label>
    {/each}

    <p>
    <button on:click={saveTemplate}>
        Save Template
    </button>
    </p>

</main>

<style>
  
</style>