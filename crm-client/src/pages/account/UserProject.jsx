import React, {useState} from "react";
import '../modal/UserProject.css'
import Modal from "../modal/Modal";

const UserProject = () => {
    const [modalActive, setModalActive] = useState(true)
    return (
        <div className='UserProject'>
            <main>
                <button className='open-btn' onClick={() => setModalActive(true)}>Project 1</button>
            </main>
            <main>
                <button className='open-btn' onClick={() => setModalActive(true)}>Project 2</button>
            </main>
            <main>
                <button className='open-btn' onClick={() => setModalActive(true)}>Project 3</button>
            </main>
            <Modal active={modalActive} setActive={setModalActive}>

            </Modal>
        </div>
    );
};

export default UserProject;