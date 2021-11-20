<script>
    import axios from 'axios';

    let inputVal="";

    const clickHandler = () => {
        axios.post('/kittens.json', {
            name: inputVal,
        }).then(console.log)
    }
</script>

<h1 class="font-bold text-xl text-center m-5">Welcome to the kittens input</h1>

Name:<input bind:value={inputVal} class="border border-dark-400 rounded-xl" type="text">
<button  on:click={clickHandler} class="bg-blue-400">Submit</button>