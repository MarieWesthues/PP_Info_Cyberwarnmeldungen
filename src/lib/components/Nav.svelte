<script lang="ts">

    export let path;
    console.log(path);
    

    import {
      Collapse,
      Navbar,
      NavbarToggler,
      NavbarBrand,
      Nav,
      NavItem,
      NavLink,
      Dropdown,
      DropdownToggle,
      DropdownMenu,
      DropdownItem
    } from 'sveltestrap';
  
    let isOpen = false;
  
    function handleUpdate(event) {
      isOpen = event.detail.isOpen;
    }

    const navItems = [
        {href: "/send", label: 'Send'},
        {href: "/subscribers", label: "Subscribers"},
        {href: "/groups", label: "Groups"},
        {href: "templates", label: "Templates"}
        ]
</script>
  
  <Navbar color="light" light expand="md">
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
      <Nav class="me-auto" navbar>

        {#key path}
        {#each navItems as {href, label}, i }
        <NavItem>
            <NavLink {href}>{label}</NavLink>
        </NavItem>
    {/each}
    soos {path}
        {/key}

      </Nav>
    </Collapse>
  </Navbar>