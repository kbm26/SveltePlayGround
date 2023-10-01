<script>
    import { goto } from '$app/navigation'
    import "../app.css";
    import Nav from './navbar.svelte';
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

<Nav/>



<slot/>