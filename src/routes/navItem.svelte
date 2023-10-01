<script>
    import {page} from '$app/stores'
    import  {open} from './navbar.svelte'
    export let  active = $page.url.pathname  
    export let href = ''
    export let name = ''
    
    
 


</script>


<li class="mx-4 my-6 md:my-0">
    <a class=" text-lg text-teal-400"  href={href}>{name}</a>
</li>
