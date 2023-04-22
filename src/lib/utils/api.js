// Import db, storage from firebase
import { db, storage } from './firebase';

// Import functions from SDKs
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';

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