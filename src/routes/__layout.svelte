

<script>
    import Nav from "$lib/components/Nav.svelte";
    // import "smelte/src/tailwind.css"
    import './global_styles.scss';
    import SuccessAlert from "$lib/components/alertSuccess.svelte";
    import NoSuccessAlert from "$lib/components/alertNoSuccess.svelte"; 

</script>

<Nav/>
<SuccessAlert> </SuccessAlert>
<NoSuccessAlert > </NoSuccessAlert>
<main class="content">
    <slot></slot>
</main>

<style>
    .content{
        margin-top: 70px;
    }
</style>