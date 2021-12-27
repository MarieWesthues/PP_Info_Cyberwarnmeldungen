<script>
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
    class="card mb-3  "
    class:hover-glow={isHovered && !selected}
    class:selected-glow={selected}
    class:border-white={selected || isHovered}
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

</style>


