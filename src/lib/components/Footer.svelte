<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import FaSolidWineBottle from 'svelte-icons-pack/fa/FaSolidWineBottle';
    import FaSolidWineGlassAlt from 'svelte-icons-pack/fa/FaSolidWineGlassAlt';
</script>

<footer>
	<p>
        <a href="/">
            <Icon src={FaSolidWineBottle} />
        </a>
        <a href="/drinks">
            <Icon src={FaSolidWineGlassAlt} />
        </a>
	</p>
</footer>

<style>
	footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		text-align: center;
        
        background-color: lightgrey;
	}
    footer p {
        display: flex;
        justify-content: space-between;
        margin: 1rem 6rem;
    }
    footer a {
        text-decoration: none;
        text-transform: uppercase;
        color: gray;
    }
</style>
