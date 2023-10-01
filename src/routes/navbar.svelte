<script>
    import NavItem from './navItem.svelte';
    let names = ["watchlist","search","featured","profile"]
    let links = ["/watchlist/","/search/","/featured/","/profile/"]
    import Hamburger from 'svelte-hamburger';

    export let open = false;
    
    let duoLine = false;
    function Nav(e){
      open = !open
      let list = document.querySelector('ul');
      console.log(e.currentTarget)
      open ? (!open, list.classList.add('top-[67px]') , list.classList.add('opacity-100'))
       : (open, list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'))
    }
</script>

<nav  class="p-5 bg-white shadow md:flex md:items-center z-100 md:justify-between " >
    <div class="flex justify-between items-center">
      <span>
        <a  class="mx-4 text-lg text-teal-400"href="/">logo</a>
      </span>
      <span class="text-3 cursor-pointer mx:2 md:hidden block">
      <Hamburger bind:open bind:duoLine name="menu" on:click={Nav} />
      </span>
    </div>
    <ul class=" dropdown-content justify-between  w-52 md:flex md:items-center md:static absolute bg-white left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all  duration-500">
        <NavItem bind:name={names[0]} bind:href={links[0]} />
        <NavItem bind:name={names[1]} bind:href={links[1]} />
        <NavItem bind:name={names[2]} bind:href={links[2]} />
        <NavItem bind:name={names[3]} bind:href={links[3]} />
    </ul>
  </nav>
