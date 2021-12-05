<script>
    export let attribute;

</script>

{#if attribute.type === 'BOOLEAN'}
    <!-- checkbox input ausgeben mit label=key und value=value -->
    <label>
        <input type=checkbox bind:checked={attribute.value}>
        {attribute.key}
    </label>
{:else if attribute.type === 'SELECT'}
    <!-- select input mit lable = key und value = value -->
{:else if attribute.type === 'MULTISELECT'}
    <!-- select input with option multiple -->
{:else if attribute.type === 'TEXT'}
    <!-- text input -->
{/if}