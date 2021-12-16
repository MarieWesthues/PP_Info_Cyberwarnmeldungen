<script>
    export let group;
    export let anzahl = group.subscribers.length;
</script>


<div class="card" style="margin: 25px auto;">
    <h5 class="card-header fs-4">{group.name}</h5>
      <div class="card-body">
        <p class="card-text fw-light fs-6"  style="width:5000px;"><span class="border border-2 rounded-pill">  Members = {anzahl}  </span></p>
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
