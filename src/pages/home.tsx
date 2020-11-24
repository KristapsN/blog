import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import {
    Link,
} from "react-router-dom";
import 'flexboxgrid';
import './home.css'

type Character = {
    id: number,
    title: string
    body: string

}

const Home = () => {
    const [characters, setCharacters] = useState<Character[]>([])
    const [newPageUrl, setNewPageUrl] = useState('https://jsonplaceholder.typicode.com/posts/')
    const [counter, setCounter] = useState(10)
    // const nextPrev = useRef({
    //   next: '',
    //   prev: ''
    // })

  
const loadHandle = () =>{

console.log(counter)
setCounter(counter + 10)

}

    useEffect(() => {
        axios.get(newPageUrl)
            .then(({ data }) => {
                // @ts-ignore
                const filteredCharacters = data.filter((item)=> item.id <= counter && item.id > counter-20).map(({ title, body, id }: Character) => {              
                    return { title, body, id }
                })
                setCharacters([...characters, ...filteredCharacters])
            })
    }, [counter])
   // @ts-ignore
 //   let arr = JSON.parse(localStorage.getItem('coment'))


    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h1>
                            All posted articles
              </h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {characters.map(({ title, body, id }) =>

                        <div key={id} className="col-md-4 col-sm-6 col-12 ">
                              <Link className="link--block" to={`/posts/${id}`}>
                            <div className="preview--wrapper" >
                                <h2>
                                    {title}
                                </h2>
                                <Link className="read-more" to={`/posts/${id}`}>Read more...</Link>
                            </div>
                            </Link>
                        </div>
                    )}
                   
                    
                </div>
                <div className="row center-xs">
                        <div className="col-xs-12">
                            {counter < 100 ? (<button className="comment--button button--load" onClick={()=> loadHandle()}>Load more</button>) 
                            : (<button className="comment--button button--load" disabled>Load more</button>) 
                        }
                            
                        </div>
                    </div>

            </div>
        </section>
    );
}
export default Home; 