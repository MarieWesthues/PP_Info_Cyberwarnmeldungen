<script context="module">
    function EmptyTemplate(){
        this.name = "";
        this.used = false;
        this.templateString = "";
        this.usesAttributes = [];
        this.channel = null;
        this.matches = {
            type: "",
            level: "",
        }
    }

    export async function load({page}){
        const configUrl = 'http://localhost:3000/api/configuration';
        const configuration = await fetch(configUrl).then(res => res.json());

        const channelsUrl = 'http://localhost:3000/api/channels';
        const channels = await fetch(channelsUrl).then(res => res.json());

        const {template_id} = page.params;
        const url = `http://localhost:3000/api/templates${template_id}`;

        const template = template_id === 'new' 
            ? new EmptyTemplate()
            : await fetch(url).then(res => res.json())

        return {
            props: {
                template,
                configuration,
                channels,
            }
        }
    }
</script>


<script>
import Select from "$lib/components/Select.svelte";
import axios from "axios";

    export let template;
    export let configuration;
    export let channels;

    console.log(channels);
    console.log(configuration);
    console.log(template);

    let templateString = template.templateString

    function saveTemplate(){
        template.templateString = templateString;
        axios.post('http://localhost:3000/api/templates', template)
        
    }
</script>

<button on:click={saveTemplate}> Save As</button><input bind:value={template.name}> 

<Select
    title="Channel"
    bind:value={template.channel}
    options={channels.map(c => ({label: c.name, value: c.name}))}
/>

<Select 
    title="matches type"
    bind:value={template.matches.type}
    options={configuration.threatTypes.map(t => ({label: t.name, value: t.name}))}
/>

<Select
    title="matches level"
    bind:value={template.matches.level}
    options={configuration.threatLevels.map(t => ({label: t.name, value: t.name}))}
/>

<Select
    title="format"
    value="txt"
    options={['txt', 'html', 'md'].map(x => ({label: x, value: x}))}
/>


<div>
    <textarea bind:value={templateString}></textarea>
</div>
<div>
    {@html templateString}
</div>