<script>
    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();

    import { DropdownItem } from "sveltestrap";

    export let option;
    export let checked;


    function clickHandler(){
        dispatch('change',{
            value: option.value,
            checked: !checked,
        })
    }
</script>





<DropdownItem on:click={clickHandler}>
    <input type=checkbox bind:checked={checked}> {option.label}
</DropdownItem>