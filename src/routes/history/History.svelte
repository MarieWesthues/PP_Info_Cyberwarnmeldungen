<script>
    export let persistedAlert;
</script>

<div class="card mx-auto mb-3" style="max-width: 50rem">
    <div class="bg-white card-header d-flex align-items-center ">
        <h5 class="fs-4 m-0">{persistedAlert.title} </h5> 
        <a href="history/{persistedAlert._id}" class="justify-self-end ms-auto text-decoration-none float-right link-primary fs-5">
            Review <i class="fas fa-chevron-right"></i>
        </a>
    </div>

    <div class="card-body px-4">
        <div class="text-nowrap overflow-hidden mb-3">
            <i class="fas fa-users me-1"></i>
            {#if persistedAlert.intern}
                <span class="badge rounded-pill bg-primary border-primary border border-2">intern</span>
            {/if}
            {#each persistedAlert.selectedGroups as group}
                <a href="/groups/{group._id}" class="text-decoration-none">
                    <span class="badge rounded-pill bg-light border border-2 text-dark me-1 shadow-sm" style="border-color:{group.color} !important">
                        {group.name}
                    </span>
                </a>
            {/each}
        </div>
        <div class="">
            <i class="far fa-calendar-plus me-2"></i>{new Date(persistedAlert.dateCreated).toLocaleString()}
            <i class="fas fa-paper-plane me-0.5"></i> {new Date(persistedAlert.dateSend).toLocaleString()}
        </div>
        <div class="">
            <i class="fas fa-angle-double-up me-2"></i> Level : {persistedAlert.threatLevel}
        </div>
        <div class="">
            <i class="fas fa-question-circle me-0.5"></i> Type: {persistedAlert.threatType}
        </div>
    </div>
</div>