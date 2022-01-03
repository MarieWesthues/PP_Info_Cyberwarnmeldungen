<script>
    import {page} from "$app/stores"
    import { svg_element } from "svelte/internal";

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
        {href: "/alerts", label: 'Send', style: '', faClass: 'fas fa-paper-plane'}, 
        {href: "/templates", label: "Templates", style: '',faClass: 'fas fa-file-alt'}, //fa-file-invoice or fa-file-alt
        {href: "/subscribers", label: "Subscribers", style: '', faClass: 'fas fa-users'},
        {href: "/groups", label: "Groups", style: '',faClass: 'fas fa-users-cog'}, //fa-user-edit or fa-users-cog
        {href: "/history", label: "History", style: '', faClass: 'fas fa-history'}
        ]
</script>
  

  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
    <div class="container-fluid">
      <a href="/">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img class="navbar-brand d-none d-lg-block" style="width:3rem; margin-left:7px; margin-right:10px" src="/logos/icon.png">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img class="navbar-brand d-lg-none" style="width:9rem; margin-left:7px; margin-right:10px" src="/logos/logo.png">
      </a>
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
          <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle rounded-3 mx-1 px-2 ${ $page.path.startsWith("/configuration/") ? 'active bg-primary text-primary' : ''}" style="--bs-bg-opacity: .2; " href="/" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-cog"></i>
                  Configuration
                </a>
                <ul class="dropdown-menu dropdown-menu-white" aria-labelledby="navbarDarkDropdownMenuLink">
                  <li><a class="dropdown-item text-dark ${ $page.path.startsWith("/configuration/attributes") ? 'active bg-primary text-primary' : ''}" style="--bs-bg-opacity: .2;" href="/configuration/attributes">Alert Attributes</a></li>
                  <li><a class="dropdown-item text-dark ${ $page.path.startsWith("/configuration/global") ? 'active bg-primary text-primary' : ''}" style="--bs-bg-opacity: .2;" href="/configuration/global">Global Cert Config</a></li>
                </ul>
              </li>
            </ul>
          </div>          
        </ul>
      </div>
    </div>
  </nav>