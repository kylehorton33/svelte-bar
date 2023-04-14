<script>
	// @ts-nocheck

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="ingredient-header">
	<h1>{data.ingredient.title}</h1>
	{#if data.ingredient.subtitle}
		<p>({data.ingredient.subtitle})</p>
	{/if}
</div>

<div id="image" />


<div id="quantity">
	<input
		type="range"
		min="0"
		max="100"
		value={data.ingredient.quantityRemaining * 100}
		class="slider"
		id="quantity-slider"
	/>
		{data.ingredient.volume * data.ingredient.quantityRemaining} mL
</div>

<div id="drinks-list">
	<ul>
		<li>The Last Word</li>
		<li>Pina Verde</li>
	</ul>
</div>

<style>
	#image {
		height: 16rem;
		width: 100%;
		background-color: blue;
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
