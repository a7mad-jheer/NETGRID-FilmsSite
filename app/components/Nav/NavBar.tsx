import Search from '../search/Search'
import ButtonAnim from '../ButtonAnimations/ButtonAnim'


export const NavBar = () => {
    return (
        <div>
            <header className='flex justify-between item-center'>
                <Search />
                <div className='flex gap-3'>
                    <ButtonAnim label='Login' className='flex-initial' link='/login'  />
                    <ButtonAnim label='Sign up' className='flex-initial ' link='/signup'/>
                </div>
            </header>
        </div>
    )
}

