<script>
    let name="Emmas";
    let hobbies= ["Kochen","Lesen","Laufen"];
    let hunde=["Lotta","Maya"];
    let 
    src="https://hundepower.de/wp-content/uploads/2019/10/Beagle.jpg";
    </script>
    
    <main class="container mx-auto bg-red-300 flex flex-col items-center">
    <h1 class="heading">
    Wilkommen auf {name} Test Seite!
    </h1>
    
    <p> Meine Hobbies sind {hobbies} . Laufen gehe ich oft mit meinen 
    Hunden: {hunde} . </p>
    <img {src} alt= beagle>
    <ul class="bg-blue-200">
    {#each hunde as hund,i}
    <li>{i+1} {hund}</li>
    {/each}
    </ul>
    </main>