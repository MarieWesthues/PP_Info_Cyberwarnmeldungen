 <script context="module" lang="ts">

        export async function load({fetch, page}){
            console.log("channel", page.params.channel_id);
            const url = 'http://localhost:3000/api/templates?' + new URLSearchParams({channel: page.params.channel_id})
            const res = await fetch(url)
            const templates = await res.json()
            
            if (res.ok){
                return {
                    props: {
                        templates
                    }
                }
            }
        }
        
</script> 

<script lang="ts">
    import Template from './Template.svelte';

    export let templates;
    console.log(templates);

    const defaultTemplate = templates.filter(t=> t.used && t.matches.type === "" && t.matches.level === "")[0]
    // const usedTemplates = templates.filter(t => t.used && (t.matches.type != "" || t.matches.level != ""))
    let selectedTemplate = defaultTemplate
    const unusedTemplates = templates.filter(t => ! t.used)
    const usedTemplates = [...unusedTemplates]

</script>

<div class="d-flex h-100">
    
    <div class="w-50 px-5 pb-3 " style="overflow-y: scroll">
        <h2 class="mt-3 text-dark ">Default Template</h2>
        <Template template={defaultTemplate} selected={selectedTemplate == defaultTemplate} on:click={()=>selectedTemplate = defaultTemplate}></Template>


        <h2 class="mt-5 text-dark ">Used Template</h2>
        {#each usedTemplates as template }
            <Template {template} selected={selectedTemplate === template} on:click={()=>selectedTemplate = template }></Template>
        {/each}
            
        
        <h2 class="mt-5 text-dark ">Unused Template</h2>
        {#each unusedTemplates as template}
            <Template {template} selected={selectedTemplate === template} on:click={()=>selectedTemplate = template }></Template>
        {/each}
 
   
    </div>

    
    <div class="w-50 position-relative">
        <div class= "h-100 bg-dark text-white p-4" style="overflow-y: scroll">
            {selectedTemplate.templateString}
        </div>
        <!-- <h2 class="text-right bg-primary shadow-sm">Preview</h2> -->
        
        <div class="position-absolute bottom-0 bg-light w-100   py-2 px-3"> 

            {#if selectedTemplate.used}
                <button class="btn btn-outline-secondary border-2 m-2">Do not use</button>
            {:else}
                <button class="btn btn-outline-secondary border-2 m-2">Use</button>
            {/if}
            <button class="btn btn-outline-primary border-2 m-2">Edit</button> 
            <button class="btn btn-outline-danger border-2 m-2">Delete</button> 

        </div>
    </div>
</div>
