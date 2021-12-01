<script>
    import {page} from "$app/stores"

    import {
      Collapse,
      Navbar,
      NavbarToggler,
      NavbarBrand,
      Nav,
      NavItem,
      NavLink,
    } from 'sveltestrap';
  
    let isOpen = false;
  
    function handleUpdate(event) {
      isOpen = event.detail.isOpen;
    }

    const navItems = [
        {href: "/alerts", label: 'Send'},
        {href: "/subscribers", label: "Subscribers"},
        {href: "/groups", label: "Groups"},
        {href: "/templates", label: "Templates"},
        {href: "/channels", label: "Channels"}
        ]
</script>
  
  <Navbar color="primary" dark light expand="md">
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
      <Nav class="me-auto" navbar>


        {#each navItems as {href, label}, i }
          <NavItem>
              <NavLink active={$page.path == href} {href}>{label}</NavLink>
          </NavItem>
        {/each}

      </Nav>
    </Collapse>
  </Navbar>