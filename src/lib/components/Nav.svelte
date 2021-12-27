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
import CustomNavLink from './CustomNavLink.svelte';
  
    let isOpen = false;
  
    function handleUpdate(event) {
      isOpen = event.detail.isOpen;
    }

    const navItems = [
        {href: "/alerts", label: 'Send', faClass: 'fas fa-search'},
        {href: "/subscribers", label: "Subscribers", faClass: 'fas fa-search'},
        {href: "/groups", label: "Groups", faClass: 'fas fa-search'},
        {href: "/templates", label: "Templates", faClass: 'fas fa-search'}
        ]
</script>
  

  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">ConnCERT</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          {#each navItems as {href, label, faClass} }
            <li class="nav-item">
              <a class="nav-link rounded-3 mx-1 px-2 ${ $page.path.startsWith(href) ? 'active bg-primary text-primary' : ''}" style="--bs-bg-opacity: .2;" {href}>
                <i class={faClass}></i>
                {label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </nav>