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

<div class="wrapper">
    
    <div class="w-50 px-3 pb-3 templates">
        <h2 class="mt-3 text-dark">Default Template</h2>
        <Template template={defaultTemplate} selected={selectedTemplate == defaultTemplate} on:click={()=>selectedTemplate = defaultTemplate}></Template>


        <h2 class="mt-3 text-dark">Used Template</h2>
        {#each usedTemplates as template }
            <Template {template} selected={selectedTemplate === template} on:click={()=>selectedTemplate = template }></Template>
        {/each}
            
        
        <h2 class="mt-3 text-dark">Unused Template</h2>
        {#each unusedTemplates as template}
            <Template {template} selected={selectedTemplate === template} on:click={()=>selectedTemplate = template }></Template>
        {/each}
 
   
    </div>

    
    <div class="preview w-50">
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
    .wrapper{
        
        height: 100%;
        display: flex;
        /* position: relative; */
    }
    .preview{
        background: blue;
        display: flex;
        flex-direction: column;
    }
    .templates{
        height: 100%;
        overflow-y: scroll;
    }


    #Preview{ 
        display: flex;
        flex-grow: 1;
        background: var(--channel-secondary);
        border: 1px solid black;
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
