<script>
let subscribers = ["Erkan Alles", "Anna Bolika", "Tim Buktu"]
let emails = [["erkanalles@dings.de"],["annabolika@dings.de"],["timbuktu@dings.de"]]
let groups = [["Group 1 Group 3"],["Group 2"],["Group 1 Group 2"]]

function deleteMe() {
      
  }
 
let isOpen = false;

function editMe(event) {
    isOpen = event.detail.isOpen;
  }
      
</script>

<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Searchbar</span>
  <input type="text" class="form-control" placeholder="search..." aria-label="Search" aria-describedby="basic-addon1">
</div>

<h2 class="text-center">Subscriber Overview</h2>

<main>

<div class= "subscribers">
  {#each subscribers as element, i (element)}
    <div class="card">
      <h5 class="card-header fs-4">{element}</h5>
        <div class="card-body">
          <p class="card-title fw-light fs-5">{emails[i ++]}</p>
          <p class="card-text fw-light fs-6"><span class="border border-2 rounded-pill">{groups[i --,i ++]}</span></p>
          

          <div class="buttons text-end">
            <a href="subscribers/[subscriber_id]">
                <button class="btn btn-outline-warning border-2" on:click={() => editMe()}>Edit</button>
            </a>

            <button class="btn btn-outline-danger border-2" on:click={deleteMe}>
                Delete
            </button>
          </div>
    </div> 
  </div>
  <p></p>
  {/each}
</div>

<div class="add text-center">
  <a href="subscribers/[subscriber_id]">
      <button class="btn btn-outline-dark border-2" on:click={() => editMe()}>Add new Subscriber</button>
  </a>
</div>

</main>

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