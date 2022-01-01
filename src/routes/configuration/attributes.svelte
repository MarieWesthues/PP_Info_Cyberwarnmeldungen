<script context="module">
    export async function load({fetch}){

        const configurationUrl = `http://localhost:3000/api/configuration`
        const configuration = await fetch(configurationUrl).then(res => res.json())


            return {
                props: {
                    configuration
                }
            }
    }
</script>

<script>
import Select from "$lib/components/Select.svelte";
import axios from "axios";
import { attr } from "svelte/internal";

    export let configuration;
    console.log(configuration);


    function deleteAttribute(attr){
        configuration.messageAttributes = configuration.messageAttributes.filter(a => a!= attr)
        axios.put('http://localhost:3000/api/configuration', configuration.messageAttributes)
    }

    const attributeTypes = ['BOOLEAN', 'MULTISELECT', 'SELECT'] //TEXT noch
    const defaultType = attributeTypes[0]
    let newAttribute = {
        key: "",
        type: defaultType,
        selectOptions: ""
    }

    function addNewAttribute(){
        let {selectOptions, ...newAttributeObj} = newAttribute;
        if (['MULTISELECT', 'SELECT'].includes(newAttributeObj.type)) {
            newAttributeObj.selectOptions = newAttribute.selectOptions.split(",")
        }
        configuration.messageAttributes = [...configuration.messageAttributes, newAttributeObj]
        
        axios.put('http://localhost:3000/api/configuration', configuration.messageAttributes)
        newAttribute = {key: "", type: defaultType, selectOptions: ""};
    }

    
</script>

<div class="container-sm">
    <h1 class="text-center p-4">Alert Attributes</h1>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Key</th>
                <th scope="col">Type</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            {#each configuration.messageAttributes as attribute, i}
                <tr>
                    <th scope="row">{i}</th>
                    <td>{attribute.key}</td>
                    <td>{attribute.type}</td>
                    <td class="text-center">
                        <span on:click={()=> deleteAttribute(attribute)}>
                            <i role="button"  class="fas fa-trash-alt text-danger"></i>
                        </span>
                    </td>
                </tr>
            {/each}
            <tr class="align-middle">
                <th scope="row">
                    <span class="badge bg-primary">New</span>
                </th>
                <td colspan="2">
                    <div class="row my-3">
                        <div class="col">
                            <input class="form-control" bind:value={newAttribute.key}>
                        </div>
                        <div class="col">
                            <Select bind:value={newAttribute.type} options={attributeTypes.map(a => ({value: a, label: a}))}/>
                        </div>
                    </div>
                    <input bind:value={newAttribute.selectOptions} class="form-control" disabled={! ['SELECT', 'MULTISELECT'].includes(newAttribute.type)}  placeholder="option1, option2, option3, ...">
 

                    
                </td>
   
                <td class="text-center">
                    <button class="btn btn-primary" on:click={addNewAttribute} ><i class="fas fa-plus"></i></button>
                </td>
            </tr>
        </tbody>
    </table>

</div>