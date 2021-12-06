<script lang="ts">
    import { Col, Container, Row } from 'sveltestrap';
    import {
    ButtonDropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle
  } from 'sveltestrap';
</script>




<div class="form-outline">
    <input type="search" id="form1" class="form-control" placeholder="... search"
     aria-label="Search" />
</div>


<p></p>

<Container>

</Container>

    <div class="parent-container d-flex">

        <div class="container">

            <div class="row">
                <ButtonDropdown >
                    <DropdownToggle color="primary" caret>Template Level</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Header</DropdownItem>
                      <DropdownItem>Some Action</DropdownItem>
                      <DropdownItem disabled>Action (disabled)</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Foo Action</DropdownItem>
                      <DropdownItem>Bar Action</DropdownItem>
                      <DropdownItem>Quo Action</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>

                <p></p>
                <h1 class="text-secondary">Templates</h1>
                <div class="col rounded overflow-auto p-4 bg-secondary vh-100 m-3 ml-5 mr-5">
                    <h4 class="text-light">Default Tempalte</h4>
                    <div class="container">
                        <div class="text-center bg-light">
                            <p>Twitter Default Tempalte 3</p>
                        </div>
                        
                    </div>
                    <p></p>
                    <h4 class="text-light">Used Tempaltes</h4>
                    <div class="container">
                        <div class="text-center bg-light">
                            <h6> Phishing Template</h6> 
                            <p>type = "Phishing"</p>
                        </div>
                        <div class="text-center bg-light">
                            <h6>Level 5 Template</h6>
                            <p>level = 5</p>
                        </div>
                        <div class="text-center bg-light">
                            <h6>Level 5 Virus</h6>
                            <p>level = 5  &nbsp &nbsp &nbsp &nbsp  type = "Virus"</p>
                        </div>

                    </div>
                    <p></p>
                    <h4 class="text-light">Unused Templates</h4>
                    <div class="container">
                        <div class="text-center bg-light">
                            <p>Template Name<br> Type <br> Level </p>
                        </div>
                        <div class="text-center bg-light">
                            <p>Template Name<br> Type <br> Level </p>
                        </div>
                        <div class="text-center bg-light">
                            <p>Template Name<br> Type <br> Level </p>
                        </div>
                    </div>                    
                </div>
                <div class="text-center">
                    <button type="button" class="btn btn-primary">Primary</button>
                </div>
            </div>
        </div>

        <div class="container ">
            <div class="row">
                <ButtonDropdown>
                    <DropdownToggle color="primary" caret>Template Type</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Header</DropdownItem>
                      <DropdownItem>Some Action</DropdownItem>
                      <DropdownItem disabled>Action (disabled)</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Foo Action</DropdownItem>
                      <DropdownItem>Bar Action</DropdownItem>
                      <DropdownItem>Quo Action</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
                <p></p>
                <h1 class="text-secondary">Preview</h1>
                <div class="col rounded bg-secondary vh-100 m-3 ml-5 mr-5" placeholder="placeholder">
    
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <button type="button" class="btn btn-info">Edit</button>
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-danger">Delete</button>
                        </div>
                        <div class="w-100"></div>
                        <p></p>
                        <div class="col">
                            <button type="button" class="btn btn-success">Use</button>
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-dark">Do not use</button>
                        </div>
                    </div>
                  </div>
            </div>
        </div>
    </div>
