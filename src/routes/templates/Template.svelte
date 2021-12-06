<script>
    import { object_without_properties } from "svelte/internal";
    import selectedObject from "../index.svelte";


    export let obj;
</script>

<div class="">
    Template schmemplate
    greeting = {obj.name}
</div>

<div class="container-fluid">
    <div class="row">
        <div class="col-lg-6">
            Container Left
        </div>
        <div class="col-lg-6">
            Container Right
        </div>
    </div>
</div>

<div class="text">
            selected greeting {selectedObject.name}
        </div>

<style>

    .container-fluid{
        background-color: gray;
    }
</style>