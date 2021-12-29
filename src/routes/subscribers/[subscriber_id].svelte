<script context="module">
import NoSuccessAlert from "$lib/components/alertNoSuccess.svelte";
import showAndhide, {showSuccess, showNoSuccess} from "$lib/components/showAndhide.svelte";


    function EmptySubscriber(){
            this.email= "";
            this.intern = false;
            this.name= "";
            this.groups = []
    }

    export async function load({page}){

        const groupsUrl = `http://localhost:3000/api/groups`
        const groups = await fetch(groupsUrl).then(res => res.json())

        const url = `http://localhost:3000/api/subscribers/${page.params.subscriber_id}`;

        const subscriber = page.params.subscriber_id === 'new' ? new EmptySubscriber() : await fetch(url).then(res => res.json())


            return {
                props: {
                    subscriber,
                    groups
                }
            }

    }
</script>


<script>
    import axios from "axios";
    import MultiSelect from "$lib/components/MultiSelect.svelte";

    export let subscriber 
    // man kann keinen attribute eines objekts binden. Deshalb müsssen attribute welche gebunden werden sollen destructured werden.

    export let groups;



    async function saveSubscriber(){
        if (subscriber._id) {
            axios.put(`http://localhost:3000/api/subscribers/${subscriber._id}`,subscriber)
            showSuccess()
        }
        else {
            // validation fehlt noch
            let res= await axios.post('http://localhost:3000/api/subscribers', subscriber)  
            if(res.status=200){
                subscriber = res.data
                showSuccess()
            }
            
            else{
                showNoSuccess()
            }
            }
           
        }
    async function deleteSubscriber(){
        if (subscriber._id){
            await axios.delete(`http://localhost:3000/api/subscribers/${subscriber._id}`)
            window.location.href = 'http://localhost:3000/subscribers'
        }else{
            window.location.href = 'http://localhost:3000/subscribers'
        }
        
    }


</script>


<main  class="text-center">
    <br>
    <h2>Add new Subscriber</h2>
  
    <div width=50% align=center>
    <div class="input-group input-group-sm mb-3"style="text-align: left;"></div>
        <span class="input-group-text" id="inputGroup-sizing-sm" style="max-width: 40%;background: #f4f4f5; height: 40px; font-size: 1.25rem; border: 0"><strong>Name</strong></span>
        <input bind:value={subscriber.name} type="text" class="form-control" style="max-width: 40%; height: 35px;" aria-label="Name" aria-describedby="inputGroup-sizing-sm">
        <br>
        <label>
            Intern
            <input bind:checked={subscriber.intern} class="form-check-input" type="checkbox" id="intern">
        </label>
  
    <div class="input-group input-group-sm mb-3"> </div>
        <span class="input-group-text" id="inputGroup-sizing-sm" style="max-width: 40%;background: #f4f4f5; height: 40px; font-size: 1.25rem; border: 0"><strong>Email</strong></span>
        <input bind:value={subscriber.email} type="text" class="form-control" style="max-width: 40%;" aria-label="Email" aria-describedby="inputGroup-sizing-sm">
    

    <div class="input-group" style="margin-left:650px;">
<!--       <label>
            Intern
            <input bind:checked={subscriber.intern} class="form-check-input" type="checkbox" id="intern">
      </label> -->
    </div>
    <br>
   <div class="input-group input-group-sm mb-3"> </div>
       <span class="input-group-text" id="inputGroup-sizing-sm" style="max-width:40%;background: #f4f4f5; height: 40px; font-size: 1.25rem; border: 0"><strong>Subscriber Groups</strong></span>
       
    <MultiSelect
        title="Groups"
        bind:values={subscriber.groups}
        options={groups.map(g => ({label: g.name, value: g._id}))}
        
    />
    
    <!-- {#each groups as group, i}
        <div class="input-group">
             
            <label>
                <input class="form-check-input" type="checkbox" id="groups" >
                {group.name}  
            </label> 
        </div>
    {/each} -->

    <br>
    <div>
        <button class="btn btn-danger" on:click={deleteSubscriber}>
            Delete Subscriber
        </button>
        <button class="btn btn-outline-dark border-2" on:click={saveSubscriber}>
            Save Subscriber
        </button>
    </div>
   


  <!--   <div id="success" class="alert alert-success" role="alert" style="width: 300px ; display: none;position: fixed; right: 10px; top: 80px; ">
        Changes successfully saved!
        <button type="button" class="btn-close" aria-label="Close" on:click={hideSuccess}>
          </button>
      </div>

      <div id="nosuccess" class="alert alert-danger" role="alert" style="width: 300px ; display: none;position: fixed; right: 10px; top: 80px; ">
        Changes could not be saved!
        <button type="button" class="btn-close" aria-label="Close" on:click={hideNoSuccess}>
          </button>
      </div>-->
    

</main>

<style>
  
  button.multiselect {
    background-color: initial;
    border: 1px solid #ced4da;
  }

  .input-group {
    width: 40%;
    margin-left: auto;
    margin-right:auto;

}


</style>
