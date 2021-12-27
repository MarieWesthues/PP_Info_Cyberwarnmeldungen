<script>
    import {NavLink} from 'sveltestrap';
    import {page} from "$app/stores"
    export let href;
    export let label;

    $:active= $page.path.startsWith(href)
</script>


{#if active}
    <NavLink 
        class="bg-primary rounded-3 mx-1 px-2 text-primary custom-navlink" 
        style="--bs-bg-opacity: .2;"
        {href}>
        {label}
    </NavLink>


{:else}
    <NavLink class=" rounded-3 mx-1 px-2 custom-navlink"  {href}>
        <i class="fa-solid fa-envelopes-bulk"></i>{label}
    </NavLink>
{/if}


<style>
    :global(.custom-navlink){
        font-weight: 600;
    }

</style>