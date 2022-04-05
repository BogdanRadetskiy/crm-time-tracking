import { Link } from 'react-router-dom'


import styled from 'styled-components'

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 0px;
`

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`


function UserProject() {
          

     return (
    <Wrapper>
        <Button>
             <Link  to="" className="btn btn-primary">
               Project 1
             </Link>
        </Button>
        <Button>
              <Link  to="" className="btn btn-primary">
               Project 2
        </Link>
        </Button>
        <Button>
              <Link  to="" className="btn btn-primary">
               Project 3
        </Link>
        </Button>
     </Wrapper>
     );
}
export default UserProject