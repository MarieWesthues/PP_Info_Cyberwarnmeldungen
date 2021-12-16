<script lang="ts">
    import { Alert } from 'sveltestrap';
    export let info="Changes successfully saved!"

  </script>
  
 <Alert id="success" color="success" dismissible style="display: none; width: 300px; position: fixed; right: 10px; top: 80px;"> 
     {info}
 </Alert>

  