<script>
    export let value;
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();


    $: checked = value === true;

    function changeHandler(){
        dispatch('change', checked)
    }
</script>

<input type='checkbox' bind:checked={checked} on:change={changeHandler}>