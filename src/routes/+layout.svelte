<script>
    import { goto } from '$app/navigation'
    import "../app.css";
    //keyword used to search for the show
    let searchedShow;

    //keylistener so pressing `enter` will search for a show
    function searchEnter(event){
      if(event.key === "Enter"){
        search();
      };
    };

    //onclick event for search
    function search(){
      if(searchedShow !== undefined){
        goto(`/search/${searchedShow}`);
      };
    };
    
  
</script>
<div class="flex navbar bg-base-100 ">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a href="/featured/">Homepage</a></li>
          <li><a href="/profile/">Profile</a></li>
          <li><a href="/watchlist/">watchlist</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <a class="btn btn-ghost normal-case text-xl" href="/featured/">TVS For Devs</a>
    </div>
    <div class="navbar-end">
        <div class="flex space-x-0">
          <button on:click={search} class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
            <input on:keyup={searchEnter} input="text" placeholder="Search" bind:value={searchedShow}   class="input max-w-xs" />
            

        </div>
    </div>
  </div>  
<slot/>