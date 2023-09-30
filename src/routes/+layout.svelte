<script>
    import { goto } from '$app/navigation'
    import "../app.css";
    import Hamburger from 'svelte-hamburger';
    //keyword used to search for the show
    let searchedShow;
    let open = false;
    let duoLine = false;
    //keylistener so pressing `enter` will search for a show
    function searchEnter(event){
      if(event.key === "Enter"){
        search();
      };
    };

    function Nav(e){
      open = !open
      let name = e.currentTarget.name
      let list = document.querySelector('ul');
      console.log(e.currentTarget)
      open ? (!open, list.classList.add('top-[80px]') , list.classList.add('opacity-100'))
       : (open, list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'))
      

    }

    //onclick event for search
    function search(){
      if(searchedShow !== undefined){
        goto(`/search/${searchedShow}`);
      };
    };
    
  
</script>
<nav  class="p-5 bg-white shadow md:flex md:items-center z-100 md:justify-between " >
  <div class="flex justify-between items-center">
    <span>
      <a  class="mx-4 text-lg text-teal-400"href="#">logo</a>
    </span>
    <span class="text-3 cursor-pointer mx:2 md:hidden block">
    <Hamburger bind:open bind:duoLine name="menu" on:click={Nav} />
    </span>
  </div>
  <ul class="z-1 md:flex md:items-center md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
    <li class="mx-4 my-6 md:my-0">
      <a class=" text-lg text-teal-400" href="#">logo</a>
    </li>
    <li class="mx-4 my-6 md:my-0">
      <a class=" text-lg text-teal-400" href="#">logo</a>
    </li>   
     <li class="mx-4 my-6 md:my-0">
      <a class=" text-lg text-teal-400" href="#">logo</a>
    </li>    <li class="mx-4 my-6 md:my-0">
      <a class=" text-lg text-teal-400" href="#">logo</a>
    </li> 
    <li class="mx-4 my-6 md:my-0">
      <a class=" text-lg text-teal-400" href="#">logo</a>
    </li>
    <li class="mx-4 my-6 md:my-0">
      <a class=" text-lg text-teal-400" href="#">logo</a>
    </li>   
     <li class="mx-4 my-6 md:my-0">
      <a class=" text-lg text-teal-400" href="#">logo</a>
    </li>    <li class="mx-4 my-6 md:my-0">
      <a class=" text-lg text-teal-400" href="#">logo</a>
    </li> 
  </ul>
</nav>




<slot/>