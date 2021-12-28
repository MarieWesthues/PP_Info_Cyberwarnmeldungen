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

<div class="btn-group w-100 mw-100 position-relative">
    <button class="rounded btn btn-primary bg-light text-dark border-dark w-100 mw-100 d-flex justify-content-between" type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" aria-expanded="false">
        <div class="text-nowrap overflow-hidden me-2">
            {title || value}
        </div>
        <div class="">
            <i class="fas fa-chevron-down "></i>
        </div>
    </button>
    <ul class="dropdown-menu w-100" aria-labelledby="dropdownMenuClickableInside">
        {#each options as option}
            <li>
                <button class="dropdown-item" on:click={()=> changeHandler(option)}>
                    <input type=radio checked={value === option.value}> {option.label}
                </button>
            </li>
        {/each}
        <li><hr class="dropdown-divider"></li>
        <li>
            <button class="dropdown-item" on:click={()=> changeHandler({value: ""})}>
                <input checked={ value === ""} type=radio  />Select None
            </button>
        </li>
      </ul>
</div>