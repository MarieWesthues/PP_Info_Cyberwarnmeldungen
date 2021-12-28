<script>
    import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'sveltestrap';
    import Option from './Option.svelte';
    import {createEventDispatcher} from 'svelte';


    const dispatch = createEventDispatcher();

    export let options;
    export let values;
    export let title;

    $: selectedOptions = options.filter(o => values.includes(o.value)).map(o => o.label)

    let isOpen = false;

    function changeHandler(detail){
        console.log(options, values, selectedOptions);
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


<div class="btn-group w-100 mw-100 position-relative" >
    <button class="rounded btn btn-primary bg-light text-dark border-dark w-100 mw-100 d-flex justify-content-between" type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" >
        <div class="text-nowrap overflow-hidden me-2">
            {selectedOptions}
        </div>
        <div class="">
            <i class="fas fa-chevron-down "></i>
        </div>
    </button>
    <ul class="dropdown-menu w-100" aria-labelledby="dropdownMenuClickableInside" >
        {#each options as option}
            <li>
                <button class="dropdown-item" on:click={()=> changeHandler(option)}>
                    <input type=checkbox checked={values.includes(option.value)}> {option.label}
                </button>
            </li>
        {/each}
        <li><hr class="dropdown-divider"></li>
        <li>
            <button class="dropdown-item" on:click={toggleAll}>
                <input type=checkbox checked={values.length === options.length}> all
            </button>
        </li>
      </ul>
</div>

<!-- <Dropdown  class="custom-dropdown" >
    <DropdownToggle class="custom-dropdown__toggle" caret>{selectedOptions}</DropdownToggle>
        <DropdownMenu class="custom-dropdown__menu" >
            {#each options as option}
                <DropdownItem >
                    <input type=checkbox checked={values.includes(option.value)}> {option.label}
                </DropdownItem>
                
            {/each}
    
            <DropdownItem on:click={toggleAll}>
                <input type=checkbox checked={values.length === options.length}> all
            </DropdownItem>
        </DropdownMenu>
</Dropdown> -->

<style>
    :global(.custom-dropdown__toggle){
        overflow: hidden;
        width: 15rem;
    }
    :global(.custom-dropdown__toggle, .custom-dropdown__menu){
        position: relative;
        width: 15rem;
        
    }
   
</style>