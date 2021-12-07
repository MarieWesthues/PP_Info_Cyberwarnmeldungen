<script context="module">

    function EmptyAlert(configuration){
        this.title = null;
        this.threatLevel = null;
        this.threatType = null;
        this.intern = null;
        this.messageAttributes = Object.fromEntries(configuration.messageAttributes.map(attr => [attr.key, null]));
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

        const url = `/api/alerts/${page.params.alert_id}`;
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
    export let alert;
    export let configuration;
    export let groups;
    export let channels;
    console.log(alert, configuration, groups, channels);
    // destructure static props
    let {title, threatLevel, threatType, intern, selectedChannels} = alert;

    
    function setAttribute(key, value){
        alert.messageAttributes[key] = value;
        console.log(alert);
    }

    function saveAlert(){
        
    }
</script>


<h1>Static Props</h1>
<h3>Threat Name</h3>
<input bind:value={title}>

<!-- Threat Type -->
<h3>Threat Type Selection</h3>
<Select 
    bind:value={threatType} 
    title="Threat Type" 
    options={configuration.threatTypes.map(t => ({label: t.name, value: t._id}))}
/>
<!-- Threat Level -->
<h3>Threat Level Selection</h3>
<Select
    bind:value={threatLevel}
     title="Threat Level"
     options={configuration.threatLevels.map(t => ({label: t.name, value: t._id}))}
/>
<h3>Intern</h3>


<h1>Message Attributes</h1>
{#each configuration.messageAttributes as attr}
    {#if attr.type === 'BOOLEAN'}
        <div>{attr.key}</div>
        <Checkbox value={alert.messageAttributes[attr.key]} on:change={({detail})=> setAttribute(attr.key, detail)} />
    {:else if attr.type === 'SELECT'}
        <Select 
            title={attr.key}
            value={alert.messageAttributes[attr.key]} 
            on:change={({detail})=> setAttribute(attr.key, detail)} 
            options={attr.selectOptions.map(opt => ({label: opt, value: opt}))}/>
    {:else if attr.type === 'MULTISELECT'}
        <MultiSelect
            title={attr.key}
            values={alert.messageAttributes[attr.key] || []}
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
    options={channels.map(c => ({value: c._id, label: c.name}))}/>

<button>Delete</button>
<button on:click={saveAlert}>Save</button>
<button  >Send</button>