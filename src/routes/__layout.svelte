<script>
    import Nav from "$lib/components/Nav.svelte";
    import './global_styles.scss';
    import SuccessAlert from "$lib/components/alertSuccess.svelte";
    import NoSuccessAlert from "$lib/components/alertNoSuccess.svelte"; 

    import '@fortawesome/fontawesome-free/js/all';

</script>

<main >
<Nav/>
<SuccessAlert> </SuccessAlert>
<NoSuccessAlert > </NoSuccessAlert>
<div class="content mw-100 align-items-center">
    <slot></slot>
</div>
    
</main>

<style>
    .content{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
    main{
        display: flex;
        padding-top: 56px; /*navbar height*/
        height: 100vh;

    }
</style>