

<script>
    import Nav from "$lib/components/Nav.svelte";
    // import "smelte/src/tailwind.css"
    import './global_styles.scss';
    import SuccessAlert from "$lib/components/alertSuccess.svelte";
    import NoSuccessAlert from "$lib/components/alertNoSuccess.svelte"; 

    import '@fortawesome/fontawesome-free/js/all';

</script>

<main >
<Nav/>
<SuccessAlert> </SuccessAlert>
<NoSuccessAlert > </NoSuccessAlert>
<div class="content">
    <slot></slot>
</div>
    
</main>

<style>
    .content{
        display: flex;
        flex-direction: column;
        /* overflow-y: scroll; */
        flex-grow: 1;
        /* margin-top: 56px; */
 
    }
    main{
        display: flex;
        padding-top: 56px; /*navbar height*/
        height: 100vh;

    }
</style>