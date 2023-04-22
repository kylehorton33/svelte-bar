<script>
	import Search from '$lib/components/Search.svelte';
	import ListItem from '$lib/components/ListItem.svelte';
	
	export let data;
</script>

<Search />

<ul>
	{#each data.ingredients as {slug, name}}
		<ListItem type="ingredient" {slug} {name} />
	{/each}
</ul>
