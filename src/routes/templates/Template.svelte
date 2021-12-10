<script>
    import { object_without_properties } from "svelte/internal";
    // import selectedObject from "../index.svelte";

    // es muss das on click event weiter geleitet werden. See svelte event propagation oder bubbeling kp wie das heisst
    export let template;
    export let selected;

</script>

<div on:click>
    <div class="">
        greeting = {template.name}
    </div>
    
    <!-- <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6">
                Container Left
            </div>
            <div class="col-lg-6">
                Container Right
            </div>
        </div>
    </div> -->
    
    {#if selected}
        I bims selected
    {/if}
</div>

<style>

    .container-fluid{
        background-color: gray;
    }
</style>