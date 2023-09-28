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
<nav  class="p-5 bg-white shadow md:flex md:items-center z-100 md:justify-between " >
  <div>
    <span>
      <a  class="mx-4 text-lg text-teal-400"href="#">logo</a>
    </span>
  </div>
  <ul class="md:flex md:items-center">
    <li class="mx-4">
      <a class=" text-lg text-teal-400" href="#">logo</a>
    </li>
    <li class="mx-4">
      <a class=" text-lg text-teal-400" href="#">logo</a>
    </li>   
     <li class="mx-4 ">
      <a class=" text-lg text-teal-400" href="#">logo</a>
    </li>    <li class="mx-4 ">
      <a class=" text-lg text-teal-400" href="#">logo</a>
    </li> 
    <li class="mx-4">
      <a class=" text-lg text-teal-400" href="#">logo</a>
    </li>
    <li class="mx-4">
      <a class=" text-lg text-teal-400" href="#">logo</a>
    </li>   
     <li class="mx-4 ">
      <a class=" text-lg text-teal-400" href="#">logo</a>
    </li>    <li class="mx-4 ">
      <a class=" text-lg text-teal-400" href="#">logo</a>
    </li> 
  </ul>
</nav>




<slot/>