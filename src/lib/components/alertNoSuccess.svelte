<script lang="ts">
    import { Alert } from 'sveltestrap';
    export let text="Changes could not be saved!"

  </script>
  
 <Alert id="nosuccess" color="danger" dismissible style="display: none; width: 300px; position: fixed; right: 10px; top: 80px;"> 
{text} 
</Alert>

  