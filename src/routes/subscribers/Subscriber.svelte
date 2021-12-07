<script>
    export let subscriber;
    // Es muss noch angezeigt werden ob der subscriber intern ist oder nicht
</script>


<div class="card">
    <h5 class="card-header fs-4">{subscriber.name}</h5>
      <div class="card-body">
        <p class="card-title fw-light fs-5">{subscriber.email}</p>
        {#each subscriber.groups as group }
            <!-- Hier kann man den tatsächlichen group name noch nicht anzeigen weil die groups noch nicht populatet sind -->
            <p class="card-text fw-light fs-6"><span class="border border-2 rounded-pill">Example Group Name</span></p>
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
    .input-group{
      width: 45%;
      margin: 0 auto;
    }
    
    .card {
        width: 45%;
        margin: 0 auto;
    }
    
    
    </style>

