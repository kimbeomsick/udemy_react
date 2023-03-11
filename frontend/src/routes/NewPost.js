import styles from './NewPost.module.css';
import Modal from '../components/Modal';
import { Link, Form, redirect } from 'react-router-dom';
import axios from 'axios';


function NewPost (){



    //<Form> 태그는 e.preventDefault() 와 모든 input 정보를 수정한다. 그리고 action()을 호출한다. 
    // method='post' 명시적으로 사용되는것 뿐이다.
    //
    return(
        <Modal>
        <Form method='post' className={styles.form} >
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required row={3} name='body' ></textarea>
            </p>
        <p>{}</p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required name='author'></input>
            </p>

            <p className={styles.actions}>
                    <Link type='button' to='..'>Cancel</Link>
                    <button >Submit</button>
            </p>
        </Form>
        </Modal>
    )
}

export default NewPost;

//Form에서 정의된 것들이 여기로 오게 된다. 
//data.request에서 request만 가져오기 위한 방법 
export async function action({request}){
    //promise객체 에서 가져오기 때문에 await를 사용한다. 
    const formData = await request.formData(); //form에서 가져온 데이터 뽑기 
    // const postData = {body:formData.get('body'), author:formData.get('author')} //이렇게 담을 수도 있고 
    const postData = Object.fromEntries(formData); //객체에 값 담기 
    axios.post("http://localhost:8080/posts", postData);

    //navigate 사용하면 경로는 이동하지만 재 랜더링이 되지 않는다. 
    return redirect('/') //함수동작이 끝난후 원하는 경로로 이동해준다. 이때 원하는경로로 이동할 경우 재 랜더링된다. 
}


