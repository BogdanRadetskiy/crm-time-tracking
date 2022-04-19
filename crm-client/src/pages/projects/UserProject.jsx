import React, {useState} from "react";
import '../modal/UserProject.css'
import Modal from "../modal/Modal";


import styled from 'styled-components'

const Label = styled.label`
    margin-top: 50px;
    margin: 15px 15px 15px 5px;
    font-size: 50px;
    
`
const Title = styled.h1.attrs({
    className: 'h1',
})``

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    width: 30%;
    height: 10%;
    font-size: 50px;
`
// const Button = styled.button.attrs({
//     className: `btn btn-primary`,
// })`
//     margin: 120px 15px 15px 630px;
//     width: 12%;
//     height: 12%;
//     font-size: 30px;
// `

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 120px 15px 15px 5px;
    width: 12%;
    height: 12%;
    font-size: 30px;   
`
const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 120px 15px 15px 5px;
    width: 12%;
    height: 12%;
    font-size: 30px;
`

function UserProject() {
    const [modalActive, setModalActive] = useState()

    const showModal = () => setModalActive(true);
    
    return (
        <div className='UserProject'>
            <main>
                <button className='open-btn' onClick={showModal}>Project</button>
            </main>
           
            <Modal active={modalActive} setActive={setModalActive}>
            <Title>Time tracking</Title>

             <Label>Hours</Label>
               <InputText
                    type="text"
                />
             <Label>Date</Label>
               <InputText
                    type="text"
                />

                {/* <Button>Save</Button> */}
                <CancelButton href={'/user/project'}>Close</CancelButton>
              
            </Modal>

            <Button href={'/projects/create'}>Add Project</Button>
        </div>
    );
};

export default UserProject;