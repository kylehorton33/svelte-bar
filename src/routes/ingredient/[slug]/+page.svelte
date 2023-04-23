<script>
	import ImageLoader from  'carbon-components-svelte/src/ImageLoader/ImageLoader.svelte';
	import InlineLoading from 'carbon-components-svelte/src/InlineLoading/InlineLoading.svelte';
	// @ts-nocheck

	/** @type {import('./$types').PageData} */
	export let data;

	let imagePath = data.imageURL;

	$: volume = Math.round((data.quantityRemaining * data.volume) / 1000) * 10;
</script>

<div class="image-container">
	<ImageLoader
		fadeIn
		src={imagePath}
		alt="bottle of {data.name}"
		style="height: 100%; width:100%; object-fit: cover;"
	>
		<svelte:fragment slot="loading">
			<InlineLoading description="Loading image..." />
		</svelte:fragment>
	</ImageLoader>
</div>

<div class="ingredient-header">
	<h1>{data.name}</h1>
	{#if data.subtitle}
		<p>({data.subtitle})</p>
	{/if}
</div>

<div id="quantity">
	<input
		type="range"
		min="0"
		max="100"
		bind:value={data.quantityRemaining}
		class="slider"
		id="quantity-slider"
	/>
	{volume} mL
</div>

<div id="drinks-list">
	<ul>
		<li>The Last Word</li>
		<li>Pina Verde</li>
	</ul>
</div>

<style>
	.image-container {
		top: 0;
		left: 0;
		z-index: 0;
		width: 100%;
		height: 20rem;
		background-color: lightgray;
	}
	#quantity {
		display: inline-block;
		text-align: center;
	}
	.slider {
		opacity: 0.7;
	}
	.slider:hover {
		opacity: 1;
	}
</style>
