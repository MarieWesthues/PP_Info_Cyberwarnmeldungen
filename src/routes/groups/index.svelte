<script>
let groups = ["Group 1", "Group 2", "Group 3"]
let members = [["Erkan Alles, Tim Buktu"],["Anna Bolika, Tim Buktu"],["Erkan Alles"]]

function deleteMe() {
      
    }

function editMe() {
      
    }
 
  let isOpen = false;

  function addGroup(event) {
    isOpen = event.detail.isOpen;
  }

  const navAdd = [
      {href: "/groups/[group_id]", label: "+"},
      ]

import {Nav, NavLink} from 'sveltestrap';

</script>

<main>

    <p>Search <input></p>

    <div class= "groups">
        {#each groups as element, i (element)}
            <h4>{element}</h4><p>Members: {members[i ++]}</p>

            <button on:click={deleteMe}>
                Delete
            </button>

            <button on:click={editMe}>
                Edit
            </button>
        {/each}
    </div>

      <button on:click={addGroup}>
        
          {#each navAdd as {href, label}, i }
          <Nav vertical>
            <NavLink href="groups/[group_id]">{label}</NavLink>
          </Nav> 
          {/each}
        
      </button>

</main>