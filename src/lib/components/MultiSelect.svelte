<script>
    import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'sveltestrap';
    import Option from './Option.svelte';
    import {createEventDispatcher} from 'svelte';


    const dispatch = createEventDispatcher();

    export let options;
    export let values;
    export let title;

    let isOpen = false;

    function changeHandler(detail){
        let checked = values.includes(detail.value);
        if (!checked) {
            values = [...values, detail.value]
        }else{
            values = values.filter(val => val != detail.value)
        }
        dispatch('change', values);
    }

    function toggleAll(){
        let allChecked = values.length === options.length;

        if (allChecked) {
            values = []
        }else{
            values = options.map(o => o.value)
        }
        dispatch('change', values);
    }
</script>



<Dropdown  class="custom-dropdown" >
    <DropdownToggle class="custom-dropdown__toggle" caret>{values}</DropdownToggle>
        <DropdownMenu class="custom-dropdown__menu" >
            {#each options as option}
                <DropdownItem on:click={()=> changeHandler(option)}>
                    <input type=checkbox checked={values.includes(option.value)}> {option.label}
                </DropdownItem>
                <!-- <Option {option} checked={values.includes(option.value)} on:change={changeHandler} /> -->
            {/each}
    
            <DropdownItem on:click={toggleAll}>
                <input type=checkbox checked={values.length === options.length}> all
            </DropdownItem>
        </DropdownMenu>

</Dropdown>

<style>
    :global(.custom-dropdown__toggle){
        overflow: hidden;
    }
    :global(.custom-dropdown__toggle, .custom-dropdown__menu){
        position: relative;
        width: 300px;
    }
</style>