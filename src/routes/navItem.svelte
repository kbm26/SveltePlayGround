<script> 
    export let href = ''
    export let name = ''
    let active = false;
    let names = ["watchlist","search","featured","profile"]

    $:{
        if(active){

            console.log("k")
            
        }
    }


</script>

<li class="mx-4 my-6 md:my-0">
    <a  on:click={()=> {active = !active} } id={name}  class:active  class=" text-lg text-black"  href={href}>{name}</a>
</li>
