<script>
    import { object_without_properties } from "svelte/internal";
    import selectedObject from "../index.svelte";


    export let obj;
</script>

<div class="">
    Tempalte schmemplate
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


<style>

    .container-fluid{
        background-color: gray;
    }
</style>