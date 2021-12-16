<script context="module">

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
        }else{
            // create new alert
            alert = await axios.post('http://localhost:3000/api/alerts', alert).then(res => res.data)
        }
    }
    
    function sendAlert(){
        axios.post(`http://localhost:3000/api/alerts/send/${alert._id}`)
    }
    function showAlert(){
        document.getElementById("save").style.display="block";
        setTimeout(hideAlert, 3000); 
        
    }
    function hideAlert(){
        document.getElementById("save").style.display="none";
    }

    function showConfirm(){
        document.getElementById("submit").style.display="block";
        setTimeout(hideConfirm, 3000); 
        
    }
    function hideConfirm(){
        document.getElementById("submit").style.display="none";
    }

</script>

<main class="text-center">

<h1>Static Props</h1>
<h3>Threat Name</h3>
<input bind:value={alert.title}>

<!-- Threat Type -->
<h3>Threat Type Selection</h3>
<Select 
    bind:value={alert.threatType} 
    title="Threat Type" 
    options={configuration.threatTypes.map(t => ({label: t.name, value: t.name}))}
/>
<!-- Threat Level -->
<h3>Threat Level Selection</h3>
<Select 
    bind:value={alert.threatLevel}
     title="Threat Level"
     options={configuration.threatLevels.map(t => ({label: t.name, value: t.name}))}
/>
<h3>Intern</h3>
<input type="checkbox" bind:checked={alert.intern}>

<h1>Message Attributes</h1>
{#each configuration.messageAttributes as attr}
    {#if attr.type === 'BOOLEAN'}
        <div>{attr.key}</div>
        <Checkbox value={alert.attributes[attr.key]} on:change={({detail})=> setAttribute(attr.key, detail)} />
    {:else if attr.type === 'SELECT'}
        <Select 
            title={attr.key}
            value={alert.attributes[attr.key]} 
            on:change={({detail})=> setAttribute(attr.key, detail)} 
            options={attr.selectOptions.map(opt => ({label: opt, value: opt}))}/>
    {:else if attr.type === 'MULTISELECT'}
        <MultiSelect
            title={attr.key}
            values={alert.attributes[attr.key] || []}
            on:change={({detail})=> setAttribute(attr.key, detail)}
            options={attr.selectOptions.map(opt => ({label: opt, value: opt}))}
        />
    {/if}
{/each}

<h1>Groups</h1>
<MultiSelect
    title="Groups"
    bind:values={alert.selectedGroups}
    options={groups.map(g => ({value: g._id, label: g.name}))}/>

<h1>Channels</h1>
<MultiSelect 
    title="Channels"
    bind:values={alert.selectedChannels}
    options={channels.map(c => ({value: c.name, label: c.name}))}/>

    <div class="text-center">
        <button type="button" class="btn btn-danger">Delete</button>
        <button type="button" class="btn btn-warning" on:click={saveAlert} on:click={showAlert}>Save</button>
        <button type="button" class="btn btn-success" on:click={sendAlert} on:click={showConfirm}>Submit</button>
      </div>

      <div id="save" class="alert alert-success" role="alert" style="width: 300px ; display: none;position: fixed; right: 10px; top: 80px; ">
        Alert saved successfully!
        <button type="button" class="btn-close" aria-label="Close" on:click={hideAlert}>
          </button>
      </div>

      <div id="submit" class="alert alert-warning" role="alert" style="width: 300px ; display: none;position: fixed; right: 10px; top: 80px; ">
        Alert successfully submitted!
        <button type="button" class="btn-close" aria-label="Close" on:click={hideConfirm}>
          </button>
      </div>
    </main>
