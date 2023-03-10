import styles from './NewPost.module.css';
import {useState}from 'react';
import Modal from '../components/Modal';
import { Link, useNavigate } from 'react-router-dom';

function NewPost ({ onAddPost}){

    const [enterBody,setEnterBody] = useState('');
    const [enterAuthor,setEnterAuthor] = useState('');

    const navigate = useNavigate();

    function bodyChangeHandler(event){
        setEnterBody(event.target.value);
    }

    function AuthorChangeHandler(event){
        setEnterAuthor(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault(); // 페이지가 새로고침하는것을 방지한다.
        const postData = {
            body : enterBody,
            author : enterAuthor
        } 
        console.log(postData)
        onAddPost(postData);
        navigate('/');
    }


    return(
        <Modal>
        <form className={styles.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required row={3} onChange={bodyChangeHandler}></textarea>
            </p>
        <p>{}</p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={AuthorChangeHandler}></input>
            </p>

            <p className={styles.actions}>
                    <Link type='button' to='..'>Cancel</Link>
                    <button >Submit</button>
            </p>
        </form>
        </Modal>
    )
}

export default NewPost;


