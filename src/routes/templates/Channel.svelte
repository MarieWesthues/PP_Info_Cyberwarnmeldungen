<script>
    export let channel;

    let isHovered = false;

    function toggleHover(){
        console.log("sheeeeees");
        
        isHovered = !isHovered;
    }
</script>



<a on:mouseenter={toggleHover} on:mouseleave={toggleHover}  href="/templates/{channel.name}" class="text-decoration-none ">
    <div class="card border-0 text-dark p-3 mb-4 transition-smooth { isHovered ? 'shadow-lg' : 'shadow-sm'}" >
    
        <div class="text-center p-4" style="height: 10rem">
            <img src={channel.logo} alt="" class="img-fluid mh-100 transition-smooth" class:grow={isHovered}>
        </div>
            
        <div class="card-body ">
           <h3 class="card-title text-center transition-smooth" class:text-decoration-underline={isHovered}>{channel.name}</h3>
        </div>
    </div>
</a>

<style>
    .transition-smooth{
        transition: all .1s ease-in-out; 
    }
    .grow{
        transform: scale(1.1);
    }
</style>