<script>
	import { Form, TextInput, NumberInput, Button, Slider, FileUploader } from 'carbon-components-svelte';
    import { createNewIngredient } from '$lib/utils/api';

    let name = '';
    let volume = 750;
    let quantityRemaining = 100;
    let image = null;
    let imageName = '';

    function handleSubmit() {
        if (name && volume && quantityRemaining && imageName) {
            console.log('submit');
            createNewIngredient({
                name,
                volume,
                quantityRemaining,
                imageName
            }, image)
        } else {
            console.log('Complete all fields before submit');
        }
    }

    function handleAdd(e) {
        image = e.detail[0];
        imageName = e.detail[0].name;
        console.log(e);
    }
</script>

<h1>Add Ingredient</h1>
<br />
<br />
<Form on:submit={handleSubmit}>
	<TextInput bind:value={name} labelText="Bottle name" placeholder="Enter name of ingredient..." />
    <NumberInput bind:value={volume} label="Volume in mL" invalidText="Must be a number" />
    <Slider bind:value={quantityRemaining} labelText="Quantity Remaining" />
    <FileUploader on:add={handleAdd} buttonLabel="Add image" kind="tertiary" />
    <br />
	<Button type="submit">Submit</Button>
</Form>