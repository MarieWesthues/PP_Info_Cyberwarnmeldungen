

<script>
    import Nav from "$lib/components/Nav.svelte";
    // import "smelte/src/tailwind.css"
    import './global_styles.scss';


</script>

<Nav/>

<main class="content">
    <slot></slot>
</main>

<style>
    .content{
        margin-top: 70px;
    }
</style>