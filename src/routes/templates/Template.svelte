<script>
    import { object_without_properties } from "svelte/internal";
    // import selectedObject from "../index.svelte";

    // es muss das on click event weiter geleitet werden. See svelte event propagation oder bubbeling kp wie das heisst
    export let template;
    export let selected;

</script>

<div on:click class="frame">
    <div class="">
        Channel = {template.name}
    </div>


    {#if selected}
        
    {/if}
</div>

<style>

    .frame{
        background: lightgrey;
        border: 1px solid black;
    }
</style>