<script>
import InputFactory from "./InputFactory.svelte";

    const alertAttributes = [{key: "remote", type: "BOOLEAN", value: false}]
</script>


{#each alertAttributes as attribute}
    <InputFactory attribute={attribute}/>
{/each}
