<script>
// @ts-nocheck

	/** @type {import('./$types').PageData} */
    export let data;
</script>

<div class="drink-header">
    <h1>{data.drink.title}</h1>
</div>

<div id="image" />

<div id="serving-selector">
    <input type="button" value="1">
    <input type="button" value="2">
    <input type="button" value="4">
    <input type="button" value="10">
</div>

<div id="ingredients-list">
    <ul>
        <li>1.5 oz Gin</li>
        <li>1.5 oz Campari</li>
        <li>1.5 oz Sweet Vermouth</li>
    </ul>
</div>

<div id="instructions">
    <p>Stir all ingredients with ice. Serve up or with a large ice cube. Garnish with an orange peel.</p>
</div>

<style>
    #image {
		height: 16rem;
		width: 100%;
		background-color: green;
	}
    #serving-selector {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 1rem 0;
    }
    #serving-selector input {
        width: 3rem;
    }
</style>