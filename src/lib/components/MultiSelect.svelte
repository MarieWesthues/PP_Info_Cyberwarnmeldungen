<script>
    import {Dropdown, DropdownToggle, DropdownMenu} from 'sveltestrap';
    import Option from './Option.svelte';
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();

    export let options;
    export let values;
    export let title;

    

    function changeHandler({detail}){
        if (detail.checked) {
            values = [...values, detail.value]
        }else{
            values = values.filter(val => val != detail.value)
        }
        dispatch('change', values);
    }
</script>



<Dropdown>
    <DropdownToggle caret>{title}</DropdownToggle>
    <DropdownMenu>
        {#each options as option}
            <Option {option} checked={values.includes(option.value)} on:change={changeHandler} />
        {/each}
    </DropdownMenu>
</Dropdown>