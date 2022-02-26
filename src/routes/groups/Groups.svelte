<script>
    export let group;
    export let subscriberCount = group.subscribers.length;
</script>

<!-- padding start and overflow-hidden because of group color indicator -->
<div class="card mx-auto mb-3 overflow-hidden ps-2" style="max-width: 50rem">
  <!-- Group color indicator -->
  <div class="h-100 position-absolute start-0 " style="width:.5rem; background:{group.color}"></div>

      <div class="flex-grow-1">
        <div class="bg-white card-header d-flex align-items-center justify-content-between ">
          <h5 class="fs-4 m-0">{group.name} </h5>
          <a href="/groups/{group._id}" class="text-decoration-none float-right link-primary fs-5">
              Review <i class="fas fa-chevron-right"></i>
          </a>
        </div>
        <div class="card-body px-4">
          <div class="mb-3">
            <i class="fas fa-users me-2"></i>{subscriberCount} { subscriberCount > 1 ? 'Subscribers' : 'Susbcriber'}
    
          </div>
          <div class="overflow-hidden border-bottom border-1" style="max-height:4rem;">
              {group.description}
          </div>
      </div>
      </div>
</div>


