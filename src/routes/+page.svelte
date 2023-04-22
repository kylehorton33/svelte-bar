<script>
	import Search from '$lib/components/Search.svelte';
	import ListItem from '$lib/components/ListItem.svelte';
	
	let f = "";

	export let data;
</script>

<Search bind:filterValue={f} />

<ul>
	{#each data.ingredients as {slug, name}}
		{#if ~name.toUpperCase().indexOf(f.toUpperCase())}
		<ListItem link="/ingredient/{slug}" {name} />
		{/if}
	{/each}
</ul>
