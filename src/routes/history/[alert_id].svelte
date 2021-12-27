<script context="module">
    import NoSuccessAlert from "$lib/components/alertNoSuccess.svelte";
    import showAndhide, {showSuccess, showNoSuccess} from "$lib/components/showAndhide.svelte";
    
    
        function EmptyPersistedAlert(){
                this.dateCreated= "";
                this.createdBy = "";
                this.threatLevel= "";
                this.threatType="";
                this.title="";
                this.itern=false;
                this.selectedGroups = [];
                this.dateSend= null;
                this.authorizedBy=""
        }
    
        export async function load({page}){
    
            const historyUrl = `http://localhost:3000/api/history`
            const persistedAlerts = await fetch(historyUrl).then(res => res.json())
    
            const url = `http://localhost:3000/api/history/${page.params.history_id}`;
    
            const historyEmpty = page.params.history_id === 'new' ? new EmptyPersistedAlert() : await fetch(url).then(res => res.json())
    
    
                return {
                    props: {
                        historyEmpty,
                        persistedAlerts
                    }
                }
    
        }
    </script>
    
    
    <script>
        import axios from "axios";
        import MultiSelect from "$lib/components/MultiSelect.svelte";
        export let persistedAlerts;
    
    
    function saveSubscriber(){
        if (persistedAlerts._id) {
        axios.put(`http://localhost:3000/api/history/${history._id}`,persistedAlerts)
        showSuccess()
    }
    else {
        // validation fehlt noch
        axios.post('http://localhost:3000/api/history', persistedAlerts)  
        showNoSuccess()
        }
       
    }
    async function deleteSubscriber(){
    if (persistedAlerts._id){
        await axios.delete(`http://localhost:3000/api/history/${persistedAlerts._id}`)
        window.location.href = 'http://localhost:3000/history'
    }else{
        window.location.href = 'http://localhost:3000/history'
    }
    
}


</script>
    
    <main  class="text-center">
    
        <h2>Add new Subscriber</h2>
    
        <div width=50% align=center>
        <div class="input-group input-group-sm mb-3"style="text-align: left;"></div>
            <span class="input-group-text" id="inputGroup-sizing-sm" style="max-width: 40%; height: 30px;">Name</span>
            <input bind:value={subscriber.name} type="text" class="form-control" style="max-width: 40%; height: 30px;" aria-label="Name" aria-describedby="inputGroup-sizing-sm">
        
        <div class="input-group input-group-sm mb-3"> </div>
            <span class="input-group-text" id="inputGroup-sizing-sm" style="max-width: 40%; height: 30px; justify-content: left;">Email</span>
            <input bind:value={subscriber.email} type="text" class="form-control" style="max-width: 40%;" aria-label="Email" aria-describedby="inputGroup-sizing-sm">
        
    
        <div class="input-group">
            <label>
                Intern
                <input bind:checked={subscriber.intern} class="form-check-input" type="checkbox" id="intern">
            </label>
        </div>
    
       <div class="input-group input-group-sm mb-3"> </div>
           <span class="input-group-text" id="inputGroup-sizing-sm" style="max-width:40%; height: 30px;">Subscriber Groups</span>
           
        <MultiSelect
            title="Groups"
            bind:values={subscriber.groups}
            options={groups.map(g => ({label: g.name, value: g._id}))}
            
        />  
        <div>
            <button class="btn btn-danger" on:click={deleteSubscriber}>
                Delete
            </button>
            <button class="btn btn-outline-dark border-2" on:click={saveSubscriber}>
                Save Subscriber
            </button>
        </div>
    
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
    