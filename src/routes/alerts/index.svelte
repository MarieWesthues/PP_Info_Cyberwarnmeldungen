<!-- Module Scripts werden auf dem Server ausgeführt -->
<script context="module">


// API requests sollten in einem module ausgeführt werden, damit die Notwendigen Daten schon bei Page load zur verfügung stehen

// Für mehr info über die load function siehe => https://kit.svelte.dev/docs#loading
export async function load({fetch}){
    const url = '/api/alerts';
    const res = await fetch(url)
    const alerts = await res.json()

    // Inhalt von props wird Komponenten als properties zur verfügung gestellt
    if (res.ok){
        return {
            props: {
                alerts
            }
        }
    }
}
</script>


<!-- Use lang="ts" for typescript support -->
<script lang="ts">
    // In dem alerst property kann man nun auf die API response zugreifen
    export let alerts;
    let objs = [{id: 'soos'}, {id: 'saaas'}]
</script>

{#each alerts as alert }
    <div>
        {alert.title}
        <a href="alerts/{alert._id}">click</a>
    </div>
{/each}

