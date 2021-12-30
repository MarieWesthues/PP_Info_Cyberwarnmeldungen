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
    
            const url = `http://localhost:3000/api/history/${page.params.alert_id}`;    
            const historyEmpty = page.params.alert_id === 'new' ? new EmptyPersistedAlert() : await fetch(url).then(res => res.json())
    
    
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
</script>    

<div class="container">
    <div class="mx-auto " style="max-width: 50rem">
        <h1 class="my-4">Show Alert</h1>

        <div class="mb-3">
            <label class="form-label">Title</label>
            <input bind:value={persistedAlerts.title} type="text" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Date</label>
            <input bind:value={persistedAlerts.dateCreated} type="text" class="form-control">
        </div>
        <div class="mb-3 form-check">
            <input bind:checked={persistedAlerts.intern} type="checkbox" class="form-check-input" >
            <label class="form-check-label" >intern</label>
        </div>
    </div>
</div>
