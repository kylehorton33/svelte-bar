<script>
	import ListItem from './ListItem.svelte';
	/**
	 * @type {{ summaries: any; }}
	 */
	export let data;
</script>

<div id="search-bar">
	<input type="text" id="drink-search" placeholder="Search bar..." />
</div>

<ul>
	{#each data.summaries as { slug, title }}
		<ListItem type="ingredient" {slug} {title} />
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
		height: 1.3rem;
		border-radius: 1rem;
	}
</style>
