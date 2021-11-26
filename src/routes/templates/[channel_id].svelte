<script>
import Template from "./Template.svelte"; "./index.svelte";

    let exampleObjects = [{name: "hallo"}, {name: "moin"}, {name: "was geht?"}]

    let selectedObject = exampleObjects[0];

    let setSelection = (obj) => {
        selectedObject = obj;
    }

</script>

{#each exampleObjects as obj}
    <div on:click={()=> setSelection(obj)}>
        Template <button/> 

    </div>
{/each}

<div>
    selected greeting {selectedObject.name}
</div>