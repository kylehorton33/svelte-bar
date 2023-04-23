// Import db, storage from firebase
import { db, storage } from './firebase';

// Import functions from SDKs
import { collection, getDocs, doc, getDoc, setDoc } from 'firebase/firestore';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { async } from '@firebase/util';

// Return all ingredients from Firestore
export async function getAllIngredients() {
    /**
     * @type {{ slug: string; }[]}
     */
    let ingredients = [];
    const querySnapshot = await getDocs(collection(db, "ingredients"));
    querySnapshot.forEach((doc) => {
        ingredients.push({
            slug: doc.id,
            ...doc.data()
        })
    })
    return { ingredients };
}

/**
 * @param {string} slug
 */
// Return single ingredient by slug
export async function getIngredientBySlug(slug) {
    const docRef = doc(db, "ingredients", slug)
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return {
            slug: docSnap.id,
            ...docSnap.data()
        }
    } else {
        console.log(`Document: ${slug} does not exist`)
    }
}

/**
 * @param {any} slug
 */
// Return image by slug
export async function getImageUrlBySlug(slug) {
    const docRef = ref(storage, `images/${slug}.jpeg`)
    const URL = await getDownloadURL(docRef);
    return URL;
}

// Upload ingredient image
/**
 * @param {Blob | Uint8Array | ArrayBuffer} file
 */
export async function uploadIngredientImage(file) {
    const storageRef = ref(storage, `images/${file.name}`);
    uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded!')
    })
}

/**
 * @param {string} name
 */
function slugify(name) {
    return name
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
		.replace(/[\s_-]+/g, "-")
		.replace(/^-+|-+$/g, "");
}

// Create new ingredient
/**
 * @param {{ name: string; volume: number; quantityRemaining: number, imageName: string; }, image: any;} ingredient
 */
export async function createNewIngredient(ingredient, image) {
    const ingCollection = collection(db, 'ingredients');
    const slug = slugify(ingredient.name)
    const docData = {
        name: ingredient.name,
        volume: ingredient.volume,
        quantityRemaining: ingredient.quantityRemaining,
        imageName: ingredient.imageName
    }
    await setDoc(doc(db, "ingredients", slug), docData);
    await uploadIngredientImage(image);
}