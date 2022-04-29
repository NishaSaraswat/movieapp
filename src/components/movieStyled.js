import styled from 'styled-components'

const Title = styled.div({
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 18,
    letterSpacing: 1.5,
    color: '#FFFFFF',
    marginTop:10
    });
   const MainContainer = styled.div({
        borderBottom: '2px solid #AD7D62'
    })
    const InnerContainer = styled.div({
        display:'flex',
        flexWrap: 'wrap',
        gap: 5,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    })
export{
    Title,
    MainContainer,
    InnerContainer 
}