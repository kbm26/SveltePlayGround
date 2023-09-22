<script>
    /** @type {import('./$types').LayoutData} */
</script>
<ul class=navbar>
 <li>
    <a href="/profile/" >
        profile
    </a>
</li>
<li>
    <a href="/search/">
        search
    </a>
</li>
<li>
    <a href="/watchlist/">
        watchlist
    </a>
</li>
<li>
    <a href="/featured/">
        featured
    </a>
</li>

</ul>
<style>
    li{
        float: left;
    }
.navbar{
    display: flex;
    justify-content: space-evenly;
    

}
li a{
    background-color: black;
    display: block;
    color:aliceblue;
    text-decoration: none;
}
li a:hover{
    background-color: aqua;
    color:black
}
.active{
    background-color: blueviolet;
}
</style>    
<slot/>