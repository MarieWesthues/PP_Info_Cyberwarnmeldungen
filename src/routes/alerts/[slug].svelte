<script lang="ts">
    import { Form, FormGroup, FormText, Input, Label } from 'sveltestrap';
    import { Button, ButtonToolbar } from 'sveltestrap';
    let radioGroup;
  </script>
  
  
    <FormGroup>
      <Label for="exampleEmail">Message Titel</Label>
      <Input plaintext value="" />
    </FormGroup>
       <FormGroup>
      <Label for="exampleEmail">Threat Type</Label>
      <Input plaintext value="" />
    </FormGroup>
       <FormGroup>
      <Label for="exampleEmail">Threat Level</Label>
      <Input plaintext value="" />
    </FormGroup>
    <FormGroup>
          <h1>
              Channel Selection
          </h1>
           <FormGroup>
      <Input id="c1" type="checkbox" label="Twitter" />
          <Input id="c1" type="checkbox" label="Reddit" />	
          <Input id="c1" type="checkbox" label="E-Mail" />
          <Input id="c1" type="checkbox" label="select All" />
    </FormGroup>
          <h1>
              Group Selection
          </h1>
          <FormGroup>
      <Input id="c1" type="checkbox" label="Group A" />
          <Input id="c1" type="checkbox" label="Group B" />	
          <Input id="c1" type="checkbox" label="Group C" />
          <Input id="c1" type="checkbox" label="unaffiliated" />
    </FormGroup>
  </FormGroup>

  <body>
	<ButtonToolbar>
  <Button>Löschen</Button>
  <Button>Speichern</Button>
  <Button>Submit</Button>
</ButtonToolbar>

</body>