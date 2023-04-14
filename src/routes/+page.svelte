<script>
	import ListItem from './ListItem.svelte';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FaSolidWineBottle from 'svelte-icons-pack/fa/FaSolidWineBottle';
	/**
	 * @type {{ summaries: any; }}
	 */
	export let data;
</script>

<div id="search-bar">
	<i> <Icon src={FaSolidWineBottle} /></i>
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
	}
</style>
