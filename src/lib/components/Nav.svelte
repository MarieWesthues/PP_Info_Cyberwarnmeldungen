<script>
    

    import {
      Collapse,
      Navbar,
      NavbarToggler,
      NavbarBrand,
      Nav,
      NavItem,
      NavLink,
    } from 'sveltestrap';
import CustomNavLink from './CustomNavLink.svelte';
  
    let isOpen = false;
  
    function handleUpdate(event) {
      isOpen = event.detail.isOpen;
    }

    const navItems = [
        {href: "/alerts", label: 'Send'},
        {href: "/subscribers", label: "Subscribers"},
        {href: "/groups", label: "Groups"},
        {href: "/templates", label: "Templates"}
        ]
</script>
  
  <Navbar color="white" light expand="sm" class="fixed-top shadow-sm ">
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="sm" on:update={handleUpdate}>
      <Nav class="me-auto" navbar>


        {#each navItems as {href, label}, i }
          <NavItem>
              <CustomNavLink {href} {label}/>


          </NavItem>
        {/each}

      </Nav>
    </Collapse>
  </Navbar>