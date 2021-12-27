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
        const url = `http://localhost:3000/api/templates/${template_id}`;

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



<div class="d-flex flex-wrap p-3">
    <div class="m-2">
        <Select title="Channel" options={channels.map(c => ({label: c.name, value: c.name}))}/>
    </div>
    <div class="m-2">
        <Select title="matches type" options={configuration.threatTypes.map(t => ({label: t.name, value: t.name}))}/>
    </div>
    <div class="m-2">
        <Select title="matches level" options={configuration.threatLevels.map(t => ({label: t.name, value: t.name}))}/>
    </div>
    <div class="m-2">
        <Select title="format" options={['txt', 'html', 'md'].map(x => ({label: x, value: x}))}/>
    </div>

    <div class="m-2">
        <div class="input-group ">
            <span class="input-group-text">Template Name</span>
            <input type="text" class="form-control" bind:value={template.name}>
        </div>
    </div>

    <div class="m-2">
        <button class="btn btn-outline-primary border-2 " on:click={saveTemplate}> Save As</button>
    </div>
</div>



<div class="d-flex  flex-grow-1 border-top">
    <textarea class="col-5 bg-dark text-light p-4" bind:value={templateString}></textarea>
    <!-- <textarea bind:value={templateString}></textarea> -->
    <div class="col-5 bg-light p-4">
        {@html templateString}
    </div>
    <div class="col-2 p-3 bg-light border-start">
        <h3 >Global Attributes</h3>
        //hart coden schmart coden
        <h3>Attributes</h3>
        <ul class="list-group">
            {#each configuration.messageAttributes as attribute}
                <li class="list-group-item">
                    {attribute.key} <span class="badge rounded-pill  bg-primary">{attribute.type}</span>
                </li>
            {/each}
        </ul>
    </div>
</div>

<div>

</div>




