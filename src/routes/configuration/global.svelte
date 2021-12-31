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
    export let configuration;

</script>

<div class="container-sm">
    <h1 class="text-center p-4">Cert Config</h1>

    <div class="mx-auto" style="max-width:50rem">
        <div class="mb-3">
            <label class="form-label">CERT Name</label>
            <input bind:value={configuration.name} type="text" class="form-control">
        </div>

        <div class="mb-3">
            <label class="form-label">Reply email</label>
            <input bind:value={configuration.replyEmail} type="text" class="form-control">
        </div>
    </div>


</div>