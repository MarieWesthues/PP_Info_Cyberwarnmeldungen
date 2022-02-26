 <script context="module" lang="ts">

        export async function load({fetch, page}){

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
    import NewButton from '$lib/components/NewButton.svelte';
    import axios from 'axios';
    import { onMount } from 'svelte';
    import Template from './Template.svelte';

    export let templates;


    // modal stuff
    let modalRef;
    let myModal;
    onMount(async()=>{
        myModal = new bootstrap.Modal(modalRef);
    })

    let collidingTemplate;

    
    let usedTemplates = templates.filter(t => t.used)
    let unusedTemplates = templates.filter(t => ! t.used)
    $: defaultTemplate = usedTemplates.find(t=> t.matches.type === "" && t.matches.level === "")
    let selectedTemplate = usedTemplates.find(t=> t.matches.type === "" && t.matches.level === "")

    

    function doNotUseTemplate(template){
        template.used = false;
        axios.put(`http://localhost:3000/api/templates/${template._id}`,{used: false})
        unusedTemplates = [...unusedTemplates, template]
        usedTemplates = usedTemplates.filter(t => t!= template);
    }

    function useTemplate(template){
        let {type, level} = template.matches;

        // find template collision
        collidingTemplate = usedTemplates.find(t => {
            return (t.matches.level === level) && (t.matches.type === type)
        })
   
        if (collidingTemplate) {
            myModal.show()
        }else{
            template.used = true;
            axios.put(`http://localhost:3000/api/templates/${template._id}`,{used: true})
            unusedTemplates = unusedTemplates.filter(t => t!= template)
            usedTemplates = [...usedTemplates, template]; 
        }
    }

    // will use the selected template and unuse the colliding template
    function useTemplateInsteadOf(newTemplate, oldTemplate){
        myModal.hide()
        doNotUseTemplate(oldTemplate)

        newTemplate.used = true;
        axios.put(`http://localhost:3000/api/templates/${newTemplate._id}`,{used: true})
        unusedTemplates = unusedTemplates.filter(t => t!= newTemplate)
        usedTemplates = [...usedTemplates, newTemplate]; 
    }

    function deleteTemplate(template){
        axios.delete(`http://localhost:3000/api/templates/${template._id}`)
        unusedTemplates = unusedTemplates.filter(t => t!= template);
        usedTemplates = usedTemplates.filter(t => t!= template);
    }

</script>

<div class="d-flex h-100 w-100">
    
    <div class="w-50 position-relative " >
        <div class="px-5 pb-3 h-100" style="overflow-y: scroll">

            <h2 class="mt-5 text-dark ">Used Template</h2>
            {#each usedTemplates as template }
                <Template {template} selected={selectedTemplate === template} isDefault={defaultTemplate === template} on:click={()=>selectedTemplate = template }></Template>
            {/each}
                
            
            <h2 class="mt-5 text-dark ">Unused Template</h2>
            {#each unusedTemplates as template}
                <Template {template} selected={selectedTemplate === template} isDefault={defaultTemplate === template} on:click={()=>selectedTemplate = template }></Template>
            {/each}
        </div>
        
 
        <div class="position-absolute bottom-0 end-0 pe-5 pb-5">
            <a href="http://localhost:3000/templates/edit/new">
                <button type="button" class="btn btn-primary btn-lg">
                    +
                </button>
            </a>
        </div>
    </div>

    
    <div class="w-50 position-relative">
        <div class= "h-100 bg-dark text-white p-4" style="overflow-y: scroll">
            {selectedTemplate.templateString}
        </div>
        
        <div class="position-absolute bottom-0 bg-light w-100   py-2 px-3"> 

            
            <a href="http://localhost:3000/templates/edit/{selectedTemplate._id}">
                <button class="btn btn-outline-primary border-2 m-2">
                    <i class="fas fa-edit"></i> Edit
                </button>
            </a> 
            <button class="btn btn-outline-danger border-2 m-2" class:disabled={selectedTemplate === defaultTemplate} on:click={()=> deleteTemplate(selectedTemplate)}>
                <i class="fas fa-trash-alt"></i> Delete
            </button> 
            {#if selectedTemplate.used}
                <button class="btn btn-outline-secondary border-2 m-2 " class:disabled={selectedTemplate === defaultTemplate} on:click={()=> doNotUseTemplate(selectedTemplate)}>
                    <i class="fas fa-folder-minus"></i> Do not use
                </button>
            {:else}
                <button class="btn btn-outline-secondary border-2 m-2" on:click={()=> useTemplate(selectedTemplate)} >
                    <i class="fas fa-folder-plus"></i> Use
                </button>
            {/if}
        </div>
    </div>
</div>


<!-- Modal -->
<div class="modal fade" bind:this={modalRef} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          {#if collidingTemplate}
          A template for type {selectedTemplate.matches.type} and level {selectedTemplate.matches.level} already exists. 
          Do you want to use "{selectedTemplate.name}" instead of "{collidingTemplate.name}" ?
          {/if}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
          <button type="button" class="btn btn-primary" on:click={()=> useTemplateInsteadOf(selectedTemplate, collidingTemplate)}>Yes</button>
        </div>
      </div>
    </div>
  </div>