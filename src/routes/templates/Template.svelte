<script>
    import { object_without_properties } from "svelte/internal";
    // import selectedObject from "../index.svelte";

    // es muss das on click event weiter geleitet werden. See svelte event propagation oder bubbeling kp wie das heisst
    export let template;
    export let selected;

</script>

<div on:click class="frame btn-group-toggle" data-toggle="buttons">
    <label class="btn active">
      <input type="checkbox" checked autocomplete="off"> Used
    </label>
    <div class="">
        Channel = {template.name}
    </div>

        {#if template.selected == ""}

        {/if}
</div>
   
    <style>
        
        .frame{
        background: lightgrey;
        border: 1px solid black;
        }

    </style>

 <!--   {#if template.selected == true}
        <span class = "selected border border-2 rounded-pill fw-light fs-6"> Used </span>
    {/if}

    <div class = "template-body">
        <span class = "badge badge-pill-info"> {template.selected} Used</span>
    </div>
</div>

<style>

    .frame{
        background: lightgrey;
        border: 1px solid black;
    }
</style> -->

