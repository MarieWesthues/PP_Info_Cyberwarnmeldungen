<script context="module">
    import NoSuccessAlert from "$lib/components/alertNoSuccess.svelte";
    import showAndhide, {showSuccess, showNoSuccess} from "$lib/components/showAndhide.svelte";

    function EmptyAlert(configuration){     //Constructor
        this.title = "";
        this.threatLevel = "";
        this.threatType = "";
        this.assessment = "";
        this.actions = "";
        this.incident = "";
        this.intern = false;
        this.attributes = Object.fromEntries(configuration.messageAttributes.map(attr => [attr.key, null]));
        this.selectedChannels = [];
        this.selectedGroups = [];
    }

    export async function load({page}){

        const urly = `http://localhost:3000/api/configuration`
        const configuration = await fetch(urly).then(res => res.json())

        const groupsUrl = 'http://localhost:3000/api/groups';
        const groups = await fetch(groupsUrl).then(res => res.json());

        const channelsUrl = 'http://localhost:3000/api/channels';
        const channels = await fetch(channelsUrl).then(res => res.json());

        const url = `http://localhost:3000/api/alerts/${page.params.alert_id}`;
        const alert = page.params.alert_id === 'new' ? new EmptyAlert(configuration) : await fetch(url).then(res => res.json()); 
        
        return {
            props: {
                alert,
                configuration,
                groups,
                channels
            }
        }

    }
</script>

<script>
    import Select from "$lib/components/Select.svelte";
    import Checkbox from "$lib/components/Checkbox.svelte";
    import MultiSelect from "$lib/components/MultiSelect.svelte";
    import Subscriber from "../subscribers/Subscriber.svelte";
    import axios from "axios";
import AlertSuccess from "$lib/components/alertSuccess.svelte";
    export let alert;
    export let configuration;
    export let groups;
    export let channels;
    
    function setAttribute(key, value){
        alert.attributes[key] = value;
    }

    async function saveAlert(){
        //no validation! ...meh who cares?
        try{
            let res = alert._id ?
            await axios.put(`http://localhost:3000/api/alerts/${alert._id}`, alert):
            await await axios.post('http://localhost:3000/api/alerts', alert);
            alert._id=res.data._id;            showSuccess()

        }
        catch (error){
            showNoSuccess()
        }
    }
            
    function sendAlert(){
        axios.post(`http://localhost:3000/api/alerts/send/${alert._id}`)
        window.location.href = "http://localhost:3000/alerts";
    }
    function deleteAlert(){
        if (alert._id) {
            axios.delete(`http://localhost:3000/api/alerts/send/${alert._id}`)
        }
        window.location.href = "http://localhost:3000/alerts";
    }
    
</script>

<div class="container-sm">
    <h1 class="text-center m-4">Edit Alert</h1>
    <!-- Static Props -->
    <div class="bg-white p-4 mx-auto rounded mb-3" style="max-width: 50rem;">
        <h2 class="border-bottom pb-2 mb-4">Static Props</h2>
        <div class="mb-3">
            <label class="form-label">Threat Title</label>
            <input class="form-control" bind:value={alert.title} />
        </div>
        <div class="mb-3">
            <label class="form-label">Threat Type</label>
            <Select 
            bind:value={alert.threatType} 

            options={configuration.threatTypes.map(t => ({label: t.name, value: t.name}))}
            />
        </div>
        <div class="mb-3">
            <label class="form-label">Threat Level</label>
            <Select 
            bind:value={alert.threatLevel}
            options={configuration.threatLevels.map(t => ({label: t.name, value: t.name}))}
            />
        </div >
    </div>

     <!-- Text areas -->
     <div class="bg-white p-4 mx-auto rounded mb-3" style="max-width: 50rem;">
        <h2 class="border-bottom pb-2 mb-4">Text Areas</h2>
        <div class="mb-3">
            <label class="form-label">Incident</label>
            <textarea class="form-control" bind:value={alert.incident}></textarea>
        </div>
        <div class="mb-3">
            <label class="form-label">Assessment</label>
            <textarea class="form-control" bind:value={alert.assessment}></textarea>
        </div>
        <div class="mb-3">
            <label class="form-label">Actions</label>
            <textarea class="form-control" bind:value={alert.actions}></textarea>
        </div >
    </div>

    <!-- Message Attributes -->
    <div class="bg-white p-4 mx-auto rounded mb-3" style="max-width: 50rem;">
        <h2 class="border-bottom pb-2 mb-4" > Message Attributes</h2>
        
        {#each configuration.messageAttributes as attr}
            {#if attr.type === 'BOOLEAN'}
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" checked={alert.attributes[attr.key]} on:change={()=> setAttribute(attr.key, !alert.attributes[attr.key])} />
                    <label class="form-check-label" for="exampleCheck1">{attr.key}</label>
                </div>
            {:else if attr.type === 'SELECT'}
                <div class="mb-3">
                    <label class="form-label">{attr.key}</label>
                    <Select 
                        value={alert.attributes[attr.key]} 
                        on:change={({detail})=> setAttribute(attr.key, detail)} 
                        options={attr.selectOptions.map(opt => ({label: opt, value: opt}))}/>
                </div>
            {:else if attr.type === 'MULTISELECT'} 
                <div class="mb-3">
                    <label class="form-label">{attr.key}</label>
                    <MultiSelect
                    title={attr.key}
                    values={alert.attributes[attr.key] || []}
                    on:change={({detail})=> setAttribute(attr.key, detail)}
                    options={attr.selectOptions.map(opt => ({label: opt, value: opt}))}
                />
                </div>
            {/if}
        {/each}
        
    </div>

    <!-- User Attributes -->
    <div class="bg-white p-4 mx-auto rounded mb-3" style="max-width: 50rem;">
        <h2 class="border-bottom pb-2 mb-4" > User Attributes </h2>
            <div class="mb-3">
                <label class="form-label">Groups</label>
                <MultiSelect
                    title="Groups"
                    bind:values={alert.selectedGroups}
                    options={groups.map(g => ({value: g._id, label: g.name}))}/>  
            </div>      
        <div class="mb-3">
            <label class="form-label">Channels</label>
            <MultiSelect 
                title="Channels"
                bind:values={alert.selectedChannels}
                options={channels.map(c => ({value: c.name, label: c.name}))}/>
    
        </div>
        
        <div class="mb-3 form-check">
            <input type="checkbox" bind:checked={alert.intern} class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Intern</label>
        </div>

    </div>

    <div class="text-center m-5">
        <button type="button" class="btn btn-danger me-3 mb-3">Delete</button>
        <button type="button" class="btn btn-warning me-3 mb-3" on:click={saveAlert} >Save</button>
        <button type="button" class="btn btn-success mb-3" class:disabled={! alert._id} on:click={sendAlert} >Submit</button>
    </div> 
</div>




    
