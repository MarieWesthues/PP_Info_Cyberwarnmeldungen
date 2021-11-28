<script context="module">
    let path;
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ page, fetch, session, stuff }) {
        path = page.path;

        return {}
	}
</script>

<script>
    import Nav from "$lib/components/Nav.svelte";
    // import "smelte/src/tailwind.css"
    import './global_styles.scss';

</script>

<Nav {path}/>

<slot></slot>
<style>

</style>
<!-- <style windi:preflights:global windi:safelist:global>

</style> -->