<script>

    export let subscriber;

</script>


<div class="card">
    <h5 class="card-header fs-4">{subscriber.name}
        {#if subscriber.intern == true}
            <span class="intern border border-2 rounded-pill fw-light fs-6">intern</span>
        {/if}
    </h5>
        <div class="card-body">
            <p class="card-title fw-light fs-5">{subscriber.email}</p>
                {#each subscriber.groups as group }
                    <span class="card-text fw-light fs-6"><span class="border border-2 rounded-pill list-group-horizontal" style="background:{group.color}">{group.name}</span></span>
                {/each}
        
            <div class="buttons text-end">
                <a href="/subscribers/{subscriber._id}">
                    <button class="btn btn-outline-primary border-2">Edit</button>
                </a>
        
          <!-- um es simpler zu halten lassen wir den delete button erstmal nur auf der subscribers/[id] seite -->
          <!-- <button class="btn btn-outline-danger border-2" on:click={deleteMe}>
              Delete
          </button> -->
            </div>
        </div> 
</div>

<style>
    
    .card {
        width: 45%;
        margin: 0 auto;
        overflow: auto;
        margin: 25px auto;
    }
    .border {
        padding-left: 0.4em;
        padding-right: 0.4em;
        padding-top: 0.1;
        padding-bottom: 0.13em;
        display:inline-block;
        margin-bottom: 0.2em;
        margin-inline-end: 0.2em;
    }
    .intern {
        padding-left: 0.4em;
        padding-right: 0.4em;
        background-color:#ffaf0496;
    }
    
</style>