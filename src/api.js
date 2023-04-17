import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

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