<script>
    let name = 'everyone'
    let ich = 'Dana'
    let hobbies = ["fitness", "badminton","shoppen","kochen"]
    let src = 'https://image.geo.de/30157142/t/TP/v3/w960/r0/-/geminiden-m-prk082-jpg--89650-.jpg';
    let string = 'this string contains some <strong>HTML!!!</strong>';
    let count = 0;
    $: doubled = count * 2;
    $: if (count>=10) {alert('Count ist zu hoch'); count =9;}
    function incrementCount() {count += 1;}
    function handleClick() {count +=1;}
    let x =8;
    let w;
    let h;
    let size = 42;
    let text = 'heeey';
</script>

 <p>{@html string}</p>

 <h1>Hello {name.toUpperCase()}!</h1>

 <img src={src} alt="Sternenhimmel">

 <p class="text-rose-300 font-serif text-2xl">Mein Name ist {ich}</p>


<p>Meine Hobbys sind {hobbies}</p>
<ul class="bg-pink-500 w-1/2">
 {#each hobbies as hobby, i }
     <li>{i+1}) {hobby}</li>
 {/each}
</ul>

 <button class="bg-rose-500 ..." on:click={incrementCount}>
  Clicked {count} {count === 1 ? 'time': 'times'}
 </button>


<button class="bg-violet-400 hover:bg-violet-900 border-style: double;..." on:click={handleClick}> 
    Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
<p>{count} doubled is {doubled}</p>

{#if x > 10}
 <p>{x} ist größer als 10</p>
 {:else if 5 > x}
 <p>{x} ist kleiner als 5</p>
 {:else}
 <p>{x} liegt zwischen 5 und 10</p>
 {/if}

<input type=range bind:value={size}>
<input bind:value={text}>

<p>size: {w}px x {h}px</p>

<div bind:clientWidth={w}
bind:clientHeight={h}>
    <span style="font-size: {size}px">
   {text}</span>
   </div>
   <style>
       input { display: block;}
       div { display: inline-block;}
       span { word-break: break-all;}
   </style>
