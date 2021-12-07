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

        if (page.params.alert_id == 'new') {
            return {
                props: {
                    alert: new EmptyAlert(configuration),
                    configuration
                }
            }
        }

        const url = `/api/alerts/${page.params.alert_id}`;
        const res = await fetch(url)
        const alert = await res.json()

        if (res.ok){
            return {
                props: {
                    alert,
                    configuration
                }
            }
        }
    }
</script>




<script>


    import InputFactory from "./InputFactory.svelte";
    import Select from "$lib/components/Select.svelte";
    import Option from "$lib/components/Option.svelte";
import Checkbox from "$lib/components/Checkbox.svelte";
import MultiSelect from "$lib/components/MultiSelect.svelte";
    export let alert;
    export let configuration;
    console.log(alert, configuration);
    // destructure static props
    let {title, threatLevel, threatType, intern} = alert;

    
    function setAttribute(key, value){
        alert.messageAttributes[key] = value;
        console.log(alert);
    }

    function handleDelete(){

    }
    function handleSave(){

    }
    function handleSubmit(){

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