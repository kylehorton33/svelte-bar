<script>
	// @ts-nocheck

	/** @type {import('./$types').PageData} */
	export let data;

	let imagePath = data.imageURL

	let percentRemaining = data.quantityRemaining * 100;
	$: volume = Math.round((percentRemaining * data.volume) / 1000) * 10;

</script>

<div class="ingredient-header">
	<h1>{data.name}</h1>
	{#if data.subtitle}
		<p>({data.subtitle})</p>
	{/if}
</div>

<div id="image">
	<img src={imagePath} alt="bottle" />
</div>

<div id="quantity">
	<input
		type="range"
		min="0"
		max="100"
		bind:value={percentRemaining}
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
	#image {
		height: 14rem;
		display: flex;
		justify-content: space-around;
	}
	img {
		width: auto;
		height: 100%;
		opacity: 0.4;
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
