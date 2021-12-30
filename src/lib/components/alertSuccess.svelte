<script lang="ts">
    import { Alert } from 'sveltestrap';
    export let info="Changes successfully saved!";

  </script>
  
 <Alert class="text-center" id="success" color="success" style="display: none; width: 18rem; position: fixed; right: 10px; top: 80px;"> 
     {info}
 </Alert>

  