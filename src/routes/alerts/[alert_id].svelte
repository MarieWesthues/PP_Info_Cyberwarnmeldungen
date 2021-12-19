<script context="module">
    import NoSuccessAlert from "$lib/components/alertNoSuccess.svelte";
    import showAndhide, {showSuccess, showNoSuccess} from "$lib/components/showAndhide.svelte";

    function EmptyAlert(configuration){
        this.title = null;
        this.threatLevel = null;
        this.threatType = null;
        this.intern = null;
        this.attributes = Object.fromEntries(configuration.messageAttributes.map(attr => [attr.key, null]));
        this.selectedChannels = [];
        this.selectedGroups = [];
    }

    export async function load({page}){

        // Broooooooooooooooo warum zum fick funzt das hier nicht ohne localhost prefix
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
        if (alert._id) {
            axios.put(`http://localhost:3000/api/alerts/${alert._id}`, alert)
            showSuccess()
        }else{
            // create new alert
            alert = await axios.post('http://localhost:3000/api/alerts', alert).then(res => res.data)
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

<main class="text-center">

    <h1>Static Props</h1>
<div class="abschnitt">
<div class="container"> 
    <h3>Threat Name</h3>
    <input bind:value={alert.title} style="width: 300px; height: 50px;"/>
</div>

<!-- Threat Type -->
<div class="container">
    <h3>Threat Type Selection</h3>
    <Select 
        bind:value={alert.threatType} 
        title="Threat Type" 
        options={configuration.threatTypes.map(t => ({label: t.name, value: t.name}))}
    />
</div >
<!-- Threat Level -->
<div class="container">
    <h3>Threat Level Selection</h3>
    <Select 
        bind:value={alert.threatLevel}
        title="Threat Level"
        options={configuration.threatLevels.map(t => ({label: t.name, value: t.name}))}
    />
</div>
</div>
<h1>Message Attributes</h1>
<div class="abschnitt">

   
    {#each configuration.messageAttributes as attr}
        {#if attr.type === 'BOOLEAN'}
            <div class="check">
                <h3>{attr.key}</h3>
            <Checkbox value={alert.attributes[attr.key]} on:change={({detail})=> setAttribute(attr.key, detail)} />
            </div>
        {:else if attr.type === 'SELECT'}
            <div class="container">
                <h3>{attr.key}</h3>
            <Select 
                title={attr.key}
                value={alert.attributes[attr.key]} 
                on:change={({detail})=> setAttribute(attr.key, detail)} 
                options={attr.selectOptions.map(opt => ({label: opt, value: opt}))}/>
            </div>
    
        {:else if attr.type === 'MULTISELECT'}
        <div class="container"> 
            <h3>{attr.key}</h3>
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
    <h1>Groups</h1>
<div class="abschnitt">
<div class="container">
    <h3>Choose (a) Group(s)</h3>
    <MultiSelect
        title="Groups"
        bind:values={alert.selectedGroups}
        options={groups.map(g => ({value: g._id, label: g.name}))}/>
    </div>
<div class="check">
    <h4>Intern</h4>
    <input type="checkbox" bind:checked={alert.intern} style="width: 20px; height: 20px;">
</div>
</div>



    <h1>Channels</h1>
<div class="abschnitt">
    <div class="container">
        <h3>Choose (a) Channel(s)</h3>
    <MultiSelect 
        title="Channels"
        bind:values={alert.selectedChannels}
        options={channels.map(c => ({value: c.name, label: c.name}))}/>
    </div>
</div>
    <div class="text-center" style="margin: 30px;">
        <button type="button" class="btn btn-danger">Delete</button>
        <button type="button" class="btn btn-warning" on:click={saveAlert} >Save</button>
        <button type="button" class="btn btn-success" class:disabled={! alert._id} on:click={sendAlert} >Submit</button>
      </div>

  
    </main>
    <style>
        
        h1{
            margin-bottom: 25px;
            margin-top: 25px;
        }
        h3 {
            margin: 10px;
        }
        h4 {
            margin: 10px;
        }
        .container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 15px;
            align-items: center;

        }
        .text-center{
            margin-right: 250px;
            margin-left: 250px;
            margin-bottom: 50px;
        }

        .abschnitt{
            border: 0.5px solid grey; 
            padding-right: 50px;
         
        }
        .check{
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 25px;
        }

    </style>
