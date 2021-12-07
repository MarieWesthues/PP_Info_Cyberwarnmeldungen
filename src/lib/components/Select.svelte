<script>

    import Option from "./Option.svelte";
    import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "sveltestrap";
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();

    export let title;

    export let value;

    export let options;
    // options must be array of type [{value:String, label: String}]

    function changeHandler({detail}){
        value = detail.value
        dispatch('change', value);
    }

</script>


<Dropdown>
    <DropdownToggle caret>{title}</DropdownToggle>
    <DropdownMenu>
        {#each options as option}
            <Option {option} checked={value === option.value} on:change={changeHandler} />
        {/each}
    </DropdownMenu>
</Dropdown>

