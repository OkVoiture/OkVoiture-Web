import {createPostUrl} from "../constants";

async function createPost(name, email, ville, marque, modele, prix, year, photo) {
    try {
        const response = await fetch(
            createPostUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body: JSON.stringify({
                        photo: photo,
                        name: name,
                        email: email,
                        ville: ville,
                        marque: marque,
                        modele: modele,
                        annee: year,
                        prix: prix,
                    }
                ),
            }
        );
        return await response.json();
    } catch (e) {
        console.log(e);
    }
}

export {createPost}