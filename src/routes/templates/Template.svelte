<script>
    import { object_without_properties } from "svelte/internal";
    // import selectedObject from "../index.svelte";

    // es muss das on click event weiter geleitet werden. See svelte event propagation oder bubbeling kp wie das heisst
    export let template;
    export let selected;

    let isHovered = false;
    function toggleHover(){
        isHovered = !isHovered;
    }
</script>


<div 
    on:mouseenter={toggleHover} 
    on:mouseleave={toggleHover} 
    class="card mb-3 border-0 "
    class:hover-glow={isHovered && !selected}
    class:selected-glow={selected}
    on:click 
    role="button"
>
    <div class="card-body">
        <h5 class="card-title">{template.name}</h5>
        {#if template.matches.type}
            <span class="badge rounded-pill bg-dark">Type: {template.matches.type}</span>
            
        {/if}

        {#if template.matches.level}
            <span class="badge rounded-pill bg-primary">Level: {template.matches.level}</span>
        {/if}
    </div>
    
</div>
   
    <style>
        .selected-glow{
            box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 70%)
        }
        .hover-glow{
            box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 40%)
        }
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

