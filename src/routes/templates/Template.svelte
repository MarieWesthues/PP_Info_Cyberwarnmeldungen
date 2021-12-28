<script>
    export let template;
    export let selected;
    export let isDefault;

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
    <div class="card-body rounded  {isDefault ? "bg-primary text-light" : ""}" >
        <h4 class="card-title">{template.name} </h4>
        {#if template.matches.type}
            <span class="badge rounded-pill bg-dark">Type: {template.matches.type}</span>
        {/if}
        {#if template.matches.level}
            <span class="badge rounded-pill bg-primary">Level: {template.matches.level}</span>
        {/if}
        {#if isDefault}
                <span class="badge rounded-pill bg-light text-dark">Selected Default</span>
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


