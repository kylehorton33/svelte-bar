<script>
	import Icon from 'svelte-icons-pack/Icon.svelte';
    import FaSolidWineGlassAlt from 'svelte-icons-pack/fa/FaSolidWineGlassAlt';
	import ListItem from "$lib/components/ListItem.svelte";

	/**
	 * @type {{ summaries: any; }}
	 */
	 export let data;
</script>


<div id="search-bar">
	<i>
		<Icon src={FaSolidWineGlassAlt}/>
	</i>
	<input type="text" id="drink-search" placeholder="Search drinks...">
</div>

<ul>
	{#each data.summaries as { slug, name }}
		<ListItem link="/drinks/{slug}" {name} />
	{/each}
</ul>

<style>
	#search-bar {
		margin: 2rem 3rem;
		display: flex;
	}
	#search-bar i {
		margin: 0 0.3rem;
	}
	#search-bar input {
		width: 100%;
	}
</style>