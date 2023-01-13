import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
    it('should render the list items', () => {
        const { getByText } = render( <App />) 
        expect(getByText('Mayk')).toBeInTheDocument()
        expect(getByText('Diego')).toBeInTheDocument()
        expect(getByText('Rodz')).toBeInTheDocument()
        
    });
    it('should be able to render the item', async () => {
        const { getByPlaceholderText } = render( <App /> )
        const { getByText } = render( <App /> )

        const addButton = getByText('Adicionar')
        const addInput = getByPlaceholderText('input')

        await userEvent.type(addInput, 'Novo item')
        await userEvent.click(addButton)

        expect(getByText('Novo item')).toBeInTheDocument()

    })
})