import React, { useCallback } from 'react'
import { useForm } from "react-hook-form";
import api from '../../api'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styled from 'styled-components'

import { nameValidator } from '../../services/validation-rules'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 30px 80px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
    width: 30%;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

function ProjectsInsert() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleCreateProject = useCallback(async (data) => {
        const { name } = data
        const payload = { name }

        try {
            await api.insertProject(payload);

        } catch(err) {
            window.alert(err['validationErrors'] ? err['validationErrors'][0]['msg'] : err['errors'])
        }
    }, []);
    const notify = () => toast("Project inserted successfully");
    return (
        <Wrapper>
            <Title>Create Project</Title>
            <form onSubmit={handleSubmit(handleCreateProject)}>
                <Label>Name: </Label>
                <InputText
                    type="text"
                    {...register("name", nameValidator)}
                />
                {errors.name && <p>Please check the Name</p>}
            <div>
                <ToastContainer />
                <Button onClick={notify} type="submit">Add Project</Button>
                <CancelButton href={'user/project'}>Cancel</CancelButton>
            </div>
            </form>
       
        </Wrapper>
    )
}

export default ProjectsInsert
