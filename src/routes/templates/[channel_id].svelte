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
    import { Col, Container, Row } from 'sveltestrap';
    import {
    ButtonDropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle
  } from 'sveltestrap';


export let templates;
console.log(templates);

//   export let templates ({}){
//       const defaultTemplate = Array.reduce()
//   }
//   export let templates;
// const defaultTemplate = ? 
// default template ist selected und matcht keinen type oder level (maybe use array.reduce)

// const usedTemplates = (maybe use array.filter)

const defaultTemplate = templates.filter(t=> t.used && t.matches.type === "" && t.matches.level === "")[0]
// const usedTemplates = templates.filter(t => t.used && (t.matches.type != "" || t.matches.level != ""))
let selectedTemplate = defaultTemplate
const unusedTemplates = templates.filter(t => ! t.used)
const usedTemplates = [...unusedTemplates]

</script>


<!-- 1. display default template -->
<!--<div class="defaultTemplate">
    {#each defaultTemplates as template}
    <Template {template} selected={selectedTemplate === template} on:click={()=>selectedTemplate = template }></Template>
{/each}
</div>
<style>
    .defaultTemplate{
        margin-top: 100px;
    }
</style>-->
<!--{#each channels as channel}
            mit "--name:value" könnt ihr css variablen setzen.  
            <a href="templates/{channel.name}" class = --channel:align-items-center style="--channel-primary:{channel.colors.primary}; --channel-primary:{channel.colors.primary}">
                <div class="box rounded d-flex justify-content-center p-3 m-5 "> 
                    <div class= "text-light">{channel.name}</div>
                    <div>
                        <button type="button" id="button" class="btn btn-primary" > </button>
                    </div>
                </div>
            </a>
        {/each} 


 2. iterate over usedtemplates -->
<main>
   <!-- <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Searchbar</span>
        <input type="text" class="form-control" placeholder="search..." aria-label="Search" aria-describedby="basic-addon1">
    </div> -->

<div class="d-flex ">
    
    <div class="m-2 w-50 ">
        <h2 class="text-left">Default Template</h2>
        
        <div class="overflow-auto">
            
            <div class="defaultTemplate " >
                

            <Template template={defaultTemplate} selected={selectedTemplate == defaultTemplate} on:click={()=>selectedTemplate = defaultTemplate}></Template>
            
            </div>
            <div class="usedTemplate">
                <h2 class="text-left">Used Template</h2>
                {#each usedTemplates as template }
                <Template {template} selected={selectedTemplate === template} on:click={()=>selectedTemplate = template }></Template>
                    <!-- <div class="box rounded d-flex justify-content-center p-3 m-5 "> 
                        <div class= "text-light">{template.name}</div>
                        </div> -->
            {/each}
            </div>
            
            <div class="unusedTemplate">
                <h2 class="text-left">Unused Template</h2>
                {#each unusedTemplates as template}
                    <Template {template} selected={selectedTemplate === template} on:click={()=>selectedTemplate = template }></Template>
                        <!-- <div class="box rounded d-flex justify-content-center p-3 m-5 "> 
                            <div class= "text-light">{template.name}</div>
                            </div> -->
            {/each}
            </div>  
    </div>
</div>

    
    <div class="w-50 m-2">
        <h2 class="text-right">Preview</h2>
        <div id= "Preview">
       
        preview : {selectedTemplate.templateString}
        </div>
        <div id = "Button"> 
            <div class="add text-center">
            <form>
                <button class="btn btn-outline-success border-2 m-2">Used</button> 
                <button class="btn btn-outline-secondary border-2 m-2">Not used</button> 
                <button class="btn btn-outline-primary border-2 m-2">Edit</button> 
                <button class="btn btn-outline-danger border-2 m-2">Delete</button> 
            </form>
            </div>
        </div>
    </div>
</div>


<style>
    #Preview{ 
        background: var(--channel-secondary);
        border: 1px solid black;
        height: 100%;
    }
    .defaultTemplate{
        color: var(--channel-on-secondary);
        background-color: var(--channel-primary);
    }
    .usedTemplate{
        margin-top: 100px;
    }
    .unusedTemplate{
        margin-top: 100px;
    }
</style>


</main>

<!-- 3. iterate over unused templates -->



<!-- für preview -->
<!-- <div>
    {selecteTemplate.templateString}
</div> -->



<!-- 

<div class="form-outline">
    <input type="search" id="form1" class="form-control" placeholder="... search"
     aria-label="Search" />
</div>


<p></p>

<Container>

</Container>

    <div class="parent-container d-flex">

        <div class="container">

            <div class="row">
                <ButtonDropdown >
                    <DropdownToggle color="primary" caret>Template Level</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Header</DropdownItem>
                      <DropdownItem>Some Action</DropdownItem>
                      <DropdownItem disabled>Action (disabled)</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Foo Action</DropdownItem>
                      <DropdownItem>Bar Action</DropdownItem>
                      <DropdownItem>Quo Action</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>

                <p></p>
                <h1 class="text-secondary">Templates</h1>
                <div class="col rounded overflow-auto p-4 bg-secondary vh-100 m-3 ml-5 mr-5">
                    <h4 class="text-light">Default Template</h4>
                    <div class="container">
                        <div class="text-center bg-light">
                            <p>Twitter Default Template 3</p>
                        </div>
                        
                    </div>
                    <p></p>
                    <h4 class="text-light">Used Templates</h4>
                    <div class="container">
                        <div class="text-center bg-light">
                            <h6> Phishing Template</h6> 
                            <p>type = "Phishing"</p>
                        </div>
                        <div class="text-center bg-light">
                            <h6>Level 5 Template</h6>
                            <p>level = 5</p>
                        </div>
                        <div class="text-center bg-light">
                            <h6>Level 5 Virus</h6>
                            <p>level = 5  &nbsp &nbsp &nbsp &nbsp  type = "Virus"</p>
                        </div>

                    </div>
                    <p></p>
                    <h4 class="text-light">Unused Templates</h4>
                    <div class="container">
                        <div class="text-center bg-light">
                            <p>Template Name<br> Type <br> Level </p>
                        </div>
                        <div class="text-center bg-light">
                            <p>Template Name<br> Type <br> Level </p>
                        </div>
                        <div class="text-center bg-light">
                            <p>Template Name<br> Type <br> Level </p>
                        </div>
                    </div>                    
                </div>
                <div class="text-center">
                    <button type="button" class="btn btn-primary">Primary</button>
                </div>
            </div>
        </div>

        <div class="container ">
            <div class="row">
                <ButtonDropdown>
                    <DropdownToggle color="primary" caret>Template Type</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Header</DropdownItem>
                      <DropdownItem>Some Action</DropdownItem>
                      <DropdownItem disabled>Action (disabled)</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Foo Action</DropdownItem>
                      <DropdownItem>Bar Action</DropdownItem>
                      <DropdownItem>Quo Action</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
                <p></p>
                <h1 class="text-secondary">Preview</h1>
                <div class="col rounded bg-secondary vh-100 m-3 ml-5 mr-5" placeholder="placeholder">
    
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <button type="button" class="btn btn-info">Edit</button>
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-danger">Delete</button>
                        </div>
                        <div class="w-100"></div>
                        <p></p>
                        <div class="col">
                            <button type="button" class="btn btn-success">Use</button>
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-dark">Do not use</button>
                        </div>
                    </div>
                  </div>
            </div>
        </div>
    </div> -->
