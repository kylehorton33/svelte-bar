<script>
    export let type;
    export let name;
    export let slug;
</script>

<li>
    <a href="/{type}/{slug}">{name}</a>
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