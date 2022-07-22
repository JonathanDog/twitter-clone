import {db} from "../../../firebase"
import { collection, onSnapshot, doc } from "firebase/firestore"
import {useEffect, useState} from "react"
import Post from "./Post"
export default function Posts ({searchTerm}) {
    const [posts, setPosts] = useState([])
   
    useEffect(() => {

            const unsubscribe = onSnapshot(collection(db, "posts"), (querySnapshot) => {
                const updatedPosts = [];
                    console.log(querySnapshot)
                querySnapshot.forEach((doc) => {
                    !doc.metadata.hasPendingWrites ? updatedPosts.push(doc.data()) : null;
                });
                console.log(updatedPosts);
                updatedPosts.sort(function (x, y) { return y.timestamp - x.timestamp })
                updatedPosts = updatedPosts.filter((item) => {
                    
                    return item.content.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
                })
                console.log(updatedPosts)
                setPosts(updatedPosts)
            });

            return () =>  unsubscribe();
    },[searchTerm])



    return (<>{posts.map(doc => <Post post={doc} key={doc.id} />)}</> )
}