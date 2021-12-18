<script context="module">
import SuccessAlert from "$lib/components/alertSuccess.svelte";
import NoSuccessAlert from "$lib/components/alertNoSuccess.svelte";
export function showSuccess(){
            document.getElementById("success").style.display="block";
            setTimeout(hideSuccess, 3000); 
        }

function hideSuccess(){
        document.getElementById("success").style.display="none";
    }

export function showNoSuccess(){
            document.getElementById("nosuccess").style.display="block";
            setTimeout(hideNoSuccess, 3000); 
        }
        
    function hideNoSuccess(){
        document.getElementById("nosuccess").style.display="none";
    }
    
</script>