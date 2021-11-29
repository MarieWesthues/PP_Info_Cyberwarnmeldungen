<!-- index for alert overview.
[slug] is for editing alerts
if a new alert is to be created go to alerts/new

-->
<script>
    let objs = [{id: 'soos'}, {id: 'saaas'}]
</script>

{#each objs as obj }
    <div>
        {obj.id}
        <a href="alerts/{obj.id}">click</a>
    </div>
{/each}