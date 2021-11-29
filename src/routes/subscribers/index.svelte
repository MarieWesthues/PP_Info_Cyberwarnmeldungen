<script>
let subscribers = ["Erkan Alles", "Anna Bolika", "Tim Buktu"]
let emails = [["erkanalles@dings.de"],["annabolika@dings.de"],["timbuktu@dings.de"]]
let groups = [["Group 1, Group 3"],["Group 2"],["Group 1, Group 2"]]

  function deleteMe() {
      
      }

      
    let isOpen = false;

    function editMe(event) {
      isOpen = event.detail.isOpen;
    }

    const navEdit = [
        {href: "/subscribers/[subscriber_id]", label: "Edit"},
        ]

import {Nav, NavLink} from 'sveltestrap';
      
</script>

<main>

<p>Search <input></p>

<div class= "subscribers">
  {#each subscribers as element, i (element)}
      <h4>{element}</h4> <p>{emails[i ++]}</p>
      <p>{groups[i --,i ++]}</p>
      <button on:click={deleteMe}>
        Delete
    </button>
    
    <button on:click={editMe}>
        {#each navEdit as {href, label}, i }
          <Nav vertical>
            <NavLink href="subscribers/[subscriber_id]">{label}</NavLink>
          </Nav>
        {/each}
    </button>
  {/each}
</div>

</main>
 
<style>

</style>