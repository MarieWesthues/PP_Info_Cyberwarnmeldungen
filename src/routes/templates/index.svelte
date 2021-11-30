<script>
import Template from "./Template.svelte"; "./index.svelte";

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
                <div class="rounded d-flex justify-content-between"> 
                    <div>Template Beispiel</div>
                    <div>
                        <button type="button" id="button" class=""  on:click={()=> setSelection(obj)}>Edit </button>
                    </div>
                </div>
            </a>
        {/each}
    
        <div class="text">
            selected greeting {selectedObject.name}
        </div>
    </body>

</html>


<style>

    .rounded
     {
        background-color: gray;
        color: white;
        padding: 10px;


        margin: 5%;
        height: 60px;
        width: 500px;
    }



</style>