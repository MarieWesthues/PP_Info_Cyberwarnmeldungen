<script>
    export let group;
</script>


<div class="card">
    <h5 class="card-header fs-4">{group.name}</h5>
      <div class="card-body">
        <!-- {#each group as group }
            <p class="card-text fw-light fs-6"><span class="border border-2 rounded-pill">Example Member</span></p>
        {/each} -->
        
        
        <div class="buttons text-end">
          <a href="/groups/{group._id}">
              <button class="btn btn-outline-primary border-2">Edit</button>
          </a>
        </div>
  </div> 
</div>

<style>
    
    .card {
        width: 45%;
        margin: 0 auto;
    }
    
    
</style>
