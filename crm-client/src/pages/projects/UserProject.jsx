import React, {useState, useCallback, useEffect} from "react";
import { useForm } from "react-hook-form";
import '../modal/UserProject.css'
import Modal from "../modal/Modal";
import api from '../../api'
import ReactTable from 'react-table'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../modal/calendar.css'
import styled from 'styled-components'

import 'react-table/react-table.css'

const Label = styled.label`
    margin-top: 50px;
    margin: 15px 15px 15px 5px;
    font-size: 35px;
    
`
const Title = styled.h1.attrs({
    className: 'h1',
})`
    text-align: center;
`

const InputText = styled.input.attrs({
    className: 'form',
})`
    width: 250px;
    height: 8%;
    font-size: 30px;
    display: block;
`
const ButtonSave = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 20px 15px 15px 420px;
    width: 12%;
    height: 12%;
    font-size: 20px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 20px 15px 15px 5px;
    width: 12%;
    height: 12%;
    font-size: 20px;   
`
const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 0px 15px 15px 42px;
    width: 12%;
    height: 12%;
    font-size: 30px;
`
const ButtonAdd = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 0px 0px 5px 0px;
    width: 20px;
    height: 59px;
    font-size: 20px;
`
const ButtonProject = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 0px 1px 5px 42px;
    width: 12%;
    height: 12%;
    font-size: 30px;
`
const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`
const Update = styled.a.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`
const Delete = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`
function UserProject() {
    const [modalActive, setModalActive] = useState()

    const [projectsData, setProjectsData] = useState({});

    const notify = () => toast("Data save successfully");
    const showModal = () => setModalActive(true);
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    
        const handleProjectDataSave = useCallback(async (data) => {
            const { time, date } = data
            const arrayTime = time.split('/')
            const payload = { date, time: arrayTime }
    
            try {
                await api.insertProjectData(payload);
    
            } catch(err) {
                window.alert(err['validationErrors'] ? err['validationErrors'][0]['msg'] : err['errors'])
            }
        }, []);
        const updateProjectData  = (id) => () => {
       
            window.location.href = `/projects/update/${id}`
        };
    
        const deleteProjectData  = (id) => () => {
           
            if (
                window.confirm(
                    `Do tou want to delete the project ${id} permanently?`,
                )
            ) {
                api.deleteProjectsData(id)
                window.location.reload()
            }
        };
          
        const fetchData = useCallback(async () => {
    
           await api.getProjectsData().then(response => {
               setProjectsData(response.data.data)
              })
          }, []);
    
          useEffect(() => {
                   fetchData();
          },[fetchData]);
          const columns = [
            {
                Header: 'Project name',
                accessor: 'name',
            },
            {
                Header: 'Hours',
                accessor: 'time',
            },
            {
                Header: 'Date',
                accessor: 'date',
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <Update onClick={updateProjectData(props.original._id)}>Update</Update>
                            <Delete onClick={deleteProjectData(props.original._id)}>Delete</Delete>
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!projectsData.length) {
            showTable = false
        }
    return (

    <form onSubmit={handleSubmit(handleProjectDataSave)}> 
                <ButtonProject>Project</ButtonProject>
                <ButtonAdd  onClick={showModal}>+</ButtonAdd>
            
        <Wrapper>
                {showTable && (
                    <ReactTable
                        data={projectsData}
                        columns={columns}
                        defaultPageSize={10}
                        showPageSizeOptions={false}
                        minRows={0}
                    />
                )}
        </Wrapper>
         <div className='user-project'>
            <Modal active={modalActive} setActive={setModalActive}>
            <Title>Time tracking</Title>
             <Label>Hours</Label>
               <InputText
                    type="text"
                    {...register("time", { required: true, min: 0, max: 15, pattern: /[0-9]+([,.][0-9]+)?/ })}
                />
                {errors.time && <p></p>}
             <Label for="start">Date</Label>
             <InputText
                    type="date"
                    id="start" 
                    name="trip-start"
                    {...register("date", { required: true, min: 0, max: 15, pattern: /[0-9]+([,.][0-9]+)?/ })}
                  />
              <ToastContainer />
                <ButtonSave onClick={notify} type="submit">Save</ButtonSave>
                <CancelButton href={'/user/project'}>Close</CancelButton>
            </Modal>
        </div>
        <Button href={'/projects/create'}>Add Project</Button>
     </form>
    );
  };
export default UserProject;