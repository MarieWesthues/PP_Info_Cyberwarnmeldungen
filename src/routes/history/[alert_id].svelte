<script context="module">
    import NoSuccessAlert from "$lib/components/alertNoSuccess.svelte";
import MultiSelect from "$lib/components/MultiSelect.svelte";
    import showAndhide, {showSuccess, showNoSuccess} from "$lib/components/showAndhide.svelte";
    
    
        function EmptyPersistedAlerts(){
                this.dateCreated= "";
                this.createdBy = "";
                this.threatLevel= "";
                this.threatType="";
                this.title="";
                this.itern=false;
                this.selectedGroups = [];
                this.dateSend= null;
                this.authorizedBy=""
        }
    
        export async function load({page}){
    
            const historyUrl = `http://localhost:3000/api/history`
            const persistedAlerts = await fetch(historyUrl).then(res => res.json())
    
            const url = `http://localhost:3000/api/history/${page.params.alert_id}`;    
            const historyObject = page.params.alert_id === 'new' ? new EmptyPersistedAlerts() : await fetch(url).then(res => res.json())
    
    
                return {
                    props: {
                        historyObject
                      
                    }
                } 
        }
    </script>
    
    
<script>
    import axios from "axios";
    export let historyObject;
    console.log(historyObject);
</script>    

<div class="container">
    <div class="mx-auto " style="max-width: 50rem">
        <h1 class="my-4">Show Alert</h1>

        <div class="mb-3">
            <table class="table">
                <tbody>
                    <tr>
                        <th> Channel Posts</th>
                    </tr>
                    <tr>
                        <td style="border-style: none;" > <a href={historyObject.alertResources[0].resource}> <img src="http://localhost:3000/channel-icons/reddit.png" style="width: 2.5rem; height: 2.5rem;"></a>  Reddit</td>
                    </tr>
                    <tr>
                        <td style="border-style: none;"><a href={historyObject.alertResources[1].resource}><img src="http://localhost:3000/channel-icons/twitter.png" style="width: 2.5rem; height: 2.5rem;"></a>  Twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="mb-3">
            <table class="table">
                <tbody>
                    <tr>
                        <th>Title</th>
                    </tr>
                    <tr>
                        <td style="border-style: none;">{historyObject.title} </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mb-3">
            <table class="table">
                <tbody>
                    <tr>
                        <th> <i class="far fa-calendar-plus me-2"></i> Date Created</th>
                    </tr>
                    <tr>
                        <td style="border-style: none;">{new Date(historyObject.dateCreated).toLocaleString()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mb-3">
            <table class="table">
                <tbody>
                    <tr>
                        <th> <i class="fas fa-paper-plane me-0.5"></i> Date Sent</th>
                    </tr>
                    <tr>
                        <td style="border-style: none;">{new Date(historyObject.dateSend).toLocaleString()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mb-3">
            <table class="table">
                <tbody>
                    <tr>
                        <th>  <i class="fas fa-angle-double-up me-2"></i> Threat Level</th>
                    </tr>
                    <tr>
                        <td style="border-style: none;">{historyObject.threatLevel} </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mb-3">
            <table class="table">
                <tbody>
                    <tr>
                        <th> <i class="fas fa-question-circle me-0.5"></i> Threat Type</th>
                    </tr>
                    <tr>
                        <td style="border-style: none;"> {historyObject.threatType} </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mb-3">
            <table class="table">
                <tbody>
                    <tr>
                        <th>Groups</th>
                    </tr>
                    <tr>
                        <td style="border-style: none;">{#each historyObject.selectedGroups as group}  <a href="/groups/{group._id}" class="text-decoration-none">
                            <span class="badge rounded-pill bg-light border border-2 text-dark me-1 shadow-sm" style="border-color:{group.color} !important">
                                {group.name}
                            </span>
                        </a>
                    {/each} </td>
                    </tr>
                    <tr>
                        <th> Intern</th>
                    </tr>
                    <tr>
                        <td style="border-style: none;"> {#if historyObject.intern}
                           <i class="fas fa-check me-0.5"></i>
                            {:else}
                            <i class="fas fa-times me-0.5"></i>
                        {/if} 
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
