import { render, screen } from '@testing-library/react'
import Home from '../page'

describe('Home', () => {
    it('renders correctly', () => {
        render(<Home />)
        expect(screen.getByText(/Documentation/i)).toBeInTheDocument()
    })
})