<!-- Module Scripts werden auf dem Server ausgeführt -->
<script context="module">
    // API requests sollten in einem module ausgeführt werden, damit die Notwendigen Daten schon bei Page load zur verfügung stehen
    
    // Für mehr info über die load function siehe => https://kit.svelte.dev/docs#loading
    export async function load({fetch}){
        const url = '/api/channel';
        const res = await fetch(url)
        const channels = await res.json()
    
        // Inhalt von props wird Komponenten als properties zur verfügung gestellt
        if (res.ok){
            return {
                props: {
                    channels
                }
            }
        }
    }
    </script>
    
    <!-- Use lang="ts" for typescript support -->
    <script lang="ts">
        // In dem alerst property kann man nun auf die API response zugreifen
        export let channels;
    
    </script>
    
    
    <html lang="en">
        <body>
            
           {#each channels as channel} 
                <!--erste Bootstrap Komponente wuw-->
                <div class="rounded"> {channel.name}
                    <!-- <button type="button" id="button" class="btn btn-primary pull-right"  on:click={()=> setSelection(obj)}> Review </button> -->
                    <a href="alerts/{channel._id}">athenticate</a>
                </div>
            {/each}
        
            
            <!-- <button type="button" id="Hinzufügen" class="btn btn-primary pull-right"  on:click= {() => addMessage()}> + </button>  -->
            
        </body>
    </html>
    
    
    <style>
        .rounded
        {
            background-color: white;
            color: red;
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 5%;
            height: 100px;
            width: 150px;
        }
    
    
    </style>
    
    
    
    