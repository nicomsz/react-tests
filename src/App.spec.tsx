import { getByText, render, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
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
        const { getByText, findByText } = render( <App /> )

        const addButton = getByText('Adicionar')
        const addInput = getByPlaceholderText('input')

        await userEvent.type(addInput, 'Novo item')
        await userEvent.click(addButton)
        
        
        expect(await findByText('Novo item')).toBeInTheDocument()

    })
    it('should be able to remove the item', async () => {
        const { getByText, getAllByText, getByPlaceholderText } = render( <App /> )
        const addButton = getByText('Adicionar')
        const removeButton = getAllByText('Remover')


        userEvent.click(removeButton[0])

        await waitForElementToBeRemoved(() =>{
            return getByText('Diego')
        })
        //ou utilizando a propriedade .not =
        //await waitFor(() => {
         //   return expect(getByText('Diego')).not.toBeInTheDocument()
        //})
    })
})