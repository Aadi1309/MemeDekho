import { Card, styled } from '@mui/material';

const StyledCard = styled(Card)({
    '&:hover': {
        transform: 'scale(1.3)',
        borderRadius: 10,
        height: 200
    }
})

const Meme = ({ meme }) => {
    return (
        <StyledCard>
            <img src={meme.data.url} alt="meme" style={{ height: 200 }} />
        </StyledCard>
    )
}

export default Meme;