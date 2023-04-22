<script>
	import ListItem from '$lib/components/ListItem.svelte';
	
	export let data;
	console.log(data.ingredients)
</script>

<div id="search-bar">
	<input type="text" id="drink-search" placeholder="Search bar..." />
</div>

<ul>
	{#each data.ingredients as {slug, name}}
		<ListItem type="ingredient" {slug} {name} />
	{/each}
</ul>

<style>
	#search-bar {
		margin: 2rem 3rem;
		display: flex;
	}
	#search-bar input {
		width: 100%;
		height: 1.3rem;
		border-radius: 1rem;
	}
</style>
