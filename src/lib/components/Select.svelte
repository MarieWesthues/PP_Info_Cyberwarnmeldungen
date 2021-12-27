<script>

    import Option from "./Option.svelte";
    import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "sveltestrap";
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();

    export let title;

    export let value=""

    export let options;
    // options must be array of type [{value:String, label: String}]

    function changeHandler(option){
        value = option.value
        dispatch('change', value);
    }

</script>


<Dropdown class="custom-dropdown">
    <DropdownToggle class="custom-dropdown__toggle" caret>{title || value}</DropdownToggle>
    <DropdownMenu class="custom-dropdown__menu">
        {#each options as option}
            <DropdownItem on:click={()=> changeHandler(option)}>
                <input type=radio checked={value === option.value}> {option.label}
            </DropdownItem>
        {/each}
        <DropdownItem on:click={()=> changeHandler({value: ""})}>
            <input checked={ value === ""} type=radio  />Select None
        </DropdownItem>

    </DropdownMenu>
</Dropdown>


