import { getByText, render, waitFor, screen, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'
import { List } from './list';

describe('List', () => {
    it('should render the list items',async () => {
        const { getByText, rerender, queryByText } = render( <List initialItems={['Diego', 'Mayk', 'Rodz']} />) 

        expect(getByText('Mayk')).toBeInTheDocument()
        expect(getByText('Diego')).toBeInTheDocument()
        expect(getByText('Rodz')).toBeInTheDocument()

        await rerender(<List initialItems={['Julia']} />)

        const {rerender} = render(<List />)
        expect(screen.getByText('Julia')).toBeInTheDocument()
        expect(screen.queryByText('Mayk')).not.toBeInTheDocument()

        
    });
    it('should be able to render the item', async () => {
        const { getByPlaceholderText } = render( <List initialItems={[]} /> )
        const { getByText, findByText } = render( <List initialItems={[]} /> )

        const addButton = getByText('Adicionar')
        const addInput = getByPlaceholderText('input')

        await userEvent.type(addInput, 'Novo item')
        await userEvent.click(addButton)
        
        
        expect(await findByText('Novo item')).toBeInTheDocument()

    })
    it('should be able to remove the item', async () => {
        const { getByText, getAllByText, getByPlaceholderText, queryByText } = render( <List initialItems={['Diego']} /> )
        const addButton = getByText('Adicionar')
        const removeButton = getAllByText('Remover')


        userEvent.click(removeButton[0])

        await waitForElementToBeRemoved(() =>{
            return getByText('Diego')
        })
        //ou utilizando a propriedade .not =
        //await waitFor(() => {
         //   return expect(queryByText('Diego')).not.toBeInTheDocument()
        //})
    })
})