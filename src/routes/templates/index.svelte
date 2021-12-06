
<script context="module" lang="ts">
    
import Template from "./Template.svelte"; "./index.svelte";
    
    /*export async function load({fetch}){
        const url = '/api/template';
        const res = await fetch(url)
        const template = await res.json()
    
        if (res.ok){
            return {
                props: {
                    template
                }
            }
        }
    }
    export let template: any;*/


    let exampleObjects = [
        {cert_id: "randomString1", 
        channel: "twitter", 
        name: "Warnmeldung1",
        used: true,
        templatesString: "test",
        usesAttributes: [],
        matches: {type: "maleware", level: "2"}},

        {cert_id: "randomString2", 
        channel: "reddit", 
        name: "Warnmeldung2",
        used: false,
        templatesString: "test",
        usesAttributes: [],
        matches: {type: "scam", level: "1"}},
    
        {cert_id: "randomString3", 
        channel: "e-mail", 
        name: "Warnmeldung3",
        used: true,
        templatesString: "test",
        usesAttributes: [],
        matches: {type: "virus", level: "4"}},
    
        {cert_id: "randomString4", 
        channel: "discord", 
        name: "Warnmeldung4",
        used: true,
        templatesString: "test",
        usesAttributes: [],
        matches: {type: "virus", level: "4"}}
    ];

   // let exampleObjects = [{name: "hallo"}, {name: "moin"}, {name: "was geht?"}]
    
    let selectedObject = exampleObjects[0];
    
    let setSelection = (obj) => {
        selectedObject = obj;
    }
    
</script>

<html lang="en">
    <body>
        

        {#each exampleObjects as obj}
            <!--erste Bootstrap Komponente wuw-->
            <a href="templates/{obj.cert_id}">
                <div class="rounded d-flex justify-content-between p-3 m-5 bg-secondary"> 
                    <div class= "text-light">ChannelName</div>
                    <div>
                        <button type="button" id="button" class="btn btn-primary" on:click={()=> setSelection(obj)}>Edit </button>
                    </div>
                </div>
            </a>
        {/each}
    
    </body>

</html>