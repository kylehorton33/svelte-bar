import { db, storage } from '../firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';


export async function getAllIngredients() {
    /**
     * @type {{ slug: string; title: any; }[]}
     */
    let ingredients = []
    const querySnapshot = await getDocs(collection(db, "ingredients"));
    querySnapshot.forEach((doc) => {
        ingredients.push({slug: doc.id, title: doc.data().name})
    })
    return { summaries: ingredients };
}

/**
 * @param {string} slug
 */
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
export async function getImageUrlBySlug(slug) {
    const docRef = ref(storage, `images/${slug}.jpeg`)
    const URL = await getDownloadURL(docRef);
    return URL;
}