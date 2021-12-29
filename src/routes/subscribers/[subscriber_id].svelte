<script context="module">
import NoSuccessAlert from "$lib/components/alertNoSuccess.svelte";
import showAndhide, {showSuccess, showNoSuccess} from "$lib/components/showAndhide.svelte";


    function EmptySubscriber(){
            this.email= "";
            this.intern = false;
            this.name= "";
            this.groups = []
    }

    export async function load({page}){

        const groupsUrl = `http://localhost:3000/api/groups`
        const groups = await fetch(groupsUrl).then(res => res.json())

        const url = `http://localhost:3000/api/subscribers/${page.params.subscriber_id}`;

        const subscriber = page.params.subscriber_id === 'new' ? new EmptySubscriber() : await fetch(url).then(res => res.json())


            return {
                props: {
                    subscriber,
                    groups
                }
            }

    }
</script>


<script>
    import axios from "axios";
    import MultiSelect from "$lib/components/MultiSelect.svelte";

    export let subscriber 
    // man kann keinen attribute eines objekts binden. Deshalb müsssen attribute welche gebunden werden sollen destructured werden.

    export let groups;



    async function saveSubscriber(){
        if (subscriber._id) {
            axios.put(`http://localhost:3000/api/subscribers/${subscriber._id}`,subscriber)
            showSuccess()
        }
        else {
            // validation fehlt noch
            let res= await axios.post('http://localhost:3000/api/subscribers', subscriber)  
            if(res.status=200){
                subscriber = res.data
                showSuccess()
            }
            
            else{
                showNoSuccess()
            }
            }
           
        }
    async function deleteSubscriber(){
        if (subscriber._id){
            await axios.delete(`http://localhost:3000/api/subscribers/${subscriber._id}`)
            window.location.href = 'http://localhost:3000/subscribers'
        }else{
            window.location.href = 'http://localhost:3000/subscribers'
        }
        
    }


</script>



<div class="container">
    <div class="mx-auto " style="max-width: 50rem">
        <h1 class="my-4">Edit Subscriber</h1>

        <div class="mb-3">
            <label class="form-label">Name</label>
            <input bind:value={subscriber.name} type="text" class="form-control">
        </div>
        <div class="mb-3">
            <label class="form-label">Email</label>
            <input bind:value={subscriber.email} type="text" class="form-control">
        </div>
        <div class="mb-3 form-check">
            <input bind:checked={subscriber.intern} type="checkbox" class="form-check-input" >
            <label class="form-check-label" >intern</label>
        </div>
        <div class="mb-3">
            <label class="form-label">Groups</label>
            <MultiSelect
            title="Groups"
            bind:values={subscriber.groups}
            options={groups.map(g => ({label: g.name, value: g._id}))}
            />
        </div>
        <div class="mb-3 mt-5">
            <button class="btn btn-danger me-3" on:click={deleteSubscriber}>
                Delete Subscriber
            </button>
            <button class="btn btn-outline-dark border-2" on:click={saveSubscriber}>
                Save Subscriber
            </button>
        </div>
    </div>
</div>


