<script>
    export let link, name;
</script>

<li>
    <a href="{link}">{name}</a>
</li>


<style>
    li {
        list-style: none;
        margin: 0.8rem 0;
    }
    a {
        text-decoration: none;
        text-transform: uppercase;
        color: gray;
    }
</style>