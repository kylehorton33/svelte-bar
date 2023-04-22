<script>
	import { Search } from 'carbon-components-svelte';

	export let filterValue = "";

	function handleInput() {
		console.log(filterValue)
	}
</script>

<Search bind:value={filterValue} on:input={handleInput} placeholder="Search bar..." />
