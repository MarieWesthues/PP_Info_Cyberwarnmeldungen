<script lang="ts">
    import { Alert } from 'sveltestrap';
    export let text="Changes could not be saved!"
</script>
  
 <Alert class="text-center" id="nosuccess" color="danger" style="display: none; width: 18rem; position: fixed; right: 10px; top: 80px;"> 
{text} 
</Alert>


  