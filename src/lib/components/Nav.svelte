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
        {href: "/history", label: "History", style: '', faClass: 'fas fa-history'},
        {href: "/subscribers", label: "Subscribers", style: '', faClass: 'fas fa-users'},
        {href: "/groups", label: "Groups", style: '',faClass: 'fas fa-users-cog'}, //fa-user-edit or fa-users-cog
        {href: "/templates", label: "Templates", style: '',faClass: 'fas fa-file-alt'} //fa-file-invoice or fa-file-alt
        ]
</script>
  

  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">ConnCERT</a>
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