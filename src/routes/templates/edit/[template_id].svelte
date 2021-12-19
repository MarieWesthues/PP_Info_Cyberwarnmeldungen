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

<div class="text-center">
<Select
    title="Channel"
    value="Channel"
    options={channels.map(c => ({label: c.name, value: c.name}))}
/>

<Select
    title="matches type"
    value="Threat Type"
    options={configuration.threatTypes.map(t => ({label: t.name, value: t.name}))}
/>

<Select
    title="matches level"
    value="Threat Level"
    options={configuration.threatLevels.map(t => ({label: t.name, value: t.name}))}
/>

<Select
    title="format"
    value="Format"
    options={['txt', 'html', 'md'].map(x => ({label: x, value: x}))}
/>
</div>

<div class="m-5">
<button on:click={saveTemplate}> Save As</button><input bind:value={template.name}>
</div>

<div class="w-50">
    <textarea bind:value={templateString}></textarea>

    {@html templateString}
    
</div>


<!-- svelte-ignore a11y-missing-attribute -->
<html>
<head>
<style>

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

div {
    position: relative;
    margin-left 50px;
    margin-right 50px;
    padding 50px;
    padding-top 50 px;
    padding-bottom 50px;
    margin 50px;
    border 5px;
}

.w-50 {
    display: flex;
    flex-grow: 1;
    margin-left: 48px;
   
   


}

</style>
</head>
</html>

