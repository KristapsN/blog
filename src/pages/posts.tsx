import React, { useEffect, useState, useRef } from 'react';
import {
    useParams,
    useHistory
} from "react-router-dom";
import axios from 'axios'
import "./posts.css"

type Coment = {
    name: string;
};

const Posts = () => {
    const [coment, setComent] = useState<Coment[]>([]);
    const [inputComent, setInputComent] = useState('');

    const [onePost, setOnePost] = useState<{ id: string, title: string, body: string }>()

    // const history = useHistory()


    let { ids } = useParams<{ ids: string }>();
    console.log(ids)

     localStorage.setItem('coment', JSON.stringify(coment))  
    // @ts-ignore
    let localComents = JSON.parse(localStorage.getItem('coment'))

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${ids}`)
            .then((response) => {
                setOnePost(response.data)
                console.log(response.data)

                //   if (!response.data) {
                //     history.push("/404") 
                // }
            })
    }, [])

    const inputChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputComent(e.target.value);
    };
    const buttonClickHandler = () => {
        if (inputComent !== '') {
            setComent([
                ...coment,
                {
                    name: inputComent
                },]);
            setInputComent('');
        }
    };

    return (
        <div className="constainer">
            <div className="row">
                <div className="col-xs-12">
                    <div className="col-xs-offset-3 col-xs-6">
                        <h1>{onePost?.title}</h1>
                        <p>{onePost?.body}</p>
                        <div>
                            <h2>Comments</h2>

                            {  // @ts-ignore} 
                                localComents.map((item) =>
                                    <div className="comment--out">
                                        <p>{item.name}</p>
                                    </div>
                                )}
                            <textarea className="comment--input"
                                // type=""
                                value={inputComent}
                                onChange={(e) => inputChangeHandler(e)}
                            />
                            <button className="comment--button" type="button" onClick={buttonClickHandler}>
                                Add comment
                             </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Posts;